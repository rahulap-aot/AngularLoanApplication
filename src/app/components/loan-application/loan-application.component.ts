import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Application, Loan } from '../../model/application.model';
@Component({
  selector: 'app-loan-application',
  imports: [ FormsModule ],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css'
})
export class LoanApplicationComponent {

  Application: Application =new Application();
  loan: Loan = new Loan();

  addLoan(){
    const strobj= JSON.stringify(this.loan);
    const newobj=JSON.parse(strobj);
    this.Application.Loans.unshift(newobj);
  }

}
