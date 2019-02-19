import * as React from 'react';

import {FormGroup, ButtonGroup, ControlLabel, FormControl, Button,  Glyphicon} from 'react-bootstrap';

import moment from 'moment';

import DatePicker from 'react-datepicker';

import {TodoAPI} from '../API/TodoAPI';

import './TodoEntryView.sass'

export class TodoDetailView extends React.Component {
    constructor(props) {
        super(props)

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange     = this.handleDateChange.bind(this);
        this.handleClick          = this.handleClick.bind(this);

        this.handleDelete         = this.handleDelete.bind(this);
        this.handleComplete       = this.handleComplete.bind(this);

        this.state = {
            
        }
    }


    handleDelete(e) {
        TodoAPI.delete('/todo/' + this.state.id)

        this.props.history.push('/')
        window.location.reload()
    }

    handleComplete(e) {
        if(this.state.completed)
            TodoAPI.put('/todo/' + this.state.id + '/incomplete')
        else 
            TodoAPI.put('/todo/' + this.state.id + '/complete')

        window.location.reload()
    }

    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }

    handleDescriptionChange(e) {
        this.setState({ description: e.target.value });
    }

    handlePriorityChange(e) {
        this.setState({ priority: e.target.value });
    }

    handleDateChange(date) {
        this.setState({ deadline: date});
    }

    componentDidMount() {

        TodoAPI.get("/todo/" + this.props.match.params.id)
            .then((res) =>  { 
                let data = res.data
                data.deadline = (data.deadline === null ? null : moment(data.deadline, "YYYY-MM-DD"))
                this.setState({...data})
            })
    }

    handleClick() {

        var deadline = null

        if(this.state.deadline !== null)
            deadline = this.state.deadline.format("YYYY-MM-DD") + "T00:00"

        var data = {
            completed: false,
            title: this.state.title,
            description: this.state.description,
            priority: this.state.priority,
            deadline: deadline
        }

        TodoAPI.put('/todo/' + this.state.id, data).then((res) => console.log(res.data))

        this.props.history.push('/')

        window.location.reload()
    }


    render() {
        let PRIORITY_COLOR = ["", "red", "yellow", "purple", "black"]

        let complete_button = (<div>
            <Glyphicon glyph={this.state.completed ? "ok" : "unchecked"}/> <span>{ !this.state.completed ? "Check as Completed" : "Check as Incompleted"}</span>
            </div>)

        return (            
            <form>

                <FormGroup controlId="formBasicText">
                    <ControlLabel>어떤 일을 할 건 가요?</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.title}
                        placeholder="Enter text"
                        onChange={this.handleTitleChange}
                    />
                </FormGroup>

                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>구체적으로 어떻게 일할 건가요?</ControlLabel>
                    <FormControl 
                        componentClass="textarea" 
                        placeholder="textarea" 
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}
                        />
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>우선순위를 정해주세요</ControlLabel>
                    <div className={"priority priority-" + PRIORITY_COLOR[parseInt(this.state.priority)]}>
                        <Glyphicon glyph="unchecked"/>
                    </div>
                    <FormControl componentClass="select"        
                                placeholder="select"
                                value={this.state.priority}
                                onChange={this.handlePriorityChange}
                                >
                        <option value="1">
                            긴급
                        </option>
                        <option value="2">
                            중요한 일
                        </option>
                        <option value="3">
                            평범한 일
                        </option>
                        <option value="4">
                            사소한 일
                        </option>
                    </FormControl>
                </FormGroup>

                <ControlLabel>마감기한을 정해두세요</ControlLabel>
                <DatePicker
                    selected={this.state.deadline}
                    onChange={this.handleDateChange}
                />
                

                <ButtonGroup>
                    <Button className="btn-todo" type="submit"
                        onClick={this.handleClick}>Submit</Button>
                    <Button className="btn-todo" onClick={this.handleDelete}>
                        <Glyphicon glyph="trash" />
                        Delete</Button>
                    <Button className="btn-todo" onClick={this.handleComplete}>
                    {complete_button}
                    </Button>
                </ButtonGroup>

            </form>
        )
    }
}