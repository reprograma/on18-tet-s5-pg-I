# Projeto Guiado I - Aprimorando os conhecimentos intródutos de Lógica de Programação 📓  

## Livraria 📚	

Criaremos um sistema com os seguintes de busca 
  
### Requisitos de negócio:
  - Adicionar novo livro com os campos: nome, categoria, páginas, recomendação e se já leu ou não;
  - Precisamos que o sistema consiga filtrar por categoria, lista de livros que ainda não leu;
  - O filtro deve ser realizado por meio de perguntas (_exemplo abaixo_);

![image](https://media.giphy.com/media/28jwwTNDkRl4pINd7c/giphy.gif)


### Instruções e Tecnologias: 

### `Como criar o projeto` 
Siga os passos abaixo:

| Passo | Comando/informação       |
| --------- | ----------- |
| Inicie um projeto node | `npm init -y` |
| No package.json, crie o script start   | `"start": "node app.js"` |
| Instale as dependências   | `npm i readline-sync` |
| Crie o .gitignore     | `node_modules` |
|

### `Tecnologias`

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `npm` | Gerenciador de pacotes|
| `readline-sync` | Dependência para receber inputs no terminal|
| 
  
### `Arquitetura`

```
 📁 projeto-de-livros
   |- 📁 controllers
   |     |- 📄 buscarLivros.js
   |     |- 📄 listarRecomendados.js
   |     |- 📄 listarLivrosNaoLidos.js
   |     |- 📄 listarLivrosOrdenados.js
   |- 📁 node_modules
   |- 📄 app.js
   |- 📄 database.js
   |- 📄 .gitignore
   |- 📄 package.json  
   |- 📄 package-lock.json
```

### Requisitos técnicos: 
 - *buscarLivros*: Deverá ser possível buscar livros pela categoria;
 - *listarLivrosOrdenados*: Deverá retornar todos os livros ordenados de forma crescente por quantidade de páginas;
 - *listarRecomendados*: Deverá listar livros que já foram lidos e que são recomendados;
 - *listarLivrosNaoLidos*: Deverá listar livros que ainda não foram lidos


### Modelagem de dados:

* nome: string;
* categoria: string;
* paginas: number;
* recomenda: boolean;
* leu: boolean;


### Critérios de aceite: 

- Inicia o algoritmo escolhendo a forma de busca no menu.
- Caso a pessoa usuária escolha alguma opção inexistente deverá mostrar no console a string 'fim do algoritmo'.
- O comportamento esperado deve ser o pedido da entrada e a impressão das tabelas buscadas no console, conforme requisitos acima.
  
![image](https://media.giphy.com/media/28jwwTNDkRl4pINd7c/giphy.gif)


### - Inicialização do sistema:

  - Inicia o algoritmo escolhendo a forma de busca no menu.
  - Caso a pessoa usuária escolha alguma opção inexistente deverá mostrar no console a string 'fim do algoritmo'.
  - O comportamento esperado deve ser o pedido da entrada e a impressão das tabelas buscadas no console, conforme requisitos acima.


<p align="center">
Créditos da ideação do projeto e codificação:
@simaraconceicao :purple_heart:  
</p>
