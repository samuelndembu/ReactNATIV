import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import JSON from './db.json';
 
//Components
import Header from './components/header'
import NewsList from './components/news_list'

class App extends Component
{
    state = {
        news:JSON
    }
    render() {
        return(
        <div>
                <Header/>
                <NewsList news={this.state.news}>
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