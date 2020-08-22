"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var userModel_1 = require("../models/userModel");
var router = express_1.default.Router();
exports.router = router;
router.post('/addTestData', function (req, res) {
    var user = new userModel_1.userModel({
        name: req.body.name,
        email: req.body.email
    });
    user.save(function (err, data) {
        if (err) {
            res.json({ er: err });
        }
        else {
            res.json({ da: data });
        }
    });
});
router.get('/testData', function (req, res) {
    userModel_1.userModel.find(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.json({ da: data });
        }
    });
});
router.put('/testChange', function (req, res) {
    var user = {
        name: req.body.name,
        email: req.body.email
    };
    userModel_1.userModel.update({ _id: req.body.id }, { $set: user }, function (er, udata) {
        if (er) {
            res.json({ err: er });
        }
        else {
            res.json({ updata: udata });
        }
    });
});
router.delete('/deleteTest/:id', function (req, res) {
    userModel_1.userModel.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.json({ er: err });
        }
        res.json({ msg: 'deleted' });
    });
});
