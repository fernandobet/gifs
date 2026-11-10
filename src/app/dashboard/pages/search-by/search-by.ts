import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifService } from '../../services/gif-service';
import { GalleryComponent } from '../../components/gallery-component/gallery-component';

@Component({
  selector: 'app-search-by',
  imports: [GalleryComponent],
  templateUrl: './search-by.html',
})
export default class SearchBy {

  activatedRoute = inject(ActivatedRoute);

  keyParameter = toSignal(this.activatedRoute.paramMap
  .pipe(
    map((p)=>p.get('key'))
  ));

  gifService = inject(GifService);

}
