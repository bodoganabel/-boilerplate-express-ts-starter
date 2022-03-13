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
        while (_) try {
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
exports.__esModule = true;
exports.replaceAll = exports.telegramHelp = exports.sendMessage_Telegram = exports.checkMessages_Telegram = exports.initTelegramMessageHook = exports.ETelegramCommands = void 0;
var https_1 = require("https");
var node_telegram_bot_api_1 = require("node-telegram-bot-api");
var ETelegramCommands;
(function (ETelegramCommands) {
    ETelegramCommands["help"] = "help";
    ETelegramCommands["join"] = "join";
    ETelegramCommands["leave"] = "leave";
    ETelegramCommands["telegramid"] = "telegramid";
})(ETelegramCommands = exports.ETelegramCommands || (exports.ETelegramCommands = {}));
//importantNotifications_bot
var botIdProduction = "5115952018:AAFejJpta99Lqw3pbRvFHpy-abXiUCeE6lQ";
var telegramUrl = 'api.telegram.org';
function initTelegramMessageHook() {
    return __awaiter(this, void 0, void 0, function () {
        var bot;
        return __generator(this, function (_a) {
            bot = new node_telegram_bot_api_1["default"](botIdProduction, { polling: true });
            bot.on('message', function (msg) {
                console.log(msg);
                checkMessages_Telegram(msg);
            });
            return [2 /*return*/];
        });
    });
}
exports.initTelegramMessageHook = initTelegramMessageHook;
function checkMessages_Telegram(message) {
    return __awaiter(this, void 0, void 0, function () {
        var response, sender, args, command, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (message === undefined || message.from === undefined || message.from.id === undefined) {
                        console.log("No sender in incoming telegram message!");
                        return [2 /*return*/];
                    }
                    response = '';
                    sender = message.from.id;
                    args = message.text ? message.text.split(':') : [];
                    command = args[0];
                    _a = command;
                    switch (_a) {
                        case ETelegramCommands.help: return [3 /*break*/, 1];
                    }
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, telegramHelp()];
                case 2:
                    response = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    response = "No command recognized. Type \"help\" for help";
                    return [3 /*break*/, 4];
                case 4: return [4 /*yield*/, sendMessage_Telegram(response, sender)];
                case 5:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.checkMessages_Telegram = checkMessages_Telegram;
function sendMessage_Telegram(message, target) {
    return __awaiter(this, void 0, void 0, function () {
        var decodedMessage, telegramServerOptions, req;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('telegram');
                    console.log("target: " + target);
                    decodedMessage = replaceAll(message, '<br/>', '\n');
                    telegramServerOptions = {
                        hostname: telegramUrl,
                        path: "/bot" + botIdProduction + "/sendMessage?chat_id=" + target + "&text=" + escape(decodedMessage),
                        method: 'GET',
                        port: 443,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    };
                    console.log('telegram2');
                    return [4 /*yield*/, https_1["default"].get(telegramServerOptions, function (res) {
                            console.log("statusCode: " + res.statusCode);
                            res.on('data', function (data) {
                                process.stdout.write(data);
                            });
                        })];
                case 1:
                    req = _a.sent();
                    req.on('error', function (error) {
                        console.error(error);
                    });
                    req.end();
                    console.log(req);
                    return [2 /*return*/];
            }
        });
    });
}
exports.sendMessage_Telegram = sendMessage_Telegram;
function telegramHelp() {
    return __awaiter(this, void 0, void 0, function () {
        var helpString;
        return __generator(this, function (_a) {
            helpString = "This telegram bot is not programmed for reading commands yet.\n\n\n";
            return [2 /*return*/, helpString];
        });
    });
}
exports.telegramHelp = telegramHelp;
function replaceAll(input, search, replaceWith) {
    var result = input.split(search).join(replaceWith);
    return result;
}
exports.replaceAll = replaceAll;
