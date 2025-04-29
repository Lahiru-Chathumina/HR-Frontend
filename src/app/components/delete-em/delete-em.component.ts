import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-em',
  imports: [],
  templateUrl: './delete-em.component.html',
  styleUrl: './delete-em.component.css'
})
export class DeleteEmComponent {

  constructor(private http:HttpClient){

  }
 
 
   confirmDelete(id:any){
       this.http.delete(`http://localhost:8080/Staff/delete/${id}`).subscribe(data=>{
 
       })
 }
}
