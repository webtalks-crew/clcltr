import React from 'react';
import ReactDOM from 'react-dom';
import Calc from './Calc.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Calc />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
