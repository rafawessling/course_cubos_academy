![](https://i.imgur.com/xG74tOh.png)

# Exercício Resolvido 1

Crie um Servidor HTTP utilizando o Express.js que possua duas rotas para listagem geral do array de carros abaixo e para encontrar um carro pelo seu identificador, respectivamente. A rota de listagem dos carros deve permitir filtrar carros pela marca e pela cor.

```javascript
[
    { id: 1, name: 'corola', brand: 'toyota', year: '2021', color: 'black' },
    { id: 2, name: 'uno', brand: 'fiat', year: '2010', color: 'blue' },
    { id: 3, name: 'celta', brand: 'chevrolet', year: '2011', color: 'silver' },
    { id: 4, name: 'ford ka', brand: 'ford', year: '2012', color: 'black' },
    { id: 5, name: 'ranger', brand: 'ford', year: '2014', color: 'white' },
    { id: 6, name: 'hilux', brand: 'toyota', year: '2015', color: 'silver' },
    { id: 7, name: 'argo', brand: 'fiat', year: '2021', color: 'white' },
    { id: 8, name: 'hb20', brand: 'hyundai', year: '2020', color: 'white' },
    { id: 9, name: 'creta', brand: 'hyundai', year: '2020', color: 'silver' },
    { id: 10, name: 'honda civic', brand: 'honda', year: '2019', color: 'black' },
];
```

# Exercício Resolvido 2

De acordo com o servidor HTTP implementado no exercício resolvido 1, implemente um intermediário (middleware) independente para validar se ao acessar qualquer rota, é informado a senha do sistema `cars123`. A senha deve ser informada como parametro de consulta (query params) em ambas as rotas.

```javascript
// exemplo
// http://localhost:3000/car?password=123
```
