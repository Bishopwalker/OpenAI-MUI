require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const app = express();
const port = 3080;
//please add cors to express
const cors = require('cors');
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
//import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-RdU7urV22eZNYaup9sQERQO4",
    apiKey:'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'
});
const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();



//create a simple express api that calls the function from above

app.post('/', async (req, res) => {
    const{message} = req.body;
    console.log(message);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: message,
        max_tokens: 100,
        temperature: 0.5,
    });
    console.log(response.data.choices[0].text);
    res.json({
        message: response.data
    })
});

//create a post request for openai image generation
app.post('/image', async (req, res) => {
    const{message} = req.body;
    console.log(message);
    const response = await openai.createImage({
        model: "text-davinci-003",
        prompt: message,
        n: 2,
        size: "1024x1024",
        max_tokens: 100,
        temperature: 0.5,

    });
    console.log(response.data.choices[0].text);
    res.json({
        message: response.data
    })
});

app.listen(port, () => {
    console.log(`Open AI chat GPT conversation 333  :${port}`)
}   );