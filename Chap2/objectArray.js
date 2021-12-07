var persons = [
    {
        // the 'Ram' object
        firstname: 'Ram',
        lastname: 'Kumar',
        address: [
            'Sen Gupta Street, Ramnagar'
        ]
    },
    {
        // the 'Sujay' object
        firstname: 'Sujay',
        lastname: 'Kumar',
        addresses: [
            'Nanjappa Street, coimbatore',
            'Sen Gupta Street, Ramnagar'
        ],
        greet: function() {
            return 'Hello !';
        }
    },

]

console.log(persons);
console.log(persons[1].greet());