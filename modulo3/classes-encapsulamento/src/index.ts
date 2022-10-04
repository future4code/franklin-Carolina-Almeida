//exercício 1
//a) ações que devem ser executadas ao criarmos uma instância, constuctor(){}

//b) chamada 1 vez
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }
//c) this, getters e setters

//exercício 2

class Transaction {
    private description: string;
    private value: number;
    private date: string;
  
    constructor(description: string, value: number, date: string) {
        this.description: string;
        this.value: number;
        this.date: string
    }
}

//exercício 3

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
  }
