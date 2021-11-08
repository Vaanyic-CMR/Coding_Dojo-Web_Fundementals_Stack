function pizzaOven(crust, sauce, cheese, topping){
    let pizza = {
        crustType: crust,
        sauceType: sauce,
        cheeses: cheese,
        toppings: topping
    };
    return pizza;
}

let p1 = pizzaOven("deep dish",
                    "traditional",
                    ["mozzarella"],
                    ["pepperoni", "sausage"])
console.log('p1:', p1)

let p2 = pizzaOven("hand tossed",
                    "marinara",
                    ["mozzarella", "feta"],
                    ["mushrooms", "olives", "onions"])
console.log('p2:', p2)

let p3 = pizzaOven("stuffed",
                    "traditional",
                    ["mozzarella"],
                    ["pepperoni", "pineapple"])
console.log('p3:', p3)

let p4 = pizzaOven("thin",
                    "traditional",
                    ["feta"],
                    ["peppers", "sausage", "mushrooms"])
console.log('p4:', p4)

function randomPizza(){
    let crust = ["deep dish", "hand tossed", "stuffed", "thin"]
    let sauce = ["traditional", "marinara", "white", "sweet", "pepper", "pesto", "BBQ", "Bechamel", "Alfredo"]
    let cheese = ["mozzarella", "feta", "provolone", "cheddar", "parmesan", "gouda", "goat cheese", "gruyere", "ricotta"]
    let topping = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "pineapple", "peppers", ]

    let c = Math.floor(Math.random() * crust.length);
    let s = Math.floor(Math.random() * sauce.length);
    let ch = [];
    let t = [];

    for (let i=0; i<cheese.length; i++){
        d = Math.floor(Math.random() * 2)
        if (d == 1){
            ch.push(cheese[i])
        }
    }
    for (let i=0; i<topping.length; i++){
        d = Math.floor(Math.random() * 2)
        if (d == 1){
            t.push(topping[i])
        }
    }

    let pizza = {
        crustType: crust[c],
        sauceType: sauce[s],
        cheeses: ch,
        toppings: t
    };
    return pizza;
}
let pRndm = randomPizza()
console.log('pRndm:', pRndm)