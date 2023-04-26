const volcanes = [
  {
    id: 1,
    nombre: "Volcán Azufral",
    tipo: "Compuesto - Estratovolcán",
    altura: `4070`,
    departamento: "Nariño",
    latitud: `1.085°`,
    longitud:`-77.717°`,
    nivelDeActividad: `Comportamiento estable`,
    ultimaErupcion: `930 a.C`,
    imagen: ``  
  },
  {
    id: 2,
    nombre: "Volcán Cerro Bravo",
    tipo: "Compuesto - Estratovolcán",
    altura: `4000`,
    departamento: "Tolima",
    latitud: `5.091°`,
    longitud:`, -75.292°`,
    nivelDeActividad: `Comportamiento estable`,
    ultimaErupcion: `1720 d.C`,
    imagen: ``  
  },
  {
    id: 3,
    nombre: "Volcán Cerro Machín",
    tipo: "Anillo Piroclástico",
    altura: `2750`,
    departamento: "Tolima",
    latitud: `4.487°`,
    longitud:`-75.386°`,
    nivelDeActividad: `Cambios en la actividad volcánica`,
    ultimaErupcion: `1180 d.C`,
    imagen: ``  
  },
  {
    id: 4,
    nombre: "Volcán Cerro Negro",
    tipo: "Compuesto - Estratovolcán",
    altura: `4470`,
    departamento: "Nariño",
    latitud: `0.83137°`,
    longitud:`-77.96775°`,
    nivelDeActividad: `Cambios en la actividad volcánica`,
    ultimaErupcion: `1936 d.C`,
    imagen: ``  
  },
  {
    id: 5,
    nombre: "Volcán Chiles",
    tipo: "Compuesto - Estratovolcán",
    altura: `4748`,
    departamento: "Nariño",
    latitud: `0.81653°`,
    longitud:`-77.93625°`,
    nivelDeActividad: `Cambios en la actividad volcánica`,
    ultimaErupcion: `No hay registro`,
    imagen: ``  
  },
  {
    id: 6,
    nombre: "Volcán Cumbal",
    tipo: "Compuesto - Estratovolcán",
    altura: `4764`,
    departamento: "Nariño",
    latitud: `0.956°`,
    longitud:`-77.885°`,
    nivelDeActividad: `Cambios en la actividad volcánica`,
    ultimaErupcion: `1926 d.C`,
    imagen: ``  
  },
  {
    id: 7,
    nombre: "Volcán Doña Juana",
    tipo: "Compuesto - Estratovolcán",
    altura: `4160`,
    departamento: "Nariño",
    latitud: `1.498°`,
    longitud:`-76.939°`,
    nivelDeActividad: `Comportamiento estable`,
    ultimaErupcion: `1906 d.C`,
    imagen: ``  
  },
  {
    id: 8,
    nombre: "Volcán Galeras",
    tipo: "Compuesto - Estratovolcán",
    altura: `4276`,
    departamento: "Nariño",
    latitud: `1.221°`,
    longitud:`-77.359°`,
    nivelDeActividad: `Cambios en la actividad volcánica`,
    ultimaErupcion: `2014 d.C`,
    imagen: ``  
  },
  {
    id: 9,
    nombre: "Volcán Las Ánimas",
    tipo: "Compuesto - Estratovolcán",
    altura: `4200`,
    departamento: "Nariño",
    latitud: `1.56697°`,
    longitud:`-76.87008°`,
    nivelDeActividad: `Comportamiento estable`,
    ultimaErupcion: `No hay registro`,
    imagen: ``  
  },
  {
    id: 10,
    nombre: "Volcán Nevado de Santa Isabel",
    tipo: "Complejo de Domos",
    altura: `4965`,
    departamento: "Risaralda - Caldas - Tolima",
    latitud: `4.83°`,
    longitud:`, -75.375`,
    nivelDeActividad: `Comportamiento estable`,
    ultimaErupcion: `1943 d.C`,
    imagen: ``  
  },
  {
    id: 11,
    nombre: "Volcán Nevado del Huila",
    tipo: "Compuesto - Estratovolcán",
    altura: `5364`,
    departamento: "Huila - Tolima - Cauca",
    latitud: `2.924°`,
    longitud:`-76.029°`,
    nivelDeActividad: `Cambios en la actividad volcánica`,
    ultimaErupcion: `2012 d.C`,
    imagen: ``  
  },
  {
    id: 12,
    nombre: "Volcán Nevado del Ruiz",
    tipo: "Compuesto - Estratovolcán",
    altura: `5321`,
    departamento: "Tolima - Caldas",
    latitud: `4.895°`,
    longitud:` -75.321°`,
    nivelDeActividad: `Erupción probable en término de días o semanas`,
    ultimaErupcion: `2023 d.C`,
    imagen: ``  
  },
  {
    id: 13,
    nombre: "Volcán Nevado del Tolima",
    tipo: "Compuesto - Estratovolcán",
    altura: `5215`,
    departamento: "Tolima",
    latitud: `4.659°`,
    longitud:`-75.329°`,
    nivelDeActividad: `Comportamiento estable`,
    ultimaErupcion: `1943 d.C`,
    imagen: ``  
  },
  {
    id: 14,
    nombre: "Volcán Paramillo de Santa Rosa",
    tipo: "Compuesto - Estratovolcán",
    altura: `4600`,
    departamento: "Risaralda",
    latitud: ` 4.803°`,
    longitud:` -75.375°`,
    nivelDeActividad: `Comportamiento estable`,
    ultimaErupcion: `No hay registro`,
    imagen: ``  
  },
  {
    id: 15,
    nombre: "Volcán Paramillo del Cisne",
    tipo: "Domo Colada",
    altura: `4700`,
    departamento: "Caldas - Tolima",
    latitud: `4.843°`,
    longitud:`-75.352°`,
    nivelDeActividad: `Comportamiento estable`,
    ultimaErupcion: `No hay registro`,
    imagen: ``  
  },
  {
    id: 16,
    nombre: "Volcán Paramillo del Quindío",
    tipo: "Compuesto - Estratovolcán",
    altura: `4700`,
    departamento: "Quindío - Risaralda - Tolima",
    latitud: `4.715°`,
    longitud:`-75.389°`,
    nivelDeActividad: `Comportamiento estable`,
    ultimaErupcion: `No hay registro`,
    imagen: ``  
  },
  {
    id: 17,
    nombre: "Volcán Puracé",
    tipo: "Compuesto - Estratovolcán",
    altura: `4650`, 
    departamento: "Cauca",
    latitud: ` 2.313°`,
    longitud:` -76.395°`,
    nivelDeActividad: `Cambios en la actividad volcánica`,
    ultimaErupcion: `2022 d.C`,
    imagen: ``  
  },
  {
    id: 18,
    nombre: "Volcán Romeral",
    tipo: "Compuesto - Estratovolcán",
    altura: `3858`,
    departamento: "Caldas",
    latitud: `5.206°`,
    longitud:` -75.364°`,
    nivelDeActividad: `Comportamiento estable`,
    ultimaErupcion: `5390 ± 500 a.C`,
    imagen: ``  
  },
  {
    id: 19,
    nombre: "Volcán San Diego",
    tipo: "Maar",
    altura: `850`,
    departamento: "Caldas",
    latitud: `5.649°`,
    longitud:` -74.96°`,
    nivelDeActividad: `Comportamiento estable`,
    ultimaErupcion: `>10 000 años`,
    imagen: ``  
  },
  {
    id: 20,
    nombre: "Volcán Sotará",
    tipo: "Compuesto - Estratovolcán",
    altura: `4420`,
    departamento: "Cauca",
    latitud: `2.107°`,
    longitud:` -76.591°`,
    nivelDeActividad: `Cambios en la actividad volcánica`,
    ultimaErupcion: `No hay registro`,
    imagen: ``  
  },
  {
    id: 21,
    nombre: "Volcán Sucubún",
    tipo: "Caldera Domo",
    altura: `4100`,
    departamento: "Cauca - Huila",
    latitud: `2.018°`,
    longitud:`-76.574°`,
    nivelDeActividad: `Comportamiento estable`,
    ultimaErupcion: `No hay registro`,
    imagen: ``  
  }
];

let toggle = document.querySelector(".fa-solid");
let menuToggle = document.querySelector(".menu-toggle");
toggle.addEventListener("click",()=>{
    if(menuToggle.classList.contains("appear")){
        menuToggle.classList.remove("appear");
    }
    else{
        menuToggle.classList.add("appear");
    }
})

