import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(30);
peopleAccount.withdraw(40);
peopleAccount.withdraw(40);

const companyAccount:CompanyAccount = new CompanyAccount("DIO", 12);
companyAccount.getLoan(1200);