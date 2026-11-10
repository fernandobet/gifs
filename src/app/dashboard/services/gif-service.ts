import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { computed, effect, inject, Service, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GifData, IGIFResponse } from '../interfaces/IGifResponse';
import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';
import { IGif } from '../interfaces/IGif';
import { GifUtils } from '../utils/GifMapper';

@Service()
export class GifService {


  private http = inject(HttpClient);
  private envs = environment;
  private httpParams = new HttpParams()
  .set('api_key',this.envs.apiKey)
  .set('offset',0)
  .set('limit',25)
  trendingCache = signal<IGif[]|null>(null);
  searchCache = signal<Record<string,IGif[]>>(GifUtils.getFromCache());
  searchCacheEffect= effect(()=>{
    console.log(this.searchCache());
    if(this.searchCache()==null)return;
    const searchToObject = JSON.stringify(this.searchCache());
    localStorage.setItem('GifsCache',searchToObject);
  });
  searchKeys= computed(()=> Object.keys(this.searchCache()));



  getTrending(): Observable<IGif[]> {
    if(this.trendingCache()){
      return of(this.trendingCache()!);
    }
    return this.http.get<IGIFResponse>(`${this.envs.baseurl}/v1/gifs/trending`, {
      params:this.httpParams
    }).pipe(
      delay(800),
      map((response) => GifUtils.toGifArray(response.data)),
      tap((data) => this.trendingCache.set(data)  ),
      catchError((error: HttpErrorResponse) => {
        console.error('Error to executing call', error.status, error.message);
        return throwError(() => new Error('Error http'))
      })
    );
  }

  searchBy(query:string):Observable<IGif[]>{
    if(this.searchCache()[query]){
      return of(this.searchCache()[query]);
    }
    console.log('Searching ....')
    return this.http.get<IGIFResponse>(`${this.envs.baseurl}/v1/gifs/search`,{
      params:{
        api_key:this.envs.apiKey,
        q:query,
        offset:0,
        limit:25,
      }
    }).pipe(
      map((response)=> GifUtils.toGifArray(response.data)),
      tap((data)=> this.searchCache.update(info=> ({...info,[query]:data}))),
      catchError((error:HttpErrorResponse)=>{
        console.error('Error in searching',error.status,error.message);
        return throwError(()=> new Error('Error al consultar datos') )
      })
    );
  }

  getByKeyInCache(key:string):IGif[]{
    if(this.searchCache()[key]){
      return this.searchCache()[key];
    }
    return [];
  }


}
