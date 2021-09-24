function calorie(arr) {
    const object = {};
    for (let i = 0; i < arr.length; i += 2) {
        let food = arr[i];
        let calorie = Number(arr[i+1]);
        // Adding to object
        object[food] = calorie;
    }

    console.log(object);
}

calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
//{ Yoghurt: 48, Rise: 138, Apple: 52 }

calorie(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
// { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }