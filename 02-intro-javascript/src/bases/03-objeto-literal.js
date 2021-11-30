


const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 55555555,
        lat: 14.44444,
        lng: 34.33333
    }
};

const persona2 = {...persona}
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 );

