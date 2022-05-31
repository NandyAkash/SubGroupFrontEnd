import React, {Component} from 'react';
import {Modal,Button, Col, Form, Row } from 'react-bootstrap';

export class AddSubGroup extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        var today = new Date();
        var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state = {
        currentTime: time,
        currentDate: date
    }
  }
    

    handleSubmit(event) {
        event.preventDefault();
        const api = process.env.REACT_APP_API+'SubGroup';
        fetch(api, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
                SubGroupName: event.target.SubGroupName.value,
                GroupId: event.target.GroupId.value,
                MakeBy: event.target.MakeBy.value,
                MakeDate: this.state.currentDate,
                InsertTime: this.state.currentTime,
                UpdateBy: event.target.UpdateBy.value,
                UpdateDate: event.target.UpdateDate.value,
                UpdateTime: event.target.UpdateTime.value
            })
        })
        .then(res => res.json())
        .then((result)=> {
            alert(result);
        },
        (error) => {
            alert('Failed')
        })
    }
    render() {
        return(
            <div className='container'>
                
                <Modal 
                    {...this.props}
                    size='lg'
                    aria-labelledby='conatined-modal-title-vcenter'
                    centered
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id='conatined-modal-title-vcenter'>
                            Add SubGroup
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="SubGroupName">
                                        <Form.Label>SubGroupName</Form.Label>
                                        <Form.Control type='text' name='SubGroupName' placeholder='Sub Group Name' required />   
                                    </Form.Group>
                                    <Form.Group controlId="GroupId">
                                        <Form.Label>Group ID</Form.Label>
                                        <Form.Control type='text' name='GroupId' placeholder='Group ID' required />   
                                    </Form.Group>
                                    <Form.Group controlId="MakeBy">
                                        <Form.Label>Make By</Form.Label>
                                        <Form.Control type='text' name='MakeBy' placeholder='MakeBy' required />   
                                    </Form.Group>
                                    {/* <Form.Group controlId="MakeDate">
                                        <Form.Label>Make Date</Form.Label>
                                        <Form.Control type='date' name='MakeDate' placeholder='Make Date' required />   
                                    </Form.Group> */}
                                    {/* <Form.Group controlId="InsertTime">
                                        <Form.Label>Insert Time</Form.Label>
                                        <Form.Control type='time' name='InsertTime' placeholder='Insert Time' required />   
                                    </Form.Group> */}
                                    <Form.Group controlId="UpdateBy">
                                        <Form.Label>Update By</Form.Label>
                                        <Form.Control type='text' name='UpdateBy' placeholder='Update By' required />   
                                    </Form.Group>
                                    <Form.Group controlId="UpdateDate">
                                        <Form.Label>Update Date</Form.Label>
                                        <Form.Control type='date' name='UpdateDate' placeholder='Update Date' required />   
                                    </Form.Group>
                                    <Form.Group controlId="UpdateTime">
                                        <Form.Label>UpdateTime</Form.Label>
                                        <Form.Control type='time' name='UpdateTime' placeholder='Update Time' required />   
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant='primary' type='submit'>Add Sub Group</Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='danger' onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}