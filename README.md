# desafiofullstack-backend-silasjedev

DesafioFullStack-kenzie
Este é o backend da aplicação Desafio fullStack– um site de agenda de clientes.


Para inciar este projeto, é necessário instalar as dependências. Portanto utilize o comando abaixo para instalar tais dependências:

````
yarn install
````
<br>

**Configure as variáveis de ambiente no seu .env**, passando as credenciais corretas para conectar em seu banco local


Com isso feito, para rodar sua aplicação, basta utilizar o comando
````
yarn dev
````

<br>


Endpoints
A API tem um total de 12 endpoints, sendo divididos em 3 grupos: CRUD do user, session (login), contact 
(Contatos)

Endpoints:

USERS
POST   /users - Criação de usuário
GET    /users/<id> - Lista um usuário específico
PATCH  /users/<id> - Atualiza um usuário específico
PATCH  /users/<id>/image - Atualiza uma imagem de usuário
DELETE /users/<id> - Realiza um soft delete no usuário

Rotas Admin:
GET    /users - Lista todos os usuários

SESSION
POST   /session - Gera o token de autenticação

CONTACTS
POST   /contacts - Criação de um contato
GET    /contacts - Lista todas os contatos
GET    /contacts/<id> - Lista um contato específico
PATCH  /contacts/<id> - Atualiza um contato
DELETE /contacts/<id> Realiza um soft delete no contato



