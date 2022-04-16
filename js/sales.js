class Product{
    static contProduct = 0;

    constructor(name,price){
        this._idProduct = ++Product.contProduct;
        this._name = name;
        this._price = price;
    }
    get idProduct(){
        return this._idProduct;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get price(){
        this._price;
    }

    set price(price){
        this._price = price;
    }

    toString(){
        return `idProduct: ${this._idProduct}, name: ${this._name}, price: $${this._price}`;
    }
}

class Order{
    static countOrders = 0;
    
    static get MAX_PRODUCTS(){
        return 5;
    }

    constructor(){
        this._idOrder = ++Order.countOrders;
        this._products = [];
        // this._contProductAdded = 0;
    }

    get idOrder(){
        return this._idOrder;
    }

    addProduct(product){
        if (this._products.length < Order.MAX_PRODUCTS){
            this._products.push(product);
        } else{
            console.log("You can't add more products");
        }
    }

    calcTolal(){
        let totalSales = 0;
        for (let product of this._products){
            totalSales += product._price;
        }
        return totalSales;
    }

    showOrder(){
        let productOrder = '';
        for (let product of this._products){
            productOrder += '\n{' + product.toString() + '}'; 
        }
        console.log(`Order: ${this._idOrder} Total: $${this.calcTolal()}, Products: ${productOrder}`)
    }
}

let product1 = new Product('pants',200);
let product2 = new Product('shirt',100);

let order1 = new Order();
order1.addProduct(product1); // Add Relation
order1.addProduct(product2);

order1.showOrder();

let order2 = new Order;
let product3 = new Product('cinturon',50)
let product4 = new Product('shoes',250)

order2.addProduct(product1)
order2.addProduct(product2)
order2.addProduct(product3)
order2.addProduct(product4)

order2.showOrder();
