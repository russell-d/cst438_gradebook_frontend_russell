import { DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React from 'react';
import { toast } from 'react-toastify';
import { SERVER_URL } from '../constants';
import Assignment from './Assignment';

class Add extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          name: '',
          courseTitle: '',
          dueDate: ''
      };
    };

    nameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    courseTitleHandler = (event) => {
        this.setState({courseTitle: event.target.value});
    }

    dueDateHandler = (event) => {
        this.setState({dueDate: event.target.value});
    }

    submit = (event) => {
        fetch(`${SERVER_URL}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                courseTitle: this.state.courseTitle,
                dueDate: this.state.dueDate
            })
        }).then(response => {
            if (response.ok) {
                toast.success("Added Assignment.", {position: toast.POSITION.BOTTOM_LEFT})
                position: toast.POSITION.BOTTOM_LEFT
            } else {
                toast.error("Failure to add assignment.", {position: toast.POSITION.BOTTOM_LEFT})
            }
        }).catch(err => {
            toast.error("Failure to add assignment.", {position: toast.POSITION.BOTTOM_LEFT})
        })
    }


    render() {
        return (
            <div>
                <DialogTitle>Add Assignment</DialogTitle>

                <DialogContent>
                    <TextField autoFocus label="Assignment Name" onChange={this.nameHandler}/>
                    <TextField autoFocus label="Course Title" onChange={this.courseTitleHandler}/>
                    <TextField autoFocus label="Due Date" onChange={this.dueDateHandler}/>
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={this.submit}>ADD</Button>
                </DialogActions>
            </div>
        )   
    }
}  

export default Add;