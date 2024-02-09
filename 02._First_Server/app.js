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
app.get("/wallet/:paymentOut", (req, res) => {
    const paymentOut = Number(req.params.paymentOut);
    if (paymentOut >= 0 && balance - paymentOut >= 0) {
        balance = balance - paymentOut;
        res.send({ data: `Your payment went through and your current balance is: ${balance}` });
    } else {
        res.send(`Payment declined - your current balance is: ${balance}`);
    }
});


// http: 8080
// https: 443
// http dev: 8080
// https dev: 9090
app.listen(8080);
