function datePrevious(year, month, day){
    let dateString = year + '-' + month + '-' + day; 
    let yesterday = new Date(dateString);
    yesterday.setDate(day-1);  
    // months are from 0 to 11
    console.log(yesterday.getFullYear()+`-` + (Number(yesterday.getMonth()) + 1)+ '-' + yesterday.getDate()); 
}

datePrevious(2016, 9, 30);
// 2016-9-29
datePrevious(2016, 10, 1);
// 2016-9-30