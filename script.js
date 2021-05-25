const open =document.querySelector('#open'),
      close =document.querySelector('#close'),
      container = document.querySelector('.container');

      open.addEventListener('click', ()=> {
      	container.classList.add('show-nav')
      })

      close.addEventListener('click', ()=> {
      	container.classList.remove('show-nav')
      })

//date
document.querySelector('#date').innerHTML = new Date().getFullYear()

// heeader
window.addEventListener('scroll', () => {
  document.querySelector('.nav-links').classList.toggle('stick', window.scrollY>0)
})

document.querySelector('.nav-btn').addEventListener('click', ()=> {
  document.querySelector('.sidebar').classList.add('show-sidebar')
})
document.querySelector('.close-btn').addEventListener('click', ()=> {
  document.querySelector('.sidebar').classList.remove('show-sidebar')
})