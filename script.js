
//   container for the div elements

const container = document.getElementById('container')

 

 
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
grid(16)