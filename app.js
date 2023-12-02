const express = require('express');
const multer = require('multer');
const request = require('request');

const app = express();
const port = 3000;

app.use(express.static('public'));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file.buffer.toString('base64');

  // Replace 'YOUR_VIRUSTOTAL_API_KEY' with your actual VirusTotal API key
  const apiKey = '9f63081001c92b06c06da6a23080b9c192377367782711d99552da5f5788877788582587';
  const url = 'https://www.virustotal.com/vtapi/v2/file/scan';

  const options = {
    method: 'POST',
    url: url,
    formData: {
      file: {
        value: file,
        options: {
          filename: 'uploaded_file'
        }
      },
      apikey: apiKey
    }
  };

  request(options, (error, response, body) => {
    if (error) throw new Error(error);

    const scanResult = JSON.parse(body);
    res.send(scanResult);
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
