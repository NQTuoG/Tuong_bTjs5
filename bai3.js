document.getElementById("tinhThueTNCN").onsubmit = function (event){
    event.preventDefault();
    let hoTen = document.getElementById("hoTen").value;
    let thuNhap = document.getElementById("thuNhap").value *1;
    let soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value;

    let thuNhapChiuThue = tinhThuNhapChiuThue(thuNhap, soNguoiPhuThuoc);
    let thue = tinhThue(thuNhapChiuThue);

    document.getElementById("inketqua3").innerHTML = `Họ tên: ${hoTen}\nThuế thu nhập cá nhân phải trả: ${(thue.toLocaleString(
        "vi",
        {
          currency: "VND",
          style: "currency",
        }
        ))}`;
}

function tinhThuNhapChiuThue(thuNhap, soNguoiPhuThuoc) {
    return thuNhap - 4e6 - soNguoiPhuThuoc * 1.6e6;
}

function tinhThue(thuNhapChiuThue) {
    thuNhapChiuThue = thuNhapChiuThue / 1e6; 
    let thue = 0;

    if (thuNhapChiuThue <= 60) {
        thue = thuNhapChiuThue * 0.05;
        console.log(thue);
    } else if ( thuNhapChiuThue > 60 && thuNhapChiuThue <= 120 ) {
        thue = thuNhapChiuThue * 0.1;
        console.log(thue);
    } else if ( thuNhapChiuThue > 120 && thuNhapChiuThue <= 210) {
        thue = thuNhapChiuThue  * 0.15;
        console.log(thue);
    } else if (thuNhapChiuThue > 210 && thuNhapChiuThue <= 384) {
        thue = thuNhapChiuThue  * 0.20;
        console.log(thue);
    } else if (thuNhapChiuThue > 384 && thuNhapChiuThue <= 624) {
        thue = thuNhapChiuThue  * 0.25;
        console.log(thue);
    } else if (thuNhapChiuThue > 624 && thuNhapChiuThue <= 960) {
        thue = thuNhapChiuThue  * 0.30;
        console.log(thue);
    } else {
        thue = thuNhapChiuThue * 0.35;
        console.log(thue);
    }
    
    return thue * 1e6;  
}