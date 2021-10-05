class Date{
    constructor(year, month, date){
        this.year=year;
        this.month=month;
        this.date=date;
    }
    
}

class ExtendedDate extends Date{
    constructor(){
    super ()
}

  getLeapYear(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
   /* setMonth(month,[date]){
        return `${month}${date}`
    }

    showDate(){
    console.log(new Date);}*/
}

let dateNow = new ExtendedDate ();
dateNow.getLeapYear=(2020,1)
console.log(dateNow.getLeapYear);
