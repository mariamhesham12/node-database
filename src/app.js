const mongodb = require ('mongodb')

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbname = "task-1"

mongoClient.connect(connectionUrl , (error,res1) =>{
    if(error){
        return  console.log('There is a problem in connection')
    }
    console.log('The connection is done successfully')

    const db = res1.db(dbname)

    db.collection('users').insertOne({

        name:"mariam",
        age:20

    },(error,data)=>{
        if(error){
            console.log("there is a problem in insertion")
        }

        console.log("data is inserted successfully")
    })

    db.collection('users').insertOne({

        name:"rana",
        age:18

    },(error,data)=>{
        if(error){
            console.log("there is a problem in insertion")
        }

        console.log("data is inserted successfully")
    })

    db.collection('users').insertMany([
        {
            name:"youssef",
            age:25
        },
        {
            name:"hana",
            age:25
        },
        {
            name:"hesham",
            age:25
        },
        {
            name:"dina",
            age:25
        },
        {
            name:"ali",
            age:25
        },
        {
            name:"enas",
            age:42
        },
        {
            name:"ahmed",
            age:36
        },
        {
            name:"sara",
            age:50
        },
        {
            name:"adel",
            age:15
        },
        {
            name:"mona",
            age:15
        }
    ], (error,data)=>{
        if(error){
            console.log("unable to insert data")
        }

        console.log("data is inserted successfully")
    })

    db.collection('users').find({age:25}).toArray((error,data)=>{
        if(error){
            console.log("unable to insert data")
        }
        console.log(data)
    })

    db.collection('users').find({age:25}).limit(3).toArray((error,data)=>{
        if(error){
            console.log("unable to insert data")
        }
        console.log(data)
    })

    db.collection('users').updateOne({_id:mongodb.ObjectId("64db6bb1f6a496997153d327")},{
        $set: {name:"basma"}
    })
    .then((data)=>{console.log(data.modifiedCount)})
    .catch((error)=>{console.log(error)})

    db.collection('users').updateOne({_id:mongodb.ObjectId("64db6bb1f6a496997153d328")},{
        $set: {name:"medhat"}
    })
    .then((data)=>{console.log(data.modifiedCount)})
    .catch((error)=>{console.log(error)})

    db.collection('users').updateOne({_id:mongodb.ObjectId("64db6bb1f6a496997153d329")},{
        $set: {name:"hala"}
    })
    .then((data)=>{console.log(data.modifiedCount)})
    .catch((error)=>{console.log(error)})

    
    db.collection('users').updateOne({_id:mongodb.ObjectId("64db6bb1f6a496997153d32a")},{
        $set: {name:"fawzy"}
    })
    .then((data)=>{console.log(data.modifiedCount)})
    .catch((error)=>{console.log(error)})

     db.collection("users").updateMany({_id:mongodb.ObjectId("64db6bb1f6a496997153d327")},{
         $inc:{age:20}
     })
     .then((data)=>{console.log(data.modifiedCount)})
     .catch((error)=>{console.log(error)})

     db.collection("users").updateMany({},{
        $inc:{age:10}
    })
    .then((data)=>{console.log(data.modifiedCount)})
    .catch((error)=>{console.log(error)})

    db.collection("users").deleteOne({_id:mongodb.ObjectId("64db6bb1f6a496997153d327")})
    .then((data)=>{console.log(data.deletedCount)})
    .catch((error)=>{console.log(error)})

    db.collection("users").deleteMany({age:25})
    .then((data)=>{console.log(data.deletedCount)})
    .catch((error)=>{console.log(error)})


    })
