import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import JSON from './db.json';
 
//Components
import Header from './components/header'
import NewsList from './components/news_list'

class App extends Component
{
    state = {
        news: JSON, 
        filtered: []
    } 
    getKeyword = (event) => {
        // console.log(event.target.value)
        let keyword = event.target.value;
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keyword) > -1
        }); 
        this.setState({
            filtered
        })
        // console.log(filtered);
    }
    render() {
        let newsFiltered = this.state.filtered;
        let newsWhole = this.state.news;
        console.log(this.props.keywords)
        return(
        <div>
                <Header keywords={this.getKeyword}/>
                <NewsList news={newsFiltered.length === 0 ? newsWhole :newsFiltered}>
                <h3>Todays Headlines are:</h3>
                </NewsList>
        </div>)  
    }
}
// const App = () => { 
    
//     return <div>
//         <Header/>
//         </div>
//     //same as:
//     {/* return React.createElement('h1',{className: 'title'},'Hey! Its Sam') */}
// }
ReactDOM.render(<App />, document.querySelector('#root'));