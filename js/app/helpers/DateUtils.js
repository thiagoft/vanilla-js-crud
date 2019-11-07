class DateUtils {

    constructor() {
        throw new Error("DateUtils cannot be instantiated.");
    }

    static textToDate(textToConvert) {
        if (/\d{4}-\d{2}-\d{2}/.test(date)) {
            //the "index % 2" will return 0 for the first and third position of the date array and 1 
            //for the second and then it will be subtract from the item value. The result is the month -1
            //because the Date class counts months from the 0
            return new Date(...textToConvert.split('-').map((item, index) => item - index % 2));
        } else {
            throw new Error("The date format must be AAAA-MM-DD");
        }
    }

    static dateToText(date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;    }
}