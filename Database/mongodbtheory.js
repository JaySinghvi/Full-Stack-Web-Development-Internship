/*database: used to store/manage(update/delete) data and access it when needed 

database table is used for storing data in relational databases 

types of database:
SQL databases have predefine no. of columns and rows in which in the data is stored in a structured way 

In NOSQL databases there are no predefined no. rows and columns and data is not structured. 

object relational mapping (ORM):- helps to get things done easily just like UI/frontend and better with nosql databases

Most used open source database management is mongo db and its syntax is:
let obj = {};//declaring object
obj = {
    custID: 1 (custID is the key and 1 is the value forming key:value pair)
    custname: "john"
    job: "clerk"
    salary: 50000
}
the key:value pairs of diff obj can be different

collection is of multiple mongodb databases
document is a set of key and value pairs

after installing mongodb open first application and then try following functions/properties:-

to create a database we type: use database name
to see databases that already exist: show databases
to create collections: db.database name.insertOne({elements})
to show collections, first do use database name and then: show collections
to find the elements: db.database name.find()
to make the elements look pretty and structures: db.database name.find().pretty()
to insert multile docs in one go: db.databse name.insertMany([{}])
to display only some docs and not all: db.database name.find().limit(no. of docs to display)
to sort the docs in ascending order w.r.t to some element: db.database name.find().sort({element name:1})
to sort the docs in descending order w.r.t to some element: db.database name.find().sort({element name:-1})
after sorting to select which doc to display: db.database name.find().sort({element name:-1}).limit(no. of docs to display)
to filter your find: db.database name.find({element name to display})
to only see the required fields:  db.database name.find({_id:0 (to remove the object id as it takes lot of space), field to see/not see: 1/0})
to display only the data which has field equal to value given: db.database name.find({element name:{$eq:"value that should it be equal to"}})
to display only the data which has field not equal to value given: db.database name.find({element name:{$ne:"value that should it be not equal to"}})
to display only the data which has field greater than value given: db.database name.find({element name:{$gt:"value that should it be greater than"}})
to display only the data which has field greater than equal to value given: db.database name.find({element name:{$gte:"value that should it be greater than equal to"}})
to display only the data which has field less than value given: db.database name.find({element name:{$lt:"value that should it be less than "}})
to display only the data which has field less than equal to value given: db.database name.find({element name:{$lte:"value that should it be less than equal to"}})
to display data that contains the value specified: db.database name.find({element name:{$in:["value1", "value2"]}})
to display data that doesn't contains the value specified: db.database name.find({element name:{$nin:["value1", "value2"]}})
to display data that contains given fields: db.employees.find(field:{$exists:true})
to display data that doesn't contains given fields: db.employees.find(field:{$exists:false})
to apply both gt and lt/multiple conditions and sort it: db.database name.find({element name:{$gt:"value1", $lt:"value2"}}).sort({field:1/-1})
to apply and(&&) operator: db.employees.find({$and:[{empdept:"IT"},{empid:35}]})
to apply or condition: db.employees.find({$or:[{empdept:"IT"},{empid:35}]})
to apply not condition: db.employees.find({empdept:{$not:{empdept:{$eq:"IT"}}}})
to compare 2 attributes/fields and display only highest data: db.database name.findOne({$expr:{$gt:["$field1", "$field2"]}}) (check if field1 is gt than field2)
to compare 2 attributes/fields and count no. of data: db.database name.countDocuments({$expr:{$gt:["$field1", "$field2"]}}) (check if field1 is gt than field2)
to update the existing data and add a new field: db.database name.updateOne({"which doc to update"}, {$set:{"col to update":"value to update with"}})
to increment the numericals: db.database name.updateOne({"which doc to update"}, {$inc:{"col to update":value to increment with}})
to decrement the numericals: db.database name.updateOne({"which doc to update"}, {$dec:{"col to update":-value to decrement with}})
to rename a field: db.database name.updateOne({field name to see if it exists:{$exists:true}}, {$rename:{"field to rename":"new name to rename with"}})
to update/rename all the same field at once: db.database name.updateMany({field name to see if it exists:{$exists:true}}, {$rename:{"field to rename":"new name to rename with"}})
to count docs which satisfies condition: db.database name.countDocuments({field name to find:{$exists:true}})
to permanently remove a field : db.database name.updateMany({field name to find:{$exists:true}}, {$unset:{field name to remove:""}})
to delete a particular field from one data: db.database name.deleteOne({field name to delete:field's value})
to delete a particular field from all data: db.database name.deleteMany({field name to delete:field's value})

instead of wrting this queries in terminal we can use app mongodb compass and work through very easily

to do nested object/add a object in existing object: db.database name.updateOne(
    {
        "field1":"value",//used to find where to add this new field
    },
    {
        $push:{
            field name:["value1", "value2"]
        }
    }
)

to 

*$- means it is a operator
object identity: it is a unique identifier to retrieve a certain document from the database and are symbolized as "_id" 
and is used while importing or exporting of data

*/



