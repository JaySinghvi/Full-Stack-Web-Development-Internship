//it simply refers to an object/html element/global object

const person = {
    course:"fullstack web dev",//key:value
    duration:"20 weeks",
    frontend:"react",
    backend:"node js",
    courseslist: function(){//we can have function also member of an object
        return this.frontend + " and " + this.backend
    }

}

console.log("courselist = " +person.courseslist())
console.log("courselist = " +person.duration)

