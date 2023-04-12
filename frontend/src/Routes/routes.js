import Home from '../Pages/Home/Home'
import Users from '../Pages/Users/updateUser'
import FindUsers from '../Pages/Users/findUsers'
import CreateUser from '../Pages/Users/newUser'
import UpdateUser from '../Pages/Users/updateUser'

import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function AppRouter(){
    
    return(
        <Router>
            <Routes>
                <Route path="/" index element={<Home/>}/>
                <Route path="/updateUser" index element={<UpdateUser/>}/>
                <Route path="/createUser" index element={<CreateUser/>}/>
                <Route path="/findUsers" index element={<FindUsers/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;