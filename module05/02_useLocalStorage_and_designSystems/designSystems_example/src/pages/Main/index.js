import './styles.css';
import CustomButton from '../../components/CustomButton';
import Button from '@mui/material/Button';
import CustomCard from '../../components/CustomCard';
import CustomTable from '../../components/CustomTable';
import CustomAutoComplete from '../../components/CustomAutoComplete';
// import CustomStepper from '../../components/CustomStepper';
import AddUserDialog from '../../components/AddUserDialog';
import { useState } from 'react';
import Loading from '../../components/Loading';

function Main() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <div className="container-main">
            <CustomCard />
            <CustomTable />
            <CustomAutoComplete />
            {/* <CustomStepper /> */}
            <Loading />
            <Button variant="contained" onClick={handleClickOpen}>
                Cadastrar usuário
            </Button>
            <AddUserDialog open={open} handleClose={handleClose} />
            <CustomButton />
        </div>
    );
}

export default Main;
