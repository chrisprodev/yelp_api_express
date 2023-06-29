"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRestaurants = exports.getCategories = void 0;
const axios_1 = __importDefault(require("axios"));
const getCategories = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const options = {
            method: "GET",
            url: "https://api.yelp.com/v3/categories",
            headers: {
                Authorization: `Bearer ${process.env.YELP_API_KEY}`,
                accept: "application/json",
            },
        };
        const { data } = yield axios_1.default.request(options);
        res.status(200).json(data);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getCategories = getCategories;
const getRestaurants = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const category = req.params.category;
    const page = Number(req.params.page);
    try {
        const options = {
            method: "GET",
            url: "https://api.yelp.com/v3/businesses/search",
            params: {
                location: "San Jose, CA95127",
                term: "restaurants",
                limit: 15,
                categories: category,
                offset: (page - 1) * 15,
            },
            headers: {
                Authorization: `Bearer ${process.env.YELP_API_KEY}`,
            },
        };
        const { data } = yield axios_1.default.request(options);
        res.status(200).json(data);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getRestaurants = getRestaurants;
