import React from 'react';

import './App.css'
import axios from 'axios'

class App extends React.Component {

    state = { advice: '' };

    componentDidMount() {
        this.fetchadvice()
    }

    fetchadvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then(response => {
                const { advice } = response.data.slip

                this.setState({ advice: advice })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        const { advice } = this.state
        return (
            <h1>{advice}</h1>
        );
    }

}


export default App


