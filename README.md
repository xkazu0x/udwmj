# udwmj

Aplicação web desenvolvida como projeto acadêmico para a unidade curricular **Usabilidade, Desenvolvimento Web, Mobile e Jogos**, da Universidade Anhembi Morumbi.

O projeto tem como objetivo reunir e organizar as atividades desenvolvidas durante a unidade curricular em um único ambiente web, permitindo sua visualização e navegação por meio de uma interface inspirada no formato de blogs.

## Sobre o projeto

O lastdayonearth é uma aplicação web que centraliza diferentes atividades e conteúdos desenvolvidos ao longo da disciplina.

A interface apresenta as atividades em formato de postagens, organizadas em uma página principal. Cada atividade pode ser acessada individualmente, permitindo visualizar e interagir com seu conteúdo.

A aplicação também possui telas de login e cadastro, além de uma seção destinada à apresentação de currículo.

## Funcionalidades

- **Login:** permite acessar a aplicação utilizando e-mail e senha.
- **Cadastro:** possibilita registrar novos usuários.
- **Posts:** apresenta publicações e conteúdos em uma lista organizada.
- **Atividades:** reúne os exercícios desenvolvidos durante a unidade curricular.
- **Visualização individual:** permite acessar cada atividade em uma página específica.
- **Currículo:** disponibiliza uma seção para apresentação de informações curriculares.
- **Responsividade:** adapta a organização da interface conforme a dimensão da tela.

## Tecnologias utilizadas

As seguintes tecnologias foram utilizadas no desenvolvimento:

| Tecnologia | Utilização |
|---|---|
| HTML5 | Estruturação das páginas |
| CSS3 | Estilização e responsividade |
| JavaScript | Implementação de funcionalidades |
| Node.js | Ambiente de execução JavaScript no servidor |
| Express.js | Gerenciamento de rotas e requisições HTTP |
| EJS | Renderização de páginas dinâmicas |

## Estrutura do projeto

```text
udwmj/
├── data/
│   ├── posts.json
│   └── tasks.json
│
├── public/
│   ├── css/
│   ├── images/
│   └── tasks/
│
├── views/
│   ├── pages/
│   ├── partials/
│   └── ...
│
├── tmp/
│   └── users.json
│
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

### Descrição dos diretórios

- `data/`: contém os arquivos JSON utilizados para armazenar as informações das postagens e atividades.
- `public/`: reúne os arquivos estáticos da aplicação, como folhas de estilo, imagens e páginas das atividades.
- `views/`: contém os templates EJS utilizados para renderizar as páginas da aplicação.
- `tmp/`: diretório criado durante a execução para armazenar os dados de cadastro dos usuários.
- `app.js`: arquivo principal responsável pela configuração do servidor e definição das rotas.
- `package.json`: contém as informações do projeto, dependências e scripts de execução.

## Como executar o projeto

### Pré-requisitos

Antes de iniciar, certifique-se de que possui instalado:

- [Node.js](https://nodejs.org/)
- npm (instalado junto com o Node.js)

### 1. Clonar o repositório

Abra um terminal e execute:

```bash
git clone https://github.com/xkazu0x/udwmj.git
```

### 2. Acessar o diretório

```bash
cd udwmj
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar a aplicação

Para iniciar o servidor, execute:

```bash
npm start
```

Para iniciar em modo de desenvolvimento, utilizando o Nodemon:

```bash
npm run dev
```

### 5. Acessar a aplicação

Após iniciar o servidor, abra o navegador e acesse:

```text
http://localhost:8080
```

## Rotas da aplicação

| Método | Rota | Descrição |
|---|---|---|
| GET | `/` | Exibe a tela de login |
| POST | `/` | Processa os dados de login |
| GET | `/signup` | Exibe a tela de cadastro |
| POST | `/signup` | Processa o cadastro de usuários |
| GET | `/posts` | Exibe a página de postagens |
| GET | `/tasks` | Exibe a lista de atividades |
| GET | `/tasks/:id` | Exibe uma atividade específica |
| GET | `/resume` | Exibe a página de currículo |

## Armazenamento de dados

As informações das postagens e atividades são organizadas em arquivos JSON localizados no diretório `data/`.

Os dados dos usuários cadastrados são armazenados localmente em `tmp/users.json`, arquivo criado automaticamente durante o primeiro cadastro.

**Observação:** este projeto possui finalidade acadêmica. O armazenamento atual de senhas é feito sem criptografia, portanto não deve ser utilizado com credenciais reais ou em um ambiente de produção.

## Objetivo acadêmico

O projeto foi desenvolvido com o propósito de aplicar, de maneira prática, os conhecimentos adquiridos durante a unidade curricular, especialmente os relacionados à estruturação de páginas web, estilização, programação JavaScript, usabilidade e responsividade.

A aplicação reúne diferentes exercícios em um único ambiente, facilitando sua organização, apresentação e consulta.
