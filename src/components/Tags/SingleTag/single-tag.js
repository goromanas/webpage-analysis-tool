import React from 'react';

import singletagStyles from './single-tag.module.scss';

function SingleTag({ tag }) {
  return (
    <div className={singletagStyles.singletag}>
      {tag}
    </div>
  )
}

export default SingleTag