import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.NEXT_AUTH_OPENAI_SECRET_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    const enteredtext = req.body;
    const query = "Generate ten original surnames for a person with this description: " + enteredtext + ".  They should each be a last name (surname).  They should not be famous names.   Use baby name books as a source.  Half should be unusual names.  Half should be common names.";
    console.log(query)
    console.log(enteredtext)
        const response = await openai.createCompletion({
            model: 'text-davinci-002',
            prompt: query,
            temperature: 0,
            max_tokens: 100,
        });
        const textresponse = response.data.choices[0]
        console.log(textresponse)
        res.status(200).json({ textresponse })
    } 
