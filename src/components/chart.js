import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
  return(
    <div>
      <Sparklines height={20} width={80} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  );
}
