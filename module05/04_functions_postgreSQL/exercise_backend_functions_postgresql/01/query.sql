SELECT SUM(estoque) AS soma_estoque FROM farmacia;

SELECT MIN(idade) AS menor_idade FROM usuarios;

SELECT MAX(idade) AS maior_idade FROM usuarios;

SELECT ROUND(AVG(idade)) AS idade_media FROM usuarios;

SELECT SUM(ESTOQUE) AS estoque_blue_black FROM farmacia WHERE categoria = 'blue' OR categoria = 'black';

SELECT categoria, SUM(estoque) AS soma_estoque FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria;

SELECT SUM(estoque) AS estoque_sem_categoria FROM farmacia WHERE categoria IS NULL GROUP BY categoria;

SELECT COUNT(id) AS medicamentos_sem_categoria FROM farmacia WHERE categoria IS NULL;

SELECT CONCAT(id, ' - ', medicamento, ' (', COALESCE(categoria, 'sem categoria'), ')') AS medicamento_e_categoria FROM farmacia;

SELECT CONCAT(medicamento, ' (', categoria, ')') AS medicamento_e_categoria FROM farmacia WHERE categoria IS NOT NULL;

SELECT nome, idade, CAST(cadastro as date) AS data_cadastro FROM usuarios WHERE EXTRACT(YEAR FROM CAST(cadastro as date)) = 2020;

SELECT nome, idade, email,  TO_CHAR(AGE(CAST(cadastro AS TIMESTAMP)), '{"years": YY, "months": MM, "days": DD, "hours": HH24, "minutes": MI, "seconds": SS}') AS tempo_cadastro FROM usuarios WHERE idade < 18;

SELECT nome, idade, email,  TO_CHAR(AGE(CAST(cadastro AS TIMESTAMP)), '{"years": YY, "months": MM, "days": DD}') AS tempo_cadastro FROM usuarios WHERE idade >= 60;

SELECT categoria, COUNT(id) AS quantidade_medicamentos_por_categoria FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria;

SELECT idade, COUNT(id) AS quantidade_usuarios FROM usuarios WHERE idade <= 18 GROUP BY idade;

SELECT categoria, SUM(estoque) AS soma_estoque AS "somaEstoque" FROM farmacia GROUP BY categoria;