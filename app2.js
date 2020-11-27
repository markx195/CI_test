let i = 0;
let input = document.querySelector("input");
let button = document.querySelector("button");

button.onclick = function(){
    let n = 9;
    let inputUser = input.value;
    i++;
    if (inputUser < 0 || inputUser > 10){
    input.value = ' ';
    i = 0;
        alert("Mời bạn thử lại");
}else{
    if (inputUser == n){
        alert("Chúc mừng");
    }
    if (inputUser != n){
    input.value = ' ';
    if (i >= 3){
        alert(`Bạn đã hết lượt kết quả là ${n}`);
    }
    if (i < 3){
    inputUser = ' ';
        alert(`Bạn đã đoán sai mời bạn nhập lại`);
    }
    }
}
};