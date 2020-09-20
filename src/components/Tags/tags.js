import React from 'react';
import MostPopularTag from './MostPopularTag/most-popular-tag';

import SingleTag from './SingleTag/single-tag';

import tagsStyles from './tags.module.scss';

function Tags({ uniqueTags, mostPopularTag }) {
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
      <MostPopularTag
        mostPopularTag={mostPopularTag}
      />
    </>
  )
}

export default Tags