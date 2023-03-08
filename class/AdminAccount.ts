import {DioAccount} from "./DioAccount";

export class AdminAccount extends DioAccount{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    deposit = (value:number):void => {
        if(this.validateStatus()){
            let balance = this.getBalance();
            balance = balance + value + 10;
            this.setBalance(balance);
            console.log(`Você depositou! Seu saldo atual é ${balance}`);
            if(balance > 0){
              this.setStatus(true);
            }
          }
    }
}