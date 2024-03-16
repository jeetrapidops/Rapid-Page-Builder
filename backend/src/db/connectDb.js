import mongoose from "mongoose";

const connectDb = async ()=>{
    try {
        const instance = await mongoose.connect(`${process.env.DB_URL}/${"jeet"}`, {
            writeConcern: { w: 'majority' },
        });
        console.log("DB connected");
    } catch (error) {
        console.log("connection failed", error.message);
    }
}
export default connectDb;