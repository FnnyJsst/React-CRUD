import { useState } from 'react'
import UserTable from './Components/UserTable';
import UserForm from './Components/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <>
      <div className='container'>
        <h1>CRUD App with Hooks</h1>
        <div className="row">
          <div className="col-md-6">
            <UserForm />
          </div>
          <div className="col-md-6">
            <UserTable />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
