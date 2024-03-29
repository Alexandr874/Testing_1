
const bigPicture = () => {

    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');


          workSection.append(imgPopup);
          imgPopup.classList.add('popup');

          imgPopup.style.justifyContent = 'center';
          imgPopup.style.alignItems = 'center';
          imgPopup.style.display = 'none';

          imgPopup.appendChild(bigImage);

          workSection.addEventListener('click', (e) => {
                e.preventDefault();

                const target = e.target;

                if (target && target.classList.contains('preview')) {
                    imgPopup.style.display = 'flex';

                    const patch = target.parentNode.getAttribute('href');
                    bigImage.setAttribute('src', patch);
                    bigImage.style.sizes = 'auto';
                    document.body.style.overflow = 'hidden';
                }

                if (target && target.matches('div.popup')) {
                    imgPopup.style.display = 'none';
                    document.body.style.overflow = '';
                }

          });






};
export default bigPicture;