const express = require("express");
const app = express();

// UTC
console.log(new Date());

// Unix Epoch Time (Seconds since 1970 Jan. 1st -> the date is because that year unix was invented)
console.log(Date.now());

// Local time (in my case right now and here CEST GMT+0100)
console.log(Date());


app.get("/date", (req, res) => {    
    res.send({ data: `Current date is ${Date()}` });
});

app.get("/month", (req, res) => {
    const currentMonth = Date().split(" ")[1];        
    res.send({ data: `Current month is ${currentMonth}` });
});


const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
app.get("/day", (req, res) => {    
    const dayIndex = new Date().getDay();
    res.send({ data: weekDays[dayIndex]});
});

const PORT = 8080
app.listen(PORT, (error) => console.log(!error ? `Server started listening port ${PORT}` : `Server wasnt able to start listening at port ${PORT}`));