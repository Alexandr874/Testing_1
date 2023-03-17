
const tabs = (parentTabsSelector, tadsesSelector, contentSelector, activClass, display = 'block') => {

    const parentTabs = document.querySelector(parentTabsSelector),
          tabses = document.querySelectorAll(tadsesSelector),
          content = document.querySelectorAll(contentSelector);


          function hiddenTabsContent() {
            content.forEach(item => {
                item.style.display = 'none';
            });
            tabses.forEach(item => {
                item.classList.remove(activClass);
            });

          }
          hiddenTabsContent();

          function showTabsContent(i = 0) {
            content[i].style.display = display;
            tabses[i].classList.add(activClass);
          }
          showTabsContent();

          parentTabs.addEventListener('click', (e) => {
               

                const target = e.target;

                if (target && target.classList.contains(tadsesSelector.replace(/\./, "")) ||
                    target.parentNode.classList.contains(tadsesSelector.replace(/\./, "")))  {

                        tabses.forEach((item, i) => {
                            if (target === item || target.parentNode === item) {
                                hiddenTabsContent();
                                showTabsContent(i);
                            }

                        });
                    }




          });

};
export default tabs;