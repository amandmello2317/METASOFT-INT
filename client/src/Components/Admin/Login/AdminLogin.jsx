import { Avatar, Button, Grid, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Port } from '../../../Port';
import { toast } from 'react-toastify';

const paperStyle = { padding: 20, width: 280, margin: '100px auto' };
const avatarStyle = { backgroundColor: 'green' };

export default function AdminLogin({setTrig,trig}) {

    // GETTING THE TOKEN FROM LOCALSTORAGE
    const auth = JSON.parse(localStorage.getItem("token"));
    const navigate = useNavigate();
    const [value, setValue] = useState({ email: '', password: '' });

    // ERROR HANDELING AND NOTIFYING
    const notifyError = (msg) => {
        toast.error(msg, { pauseOnHover: false });
    };

    const notifySuccess = (msg) => {
        toast.success(msg);
    };

    const notifyWarning = (msg) => {
        toast.warn(msg, { pauseOnHover: false, position: "top-center" });
    };

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    // SUBMITING THE LOGIN
    const handleSubmit = () => {
        if (!value.email || !value.password) {
            notifyError("Email and password are required.");
            return;
        }
        axios.post(`${Port}/api/admin/login`, value)
            .then((res) => {
                if (res.data.success === true) {
                    localStorage.setItem('token', JSON.stringify({ "admin": res.data.token }));
                    notifySuccess("Welcome Admin");
                    navigate("/admin");
                    setTrig(!trig)
                } else {
                    notifyWarning(res.data);
                }
            })
            .catch((err) => {
                console.log('Error: ' + err);
                notifyError("Some error occurred.");
            });
    };

    return (
        <>
            {!auth ? (
                <div>
                    <Grid>
                        <Paper elevation={10} style={paperStyle}>
                            <Grid align='center'>
                                <Avatar style={avatarStyle}> <LockOutlinedIcon /> </Avatar>
                                <h2>Admin LogIn</h2>
                            </Grid>
                            <TextField
                                label='Email'
                                placeholder='Email is:- admin@gmail.com'
                                fullWidth
                                required
                                sx={{ mt: 1 }}
                                name='email'
                                value={value.email}
                                onChange={handleChange}
                            />
                            <TextField
                                label='Password'
                                placeholder='Password is :- 123'
                                type='password'
                                fullWidth
                                required
                                sx={{ mt: 2 }}
                                name='password'
                                value={value.password}
                                onChange={handleChange}
                            />
                            <Button
                                color='primary'
                                variant='contained'
                                fullWidth
                                sx={{ mt: 2 }}
                                onClick={handleSubmit}
                            >
                                Sign In
                            </Button>
                        </Paper>
                    </Grid>
                </div>
            ) : (
                navigate("/admin")
            )
            }
        </>

    );
}
