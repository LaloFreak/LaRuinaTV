require('dotenv').config();
const APIKEY = 'AIzaSyCAR1h1chPnnLY6N8R8jF2yn6WR85eYqBI'
const wogIcon = `https://www.googleapis.com/drive/v3/files/1GooFCd-i4jJvKbGNcBNYf2id8KhWihi-?supportsAllDrives=true&key=${APIKEY}&alt=media`
const ruinaRecordsIcon = `https://www.googleapis.com/drive/v3/files/1c2LQ76p3hpT56cVqKJy_SIcd-6aFgAZG?supportsAllDrives=true&key=${APIKEY}&alt=media`
const visor = 'visor'
const slider = 'slider'
const presentation = 'presentation'

const DB_LARUINATV_MEDIA = [
    {
        urlID: {idYT:'a', idSpty:'', idDrive:''},
        typeMedia: 'serie',
        titulo: "Ainulindalë",
        artista: "World of Gwerh",
        tag: "Sello Arruinados",
        icon: [wogIcon, ruinaRecordsIcon],
        categoria:['Música', 'Sello Arruinados', 'Series'],
        boton1:'Ver',
        info: 'Serie basada en los escritos de la extensa obra del autor británico "J.R.R Tolkien" que forman parte del "Legendarium'
    },
    {
        id: 1,
        urlID: {idYT:'mZiusH3M8Uc&ab', idSpty:'', idDrive:''},
        typeMedia: 'musica',
        titulo: "Círculo Vicioso",
        artista: "Derrumbe",
        tag: "Álbum",
        icon: [ruinaRecordsIcon],
        categoria:['Música', 'Estudio "La Ruina Records"', 'Sello Arruinados'],
        boton1:'Escuchar',
        info:'Álbum de la banda "Derrumbe Punk". Grabado, mezclado y masterizado en nuestro estudio "La Ruina Records"'
    },
    {
        id: 2,
        urlID: {idYT:'a', idSpty:'', idDrive:''},
        typeMedia: 'musica',
        titulo: "Paranoia en PerroNegro",
        artista: "Paranoia",
        tag: "Lanzamiento en vivo",
        icon: [ruinaRecordsIcon],
        categoria:['Música', 'En vivo', 'Sello Arruinados'],
        boton1:'Escuchar',
        info:'Lanzamiento en vivo del álbum "Pobre, Muerto, Aburrido" de la banda "Paranoia" en las estancias de "PerroNegro"'
    },
    {
        id: 3,
        urlID: {idWeb:'a', idDrive:'', urlDescarga:''},
        typeMedia: 'app',
        titulo: "Gwerh, the Bard",
        artista: "World of Gwerh",
        tag: "App interactiva",  
        icon: [wogIcon, ruinaRecordsIcon],
        categoria:['Música', 'Sello Arruinados', 'App y Descargables', 'Sello Arruinados'],
        boton1:'Entrar',
        info:'Acércate a escuchar las historias que el bardo tiene para contarte'
    },
    {
        id: 4,
        urlID: {idYT:'a', idSpty:'', idDrive:''},
        typeMedia: 'musica',
        titulo: "Brutópolis",
        artista: "Urticaria",
        tag: "Sello Arruinados",     
        icon: [ruinaRecordsIcon],
        categoria:['Música', 'Sello Arruinados'],
        boton1:'Escuchar',
        info:'Álbum de la banda "Urticaria", postproducido por "La Ruina Records"'
    },
    {
        id: 5,
        urlID: {idYT:'a', idSpty:'', idDrive:''},
        typeMedia: 'musica',
        titulo: "Barrios Bajos Blues",
        artista: "Caña Blues",
        tag: "Álbum",   
        icon: [ruinaRecordsIcon],
        categoria:['Sello Arruinados'],
        boton1:'Escuchar',
        info:'Álbum de la banda valdiviana de blues pesado llamada "Caña Blues", grabado en nuestro estudio "La Ruina Records"'
    },
    {
        id: 6,
        urlID: {idWeb:'a', idDrive:'', urlDescarga:''},
        typeMedia: 'libro',
        titulo: "La Espada Oxidada",
        artista: "World of Gwerh",
        tag: "Literatura",
        icon: [ruinaRecordsIcon],
        categoria:['Literatura', 'App y Descargables'],
        boton1:'Leer',
        info:'El relato de un errante sin destino en viaje sin retorno'
    },
]

module.exports = {APIKEY, DB_LARUINATV_MEDIA, wogIcon, ruinaRecordsIcon, visor, slider, presentation}