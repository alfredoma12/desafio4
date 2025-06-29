const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "assets/img/edificio1.jpeg",
    descripcion: "Este apartamento de lujo ofrece una vista espectacular...",
    ubicacion: "Av. Las Condes 12345, Santiago",
    habitaciones: 3,
    costo: 500000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Apartamento acogedor en zona central",
    src: "assets/img/edificio2.jpeg", 
    descripcion: "Ideal para los amantes las fiestas ",
    ubicacion: "Santiago centro, Chile",
    habitaciones: 2,
    costo: 320000,
    smoke: true,
    pets: false
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "assets/img/edificio3.jpeg",
    descripcion: "Una experiencia inigualable cercano al corazón de la ciudad...",
    ubicacion: "Vitacura, Santiago",
    habitaciones: 4,
    costo: 800000,
    smoke: false,
    pets: false
  },
  {
    nombre: "Departamento céntrico económico",
    src: "assets/img/edificio4.jpeg",
    descripcion: "Ubicación estratégica y accesible.",
    ubicacion: "Santiago Centro",
    habitaciones: 1,
    costo: 200000,
    smoke: true,
    pets: true
  }
];

const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "assets/img/arriendo1.jpeg",
    descripcion: "Perfecto para quienes desean estar cerca de todo.",
    ubicacion: "Santiago centro, Santiago",
    habitaciones: 2,
    costo: 250000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "assets/img/arriendo2.jpeg",
    descripcion: "Despierta con el sonido de las olas.",
    ubicacion: "Viña del Mar",
    habitaciones: 3,
    costo: 360000,
    smoke: true,
    pets: false
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "assets/img/arriendo3.jpeg",
    descripcion: "Tranquilidad y seguridad para toda la familia.",
    ubicacion: "La Reina, Santiago",
    habitaciones: 3,
    costo: 300000,
    smoke: false,
    pets: false
  },
  {
    nombre: "Estudio minimalista",
    src: "assets/img/arriendo4.jpeg",
    descripcion: "Pequeño, cómodo y eficiente.",
    ubicacion: "Ñuñoa, Santiago",
    habitaciones: 1,
    costo: 180000,
    smoke: true,
    pets: true
  }
];

function renderizarPropiedades(lista, contenedorId, max = lista.length) {
  const contenedor = document.getElementById(contenedorId);
  contenedor.innerHTML = "";

  lista.slice(0, max).forEach(propiedad => {
    const card = `
      <div class="card">
        <img src="${propiedad.src}" alt="${propiedad.nombre}" />
        <h3>${propiedad.nombre}</h3>
        <p>${propiedad.descripcion}</p>
        <ul>
          <li><strong>Ubicación:</strong> ${propiedad.ubicacion}</li>
          <li><strong>Habitaciones:</strong> ${propiedad.habitaciones}</li>
          <li><strong>Precio:</strong> $${propiedad.costo}</li>
          <li class="${propiedad.smoke ? 'permitido' : 'prohibido'}">Fumar: ${propiedad.smoke ? 'Permitido' : 'No permitido'}</li>
          <li class="${propiedad.pets ? 'permitido' : 'prohibido'}">Mascotas: ${propiedad.pets ? 'Permitido' : 'No permitido'}</li>
        </ul>
      </div>`;
    contenedor.innerHTML += card;
  });
}
