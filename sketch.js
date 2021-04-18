const main_box = document.querySelector('#boxes');

/* Specification of small squares */ 

const square = document.createElement('div');
square.style.border = '1px solid black';
square.style.width = '3px';
square.style.height = '3px';



for(let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.style.border = '1px solid black';
    square.style.width = '3px';
    square.style.height = '3px';
    main_box.appendChild(square);
}