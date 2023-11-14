let input = document.getElementById('input');
let btn = document.getElementById('red');
let divUsers = document.getElementById('users');

btn.onclick = () =>{
    if(input.value == 1){
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .then(data => {
                divUsers.innerHTML += `<h1>${data.name}</h1>`
                divUsers.innerHTML += `<h1>${data.username}</h1>`
                divUsers.innerHTML += `<h1>${data.phone}</h1>`
        })
    } else if(input.value == 2){
        fetch("https://jsonplaceholder.typicode.com/users/2")
        .then(response => response.json())
        .then(data =>{
                divUsers.innerHTML += `<h1>${data.name}</h1>`
                divUsers.innerHTML += `<h1>${data.username}</h1>`
                divUsers.innerHTML += `<h1>${data.phone}</h1>`
        })
    } else if(input.value == 3){
        fetch("https://jsonplaceholder.typicode.com/users/3")
        .then(response => response.json())
        .then(data =>{
                divUsers.innerHTML += `<h1>${data.name}</h1>`
                divUsers.innerHTML += `<h1>${data.username}</h1>`
                divUsers.innerHTML += `<h1>${data.phone}</h1>`
        })
    } else if (input.value == 4){
        fetch("https://jsonplaceholder.typicode.com/users/4")
        .then(response => response.json())
        .then(data =>{
                divUsers.innerHTML += `<h1>${data.name}</h1>`
                divUsers.innerHTML += `<h1>${data.username}</h1>`
                divUsers.innerHTML += `<h1>${data.phone}</h1>`
        })
    } else if(input.value == 5){
        fetch("https://jsonplaceholder.typicode.com/users/5")
        .then(response => response.json())
        .then(data =>{
                divUsers.innerHTML += `<h1>${data.name}</h1>`
                divUsers.innerHTML += `<h1>${data.username}</h1>`
                divUsers.innerHTML += `<h1>${data.phone}</h1>`
        })
    } else if(input.value == 6){
        fetch("https://jsonplaceholder.typicode.com/users/6")
        .then(response => response.json())
        .then(data =>{
                divUsers.innerHTML += `<h1>${data.name}</h1>`
                divUsers.innerHTML += `<h1>${data.username}</h1>`
                divUsers.innerHTML += `<h1>${data.phone}</h1>`
        })
    } else if(input.value == 7){
        fetch("https://jsonplaceholder.typicode.com/users/7")
        .then(response => response.json())
        .then(data =>{
                divUsers.innerHTML += `<h1>${data.name}</h1>`
                divUsers.innerHTML += `<h1>${data.username}</h1>`
                divUsers.innerHTML += `<h1>${data.phone}</h1>`
        })
    } else if(input.value == 8){
        fetch("https://jsonplaceholder.typicode.com/users/8")
        .then(response => response.json())
        .then(data =>{
                divUsers.innerHTML += `<h1>${data.name}</h1>`
                divUsers.innerHTML += `<h1>${data.username}</h1>`
                divUsers.innerHTML += `<h1>${data.phone}</h1>`
        })
    } else if(input.value == 9){
        fetch("https://jsonplaceholder.typicode.com/users/10")
        .then(response => response.json())
        .then(data =>{
                divUsers.innerHTML += `<h1>${data.name}</h1>`
                divUsers.innerHTML += `<h1>${data.username}</h1>`
                divUsers.innerHTML += `<h1>${data.phone}</h1>`
        })
    } else{
        document.write('Только числа от 1 до 10')
    }
}
