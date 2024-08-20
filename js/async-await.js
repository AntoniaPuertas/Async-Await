
//simulamos una llamada para descargar datos que va a tardar un tiempo en resolverse
function descargarDatos(){
    return new Promise( resolve => {
        console.log('Descargando datos...');
        setTimeout(() => {
            resolve('Los datos han sido descargados');
        }, 3000);
    });
}

async function iniciarApp(){
    try {
        const resultado = await descargarDatos();
        console.log(resultado);
    }catch(error){
        console.log(error);
    }
}

iniciarApp();

console.log('Ya he solicitado la descarga de datos');