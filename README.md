# PokeInfo

PokeInfo é um projeto pessoal desenvolvido com foco em **organização de código, arquitetura de APIs e boas práticas de desenvolvimento**, simulando um cenário real de aplicação back-end integrada a um front-end independente.

## Visão Geral

O projeto consiste em uma **API REST desenvolvida com Node.js e Express**, responsável por fornecer informações básicas dos **151 primeiros Pokémon**, armazenadas em um banco de dados **PostgreSQL**.

Os dados foram coletados a partir da **PokeAPI**, passando por um processo de tratamento, padronização e persistência antes de serem disponibilizados para consumo pelo front-end.

O front-end, desenvolvido separadamente, consome a API para exibir as informações ao usuário, garantindo **separação de responsabilidades entre as camadas**.

## Funcionalidades

- Consulta de Pokémon via API
- Retorno de informações básicas (ex: nome, número, tipo, etc.)
- Integração entre back-end e front-end
- Estrutura modular visando fácil manutenção e escalabilidade

## Estrutura do Projeto

```

src
├─ controllers # Lógica de negócio
├─ routes # Definição das rotas da API
├─ middleware # Middlewares (validações, autenticação, etc.)
├─ app.js # Configuração da aplicação
└─ server.js # Inicialização do servidor

```

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **PostgreSQL**
- **Axios**
- **HTML, CSS e JavaScript**

## Banco de Dados

- Criação e configuração do banco PostgreSQL
- Modelagem das tabelas e colunas
- Persistência dos dados para consumo via API

## Próximas Melhorias

- CRUD completo para Pokémon (criação e atualização)
- Expansão das informações fornecidas pela API
- Melhorias de UI, UX e responsividade no front-end
- Implementação de autenticação

## Objetivo do Projeto

Consolidar conhecimentos em:
- APIs REST
- Organização e arquitetura de código
- Integração entre back-end e front-end
- Banco de dados relacional (PostgreSQL)

---

Desenvolvido por **Isaac Medeiros**
