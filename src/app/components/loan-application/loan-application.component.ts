import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiResponseModel, Application, Loan } from '../../model/application.model';
import { MasterService } from '../../service/master.service';
@Component({
  selector: 'app-loan-application',
  imports: [ FormsModule ],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css'
})
export class LoanApplicationComponent {

  Application: Application =new Application();
  loan: Loan = new Loan();

  masterSrv = inject(MasterService)

  addLoan(){
    const strobj= JSON.stringify(this.loan);
    const newobj=JSON.parse(strobj);
    this.Application.Loans.unshift(newobj);
    this.loan = new Loan();
  }

  onSubmit () {
    this.masterSrv.addNewApplication(this.Application).subscribe((result: ApiResponseModel) => {
      if (result.result) {
        alert("Loan Application saved successfully")
      }
      else {
        alert(result.messege);
      }
    },
    (error: any) => {
      console.log(error);
  })
  }

}
