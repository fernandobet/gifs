import { Component, inject } from '@angular/core';
import { GifService } from '../../services/gif-service';
import { rxResource} from '@angular/core/rxjs-interop';
import { GalleryComponent } from '../../components/gallery-component/gallery-component';

@Component({
  selector: 'app-trending-page',
  imports: [GalleryComponent],
  templateUrl: './trending-page.html',
})
export default class TrendingPage {


  gifService = inject(GifService);


  trendingResource = rxResource({
    stream:()=>{

      return this.gifService.getTrending();
    }
  })
}
