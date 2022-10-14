

const input = document.querySelector('input');

const button = document.querySelector('button');

const list = document.querySelector('ul');


button.addEventListener('click', function() {
    const mychap = input.value;
    input.value = ''; 

    const listchap = document.createElement('li');

    const listtext = document.createElement('span');

    const listbutton = document.createElement('button');

    listchap.appendChild(listtext);
    listtext.textContent = mychap;
    listchap.appendChild(listbutton);
    listbutton.textContent = 'delete';
    list.appendChild(listchap);

    listbutton.addEventListener('click', function() {
        list.removeChild(listchap);
      });

      input.focus();
    });

