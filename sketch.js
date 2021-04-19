const main_box = document.getElementById('boxes')

/* Specification of small squares */ 



function askUser() {
    let user_input = parseInt(prompt("Enter how many square you want in each line: ", 16));
    return user_input;
}

let number = askUser();

x = 11 * 11;

// Fill window with small divs

for(let i = 0; i < x; i++) {
    let square = document.createElement('div');
    square.style.border = '1px solid black';
    square.style.width = '3px';
    square.style.height = '3px';
    main_box.appendChild(square);
}