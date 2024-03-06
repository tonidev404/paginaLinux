//Selección de los títulos de las secciones
let button = document.getElementById('titulo-seccion');
let button2 = document.getElementById('titulo-seccion2');
let button3 = document.getElementById('titulo-seccion3');
let button4 = document.getElementById('titulo-seccion4');

//Selección de los contenidos de las secciones
let contenido = document.getElementById('contenido-seccion');
let contenido2 = document.getElementById('contenido-seccion2');
let contenido3 = document.getElementById('contenido-seccion3');
let contenido4 = document.getElementById('contenido-seccion4');


//Añadir y eliminar atributos, basicamente lo que hace que las secciones
//se desplieguen

//Seccion1
console.log(button);
button.addEventListener('click', () =>{
    if(contenido.hasAttribute('class')){
        let nodeAtr = contenido.getAttributeNode('class');
        if(nodeAtr.value == 'novisible'){
            contenido.removeAttribute('class');
            let atr = document.createAttribute('class');
            atr.value = 'visible';
            contenido.setAttributeNode(atr);
        }else if(nodeAtr.value == 'visible'){
            button.removeAttribute('class');
            let atr = document.createAttribute('class');
            atr.value = 'novisible';
            contenido.setAttributeNode(atr);
        }

    }else{
        console.log('algo esta saliendo mal');
    }
});
//Seccion2
button2.addEventListener('click', () =>{
    if(contenido2.hasAttribute('class')){
        let nodeAtr = contenido2.getAttributeNode('class');
        if(nodeAtr.value == 'novisible'){
            contenido2.removeAttribute('class');
            let atr = document.createAttribute('class');
            atr.value = 'visible';
            contenido2.setAttributeNode(atr);
        }else if(nodeAtr.value == 'visible'){
            button2.removeAttribute('class');
            let atr = document.createAttribute('class');
            atr.value = 'novisible';
            contenido2.setAttributeNode(atr);
        }

    }else{
        console.log('algo esta saliendo mal');
    }
});
//Seccion3
button3.addEventListener('click', () =>{
    if(contenido3.hasAttribute('class')){
        let nodeAtr = contenido3.getAttributeNode('class');
        if(nodeAtr.value == 'novisible'){
            contenido3.removeAttribute('class');
            let atr = document.createAttribute('class');
            atr.value = 'visible';
            contenido3.setAttributeNode(atr);
        }else if(nodeAtr.value == 'visible'){
            button3.removeAttribute('class');
            let atr = document.createAttribute('class');
            atr.value = 'novisible';
            contenido3.setAttributeNode(atr);
        }

    }else{
        console.log('algo esta saliendo mal');
    }
});
//Seccion4
button4.addEventListener('click', () =>{
    if(contenido4.hasAttribute('class')){
        let nodeAtr = contenido4.getAttributeNode('class');
        if(nodeAtr.value == 'novisible'){
            contenido4.removeAttribute('class');
            let atr = document.createAttribute('class');
            atr.value = 'visible';
            contenido4.setAttributeNode(atr);
        }else if(nodeAtr.value == 'visible'){
            button4.removeAttribute('class');
            let atr = document.createAttribute('class');
            atr.value = 'novisible';
            contenido4.setAttributeNode(atr);
        }

    }else{
        console.log('algo esta saliendo mal');
    }
});

//Validar los formularios por secciones

//sección 1
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let input4 = document.getElementById('input4');
let comprobar = document.getElementById('comprobar');
let aciertosInput = document.getElementById('aciertosInput');
let mostrar = document.getElementById('mostrarRespuestas');

function validarRespuestas(){
    let aciertos = 0;
    if(input1.value === "Si"){
        aciertos++;
        input1.style.border = "2px solid green";
    }else{
        input1.style.border = "1px solid red";
    }
    if(input2.value === "Unix"){
        aciertos++;
        input2.style.border = "2px solid green";
    }else{
        input2.style.border = "1px solid red";
    }
    if(input3.value === "Shell"){
        aciertos++;
        input3.style.border = "2px solid green";
    }else{
        input3.style.border = "1px solid red";
    }
    if(input4.value === "Un pingüino"){
        aciertos++;
        input4.style.border = "2px solid green";
    }else{
        input4.style.border = "1px solid red";
    }
    return aciertos;
}

comprobar.addEventListener('click', () => {
    aciertosInput.value = validarRespuestas();
    let nodeAtr = mostrar.getAttributeNode('class');
    if(nodeAtr.value == 'novisible'){
        mostrar.removeAttribute('class');
        let atr = document.createAttribute('class');
        atr.value = 'visible';
        mostrar.setAttributeNode(atr);
    }
})
mostrar.addEventListener('click', () => {
    input1.value = "Si";
    input2.value = "Unix";
    input3.value = "Shell";
    input4.value = "Un pingüino";
})



