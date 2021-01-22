
//.....code link:: https://github.com/mahmudul1995/assignment-3

//.........Solve number one

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;      // (1 kilometer=1000 meter)
    if (kilometer < 0) {
        return 'Distance Cannot be Negative'
    }
    return meter;
}
var result = kilometerToMeter(2);
console.log(result);


//.......Solve number Two

function budgetCalculator(watch, phone, laptop) {
    if (watch > 0 || laptop > 0 || phone > 0) {
        var watch = watch * 50;
        var phone = phone * 100;
        var laptop = laptop * 500;
        var total = watch + phone + laptop;
    }
    else {
        return 'Error'
    }
    return total;
}

var result = budgetCalculator(4, 4, 1);
console.log(result);


//......Solve Number three

function hotelCost(day) {
    var totalCost = 0;
    if (day <= 10) {           //  for first offer
        totalCost = day * 100;
    }
    else if (day <= 20) {          //for second offer
        var firstStep = 10 * 100;
        var remaining = day - 10;
        var secondStep = remaining * 80;
        totalCost = firstStep + secondStep;
    }
    else {                        //for third offer
        var firstStep = 10 * 100;
        var secondStep = 10 * 80;
        var remaining = day - 20;
        var thirdStep = remaining * 50;
        totalCost = firstStep + secondStep + thirdStep;
    }
    return totalCost;

}

var result = hotelCost(20);
console.log(result)


//....Solve Number Four

function megaFriend(array) {
    var longest = '';
    for (var i = 0; i < array.length; i++) {
        const element = array[i];

        if (element.length > longest.length) {
            longest = element;
        }
    }
    return longest;

}
console.log(megaFriend(['mammon', 'mohammad', 'sheikhfoysal', 'sahib']));
