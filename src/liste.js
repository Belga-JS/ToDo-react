import React, { Component } from 'react';
class Liste extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listTodo: [
                { "id": 0, "text": "item1" },
                { "id": 1, "text": "item2" },
                { "id": 2, "text": "item3" },
            ],
            newText: ''
        }
    }
    changeText = (e) => {
        this.setState({ newText: e.target.value })
    }
    add = () => {

        let newItm = { "id": Math.random(), "text": this.state.newText }
        let newList = [...this.state.listTodo, newItm]
        this.setState({ listTodo: newList })
    }


    delete = (id) => {
        const list2 = this.state.listTodo.filter((el) => {

            return el.id !== id
        }

        )
        this.setState({
            listTodo: list2


        })
    }


    
    render() {

        return (
            <div>
                <div id="myDIV" className="header">
                    <div className="text">
                        <h2>To-Do APP!</h2><br />
                        <p>ADD NEW TO-DO</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Enter New Task" onChange={(e) => this.changeText(e)} ></input><br /><br /><br />
                        <span className="addBtn" onClick={this.add}>Add </span>
                    </div>
                </div>
                <div className="get-work">
                    <h3> Let's get Some Work done!</h3>
                    {this.state.listTodo.map((el, i) => {
                        return (
                            <p key={i}><span>{el.text}</span><button className="btn1" onClick={() => this.delete(el.id)}>delete</button> </p>
                        )


                    }





                    )
                    }



                </div >
            </div >



        );
    }
}



export default Liste;
