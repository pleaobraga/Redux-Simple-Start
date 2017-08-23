import React, {Component} from 'react';
import ReactDom from 'react-dom';

const App = () => {
    return  <div>Hi</div>;
}

// class App extends Component{
//     render(){
//         return <p>Xablauy</p>
//     }
// }

ReactDom.render(<App />, document.querySelector('.container'));