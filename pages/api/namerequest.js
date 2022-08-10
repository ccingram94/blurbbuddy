
export default function handler(req, res) {
    if (req.method === 'POST') {
        const querytext = req.query.text;
        res.status(200).json({ text: querytext })
    } else {
        res.status(401).send({ message: 'Unauthorized' })
    }
}