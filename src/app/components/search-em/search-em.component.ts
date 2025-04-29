import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-em',
  imports: [FormsModule],
  templateUrl: './search-em.component.html',
  styleUrl: './search-em.component.css'
})
export class SearchEmComponent {

  searchTerm: string = '';

 constructor(private http:HttpClient) {}

  onSearch(): void {
    const apiUrl = `http://localhost:8080/Staff/search-by-id/${this.searchTerm}`;
    this.http.get(apiUrl).subscribe({
      next: (data) => {
        console.log('Search result:', data);
        
      },
      error: (err) => {
        console.error('Error occurred:', err);
      }
    });
  }

}
