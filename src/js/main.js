import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import timer from './modules/timer';
import bigPicture from './modules/bigPicture';
import form from './modules/form';
import changeModalState from './modules/changeModalState';



window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {
        form: 0,
        type: 'tree'
    };

    let deadline = '2023-03-28';

   

    modals(modalState);
    form( modalState);
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    timer('.timer1', deadline);
    bigPicture();
    changeModalState(modalState);



});



