import React, {Component} from 'react';
import {Modal,Button, Col, Form, Row } from 'react-bootstrap';

export class UpdateSubGroup extends Component {
    constructor(props){
        super(props);
        this.state={deps:[]};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const api1 = process.env.REACT_APP_API+'SubGroup';
        fetch(api1)
        .then(res=>res.json())
        .then(data=>(
            this.setState({deps:data}) 
        ));
        
    }    
    
    
    handleSubmit(event) {
        event.preventDefault();
        const api = process.env.REACT_APP_API+'employee';
        fetch(api, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                SubGroupID: event.target.SubGroupID.value,
                SubGroupName: event.target.subgroup.value,
                GroupID: event.target.GroupId.value,
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
                            Edit SubGroup
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={12}>
                                <Form onSubmit={this.handleSubmit}>
                                    
                                    <Form.Group controlId="SubGroupName">
                                        <Form.Label>Sub Group Name</Form.Label>
                                        <Form.Control type='text' name='EmployeeName' placeholder='Employee Name' required defaultValue={this.props.SubGroupName}/>    
                                    </Form.Group>
                                    <Form.Group controlId="GroupID">
                                        <Form.Label>Group</Form.Label>
                                        <Form.Control as='select' defaultValue={this.props.GroupID}>    
                                        {this.state.deps.map(dep=>
                                        
                                        <option key={dep.SubGroupID}>{dep.GroupID}</option>)}
                                    </Form.Control>
                                    </Form.Group>
                                    {/* <Form.Group controlId="DateOfJoining">
                                    <Form.Label>DateOfJoining</Form.Label>
                                    <Form.Control 
                                    type="date"
                                    name="Dateofjoin"
                                    required
                                    placeholder="DateOfJoining"
                                    defaultValue={this.props.doj}
                                    />
                                    </Form.Group> */}
                                    <Form.Group>
                                        <Button variant='primary' type='submit'>Update Employee</Button>
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


