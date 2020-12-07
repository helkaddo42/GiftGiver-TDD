import React, {Component} from 'react'
import { FormGroup,  FormControl, Form, Button} from 'react-bootstrap'

class Gifts extends Component {
    
    state={
        person: '',
        present: '',
    }
    render(){

        return (
            <div className='gifts'>
                <Form>
                    <FormGroup>
                        <label>Person</label>
                        <FormControl
                            className='input-person'
                            onChange={event=> this.setState({person: event.target.value})}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Present</label>
                        <FormControl
                            className='input-present'
                            onChange={event=> this.setState({present: event.target.value})}
                        />
                    </FormGroup>
                    <Button className='btn-remove' onClick={()=>this.props.removeGifts(this.props.gifts)} >Remove Gift</Button>

                </Form>
            </div>
        )

    }
    
}
export default Gifts