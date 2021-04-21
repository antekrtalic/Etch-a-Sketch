const main_box = document.getElementById('boxes')
main_box.style.height = '500px';
main_box.style.width = '500px';

let h_mainbox = main_box.offsetHeight;
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
let h_square = (h_mainbox*w_mainbox) / x;
h_square = Math.floor(Math.sqrt(h_square));
let w_square = (h_mainbox*w_mainbox) / x;
w_square = Math.sqrt(w_square);

console.log(h_square);
console.log(w_square);

// Fill window with small divs
for(let i = 0; i < x; i++){
    let square = document.createElement('div');
    square.style.display = 'inline-block';
    square.style.boxSizing = 'border-box';
    square.style.border = '1px solid black';
    square.classList.add("little-square");
    square.style.height = `${h_square}px`;
    square.style.width = `${w_square}px`;
    square.style.border = '1px solid black';
    square.style.margin = "0px";
    square.style.verticalAlign = 'top';
    //square.style.outline = 'none';
    
    main_box.appendChild(square);
    
}
