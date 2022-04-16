class dispEntry {
    constructor(typeEntry,brand){
        this._typeEntry = typeEntry;
        this._brand = brand;
    }
    get typeEntry(){
        return this._typeEntry;
    }
    set typeEntry(typeEntry){
        this._typeEntry = typeEntry;
    }
    get brand(){
        return this._brand;
    }
    set brand(brand){
        this._brand = brand;
    }
}

class Mouse extends dispEntry {
    static countMouses = 0;

    constructor(typeEntry,brand){
        super(typeEntry,brand);
        this._idMouse = ++Mouse.countMouses;
    }
    get idMouse(){
        return this._idMouse;
    }

    toString(){
        return `[idMouse: ${this._idMouse}, typeEntry: ${this._typeEntry}, brand: ${this._brand}]`
    }
}

// Test Mouse Class
let mouse1 = new Mouse('usb','hp');
console.log(mouse1.toString());

class Keyboard extends dispEntry{
    static countKeyboards = 0;

    constructor(typeEntry, brand){
        super(typeEntry, brand);
        this._idKeyboard = ++Keyboard.countKeyboards;
    }

    get idKeyboard(){
        return this._idKeyboard;
    }

    toString(){
        return `[idKeyboard: ${this._idKeyboard}, typeEntry: ${this._typeEntry}, brand: ${this._brand}]`
    }

}

// Test Keyboard Class
let keyboard1 = new Keyboard('wifi','dell');
keyboard1.typeEntry = 'bluetooh'
console.log(keyboard1.toString());

class Monitor{
    static countMonitors = 0;

    constructor(brand,size){
        this._idMonitor = ++Monitor.countMonitors;
        this._brand = brand;
        this._size = size;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get brand(){
        return this._brand;
    }
    set brand(brand){
        this._brand = brand;
    }

    get size(){
        return this._size;
    }
    set size(size){
        this._size = size;
    }

    toString(){
        return `[idMonitor: ${this._idMonitor}, brand: ${this._brand}, size: ${this._size}]`
    }
}

// Test monitor Class
let monitor1 = new Monitor('acer',14);
monitor1.size = 17
console.log(monitor1.toString())

class Computer{
    static countComputers = 0;

    constructor(name, monitor, mouse, keyboard){
        this._idComputer = ++Computer.countComputers;
        this._name = name;
        this._monitor = monitor;
        this._Keyboard = keyboard;
        this._mouse = mouse;
    }
    get idComputer(){
        return this._idComputer;
    }

    get name(){
        return this._name;
    }
    
    get monitor(){
        return this._monitor;
    }

    get mouse(){
        return this._mouse;
    }

    get keyboard(){
        return this._Keyboard;
    }
    toString(){
    return `Computer ${this._idComputer}: ${this._name} 
    Monitor: ${this._monitor}
    Mouse: ${this._mouse}
    Keyboard: ${this._Keyboard}`
    }
}

// Test computer Class
let computer1 = new Computer('armada',monitor1,mouse1,keyboard1);
console.log(computer1.toString())

class Order{
    static countOrders = 0;
    
    constructor(){
        this._idOrder = ++Order.countOrders;
        this._computers = []
    }

    get idOrder(){
        return this._idOrder;
    }
    addComputer(computer){
        this._computers.push(computer)
    }

    showOrder(){
        let computesOrder = ''
        for (let computer of this._computers){
            computesOrder += '\n' + computer.toString();
        }
        console.log(`Order ${this._idOrder}, Computers: ${computesOrder}`)
    }
}
let monitor2 = new Monitor('dell',14);
let keyboard2 = new Keyboard('usb','dell');
let mouse2 = new Mouse('bluetooh','dell');
let computer2 = new Computer('dell',monitor2,mouse2,keyboard2);
console.log(computer2.toString())

let order1 = new Order();
order1.addComputer(computer1);
order1.addComputer(computer2);
order1.showOrder();

let order2 = new Order();
order2.addComputer(computer2);
order2.addComputer(computer1);
order2.showOrder();