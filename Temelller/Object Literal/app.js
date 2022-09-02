let value;
const programmer = {
    name: "İrem Oğulluk",
    age:20,
    email: "iremogulluk@gmail.com",
    langs: ["Pyhton", "Java", "Javascript"],

    address : {
        city: "Samsun",
        street: "Atakum"
    },

    work : function(){
        console.log("Programcı Çalışıyor...");
    }


}

value = programmer;

value = programmer.email; //Genel olarak
value = programmer["email"];

value = programmer.langs;

value = programmer.address.city;


programmer.work();

const programmers = [
    {name: "İrem Oğulluk",age:20},
    {name:"Oğuz", age:25 }
];

value = programmers[0].name;

console.log(value);