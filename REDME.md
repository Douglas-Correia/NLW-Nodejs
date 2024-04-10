AULA 01: Criação da api, criando schema prisma e tabelas do banco, criando um evento usando método POST utilizando req.body com validação do zod.
Métodos HTTP: GET, POST, PUT, DELETE PATCH, HEAD, OPTIONS, ....
Corpo da requisição (Request: Body)
Parâmetros de busca (Search Params/ Query Params)
Parâmetros de rota (Identificação de recursos)
Cabeçalhos (Headers) => Contexto da requisição

Bancos: Driver nativo / Query builders /ORMs

ORMs utilizado: prisma
npx prisma migrates dev; Esse comando cria o banco SQlite com o nome Migrates
npx prisma studio você pode visualizar o banco no navegador.

AULA 02: 
Status code:
200 => Sucesso.
300 => Redirecionamento.
400 => Erro do cliente (Erro em alguma informação enviada por quem está fazendo a chamada p/ API)
500 => Erro do servidor (Um erro que está acontecendo INDEPENDENTE do que está sendo enviado p/servidor.
