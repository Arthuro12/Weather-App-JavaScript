const dayOfWeek = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];

let currentDay = new Date().toLocaleDateString('de-DE', { weekday: 'long'});

console.log(currentDay);

let copyOfArrDayOfWeek = dayOfWeek.slice(dayOfWeek.indexOf(currentDay));

export default copyOfArrDayOfWeek;

