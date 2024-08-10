const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

app.post('/compile', (req, res) => {
  const { code } = req.body;

  const filePath = path.join(__dirname, 'temp.cpp');
  fs.writeFileSync(filePath, code);


  exec(`g++ ${filePath} -o temp.out`, (compileErr) => {
    if (compileErr) {
      return res.status(400).json({ error: compileErr.message });
    }

    exec(`./temp.out`, (runErr, stdout, stderr) => {
      if (runErr) {
        return res.status(400).json({ error: runErr.message });
      }
      res.json({ output: stdout || stderr });
    });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
