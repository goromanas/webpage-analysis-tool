import React from 'react';

import SingleTag from './SingleTag/single-tag';

import tagsStyles from './tags.module.scss';

function Tags({ uniqueTags }) {
  return (
    <>
      <h2>Unique tags used in document</h2>
      <div className={tagsStyles.tags}>
        {uniqueTags.map((tag, index) => (
          <SingleTag
            key={index}
            tag={tag}
          />
        ))}
      </div>
    </>
  )
}

export default Tags