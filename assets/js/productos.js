productos = [
    {
        id: 1,
        nombre: "Tejido",
        tipo: "Tejido",
        precio: 10000,
        img: "./assets/img/producto1.jpg",
        artista: "Pablo Escobar",
        concepto: "Pelos"
    },
    {
        id: 2,
        nombre: "Palsa",
        tipo: "Tejido",
        precio: 10000,
        img: "./assets/img/producto2.jpg",
        artista: "Pablo Escobar",
        concepto: "Pelos"
    },
    {
        id: 3,
        nombre: "Paisan",
        tipo: "Tejido",
        precio: 10000,
        img: "./assets/img/producto1.jpg",
        artista: "Pablo Escobar",
        concepto: "Pelos"
    }        
]

function load_productos(){
    for (let index = 1; index <= productos.length; index++) {
        const producto_info = productos.find((producto) => producto.id == index);
        console.log(producto_info);
        document.getElementById(index).getElementsByClassName("card-img-top")[0].src = producto_info.img;
        document.getElementById(index).getElementsByClassName("card-title")[0].innerHTML = producto_info.nombre;
        document.getElementById(index).getElementsByClassName("card-text")[0].innerHTML = producto_info.precio;
    }
    
}