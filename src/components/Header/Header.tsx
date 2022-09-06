import { Typography } from "@mui/material";
import { MenuTwoTone, Search } from '@mui/icons-material';
import './styles.css';

const Header: React.FC = () => {
  return (
    <header>
      <MenuTwoTone className="menuButton" width={31} height={31} />
      <Typography variant='body1' className="title">Transfer Manager</Typography>
      <Search className="menuButton" width={31} height={31} />
    </header>
  );
}

export default Header;