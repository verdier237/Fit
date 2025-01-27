import React , {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useHistory} from 'react-router-dom/cjs/react-router-dom'
import fitLogo from '../assets/2iwywt7GzguqQgGtD5yn4EhXpQt.svg'
const Register = () => {
    const [email, setEmail] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    const [pwd, setPwd] = useState('');
    const [cpwd, setCpwd] = useState('');   

    const [error, setError] = useState();
    const [errorType, setErrorType] = useState('');

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangeFname = (e) => {
        setFname(e.target.value)
    }
    const onChangeLname = (e) => {
        setLname(e.target.value)
    }
    const onChangeSex = (e) => {
        console.log(sex);
        setSex(e.target.value)
    }
    const onChangeAge = (e) => {
        setAge(e.target.value)
    }
    const onChangePwd = (e) => {
        setPwd(e.target.value)
    }
    const onChangeCpwd = (e) => {
        setCpwd(e.target.value)
    }
    const isEmpty = (some) => {
        if (some === "" || some === undefined || some === null) {
            return true;
        }
        return false;
    }
    const isEmail = (email)=>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    const navigate = useHistory();
    const onSubmit = async () => {
        const url = "http://localhost:5003/auth/register";
        if (pwd !== cpwd) {
            setError(true);
            setErrorType("Password doesn't match");
            return;
        }
        if (isEmpty(email) || isEmpty(pwd) || isEmpty(fname) || isEmpty(lname) || isEmpty(age) || isEmpty(sex)) {
            setError(true);
            setErrorType("All field are required");
            return;
        }
        if(!isEmail(email)){
            setError(true);
            setErrorType("Email syntax is incorrect , use name@email.com");
            return;
        }
        const body = {
            email : email,
            pwd: pwd,
            firstname : fname,
            lastname : lname,
            age : age,
            sex : sex,
        }
        try {
            const response = await axios.post(url, body);
            if (response.data.status) {
                console.log(response.data);
                navigate.push('/login');
                // go back to connection
            } else {
                setError(true);
                setErrorType(response.data.msg);
            }        
        } catch (error) {
            setError(true)
            setErrorType(error.message || "An error occurred")
        }

    }
    useEffect(()=>{
        setSex("M")
    },[])

  return (
<section class="bg-gray-50 dark:bg-gray-900">

  <div class="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">
      <Link class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="mr-3 h-12 sm:h-16 w-12 sm:w-16" src={fitLogo} alt="logo" />
          Fit   
      </Link>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              <div class="space-y-2 md:space-y-2" action="#">
                  <form>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" required="" value={email} onChange={(e)=>onChangeEmail(e)}/>
                  </form>
                  <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="verdier" required value={fname} onChange={(e)=>onChangeFname(e)}/>
                    </div>
                    <div>
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dongmeza" required  value={lname} onChange={(e)=>onChangeLname(e)}/>
                    </div>
                </div>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sexe</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={sex} onChange={(e)=>onChangeSex(e)}>
                        <option selected value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                <div class="w-1/2">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age:</label>
                    <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="25" required value={age} onChange={(e)=>onChangeAge(e)}/>
                </div>


                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={pwd} onChange={(e)=>onChangePwd(e)}/>
                  </div>
                  <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={cpwd} onChange={(e)=>onChangeCpwd(e)}/>
                  </div>
                  {error &&
                        <div class="flex items-center p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                            </svg>
                                    <span class="sr-only">Info</span>
                            <div>
                                <span class="font-medium">Alert</span> {errorType}
                            </div>
                        </div>
                        //for my errors
                    }
                  <button type="submit" class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={onSubmit}>Create an account</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <Link class="font-medium text-primary-600 hover:underline dark:text-primary-500" to='/login'>Login here</Link>
                  </p>
              </div>
          </div>
      </div>
  </div>
</section>
  )
}

export default Register