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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../server/db");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var client, resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_1.connectClient)()];
                case 1:
                    client = _a.sent();
                    return [4 /*yield*/, client.collection("drinks").deleteMany({})];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, client.collection("drinks").insertMany([
                            {
                                id: 1,
                                name: "Mojito",
                                ingredients: [
                                    "2 oz white rum",
                                    "1/2 oz simple syrup",
                                    "1 oz lime juice",
                                    "2-4 fresh mint leaves",
                                    "Club soda"
                                ],
                                price: "8.00",
                                photo: "./asset/Mojito.png"
                            },
                            {
                                id: 2,
                                name: "Martini",
                                ingredients: [
                                    "2 1/2 oz gin or vodka",
                                    "1/2 oz dry vermouth",
                                    "Lemon twist or olives for garnish"
                                ],
                                price: "10.00",
                                photo: "./asset/Martini.png"
                            },
                            {
                                id: 3,
                                name: "Old Fashioned",
                                ingredients: [
                                    "2 oz bourbon or rye whiskey",
                                    "1 sugar cube",
                                    "2 dashes Angostura bitters",
                                    "Orange peel for garnish",
                                    "Ice"
                                ],
                                price: "9.50",
                                photo: "./asset/Oldfashion.png"
                            },
                            {
                                id: 4,
                                name: "Margarita",
                                ingredients: [
                                    "2 oz tequila",
                                    "1 oz lime juice",
                                    "1/2 oz triple sec",
                                    "Salt for rimming (optional)",
                                    "Ice"
                                ],
                                price: "7.50",
                                photo: "./asset/Margarita.png"
                            },
                            {
                                id: 5,
                                name: "Cosmopolitan",
                                ingredients: [
                                    "1 1/2 oz vodka",
                                    "1 oz cranberry juice",
                                    "1/2 oz triple sec",
                                    "1/2 oz lime juice",
                                    "Lime wedge for garnish",
                                    "Ice"
                                ],
                                price: "9.00",
                                photo: "./asset/Cosmopolitan.png"
                            },
                            {
                                id: 6,
                                name: "Pina Colada",
                                ingredients: [
                                    "2 oz white rum",
                                    "3 oz pineapple juice",
                                    "1 oz coconut cream",
                                    "Pineapple slice for garnish",
                                    "Maraschino cherry for garnish",
                                    "Ice"
                                ],
                                price: "8.50",
                                photo: "./asset/PinaColada.png"
                            },
                            {
                                id: 7,
                                name: "Negroni",
                                ingredients: [
                                    "1 oz gin",
                                    "1 oz Campari",
                                    "1 oz sweet vermouth",
                                    "Orange twist for garnish",
                                    "Ice"
                                ],
                                price: "10.50",
                                photo: "./asset/Negroni.png"
                            },
                            {
                                id: 8,
                                name: "Whiskey Sour",
                                ingredients: [
                                    "2 oz bourbon whiskey",
                                    "3/4 oz fresh lemon juice",
                                    "1/2 oz simple syrup",
                                    "Lemon slice for garnish",
                                    "Maraschino cherry for garnish",
                                    "Ice"
                                ],
                                price: "8.50",
                                photo: "./asset/WhiskeySour.png"
                            }
                        ])];
                case 3:
                    resp = _a.sent();
                    console.info("Inserted Contests:", resp.insertedCount);
                    (0, db_1.stopClient)();
                    return [2 /*return*/];
            }
        });
    });
}
main();
