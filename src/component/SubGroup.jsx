import React,{Component} from 'react';
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
// import { AddDepartment } from './AddDepartment';
import {AddSubGroup} from './AddSubGroup';
// import { EditDepartment } from './EditDepartment';

export class SubGroup extends Component {

    constructor(props){
        super(props);
        this.state={sGroup:[], addModalShow: false, editModalShow: false};
    }
    
    refershList() {
        const api = process.env.REACT_APP_API+'SubGroup';
        fetch(api)
        .then(response => response.json())
        .then(data=> {
            this.setState({sGroup:data})
        })
    }
    componentDidMount(){
        this.refershList();
    }
    componentDidUpdate() {
        this.refershList();
    }
    deletedep(SubGroupID) {
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'SubGroup/'+SubGroupID,{
                method:'DELETE',
                header: {
                'Accept':'application/json',
                'Content-Type': 'application/json'}
            })
        }
    }
    render() {
        const {sGroup, SubGroupID, SubGroupName} = this.state;
        let addModalClose = () => this.setState({addModalShow:false})
        let editModalClose = () => this.setState({editModalShow:false})
        return(
            <div>
                <h1>Sub Group List</h1>
                <Table className='mt-4' striped bordered hover size='sm'>
                    
                    <thead>
                        <tr>
                            <th>SubGroupID</th>
                            <th>SubGroupName</th>
                            <th>GroupID</th>
                            <th>MakeBy</th>
                            <th>MakeDate</th>
                            <th>InsertTime</th>
                            <th>UpdateBy</th>
                            <th>UpdateDate</th>
                            <th>UpdateTime</th>

                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sGroup.map(grp=>
                            <tr key={grp.SubGroupID}>
                                <td>{grp.SubGroupID}</td>
                                <td>{grp.SubGroupName}</td>
                                <td>{grp.GroupID}</td>
                                <td>{grp.MakeBy}</td>
                                <td>{grp.MakeDate}</td>
                                <td>{grp.InsertTime}</td>
                                <td>{grp.UpdateBy}</td>
                                <td>{grp.UpdateDate}</td>
                                <td>{grp.UpdateTime}</td>
                                <td>
                                    {/* <ButtonToolbar>
                                        <Button className='mr-2' variant='info' onClick={()=>{this.setState({editModalShow:true, SubGroupID: grp.SubGroupID, SubGroupName: grp.SubGroupName})}}>Edit</Button>
                                        <Button className='mr-2' variant='danger' onClick={()=>this.deletedep(grp.SubGroupID)}>Delete</Button>
                                        <EditDepartment show={this.state.editModalShow}
                                        onHide={editModalClose}
                                        SubGroupID={SubGroupID}
                                        SubGroupName={SubGroupName}/>
                                    </ButtonToolbar> */}
                                </td>
                            </tr>
                            )}
                    </tbody>
                </Table>
                <ButtonToolbar>
                    <Button variant='primary' onClick={()=>this.setState({addModalShow:true})}>
                    Add Department
                    </Button>
                    <AddSubGroup show={this.state.addModalShow} onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}