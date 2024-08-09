const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Express is running");
});

const runCode = async (code, languageId) => {
    const options = {
        method: 'POST',
        url: 'https://judge0-ce.p.rapidapi.com/submissions',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '8dfa7886f9mshce19386e921de44p12d6bdjsnd09a81f8f7be', // Replace with your RapidAPI key
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
        },
        data: {
            source_code: code,
            language_id: languageId,
        }
    };

    const submission = await axios.request(options);
    const { token } = submission.data;

    const resultOptions = {
        method: 'GET',
        url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
        headers: {
            'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // Replace with your RapidAPI key
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
        }
    };

    const result = await axios.request(resultOptions);
    return result.data;
};

// Define the new POST route to handle code submissions
app.post("/api/run-code", async (req, res) => {
    const { code, languageId } = req.body;
    try {
        const result = await runCode(code, languageId);
        console.log(result);
        res.json(result);
    } catch (error) {
        console.log("Hello");
        res.status(500).json({ error: "Code execution failed", details: error.message });
    }
});

app.listen(PORT, async (error) => {
    if (!error) {
        console.log(`Server is running on port ${PORT}`);
    } else {
        console.log("Error " + error);
    }
});
