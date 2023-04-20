//Daxil edilən müsbət tam ədədin palindrom olub-olmamasını yoxlayın.
function numsInput(n) {
    var k = n
    var s = 0;
    while (n > 0) {
        teklik = n % 10;
        n = (n - teklik) / 10; 
        s = (s * 10) + teklik;
    }
    if (s == k) {
        console.log("Eded polindromdur");
    }
    else {
        console.log("Eded polindrom deyil");
    }

}
numsInput(prompt());
//ve ya
//numsInput(242);
