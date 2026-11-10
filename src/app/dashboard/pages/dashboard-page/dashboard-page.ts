import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { GifService } from '../../services/gif-service';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './dashboard-page.html',
})
export default class DashboardPage {


  gifService = inject(GifService);
}
