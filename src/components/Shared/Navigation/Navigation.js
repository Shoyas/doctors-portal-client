import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            
            <nav class="navbar navbar-expand-lg navbar-light">
                <p>Name: {loggedInUser.name}</p>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link mr-5" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5" href="/">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5" href="/dashboard/appointment">Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5" href="/login">Login</a>
                        </li>
                        
                    </ul>
                    
                </div>
            </nav>
        </div>
    );
};

export default Navigation;