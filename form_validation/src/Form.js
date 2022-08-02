import React, { useEffect, useState } from 'react';
import './App.css';

const Form = () => {

    const initialValues = {
        username: "",
        email: "",
        mobile: "",
        country: "",
        city: "",
        state: "",
        message: "",
    }

    const [values, setValues] = useState(initialValues);
    const [formError, setFormError] = useState({});
    const [submit, setSubmit] = useState(false);

    const handleSubmit = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        // console.log({...values , [name]:value});
    }

    useEffect(() => {
        if (Object.keys(formError).length === 0 && submit) { }
    }, [formError])

    const onsubmit = (e) => {
        e.preventDefault();
        console.log([values]);
        setFormError(validate(values));
        setSubmit(true);
    }

    const validate = (values) => {
        const errors = {};
        const er = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!er.test(values.email)) {
            errors.email = "Please enter valid email"
        }
        if (!values.mobile) {
            errors.mobile = "Please enter your mobile number";
        }
        if (!values.country) {
            errors.country = "Please enter your country";
        }
        if (!values.state) {
            errors.state = "Please enter your state";
        }
        if (!values.city) {
            errors.city = "please enter your city";
        }
        return errors;
    }

    return (
        <>
            <div className='container'>
                {Object.keys(formError).length === 0 && submit ? (
                    <div className='ui message success'>Successfully Submitted</div>
                ) : (
                    <div></div>
                )}
                <form onSubmit={onsubmit}>
                    <h1>Registration Form</h1>
                    <div className='ui divider'></div>
                    <div className='ui form'>
                        <div className='field'>
                            <label>Username</label>
                            <input type='text' name='username' placeholder='enter your name' values={initialValues.username} onChange={handleSubmit} />
                        </div>
                        <p>{formError.username}</p>
                        <div className='field'>
                            <label>Email</label>
                            <input type='email' name='email' placeholder='enter your email' values={initialValues.email} onChange={handleSubmit} />
                        </div>
                        <p>{formError.email}</p>
                        <div className='field'>
                            <label>Mobile</label>
                            <input type='number' name='mobile' placeholder='enter your mobile number' maxLength={12} values={initialValues.mobile} onChange={handleSubmit} />
                        </div>
                        <p>{formError.mobile}</p>
                        <div className='field'>
                            <label>Country</label>
                            <input type='text' name='country' placeholder='enter your country' values={initialValues.country} onChange={handleSubmit} />
                        </div>
                        <p>{formError.country}</p>
                        <div className='field'>
                            <label>State</label>
                            <input type='text' name='state' placeholder='enter your state' values={initialValues.state} onChange={handleSubmit} />
                        </div>
                        <p>{formError.state}</p>
                        <div className='field'>
                            <label>City</label>
                            <input type='text' name='city' placeholder='enter your city' values={initialValues.city} onChange={handleSubmit} />
                        </div>
                        <p>{formError.city}</p>
                        <div className='field'>
                            <label>Message</label>
                            <textarea type='text' rows={8} cols={50} values={initialValues.message} onChange={handleSubmit}></textarea>
                        </div>
                        <button className='fluid ui button' id='btn'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;