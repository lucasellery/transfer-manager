// react amd hooks
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// components
import Title from '@/components/Title/Title';
import { TextField, Button } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';

// styles
import './NewRegister.styles.css';

const CssTextField = styled(TextField)({
  width: '100%',
  fontFamily: 'Nunito',
  fontWeight: 600,
  fontSize: '16px',
  letterSpacing: '0.05em',

  '& label.Mui-focused': {
    color: '#00AC45',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#00AC45'
  },
  '& MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderBottomColor: '#00AC45',
    },
  },
});

interface FormProps {
  name: string;
  description: string;
  date: string;
  amount: string;
}

const NewRegister: React.FC = () => {
  let navigate = useNavigate();
  const [valueInput, setValueInput] = useState<FormProps>({
    name: '',
    description: '',
    date: '',
    amount: '',
  });

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const auxValues: any = { ...valueInput };
    auxValues[event.target.name] = event.target.value;

    setValueInput(auxValues);
  };

  const handleSubmit: React.FormEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(valueInput);
  }

  return (
    <div className="new-register-container">
      <Title title="Adicionar registro" hasCentered marginBottom={20} />

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CssTextField
              onChange={handleChangeValue}
              value={valueInput.name}
              name="name"
              id="standard-basic"
              label="Nome do destinatário" variant="standard" />
          </Grid>
          <Grid item xs={12}>
            <CssTextField
              onChange={handleChangeValue}
              value={valueInput.description}
              name="description"
              id="standard-basic"
              label="Descrição"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <CssTextField
              onChange={handleChangeValue}
              value={valueInput.date}
              name="date"
              id="standard-basic"
              label="Date"
              placeholder='DD/MM/AAAA' 
              variant="standard"/>
          </Grid>
          <Grid item xs={6}>
            <CssTextField
              onChange={handleChangeValue}
              value={valueInput.amount}
              name="amount"
              id="standard-basic"
              label="Valor"
              placeholder='R$ 0,00'
              variant="standard"
            />
          </Grid>
        </Grid>

        <Stack>
          <Button className="add-button" variant='contained' type="submit">Adicionar</Button>
          <Button className="cancel-button" color="secondary" variant='outlined' onClick={() => navigate('/')}>Cancelar</Button>
        </Stack>
      </form>
    </div>
  );
}

export default NewRegister;
