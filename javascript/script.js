const datos = `{
    "gender": "male",
    "name": {
        "title": "Mr",
        "first": "Albert",
         "last": "Diez"
    },
    "email": "albert.diez@example.com",
    "dob": {
        "date": "1965-04-08T05:03:42.609Z",
        "age": 32
    },
    "direccion":"Villa Herrero, Moreno, Buenos Aires, Argentina (CP) 1744",
    "cell": "(+54) 11-6821-5964",
    "id": {
        "name": "DNI",
        "value": "36106034"
    },
    "picture": {
        "large": "https://randomuser.me/api/portraits/men/71.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/71.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/71.jpg"
    },
    "nat": "argentino" 
}`

const obj = JSON.parse(datos);

function fullname(){
    return obj.name.first+" "+obj.name.last;
};
//solo agrega informacion personal
document.getElementById("nombre").innerHTML = fullname();
document.getElementById("direccion").innerHTML = obj.direccion;
document.getElementById("numero").innerHTML = obj.cell;
document.getElementById("numero").setAttribute("href", obj.cell);
document.getElementById("e-mail").innerHTML = obj.email;
document.getElementById("e-mail").setAttribute("href", obj.email);



//accion de los botones del menu
function mostrarInfo (id) {
    document.getElementById("actual").innerHTML = document.getElementById(id).innerHTML;
};
