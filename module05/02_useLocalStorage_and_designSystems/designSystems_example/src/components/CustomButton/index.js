import Stack from '@mui/material/Stack';
import { ColorButton, BootstrapButton } from './styles';
import './styles.css';
import { Button } from '@mui/material'

export default function CustomButton() {
  return (
    <Stack spacing={2} direction="row">
      <ColorButton variant="contained">Custom CSS</ColorButton>
      <BootstrapButton variant="contained" disableRipple>
        Bootstrap
      </BootstrapButton>
      <input
        type="text"
        placeholder='E-mail'
        className='input-email'
      />
      <Button className='btn-red'>
        Meu Botão
      </Button>
    </Stack>
  );
}