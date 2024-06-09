//== bài 1

document.getElementById("formNhapDiem").onsubmit = function (event){

    event.preventDefault();
    console.log("sự kiện submit");

    console.log(event.target);

    let diemChuan = document.getElementById("diemChuan").value*1;
    let khuVuc = document.getElementById("khuVuc").value*1;
    let doiTuong = document.getElementById("doiTuong").value*1;
    let diemThuNhat = document.getElementById("diemThuNhat").value*1;
    let diemThuHai = document.getElementById("diemThuHai").value*1;
    let diemThuBa = document.getElementById("diemThuBa").value*1;
    
    let diemTong = diemThuNhat + diemThuHai + diemThuBa + khuVuc + doiTuong
    let danhGia ="";
    

    console.log(diemChuan);
    console.log(khuVuc);
    console.log(doiTuong);
    console.log(diemThuNhat);
    console.log(diemThuHai);
    console.log(diemThuBa);
    console.log(diemTong);

    diemTong >= diemChuan ? danhGia ="NICE bro! Bạn đã đậu": danhGia = "Chia buồn với bro! Bạn rới rồi"; 

        // xử lí đưa dữ liệu lên giao diện
    document.getElementById(
        "inketQua1"
      ).innerHTML = `${danhGia} : Điểm của bro là: ${diemTong}`;
}   