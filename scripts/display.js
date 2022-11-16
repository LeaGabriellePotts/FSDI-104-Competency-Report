function displayCards(){
    let card="";
    //travel the array
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        //create the HTML tmp for card

        card+=`
        <div class="card my-card">
            <div class="card-body">
            <div id="${pet.id}" class="pet">
                <h6 class="card-title">${pet.name}</h6
                <p class="card-text"> Age: ${pet.age}</p>
                <p class="card-text"> Gender: ${pet.gender}</p>
                <p class="card-text"> Breed: ${pet.breed}</p>
                <p class="card-text"> Service: ${pet.service}</p>
                <p class="card-text"> Owner: ${pet.ownerName}</p>
                <p class="card-text"> Phone: ${pet.contactPhone}</p>
                <p class="card-text"> Payment: ${pet.paymentMethod}</p>
                <button onclick="deletePet(${pet.id})">Delete</button>
            </div>
            </div>
        </div>
        `;
    }
    console.log(card);
    //append the template on the html
    document.getElementById("pets").innerHTML=card;
}

function displayTable(){
    let table="";
    for(let i=0; i<petSalon.pets.length; i++){
    console.log(petSalon.pets[i].name)
    let tablePet=petSalon.pets[i];
    table +=`
    <tr>
        <td>${tablePet.name}</td>
        <td>${tablePet.age}</td>
        <td>${tablePet.gender}</td>
        <td>${tablePet.breed}</td>
        <td>${tablePet.service}</td>
        <td>${tablePet.ownerName}</td>
        <td>${tablePet.contactPhone}</td>
    </tr>
    `
    }
    document.getElementById("pets-table").innerHTML=table
}