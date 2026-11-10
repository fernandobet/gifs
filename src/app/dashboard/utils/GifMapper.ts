import { IGif } from "../interfaces/IGif";
import { GifData, IGIFResponse } from "../interfaces/IGifResponse";

export class  GifMapper{

  static toGif(gifResponse:GifData):IGif{
    return {
      id :gifResponse.id,
      url:gifResponse?.images?.original?.url
    }
  }

  static toGifArray(gifData:GifData[]):IGif[]{
    return gifData.map(x=> this.toGif(x))
  }

}
