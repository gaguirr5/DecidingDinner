import Accordion from 'react-bootstrap/Accordion'
import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import letterIndex from './letterIndex';
import Container from 'react-bootstrap/Container'

function Selector(){
    const [friendList, setFriendList] = useState([])
    
    function isCharacterALetter(char) {
      return (/[a-zA-Z]/).test(char)
    }

    function fillAccordionList(unfilteredData){
      let accordions = [{id:'A', names:[]}, {id:'B',names:[]}, {id:'C',names:[]}, {id:'D',names:[]}, {id:'E',names:[]}, {id:'F',names:[]}, {id:'G',names:[]}, {id:'H',names:[]}, {id:'I',names:[]}, {id:'J',names:[]}, {id:'K',names:[]}, {id:'L',names:[]}, {id:'M',names:[]}, {id:'N',names:[]}, {id:'O',names:[]}, {id:'P',names:[]}, {id:'Q',names:[]}, {id:'R',names:[]}, {id:'S',names:[]}, {id:'T',names:[]}, {id:'U',names:[]}, {id:'V',names:[]}, {id:'W',names:[]}, {id:'X',names:[]}, {id:'Y',names:[]}, {id:'Z',names:[]}]
      for(let x in unfilteredData){
        
        if(isCharacterALetter(unfilteredData[x].FirstName[0])){
          let firstLetter = unfilteredData[x].FirstName[0].toUpperCase()
          let index = letterIndex(firstLetter)
          accordions[index].names.push(unfilteredData[x])
        }        
      }
      setCards(accordions)
    }

    function setCards(objs){
      const newObj = []
      for(let item in objs){
        if(objs[item].names.length > 0){
          let id = objs[item].id
          let names = objs[item].names
          let list = <Accordion.Item eventKey="0">
                        <Accordion.Header>{id}</Accordion.Header>
                          <Accordion.Body>
                              <Form key={id}>
                                  {['checkbox'].map((type) => (
                                      <div key={`default-${type}`} className="mb-3">
                                        {
                                          names.map(name => {
                                            return <Form.Check 
                                            type={type}
                                            id={`default-${type}`}
                                            label = {name.MiddleName? `${name.FirstName} ${name.MiddleName} ${name.LastName}`:`${name.FirstName} ${name.LastName}`}
                                            
                                          />})
                                        }
                                      </div>  
                                  ))}
                              </Form>
                          </Accordion.Body>
                        </Accordion.Item>
          
          newObj.push(list)                       
        }
      }
      setFriendList(newObj)
    }

    useEffect(()=>{
      axios.get(`${process.env.REACT_APP_FETCHBASEURL}/allUsers`)
        .then((response)=>{
          fillAccordionList(response.data)
        })
        .catch((err)=>{
          console.log(err)
        })
    }, [])
    
    return(
        <div>
          
          <Container>
            <h1>Welcome to the selector</h1>
            {
              friendList.map(list => <Accordion key={list}> {list} </Accordion>)
            }
          </Container>
            
        </div>
    )
}
export default Selector;