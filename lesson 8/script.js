'use strict';
//console.log("started");
var money = prompt("Сколько вы расходуете за месяц?","");
var time = prompt("Введите дату в формате YYYY-MM-DD","");
var appData = {
    budjet: money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings: false
};
