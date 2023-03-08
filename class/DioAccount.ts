export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 40
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setBalance = (balance: number) => {
    this.balance = balance;
  }

  setStatus = (status:boolean) => {
    this.status = status;
  }

  getName = (): string => {
    return this.name
  }

  getAccountNumber = ():number => {
    return this.accountNumber;
  }

  getBalance = ():number => {
    return this.balance;
  }

  getStatus = ():boolean => {
    return this.status;
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value;
      console.log(`Você depositou! Seu saldo atual é ${this.balance}`);
      if(this.balance > 0){
        this.status = true;
      }
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus()){
      if(this.balance - value >= 0){
        this.balance -= value;
        console.log(`Você sacou! Seu saldo atual é ${this.balance}`);
      }else{
        console.log("Saldo indisponível");
      }
      
    }
   
  }

   validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
