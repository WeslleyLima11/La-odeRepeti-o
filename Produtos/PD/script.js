const body = window.document.body;

function paginaProdutos(){

    const header = document.createElement('header'); 
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Produtos';
    header.appendChild(h1);

    const main = document.createElement('main');

    var position = 0;

    while (position <listaProdutos.length){

        var divPD1 = document.createElement ('divPD1')
        var divPD2 = document.createElement('divPD2');
        var h2nome = document.createElement('h2');
        var img1 = document.createElement('img1');
        var img2 = document.createElement ('img2'); 
        var p = document.createElement ('p');

        divPD1.setAttribute('class', 'divPD1');
        
        divPD2.setAttribute('class','divPD2');
        
        h2nome.innerHTML = listaProdutos [position].brand;
        
        img1.setAttribute('src',`${listaProduto [position].thumbnail}`);
        img1.setAttribute('class','img1');
        
        img2.setAttribute('src',` ${listaProdutos[position].images}` );
        img2.setAttribute('class','img2');

        p.setAttribute('class', 'p');
        p.innerHTML = listaProdutos[position].category;

        divPD1.appendChild(img1);
        div

        


        main.appendChild(divPD1);


    }
 
    body.appendChild(header);
    body.appendChild(main);
    

}
body.addEventListener("load",paginaProdutos());

