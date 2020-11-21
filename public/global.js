export const genreStudent = [{
        "genre": "Niño"
    },
    {
        "genre": "Niña"
    }
];


export const AcademicDegree = [{
        "degree": "Primer Grado"
    },
    {
        "degree": "Segundo Grado"
    },
    {
        "degree": "Tercer Grado"
    },
    {
        "degree": "Cuarto Grado"
    },
    {
        "degree": "Quinto Grado"
    },
    {
        "degree": "Séptimo Grado"
    },
    {
        "degree": "Octavo Grado"
    },
    {
        "degree": "Noveno Grado"
    }
];


export const sectionStudent = [{
        "section": "A",
    },
    {
        "section": "B",
    }
];

export const teachers = [{
        "name": "Licda. Elizabeth",
    },
    {
        "name": "Lic. Rodolfo",
    },
    {
        "name": "Ing. Ronald",
    },
];

// Navbar
export const mainMenu = [{
        id: 1,
        name: "Inicio",
        slug: "/"
    },
    {
        id: 2,
        name: "Busqueda",
        slug: "/search"
    },
    {
        id: 3,
        name: "Misión y Visión",
        slug: "/mision-y-vision"
    },
    {
        id: 7,
        name: "Iniciar Sesion",
        slug: "/login"
    },
]
export const AdminMenu = [{
        id: 1,
        name: "Libros",
        subMenu: [{
                id: 1,
                name: "Agregar Libros",
                slug: "/libros/agregar_libro"
            },
            {
                id: 2,
                name: "Lista de Libros",
                slug: "/libros/lista_libros"
            }
        ]
    },
    {
        id: 2,
        name: "Categorias",
        subMenu: [{
                id: 1,
                name: "Agregar Categoria",
                slug: "/categoria/agregar_categoria"
            },
            {
                id: 2,
                name: "Lista de Categorias",
                slug: "/categoria/lista_categoria"
            }
        ]
    },
    {
        id: 3,
        name: "Estudiantes",
        subMenu: [{
                id: 1,
                name: "Agregar Estudiante",
                slug: "/estudiante/agregar_estudiante"
            },
            {
                id: 2,
                name: "Lista de Estudiantes",
                slug: "/estudiante/lista_estudiante"
            }
        ]
    },
    {
        id: 4,
        name: "Prestamos",
        subMenu: [{
                id: 1,
                name: "Nuevo Prestamo",
                slug: "/prestamo/agregar_prestamo"
            },
            {
                id: 2,
                name: "Listado de Prestamos",
                slug: "/prestamo/lista_prestamo"
            }
        ]
    }
]