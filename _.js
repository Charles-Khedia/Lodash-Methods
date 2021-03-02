const _ = {

    // Number Methods
     clamp (number, lower, upper) {
       let lowerClampedValue = Math.max(number, lower);
       let clampedValue = Math.min(lowerClampedValue, upper)
       return clampedValue;
     },
     inRange (number, start, end) {
       if (end === undefined){
         end = start;
         start = 0;
       }
      if (start > end) {
        let temp;
        temp = end;
        end = start;
        start = temp;
      }
      let isInRange = (start <= number && number < end);
      return isInRange;
     },
    
    //  String Methods
     words (string) {
       let words = string.split(' ');
        return words;
     },
    
     pad (string, length) {
       if (length <= string.length) {
         return string;
       }
       let startPaddingLength = Math.floor((length - string.length) / 2);
       let endPaddingLength = length - string.length - startPaddingLength;
       let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    
      return paddedString;
     },
    
     // Object Methods
     has (object, key) {
       let hasValue = object[key];
       if (hasValue != undefined) {
         return true;
       } return false;
     },
     invert (object) {
       let invertedObject = {};
       for(let key in object) {
         const originalValue = object[key];
         invertedObject[originalValue] = key; 
       }
       return invertedObject;
    },
    findKey (object, predicate) {
      for (let key in object) {
        let value = object[key];
        let predicateReturnValue = predicate(value);
        if (predicateReturnValue) {
          return key;
        }
      }  return undefined;
    },
    
    
    // Array Methods
    drop (array, n) {
      if (n === undefined) {
        n = 1;
      }
      let droppedArray = array.slice(n, array.length);
      return droppedArray;
    },
    dropWhile (array, predicate) {
      let dropNumber = array.findIndex((element, index) =>  !(predicate(element, index, array)));
      let droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    },
    chunk (array, size) {
      if(size === undefined) {
        size = 1;
      }
      let arrayChunks = [];
      for(let i = 0; i < array.length; i += size) {
        let arrayChunk = array.slice(i, i+size);
        arrayChunks.push(arrayChunk);
      }
      return arrayChunks;
    }
    }
    console.log(_.clamp(2,3,6)); //return 3
    console.log(_.inRange(2,1)); // return false
    
    console.log(_.words('the fox')); // return ['the', 'fox']
    console.log(_.pad('Hi', 10)); // return Hi with 5 & 5 space from start and end
    
    const object = {
      'name': 'charles'
    }
    console.log(_.has(object, 'name')); //return true
    console.log(_.invert(object)); // return { charles : 'name' }
    
    console.log(_.drop([1,2,3], 2));  // return [3]
    console.log(_.chunk([1,2,3,4], 2)) // return [[1,2], [3,4]]



// Do not write or modify code below this line.
module.exports = _;