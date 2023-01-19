Arquivos do módulo inicial de Node + Typescript, da estrutura MVC aplicada.
Desenvolvido juntamente com a B7Web

### Pré-requisitos globais:
`npm i -g nodemon typescript ts-node`

### Instalação
`npm install`

### Configuração
passo 1: Crie um banco de dados com um nome "qualquer".
passo 2: Crie uma tabela para usuários com a estrutura abaixo:

        create table users(
        id int not null auto_increment primary key,
        name varchar(100) not null,
        age int not null default 18
        );

passo 3: Edite as variáveis globais no arquivo .env
    Insira oo nome do banco de dados e a senha conforme criado por você

passo opcional: Para alterar a instancia de conexão com o banco mysql ou postgres, 
altere HomeController.ts em controllers na linha 3 e 4, comentando uma e descomentando a outra.

### Para rodar o projeto
`npm run start-dev`
