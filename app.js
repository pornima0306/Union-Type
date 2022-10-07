var cl = console.log;
//type Inference>> If we declare a property and assign any value to it TS will automatically add type to that property this is called as typoe inference
var x = 10; // type Inference
var y = '10'; // data type is 10 of string
var p = 30; // data type is 30 number
var z; // data type is any
z = 40;
/* ===================Union========================== */
var a; //called as union>> we can store in a string or number
var arr; // array of string or number or boolean
arr = [10, 'js', 'TS', 30, true, 'Angular', false];
//resultconversion : 'as-number' | 'as-string' >> called as union of string literal
/* function combine(n1:number | string, n2: number | string, resultconversion : 'as-number' | 'as-string') */
function combine(n1, n2, resultconversion) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
        // result= `${n1}${n2}`
    }
    if (resultconversion == 'as-number') {
        result = +result;
    }
    else {
        result = result.toString();
    }
    /* cl(typeof result) */
    return result;
}
/* cl(combine('10',20, 'as-number'))   //typeof >> number
cl(combine('hello',20, 'as-number'))  //typeof >> NaN
cl(combine(10,20, 'as-string'))  //typeof >> string */
var add1 = combine('10', 20, 'as-number');
cl(typeof add1, add1);
var add2 = combine(10, 20, 'as-string');
cl(typeof add2, add2);
var add3 = combine('hello', 20, 'as-number');
cl(typeof add3, add3);
