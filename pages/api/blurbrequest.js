import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_SECRET_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    const enteredtext = req.body;
    const query = "Write an exciting, descriptive 200 word blurb for a Kindle book with this summary: " + enteredtext + ".";
    console.log(query)
    console.log(enteredtext)
        const response = await openai.createCompletion({
            model: 'text-davinci-002',
            prompt: query,
            temperature: 0,
            max_tokens: 200,
        });
        const textresponse = response.data.choices[0]
        console.log(textresponse)
        res.status(200).json({ textresponse })
    } 
