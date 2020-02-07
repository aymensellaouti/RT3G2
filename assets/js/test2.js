var scope = "globale";
function f() {
     var scope;
    console.log(scope);
    scope = "locale";
    console.log(scope);
}
f();
console.log(scope);
