
document.getElementById("btnTinhTienDien").onclick = function(){
    console.log("test nút tính tiền")

    let nhapTen = document.getElementById("nhapTen").value;
    let soKw = document.getElementById("soKw").value*1;

    console.log( nhapTen);
    console.log(soKw);

    let tinhTien50KwDau = 500;
    let tinhTu50KwDen100Kw = 650;
    let tinhTu100KwDen200Kw = 850;
    let tinhTu200KwDen350Kw = 1100;
    let tinhTienLonHon350Kw = 1300;

    let tongTien = 0;
    if(soKw <=50){
        tongTien = soKw * tinhTien50KwDau;
    }else if( soKw > 50 && soKw <=100 ){
        tongTien = 50 * tinhTien50KwDau + (soKw - 50 ) * tinhTu50KwDen100Kw;
    }else if( soKw > 100 && soKw <=200 ){
        tongTien = 50 * tinhTien50KwDau + 50 * tinhTu50KwDen100Kw + (soKw - 100 ) * tinhTu100KwDen200Kw;
    }else if(soKw > 200 && soKw <= 350){
        tongTien = 50 * tinhTien50KwDau + 50 * tinhTu50KwDen100Kw + 100 * tinhTu100KwDen200Kw + (soKw -200) * tinhTu200KwDen350Kw;
    }else{
        tongTien = 50 * tinhTien50KwDau + 50 * tinhTu50KwDen100Kw + 100 * tinhTu100KwDen200Kw + 150 * tinhTu200KwDen350Kw + (soKw - 350) * tinhTienLonHon350Kw;
    }

    console.log(tongTien);

    document.getElementById("inketQua2").innerHTML =`Khách hàng: ${nhapTen} <br> Tiền điện phải đóng: ${tongTien.toLocaleString(
        "vi",
        {
          currency: "VND",
          style: "currency",
        }
        )
    } ` 
}