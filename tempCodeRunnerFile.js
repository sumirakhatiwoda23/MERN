import express from 'express';

const app = express();


app.get('/', (req, res) => {

  const { number } = req.query;
  console.log(number);

  return res.status(200).json({
    message: "Hello World"
  });

});




app.listen(5000, () => {
  console.log("Server is running on port 5000");
})