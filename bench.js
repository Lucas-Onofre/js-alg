class BankAccount {  
    constructor() {
        this.balance = 0;
    }

    checkBalance() {
        return this.balance;
    }
    
    deposit(amount) {
        this.balance += amount;
    }
    
    withdraw(amount) {
        this.balance -= amount;
    }
}

class SavingAccount extends BankAccount {
    constructor() {
        super();
        this.interest = 0.02;
    }

    addInterestByRate() {
        this.balance += this.balance * this.interest;
    }
}

class CheckingAccount extends BankAccount {
    constructor() {
        super();
        this.fee = 0.01;
    }

    deductFee() {
        this.balance -= this.fee;
    }
}