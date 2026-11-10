import { Component, effect, inject, signal } from '@angular/core';
import { GalleryComponent } from '../../components/gallery-component/gallery-component';
import { InputSearch } from '../../components/input-search/input-search';
import { rxResource } from '@angular/core/rxjs-interop';
import { GifService } from '../../services/gif-service';
import { of } from 'rxjs';

@Component({
  selector: 'app-search-page',
  imports: [GalleryComponent, InputSearch],
  templateUrl: './search-page.html',
})
export default class SearchPage {

  searchValue = signal<string>('');

  searchEffect=effect(()=>console.log(this.searchValue()));
  gifService = inject(GifService);

  searchResource = rxResource({
    params:()=>({search:this.searchValue()}),
    stream:({params})=>{
      if(!params.search)return of(null);
      return this.gifService.searchBy(params.search);
    }
  })
}
