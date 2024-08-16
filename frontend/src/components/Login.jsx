import {useState} from 'react'
import { useNavigate,NavLink } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/login', formData)
            .then(response => {
                alert(response.data.message);
                navigate('/home');
            })
            .catch(error => {
                alert('Login failed');
            });
    };

    return (
    
        <div className='d-flex justify-content-center align-items-center vh-100'>
           <div>
            <form onSubmit={handleSubmit}>
                <div className=''>
                <label className=''>Email</label>
                <input 
                    type="email"
                    name='email'
                    placeholder="Email"
                    value={formData.email}
                    className='mb-3 form-control'
                    onChange={handleChange}
                    required
                />
                </div>
                <div>
                <label>Password</label>
                <input
                    type="password"
                    name='password'
                    placeholder="Password"
                    value={formData.password}
                    className='form-control mb-3'
                    onChange={handleChange}
                    required 
                />
                </div>
                <button  className='btn btn-primary w-100' type="submit">Login</button>
                <p>You agree to our Terms and condition</p>
                <NavLink to='/' className='btn btn-default w-100' type="submit">Create Account</NavLink>
            </form>
            </div>
            
        </div>
    );
}


export default Login