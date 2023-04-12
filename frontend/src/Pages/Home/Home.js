import './home.css'
import {useState, useEffect} from 'react'

function Home(){
    
    
    return(
        <>
        <div >
            <div class='container'>
                <div class='row'>
                    <form>
                        <h1>Restaurant Decision Maker</h1>
                        <h4>Select who will be attending Dinner</h4>
                        <p>Decisions will be made by users that are checked</p>
                        <div>
                            <div class="custom-control custom-checkbox custom-control-inline"></div>
                            <ol>
                                <li>
                                    <input type="checkbox" name='result'/>
                                    <label>person 1</label>
                                </li>
                                <li>
                                    <input type="checkbox" name='result'/>
                                    <label>person 2</label>
                                </li>
                                <li>
                                    <input type="checkbox" name='result'/>
                                    <label>person 3</label>
                                </li>
                                <li>
                                    <input type="checkbox" name='result'/>
                                    <label>person 4</label>
                                </li>
                                
                            </ol>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}


export default Home;