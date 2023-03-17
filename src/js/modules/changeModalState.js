import checkingForNumbers from './checkingForNumbers';

 const changeModalState = (state) => {

    const windowsForm = document.querySelectorAll('.balcon_icons_img'),
          windowsWidth = document.querySelectorAll('#width'),
          windowsHeight = document.querySelectorAll('#height'),
          windowsType = document.querySelectorAll('#view_type'),
          windowsProfile = document.querySelectorAll('.checkbox');

          checkingForNumbers('#width');
          checkingForNumbers('#height');




          function bindActionElems(event, element, prop) {
            element.forEach((item, i) => {
                item.addEventListener(event, () => {
                   
                    switch(item.nodeName) {
                        case 'SPAN':
                            state[prop] = i;
                            break;
                        case 'INPUT':
                            if (item.getAttribute('type') === 'checkbox') {
                                i? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                                element.forEach((box, j) => {
                                   box.checked = false;
                                   if (i === j) {
                                    box.checked = true;
                                   }
                                });

                            } else {
                                state[prop] = item.value;
                            }
                            break;
                        case 'SELECT':
                            state[prop] = item.value;
                            break;

                    }
                    console.log(state);
                });
                
            });

          }
          bindActionElems('click',windowsForm, 'form');
          bindActionElems('input',windowsWidth, 'width');
          bindActionElems('input',windowsHeight, 'height');
          bindActionElems('change',windowsType, 'type');
          bindActionElems('change',windowsProfile, 'profile');


 };
 export default changeModalState;