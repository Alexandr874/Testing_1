
const modals = (state) => {

   function modaWindow(openSelector, modalselector, closeModalSelector, closeClickOverlay = true) {
     
    const openModal =  document.querySelectorAll(openSelector),
          modal = document.querySelector(modalselector),
          closeModal = document.querySelector(closeModalSelector),
          windows = document.querySelectorAll('[data-window]'),
          scroll = calcScroll();


          openModal.forEach(item => {
            item.addEventListener('click', (e) => {

              if (e.target) {
                e.preventDefault();
              }

              if (e.target.classList.contains('popup_calc_button')) { 
                if (!state.form && !state.width && !state.height) {
                   document.querySelector('.popup_calc_button').setAttribute('disabled', true);
                   document.querySelector('.popup_calc_button').removeAttribute('disabled');
                   return;
                 }                           

             } 


             if (e.target.classList.contains('popup_calc_profile_button')) {  
                  if (!state.type || !state.profile) {
                    document.querySelector('.popup_calc_profile_button').setAttribute('disabled', true);
                    document.querySelector('.popup_calc_profile_button').removeAttribute('disabled');
                    return;
               }                           

           }  

             
                 windows.forEach(item => {
                  item.style.display = 'none';
                }); 

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
              });

          });

          closeModal.addEventListener('click', () => {

            windows.forEach(item => {
              item.style.display = 'none';
            });

             modal.style.display = 'none';
             document.body.style.overflow = '';
             document.body.style.marginRight = `0px`;
          }); 
          
          modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {

              windows.forEach(item => {
                item.style.display = 'none';
              });

                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            }

          });

          function modalTimer(selector, time) {
            setTimeout(() => {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = 'hidden';
            },time);
        }

        function calcScroll() {
          let div = document.createElement('div');
          div.style.width = '50px';
          div.style.height = '50px';
          div.style.overflowY = 'scroll';
          div.style.visibility = 'hidden';

          document.body.appendChild(div);
          let scrollWidth = div.offsetWidth - div.clientWidth;
          div.remove();

          return scrollWidth;
        } 
        
       

   }

   

   modaWindow('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
   modaWindow ('.phone_link', '.popup', '.popup .popup_close');
   modaWindow('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
   modaWindow('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
   modaWindow('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

   //modalTimer('.popup', 3000);

   


};
export default modals;