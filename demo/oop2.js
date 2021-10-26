function khoahoc(ten, hocphi) {
    this.Ten = ten;
    this.HocPhi = hocphi;
}
khoahoc.prototype.mota = function() {
    console.log("Hello " + this.Ten + " " + this.HocPhi)
}
var nodejs = new khoahoc("Lập trình nodejs", 800000);
nodejs.mota();