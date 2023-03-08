import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if(this.validateStatus()){
      let balance = this.getBalance()
      balance += value;
      this.setBalance(balance);
      console.log(`Você recebeu um empréstimo! Seu saldo atual é ${balance}`)
    }else{
      console.log(`Status negativo`)
    }
  }
}
