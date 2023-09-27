import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

export const BootstrapButton = styled(Button)({
  height: '58px',
  width: '300px',
  '&:hover': {
    opacity: 0.3
  }
});

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));