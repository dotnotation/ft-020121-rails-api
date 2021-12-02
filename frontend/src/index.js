document.addEventListener("DOMContentLoaded", () => {
    addCreateForm();
    fetchStores();
})


function fetchStores(){
    const storesContainer = document.getElementById("stores-container")

    fetch("http://localhost:3000/api/v1/stores")
    .then(r => r.json())
    .then(data => {
        data.forEach(function(store){
            storesContainer.innerHTML += `<li>${store.name}</li>`
        })
    })
    .catch(err => console.warn(err))
}

function addCreateForm(){
    const formContainer = document.getElementById("form-container");
    const form = document.createElement('form');
    form.innerHTML = `<input placeholder='name' type='text'/><br><input value='Create Store' type='submit'>`;
    // const input = document.createElement('input');
    // input.setAttribute('type', 'text');
    // input.type = 'text';
    formContainer.append(form);

    // form.addEventListener("submit", handleSubmit())
}