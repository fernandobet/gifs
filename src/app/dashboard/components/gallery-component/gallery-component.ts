import { Component, input, signal } from '@angular/core';
import { IGif } from '../../interfaces/IGif';

@Component({
  selector: 'app-gallery-component',
  imports: [],
  templateUrl: './gallery-component.html',
})
export class GalleryComponent {

  gifs = input<IGif[]|[]|undefined|null>([]);
  loading = input<boolean>(false);
  error = input<string>('');
}
