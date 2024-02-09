const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send({ data: "BOMBAKLAT" });
});

app.get("/page", (req, res) => {
    res.send("<h1>HELLO</h1>");
});


app.get("/thirdRoute/:someValue/:someOtherValue", (req, res) => {
    const firstValue = req.params.someValue;
    const secondValue = req.params.someOtherValue;
    console.log(firstValue, secondValue)
    res.send("<h1 style=\"color: pink;\">IM THIRD ROUTER</h1>");
});


let balance = 100;
app.get("/wallet/:withdrawAmount", (req, res) => {
    const withdrawAmount = Number(req.params.withdrawAmount);
    
    if (!withdrawAmount) res.send({data: "You submitted an incorrect amount, not a number"});

    if (withdrawAmount >= 0 && balance - withdrawAmount >= 0) {
        balance -= withdrawAmount;
        res.send({ data: `Your payment went through and your current balance is: ${balance}` });
    } else {
        res.send({data: `Payment declined - your current balance is: ${balance}`});
    }
});


// http: 8080
// https: 443
// http dev: 8080
// https dev: 9090
app.listen(8080);
