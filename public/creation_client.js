function submitForm() {
    var email = document.getElementById("email").value;
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var company = document.getElementById("company").value;
    var country = document.getElementById("country").value;

    var data = {
        email: email,
        first: first,
        last : last,
        company : company,
        country : country
    };

    fetch('http://localhost:3001/api/addCustomer', {
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