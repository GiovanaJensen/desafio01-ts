import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import {AdminAccount } from './class/AdminAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100);
peopleAccount.getAccountNumber();
peopleAccount.getBalance();
peopleAccount.getDoc_id();
peopleAccount.getName();
peopleAccount.getStatus();
peopleAccount.setBalance(200);
peopleAccount.setStatus(true);
peopleAccount.validateStatus();
peopleAccount.withdraw(10);

const companyAccount:CompanyAccount = new CompanyAccount("DIO", 12);
companyAccount.deposit(100);
companyAccount.getAccountNumber();
companyAccount.getBalance();
companyAccount.getName();
companyAccount.getStatus();
companyAccount.setBalance(200);
companyAccount.setStatus(true);
companyAccount.validateStatus();
companyAccount.withdraw(10);
companyAccount.getLoan(1200);

const adminAccount: AdminAccount = new AdminAccount("Noah", 32);
adminAccount.deposit(100);
adminAccount.getAccountNumber();
adminAccount.getBalance();
adminAccount.getName();
adminAccount.getStatus();
adminAccount.setBalance(200);
adminAccount.setStatus(true);
adminAccount.validateStatus();
adminAccount.withdraw(10);