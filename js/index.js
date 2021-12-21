let foodItems = [
    { "foodName": "Chicken Burrito", "foodType": "Burrito", "protein": "chicken", "calories": 975 },
    { "foodName": "Steak Burrito", "foodType": "Burrito", "protein": "steak", "calories": 945 },
    { "foodName": "Carnitas Burrito", "foodType": "Burrito", "protein": "carnitas", "calories": 1005 },
    { "foodName": "Barbacoa Burrito", "foodType": "Burrito", "protein": "barbacoa", "calories": 965 },
    { "foodName": "Chorizo Burrito", "foodType": "Burrito", "protein": "chorizo", "calories": 1095 },
    { "foodName": "Sofritas Burrito", "foodType": "Burrito", "protein": "sofritas", "calories": 945 },
    { "foodName": "Chicken Burrito Bowl", "foodType": "Burrito Bowl", "calories": 630 },
    { "foodName": "Chicken Bowl", "calories": 630 },
    { "foodName": "Steak Burrito Bowl", "foodType": "Burrito Bowl", "calories": 600 },
    { "foodName": "Steak Bowl", "calories": 600 },
    { "foodName": "Carnitas Burrito Bowl", "foodType": "Burrito Bowl", "calories": 660 },
    { "foodName": "Carnitas Bowl", "calories": 660 },
    { "foodName": "Barbacoa Burrito Bowl", "foodType": "Burrito Bowl", "calories": 620 },
    { "foodName": "Barbacoa Bowl", "calories": 620 },
    { "foodName": "Chorizo Burrito Bowl", "foodType": "Burrito Bowl", "calories": 750 },
    { "foodName": "Chorizo Bowl", "calories": 750 },
    { "foodName": "Sofritas Burrito Bowl", "foodType": "Burrito Bowl", "calories": 600 },
    { "foodName": "Sofritas Bowl", "calories": 600 },
    { "foodName": "Chicken Corn Tortilla Taco", "foodType": "Taco", "protein": "chicken", "calories": 650 },
    { "foodName": "Chicken Flour Tortilla Taco", "foodType": "Taco", "protein": "chicken", "calories": 700 },
    { "foodName": "Steak Corn Tortilla Taco", "foodType": "Taco", "protein": "steak", "calories": 620 },
    { "foodName": "Steak Flour Tortilla Taco", "foodType": "Taco", "protein": "steak", "calories": 670 },
    { "foodName": "Carnitas Corn Tortilla Taco", "foodType": "Taco", "protein": "carnitas", "calories": 680 },
    { "foodName": "Carnitas Flour Tortilla Taco", "foodType": "Taco", "protein": "carnitas", "calories": 730 },
    { "foodName": "Barbacoa Corn Tortilla Taco", "foodType": "Taco", "protein": "barbacoa", "calories": 640 },
    { "foodName": "Barbacoa Flour Tortilla Taco", "foodType": "Taco", "protein": "barbacoa", "calories": 690 },
    { "foodName": "Chorizo Corn Tortilla Taco", "foodType": "Taco", "protein": "chorizo", "calories": 770 },
    { "foodName": "Chorizo Flour Tortilla Taco", "foodType": "Taco", "protein": "chorizo", "calories": 820 },
    { "foodName": "Sofritas Corn Tortilla Taco", "foodType": "Taco", "protein": "sofritas", "calories": 620 },
    { "foodName": "Sofritas Flour Tortilla Taco", "foodType": "Taco", "protein": "sofritas", "calories": 670 },
    { "foodName": "Chicken Salad", "calories": 345, "foodType": "Salad", "sideItem": true, "dressingItem": true },
    { "foodName": "Steak Salad", "calories": 315, "foodType": "Salad", "sideItem": true, "dressingItem": true },
    { "foodName": "Carnitas Salad", "calories": 375, "foodType": "Salad", "sideItem": true, "dressingItem": true },
    { "foodName": "Barbacoa Salad", "calories": 335, "foodType": "Salad", "sideItem": true, "dressingItem": true },
    { "foodName": "Chorizo Salad", "calories": 465, "foodType": "Salad", "sideItem": true, "dressingItem": true },
    { "foodName": "Chicken Quesadilla", "calories": 610, "foodType": "Quesadilla" },
    { "foodName": "Steak Quesadilla", "calories": 550, "foodType": "Quesadilla" },
    { "foodName": "Carnitas Quesadilla", "calories": 640, "foodType": "Quesadilla" },
    { "foodName": "Cheese Quesadilla", "calories": 430, "foodType": "Quesadilla" },
    { "foodName": "Kids Chicken Taco", "calories": 205 },
    { "foodName": "Kids Steak Taco", "calories": 200 },
    { "foodName": "Chips", "calories": 540, "sideItem": true },
    { "foodName": "Chips and Salsa", "calories": 570, "sideItem": true },
    { "foodName": "Chips and Guacamole", "calories": 770, "sideItem": true },
    { "foodName": "Chips and Queso", "calories": 770, "sideItem": true }
]

// -----------------------HOISTING-------------------------//
// var userName = 'milad'

// var userName = 'raza' // we can make two same name variable with var 

// console.log(userName)

// userName = 'milad'

// var userName = 'milad'


// console.log(lastName) //let is not declared at the top of script

// let lastName = 'raza'

// let lastName = 'milad' //we cannot make tow same name varibles with let

// console.log(lastName)

// const number =  0;

// console.log(number)

// -----------------------ARROW FUNCTION-------------------------//

// old method of creating function //
// function alertGenerator(message) {
//     alert(message)
// }

// alertGenerator('Hello! Milad Raza')

// new metod or creating function //
// const alertGenerator = (message) => alert(message);

// alertGenerator('Hello! Milad Raza');

// default value assigning to function //
// const addition = (num1 = 2, num2 = 4) => alert(num1 + num2);

// addition(4, 6)

// addition(4)

// -----------------------D STRUCTURING-------------------------//
// var car = {
//     carName : 'Corolla',
//     carModal : '2021',
//     carPrice : 4000000,
//     color : 'black',
//     condition : 'New'
// }

// old method of calling and using object properties //
// console.log(car.carName)
// console.log(car.carModal)

// new method of calling and using abject properties
// const {carName, carModal} = car
// console.log(carName)
// console.log(carModal)    