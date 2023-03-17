
const timer = (id, deadline) => {


    function calcTime(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000 ) % 60);

              return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
              };

    }

    function timerZero(num) {
        if (num > 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function getDataTimer(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              taimerSetTimeout = setInterval(setDataTimer, 1000);

              setDataTimer();

              function setDataTimer() {
                const t = calcTime(endtime);
                days.textContent = timerZero(t.days);
                hours.textContent = timerZero(t.hours);
                minutes.textContent = timerZero(t.minutes);
                seconds.textContent = timerZero(t.seconds);

                if (t.total <= 0) {
                    days.textContent = '00';
                    hours.textContent = '00';
                    minutes.textContent ='00';
                    seconds.textContent = '00';

                    clearInterval(taimerSetTimeout);
                }
              }
    }
    getDataTimer(id, deadline);



};
export default timer;