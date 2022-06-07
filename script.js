
//   container for the div elements

const container = document.querySelector('#container')



//   button that lets user choose size of Grid


const gridNumber = document.getElementById('number').addEventListener('click', function() {
  
  let number = prompt("size of grid");
    
    container.replaceChildren();

    if (number <= 100) {
      grid(number);
    } 
    if (number > 100) {
      prompt("less then or equal to 100");
        grid(number)
    } 
    if (number > 100) {
      prompt('you might be Dumb, try again!')
    }
});


 //    creates multible div elements into a Grid!

function grid(number) {
  for (i = 0; i < number; i++) {
    let row = document.createElement('div');
    row.classList = 'row';
    container.appendChild(row)

    for (x = 0; x < number; x++) {
      let column = document.createElement('div');
      column.classList = 'column';
      column.style.backgroundColor = 'white';
      row.appendChild(column)
    }
  
  }

};

//    chooses a random number for rainbow Effect

function random(num) {
  return Math.floor(Math.random() * (num+1));
}

//    chooses a random color

function rndCol() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return rndCol
};


  
//    on mouseover, changes the color randomly

container.addEventListener('mouseover', event => {
  event.target.style.backgroundColor = rndCol();
});
