import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

     //It declares that the 'registrationForm' represents the reactiveForm  
     registrationForm: FormGroup;
     url ="http://localhost:3000/employeeData.json" ;
     constructor(private fb: FormBuilder, private http: HttpClient){
            //This serves as a container that demonstrate how to initialse the reactive form
            this.registrationForm = this.fb.group({
               name: ['', Validators.required],
              // password:['',Validators.required],
               email: ['',Validators.required, Validators.email],
               //confirmEmail: ['',Validators.required]
            });
     }

       onSubmit(){
        //The if statement chcks if the data added is valid then if true that will be added to our json file using the (http.post)
         if(this.registrationForm.valid){
          console.log("HELLLLLLLLLLLLLLLLLLLLLLLLL");
           this.http.post(this.url,this.registrationForm.value).subscribe((response)=>{
            console.log("Data added successfully", response);
           },
           (error)=>{
            console.log("Error adding data",error);
           }
          
          );
         }
       }//end of function
}
