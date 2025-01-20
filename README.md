# React.JS | Curso de React Router (v7)

## Objetivo

Criar e gerenciar rotas em uma aplicação React utilizando a biblioteca React Router, permitindo que você construa uma Single Page Applications (SPAs) com navegação dinâmica, onde diferentes componentes são renderizados com base na URL, sem a necessidade de recarregar a página inteira.

## Pré-requisitos

- Framework x Biblioteca
- Introdução ao React
- Componentes, propriedades e estados
- Introdução aos hooks
- Hook `useState`
- Hook `useEffect`

## Executando o projeto

Instale as dependências do projeto

```
yarn
```

Execute o projeto em um servidor de desenvolvimento

```
yarn dev
```

## Introdução ao React Router

O **React Router** é uma biblioteca popular para a criação de rotas em aplicações React. Ele permite que você construa Single Page Applications (SPAs) com navegação dinâmica, onde diferentes componentes são renderizados com base na URL, sem a necessidade de recarregar a página inteira.

A biblioteca utiliza o conceito de **roteamento baseado em componentes**, ou seja, você define rotas através de componentes específicos que o React Router oferece para importarmos e usarmos nos nossos projetos. [Clique aqui](https://reactrouter.com/start/library/installation) para acessar a documentação da biblioteca.

Atualmente, o React Router encontra-se na versão 7, compatível com as versões 18 e 19 do React.

## Formas de se utilizar o React Router

O React Router disponibiliza duas maneiras de utilizá-lo, que são:

- [Como um framework React](https://reactrouter.com/start/framework/installation)
- [Como uma biblioteca adicionada ao seu projeto React](https://reactrouter.com/start/library/installation)

Neste curso iremos utilizar o React Router como uma biblioteca, instalando-a em um projeto com React 18 criado com Vite.

## Instalação do React Router como uma biblioteca

[Installation](https://reactrouter.com/start/library/installation#installation)

Para fazer o uso do React Router v7, é necessário que seu projeto tenha esses requisitos mínimos:

- `node@20`
- `react@18`
- `react-dom@18`

Você pode começar com um template React do Vite e escolher "React", caso contrário, inicialize sua aplicação como preferir.

```bash
npx create-vite@latest
```

Em seguida, instale o React Router a partir do seu gerenciador de pacotes escolhido. Neste caso, usaremos o `yarn`:

```bash
yarn add react-router
```

Por fim, renderize um `<BrowserRouter>` ao redor do seu componente `App`:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

> O `BrowserRouter` é um componente que envolve toda a aplicação e habilita o uso do histórico de navegação usando a API do History do navegador.

## Roteamento

Rotas, no contexto da web e do React Router, são caminhos (URLs) que determinam quais componentes ou páginas da aplicação serão exibidos ao usuário. Elas permitem a navegação entre diferentes partes do aplicativo sem recarregar a página inteira, criando uma experiência mais fluida em aplicações de página única (SPA).

> Um **SPA (Single Page Application)**, ou Aplicação de Página Única, é um tipo de site ou aplicação web que carrega uma única página HTML e atualiza o conteúdo de forma dinâmica à medida que o usuário navega, sem precisar recarregar a página inteira. Isso torna a navegação mais rápida e fluida, pois apenas os dados necessários são carregados em segundo plano.

</aside>

### Configurando rotas

Para configurar rotas no React Router, iremos importar dois componentes da biblioteca:

- `<Routes>` contêiner para definir um conjunto de rotas.
- `<Route>` define uma rota e qual componente deve ser renderizado para uma URL específica.

Esses componentes serão responsáveis por “conectar” a URL com os componentes da nossa aplicação.

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/Home";
import CouponsPage from "./pages/Coupons";
import MessagesPage from "./pages/Messages";
import NotificationsPage from "./pages/Notifications";
import SettingsPage from "./pages/Settings";
import DashboardPage from "./pages/Dashboard";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coupons" element={<CouponsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
```

> Você pode colocar os valores da propriedade `path` com ou sem `/`

Para uma configuração mais complexa de rotas para uma aplicação maior, teremos algo semelhante ao código abaixo:

```tsx
<Routes>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />

  <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route>

  <Route path="concerts">
    <Route index element={<ConcertsHome />} />
    <Route path=":city" element={<City />} />
    <Route path="trending" element={<Trending />} />
  </Route>
</Routes>
```
