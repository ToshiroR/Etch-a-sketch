
//   container for the div elements

const container = document.getElementById('container')

 

 
 //    creates multible div elements!

  for (i = 0; i < 16; i++) {
    let div = document.createElement('div');
    div.classList = 'box';
    container.appendChild(div)
  }
