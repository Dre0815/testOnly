import flatpickr from 'flatpickr';

flatpickr('.dateTimePicker.js-flatpickr-dateTime', {
    enableTime: true,
    time_24hr: true,
    altinput: true,
    altFormat: 'd M Y H:i',
    dateFormat: 'Y-m-d H:i' 
}); 