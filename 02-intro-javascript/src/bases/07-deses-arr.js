


const personajes = ['Goku','Vegeta','Trunks'];

const [ p1 ] = personajes;
console.log( p1 );
const [ , ,p3 ] = personajes;
console.log( p3 );




const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ]= retornaArreglo();
console.log ( letras, numeros );



//tarea
//1. el primer val del arreglo se llamara nombre
//2. la segunda pos se llamara setNombre
const useState = (valor) =>{
    return [ valor, () => { console.log('Hola mundo')}];
}

const [ nombre, setNombre ] = useState( 'Goku' );

console.log( nombre );
setNombre();





