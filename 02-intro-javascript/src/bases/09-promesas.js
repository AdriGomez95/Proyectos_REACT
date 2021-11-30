



const promesa = new Promise( (resolve, reject) => {
    
    setTimeout( () => {
        resolve();
        //reject(aqui el valor que quiero encontrar);
    }, 2000)

});

promesa.then( () => {
    console.log('Then de la promesa')
})

//del reject
.catch( err => console.warn(err) );






/*

const getHeroeByIdAsync = ( id ) =>{
    return new Promise( (resolve, reject) => {
        
        setTimeout( () => {
            const p1 = getHeroeByIdAsync( id );
            if( p1 ){
                resolve( p1 );
            }else{
                reject( 'No se pudo encontrar el héroe' );
            }
        }, 2000)
        
    });
}


getHeroeByIdAsync(10).then( console.log ).catch( console.warn );
*/