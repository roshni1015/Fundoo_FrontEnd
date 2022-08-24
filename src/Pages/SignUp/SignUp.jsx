import React from "react";
import './SignUp.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { UserSignUp } from "../../Service/userService";
const NameRegex = /^[A-Z]{1}[a-z]{2,}$/
const EmailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const PasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/

const Signup = () => {
    const [regexObj, setRegexObj] = React.useState({ NameError: false, NameHelperText: '', EmailError: false, EmailHelperText: '', PasswordError: false, PasswordHelperText: '' })
    const [SignUpObj, setSignUpObj] = React.useState({ FirstName: '', LastName: '', EmailID: '', Password: '' })
    function takeFirstName(event) {
        setSignUpObj({ ...SignUpObj, FirstName: event.target.value })
        console.log(event.target.value);
    }
    function takeLastName(event) {
        setSignUpObj({ ...SignUpObj, LastName: event.target.value })
        console.log(event.target.value);
    }
    function takeEmail(event) {
        setSignUpObj({ ...SignUpObj, EmailID: event.target.value })
        console.log(event.target.value);
    }
    function takePassword(event) {
        setSignUpObj({ ...SignUpObj, Password: event.target.value })
        console.log(event.target.value);
    }

    function onSubmit() {
        let firstNameTest = NameRegex.test(SignUpObj.FirstName)
        let lastNameTest = NameRegex.test(SignUpObj.LastName)
        let emailTest = EmailRegex.test(SignUpObj.EmailID)
        let passwordTest = PasswordRegex.test(SignUpObj.Password)
        if (firstNameTest == true) {
            setRegexObj(prevState => ({ ...prevState, NameError: true, NameHelperText: '' }))
        }
        else {
            setRegexObj(prevState => ({ ...prevState, NameError: false, NameHelperText: 'Enter valid name' }))
        }

        if (lastNameTest == true) {
            setRegexObj(prevState => ({ ...prevState, NameError: false, NameHelperText: '' }))
        }
        else {
            setRegexObj(prevState => ({ ...prevState, NameError: true, NameHelperText: 'Enter valid name' }))
        }

        if (emailTest == true) {
            setRegexObj(prevState => ({ ...prevState, EmailError: false, EmailHelperText: '' }))
        }
        else if (emailTest == false) {
            setRegexObj(prevState => ({ ...prevState, EmailError: true, EmailHelperText: 'Enter valid email' }))
        }

        if (passwordTest == true) {
            setRegexObj(prevState => ({ ...prevState, PasswordError: false, PasswordHelperText: '' }))
        }
        else {
            setRegexObj(prevState => ({ ...prevState, PasswordError: true, PasswordHelperText: 'Enter valid password' }))
        }
        if (firstNameTest === true && lastNameTest === true && emailTest === true && passwordTest === true ) {
            UserSignUp(SignUpObj).then((res)=>{console.log(res)}).catch((error)=>{console.log(error)})
          }
    }
    return (<div>
        <div className="box">
            <div className="box1">
                <div className="box2">
                    <div className="box3">
                        <div className="box3sub1">
                        <img className='GoogleLogo' src='GoogleLogo.png' width='120'></img>
                        </div>
                        <div className="box3sub2">Create your Google Account</div>
                        <div className="box3sub6">
                        <TextField onChange={takeFirstName} 
                                   className="sub3" 
                                   label="First Name" 
                                   variant="outlined" 
                                   size="small" 
                                   error={regexObj.NameError} 
                                   helperText={regexObj.NameHelperText} />

                        <TextField onChange={takeLastName} 
                                   className="sub3" 
                                   label="Last Name" 
                                   variant="outlined" 
                                   size="small" 
                                   error={regexObj.NameError} 
                                   helperText={regexObj.NameHelperText} />
                        </div>
                        <div className="box3sub4">
                            <TextField onChange={takeEmail} 
                                       className="sub2" 
                                       label="Username" 
                                       variant="outlined" 
                                       size="small" 
                                       error={regexObj.EmailError} 
                                       helperText={regexObj.EmailHelperText} />
                                        
                        </div>
                        <div>
                        <label class='gmail'>@gmail.com</label>
                        </div>
                        <div className="box3sub5">You can use letter,numbers & periods</div>
                        <div className="box3sub5" style={{color:'blue', fontSize:'86%', fontWeight: 'bolder'}}>Use my current email address instead</div>
                        <div className="box3sub6">
                            <TextField  onChange={takePassword} 
                                        className="sub3" 
                                        label="Password" 
                                        variant="outlined" 
                                        size="small" 
                                        error={regexObj.PasswordError} 
                                        helperText={regexObj.PasswordHelperText} />

                            <TextField  onChange={takePassword} 
                                        className="sub3" 
                                        label="Confirm" 
                                        variant="outlined" 
                                        size="small" 
                                        error={regexObj.PasswordError} 
                                        helperText={regexObj.PasswordHelperText} />
                        </div>
                        <div className="box3sub7">Use 8 or more characters with a mix of letters, numbers & symbols</div>
                        <div className="box3sub8">
                            <input type="checkbox" id="password" />
                            <label for="password">Show password</label><br />
                        </div>
                        <div className="box3sub9">
                            <a  className="account" style={{ color: 'blue',fontWeight: 'bold' }}>Sign in instead</a>
                            <Button onClick={onSubmit} variant="contained">Next</Button>
                        </div>
                    </div>
                </div>
                <div className="box4">
                    <div className="box4sub1">
                        <div className="box5">
                            <img src="account.svg" alt="" width="260" height="250" className="image1" />
                        </div>
                        <div className="box6">One account. All of Google working for you.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Signup;
