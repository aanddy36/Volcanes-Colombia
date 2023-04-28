const volcanes = [
    {
      id: 1,
      nombre: "Volcán Azufral",
      tipo: "Estratovolcán",
      altura: `4070 m`,
      departamento: "Nariño",
      latitud: `1.085°`,
      longitud:`-77.717°`,
      segmento:`Segmento Sur`,
      nivelDeActividad: `Comportamiento estable`,
      ultimaErupcion: `930 a.C`,
      imagen: `images/Azufral.png`  
    },
    {
      id: 2,
      nombre: "Volcán Cerro Bravo",
      tipo: "Estratovolcán",
      altura: `4000 m`,
      departamento: "Tolima",
      latitud: `5.091°`,
      longitud:`, -75.292°`,
      segmento:`Segmento Norte`,
      nivelDeActividad: `Comportamiento estable`,
      ultimaErupcion: `1720`,
      imagen: `images/CerroBravo.png`  
    },
    {
      id: 3,
      nombre: "Volcán Cerro Machín",
      tipo: "Anillo Piroclástico",
      altura: `2750 m`,
      departamento: "Tolima",
      latitud: `4.487°`,
      longitud:`-75.386°`,
      segmento:`Segmento Norte`,
      nivelDeActividad: `Cambios en la actividad volcánica`,
      ultimaErupcion: `1180`,
      imagen: `images/CerroMachin.png`  
    },
    {
      id: 4,
      nombre: "Volcán Cerro Negro",
      tipo: "Estratovolcán",
      altura: `4470 m`,
      departamento: "Nariño",
      latitud: `0.83137°`,
      longitud:`-77.96775°`,
      segmento:`Segmento Sur`,
      nivelDeActividad: `Cambios en la actividad volcánica`,
      ultimaErupcion: `1936`,
      imagen: `images/CerroNegro.png`  
    },
    {
      id: 5,
      nombre: "Volcán Chiles",
      tipo: "Estratovolcán",
      altura: `4748 m`,
      departamento: "Nariño",
      latitud: `0.81653°`,
      longitud:`-77.93625°`,
      segmento:`Segmento Sur`,
      nivelDeActividad: `Cambios en la actividad volcánica`,
      ultimaErupcion: `No hay registro`,
      imagen: `images/Chiles.png`  
    },
    {
      id: 6,
      nombre: "Volcán Cumbal",
      tipo: "Estratovolcán",
      altura: `4764 m`,
      departamento: "Nariño",
      latitud: `0.956°`,
      longitud:`-77.885°`,
      segmento:`Segmento Sur`,
      nivelDeActividad: `Cambios en la actividad volcánica`,
      ultimaErupcion: `1926`,
      imagen: `images/Cumbal.png`  
    },
    {
      id: 7,
      nombre: "Volcán Doña Juana",
      tipo: "Estratovolcán",
      altura: `4160 m`,
      departamento: "Nariño",
      latitud: `1.498°`,
      longitud:`-76.939°`,
      segmento:`No es`,
      nivelDeActividad: `Comportamiento estable`,
      ultimaErupcion: `1906`,
      imagen: `images/DoñaJuana.png`  
    },
    {
      id: 8,
      nombre: "Volcán Galeras",
      tipo: "Estratovolcán",
      altura: `4276 m`,
      departamento: "Nariño",
      latitud: `1.221°`,
      longitud:`-77.359°`,
      segmento:`Segmento Sur`,
      nivelDeActividad: `Cambios en la actividad volcánica`,
      ultimaErupcion: `2014`,
      imagen: `images/Galeras.png`  
    },
    {
      id: 9,
      nombre: "Volcán Las Ánimas",
      tipo: "Estratovolcán",
      altura: `4200 m`,
      departamento: "Nariño",
      latitud: `1.56697°`,
      longitud:`-76.87008°`,
      segmento:`No es`,
      nivelDeActividad: `Comportamiento estable`,
      ultimaErupcion: `No hay registro`,
      imagen: `images/LasAnimas.png`  
    },
    {
      id: 10,
      nombre: "Volcán Nevado de Santa Isabel",
      tipo: "Complejo de Domos",
      altura: `4965 m`,
      departamento: "Risaralda - Caldas - Tolima",
      latitud: `4.83°`,
      longitud:`, -75.375`,
      segmento:`Segmento Norte`,
      nivelDeActividad: `Comportamiento estable`,
      ultimaErupcion: `1943`,
      imagen: `images/NevSantaIsab.png`  
    },
    {
      id: 11,
      nombre: "Volcán Nevado del Huila",
      tipo: "Estratovolcán",
      altura: `5364 m`,
      departamento: "Huila - Tolima - Cauca",
      latitud: `2.924°`,
      longitud:`-76.029°`,
      segmento:`Segmento Central`,
      nivelDeActividad: `Cambios en la actividad volcánica`,
      ultimaErupcion: `2012`,
      imagen: `images/NevHuila.png`  
    },
    {
      id: 12,
      nombre: "Volcán Nevado del Ruiz",
      tipo: "Estratovolcán",
      altura: `5321 m`,
      departamento: "Caldas - Tolima",
      latitud: `4.895°`,
      longitud:` -75.321°`,
      segmento:`Segmento Norte`,
      nivelDeActividad: `Erupción probable en término de días o semanas`,
      ultimaErupcion: `2023`,
      imagen: `images/NevRuiz.png`  
    },
    {
      id: 13,
      nombre: "Volcán Nevado del Tolima",
      tipo: "Estratovolcán",
      altura: `5215 m`,
      departamento: "Tolima",
      latitud: `4.659°`,
      longitud:`-75.329°`,
      segmento:`Segmento Norte`,
      nivelDeActividad: `Comportamiento estable`,
      ultimaErupcion: `1943`,
      imagen: `images/NevTolima.png`  
    },
    {
      id: 14,
      nombre: "Volcán Paramillo de Santa Rosa",
      tipo: "Estratovolcán",
      altura: `4600 m`,
      departamento: "Risaralda",
      latitud: ` 4.803°`,
      longitud:` -75.375°`,
      segmento:`Segmento Norte`,
      nivelDeActividad: `Comportamiento estable`,
      ultimaErupcion: `No hay registro`,
      imagen: `images/ParamSantaRosa.png`  
    },
    {
      id: 15,
      nombre: "Volcán Paramillo del Cisne",
      tipo: "Domo Colada",
      altura: `4700 m`,
      departamento: "Caldas - Tolima",
      latitud: `4.843°`,
      longitud:`-75.352°`,
      segmento:`Segmento Norte`,
      nivelDeActividad: `Comportamiento estable`,
      ultimaErupcion: `No hay registro`,
      imagen: `images/ParamCisne.png`  
    },
    {
      id: 16,
      nombre: "Volcán Paramillo del Quindío",
      tipo: "Estratovolcán",
      altura: `4700 m`,
      departamento: "Quindío - Risaralda - Tolima",
      latitud: `4.715°`,
      longitud:`-75.389°`,
      segmento:`Segmento Norte`,
      nivelDeActividad: `Comportamiento estable`,
      ultimaErupcion: `No hay registro`,
      imagen: `images/ParamQuindio.png`  
    },
    {
      id: 17,
      nombre: "Volcán Puracé",
      tipo: "Estratovolcán",
      altura: `4650 m`, 
      departamento: "Cauca",
      latitud: ` 2.313°`,
      longitud:` -76.395°`,
      segmento:`Segmento Central`,
      nivelDeActividad: `Cambios en la actividad volcánica`,
      ultimaErupcion: `2022`,
      imagen: `images/Purace.png`  
    },
    {
      id: 18,
      nombre: "Volcán Romeral",
      tipo: "Estratovolcán",
      altura: `3858 m`,
      departamento: "Caldas",
      latitud: `5.206°`,
      longitud:` -75.364°`,
      segmento:`Segmento Norte`,
      nivelDeActividad: `Comportamiento estable`,
      ultimaErupcion: `5390 ± 500 a.C`,
      imagen: `images/Romeral.png`  
    },
    {
      id: 19,
      nombre: "Volcán San Diego",
      tipo: "Maar",
      altura: `850 m`,
      departamento: "Caldas",
      latitud: `5.649°`,
      longitud:` -74.96°`,
      segmento:`Segmento Norte`,
      nivelDeActividad: `Comportamiento estable`,
      ultimaErupcion: `>10 000 años`,
      imagen: `images/SanDiego.png`  
    },
    {
      id: 20,
      nombre: "Volcán Sotará",
      tipo: "Estratovolcán",
      altura: `4420 m`,
      departamento: "Cauca",
      latitud: `2.107°`,
      longitud:` -76.591°`,
      segmento:`Segmento Central`,
      nivelDeActividad: `Cambios en la actividad volcánica`,
      ultimaErupcion: `No hay registro`,
      imagen: `images/Sotara.png`  
    },
    {
      id: 21,
      nombre: "Volcán Sucubún",
      tipo: "Caldera Domo",
      altura: `4100 m`,
      departamento: "Cauca - Huila",
      latitud: `2.018°`,
      longitud:`-76.574°`,
      segmento:`Segmento Central`,
      nivelDeActividad: `Comportamiento estable`,
      ultimaErupcion: `No hay registro`,
      imagen: `images/Sucubun.png`  
    }
  ];
