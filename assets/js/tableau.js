var tab1=[1,2,3];
var tab2 = [4,5,6];
var tab3 = tab1.concat(tab2);

tab3.forEach(
    (actualValue, index) => {
    console.log(index + ' ' + actualValue);
})
function compareInt(a,b) {
    return a - b;
}
tabT = [1,2,11,12,21,3,4,44];
tabT.sort(compareInt);
console.log(tabT);
