// Add our product class
class Product {
    static all = []

    constructor({id, name, description, price, store_id, stock}){
        // passing in an object as it is a better way to make sure things get passed in the correct order
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.store_id = store_id
        this.stock = stock

        Product.all.push(this)
    }

    render(){
        return(
            `<li data-id=${this.id}>${this.name} - ${this.price} <button data-action="cart">Add to Cart</button></li>`
        )
    }
}