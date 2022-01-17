"use strict";
(() => {
var exports = {};
exports.id = 126;
exports.ids = [126];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6722:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const mongoose = __webpack_require__(1185);
//eventModel = mongoose.model('events');
//mongoose.model('Giftnote', NoteSchema );
//   const subSchema = new mongoose.Schema({
//   });
const NoteSchema = new mongoose.Schema({
    // CustomerData: {
    //     type: Object,
    //     default: {}
    // }
    occasion: {
        type: String,
        required: true,
        maxlength: [
            200,
            'Description cannot be more than 200 characters'
        ]
    },
    budget: {
        type: Number,
        required: true,
        maxlength: [
            200,
            'Description cannot be more than 200 characters'
        ]
    },
    deliverytime: {
        type: String,
        required: true,
        maxlength: [
            200,
            'Description cannot be more than 200 characters'
        ]
    },
    deliverylocation: {
        type: String,
        required: true,
        maxlength: [
            200,
            'Description cannot be more than 200 characters'
        ]
    },
    customerNameAndNumber: {
        type: String,
        required: true,
        maxlength: [
            200,
            'Description cannot be more than 200 characters'
        ]
    },
    message: {
        type: String,
        required: true,
        maxlength: [
            200,
            'Description cannot be more than 200 characters'
        ]
    }
});
module.exports = mongoose.models.Note || mongoose.model('Giftnote', NoteSchema);


/***/ }),

/***/ 5974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2845);
/* harmony import */ var _models_Giftnote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6722);
/* harmony import */ var _models_Giftnote__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_Giftnote__WEBPACK_IMPORTED_MODULE_1__);


(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
function handler(req, res) {
    const { method  } = req;
    switch(method){
        // case 'GET':
        //     try {
        //         const note = await Note.find({});
        //         res.status(200).json({ success: true, data: note })
        //     } catch (error) {
        //         res.status(400).json({ success: false });
        //     }
        //     break;
        case 'POST':
            try {
                //body: JSON.parse(req.body)
                // const notes = await JSON.parse(req.body);
                const notessave = _models_Giftnote__WEBPACK_IMPORTED_MODULE_1___default().create(req.body);
                // const newdata = {
                //     id: Date.now(),
                //     text: occasion,
                //     text: budget,
                //     text: deliverytime,
                //     text: deliverylocation,
                //     text: customerNameAndNumber,
                //     text: message
                // }
                // notessave.push(newdata)
                res.status(201).json({
                    success: true,
                    data: notessave
                });
            } catch (error) {
                res.status(400).json({
                    success: false
                });
                console.log(error);
            }
            break;
        default:
            res.status(400).json({
                success: false
            });
            break;
    }
// export default function handler (req, res){
//     const body = req.body
//     if (!body.name){
//         return res.status(400).json({success: false});
//     }
//     const notes =  Note.create(req.body);
//     res.status(200).json({ success: true, CustomerData: notes })
// }
// occasion: req.body,
//                     budget: req.body,
//                     deliverytime: req.body,
//                     deliverylocation: req.body,
//                     customerNameAndNumber: req.body,
//                     message: req.body
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [845], () => (__webpack_exec__(5974)));
module.exports = __webpack_exports__;

})();