

// bt1
document.getElementById("btnShow__bt1").onclick = function () {
    var S = 0;
    var n = 0;
  
    while (S < 10000) {
      n++;
      S += n;
      console.log(n);
      console.log(S);
    }
    document.getElementById("footerCard1__bt1").innerHTML = "Tại n= " + n;
    document.getElementById("footerCard2__bt1").innerHTML = "Thì tổng S= " + S;
  };
  
  // bt 2
  
  document.getElementById("btnCount__bt2").onclick = function () {
    var T = 1;
    var S = 0;
    var x = document.getElementById("txt_Number1__bt2").value;
    var n = document.getElementById("txt_Number2__bt2").value;
    for (var i = 1; i <= n; i++) {
      T = T * x;
      S += T;
      console.log(S);
    }
    document.getElementById("footerCard__bt2").innerHTML = "Tổng = " + S;
  };
  
  // bt3
  
  document.getElementById("btnCount__bt3").onclick = function () {
    var n = document.getElementById("txt_Number1__bt3").value;
    var giaithua = 1;
  
    for (var i = 1; i <= n; i++) {
      giaithua = giaithua * i;
      console.log(giaithua);
      
    }
    document.getElementById("footerCard__bt3").innerHTML = "Giai thừa của số n= "+giaithua;
    
  };
  
  
 
