# NodeJS + EJS: HTML inteligente

## Neste curso foi visto

* criar o próprio servidor local via NodeJS
* converter um arquivo HTML em arquivos .ejs
* organizar o ambiente para o servidor funcionar corretamente separando as páginas do layout
* aplicar algumas funcionalidades JavaScript dentro das páginas ESJ como objetos, funções, forEach

## Comandos npm

* ```npm init -y``` → para inicializar a configuração de uma aplicação Node automaticamente;

* ```npm install ejs``` → para instalar o módulo ejs e poder codar nesta linguagem de modulação;

* ```npm install express``` → para instalar o framework Express;
   * utilizado para integrar "view engines" para inserir dados nos templates
   * definir a porta a ser usada na conexão do servidor local
   * adicionar novos processos de requisição por meio de "middleware" em qualquer ponto da "fila" de requisições
   * gerenciar requisições

## Resumo dos passos para a criação de uma aplicação

1. criar a estrutura inicial da página dentro de um arquivo .html;
   ```HTML
    <!DOCTYPE html>
    <html lang="en">
      <head></head>
      <body>
        <header></header>
        <main></main>
        <footer></footer>
      </body>
    </html>
   ```
      **css utilizado foi via bootstrap*
2. após a estrutura ser criada e o conteúdo inicial inserido, transforma o .html em .ejs
3. serpara a estrutura de páginas (conteúdo) e os layouts (configurações globais das páginas, como head com a estilização, header, footer etc)
    - cria uma pasta padrão views para ser reconhecida pelo express
    - dentro da "views": 
      - cria uma pasta "/pages" para os arquivos de página
      - cria uma outra pasta "/layouts" para os arquivos de layout
    - insere cada parte dos layouts com tags ejs ```<%- include('../layout/arquivo'); %>```
    ```html
      <!DOCTYPE html>
      <html lang="pt-br">
        <%- include('../layout/head'); %>
        <body>
          <%- include('../layout/header'); %>
          <main>
            <!-- CONTEÚDO -->
          </main>
          <%- include('../layout/footer'); %>
        </body>
      </html>
    ```
4. criar o arquivo .js para inser as configurações do servidor, estabelecer as rotas para as paginas e as configurações adicionais; 
    ```JavaScript
      const express = require('express')
      const app = express()

      app.set('view engine', 'ejs')
        
      app.get('/', function (req, res) {
        const items = ["..."]

        const subtitle =
          'Uma linguagem de modelagem para criação de páginas HTML ultilizndo Javascript'

        res.render('pages/index', {
          qualities: items,
          subtitle: subtitle
        })
      })
      
      app.get('/sobre', function (req, res) {
        res.render('pages/about')
      })

      app.listen(8080)
      console.log('rodando')
    ```
5. roda no terminal o arquivo.js para poder abrir os aqruivos .ejs no navegador
   
    ```node server.js``` → o servidor passa a rodar as páginas em .ejs

## Conclusão

Com esta solução as páginas podem ser manipuladas de uma maneira mais inteligente mantendo um padrão de estrutura e podendo receber conteúdo direto do backend.