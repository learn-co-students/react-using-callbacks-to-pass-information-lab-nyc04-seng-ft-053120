import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import learnSymbol from './data.js'
import Matrix from './Matrix.js'

ReactDOM.render(<Matrix values={learnSymbol} />, document.getElementById('root')); //this send props of value to matrix which is color array
