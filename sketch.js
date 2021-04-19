const main_box = document.getElementById('boxes')
main_box.style.height = '400px';
main_box.style.width = '400px';

let h_mainbox = main_box.offsetHeight;
let w_mainbox = main_box.offsetWidth;

/* Specification of small squares */ 



function askUser() {
    let user_input = parseInt(prompt("Enter how many square you want in each line: ", 16));
    return user_input;
}

let number = askUser();

x = number * number
let h_square = h_mainbox / number;
let w_square = w_mainbox / number;

// Fill window with small divs
for(let i = 0; i < x; i++){
    let square = document.createElement('div');
    square.style.display = 'inline-block';
    square.style.border = '1px solid black';
    square.classList.add('little-square');
    square.style.width = `${Math.sqrt(w_square)}px`;
    square.style.height = `${Math.sqrt(h_square)}px`;
    square.style.border = '2px solid red';
    
    main_box.appendChild(square);
    
}
