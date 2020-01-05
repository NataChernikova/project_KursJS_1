let money, time;
function start(){
    money = +prompt ("Ваш бюджет на месяц?","");
    time = prompt ("введите дату в формате YYYY-MM-DD","");
        while (isNaN(money) || money == "" || money == null ) {
            money = +prompt ("Ваш бюджет на месяц?","");
        }
    }
start();
//обьект
let appData = {
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:true
}; 
//рассчет дневного бюджета
function chooseExpences (){
    for (let i = 0; i < 2; i++ ){
        let a = prompt ("введите обязательную статью расходов в этом месяце","");
        let b = prompt ("во сколько обойдется?","");

        if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b))!=null && a!= "" && b!="" && a.length<50 ) {
            console.log("done!");
            appData.expenses[a] = b;
        }
        else {
            i = i - 1;
        }
    }
}
chooseExpences ();
//
function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    document.write ("Ваш дневной бюджет - " + appData.moneyPerDay +'<br>');
    
}
detectDayBudget();
// рассчет дохода по депозиту
function checkSavings(){
    if ( appData.savings == true ){
        let save = +prompt('Какова сума накоплений?',''),
            percent = +prompt ('Под какой процент?','');
        appData.monthIncome = (save/100/12*percent).toFixed(2);
        document.write('Доход в месяц с вашего депозита: '+ appData.monthIncome +'<br>' );    
    }
}
checkSavings();
//уровень достатка
function level(){
    if (appData.moneyPerDay <= 100){
        document.write('низкий уровень достатка <br>');
    }
    else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        document.write(' средний уровень достатка <br>');

    }
    else if (appData.moneyPerDay > 2000){
        document.write (' высокий уровень достатка <br>');
    }
    else {
        document.write ('error <br>');
    }
}
level();
//необязательные расходы

function chooseOptExpenses(){
    for (let i = 1; i<4; i++){
        let a = prompt('Статья необязательных расходов?','');
        appData.optionalExpenses[i] = a;
        document.write (i + ') ' + appData.optionalExpenses[i]+'<br>');
    }
}
chooseOptExpenses();





