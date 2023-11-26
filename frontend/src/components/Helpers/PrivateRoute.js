import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Spinner from '../Helpers/Spinner';
import WholePageSpinner from './WholePageSpinner';

const PrivateRoute = () => {
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/auth/requireSignIn', { withCredentials: true })
      .then(res => {
        console.log(res.data);
        if (res.data.message === "ok") {
          setOk(true);
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false); // Set loading to false regardless of success or failure
      });
  }, []);

  return (
    loading ? <WholePageSpinner /> :(ok ? <Outlet />: <Spinner/>)
  )
}

export default PrivateRoute