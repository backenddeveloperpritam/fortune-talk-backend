import mongoose from 'mongoose';

// const dbURI = 'mongodb+srv://astrokunj01:w7vbqjq20qFsKgRC@astrokunj.xdblqsn.mongodb.net/Astrokunj';
const dbURI = 'mongodb+srv://Durgesh:Durgesh02042001@cluster0.skc6gmq.mongodb.net/database?retryWrites=true&w=majority';

export default function dbConnection() {
    mongoose.connect(dbURI, { bufferCommands: false });
    console.log("connected to database");
}
