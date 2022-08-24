import React from 'react'
import './SignIn.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { UserSignIn } from '../../Service/userService'
const EmailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const PasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const SignIn = () => {
    const [regexobj, setRegexObj] = React.useState({EmailError: false, EmailHelperText:'', PasswordError:false, PasswordHelperText:''})
    const[SignInObj, setSignInObj] = React.useState({EmailID:'', Password:''})

    function takeEmail(event){
        setSignInObj({...SignInObj, EmailID:event.target.value})
        console.log(event.target.value);
    }
    function takePassword(event){
        setSignInObj({...SignInObj, Password: event.target.value})
        console.log(event.target.value);
    }
    function onSubmit(){
        let emailTest = EmailRegex.test(SignInObj.EmailID)
        let passwordTest = PasswordRegex.test(SignInObj.Password)
        console.log(emailTest);
        console.log(passwordTest);
        if(emailTest == true && passwordTest == false){
            setRegexObj(prevState => ({...prevState, EmailError:false, EmailHelperText:''}))

        }
        else if(emailTest == false && passwordTest == false){
            setRegexObj(prevState => ({...prevState, EmailError:true, EmailHelperText:'Enter Correct EmailID' }))

        
        }
        if(passwordTest == true){
            setRegexObj(prevState => ({...prevState, PasswordError:false, PasswordHelperText:''}))
        }
        else {
            setRegexObj(prevState => ({...prevState, PasswordError: true, PasswordHelperText: 'Enter Correct Password'}))
        }
        if (emailTest === true && passwordTest === true) {
            UserSignIn(SignInObj).then((response)=>{console.log(response); localStorage.setItem("token",response.data.data)}).catch((error)=>{console.log(error)});
          }
    }

  return (
    <div>
        <div className='box1'>
            <div className='box2'>
                <div className='box2sub1'>
                <img className='GoogleLogo' src='googlelogo.png' alt="Google"  width='120' ></img>   
                </div>
                <div className='box2sub2'>Sign In</div>
                <div className='box2sub3'>Use your Google Account</div>
                <div className='box2sub4'>
                    <TextField onChange={takeEmail} 
                               className='ebox' 
                               label="Email or Phone" 
                               variant="outlined" 
                               error={regexobj.EmailError}
                               helperText={regexobj.EmailHelperText}/>
                </div>
                <div className='box2sub5' style={{color:'blue'}}>Forget Email?</div>
                <div className='box2sub4'>
                    <TextField type="password"
                               onChange={takePassword} 
                               className='ebox' 
                               label="Password" 
                               variant="outlined" 
                               error={regexobj.PasswordError}
                               helperText={regexobj.PasswordHelperText}/>
                </div>
                <div className='box2sub5' style={{color:'blue'}}>Forgot Password</div>
                <div className='box2sub6'>Not your computer? Use Guest mode to sign in privately.</div>
                <div className='box2sub7'>Learn more</div>
                <div className='box2sub8'>
                    <a className='account' style={{color:'blue', fontSize:'100%'}}>Create account</a>
                    <Button onClick={onSubmit} variant="contained">Next</Button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default SignIn

