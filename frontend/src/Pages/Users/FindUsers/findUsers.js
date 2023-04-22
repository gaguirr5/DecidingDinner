import { useEffect, useState } from 'react'
import Container from "react-bootstrap/esm/Container";
import Table from 'react-bootstrap/Table';
import axios from "axios";

function FindUsers(){   
    // const [friends, SetFriends] = useState({
    //     firstName:'',
    //     middleName:'',
    //     lastName:''
    // }
    //     )
    const [friends, setFriends] = useState([])
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_FETCHBASEURL}/allUsersA`)
        .then((response)=>{
            console.log(response)
            const   {data:
                        {
                            FirstName, MiddleName, LastName
                        }
                    } = response;
            // setFriends({
            //     // firstName:FirstName,
            //     // lastName: LastName,
            //     // middleName: MiddleName
            //     firstName:response.data.FirstName,
            //     lastName: response.data.LastName,
            //     middleName: response.data.MiddleName
            // })
            setFriends(response.data)
            console.log(friends)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    return(
        <div>
            <Container>
                <h1>Find users</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {/* <th>#</th> */}
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Restaurants</th>
                            <th>Edit</th>
                            <th>Del</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            friends.map((list)=>
                            <tr>
                                {/* <td>{list.UserId}</td> */}
                                <td>{list.FirstName}</td>
                                <td>{list.MiddleName}</td>
                                <td>{list.LastName}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>)
                        }
                    </tbody>
                </Table>

            </Container>
            
        </div>
        
    );
}


export default FindUsers;