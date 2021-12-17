class StoreForm {
    constructor(){
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEditDelete = this.handleEditDelete.bind(this)
    }

    addCreateForm(){
        const formContainer = document.getElementById("form-container");
        const form = document.createElement('form');
        form.innerHTML = `<input id="name-input" placeholder='name' type='text'/><br><input id="store-submit" value='Create Store' type='submit'/>`
        // const input = document.createElement('input');
        // input.setAttribute('type', 'text')
        // input.type = "text"
        formContainer.append(form)
    
        form.addEventListener("submit", this.handleSubmit)
        // because this is a method on the object and not a function, you have to call 'this' on handleSubmit
    }

    // making arrow function since it's passed into an eventListener so you don't have to use the constructor above
    // a property set to an anonymous function
    // using this arrow function will define the context of this because of when it is defined 
    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     const nameInput = event.target[0]
    //     if (editMode){
    //         shoppeAdapter.editStore(editMode, nameInput)
    //     } else {
    //         shoppeAdapter.createStore(nameInput)
    //     }  
    // }

    // if you want to use the constructor, this is the code you would use if you don't want to use bind
    // either way is acceptable 
    handleSubmit(event) {
        event.preventDefault()
        const nameInput = event.target[0]
        if (editMode){
            shoppeAdapter.editStore(editMode, nameInput)
        } else {
            shoppeAdapter.createStore(nameInput)
        }    
    }

    listenEditDelete(){
        const storesContainer = document.getElementById("stores-container");
        storesContainer.addEventListener("click", this.handleEditDelete)
    }
    
    handleEditDelete(e){
        const li = e.target.parentElement
        const action = e.target.dataset.action
        switch (action) {
            case "delete":
                shoppeAdapter.deleteStore(li)
                break;

            case "edit":
                // editmode -> li
                editMode = li
                // button -> updateStore
                document.getElementById('store-submit').value = "Update"
                // populate input with name of store
                document.getElementById('name-input').value = li.children[0].innerText
                // submit edit button, update store (in different function)
                break;

            case "display":
                if (currentProducts) currentProducts.remove()
                console.log("Displaying Products", li.dataset.id)
                const s = Store.all.find(s => s.id == li.dataset.id)
                s.renderProducts()
                break;

            case "cart":
                console.log("Adding Item to Cart", e.target.parentElement.dataset.id)
                
                break;

            default:
                break;
        }
        // if (action === "delete"){
        //     // delete this store from backend
            
        // } else if (action === "edit") {
            // // editmode -> li
            // editMode = li
            // // button -> updateStore
            // document.getElementById('store-submit').value = "Update"
            // // populate input with name of store
            // document.getElementById('name-input').value = li.children[0].innerText
            // // submit edit button, update store (in different function)
        // } else if (action === "display") {
        //     if (currentProducts) currentProducts.remove()
        //     console.log("Displaying Products", li.dataset.id)
        //     const s = Store.all.find(s => s.id == li.dataset.id)
        //     s.renderProducts()
        // } else if 
    }
}