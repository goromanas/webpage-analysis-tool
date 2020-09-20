import React from 'react';
import { Card, CardContent, CardActions } from '@material-ui/core';


function MostPopularTag({ mostPopularTag }) {
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <h3>
            Most popular tag
          </h3>
          <div>
            {mostPopularTag && `It was used ${mostPopularTag.count} times.`}
          </div>
          <div>
            {mostPopularTag && mostPopularTag.tag}
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default MostPopularTag