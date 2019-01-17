const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/statscards/capacity", (req, res) => {
  const capacity = Math.floor(Math.random() * 200);

  res.send({
    type: "warning",
    icon: "ti-server",
    title: "Capacity",
    value: `${capacity}GB`,
    footerText: "Updated now",
    footerIcon: "ti-reload"
  });
});

app.get("/statscards/revenue", (req, res) => {
  const revenue = Math.floor(Math.random() * 4000) + 1000;

  res.send({
    type: "success",
    icon: "ti-wallet",
    title: "Revenue",
    value: `$${revenue}`,
    footerText: "Last day",
    footerIcon: "ti-calendar"
  });
});

app.get("/statscards/errors", (req, res) => {
  const errors = Math.floor(Math.random() * 70);

  res.send({
    type: "danger",
    icon: "ti-pulse",
    title: "Errors",
    value: `${errors}`,
    footerText: "In the last hour",
    footerIcon: "ti-timer"
  });
});

app.get("/statscards/followers", (req, res) => {
  const followers = Math.floor(Math.random() * 50);

  res.send({
    type: "info",
    icon: "ti-twitter-alt",
    title: "Followers",
    value: `+${followers}`,
    footerText: "Updated now",
    footerIcon: "ti-reload"
  });
});

app.get("/userschart", (req, res) => {
  const series = [[], [], []];

  for (let i = 0; i < 9; i++) {
    series[0].push(Math.floor(Math.random() * 1000));
    series[1].push(Math.floor(Math.random() * 1000));
    series[2].push(Math.floor(Math.random() * 1000));
  }

  res.send(series);
});

app.get("/activitychart", (req, res) => {
  const series = [[], []];

  for (let i = 0; i < 12; i++) {
    series[0].push(Math.floor(Math.random() * 1000));
    series[1].push(Math.floor(Math.random() * 1000));
  }

  res.send(series);
});

app.get("/preferenceschart", (req, res) => {
  const percentages = [];
  percentages.push(Math.floor(Math.random() * 50));
  percentages.push(Math.floor(Math.random() * 50));
  percentages.push(100 - percentages[0] - percentages[1]);

  res.send(percentages);
});

app.post("/login", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (email == "john@smith.com" && password == "mypassword") {
    res.send(true);
  } else {
    res.send(false);
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
