import express from 'express'

const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
  res.send("<h1>Hello Voyager</h1> <p>This is a basic docker web app</p>");
})

app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})

process.on("SIGINT", () => {
  console.log("Shutting down...")
  process.exit(0)
})

