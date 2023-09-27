import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import './AddProduto.css';

const AddProduto = () => {
    return (
        <Box component="form" noValidate autoComplete="off" className="container-inputs">
            <TextField fullWidth variant="standard" id="nome-produto" label="Nome do produto" defaultValue=" " />

            <section className="preco-estoque-section">
                <TextField
                    className="add-preco-produto"
                    variant="standard"
                    label="Preço"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                    }}
                />

                <TextField
                    className="add-estoque-produto"
                    variant="standard"
                    label="Estoque"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Un</InputAdornment>,
                    }}
                />
            </section>

            <TextField fullWidth variant="standard" label="Descrição do produto" defaultValue=" " />

            <TextField fullWidth variant="standard" label="Imagem" defaultValue=" " />
        </Box>
    );
};

export default AddProduto;
