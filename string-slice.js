const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const words = anthem.split(' '); //Jekhane khali jaiga Pabe sekhane split korbe
const withoutA = anthem.split('a'); // Jekhane a pabe sekhane split korbe
// console.log(withoutA);

// slice 
const smallSlice = anthem.slice(5, 13); // index 5 theke 13 porjonto slice korbe. 
// console.log(smallSlice); // output: 'Sonar Ba'

// substr
const anotherPart = anthem.substr(11, 8); // index 11 theke kotota index dorkar oi ta output dibe.
// console.log(anotherPart); // out: Bangla

// substring
const anotherAnotherPart = anthem.substring(11, 15); // index 11 theke 15 er ag porjonto output dibe.
console.log(anotherAnotherPart); // out: Bang

//concat  // Jora Laganu
const first = 'Amader';
const second = 'City';
// const fullString = first + second;
const fullString = first.concat(second).concat('abc').concat('RJ Kibria')
// console.log(fullString); // out: AmaderCityabcRj Kibria


// Join ba jog kora
const words2 = ['alim', 'badhon', 'cameron', 'david'];
// const allJoined = words2.join(''); // out:alimbadhoncamerondavid
// const allJoined = words2.join(' '); // out:alim badhon cameron david
// const allJoined = words2.join(',');//out:alim,badhon,cameron,david
// const allJoined = words2.join(', ');out:alim, badhon, cameron, david
const allJoined = words2.join('WWW'); // out:alimWWWbadhonWWWcameronWWWdavid
console.log(allJoined);