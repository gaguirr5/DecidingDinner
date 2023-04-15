import Accordion from 'react-bootstrap/Accordion'
import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import letterIndex from './letterIndex';

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
          newObj.push(objs[item])
        }
      }
      console.log(newObj)
      setFriendList(newObj)
    }

    useEffect(()=>{
      axios.get(`${process.env.REACT_APP_FETCHBASEURL}/allUsers`)
        .then((response)=>{
          fillAccordionList(response.data)
          console.log('46', friendList)
        })
        .catch((err)=>{
          console.log(err)
        })
        // setCards(accordions)
        // console.log(friendList)
    }, [])
    
    return(
        <div>
        
        <h1>Welcome to the selector</h1>
        <div>
            {friendList.map(list=><li>{list}</li>)}
        </div>
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>aye</Accordion.Header>
        <Accordion.Body>
          <Form>
            {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                <Form.Check 
                    type={type}
                    id={`default-${type}`}
                    label={`Name 1`}
                />
                <Form.Check 
                    type={type}
                    id={`default-${type}`}
                    label={`name 2`}
                />
                </div>
                
            ))}
        </Form>
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="1">
        <Accordion.Header>Bee</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    )
}
export default Selector;