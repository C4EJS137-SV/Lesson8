// 1 >In ra dãy số từ 1 đến 500.
/*
for (let i = 1; i <= 500; i++) {
    console.log(i)
}
*/
// 2 >In ra các số chia hết cho 2 và 3 từ 1 đến 300.

/*
for (x = 1; x <= 300; x++) {
 if(x % 2 == 0 && x % 3 == 0)
    console.log('x',x);
    }
*/
// 3>Tính tổng các số chẵn trong đoạn [-30, 50].

/*
let sum = 0;
for (let i = -30; i <= 50; i++) {
    if (i % 2 == 0) {
        sum = +i
    }
}
console.log(sum);
*/
// 4>. Nhập vào số n. Tính giai thừa của số n
/*
let a = Number(prompt('nhap vao so a : '))
let fac = 1;
for (i = 1; i <= a; i++) {
    fac *= i;
}
console.log(fac);
*/
// 5>1. Nhập vào 3 số a, b, x (a < b)

/*
let a = Number(prompt('nhap vao so a: '));
let b = Number(prompt('nhap vao so b: '));
let x = Number(prompt('nhap vao so x: '));
if (a > b) {
    console.error
}
else {
    while (a < b) {
        if (a % x == 0) {
            console.log(a);
            break;
        } else {
            a++;
        }
    }
}
*/
// 6 >Nhập vào số n (n >= 2). Hãy tính giá trị biểu thức

/*
let n = Number(prompt("Số n: "))
let tong = 0
if (n < 2) {
    console.error('nhap lai')
}
else
    for (let i = 1; i <= n; i++) {
        tong = tong + 1 / (i * (i + 1));
    }
console.log({ tong })
*/
// 7>Nhập vào số n. Hãy in ra số ước của n
/*
let n = Number(prompt("Số n: "));
for
( let i=1 ;i<=n ;i++ )
    if(n%i==0)

console.log('n',i);
*/
// 8 >Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.
/*
function nguyenTo() {
    let n = Number(prompt("Nhập số cần kiểm tra",))
    if (isNguyenTo(n)) {
        console.log('TRUE')
    } else {
        console.log('FALSE')
    }
}
function isNguyenTo(n) {
    if (n <= 1) {
        return false
    }
    let isNguyenTo = true

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false
        }
    }
    return isNguyenTo
}
nguyenTo()
*/
// 14>Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n.
/*
let tnt = " ";
let n = Number(prompt("Nhập số ",))
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        tnt += " * ";

    }
    tnt += " \n ";
}
console.log(tnt);
*/
//  16> Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n.
/*
let tnt = " ";
let n = Number(prompt("Nhập số ",))
for (let j = 1; j <= n; j++) {
    tnt += '*'
    console.log(tnt);
}
*/
//  10>Nhập vào 2 số m, n (m > 0, n > 0). Tìm ước chung lớn nhất của m, n.
/*
let a =Number ( prompt("nhap vao so a:")) ;
let b =Number( prompt("nhap vao so b:"));
while (a !== b) {
    if (a > b) {
        a -= b;
    } else {
        b -= a;
    }
}
console.log( a);
*/
// 11>Nhập vào 2 số m, n (m > 0, n > 0). Tìm bội chung nhỏ nhất của m, n.
/*
let a = Number (prompt("nhap vao so a:"));
let b =Number (prompt("nhap vao so b:")) ;
let i=1 ;
while (a ,b>0 ) {
    if (i % a === 0 && i % b === 0) {
        break;
    }
    i++;
}
console.log(i);
*/
// 13>Nhập vào số n (2 <= n <= 10). Hãy in ra bảng cửu chương của số n.
/*
let n =Number(prompt("nhap vao so n :")) ;
 for (let i= 2 ; i <=10; i++){
    console.log(i+ "x" +n)
}
*/
// 17>Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người. Hãy tính chỉ số BMI và đưa ra kết quả:
/*
let w = Number(prompt(" cân nặng  :"));
let h = Number(prompt(" chiều cao  :"));
let BMI = (w / (h * h));
console.log(BMI);
if (BMI < 18.5) {
    console.log('Nhẹ Cân');
} else if (18.5 <= BMI < 23) {
    console.log('Bình thường');
} else if (23 <= BMI < 25) {
    console.log('Thừa cân');
} else if (BMI >= 25) {
    console.log('Béo phì');
}
*/
//  9>Nhập vào chuỗi s (chỉ gồm chữ số) và số l.
//   Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l.
/*
 let s =(prompt('nhập chuỗi so s'));
 let l =Number(prompt('số l')) ;
 while (s.length <= l) {
    s= "0" + s;
 }
 console.log(s);
 */
//15>Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n.

let m = Number(prompt("Nhập chiều rộng",));
let n = Number(prompt("Nhập chiều cao",));
let tnt = '';
for (let j = 1; j <= n; j++) {
for (i = 1; i <= m; i++) {
        tnt += " * ";
    }
    tnt += " \n ";}

console.log(tnt);
 //chua biet loi o dau