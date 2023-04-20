import {useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import './newUser.css'

function NewUser(){
    const {register, handleSubmit, watch, formState: {errors}, reset } = useForm();
    
    const onSubmit = data =>{
        
        if(data.Choice1 !== '' && data.Choice2 !== '' &&data.Choice3 !== '' &&data.Choice4 !== '' &&data.Choice5 !== ''){
            axios.post(`${process.env.REACT_APP_FETCHBASEURL}/addUser`, data)
            // axios.get(`${process.env.REACT_APP_FETCHBASEURL}/allUsers`)
            .then(function(response){
                console.log(response);
                alert('New User Added')
                reset({})

            })
            .catch(function(error){
                console.log(error);
            })
        }else{
            console.log('missing info')
        }
    } 

    return(
        <div >
            <Container>
                <h1 className='mt-3 mb-3'>New User</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className='userInfo'>
                        <h2 className='mb-3'>User Information</h2>
                        <Form.Group>
                            <Form.Label>Name*</Form.Label>
                            <Row className='mb-3'>
                                
                                <Col >
                                    <Form.Control name='FirstName' {...register('FirstName', {required:true})} placeholder='John'/>
                                    {errors.FirstName?.type === 'required' && <p role="alert">Field is required</p>}
                                </Col>
                                <Col>
                                    <Form.Control name='MiddleName' {...register('MiddleName')} placeholder='Swanson'/>
                                </Col>
                                <Col>
                                    <Form.Control name='LastName' {...register('LastName', {required:true})} placeholder='Doe'/>
                                    {errors.LastName?.type === 'required' && <p role="alert">Field is required</p>}
                                </Col>
                            </Row>
                        </Form.Group>
                         
                        
                        <Form.Group>
                            
                            <Form.Label>Email Address</Form.Label>  
                            <Row className='mb-3'>
                                <Col>
                                    <Form.Control name='Email' {...register('Email', {pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} type="email" placeholder='email@mail.com'/>
                                    {/* {errors?.Email?.type === 'pattern' && <p role='alert'> Email is invalid </p>} */}
                                </Col>
                            </Row>
                        </Form.Group>  
                    </div>
                    
                    
                    <div>
                        <h2 className='mb-3'>Restaurants</h2>
                        <p>Please enter Five to Ten Restaurants</p>
                        <Form.Group>
                            <Form.Control name='Choice1' {...register('Choice1', {required:true})} className='mb-2' placeholder='Choice #1 REQ'/>
                            {errors.Choice1?.type === 'required' && <p role="alert">Field is required</p>}
                            
                            <Form.Control name='Choice2' {...register('Choice2', {required:true})} className='mb-2' placeholder='Choice #2 REQ'/>
                            {errors.Choice2?.type === 'required' && <p role="alert">Field is required</p>}
                            
                            <Form.Control name='Choice3' {...register('Choice3', {required:true})} className='mb-2' placeholder='Choice #3 REQ'/>
                            {errors.Choice3?.type === 'required' && <p role="alert">Field is required</p>}
                            
                            <Form.Control name='Choice4' {...register('Choice4', {required:true})} className='mb-2' placeholder='Choice #4 REQ'/>
                            {errors.Choice4?.type === 'required' && <p role="alert">Field is required</p>}
                            
                            <Form.Control name='Choice5' {...register('Choice5', {required:true})} className='mb-2' placeholder='Choice #5 REQ'/>
                            {errors.Choice5?.type === 'required' && <p role="alert">Field is required</p>}
                            
                            <Form.Control name='Choice6' {...register('Choice6')} className='mb-2' placeholder='Choice #6'/>
                            <Form.Control name='Choice7' {...register('Choice7')} className='mb-2' placeholder='Choice #7'/>
                            <Form.Control name='Choice8' {...register('Choice8')} className='mb-2' placeholder='Choice #8'/>
                            <Form.Control name='Choice9' {...register('Choice9')} className='mb-2' placeholder='Choice #9'/>
                            <Form.Control name='Choice10'{...register('Choice10')} className='mb-2' placeholder='Choice #10'/>
                        </Form.Group>
                    </div>
                    {/* <input type='submit'/> */}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
        
    );
}


export default NewUser;