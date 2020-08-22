"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var demoApi_1 = require("./api/demoApi");
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
//init app
var app = express_1.default();
//connect to db
mongoose_1.default.connect('mongodb://localhost:27017/demoTest', { useNewUrlParser: true })
    .then(function () { return console.log('connected to db'); })
    .catch(function (err) { return console.log(err); });
//fetch form data
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
//routes
app.use('/tester', demoApi_1.router);
var port = process.env.PORT || 3000;
app.listen(port, function () { return console.log('sever run at port ' + port); });
