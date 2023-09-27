import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import ImagemProduto from '../../assets/produto.png';
import './CardProduto.css';

const CardProduto = () => {
    return (
        <Card className="container-card">
            <CardMedia component="img" alt="Product Image" image={ImagemProduto} />
            <CardContent>
                <Typography variant="h5" component="h2" className="nome-produto">
                    Nome do Produto
                </Typography>
                <Typography variant="body2" component="p" className="desc-produto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                </Typography>
                <section className="produto-quantidade">
                    <Typography variant="body2" component="p" className="unidades-produto">
                        3 unidades
                    </Typography>
                    <Typography variant="body2" component="p" className="preco-produto">
                        R$ 99,99
                    </Typography>
                </section>
            </CardContent>
        </Card>
    );
};

export default CardProduto;
