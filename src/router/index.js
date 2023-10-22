import { Routes, Route } from 'react-router-dom'
import Dashboard from '../components/dashboard/View';
import Client from '../components/clients/View';
import CreateClient from '../components/clients/Create';



function MyRouter(){
    return(
       <Routes>
            <Route path='/' element={<Dashboard></Dashboard>}></Route>
            <Route path='/clients' element={<Client></Client>}></Route> 
            <Route path='/add-client' element={<CreateClient></CreateClient>}></Route> 
       </Routes>
    );
}

export default MyRouter;