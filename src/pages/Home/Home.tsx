import Card from '@/components/Card/Card';
import Header from '@/components/Header/Header';
import { Fab } from '@mui/material';
import { Add } from '@mui/icons-material';

import './styles.css';

export const Home = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
      <Fab
        sx={{ bgcolor: '#4ECB71', position: 'fixed', bottom: '20px', right: '20px' }}
      >
        <Add sx={{ color: '#FFFFFF' }} />
      </Fab>
    </div>
  )
}
