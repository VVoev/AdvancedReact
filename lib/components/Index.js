import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    state = {
        answer: 42
    }

    asyncFunc = () => {
        return Promise.resolve(37)
    }

    async componentDidMount() {
        this.setState({
            answer: await this.asyncFunc()
        })
    }
    render() {
        return (
            <div>
                <h2>Hello Class {this.state.answer}</h2>
            </div>
        );
    }
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
