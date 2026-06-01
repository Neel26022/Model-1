import mongoose from "mongoose";

const connectDB = async () => {
    
    if (mongoose.connection.readyState === 1) {
        console.log("Mongoose is already connected!");
        return; 
    }

    try {
        const dbUri = process.env.MONGODB_URL
        
        const conn = await mongoose.connect(dbUri);
        
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Database connection error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;