import React from 'react';
import './Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
       //this.state={taskName:''}
       this.state = {
           id:props.id,
           value:props.value,
           done:props.done
        }
    }

    DeleteTask = () => {
        console.log('DeleteTask from Todo',this.props.value);
    }

    completeTask = () => {
        //console.log('ok',this.state.id);
        //completeTask
        this.setState({done:true});
        this.props.completeTask(this.state.id);
    }

    render() {
        let check = '';
        if(!this.state.done){
            check =(
            <img
            src='./image/finish.png'
            style={{cursor:'pointer'}}
            width='30px'
            onClick={ () => this.completeTask()}
            />
            );
        }
        return (
            <div className='Todo aligned'>
                {check}
                &nbsp;
                
                <img
                    className={this.state.done ? 'noCheckDone':''}
                    src='./image/delete1.png'
                    style={{cursor:'pointer'}}
                    width='25px'
                    //onClick={() => this.props.Delete(this.props.id)}
                    onClick={() => this.props.DeleteTask(this.state.id)}
                />
                &nbsp;&nbsp;
                <span className={this.state.done ? 'Done':''}>
                    {this.state.value}
                </span>
            </div>
        );
    }
}

export default Todo;