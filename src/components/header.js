import React, { Component } from 'react';
import '../css/styles.css'

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
class Header extends Component{
    state =
        {
        active: false,
            keywords: ''
        
    }
    inputChangeHandler(event) {
        const value = event.target.value === '' ? false : true;

        this.setState({ 
            active: value,
            keywords:event.target.value
            
        })
    }
    render() {
        const styles =
        {
            header:
            {
            background: 'blue'
            },
            logo:
            {
                color: '#fff',
                fontFamily: 'Anton',
                textAlign: 'center'
            }
        
        }
    
        return (<div style={styles.header}>
            <header style={{background:`${this.state.active ? 'red' : 'blue'}`}}>
                <div style={styles.logo}> Logo </div>
                <input type='text' style={styles.logo}></input>

            </header>
                    <div style={styles.logo}>Date:{ds}</div>
                    <div style={styles.logo}>Year: {getYear()}</div>
                    <div style={styles.logo}>Name: {products.name}</div>
            <div className='price' style={styles.logo}>price: {products.price}</div>
            {/* onClick={() => console.log('i was clicked')} */} 
            <div>model: {products.model}</div>
            <input style={styles.logo} onChange={ (e)=> this.inputChangeHandler(e)} type='text'
                 />
                     
            
                
              </div>)
    }
} 

export default Header;