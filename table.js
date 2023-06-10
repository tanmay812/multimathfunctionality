
function getVal() {
    let val;
    val = Number(document.querySelector('.numbi').value);
    let out = "";
    for (let i = 1; i <= 10; i++) {
        out = out + "<p>" + val + " " + "x" + " " + i + " " + "=" + " " + val * i + "</p>";

    }
    document.getElementById("output").innerHTML = out;

}

function getprime() {
    let value;
    value = Number(document.querySelector('.prim').value);

    let op = "";

    var flag = 0;
    for (let i = 2; i < value; i++) {
        if (value % i == 0) {
            flag = 1;
        }
    }
    if (value == 0) {
        op = "0 is not a Prime number"
    }
    else if (value == 1) {
        op = "1 is a co prime number";
    }
    else if (flag === 1) {
        op = "The number " + value + " is not a prime number\n"
    }
    else if (flag === 0) {
        op = value + " is a prime number\n"
    }
    document.getElementById("output").innerHTML = op;
}

function getarms() {
    let some;
    some = Number(document.querySelector('.atro').value);
    let temp = some;
    let out = "";
    let count = 0;
    while (some > 0) {
        let dig = some % 10;

        count += (dig ** 3);
        count = parseInt(count, 10);
        some = parseInt(some / 10);
    }
    if (count == temp) {
        out = temp + "\tis an armstrong number\n";

    }
    else {
        out = "The number is not an armstrong number\n";

    }
    document.getElementById('output').innerHTML = out;

}