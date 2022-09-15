import Card from '@/components/Card/Card';
import Header from '@/components/Header/Header';
import { Fab } from '@mui/material';
import { Add } from '@mui/icons-material';

import { useNavigate } from "react-router-dom";

import './styles.css';

export const Home = () => {
  let navigate = useNavigate();

  return (
    <div className="container">
      <Header />
      <main>
        <Card />
        <Card />
        <Card />
      </main>
      <Fab
        sx={{ bgcolor: '#4ECB71', position: 'fixed', bottom: '20px', right: '20px' }}
      >
        <Add sx={{ color: '#FFFFFF' }} onClick={() => navigate('/new-register')} />
      </Fab>
    </div>
  )
}
