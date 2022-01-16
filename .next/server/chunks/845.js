"use strict";
exports.id = 845;
exports.ids = [845];
exports.modules = {

/***/ 845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
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

const connection = {
};
async function dbConnect() {
    if (connection.isConnected) {
        return;
    }
    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    connection.isConnected = db.connections[0].readyState;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);


/***/ })

};
;