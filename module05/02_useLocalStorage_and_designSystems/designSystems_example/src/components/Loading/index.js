import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Loading() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button
        onClick={handleToggle}
        className="btn-red"
      >
        Show backdrop
      </Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
        transitionDuration={1000}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}