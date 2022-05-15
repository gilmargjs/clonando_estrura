//atalho para querySelector
const c = (el)=>document.querySelector(el);

//atalho para querySelectorAll
const cs = (el)=>document.querySelectorAll(el)


//loop em imagensJson que está em objetos.js
imagensJson.map((item, index) => {
    //clonando os item 
    let desenhosItem = c('.models .item').cloneNode(true)
    //preencher as informações


    //selecionando a area que vai os itens
    c('.item-area').append(desenhosItem)
})