



//FUNCIONES EN JS


//const saludo = function( nombre ){
//    return `Hola, ${nombre}`;
//}

//console.log( saludo('Goku') )


const saludo2 = (nombre)=>{
    return `Hola, ${nombre}`;

}

const saludo3 = (nombre)=> `Hola, ${nombre}`;
const saludo4 = ()=> `Hola mundo`;



console.log( saludo2('Vegeta') );
console.log( saludo3('Goku') );
console.log( saludo4() );



const getUser = () => ({
    uid: 'ABC123',
    username: 'usuario_admin'
})


const user = getUser();
console.log( user );


//tarea
//1. Transformar a una funcion flecha
//2. Retornar un objeto implicito
//3. Pruebas
/*
function getUsuarioActivo( nombre ){
    return{
        uid:'ABC567',
        username: nombre
    }
};
*/
const getUsuarioActivo = ( nombre ) =>({
    uid:'ABC567',
    username: nombre
})


const usuarioActivo = getUsuarioActivo('Adriana');
console.log( usuarioActivo );
