"use strict";

import Product from "./producto.js";
import inventory from "./lote.js";

class App{
    constructor(){
        this.lote = new inventory();

        let btnAdd = document.getElementById('btnAdd');
        btnAdd.addEventListener('click', this.addProduct);

        let btnSearch = document.getElementById('btnSearch');
        btnSearch.addEventListener('click', this.searchProduct);

        let btnDelete = document.getElementById('btnDelete');
        btnDelete.addEventListener('click', this.deleteProduct);

        let btnList = document.getElementById('btnList');
        btnList.addEventListener('click', this.listProduct);

        let btnListReverse = document.getElementById('btnListReverse');
        btnListReverse.addEventListener('click', this.reverseListProduct);


    }

    addProduct = () => {
        let codigo = document.getElementById('txtCode').value;
        let nombre = document.getElementById('txtName').value;
        let cantidad = document.getElementById('txtQuantity').value;
        let costo = document.getElementById('txtCost').value;

        let producto = new Product(codigo, nombre,cantidad, costo);

        let funcion = this.lote.agregar(producto);
        
        if(funcion === "lleno") {
            document.getElementById('detalles').innerHTML += `
            <p>Se agotaron los espacios por lo que el producto ${producto.codigo} no se agrego</p>

        `;} else {
            document.getElementById('detalles').innerHTML += `
            <p>Se agrego el producto ${producto.codigo} correctamente</p>

        `;
        }
        
    }

    searchProduct = () => {
        let codigo = document.getElementById('txtCode').value;
        let buscado = this.lote.buscar(codigo);
        let detalles = document.getElementById('detalles');
        if (buscado == null)
        detalles.innerHTML += '<p>No se encontro</p>';
        else
        detalles.innerHTML += buscado.infoHtml();
    }

    deleteProduct = () => {
        let codigo = document.getElementById('txtCode').value;
        let buscado = this.lote.buscar(codigo);
        let detalles = document.getElementById('detalles');
        if (buscado == null){
            detalles.innerHTML += '<p>No se encontro</p>';
        } else { 
            detalles.innerHTML +=`<p>El producto ${codigo} ha sido eliminado</p>`;
            this.lote.eliminar();  
        }
        
    }

    listProduct = () => {
        if(this.lote.listar() === "vacio"){
            detalles.innerHTML += '<p>No se encontro ningun elemento</p>';
        } else {
            detalles.innerHTML += `<p>${this.lote.listar()}</p>`;
        }
    }

    reverseListProduct = () => {
        if(this.lote.listarReverso() === "vacio"){
            detalles.innerHTML += '<p>No se encontro ningun elemento</p>';
        } else {
            detalles.innerHTML += `<p>${this.lote.listarReverso()}</p>`;
        };
    }

}
new App();