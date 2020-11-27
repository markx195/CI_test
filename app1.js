function newString(){
    let s1 = prompt("S1");
    let s2 = prompt("s2");
    let string = " ";
    if(s1.length == s2.length){
        for(let i = 0; i < s1.length;i++){
            string += s1[i];
            string += s2[i];
        }
    }
    else if (s1.length > s2.length){
        for(let i = 0; i < s2.length;i++){
            string += s1[i];
            string += s2[i];
        }
        for(let i = s2.length; i < s1.length; i ++){
            string += s1[i];
        }
    }else if (s1.length < s2.length){
        for(let i = 0; i < s1.length;i++){
            string += s1[i];
            string += s2[i];
        }
        for(let i = s1.length; i < s2.length; i ++){
            string += s2[i];
        }
    }
    console.log(string)
}
newString();

