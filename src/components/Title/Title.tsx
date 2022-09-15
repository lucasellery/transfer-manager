import { Typography } from "@material-ui/core";
import './title.css';

interface Props {
  title: string;
  hasCentered?: boolean;
  marginBottom?: number;
}

const Title: React.FC<Props> = ({ title, hasCentered, marginBottom }) => {
  return (
    <Typography
      variant="h4"
      style={{ textAlign: hasCentered ? "center" : undefined, marginBottom }}
      className="title"
    >
      {title}
    </Typography>);
}

export default Title;
