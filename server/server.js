
const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.post('/url', async function (req, res) {
  let data = JSON.stringify(req.body.url);
  console.log(data);

  const source = await getSource('http://emeaap.eu');
  const divided = await splitHtml(source);
  const uniqueTags = getUniqueTags(divided);
  const mostPopularTag = getMostPopularTag(divided);

  res.status(200).json({
    'uniqueTags': uniqueTags,
    'mostPopularTag': mostPopularTag,
  });
})

function getSource(url) {
  return new Promise(function (resolve, reject) {
    request('http://theofisas.com', (error, response, html) => {
      if (!error && response.statusCode === 200) {
        resolve(html);
      }
    });
  })
};

function splitHtml(html) {
  return new Promise((resolve, reject) => {
    const inputArray = html
      .split(/\s+/)
      .filter(item => item[0] === '<' && (item[0] + item[1]) !== '</');

    let splitArray = inputArray.map(item => {
      if (item.includes('>')) {
        return item.substring(0, item.indexOf('>')) + '>';
      }
      else {
        return item + '>';
      }
    });
    resolve(splitArray);
  })
}

function getUniqueTags(array) {
  return [...new Set(array)];
}

function getMostPopularTag(tags) {
  let counts = tags.reduce((a, c) => {
    a[c] = (a[c] || 0) + 1;
    return a;
  }, {});
  let maxCount = Math.max(...Object.values(counts));
  return Object.keys(counts).filter(k => counts[k] === maxCount);
}

app.listen(port, function () {
  console.log('Example app listening at localhost:%s', port);
});
