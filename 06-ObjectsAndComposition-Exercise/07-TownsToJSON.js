function towns(arr) {
    const result = [];

    //remove "| " and " |" with slice or substring
    let [town, latitude, longitude] = arr[0].split(' | ');
    town = town.slice(2,);
    longitude = longitude.slice(0, -2);

    for (let i = 1; i < arr.length; i++) {
        let obj = {};
        let [currentTown, currLatitude, currLongitude] = arr[i].split(' | ');

        //remove "| " and " |" with slice or substring
        obj[town] = currentTown.slice(2,);
        obj[latitude] = Number(Number(currLatitude).toFixed(2));
        obj[longitude] = Number(Number(currLongitude.slice(0, -2)).toFixed(2));

        result.push(obj);
    };

    return JSON.stringify(result);
}

console.log(towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));
/*
[{"Town":"Sofia",
  "Latitude":42.7,
  "Longitude":23.32
},
{"Town":"Beijing", 
 "Latitude":39.91, 
 "Longitude":116.36
}]
*/

console.log(towns(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
));
/*
[{"Town":"Veliko Turnovo",
  "Latitude":43.08,
  "Longitude":25.62
},
{"Town":"Monatevideo",
 "Latitude":34.5,
 "Longitude":56.11
}]
*/
