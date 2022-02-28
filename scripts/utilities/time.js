const dayOfWeek = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];

let currentDay = new Date().toLocaleDateString('de-DE', { weekday: 'long'});

console.log(currentDay);

let arrDayInOrder = dayOfWeek.slice(dayOfWeek.indexOf(currentDay)).concat(dayOfWeek.slice(0, dayOfWeek.indexOf(currentDay)));

console.log(arrDayInOrder)

export default arrDayInOrder;

