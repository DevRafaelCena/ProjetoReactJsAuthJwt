import { useState, useEffect } from 'react';

import api from '../api';
import history from '../../history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);
  
  async function handleLogin() {
    const { data: { token } } = await api.post('/authentication',{username:'adm',password:'123'});

    if(data!='error'){
      setAuthenticated(false);
    }else{
      setAuthenticated(true);
    }

    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    
    history.push('/Dashboard');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }
  
  return { authenticated, loading, handleLogin, handleLogout };
}