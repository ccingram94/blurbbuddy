import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.NEXT_AUTH_OPENAI_SECRET_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    const enteredtext = req.body;
    const query = "Write an original plot for a book with this description: " + enteredtext + ".";
    console.log(query)
    console.log(enteredtext)
        const response = await openai.createCompletion({
            model: 'text-davinci-002',
            prompt: query,
            temperature: 0,
            max_tokens: 300,
        });
        const textresponse = response.data.choices[0]
        console.log(textresponse)
        res.status(200).json({ textresponse })
    } 
