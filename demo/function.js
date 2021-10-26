function total(a,b) {
    return a + b
}
var x = total(4,8);
console.log(x);

function hello() {
    console.log("Welcome to XuanDInh");
}
function goiham(fn) {
    fn();
}
goiham(hello);

var tong = function() {
    console.log("lập trình nodejs")
}
tong(); 