import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-em',
  
  imports: [FormsModule,CommonModule],
  templateUrl: './update-em.component.html',
  styleUrl: './update-em.component.css'
})
export class UpdateEmComponent {


  public em:any ={
    name:"",
    email:"",
    addres:"",
    Salary:""

  }

constructor(private http:HttpClient){
 
  }

  updateEm(){
    this.http.put("http://localhost:8080/Staff/add",this.em).subscribe(res=>{})
  }

}
