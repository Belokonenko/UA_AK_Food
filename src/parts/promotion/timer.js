export default function timer(deadLine) {
    const seconds   = document.querySelector('#seconds');
    const minutes   = document.querySelector('#minutes');
    const hours     = document.querySelector('#hours');
    const days      = document.querySelector('#days');

    const interval = setInterval(() => {
        const timeEnd = Date.parse(deadLine) - Date.parse(new Date());
        
        if (timeEnd <= 0) {
            seconds.textContent = '00';
            minutes.textContent = '00';
            hours.textContent   = '00';
            days.textContent    = '00';
            
            clearInterval(interval) 
        }else {
            seconds.textContent = addZero( (timeEnd / 1000) % 60 );
            minutes.textContent = addZero(Math.floor( ((timeEnd / 1000) / 60) % 60 ));
            hours.textContent   = addZero(Math.floor( ((timeEnd / 1000) / 60 / 60) % 24 ));
            days.textContent    = addZero(Math.floor( ((timeEnd / 1000) / 60 / 60) / 24 ));
        }
    }, 1000);
    
    function addZero(num) {
        return (num < 10)? `0${num}`: num;
    } 

}
