function convert_to_binary(decimalNumber, num_digits) {
    let formal_num = "";
    let num = decimalNumber.toString(2);

    if(num_digits > num.length) {
        for(let i=0; i<(num_digits-num.length); i++) {
            formal_num += "0";
        }
    }
    
    formal_num += num;

    return formal_num;
}


export function getBinary(date_time) {

    // Mod 12 to convert from military time
    let hour = date_time.toLocaleString('en-US', {
        hour: 'numeric',
        hour12: false,
    }) % 12;
    let minute = date_time.getMinutes();
    let second = date_time.getSeconds();

    if(hour === 0) {
        hour = 12;
    }

    const map = new Map();

    // Hours
    map.set("hour_tens", convert_to_binary(Math.floor(hour/10), 2));
    map.set("hour_units", convert_to_binary(Math.floor(hour%10), 4));

    // Minutes
    map.set("minute_tens", convert_to_binary(Math.floor(minute/10), 3));
    map.set("minute_units", convert_to_binary(Math.floor(minute%10), 4));

    // Seconds
    map.set("second_tens", convert_to_binary(Math.floor(second/10), 3));
    map.set("second_units", convert_to_binary(Math.floor(second%10), 4));


    return map;
}