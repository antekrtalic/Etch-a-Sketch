const main_box = document.getElementById('boxes');
main_box.style.height = '500px';
main_box.style.width = '500px';

let w_mainbox = main_box.offsetWidth;

/* Button event listener */
const button = document.getElementById('button').addEventListener('click', deleteSquare);

function deleteSquare(){
    while(main_box.firstChild) {
        main_box.removeChild(main_box.firstChild);
    }
}


/* Ask user how much squares does he want */

function askUser() {
    let user_input = parseInt(prompt("Enter how many square you want in each line: ", 16));
    return user_input;
}

let number = askUser();

/* Specification of small squares */ 

x = number * number
let w_square = (w_mainbox / number);


// Fill window with small divs
for(let i = 0; i < x; i++){
    let square = document.createElement('div');
    
    square.style.boxSizing = 'border-box';
    square.style.border = '1px solid black';
    square.classList.add("little-square");
    square.style.height = 'auto';
    square.style.width = `${w_square}px`;
    
    main_box.appendChild(square);
    
}

// Changing colors on each square

let duljina = document.getElementsByClassName('little-square').length;
console.log(duljina);