import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit{

  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }



  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   console.log('antes do metodo onAccountAdded');
  //   this.accounts.push(newAccount);
  //   console.log('depois do metodo onAccountAdded');
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   console.log('antes do metodo onStatusChanged');
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  //   console.log('depois do metodo onStatusChanged');
  // }
}
