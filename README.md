# site PyjamasConf:

## ambiente local:

1. clonar este repo: `git clone git@github.com:pyjamasconf/pyjamas.live.git`
2. entrar no repo: `cd pyjamas.live`
3. servir localmente: `./zola serve`
4. acessar: [http://localhost:1111/](http://localhost:1111/)

## criando conteúdo:

1. criar um arquivo markdown (`novo-post.md`) dentro da pasta `content/`
2. as primeiras linhas tem que ter `title` e opcionalmente `date` (sem isso não vai aparecer listado na homepage)

Exemplo:

```
+++
title = "titulo do novo post"
date = 2019-11-19
draft = false
+++

Conteúdo do post aqui ....

```

## enviando conteúdo para o site online:

1. comitar os arquivos de `content/` que tenham mudado
2. abrir um pull request
3. esperar aprovação


## mais informação:

- https://www.getzola.org/
- https://codeshow.com.br/criando-seu-blog-com-zola-e-hospedando-de-graca-na-netlify/
