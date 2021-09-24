function heroic(input) {
    const result = [];

    /*
    input.forEach((el) => {
        ... to do
    })
    */

    for (let token of input) {
        let hero = {};
        let [name, level, items] = token.split(' / ');

        // case without items
        // items ? items.split(', ') : []
        if (items == undefined) {
            items = [];
        } else {
            items = items.split(', ');
        }

        hero.name = name;
        hero.level = Number(level);
        hero.items = items;

        result.push(hero);
    }

    console.log(JSON.stringify(result));
}

heroic(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);
/*
[{"name":"Isacc","level":25,
"items":["Apple","GravityGun"]},
{"name":"Derek","level":12,
"items":["BarrelVest","DestructionSword"]},
{"name":"Hes","level":1,
"items":["Desolator","Sentinel","Antara"]}]
*/

heroic(['Jake / 1000 / Gauss, HolidayGrenade']);
/*
[{"name":"Jake","level":1000,
"items":["Gauss","HolidayGrenade"]}]
*/