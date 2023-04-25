function getData(number, page) {
    const url = "http://localhost:3001/api/customers?number=" + number + "&page=" + page;

    return new Promise((resolve, reject) => {
        $.get(url, {}).done(function (data) {
            resolve(data.result);
        });
    });
}

async function getCustomersOnTable(number, page) {
    const customers = await getData(number, page);

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
    const urlParams = new URLSearchParams(window.location.search);
    let number = urlParams.get("number") || 10;
    let page = urlParams.get("page") || 1;

    getCustomersOnTable(number, page);

    const prevButton = document.querySelector("#prevButton");
    const nextButton = document.querySelector("#nextButton");

    prevButton.addEventListener("click", function () {
        if (page > 1) {
            page--;
        }
        updateURLParams(number, page);
    });

    nextButton.addEventListener("click", function () {
        page++;
        updateURLParams(number, page);
    });
});

function updateURLParams(number, page) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("number", number);
    urlParams.set("page", page);
    window.location.search = urlParams.toString();
}

function deleteCustomer(id) {
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