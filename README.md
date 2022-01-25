![logo](https://raw.githubusercontent.com/pleonardodp12/churras/b9884670fde097d0357b84db5f2d0dc9c27656e2/src/assets/icon-churras.svg)


💻 [Acesse o link do projeto hospedado na vercel][projectvercel]
## 📄 Sobre

Churras - é uma agenda de churrasco, onde os colaboradores da empresa podem fazer o login, cadastro, criar eventos de churrasco com preços sugeridos para quem bebe e quem não bebe, adicionar membros e fazer marcações com quem já deixou a colaboração paga!

Para fazer o projeto foi desenvolvido uma pequena api para suprir as necessidades do front utilizando express e mongodb e está hospedada no heroku [Link do repositório][apiLink]


## 🛠 Principais Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [React][reactjs]
- [TypeScript][typescript]
- [React-toastify][react-toastify]
- [Phosphor-React][phosphor-react]
- [Styled components][styled-components]
- [Yup][yup]
- [Formik][formik]


### 🧭 Rodando o projeto

OBS: Para rodar o projeto é necessário criar um arquivo .env.local na raiz do projeto e adicionar a variável: REACT_APP_API_URL

```bash
# Clone este repositório
$ git clone https://github.com/pleonardodp12/churras

# Acesse a pasta do projeto no seu terminal/cmd
$ cd churras

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```


[typescript]: https://www.typescriptlang.org/
[reactjs]: https://reactjs.org
[yarn]: https://yarnpkg.com/
[react-toastify]: https://fkhadra.github.io/react-toastify/introduction
[phosphor-react]: https://phosphoricons.com/
[styled-components]: https://styled-components.com/docs/api
[yup]: https://github.com/jquense/yup
[formik]: https://formik.org/docs/overview

[apiLink]: https://github.com/pleonardodp12/churras-backend
[projectvercel]: [https://churras-trinca.vercel.app/]
