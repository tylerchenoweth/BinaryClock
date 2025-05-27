
const d = new Date();

let time = d.getTime();

console.log(d);

let hour = d.getHours();
let minute = d.getMinutes();
let second = d.getSeconds();

// let day = d.getDay();
// let month = d.getMonth();
// let year = d.getFullYear();




console.log("Breakdown: ")



function convert_to_binary(decimalNumber) {
    return decimalNumber.toString(2);
}


const map = new Map();

map.set("hour_tens", convert_to_binary(Math.floor(hour/10)));
map.set("hour_units", convert_to_binary(Math.floor(hour%10)));

map.set("minute_tens", convert_to_binary(Math.floor(minute/10)));
map.set("minute_units", convert_to_binary(Math.floor(minute%10)));

map.set("second_tens", convert_to_binary(Math.floor(second/10)));
map.set("second_units", convert_to_binary(Math.floor(second%10)));


console.log(hour, " ", map.get("hour_tens"));
console.log(hour, " ", map.get("hour_units"));
console.log(minute, " ", map.get("minute_tens"));
console.log(minute, " ", map.get("minute_units"));
console.log(second, " ", map.get("second_tens"));
console.log(second, " ", map.get("second_units"));



let tmp = map.get("second_units");

let diff = 4-tmp.length;
let diff_str = "";

for(let i=0; i<diff; i++) {
    diff_str += "0";
}

diff_str += tmp;



console.log(diff_str);





// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function demo() {
//     console.log("Start");
//     await sleep(1000);
//     console.log("End after 1 second");
// }
  
// demo()