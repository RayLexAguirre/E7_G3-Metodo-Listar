![Logo](img/ucol-logo.jpg)

# Ejercicio 7: Crear App para control un inventario (método Listar)

> Primera Parcial

- FACULTAD DE TELEMATICA
- INGENIERÍA EN SOFTWARE
- “3ºG”
- ESTRUCTURA DE DATOS
- CATEDRATICO: RAMIREZ GONZALEZ HUMBERTO
- AGUIRRE ROMERO RAMÓN ALEJANDRO

## OBJETIVO

Sobre el código trabajando en la sesión del 29 de septiembre (clase persona y clase grupo, usando listas enlazadas) se deberá trabajar el método listar() que devuelva una cadena de texto con la información de los elementos que están en el grupo.

> ENTREGA: MARTES 05 DE OCTUBRE DEL 2021

## EXPLICACIÓN DEL PROCESO

Crear una interfaz en HTML para manipular un INVENTARIO de productos, para almacenar la información debemos usar un vector (no usar BDs ni local storage) y limitarlo a máximo 20 productos.
La información de cada producto debe permitir guardar el código, el nombre, cantidad y el costo, además como propiedad calcular el valor de mercancía que sería un valor calculado por la cantidad y el costo.

En la interfaz (una sola pantalla) tener los inputs para cada dato, los botones para las tareas a realizar que se describen a continuación y un div para ir describiendo las actividades que se van realizando y sus resultados.
Botones :
Agregar nuevo producto
Eliminar un producto por código, deberá devolver el producto (si existe) o null
Buscar un producto por código
Recuperar todos los productos //listar
Recuperar todos los productos en orden inverso a como se ingresaron//listar inverso
