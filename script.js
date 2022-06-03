
//   container for the div elements

const container = document.getElementById('container')


//   button that lets user choose size of Grid

const gridNumber = document.getElementById('number').addEventListener('click', function() {
  let number = prompt("size of grid");
    
    if (number <= 100) {
      grid(number);
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
      row.appendChild(column)
    }
  
  }

};


