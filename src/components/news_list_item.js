import React from 'react'
 import classes from '../styles.css'
const NewsItem = ({item}) => {
    return (
        <div className={classes.news_item}>
            <h1>{item.title}</h1>
                <div>{item.author}</div>
                <div><img height='70px' width = '100px' src={item.urlToImage}  ></img></div>
                <div>{item.description}</div>
                <div>{ item. content}</div> 
        </div>
    )
}
export default NewsItem;