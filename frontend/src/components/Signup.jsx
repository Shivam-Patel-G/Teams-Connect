import {useState} from 'react'
import { useNavigate,NavLink } from 'react-router-dom';
import axios from 'axios';



function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/signup', formData)
            .then(response => {
                alert(response.data.message);
                navigate('/login');
            })
            .catch(error => {
                console.error('error=>' ,error)
                alert('Signup failed');
            });
    };

    return (
        
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    className='form-control mb-3 vw-80'
                    onChange={handleChange}
                    required
                />
                </div>

                <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email} 
                    className='form-control mb-3 '
                    onChange={handleChange}
                    required
                />
                </div>

                <div>
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    className='form-control mb-3'
                    onChange={handleChange}
                    required
                />
                </div>

                <button className='btn btn-success w-100' type="submit">Signup</button>
                <NavLink to='/login' className=''>Already have an account</NavLink>
            </form>
            </div>
            
        </div>
    );
}

export default Signup;