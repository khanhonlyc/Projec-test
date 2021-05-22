import React from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            taskName:'',
            tasks: []
        };
    }

    render() {
        return (
            <div>
                <TodoList ></TodoList>
            </div>
        )

    }
}

export default App;