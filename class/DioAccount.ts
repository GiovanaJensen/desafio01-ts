export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 40
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
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

  getBalance = (): void => {
    console.log(this.balance)
  }

   validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
