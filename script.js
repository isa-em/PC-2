const data = [
    {
      "id": 1,
      "ciudad": "Lurín Lima",
      "nombre": "HUERTOS DE LURIN",
      "categoria": "Casa",
      "precio_actual": 14826,
      "precio_anterior": 15046,
      "area": "2500m²",
      "habitaciones": 5,
      "baños": 6,
      "parqueaderos": 8,
      "imagen": "https://img10.naventcdn.com/avisos/resize/111/01/46/40/68/47/1200x1200/1531238007.jpg?isFirstImage=true",
      "latitud": 37.068,
      "longitud": -8.8355,
    },
    {
      "id": 2,
      "ciudad": "Miraflores Lima",
      "nombre": "LA AURORA",
      "categoria": "Casa",
      "precio_actual": 12869,
      "precio_anterior": 13550,
      "area": "507m²",
      "habitaciones": 3,
      "baños": 3,
      "parqueaderos": 4,
      "imagen": "https://img10.naventcdn.com/avisos/resize/111/01/42/15/51/83/1200x1200/1451289636.jpg?isFirstImage=true",
      "latitud": 37.068,
      "longitud": -8.8355,
    },
    {
      "id": 3,
      "ciudad": "La Molina",
      "nombre": "EL PARAISO",
      "categoria": "Apartamento",
      "precio_actual": 10850,
      "precio_anterior": 11945,
      "area": "473m²",
      "habitaciones": 4,
      "baños": 3,
      "parqueaderos": 3,
      "imagen": "https://img10.naventcdn.com/avisos/resize/111/01/46/02/99/15/1200x1200/1521923435.jpg?isFirstImage=true",
      "latitud": 37.068,
      "longitud": -8.8355,
    },
    {
      "id": 4,
      "ciudad": "San Bartolo Lima",
      "nombre": "PLAYA SAN BARTOLO",
      "categoria": "Apartamento",
      "precio_actual": 7867,
      "precio_anterior": 8400,
      "area": "224m²",
      "habitaciones": 4,
      "baños": 4,
      "parqueaderos": 2,
      "imagen": "https://img10.naventcdn.com/avisos/resize/111/01/47/56/29/38/1200x1200/1559532084.jpg?isFirstImage=true",
      "latitud": 37.068,
      "longitud": -8.8355,
    },
    {
      "id": 5,
      "ciudad": "San Isidro Lima",
      "nombre": "MANUEL ROAUD Y PAZ SOLDAN",
      "categoria": "Casa",
      "precio_actual": 10826,
      "precio_anterior": 11046,
      "area": "270m²",
      "habitaciones": 3,
      "baños": 3,
      "parqueaderos": 2,
      "imagen": "https://img10.naventcdn.com/avisos/resize/111/01/44/00/99/31/1200x1200/1473003614.jpg?isFirstImage=true",
      "latitud": 37.068,
      "longitud": -8.8355,
    },
    {
      "id": 6,
      "ciudad": "La Molina Lima",
      "nombre": "VILLA MARIA",
      "categoria": "Casa",
      "precio_actual": 9875,
      "precio_anterior": 10958,
      "area": "1000m²",
      "habitaciones": 4,
      "baños": 4,
      "parqueaderos": 6,
      "imagen": "https://img10.naventcdn.com/avisos/resize/11/00/65/20/73/57/1200x1200/336808991.jpg?migr=denrk1o02dhx9j?isFirstImage=true",
      "latitud": 37.068,
      "longitud": -8.8355,
    },
    {
      "id": 7,
      "ciudad": "Mala",
      "nombre": "PUERTO MADERO",
      "categoria": "Lote",
      "precio_actual": 18980,
      "precio_anterior": 20547,
      "area": "580m²",
      "habitaciones": 4,
      "baños": 3,
      "parqueaderos": 2,
      "imagen": "https://img10.naventcdn.com/avisos/resize/111/01/47/17/90/62/1200x1200/1550038393.jpg?isFirstImage=true",
      "latitud": 37.068,
      "longitud": -8.8355,
    },
    {
      "id": 8,
      "ciudad": "Santiago de Surco",
      "nombre": "CASUARINAS",
      "categoria": "Apartamento",
      "precio_actual": 5967,
      "precio_anterior": 6854,
      "area": "315m²",
      "habitaciones": 4,
      "baños": 3,
      "parqueaderos": 2,
      "imagen": "https://img10.naventcdn.com/avisos/resize/111/01/45/04/97/61/1200x1200/1495988711.jpg?isFirstImage=true",
      "latitud": 37.068,
      "longitud": -8.8355,
    },
    {
      "id": 9,
      "ciudad": "Chacarilla San Borja",
      "nombre": "HERMANO LOBO",
      "categoria": "Apartamento",
      "precio_actual": 2386,
      "precio_anterior": 2646,
      "area": "258m²",
      "habitaciones": 4,
      "baños": 4,
      "parqueaderos": 2,
      "imagen": "https://img10.naventcdn.com/avisos/resize/111/01/46/70/32/92/1200x1200/1538405127.jpg",
      "latitud": 37.068,
      "longitud": -8.8355,
    },
    {
      "id": 10,
      "ciudad": "Cuñumbuqui Lamas",
      "nombre": "CUÑUMBUQUE",
      "categoria": "Lote",
      "precio_actual": 25726,
      "precio_anterior": 26089,
      "area": "2460m²",
      "habitaciones": 6,
      "baños": 5,
      "parqueaderos": 4,
      "imagen": "https://img10.naventcdn.com/avisos/111/01/47/57/71/88/720x532/1559865160.jpg?isFirstImage=true",
      "latitud": 37.068,
      "longitud": -8.8355,
    },
    {
     "id": 11,
      "ciudad": "San Isidro",
      "nombre": "FELIPE PARDO",
      "categoria": "Lote", 
      "precio_actual": 10850,
      "precio_anterior": 11945,
      "area": "475m²",
      "habitaciones": 5,
      "baños": 5,
      "parqueaderos": 5,
      "imagen": "https://img10.naventcdn.com/avisos/resize/111/01/46/01/31/59/1200x1200/1521530972.jpg?isFirstImage=true",
      "latitud": 37.068,
      "longitud": -8.8355,
    }
  ];
  
  const catalogo = document.getElementById("catalogo");
  
  function mostrarInmuebles(lista) {
    catalogo.innerHTML = "";
    lista.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${item.imagen}" alt="${item.nombre}">
        <div class="card-content">
          <h3>${item.nombre}</h3>
          <p>${item.ciudad} - ${item.categoria}</p>
          <p class="precio-actual">$${item.precio_actual.toLocaleString()}</p>
          <p class="precio-anterior">$${item.precio_anterior.toLocaleString()}</p>
          <p>Área: ${item.area}</p>
          <p>${item.habitaciones} hab | ${item.baños} baños | ${item.parqueaderos} parqueadero(s)</p>
        </div>
      `;
      catalogo.appendChild(card);
    });
  }
  
  function filtrar(categoria) {
    if (categoria === "Todos") {
      mostrarInmuebles(data);
    } else {
      const filtrados = data.filter(item => item.categoria === categoria);
      mostrarInmuebles(filtrados);
    }
  }
  
  // Mostrar todos al inicio
  mostrarInmuebles(data);