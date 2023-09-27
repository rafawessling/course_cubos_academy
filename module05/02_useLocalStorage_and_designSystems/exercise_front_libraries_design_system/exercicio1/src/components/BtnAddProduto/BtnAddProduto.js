import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './BtnAddProduto.css';

const BtnAddProduto = () => {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained" className="btn-add-produto">
                Adicionar Produto
            </Button>
        </Stack>
    );
};

export default BtnAddProduto;
