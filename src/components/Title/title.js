import React from 'react';

import titleStyles from './title.module.scss';

const Title = ({ title }) => (
  <div className={titleStyles.titlewrapper} >
    <h1 className={titleStyles.title}>
      {title}
    </h1>
  </div>
)

export default Title