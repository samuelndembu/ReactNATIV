import React from 'react'
 import '../css/styles.css'
const NewsItem = ({item}) => {
    return (
        <div className= "news_item">
            <h1>{item.title}</h1>
                <div>{item.author}</div>
                <div className="image"><img className="image" src={item.urlToImage}  ></img></div>
                <div>{item.description}</div>
                <div>{ item. content}</div> 
        </div>
    )
}
export default NewsItem;