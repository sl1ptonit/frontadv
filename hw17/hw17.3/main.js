
class BankAccount  {
    constructor(account) {
        this.account = account;
    }

    getBalance() {
        return this.account;
    }

    deposit(amount) {
        this.account = this.account + amount;
        return this.account;
    }

    withdraw(amount) {
        this.account = this.account - amount;
        return this.account;
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300