let opciones = document.querySelector(".dropdown-menu");
let menu = document.querySelector(".options");
let flecha = document.querySelector(".fa-chevron-down");
let selectedDdmenu = document.querySelector(".selected-ddmenu");
let comportamientoVolcan;
let lastTog = document.querySelector(".last-tog i");
let menuCards = document.querySelector("#menu-cards");

const carta = document.querySelector("#card");
const icono = document.querySelector(".titulo-volcano i");
const comportamientoTitulo = document.querySelector(".comportamiento");
const infoTitulo = document.querySelector(".info");
const titulosInfo = document.querySelectorAll(".titulo-info");
const titulosAns = document.querySelectorAll(".titulo-ans");
const tituloVolcan = document.querySelector(".titulo-volcano span");
const imagen = document.querySelector(".imagen");
const depart = document.querySelector(".dpt");
const altura = document.querySelector(".altura");
const tipo = document.querySelector(".tipo");
const lat = document.querySelector(".lat");
const lon = document.querySelector(".lon");
const ulte = document.querySelector(".ulte");


opciones.addEventListener("click",()=>{
    if(menu.classList.contains("cerrar-opciones")){
        menu.classList.remove("cerrar-opciones");
        flecha.classList.remove("rotate-arrow");
        
    }
    else{
        menu.classList.add("cerrar-opciones");
        flecha.classList.add("rotate-arrow");
    }
})

