class ArrayUtils {

    constructor() {
        throw new Error("ArrayUtils cannot be instantiated.");
    }

    static removeIndex(array, index) {
        if (ArrayUtils.isArrayValid(array)) {
            let newArray = [];
            array.forEach((element,elementIndex) => {
                if (elementIndex != index) {
                    newArray.push(element);
                }
            });

            return newArray;
        } else {
            return array;
        }
        
    }

    static isArrayValid(array) {
        return (typeof array != "undefined"  
                && array != null  
                && array.length != null  
                && array.length > 0);
    }
}