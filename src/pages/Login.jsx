import React ,{useState} from 'react'
import { Link, useHistory} from 'react-router-dom/cjs/react-router-dom'
import axios from 'axios';
import fitLogo from '../assets/2iwywt7GzguqQgGtD5yn4EhXpQt.svg'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //basic variables for input
    const [error, setError] = useState();
    const [errorType, setErrorType] = useState('');
    //error variables (error-> true or false , errorType -> message )
    const navigate = useHistory();
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
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
    const onSubmit = async () => {
        const url = "http://localhost:5003/auth/login";
        if (isEmpty(email) || isEmpty(password)) {
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
            pwd: password
        }
        try {
            const response = await axios.post(url, body);
            if (response.data.status) {
                console.log(response.data.token);
                sessionStorage.setItem('token', response.data.token);
                navigate.push('/');
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
  return (
<section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <Link class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="mr-3 h-12 sm:h-16 w-12 sm:w-16" src={fitLogo} alt="logo"/>
          Fit  
      </Link>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <div class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" required="" value={email} onChange={(e) => onChangeEmail(e)}/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={password} onChange={(e) => onChangePassword(e)}/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <Link class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
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
                  <button type="submit" class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={onSubmit}>Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <Link class="font-medium text-primary-600 hover:underline dark:text-primary-500" to='/register'>Sign up</Link>
                  </p>
              </div>
          </div>
      </div>
  </div>
</section>
  )
}

export default Login