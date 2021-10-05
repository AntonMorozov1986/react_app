import React, { Component } from 'react';
import '@style/components/App.scss';

import { USER, APP } from '@global/constants';

import { Header } from '@components/Header';
import { Message }from '@components/Message';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header app={APP}/>
                <Message user={USER}/>
            </div>
        );
    }
}

export default App;
