import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { em } from '../../model/em';
import { AddEmComponent } from "../add-em/add-em.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-em',
  imports: [AddEmComponent,CommonModule],
  templateUrl: './list-em.component.html',
  styleUrl: './list-em.component.css'
})
export class ListEmComponent {
public emlist:any =[]
  constructor(private http:HttpClient){
    this.loardEmpy();
  }
   loardEmpy(){
    this.http.get<em[]>("http://localhost:8080/Staff/get-all").subscribe(data=>{
      this.emlist=data;
      console.log(data)
    })
   }

   

   deleteEm(id:any){
    this.http.delete(`http://localhost:8080/Sttaf/delete/${id}`).subscribe(data=>{

    })
   }

}
