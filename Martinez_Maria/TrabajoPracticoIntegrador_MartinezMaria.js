/*1. Estructura de Datos
a) Crear un array de objetos llamado libros que contenga al menos 10
libros. Cada libro debe tener las siguientes propiedades:
✓ id (número)
✓ título (string),
✓ autor (string),
✓ año (número),
✓ género (string),
✓ disponible (booleano).*/

const libros = [
    {
        id:"1",
        titulo:"Noticia de un Secuestro",
        autor:"Gabriel Garcia Marquez",
        anio:"1996",
        genero:"No -Ficcion",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} ${this.autor} del anio ${1996} es de genero ${this.genero} esta ${this.disponible}`;

        }
    
    },

    {
        id:"2",
    titulo:"Marque la Diferencia y Triunfe",
    autor:"Jim Champy",
    anio:"2009",
    genero:"Crecimiento Personal",
    disponible:true,
    describir: function() {
        return`El libro ${this.id} con titulo ${this.titulo} ${this.autor} del anio ${1996} es de genero ${this.genero} esta ${this.disponible}`;

    }
    },

    {
        id:"3",
        titulo:"Diccionario Amoroso del Psicoanalisis",
        autor:"Elizabeth Roudinesco",
        anio:"2017",
        genero:"psicologia",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} ${this.autor} del anio ${2017} es de genero ${this.genero} esta ${this.disponible}`;

        }
    },
    {
        id:"4",
        titulo:"La Casa de los Espiritus",
        autor:"Isabel Allende",
        anio:"1982",
        genero:"Novela",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} ${this.autor} del anio ${1982} es de genero ${this.genero} esta ${this.disponible}`;

        }
    },
    {
        id:"5",
        titulo:"Las 48 Leyes del Poder",
        autor:"Robert Greene",
        anio:"1998",
        genero:"Autoayuda",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} ${this.autor} del anio ${1998} es de genero ${this.genero} esta ${this.disponible}`;

        }
    },
    {
        id:"6",
        titulo:"El Sutil Arte de que (casi todo) te Importe una Mierda",
        autor:"Mark Manson",
        anio:"2016",
        genero:"Autoayuda",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} ${this.autor} del anio ${2016} es de genero ${this.genero} esta ${this.disponible}`;

        }

    },
    {
        id:"7",
        titulo:"Hamlet Macbeth",
        autor:"William Shakespeare",
        anio:"1980",
        genero:"Dramatico",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} ${this.autor} del anio ${1980} es de genero ${this.genero} esta ${this.disponible}`;

        }

    },
    {
        id:"8",
        titulo:"El Nombre de la Rosa",
        autor:"Umberto Eco",
        anio:"1980",
        genero:"Novela",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} ${this.autor} del anio ${1980} es de genero ${this.genero} esta ${this.disponible}`;

        }

    },
    {
        id:"9",
        titulo:"Memoria de Adriano",
        autor:"Marguerite Yourcenar",
        anio:"1951",
        genero:"Novela",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} ${this.autor} del anio ${1951} es de genero ${this.genero} esta ${this.disponible}`;

        }

    },
    {
        id:"10",
        titulo:"Los Iluminados",
        autor:"Marcos Aguini",
        anio:"2000",
        genero:"Ficcion",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} ${this.autor} del anio ${2000} es de genero ${this.genero} esta ${this.disponible}`;

        }

    }



]
console.log(libros[0].describir());
console.log(libros[1].describir());
console.log(libros[2].describir());
console.log(libros[3].describir());
console.log(libros[4].describir());
console.log(libros[5].describir());
console.log(libros[6].describir());
console.log(libros[7].describir());
console.log(libros[8].describir());
console.log(libros[9].describir());


/*b) Crear un array de objetos llamado usuarios con al menos 5 usuarios.
Cada usuario debe tener:
✓ id (número)
✓ nombre (string)
✓ email (string)
✓ librosPrestados (array de ids de libros).*/

[
    {
        id:1,
        nombre:"Juan Perez",
        email:"juan.perez@example.com",
        librosPrestados:["1","3"]
    },

    {
        id:2,
        nombre:"Ana Garcia",
        email:"ana.garcia@example.com",
        librosPrestados:["2"]
    },

   {
    id:3,
    nombre:"Luis Rodriguez",
    email:"luis.rodriguez@example.com",
    librosPrestados:["1","2","3"]
   },
   {
    id:4,
    nombre:"Marina Paredes",
    email:"marina.paredes@example.com",
    librosPrestados:["4","5"]
   },
   {
    id:5,
    nombre:"Pedro Sanchez",
    email:"pedro.sanchez@example.com",
    librosPrestados:["1"]
   }
];
console.log('5','1','4','3','2'); 

/*Ten en cuenta que el orden de los IDs en el array puede variar, ya que utilizamos conjuntos para asegurar que no haya IDs duplicados.*/

/*2. Funciones de Gestión de Libros
a) Implementar una función agregarLibro(id, titulo, autor, anio, genero)
que agregue un nuevo libro al array libros.*/

let misLibros =["Libro11"]
function agregarLibro(){
    const nuevoLibro = {
        id:"11",
        titulo:"El Señor de los Anillos",
        autor:"J.R.R. Tolkien",
        anio:"1954",
        genero:"fantasia"
    };
        libros.push(nuevoLibro);
        console.log(` ${nuevoLibro.titulo} - Agregando Libro 11`);

    }
    agregarLibro();
    console.log(libros);

    /*b) Crear una función buscarLibro(criterio, valor) que permita buscar
libros por título, autor o género utilizando el algoritmo de búsqueda
lineal.*/




