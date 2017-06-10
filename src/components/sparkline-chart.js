/**
 * Created by Denorro Stallworth on 6/8/2017.
 */

import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesBars } from 'react-sparklines';
import _ from 'lodash';

export default (props) => {
    return (
        <div>
        <Sparklines height={200} width={200} data={props.data}>
            <SparklinesLine color={props.color}/>
            <SparklinesReferenceLine type="avg" />
        </Sparklines>
            <p> Average: { average(props.data) } { props.units }</p>
        </div>
    );
}

function average(data){
    return _.round(_.sum(data)/data.length);
}