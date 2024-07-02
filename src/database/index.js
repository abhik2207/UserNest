import mongoose from 'mongoose';

const connectionURL = 'mongodb://127.0.0.1:27017/userManagement';

const connectToDB = async () => {
    mongoose.connect(connectionURL)
    .then(() => {
        console.log('--- DATABASE CONNECTED SUCCESSFULLY! ---');
    })
    .catch((err) => {
        console.log(err);
    });
}

export default connectToDB;