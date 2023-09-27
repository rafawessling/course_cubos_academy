import React from 'react';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';

import './Success.css';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Success = () => {
    return (
        <Stack className="success-box">
            <Alert severity="success">Produto inserido com sucesso!</Alert>
        </Stack>
    );
};

export default Success;
