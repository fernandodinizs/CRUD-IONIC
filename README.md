# SISTEMA DE CONTROLE DE ESTOQUE (CRUD) COM IONIC E ANGULAR

![Ionic](https://img.shields.io/badge/Ionic-%233880FF.svg?style=for-the-badge&logo=Ionic&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![SQLite](https://img.shields.io/badge/SQLite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

---

## Sobre o Projeto

Este projeto é um sistema de controle de estoque de frutas desenvolvido com o framework Ionic e Angular no front-end, integrado a uma API local construída em Node.js com Express e persistência de dados em um banco SQLite3.

Por ser um projeto voltado exclusivamente para fins acadêmicos e prática pessoal, ele não conta com nenhuma licença comercial restritiva, sendo livre para uso, estudo e modificação de qualquer pessoa interessada.

A proposta é treinar conceitos fundamentais do ecossistema Angular e Ionic, como criação de serviços de comunicação HTTP (HttpClient), consumo de APIs locais, roteamento, controle de modais e componentes interativos do Ionic, e persistência em banco de dados relacional leve.

---

## O que o Sistema Faz?

A aplicação fornece uma interface móvel e web intuitiva para gerenciamento completo do estoque de frutas (CRUD).

O sistema gerencia as seguintes funcionalidades:

* **Listagem do Estoque (R)**: Exibição detalhada das frutas cadastradas, incluindo ID, nome, preço e quantidade.
* **Cadastro de Novas Frutas (C)**: Modal interativo para adicionar frutas informando nome, preço e quantidade.
* **Edição de Frutas (U)**: Modal para atualização de valores das frutas já cadastradas (alteração de nome, preço ou quantidade).
* **Exclusão de Frutas (D)**: Remoção direta do estoque com atualização dinâmica na tela.
* **Tratamento de Conectividade**: Notificação amigável na tela inicial caso a API de banco de dados esteja offline.

---

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando:

* **Front-end**:
  * **Ionic Framework v8+** (Interface responsiva e componentes interativos)
  * **Angular v20+** (Framework para SPA, injeção de dependências e reatividade)
  * **TypeScript** (Tipagem estática e organização estruturada do código)
  * **RxJS & HttpClient** (Manipulação de requisições assíncronas para a API)
* **Back-end & Banco de Dados**:
  * **Node.js** com **Express** (API REST local para intermediar o banco)
  * **SQLite3** (Banco de dados relacional local armazenado em arquivo `.db`)
  * **CORS** (Middleware para habilitar chamadas de origens distintas do Ionic)

---

## Conceitos de Desenvolvimento Aplicados

O projeto exercita conceitos práticos fundamentais para o desenvolvimento web moderno:

* **Injeção de Dependência & Serviços Globais**: Criação do serviço `CarregarBanco` com `@Injectable({ providedIn: 'root' })`, centralizando toda a comunicação com a API em um único ponto reutilizável.
* **Consumo de APIs REST**: Uso de métodos HTTP (`GET`, `POST`, `PUT`, `DELETE`) mapeados diretamente nos endpoints correspondentes da API Express.
* **Reatividade com Observables**: Controle de fluxo assíncrono utilizando o padrão de projeto `Observable` do RxJS para obter dados e tratar respostas de erro de maneira limpa.
* **Comunicação por Modais no Ionic**: Abertura e fechamento condicional de modais para adição e edição de dados, garantindo uma boa experiência de usuário sem recarregar a página.
* **Camada de API Independente**: Desacoplamento total entre o front-end e o banco de dados real. Se necessário, o SQLite pode ser substituído por outra persistência sem impacto no código Angular.

---

## Estrutura do Projeto

```text
CRUDAngular/
│
├── banco-de-dados/
│   ├── frutas.db             # Banco de dados SQLite local
│   ├── package.json          # Dependências do backend (Express, SQLite3, CORS)
│   ├── package-lock.json
│   ├── README.md             # Instruções rápidas do banco
│   └── server-api.js         # API Express conectando ao SQLite (porta 3005)
│
├── src/
│   ├── app/
│   │   ├── gerenciar-fruta/  # Página de Gerenciamento (Adição, Edição e Exclusão)
│   │   │   ├── gerenciar-fruta-routing.module.ts
│   │   │   ├── gerenciar-fruta.module.ts
│   │   │   ├── gerenciar-fruta.page.html
│   │   │   ├── gerenciar-fruta.page.scss
│   │   │   ├── gerenciar-fruta.page.spec.ts
│   │   │   └── gerenciar-fruta.page.ts
│   │   │
│   │   ├── home/             # Página Inicial (Painel do Estoque)
│   │   │   ├── home-routing.module.ts
│   │   │   ├── home.module.ts
│   │   │   ├── home.page.html
│   │   │   ├── home.page.scss
│   │   │   ├── home.page.spec.ts
│   │   │   └── home.page.ts
│   │   │
│   │   ├── services/         # Serviço Angular de comunicação com a API
│   │   │   ├── carregar-banco.spec.ts
│   │   │   └── carregar-banco.ts
│   │   │
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   │
│   ├── assets/               # Recursos estáticos
│   ├── environments/         # Configurações de ambiente
│   ├── theme/                # Variáveis de estilo global do Ionic
│   ├── global.scss           # CSS/Sass global
│   ├── index.html
│   └── main.ts
│
├── angular.json              # Configurações do Angular CLI
├── capacitor.config.ts       # Configurações do Capacitor para build mobile
├── ionic.config.json         # Configurações do Ionic CLI
├── package.json              # Dependências do front-end (Angular e Ionic)
└── tsconfig.json             # Configuração geral do compilador TypeScript
```

---

## Objetivo

Consolidar o aprendizado prático em desenvolvimento de aplicações CRUD com Ionic e Angular, integrando a interface do usuário a uma API REST funcional e banco de dados SQLite.

---

## Instruções de Instalação e Execução

### Pré-requisitos

* Node.js (versão 18 ou superior recomendada)
* npm (gerenciador de pacotes padrão do Node)

---

### 1. Clonar o Repositório

```bash
git clone https://github.com/fernandodinizs/CRUD-IONIC.git
cd CRUD-IONIC
```

---

### 2. Instalar as Dependências

Como as pastas `node_modules` foram removidas para otimizar espaço, é necessário instalar as dependências em ambos os diretórios (Front-end e Back-end):

#### Front-end (Diretório Principal)
```bash
npm install
```

#### Back-end (Diretório `banco-de-dados`)
```bash
cd banco-de-dados
npm install
cd ..
```

---

### 3. Execução do Sistema

Para testar o CRUD, você precisará de dois terminais abertos executando simultaneamente:

#### Terminal 1: Iniciar o Banco de Dados (API Local)
No diretório raiz do projeto, execute o script do servidor:
```bash
node banco-de-dados/server-api.js
```
A API estará rodando em `http://localhost:3005`.

#### Terminal 2: Iniciar a Interface Front-end
No diretório raiz do projeto, execute o servidor de desenvolvimento do Angular/Ionic:
```bash
npm start
```
*(ou se você tiver o Ionic CLI instalado de forma global, pode usar `ionic serve`)*

A aplicação será aberta automaticamente em seu navegador padrão no endereço `http://localhost:8100`.

---

## Contribuição

Por se tratar de um projeto com fins puramente educacionais e de estudo individual, qualquer contribuição é bem-vinda para fins de aprendizado mútuo. Sinta-se livre para refatorar o código, adicionar novos recursos ou propor melhorias arquiteturais.
