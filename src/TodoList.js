import React from 'react';
import './TodoList.css';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            taskName:'',
            tasks: [
                 {id: 0, name: '読書', done: false},
                 {id: 1, name: '買い物を買いに行く', done: false},
                 //{id: 2, name: '日本語を勉強すること', done: false}
            ]
        };
    }

    myTaskChangeHandler= (event) => {
        this.setState({taskName: event.target.value});
    }

    DeleteTask = (i) => {
        console.log('DeleteTask',i);
        const tasks = this.state.tasks.filter( (task) => task.id!==i);
        this.setState({tasks});
        //console.log('new tasks',this.state.tasks);
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
                    
                    <input type='text'value={this.state.taskName} onChange={this.myTaskChangeHandler} />
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
                        return  [<Todo 
                            key={value.id} 
                            id={value.id} 
                            value={value.name} 
                            DeleteTask={this.DeleteTask}
                            completeTask={this.completeTask}
                            />,console.log('id :',value.id,'index: ',index,'length',this.state.tasks.length,this.state.tasks)]
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