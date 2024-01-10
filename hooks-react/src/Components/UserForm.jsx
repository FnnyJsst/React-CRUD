export default function UserForm() {
    return (
        <div>
            <h2>Add users</h2>
            <form>
                <div className='form-group'>
                    <label>Name</label>
                    <input className='form-control form-control-lg' type='text' id='name' name='name'></input>
                </div>
                <div className='form-group'>
                    <label>Username</label>
                    <input className='form-control form-control-lg' type='text' id='username' name='username'></input>
                </div> 
                <br></br>
                    <button type="button" className="btn btn-primary">Add new user</button>
            </form>
        </div>
    )
}