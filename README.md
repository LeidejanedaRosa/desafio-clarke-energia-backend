# Desafio Clarke Energia - Consumo de energia mensal


Aplicação para um serviço de mercado livre de energia sustentável, onde você pode encontrar um fornecedor que atende a sua demanda mensal de consumo.

| Vitrine.Dev         |                                                                       |
| ------------------- | --------------------------------------------------------------------- |
| :sparkles: Nome     | **Aplicação para um serviço de mercado livre de energia sustentável** |
| :label: Tecnologias | JavaScript, CSS, HTML, Node.js, Express, React                        |
| :rocket: Deploy     | https://desafio-clarke-energia-frontend.vercel.app/                   |
| :rocket: URL        | https://desafio-clarke-energia-backend-3ueh.vercel.app/               |

=======

## Detalhes do projeto

Este projeto contém uma amostra de um aplicativo que roda em express e javascript com uma instância axios.

A aplicação foi desenvolvida utilizando as seguintes tecnologias:

- HTML
- CSS
- JavaScript
- Node.js
- Express
- Axios
- React

### Como rodar o projeto localmente

1.  Verifique se o `express` e o `npm` estão instalados
2.  Copie `.env.example` para o arquivo `.env` e adicione os valores desejados
3.  Instale as dependências do projeto com: `npm i`
4.  Rode o projeto com: `npm run dev`
5.  Acesse o projeto utilizando `localhost:4000`

Neste ponto, você deve conseguir acessar a API usando postman, insomina ou curl

# Endpoints

`GET /fornecedores/:consumoMensalEnergia`

Este endpoint listará todos os fornecedores que podem atender a sua demanda de consumo de energia mensal

```
curl --request GET \
  --url https://desafio-clarke-energia-backend-3ueh.vercel.app/fornecedores/1000
```

#### Considerações finais

Este projeto foi desenvolvido como parte do processo seletivo proposto pela Clarke Energia. Se você tiver alguma dúvida ou sugestão, por favor, não hesite em entrar em contato através do email leidejanedarosa.81@gmail.com
