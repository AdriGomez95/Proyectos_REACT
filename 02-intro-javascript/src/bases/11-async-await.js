




const getImagen = async () =>{

    try{
        const apiKey = 'vK4crhlLhD9XOkDwVvfcTkbaW1G9udsH';
        const respuesta = await fetch( `http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await respuesta.json();
    
        const {url} = data.images.original;
            
        const img = document.createElement( 'img' );
        img.src = url;
        document.body.append( img );

    }catch(error){
        console.log(error);

    }
    
}


getImagen();




