import React, { useState } from 'react';

const LoginScreen = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const handleusernameChange = (event) =>{
        setUsername(event.target.value)
    }

    const handlepasswordChange = (event) => {
        setPassword(event.target.value)
    }

    return(
        <div>
            <div>
                <h3>Login to the application</h3>
            </div>
            <div>
                <form>
                    <div>
                        username <input type='text' value={username} onChange={handleusernameChange}/>
                    </div>
                    <br></br>
                    <div>
                        password <input type='password' value={password} onChange={handlepasswordChange}/>
                    </div>
                    <br></br>
                    <div>
                        <button type='submit'>Login </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen;