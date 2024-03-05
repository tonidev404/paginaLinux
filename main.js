let button = document.getElementById('titulo-seccion');
let button2 = document.getElementById('titulo-seccion2');
let button3 = document.getElementById('titulo-seccion3');
let button4 = document.getElementById('titulo-seccion4');


let contenido = document.getElementById('contenido-seccion');
let contenido2 = document.getElementById('contenido-seccion2');
let contenido3 = document.getElementById('contenido-seccion3');
let contenido4 = document.getElementById('contenido-seccion4');

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


