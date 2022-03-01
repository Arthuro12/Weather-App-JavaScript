const dayOfWeek = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];

let currentDay = new Date().toLocaleDateString('de-DE', { weekday: 'long'});

//Gibt eine Kopie des Arrays zurück und fügt das erste Element bis das Element an der Stelle des aktuellen Tags
let copyOfArrDayOfWeek = dayOfWeek.slice(dayOfWeek.indexOf(currentDay)).concat(dayOfWeek.slice(0, dayOfWeek.indexOf(currentDay) + 1));

export default copyOfArrDayOfWeek;

