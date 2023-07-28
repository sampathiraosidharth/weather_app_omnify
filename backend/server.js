const express = require("express");
const app = express();
const port = 3003;

app.use(express.json());

app.get("/weather/:location", (req, res) => {
  const location = req.params.location;

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c082410027bc36efdecc4da1a1afea84`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
