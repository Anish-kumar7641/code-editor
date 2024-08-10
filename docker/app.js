const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/compile', (req, res) => {
  const { code, testCases } = req.body;
 
  const filePath = path.join(__dirname, 'temp.cpp');
  fs.writeFileSync(filePath, code);

  exec(`g++ ${filePath} -o temp.out`, (compileErr) => {
    if (compileErr) {
      return res.status(400).json({ error: compileErr.message });
    }

    // Pass test cases as input to the compiled executable
    exec(`echo "${testCases}" | ./temp.out`, (runErr, stdout, stderr) => {
      if (runErr) {
        return res.status(400).json({ error: runErr.message });
      }
      res.json({ output: stdout || stderr });
    });
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
