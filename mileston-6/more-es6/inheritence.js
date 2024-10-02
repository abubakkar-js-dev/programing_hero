class Vehicle{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('This is a',this.name);
    }
}

class Bus extends Vehicle{
    constructor(name,price,seat,tickePrice){
        super(name,price);
        this.seat = seat;
        this.tickePrice = tickePrice;
    }

}


class Truck extends Vehicle{
    constructor(name,price,loadCapability){
        super(name,price);
        this.loadCapability = loadCapability;
    }
}