let segmentoNorte = volcanes.filter((e)=>{
  return e.segmento == "Segmento Norte";
});
let segmentoCentral = volcanes.filter((e)=>{
  return e.segmento == "Segmento Central";
});
let segmentoSur = volcanes.filter((e)=>{
  return e.segmento == "Segmento Sur";
});
let filtro = document.querySelectorAll(".filtro");
let segVolcanes = document.querySelector(".volcanes");

let volcanesFiltrados = [];
filtro.forEach((e)=>{
  e.addEventListener("click",()=>{
    selectedDdmenu.innerHTML = e.innerHTML;
    menu.classList.remove("cerrar-opciones");
    flecha.classList.remove("rotate-arrow");
    switch(e.classList[1]){
      case "alf":
        volcanesFiltrados = volcanes.map((e)=>{
          return `<button class="btn">${e.nombre}</button>`;
        });
        break
      case "sn":
        volcanesFiltrados = segmentoNorte.map((e)=>{
          return `<button class="btn">${e.nombre}</button>`;
        });
        break
      case "sc":
        volcanesFiltrados = segmentoCentral.map((e)=>{
          return `<button class="btn">${e.nombre}</button>`;
        });
        break
      case "sr":
        volcanesFiltrados = segmentoSur.map((e)=>{
          return `<button class="btn">${e.nombre}</button>`;
        });
        break
    }
    volcanesFiltrados = volcanesFiltrados.join("");
    segVolcanes.innerHTML = volcanesFiltrados;
    /*AQUI*/
    btnVolcanes = document.querySelectorAll(".btn");
    btnVolcanes.forEach((boton)=>{
      boton.addEventListener("click",()=> {
        volcanes.forEach((e)=>{
          if(e.nombre == boton.innerHTML){
            comportamientoVolcan = e.nivelDeActividad;
            tituloVolcan.innerHTML = e.nombre;
            comportamientoTitulo.innerHTML = e.nivelDeActividad;
            imagen.setAttribute("src",e.imagen);
            depart.innerHTML = e.departamento;
            altura.innerHTML = e.altura;
            tipo.innerHTML = e.tipo;
            lat.innerHTML = e.latitud;
            lon.innerHTML = e.longitud;
            ulte.innerHTML = e.ultimaErupcion;
          }
          switch(comportamientoVolcan){
            case "Cambios en la actividad volcánica":
              carta.style.backgroundColor = "rgb(248, 236, 62)";
              icono.style.color = "rgb(129, 117, 3)";
              icono.setAttribute("class","fa-solid fa-circle-question");
              comportamientoTitulo.style.backgroundColor = "rgb(129, 117, 3)";
              infoTitulo.style.color = "rgb(231, 220, 63)";
              titulosInfo.forEach((e)=>{
                e.style.color = "rgb(231, 220, 63)";
                e.style.borderRight = "4px solid rgb(231, 220, 63)";
              })
              titulosAns.forEach((e)=>{
                e.style.borderRight = "4px solid rgb(231, 220, 63)";
              })
              break;
            case "Comportamiento estable":
              carta.style.backgroundColor = "rgb(116, 203, 72)";
              icono.style.color = "rgb(0, 158, 21)";
              icono.setAttribute("class","fa-solid fa-circle-check");
              comportamientoTitulo.style.backgroundColor = "rgb(0, 158, 21)";
              infoTitulo.style.color = "rgb(116, 203, 72)";
              titulosInfo.forEach((e)=>{
                e.style.color = "rgb(116, 203, 72)";
                e.style.borderRight = "4px solid rgb(116, 203, 72)";
              })
              titulosAns.forEach((e)=>{
                e.style.borderRight = "4px solid rgb(116, 203, 72)";
              })
              break;
            case "Erupción probable en término de días o semanas":
              carta.style.backgroundColor = "rgb(255, 172, 77)";
              icono.style.color = "rgb(129, 53, 3)";
              icono.setAttribute("class","fa-solid fa-circle-exclamation");
              comportamientoTitulo.style.backgroundColor = "rgb(129, 53, 3)";
              infoTitulo.style.color = "rgb(255, 172, 77)";
              titulosInfo.forEach((e)=>{
                e.style.color = "rgb(255, 172, 77)";
                e.style.borderRight = "4px solid rgb(255, 172, 77)";
              })
              titulosAns.forEach((e)=>{
                e.style.borderRight = "4px solid rgb(255, 172, 77)";
              })
              break;
            case "Erupción inminente o en curso":
              carta.style.backgroundColor = "rgb(255, 77, 77)";
              icono.style.color = "rgb(129, 3, 3)";
              icono.setAttribute("class","fa-solid fa-triangle-exclamation");
              comportamientoTitulo.style.backgroundColor = "rgb(129, 3, 3)";
              infoTitulo.style.color = "rgb(255, 77, 77)";
              titulosInfo.forEach((e)=>{
                e.style.color = "rgb(255, 77, 77)";
                e.style.borderRight = "4px solid rgb(255, 77, 77)";
              })
              titulosAns.forEach((e)=>{
                e.style.borderRight = "4px solid rgb(255, 77, 77)";
              })
              break;
          }
        });
      });
    });
  })
});

