import React, {Component} from 'react';
import {Modal,Button, Col, Form, Row } from 'react-bootstrap';

export class AddSubGroup extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const api = process.env.REACT_APP_API+'subgroup';
        fetch(api, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
                SubGroupName: event.target.SubGroupName.value
                
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
                            Add Department
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