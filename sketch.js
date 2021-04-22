/* *****GAME STARTS***** */

const main_box = document.getElementById('boxes');
main_box.style.height = '500px';
main_box.style.width = '500px';

let w_mainbox = main_box.offsetWidth;
addElement(16);

/* Button event listener */
const button = document.getElementById('button').addEventListener('click', askUser);


/* Ask user how much squares does he want */

function askUser() {

    while(main_box.firstChild) {
        main_box.removeChild(main_box.firstChild);
    } 

    let user_input = parseInt(prompt("Enter how many square you want in each line: ", 16));


    while(user_input > 64) {

        user_input = parseInt(prompt("Try again. Remember, number must be between 1-64"));;
    }
    

    addElement(user_input); 
    
}


// Fill window with small divs
function addElement(number) {

    /* Specification of small squares */ 

    let x = number * number
    let w_square = (w_mainbox / number);

    for(let i = 0; i < x; i++){
        let square = document.createElement('div');
            
        square.style.boxSizing = 'border-box';
        square.style.border = '1px solid black';
        square.classList.add("little-square");
        square.style.height = 'auto';
        square.style.width = `${w_square}px`;
            

        main_box.appendChild(square);  
    }

    changeHover();
}


// Changing colors on each square
function changeHover() {
    let count = 0
    let squares = document.getElementById('boxes').childNodes;

    squares.forEach(square => {
        square.addEventListener('mouseover', mouseOver);
    });

    function mouseOver(e) {
        let random_color = Math.floor(Math.random() * 16777215).toString(16);
        count += 1;
        console.log(random_color);
        if (count % 10 === 0) {
            random_color = "#000";
            e.target.style.backgroundColor = random_color;
        } else {
            e.target.style.backgroundColor = `#${random_color}`;
        }
        
    }
}


