let diemhoa = prompt("Nhập điểm hóa: ");
let Diemhoa = parseInt(diemhoa);
let diemly = prompt("Nhập điểm lý: ");
let DiemLy = parseInt(diemly);
let diemsinh = prompt("Nhập điểm sinh: ");
let Diemsinh = parseInt(diemsinh);
let diemtong = DiemLy + Diemhoa + Diemsinh;
console.log(diemtong)

let diemtrungbinh = diemtong / 3;
console.log(diemtrungbinh)

document.write("Điểm trung bình là: " + diemtrungbinh);