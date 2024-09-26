// const titulo = document.querySelector('h1')

// console.log('inner html', titulo.innerHTML)

// console.log('innerText', titulo.innerText)

// const body = document.querySelector('body');
// const ancora = document.createElement ('a');
// body.remove('h1')
// ancora.setAttribute('href', 'https://www.ifro.edu.br');
// ancora.setAttribute('target', '_blank')
// ancora.textContent = 'vasc'
// ancora.style.color = 'black'
// ancora.style.textDecoration = 'none'
// ancora.style.fontSize = '40px'
// body.appendChild(ancora)


const ul = document.createElement("ul");

document.body.appendChild(ul);

const items = ["Item 1", "Item 2", "Item 3"];


items.forEach(function(item) {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });


