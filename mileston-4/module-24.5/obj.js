const nayok = {
    name: 'Sakib khan',
    id: 121,
    address: 'Panchbibi,Joypurhat',
    isSingle: true,
    friends: ['Apu','Raaz','Salman','Amir','Arif'],
    movies: [{name: 'no. 1', release: '2015'},{name: 'king khan', release: 2018}],
    act: function (){
        console.log('Acting like sakib khan');
    },
    car: {
        brand: 'tesla',
        price: 5000000000,
        made: 2025,
    }
}

console.log(nayok.act);
nayok.act(); 
