function getData(number, page) {
    const url = "http://localhost:3001/api/customers?number="+ number + "&page=" + page;
    
    return new Promise((resolve, reject) => {
        $.get(url, {}).done(function (data) {
            resolve(data.result);
        });
    });
}

async function getCustomersOnTable(number, page){
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
        <button onclick="location.href='./modification_client.html?id=${element.id}'">Modifier</button>
        `;
        tbody.appendChild(tr);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const number = urlParams.get('number');
    const page = urlParams.get('page');
    getCustomersOnTable(number, page);
});