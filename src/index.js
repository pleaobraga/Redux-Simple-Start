import React, {Component} from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_Key = "AIzaSyAn-WgYVoZr3F2sYWBh1JLlLincfaxFRkk";

const App = () => {
    return  (
        <div>
            <SearchBar />
        </div>
    );
}

// class App extends Component{
//     render(){
//         return <p>Xablauy</p>
//     }
// }

ReactDom.render(<App />, document.querySelector('.container'));