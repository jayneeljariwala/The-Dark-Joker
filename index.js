import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw,religious,political,sexist&type=twopart";

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try{
        const result = await axios.get(API_URL);
        res.render("index.ejs", {
            setup: result.data.setup,
            delivery: result.data.delivery
        });
    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
});

app.post("/get-joke", (req, res) => {
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server is runing on port ${port}`);
});