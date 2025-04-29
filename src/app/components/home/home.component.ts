import { Component } from '@angular/core';
import { ListEmComponent } from "../list-em/list-em.component";

@Component({
  selector: 'app-home',
  imports: [ListEmComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
