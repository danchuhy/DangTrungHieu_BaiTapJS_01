console.log('  ');
console.log('BÀI TẬP VỀ NHÀ 01 - TÍNH TIỀN LƯƠNG NHÂN VIÊN --------------');

// BÀI TẬP VỀ NHÀ 01 - TÍNH TIỀN LƯƠNG NHÂN VIÊN
// B1: Xác định đầu vào
// - luongNgay: Lương 1 ngày = 100.000đ
// - soNgay: Số ngày làm
var luongNgay = 100000;
var soNgay = 21;
var luong;

// B2: Công thức tính lương
// - luong = luongNgay*soNgay
luong = luongNgay*soNgay;

// B3: In kết quả đầu ra
console.log('Tiền lương của ', soNgay, ' ngày làm việc là: ', luong, 'đ');




console.log('  ');
console.log('BÀI TẬP VỀ NHÀ 02 - TÍNH GIÁ TRỊ TRUNG BÌNH -----------------');

// BÀI TẬP VỀ NHÀ 02 - TÍNH GIÁ TRỊ TRUNG BÌNH
// B1: Xác định đầu vào
// - so1
// - so2
// - so3
// - so4
// - so5
var so1 = 23.23;
var so2 = 542.94;
var so3 = 10;
var so4 = 57;
var so5 = 240;
var trungbinh;

// B2: Công thức tính giá trị trung bình
// - trungbinh = Tong/n
trungbinh = (so1+so2+so3+so4+so5)/5;

// B3: In kết quả đầu ra
console.log('Giá trị trung bình của 5 số là: ', trungbinh);




console.log('  ');
console.log('BÀI TẬP VỀ NHÀ 03 - QUY ĐỔI TIỀN ----------------------------');

// BÀI TẬP VỀ NHÀ 03 - QUY ĐỔI TIỀN
// B1: Xác định đầu vào
// - TI_GIA_USD
// - soTienNhapVao
const TI_GIA_USD = 23500;
var soTienNhapVao = 199;
var soTienQuyDoi;

// B2: Công thức tính tiền quy đổi
// - tienQuyDoi = TI_GIA_USD*soTienNhapVao
soTienQuyDoi = TI_GIA_USD*soTienNhapVao;

// B3: In kết quả đầu ra
console.log('$',soTienNhapVao, ' tương đương với: ', soTienQuyDoi, 'đ');




console.log('  ');
console.log('BÀI TẬP VỀ NHÀ 04 - TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT ----');

// BÀI TẬP VỀ NHÀ 04 - TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT
// B1: Xác định đầu vào
// - chieuDai
// - chieuRong
var chieuDai = 10;
var chieuRong = 15;
var dienTich;
var chuVi;

// B2: Công thức tính diện tích và chu vi
// - dienTich = chieuDai*chieuRong
// - chuVi = (chieuDai+chieuRong)*2
dienTich = chieuDai*chieuRong;
chuVi = (chieuDai+chieuRong)*2

// B3: In kết quả đầu ra
console.log('Diện tích hình chữ nhật: ', dienTich);
console.log('Chu vi hình chữ nhật: ', chuVi);




console.log('  ');
console.log('BÀI TẬP VỀ NHÀ 05 - TÍNH TỔNG 2 KÝ SỐ -----------------------');

// BÀI TẬP VỀ NHÀ 05 - TÍNH TỔNG 2 KÝ SỐ
// B1: Xác định đầu vào
// - soA
var soA = 63;

var tongSoA


// B2: 
// Lấy số hàng đơn vị: So%10
// Lấy số hàng chục: làmTrònXuống(So/10)
// Tổng = đơnVị + hàngChục
tongSoA = soA%10 + Math.floor(soA/10);


// B3: In kết quả đầu ra
console.log('Tổng 2 ký số: ', tongSoA);