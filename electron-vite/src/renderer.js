
import './index.css';

// TODO fetch a pokeApi con su configuracion de indexHTML para aprobar la solicitud
// const fnGetData = async () => {
//     const data = await fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(e => e.json())
//     console.log(data)

// }

// fnGetData()


// const button = document.getElementById('button')
// const count = document.getElementById('count')



// button.addEventListener('click', () => {
//     const countPlus = parseInt(count.textContent) + 1
//     count.textContent = countPlus
// })



//! Navigation

const goToView1Button = document.getElementById('goToView1');
const goToView2Button = document.getElementById('goToView2');

if (goToView1Button) {
  goToView1Button.addEventListener('click', () => {
    window.electron.navigate('view1');
  });
}

if (goToView2Button) {
  goToView2Button.addEventListener('click', () => {
    window.electron.navigate('view2');
  });
}