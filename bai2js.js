function chuyendoF() {
    let goiC = Number(document.getElementById("doC").value);
    let doF = 9 / 5 * (goiC + 32);
    alert("Độ F là " + doF);
}
function chuyendoC() {
    let goiF = Number(document.getElementById("doF").value);
    let doC = 5 / 9 * (goiF - 32);
    alert("Độ C là: " + doC)

}