const express = require("express");
const app = express();

// This is needed to work with body for request -> nice to have if working with POST, PUT, PATCH
app.use(express.json());

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

// localhost:8080/saySomethingNiceAboutMe/hello?handsome=very&tall=indeed&cool=always
app.get("/saySomethingNiceAboutMe/:greeting", (req, res) => {
    const providedGreeting = req.params.greeting;
    console.log(req.query)
    const providedQueryHandsome = req.query;
    if (providedQueryHandsome.handsome === "very") {
        return res.send({data: "thanks cool cat"});
    }

    res.send({data: "ain't no thang "});
});

app.post("/postman", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

// http: 8080
// https: 443
// http dev: 8080
// https dev: 9090
app.listen(8080);
