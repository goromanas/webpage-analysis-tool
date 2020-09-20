import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Axios from 'axios';

function Input() {

  const [url, setUrl] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const urlRequest = Axios.CancelToken.source();
    try {
      const response = await Axios.post('/url', { url: url }, { cancelToken: urlRequest.token });
      console.log(response);
    } catch (e) {
      console.log("There was a problem or the request was cancelled.");
    }

    return () => {
      urlRequest.cancel();
    };
  }

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField id="standard-basic" label="URL" onChange={(e) => setUrl(e.target.value)} />
    </form>
  )
}

export default Input