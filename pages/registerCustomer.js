function registerCustomer() {
    fetch(API_URL)
        .then(response => response.json())
        .then(response => {
            console.log(response.data[0])
            document.getElementById('name').innerHTML = response.data[0].name
            document.getElementById('email').innerHTML = response.data[0].email
            document.getElementById('phone').innerHTML = response.data[0].phone
            document.getElementById('address').innerHTML = response.data[0].address
            document.getElementById('county').innerHTML = response.data[0].county
            document.getElementById('number').innerHTML = response.data[0].number
            document.getElementById('zipcode').innerHTML = response.data[0].zipcode
//map
            /*response.data.map((data, index) => {
            /*                return  `
                    <p>
                        <strong>Nome</strong>
                        <span >${data.name}</span>
                    </p>
                    <p>
                        <strong>E-mail</strong>
                        <span >${data.email}</span>
                    </p>
                `
            }).join('')*/
        });

    return `
    ${navbar()}
    <div class="container">
    <h1>Registro do Cliente</h1>  
        <section class="row mt-5">
            <div class="col-md-6">
                <p>
                    <strong>Nome</strong> 
                    <span id="name"></span>
                </p>
                <hr>
                <p>
                    <strong>E-mail</strong> 
                    <span id="email"></span>
                </p>
                <hr>
                <p>
                    <strong>Phone</strong> 
                    <span id="phone"></span>
                </p>
                <hr>
                <p>
                    <strong>Address</strong> 
                    <span id="address"></span>
                </p>
                <hr>
                <p>
                    <strong>Estado</strong> 
                    <span id="county"></span>
                </p>
                <p>
                    <strong>Número</strong> 
                    <span id="number"></span>
                </p>
                <hr>
                <p>
                    <strong>CEP</strong> 
                    <span id="zipcode"></span>
                </p>
                <hr>
            </div>
        </div>
    `;
}
