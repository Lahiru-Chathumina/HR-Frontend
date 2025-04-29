import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-em',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-em.component.html',
  styleUrl: './add-em.component.css'
})
export class AddEmComponent {

  public em:any ={
    name:"",
    email:"",
    addres:"",
    Salary:""

  }

constructor(private http:HttpClient){
 
  }

  addStaff(){
    this.http.post("http://localhost:8080/Staff/add",this.em).subscribe(res=>{})
  }

}
