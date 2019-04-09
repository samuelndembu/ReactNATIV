import React, { Component } from 'react';
import classes from '../css/styles.css'

const getYear = () => {
    const newDate = new Date();
    return newDate.getFullYear()
}
const products = {
    name: 'Mercedez Benz',
    price: 30000000,
    model: 'Volksawagen'
}
const date = Date.now();
const d = new Date(parseInt(date, 10));
const ds = d.toString('MM/dd/yy HH:mm:ss');


//Functional based component

// const Header = () => {
//     return (<div>
//         <div>Date:{ds}</div>
//         <div>Year: {getYear()}</div>
//         <div>Name: {products.name}</div>
//         <div>price: {products.price}</div>
//         <div>model: {products.model}</div>

    
//  </div>)
// }


//class based component
const Header = (props) =>{
        return (<div>
            <header>
                <div className="logo"> Logo </div>
                <input onChange={props.keywords} type='text'
                 />
            </header>
            {/* <div class="product" id="product">
                    <div >Date:{ds}</div>
                    <div>Year: {getYear()}</div>
                    <div>Name: {products.name}</div>
            <div className='price'>price: {products.price}</div>
            {/* onClick={() => console.log('i was clicked')} */} 
                {/* <div>model: {products.model}</div> */}
                {/* </div> */}
          
              </div>)
    
} 

export default Header;