class Person{
    static countPerson = 0;

    constructor(name, lastname, age){
        this._name = name;
        this._lastname = lastname;
        this._age = age;
        this._idPerson = ++Person.countPerson;
    }
    get idPerson(){
        return this._idPerson
    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    get lastname(){
        return this._lastname;
    }
    set lastname(lastname){
        this._lastname = lastname;
    }
    get age(){
        return this._age;
    }
    set age(age){
        this._age = age;
    }
    personalData(){
        return 'Person Id: ' + this._idPerson + ', ' + this._name + ' ' + this._lastname + ', Age: ' + this.age;
    }
    toString(){
        // Polimorfism Applied
        return this.personalData()
    }
}

class Employee extends Person{
    static countEmployee = 0;

    constructor(name, lastname, age,salary){
        super(name, lastname, age);
        this._salary = salary;
        this._idEmployee = ++Employee.countEmployee;
    }
    get idEmployee(){
        return this._idEmployee;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary = salary;
    }
    personalData(){
        return 'Employee Id: ' + this._idEmployee + ', ' + super.personalData() + ' Salary: ' + this.salary;
    }
}

class Client extends Person{
    static countClient = 0;

    constructor(name, lastname, age){
        super(name, lastname, age);
        this._idClient = ++Client.countClient;
        this._registerDate = new Date().toLocaleDateString();
    }
    get idClient(){
        return this._idClient;
    }
    get registerDate(){
        return this._registerDate;
    }
    set registerDate(date){
        this._registerDate = date;
    }
    personalData(){
        return `Register Date: ${this._registerDate} Client Id: ${this._idClient}, ${super.personalData()}`;
    }
}

let person1 = new Person('Juan', 'Perez', 30)
person1.age = 32;
console.log(person1.toString())

let employee1 = new Employee('Sana','Dista',40,'2500USD')
employee1.lastname = 'Distance'
employee1.salary = '2000USD'
console.log(employee1.toString())

let client1= new Client('Joseph','Smith',30)
client1.registerDate = '10/02/2021';
console.log(client1.toString())