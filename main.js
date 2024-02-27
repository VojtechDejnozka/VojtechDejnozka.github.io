window.addEventListener('DOMContentLoaded', (event) => {
    form = document.getElementById("form");
    let errprob = 0;
    let arr = "";
    let errcode = "";
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        arr = document.getElementById("array").value;
        errprob = document.getElementById("errval").value;
        errcode = document.getElementById("errcode").value;
        arr = arr.split(",");

        //arr = [0.03, 0.01, 0.09, 0.01, 0.17, 0.01, 0.04, 0.01, 0.29, 0.03, 0.3, 0.01];
        //arr = [0.12, 0.2, 0.11, 0.2, 0.09, 0.09, 0.19]
        let entropy = 0;
        for (let i = 0; i < arr.length; i++) {
            entropy += -arr[i] * Math.log2(arr[i]);
        }
        document.getElementById("entropy").innerHTML = entropy;

        let rel_entropy = entropy / (Math.log2(arr.length));
        document.getElementById("rel_entropy").innerHTML = rel_entropy;
        let str = ""
        for (let i = 0; i < arr.length; i++) {
            str += (i + "," + arr[i] + "\n");
        }
        document.getElementById("cheat").innerHTML = str;


        codes = ["0000000","0001011","0010101","0011110","0100110",
        "0101101","0110011","0111000","1000111","1001100","1010010","1011001","1100001","1101010","1110100","1111111"]
        for(let i=0; i<codes.length;i++) {
            errors=0;
            for(let j=0; j<errcode.length;j++) {
                if(errcode[j] != codes[i][j]) {
                    errors+=1;
                }
            }
            if(errors==1) {
                document.getElementById("repair").innerHTML = "x" + (i+1) + ". tedy: " + codes[i]
            }
        }


        let capacity = 1 + (errprob * Math.log2(errprob)) + ((1 - errprob) * Math.log2(1 - errprob));
        document.getElementById("capacity").innerHTML = capacity;

        let shan = entropy / capacity;
        document.getElementById("shan").innerHTML = shan;



    });
    

});

