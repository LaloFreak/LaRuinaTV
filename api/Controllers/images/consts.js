const API_KEY = 'AIzaSyDq61eIXUw5_d7UmEBAEtYh1TxCttoqW8U'
const wogIcon = `https://www.googleapis.com/drive/v3/files/19BzYhkVmwSQuyzfIMyAklGh4vSV6KA7c?supportsAllDrives=true&key=${API_KEY}&alt=media`
const ruinaRecordsIcon = `https://www.googleapis.com/drive/v3/files/18m5xUsjS_Atei1FiksnCGhyHSHO70bDy?supportsAllDrives=true&key=${API_KEY}&alt=media`
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
        visorImgID: '13MH0NxpMmD0B37KypTrmNzKDtWy8MRdy',
        sliderImgID: '',
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
        visorImgID: '13kVodzP5MhaM-JcNS0KUja5SWaP2MSQl',
        sliderImgID: '',
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
        visorImgID: '13hIhMworLNxWrLhhIIAmCwFfxmhYm3pi',
        sliderImgID: '',
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
        visorImgID: '13c57y89NMTpPn1b_PyluByVeQ_Q6n4zl',
        sliderImgID: '',
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
        visorImgID: '13aqypc9OKNTdMG8IupDWj3STDcoHe4bR',
        sliderImgID: '',
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
        visorImgID: '13U0O_vOc4BH6IGAVDqNPjwd0WpNo0EED',
        sliderImgID: '',
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
        visorImgID: '13Ma6pbMUhUIU5HcgSMqgEbegtx_owiQy',
        sliderImgID: '',
        categoria:['Literatura', 'App y Descargables'],
        boton1:'Leer',
        info:'El relato de un errante sin destino en viaje sin retorno'
    },
]

module.exports = {API_KEY, DB_LARUINATV_MEDIA, wogIcon, ruinaRecordsIcon, visor, slider, presentation}