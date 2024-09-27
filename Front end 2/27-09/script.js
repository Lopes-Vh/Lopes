var header;
var nav;
var ul;
const itensMenu = [
    { nome: 'Início', url: 'index.html' },
    { nome: 'Sobre', url: 'sobre.html' },
    { nome: 'Contato', url: 'contato.html' }
    ];

function criarMenu() {
    header = document.createElement('header');
    nav = document.createElement('nav' in header);
    ul = document.createElement('ul' in nav);
}

function usarMenu(){
    header.style.backgroundColor = '#071D41';
    header.style.fontFamily = 'Arial, sans-serif';

    ul.style.height = '40px';
    ul.style.display = 'flex';
    ul.style.justifyContent = 'center';
    ul.style.alignItems = 'center';
    ul.style.gap = '20px';
    ul.style.listStyleType = 'none';
    ul.style.margin = '0';
    ul.style.padding = '0';

    itensMenu.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.nome;
        a.href = '#';
        a.style.textDecoration = 'none';
        a.style.color = 'white';

        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(nav);
    document.body.prepend(header);
}

criarMenu();
usarMenu();
