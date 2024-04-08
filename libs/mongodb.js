// import mongoose from "mongoose";

// const connectMongoDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("Connected to MongoDB.");
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default connectMongoDB;

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

async function connectMongoDB() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  }
}

export default connectMongoDB;
