var idCustomer;
const testEmail = /^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}$/i;

function getData(id) {
    let url = "http://localhost:3001/api/customer?id=" + id;

    return new Promise((resolve, reject) => {
        $.get(url, {}).done(function (data) {
            resolve(data);
        });
    });
}

async function remplirChampsCustomer(id) {
    const customer = await getData(id);

    let email = document.getElementById("email");
    let first = document.getElementById("first");
    let last = document.getElementById("last");
    let company = document.getElementById("company");
    let country = document.getElementById("country");

    email.value = customer.email;
    first.value = customer.first;
    last.value = customer.last;
    company.value = customer.company;
    country.value = customer.country;
}

window.addEventListener('DOMContentLoaded', () => {
    var str = window.location.href;
    var url = new URL(str);
    idCustomer = url.searchParams.get("id");
    if (idCustomer != null)
        remplirChampsCustomer(idCustomer);
});

function submitForm() {
    var email = document.getElementById("email").value;
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var company = document.getElementById("company").value;
    var country = document.getElementById("country").value;

    if (!email || !first || !last || !company || !country) {
        alert("Informations manquantes !");
    } else if (!testEmail.test(email)) {
        alert("Mauvais format de l'email");
    } else {
        var data = {
            email: email,
            first: first,
            last: last,
            company: company,
            country: country
        };

        fetch('http://localhost:3001/api/modifCustomer?id=' + idCustomer, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Réponse de l\'API:', data);
            })
            .catch(error => {
                console.error('Erreur:', error);
            });
    }
}