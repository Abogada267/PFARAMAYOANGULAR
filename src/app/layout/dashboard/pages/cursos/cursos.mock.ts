export const cursosList: Cursos [] = [
  { id: 1, name: "Derecho Penal", price: 10, description: "Abreviado", imagenUrl:"https://unimex.edu.mx/img/posgrados/DERECHO_PENAL.png"  },
{ id: 2, name: "Derecho Familia", price: 5, description: " Cuota de alimento",imagenUrl:"https://www.gestionesjuridicas.com/wp-content/uploads/2020/03/11.jpg"  },
{ id: 3, name: "Derecho Sucesorio", price: 7 , description: "Legitima", imagenUrl:"https://maherabogados.es/wp-content/uploads/2019/03/derecho-sucesorio.jpg" },
{ id: 4, name: "Derecho Civil y Comercial ", price: 8, description: "Contratos",imagenUrl:"https://abogadosrr.com.ar/wp-content/uploads/2021/01/abogados_derecho_civil_y_comercial_misiones.png"  },
{ id: 5, name: "Derecho Administrativo", price: 9, description: "Demanda",imagenUrl:"https://vilchescastilloabogados.com/wp-content/uploads/2022/01/Admnistrativo-960x640.jpg"  }, 
]


export interface Cursos{
    id: number;
    name: string;
    price: number;
    description: string;
    imagenUrl: string;
}