console.log("Hello OOP!");

//Encapsulation
//Classes

class BankAccount {
    constructor(accountNumb3r, balance) {
        this.accountNumb3r = accountNumb3r;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

        withdraw(amount) {
            if ( this.balance >= amount) {
                this.balance -= amount;
            } else {
                console.log('Insufficient Balance');
            }
        }

        getAccountInfo() {
            return `Account Numb3r: ${this.accountNumb3r}, Balance:
            ${this.balance}`;
            console.log('Information loaded')
        }
};

const myAccount = new BankAccount('123456789', 1000);
console.log(myAccount.getAccountInfo());

myAccount.deposit(5000);
console.log(myAccountInfo());

myAccount.withdraw(6000);
console.log(myAccount)