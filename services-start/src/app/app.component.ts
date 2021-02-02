import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  onAccountAdded(newAccount: {name: string, status: string}) {
    console.log('antes do metodo onAccountAdded');
    this.accounts.push(newAccount);
    console.log('depois do metodo onAccountAdded');
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    console.log('antes do metodo onStatusChanged');
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    console.log('depois do metodo onStatusChanged');
  }
}
