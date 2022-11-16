

//+ Create an object literal (salon) and display the information on the index.html.
//+ Create an object constructor (Pet class/constructor), create three pets using the constructor.
//+ Register pets using the HTML form (using the Pet constructor).
//+ Clear the form.
//** use a good CSS for the index.html and the register.html.


//Assignmetn 3: Please submit a project that meets the following requirements: 
// + Register pets with the proper validation.
// - Display the pets on cards w info and add CSS style to them. - add the rest of the info (breed gender service etc)
// Personal challenge: display the pets in a table
//
// - use a CSS framework that helps you save time and finish with a beautiful design. - use a display flex 
//Submit a ZIP file and a GitHub link.

//first we are learning object literal

//object literal notation:
let petSalon = {
    //properties
    name:"The Fashion Pet",
    address:{
        street: "University",
        number: "262",
        zipcode: "22400"
    },
    pets:[]
}
// **commenting this out since we moved it into info.js
// function displayInfo(){
//     document.getElementById("petsalon-info").innerHTML=`
//     Welcome to ${petSalon.name} 
//     <p>We are located at ${petSalon.address.street}</p>
//     <p>${petSalon.address.number}</p>
//     <p>${petSalon.address.zipcode}</p>
//     `
//     }
let c=0; //this is a counter
//create the constructor
//<-----parameters(local vars)------->
function Pet(name,age,gender,breed,service,owner,phone,payment){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.ownerName=owner; 
    this.contactPhone=phone; 
    this.paymentMethod=payment;
    this.id=c++; //increase 1 by 1

}

//create pets
let pet1 = new Pet("scooby",60,"Male","Dane","grooming","Shaggy","555-5555-555","paypal");
let pet2 = new Pet("Deefer",11,"Male","mutt","vaccine","Katie","703-780-3616","venmo");
let pet3 = new Pet("Princess",2,"female","golden retriever", "vaccine", "Edwin", "703-780-5217","zelle");

//register function
//getting the inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("selService");
let inputOwner = document.getElementById("txtOwner");
let inputPhone = document.getElementById("txtPhone");
let inputPayment = document.getElementById("selPayment");

function isValid(aPet){
    let valid=true;
    //clearing the input borders
    inputName.classList.remove("error");
    inputService.classList.remove("error");
    inputOwner.classList.remove("error");
    inputPhone.classList.remove("error");
//check the conditions/add the vaidation
    if(aPet.name==""){
        valid=false;
        inputName.classList.add("error");
    }
    if(aPet.service==""){
        valid=false;
        inputService.classList.add("error");
    }
    if(aPet.ownerName==""){
        valid=false;
        inputOwner.classList.add("error");
    }
    if(aPet.contactPhone==""){
        valid=false;
        inputPhone.classList.add("error");
    }
    return valid;   
}

function register(){
    //get teh values and creating teh object
    let thePet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value,inputPayment.value);
    //validating thePet
    if(isValid(thePet)==true){
        //push the object into the array
        petSalon.pets.push(thePet);
        //display the pets
        displayCards();
        // displayTable();
        //display    the petSalon.pets array
        console.log(petSalon.pets);
        clearForm();
        }
    }


    //*********************** */
    //This is how I cleared the form for assignment 2 and now we are instead creating function clearForm() below, so I am commenting it out but leaving it so I can still see this is a way to do it
    // document.getElementById("txtName").value="";
    // document.getElementById("txtAge").value="";
    // document.getElementById("txtGender").value="";
    // document.getElementById("txtBreed").value="";
    // document.getElementById("selService").value="";
    // document.getElementById("txtOwner").value="";
    // document.getElementById("txtPhone").value="";
//***************************** */

//displayInfo was assignment 2 so commenting the call for displayInfo out (it's fine that the function is still up there because it won't execute if we don't call for it)
// displayInfo();

function clearForm(){
//clear the text in the inputs//
inputName.value="";
inputAge.value="";
inputGender.value="";
inputBreed.value="";
inputService.value="";
inputOwner.value="";
inputPhone.value="";
inputPayment.value="";
}

function deletePet(aPetID){
    console.log("Deleting the pet" + aPetID);
    document.getElementById(aPetID).remove();//deete the card from html
    let deleteIndex;
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        if(pet.id==aPetID){
            deleteIndex=i;

        }
    }
    petSalon.pets.splice(deleteIndex,1);
}

function init(){
    //this is the main function
    console.log("init");
    petSalon.pets.push(pet1,pet2,pet3);
    displayCards();
    // displayTable();
}

window.onload=init;