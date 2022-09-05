"use strict";

export default class inventory{
    
    constructor(){
        this.inicio = null;
        //this.posicion = 0;
        this.listSize = 0;
    }

    agregar(nuevo){
        //Si la lista esta vacia este marca el primer elemento
        if(this.inicio == null){
            this.inicio = nuevo;
            this.listSize++;
        } else if(this.listSize == 20){
            return "lleno";
        } else {
            /*
            //Si ya tiene datos se crea la variable temporal
            //Se comienza a recorrer la lista desde inicio
            let temp = this.inicio;

            //mientras que el elemento.sigiente no sea "null" no se detendra el ciclo (hasta llegar al final)
            while(temp.siguiente != null){
                //el siguiente del siguiente toma el lugar
                temp = temp.siguiente;
            }

            //aumentamos la lista y asignamos el nuevo en el siguiente del ultimo elemnto
            
            temp.siguiente = nuevo;
            */
           this.listSize++;
           this._agregar(nuevo, this.inicio)
        }
    
    }

    _agregar(nuevo, ultimo){
        if(ultimo.siguiente == null){
            ultimo.siguiente = nuevo;
        } else {
            this._agregar(nuevo, ultimo.siguiente)
        }
    }
 
    buscar(codigo){ 
        
    }

    eliminar() {
        
    }

    listar() {
       let temp = this.inicio;
       let dato = "";
       let pos = 0;

       if(this.listSize === 0){
            return "vacio";
       } else {
            while(temp != null){
                pos++
                dato += `<p>Elemento Num.${pos}: Codigo ${temp.codigo} Nombre ${temp.nombre}<p>`
                temp = temp.siguiente;
            }
       }
       console.log(dato);
       return dato;
    }    

    listarReverso() {
        
    }    

}