
const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.post('/url', function (req, res) {
  let data = JSON.stringify(req.body.url);
  console.log(data);

  const source = getSource('http://emeaap.eu');
  console.log(source);

  res.send('ok');
})

function getSource(url) {
  request('http://emeaap.eu', (error, response, html) => {
    if (!error && response.statusCode === 200) {
      // console.log(html);
      const divided = splitHtml(html)[2];
      console.log(divided);
    }
  });
}

function splitHtml(html) {
  return html.split('/>');
}

app.listen(port, function () {
  console.log('Example app listening at localhost:%s', port);
});
