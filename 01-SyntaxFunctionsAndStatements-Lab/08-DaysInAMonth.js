function daysInMonths(month, year){
    let days = new Date(year, month, 0).getDate() 
    
    console.log(days)
}

daysInMonths(1, 2012); // 31
daysInMonths(2, 2021); // 28
