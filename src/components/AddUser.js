import React from "react"


class AddUser extends React.Component  {
    userAdd={}
    constructor(pros) {
        super(pros)
        this.state={
            first_name: "" ,
            last_name: "",
            bio: "",
            age: 1,
            isHappy: false
        }
    }
    render() {
        return (
            <form ref={(el)=> this.myForm = el}>
                <input placeholder="First Name" onChange={(e)=> this.setState({first_name:e.target.value})}/>
                <input placeholder="Last Name" onChange={(e)=> this.setState({last_name:e.target.value})}/>
                <textarea placeholder="Biography" onChange={(e)=> this.setState({bio:e.target.value})}></textarea>
                <input placeholder="Age" onChange={(e)=> this.setState({age:e.target.value})}/>
                <label htmlFor="isHappy">Are you happy?</label>
                <input type="checkbox" id="isHappy" onChange={(e)=> this.setState({isHappy:e.target.checked})}/>
                <button type="button" onClick={()=> {
                    this.myForm.reset()
                    this.userAdd={
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        bio: this.state.bio,
                        age: this.state.age,
                        isHappy: this.state.isHappy,
                    }
                    if(this.props.user)
                        this.userAdd.id=this.props.user.id
                    this.props.onAdd(this.userAdd)
                }
                }>Add</button>
            </form>
        )
    }
}

export default AddUser