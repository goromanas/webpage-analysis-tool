import React, { useState } from 'react';
import Axios from 'axios';

import Container from './components/Container/container';

import Input from './components/Input/input';
import Title from './components/Title/title';
import Tags from './components/Tags/tags';

import './styles/base.scss';

function App() {

  const [url, setUrl] = useState('');
  const [uniqueTags, setUniqueTags] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    const urlRequest = Axios.CancelToken.source();
    try {
      const response = await Axios.post('/url', { url: url }, { cancelToken: urlRequest.token });
      setUniqueTags(response.data.uniqueTags);
      console.log(response);
    } catch (e) {
      console.log("There was a problem or the request was cancelled.");
    }

    return () => {
      urlRequest.cancel();
    };
  }

  return (
    <Container>
      <Title title='Webpage analysis tool' />
      <Input
        handleSubmit={handleSubmit}
        setUrl={setUrl}
      />
      <Tags
        uniqueTags={uniqueTags}
      />
    </Container>

  );
}

export default App;
