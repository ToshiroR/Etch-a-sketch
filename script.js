const container = document.getElementById('container')

 //const div = document.createElement('div')
 //div.classList.add('box')
 //container.appendChild(div)

 const div1 = document.createElement('div')
 div1.classList.add('box')
 container.appendChild(div1)
 

  for (i = 0; i < 16; i++) {
    let div = document.createElement('div');
    div.classList = 'box';
    container.appendChild(div)
  }
