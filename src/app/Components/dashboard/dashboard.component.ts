import { Component } from '@angular/core';
import { EmpDataService } from 'src/app/Services/emp-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
   empData : any[] = [];
  //Inject a service
  constructor(private empService: EmpDataService ){}

  ngOnInit(): void{
    this.gettingEmpData();
  }


  //Function to get eveything we have on our service
    gettingEmpData(){
      this.empService.getEmployees().subscribe(
        (response)=>{
          this.empData = response;
          console.log(this.empData);
        },
        (error)=>{
          console.error('Error loading employee details:', error);
        }
      )
    }
}
