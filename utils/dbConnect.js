// // const { MongoClient } = require('mongodb');
// import mongoose from 'mongoose';

// // async function main() {
// //     const uri = `mongodb+srv://DEB:mongomongo@Giftbasket.mongodb.net`;
// //     const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
 
// //     try {
// //         await mongoClient.connect();
// //         console.log("Connected correctly to server");
// //     } catch (e) {
// //         console.error(e);
// //     } finally {
// //         await mongoClient.close()
// //     }
// //  }
 
// //  main();



// const connection = {};

// async function dbConnect() {
//     if (connection.isConnected) {
//         return;
//     }

//     const db = await mongoose.connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });

//     connection.isConnected = db.connections[0].readyState;
//     console.log(connection.isConnected);
// }

// export default dbConnect; 
import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;