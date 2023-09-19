let menu = {
    courses: {
        // will eventually be used to map between courses and dishes available
        appetizers: [{name: 'nachoes', price: 33}, {name: 'mozz sticks', price: 44}, {name: 'spinach dip', price: 17}],
        mains: [{name: 'steak', price: 400}, {name: 'pasta', price: 33}, {name: 'deep dish pizza', price: 40}],
        desserts: [{name: 'ice cream', price: 44}, {name: 'cheese cake', price: 24}, {name: 'smores', price: 10}]
    },
    addDishToCourse: function(courseName, dishName, dishPrice){
        let dish = {
            name: dishName,
            price: dishPrice
        }
        this.courses[courseName].push(dish)
    },
    getRandomDishFromCourse: function(courseName){
        let dishes = this.courses[courseName]
        const randomize = Math.floor(Math.random() * dishes.length) 
       return dishes[randomize]
    }, generateRandomMeal: function(){
        const appetizer = this.getRandomDishFromCourse('appetizers')
         const mains = this.getRandomDishFromCourse('mains')
         const desserts = this.getRandomDishFromCourse('desserts')
const total = appetizer.price + mains.price + desserts.price
console.log(`meal price is $${total}.  For your appetizer you are eating ${appetizer.name}, for your main course you are having ${mains.name}, and for dessert you will be served our finest ${desserts.name}.`)
    }

}
let meal = menu.generateRandomMeal()

console.log(meal)
