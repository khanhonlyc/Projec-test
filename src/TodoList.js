import React from 'react';
import './TodoList.css';
//import './App.css';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            taskName:'',
            tasks: [
                {id: 0, name: 'viết mail', done: false},
                {id: 1, name: 'đọc sách', done: false},
                {id: 2, name: 'đi chợ', done: false}
            ]
        };
    }

    myTaskChangeHandler= (event) => {
        this.setState({taskName: event.target.value});
        //console.log('myTaskChangeHandler:　',event.target.value);
    }

    DeleteTask = (id) => {
        console.log('DeleteTask',id);
        const tasks = this.state.tasks.filter( (task) => task.id!==id);
        this.setState({tasks});
        //console.log('tasks',tasks)
    }

    completeTask = (id) => {
        //console.log('completeTask',id);
        const tasks = this.state.tasks;
        tasks.forEach( task =>{
            if(task.id===id){
                task.done=true;
            }
        })
        console.log('tasks complete',tasks);
        this.setState({tasks},()=>console.log(this.state.tasks));
    }

    addTask(){
        const id = this.state.tasks.length;
        const name = this.state.taskName; 
        //this.setState({taskName: ''})
        //const name = {dd:12,ddd:'ksje'};
        //console.log('add Tasks', this.state);
        //console.log(Array.isArray(this.state.taskName));
        //console.log(this.state.tasks.length)
        this.state.tasks.push( {id, name,done:false} );
        this.setState({taskName:''});
        console.log('da add',this.state.tasks);
    }
    render() {
        return (
        <div className='TodoList' >
            <header className="App-header" >
                <br />
                Todo - list
                <br />
                <div className='aligned' >
                    
                    <input type='text' onChange={this.myTaskChangeHandler} />
                    <img src='./image/add.png'
                        alt='Đây là nút để thêm '
                        height='40'
                        style={{cursor:'pointer'}}
                        title='add task'  
                        onClick={()=> this.addTask()} 
                   />
                </div>

                

                <div>
                    <ol>
                    {
                        
                        this.state.tasks.map((value,index) => {
                       return  <Todo 
                            key={index} 
                            id={value.id} 
                            value={value.name} 
                            DeleteTask={this.DeleteTask}
                            completeTask={this.completeTask}
                            />
                        }
                        )
                    }
                    </ol>
                </div>

                

            </header>

        </div>
        )

    }
}

export default TodoList;