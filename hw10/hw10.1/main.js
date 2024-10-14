
let user = {
    name : 'UserName',
    age: 50,
    placeBurn: 'SomeCity',
    getUserInfo: function() {
        return `${this.name} ${this.age} ${this.placeBurn}`;
    }
}

console.log(user.getUserInfo());


