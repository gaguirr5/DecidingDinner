import Accordion from 'react-bootstrap/Accordion'
import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';

function Selector(){
    const [friendList, setFrendList] = useState({})
    const [list, setList] = useState()
    
    function setCards(){

    }

    useEffect(()=>{
        let list = [
            'dane', 'jeff', 'diana', 'ashley', 'benjamin'
        ]
        let accordions = {'A':[], 'B':[], 'C':[], 'D':[], 'E':[], 'F':[], 'G':[], 'H':[], 'I':[], 'J':[], 'K':[], 'L':[], 'M':[], 'N':[], 'O':[], 'P':[], 'Q':[], 'R':[], 'S':[], 'T':[], 'U':[], 'V':[], 'W':[], 'X':[], 'Y':[], 'Z':[]}

        // let letters = list.map(function(list){
        //     return list[0]
        // })
        // let uniqueList = [...new Set(letters)]
        // setNumOfLists(uniqueList.length)
        for(let x=0;x<list.length;x++){
            let check = `${list[x][0]}`.toUpperCase()
            if(check in accordions){
                accordions[check].push(list[x])
            }
            
        }
        setFrendList(accordions)
        list !== 0?setCards():<h2>No friends found</h2>
    }, [])
    
    return(
        <div>
        <h1>Welcome to the selector</h1>
        <div>
            {friendList.map}
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