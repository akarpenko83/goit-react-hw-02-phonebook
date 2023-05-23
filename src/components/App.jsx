import React, { Component } from 'react';
import Section from './phonebook/Phonebook';
class App extends Component {
    state = {
        contacts: [],
        name: '',
    };

    render() {
        return <Section></Section>;
    }
}
export default App;
