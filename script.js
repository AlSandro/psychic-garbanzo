const open =document.querySelector('#open'),
      close =document.querySelector('#close'),
      container = document.querySelector('.container');

      open.addEventListener('click', ()=> {
      	container.classList.add('show-nav')
      })

      close.addEventListener('click', ()=> {
      	container.classList.remove('show-nav')
      })
      

// modal window
 const modalClose = document.querySelector('.modal-close'),
      modalOpen = document.querySelector('.open-modal'),
      modal = document.querySelector('.modal')


      modalOpen.addEventListener('click', ()=> {
        modal.classList.add('show')
        container.classList.add('blur')
        document.body.style.overflow = 'hidden'
      })

      closeModal = () => {
        modal.classList.remove('show')
        container.classList.remove('blur')
        document.body.style.overflow = ''
      }

      modal.addEventListener('click', (e)=> {
        if (e.target === modal || e.target.classList.contains('modal-close')){
            closeModal()
        }
      })
