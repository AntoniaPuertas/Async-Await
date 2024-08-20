
//simulamos una llamada para descargar datos que va a tardar un tiempo en resolverse
function descargarPeliculas(){
    return new Promise( resolve => {
        console.log('Descargando películas...');
        setTimeout(() => {
            resolve('Las películas han sido descargadas');
        }, 3000);
    });
}

function descargarGeneros(){
    return new Promise( resolve => {
        console.log('Descargando géneros...');
        setTimeout(() => {
            resolve('Los géneros han sido descargados');
        }, 5000);
    });
}

async function iniciarApp(){
    try {
        // const peliculas = await descargarPeliculas();
        // const generos = await descargarGeneros();
        // console.log(peliculas);
        // console.log(generos);

        const resultado = await Promise.all([descargarPeliculas(), descargarGeneros()]);
        console.log(resultado);
    }catch(error){
        console.log(error);
    }
}

iniciarApp();

console.log('Ya he solicitado la descarga de películas y géneros');