let btnVolcanes;
window.addEventListener("load",()=>{
  volcanesFiltrados = volcanes.map((e)=>{
    return `<button class="btn">${e.nombre}</button>`;
  });
  volcanesFiltrados = volcanesFiltrados.join("");
  segVolcanes.innerHTML = volcanesFiltrados;
  btnVolcanes = document.querySelectorAll(".btn");

  btnVolcanes.forEach((boton)=>{
    boton.addEventListener("click",()=>{
      volcanes.forEach((e)=>{
        if(e.nombre==boton.innerHTML){
          comportamientoVolcan = e.nivelDeActividad;
          tituloVolcan.innerHTML = e.nombre;
          comportamientoTitulo.innerHTML = e.nivelDeActividad;
          imagen.setAttribute("src",e.imagen);
          depart.innerHTML = e.departamento;
          altura.innerHTML = e.altura;
          tipo.innerHTML = e.tipo;
          lat.innerHTML = e.latitud;
          lon.innerHTML = e.longitud;
          ulte.innerHTML = e.ultimaErupcion;
        }
        switch(comportamientoVolcan){
          case "Cambios en la actividad volcánica":
            carta.style.backgroundColor = "rgb(248, 236, 62)";
            icono.style.color = "rgb(129, 117, 3)";
            icono.setAttribute("class","fa-solid fa-circle-question");
            comportamientoTitulo.style.backgroundColor = "rgb(129, 117, 3)";
            infoTitulo.style.color = "rgb(231, 220, 63)";
            titulosInfo.forEach((e)=>{
              e.style.color = "rgb(231, 220, 63)";
              e.style.borderRight = "4px solid rgb(231, 220, 63)";
            })
            titulosAns.forEach((e)=>{
              e.style.borderRight = "4px solid rgb(231, 220, 63)";
            })
            break;
          case "Comportamiento estable":
            carta.style.backgroundColor = "rgb(116, 203, 72)";
            icono.style.color = "rgb(0, 158, 21)";
            icono.setAttribute("class","fa-solid fa-circle-check");
            comportamientoTitulo.style.backgroundColor = "rgb(0, 158, 21)";
            infoTitulo.style.color = "rgb(116, 203, 72)";
            titulosInfo.forEach((e)=>{
              e.style.color = "rgb(116, 203, 72)";
              e.style.borderRight = "4px solid rgb(116, 203, 72)";
            })
            titulosAns.forEach((e)=>{
              e.style.borderRight = "4px solid rgb(116, 203, 72)";
            })
            break;
          case "Erupción probable en término de días o semanas":
            carta.style.backgroundColor = "rgb(255, 172, 77)";
            icono.style.color = "rgb(129, 53, 3)";
            icono.setAttribute("class","fa-solid fa-circle-exclamation");
            comportamientoTitulo.style.backgroundColor = "rgb(129, 53, 3)";
            infoTitulo.style.color = "rgb(255, 172, 77)";
            titulosInfo.forEach((e)=>{
              e.style.color = "rgb(255, 172, 77)";
              e.style.borderRight = "4px solid rgb(255, 172, 77)";
            })
            titulosAns.forEach((e)=>{
              e.style.borderRight = "4px solid rgb(255, 172, 77)";
            })
            break;
          case "Erupción inminente o en curso":
            carta.style.backgroundColor = "rgb(255, 77, 77)";
            icono.style.color = "rgb(129, 3, 3)";
            icono.setAttribute("class","fa-solid fa-triangle-exclamation");
            comportamientoTitulo.style.backgroundColor = "rgb(129, 3, 3)";
            infoTitulo.style.color = "rgb(255, 77, 77)";
            titulosInfo.forEach((e)=>{
              e.style.color = "rgb(255, 77, 77)";
              e.style.borderRight = "4px solid rgb(255, 77, 77)";
            })
            titulosAns.forEach((e)=>{
              e.style.borderRight = "4px solid rgb(255, 77, 77)";
            })
            break;
        }
      });

    })
  });
})

lastTog.addEventListener("click",()=>{
  if(menuCards.classList.contains("absolutize")){
    menuCards.classList.remove("absolutize");
    lastTog.style.transform = "rotate(0deg)";
  }
  else{
    menuCards.classList.add("absolutize");
    lastTog.style.transform = "rotate(180deg)";
  }
});