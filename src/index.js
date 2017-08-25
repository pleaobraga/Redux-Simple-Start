import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_Key = "AIzaSyAn-WgYVoZr3F2sYWBh1JLlLincfaxFRkk";

class App extends Component {
    constructor(props){
        super(props)

        this.state = { videos: [] };

        YTSearch({key: API_Key, term: 'stufboards'}, (videos) => {
            this.setState({videos});
        });
    }

    render() {
        return  (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }   
}

// class App extends Component{
//     render(){
//         return <p>Xablauy</p>
//     }
// }

ReactDom.render(<App />, document.querySelector('.container'));