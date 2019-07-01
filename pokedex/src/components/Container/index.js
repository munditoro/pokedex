import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';



class Container extends Component{
    render() {
        return (
            <div>
                    <div>
                        <Header />
                        <Content />
                    </div>
            </div>
        );
    }
}


export default Container;