import checkingForNumbers from './checkingForNumbers';

const form = (state) => {

    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

        checkingForNumbers('input[name="user_phone"]');


    const postForm = async(url, data) => {
        const res = await fetch(url, {
            method: "POST",
           
            body: data
        });

        return await res.text();
    };

    const status = {
        loading: 'Загрузка',
        success: 'Спасибо! Мы вам перезвоним',
        failure: 'Что то пошло не так'

    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessange = document.createElement('div');
            statusMessange.style.cssText = `
            display: block;
            border: 2px solid red;
            `;
            statusMessange.textContent = status.loading;
            item.appendChild(statusMessange);

            const formData = new FormData(item);

           if (item.getAttribute('data-calc') === 'end') {
                for(let key in state) {
                    formData.append(key, state[key]);
                }
           }

            postForm('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessange.textContent = status.success;
                })
                .catch(() => {
                    statusMessange.textContent = status.failure;
                })
                .finally(() => {
                    setTimeout(() => {
                        statusMessange.remove();
                    },3000);
                });



        });

    });

};

export default form;