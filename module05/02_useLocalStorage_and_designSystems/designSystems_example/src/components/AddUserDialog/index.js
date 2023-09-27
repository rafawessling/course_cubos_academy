import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddUserDialog({ open, handleClose }) {

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cadastrar usuário</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha todos os campos para cadastrar um novo usuário!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Age"
            type="number"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="City"
            type="text"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Cadastrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}