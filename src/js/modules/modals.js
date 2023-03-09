
const modals = () => {

   const modaWindow = (openSelector, modalselector, closeModalSelector) => {
     
    const openModal =  document.querySelectorAll(openSelector),
          modal = document.querySelector(modalselector),
          closeModal = document.querySelector(closeModalSelector);


          openModal.forEach(item => {
            item.addEventListener('click', () => {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
              });

          });

          closeModal.addEventListener('click', () => {
             modal.style.display = 'none';
             document.body.style.overflow = '';
          }); 
          
          document.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }

          });
       

   };

   function modalTimer(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        },time);
   }
   modalTimer('.popup', 3000);

   modaWindow('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
   modaWindow ('.phone_link', '.popup', '.popup .popup_close');




};
export default modals;