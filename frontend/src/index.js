let editMode = false
let currentProducts = false
const shoppeAdapter = new ShoppeAdapter("http://localhost:3000")
const storeForm = new StoreForm
// we will have access to all of the above variables through all of the JS files because they are global variables 

document.addEventListener("DOMContentLoaded", () => {
    storeForm.addCreateForm();
    shoppeAdapter.getStores();
    storeForm.listenEditDelete();
})