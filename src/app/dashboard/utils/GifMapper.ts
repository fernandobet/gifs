import { IGif } from "../interfaces/IGif";
import { GifData, IGIFResponse } from "../interfaces/IGifResponse";

export class  GifUtils{

  static toGif(gifResponse:GifData):IGif{
    return {
      id :gifResponse.id,
      url:gifResponse?.images?.original?.url
    }
  }

  static toGifArray(gifData:GifData[]):IGif[]{
    return gifData.map(x=> this.toGif(x))
  }

  static getFromCache():Record<string,IGif[]>{
    const fromCache = localStorage.getItem('GifsCache');
    if(fromCache){
      const cacheParsed = JSON.parse(fromCache);
      return cacheParsed;
    }
    return {};
  }

}
