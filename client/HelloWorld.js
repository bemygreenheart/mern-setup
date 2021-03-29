import React from 'react';
import {hot} from 'react-hot-loader';

const HelloWorld = (props)=>{
    return(
        <div>
            <h1>Hello World!</h1>
            <p>Some change to see how it works</p>
        </div>
    );
}

export default hot(module) (HelloWorld);