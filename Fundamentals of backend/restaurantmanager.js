class  restaurantmanager{//this is array that has all these objects and class is like a blueprint
    restaurantlist = [
        {
            id : 1,
            restname : 'KFC',
            address : "anand vihar",
            city : "delhi"
        },

        {
            id : 2,
            restname : 'dominoes',
            address : "jai mata di",
            city : "mumbai"
        },

        {
            id : 3,
            restname : 'MCd',
            address : "manipal",
            city : "udupi"
        },

        {
            id : 4,
            restname : 'BR',
            address : "cst",
            city : "mumbai"
        }
    ]

        printAllRestaurantNames = () => {//this function is used to print all restaurnat names using this function
            return this.restaurantlist.map(restaurant => restaurant.restname)//this is used for current class members and map function is used to iterate on every element of the array which is obj and inside obj is id,restname,address,city
        }

        filterrestbycity = (cityName) => {//filtering by city names to give restname according to city
            return this.restaurantlist.filter(restaurant => restaurant.city == cityName)
        }

        numrestincity = (cityName) => {
            return this.restaurantlist.length(restaurant => restaurant.city == cityName)
        }

        }

const restaurantObj = new restaurantmanager()//obj is used to give life to the blueprint
console.log(restaurantObj.printAllRestaurantNames())

console.log(restaurantObj.filterrestbycity('mumbai'))

console.log(restaurantObj.numrestincity('mumbai'))


//assingment to print no. of restname in a city






