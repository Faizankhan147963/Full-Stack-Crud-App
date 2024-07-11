import mongoose from "mongoose";

const ConnectMongodb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017", { dbName: "crudemplyee" })
        console.log("Databse Conection Successfully");
    } catch (error) {
        console.log("Databse Conection Failed");
    }
}


export default ConnectMongodb

// mongoose.connect("mongodb://localhost:27017/empdb")
// .then(()=>console.log("Mongodb connected"))
// .catch(()=>console.log("error can't connect"));

