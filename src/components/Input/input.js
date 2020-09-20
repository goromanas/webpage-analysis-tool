import React from 'react';
import { TextField } from '@material-ui/core';

import inputStyles from './input.module.scss';

function Input({ handleSubmit, setUrl }) {

  return (
    <div className={inputStyles.inputwrapper}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className={inputStyles.inputrow}>
          <div>http://</div>
          <TextField id="standard-basic" label="URL" placeholder="delfi.lt" onChange={(e) => setUrl(e.target.value)} />
        </div>
      </form>
    </div>
  )
}

export default Input