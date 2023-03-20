
function remplirChampsCustomer(customer){
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