var date1 = new Date();//gives date in the format YYYY-MM-DD and then time
console.log("date1 = " +date1);

var date2 = new Date(2022,05,28,16,0,0);//this is used when we want to provide a date and it's format is the same as above.
console.log("date2 = " +date2);//in js the jan is considered as 00 so june will become 05

console.log("current date = " +date1.getDate())//gives only the data

console.log("current month = " +date1.getMonth())//gives only the month and considers jan as 00 so june is 5

console.log("current year = " +date1.getFullYear())//gives only the year

console.log("current hour = " +date2.getHours())//gives only the hours