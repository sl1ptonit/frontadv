

let data = {
    contacts: [
        {
            name : 'Vasa',
            phone : '12345678',
            email : 'vasa@gmail.com',
        },
        {
            name : 'Peta',
            phone : '2323678',
            email : 'peta@gmail.com',
        },
        {
            name : 'Kola',
            phone : '886544343',
            email : 'kola@gmail.com',
        },
    ],

    addContact: function(data) {
        this.contacts.push(data);
    },

    findByName: function(name) {
        const filtered = this.contacts.filter(function (item) {
            return item.name === name;
        })

        return filtered;
    }
}