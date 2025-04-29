import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-em',
  imports: [],
  templateUrl: './delete-em.component.html',
  styleUrl: './delete-em.component.css'
})
export class DeleteEmComponent {
  selectedId: any;

  constructor(private http: HttpClient) {}

  setDeleteId(id: any) {
    this.selectedId = id;
  }

  confirmDelete() {
    if (!this.selectedId) return;

    this.http.delete(`http://localhost:8080/Staff/delete/${this.selectedId}`).subscribe({
      next: () => {
        console.log('Customer deleted');
      },
      error: err => console.error('Delete failed:', err)
    });
  }
}
