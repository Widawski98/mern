import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { signin } from '../actions/userAction';
import {useDispatch, useSelector} from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

 export default function SignInScreen(props) {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const dispatch  = useDispatch();

    const redirect = props.location.search? props.location.search.split('=')[1]:
    '/';
 const userSignin = useSelector((state) => state.userSignin);
  const { userInfo,loading, error  } = userSignin;

    const submitHandler = (e) => {
        e.preventDefault();
      dispatch(signin(email, password));
    }
    useEffect(()=>{
      if(userInfo){
        props.history.push(redirect);
      }
    },[props.history, redirect, userInfo]);
    return (
        <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
                {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Wpisz email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Wpisz hasło"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            Don't have accout? <Link to="/register">Create account here!</Link>
          </div>
        </div>
      </form>
    </div>
    )
}

 