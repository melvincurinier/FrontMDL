function getData() {
    const url = "http://localhost:3001/api/customers";
    
    return new Promise((resolve, reject) => {
        $.get(url, {}).done(function (data) {
            resolve(data.result);
        });
    });
}

async function getCustomersOnTable(){
    const customers = await getData();
    
    const tbody = document.querySelector("#bodyTable");
    customers.forEach(element => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${element.id}</td>
        <td>${element.email}</td>
        <td>${element.first}</td>
        <td>${element.last}</td>
        <td>${element.company}</td>
        <td>${element.country}</td>
        <td>${element.created_at}</td>
        <td><button onclick="location.href='./modification_client.html?id=${element.id}'">Modifier</button></td>
        <td><button onclick="deleteCustomer(${element.id})">Supprimer</button></td>
        `;
        tbody.appendChild(tr);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    getCustomersOnTable();
});

function deleteCustomer(id){
    fetch('http://localhost:3001/api/deleteCustomer?id=' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log('Réponse de l\'API:', data);
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
    window.location.reload();
}