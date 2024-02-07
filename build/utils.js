"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    //28/10/2018
    const dateParts = dateString
        .split('/')
        .map((value) => +value);
    console.log(dateParts); //[ 28, 10, 2018 ]
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
console.log((0, exports.dateStringToDate)('28/10/2018')); //
