import { Typography, Box, Paper } from '@mui/material';
import './styles.css';

const Card: React.FC = () => {
  return (
    <Paper
      className="card-container"
      square
      elevation={4}
    >
      <Box className="info-container">
        <div className="client-info">
          <Typography sx={{
            
          }} className="client-name">Lucas Ellery</Typography>
          <Typography variant="caption" className="date">03/09/2022</Typography>
        </div>
        <Typography className="description">PIXzinho</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        direction: 'column',
        alignItems: 'flex-end'
      }}>
        <Typography className="amount">R$ 50.000,00</Typography>
      </Box>
    </Paper>
  )
}

export default Card;