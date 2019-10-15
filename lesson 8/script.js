
//console.log("started");
var money = +prompt("Сколько вы расходуете за месяц?","");
var time = prompt("Введите дату в формате YYYY-MM-DD","");
var appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings: false
};

for (let i = 0; i < 2; i++){
    let a = prompt('Введите обязательную статью расходов №' + (i + 1) + ' в этом месяце',''), 
        b = prompt('Во сколько обойдется?', '');
    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && 
        a != '' && b != '' && a.length < 50){
        console.log("done");
        appData.expenses[a] = b;
    } else {
        i--;
        console.log("no data");
    }
    
}
console.log(appData);
appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);
if (appData.moneyPerDay < 100){
    console.log("Minimum budget");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Medium budget");
} else if (appData.moneyPerDay > 2000) {
    console.log("High budget");
}
