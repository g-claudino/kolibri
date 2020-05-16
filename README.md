# Marko Starter Demo
This repo demos the basic features of [`marko-starter`](https://github.com/marko-js/marko-starter).

## Instalar

```bash
npm install
```

## Starting the server

```bash
npm start
```

Start the server in production mode (minification enabled, etc.):

```bash
NODE_ENV=production npm start
```

## Build a static site
Build the project in production mode:

```bash
npm run build
```

By default, the generated static site will be placed in `dist/`.

## Feature Demos

### Live reload

Change a file and the server will restart and the browser will refresh.  Hot reload is enabled for certain files.

### Components

See example components and how they can be scoped to pages or the whole site.

### Routing

Learn to create routes and use route parameters.

### Layouts

Learn to create components that can be passed content and include that content in their own template.

### Styles and Images

Learn how to use styles within a component and how to use resources (like images) in a component.

## Rodando essa parada

### Para conseguir testar simultaneamente ao desenvolvimento

Estou supondo uso de um sistema Unix pro tutorial. Existem formas de simular
 isto em Windows [1].

Instale o node com alguma das opções em [2]. Tenho trabalhado com o Node 14,
mas o código deveria funcionar com Node 10 ou superior.

Clone o repositório git [3]. E entre na sua pasta:
`cd <pasta do repositorio>`

**Alternativa 1:** Rodando localmente durante o desenvolvimento

1. `npm i`
2. `npm start`

Para esta alternativa também recomendo o uso de NVM.
1. Instalar NVM [4]
2. `nvm i 14`
3. `nvm use 14`
4. `npm i`
5. `npm start`

**Alternativa 2:** Rodando com Docker. (**TODO:** melhorar `Dockerfile`)
1. Instalar Docker [5]
2. `chmod +x run.sh`
3. `./run.sh`

Se você tiver problemas ao rodar com Docker tente copiar as linhas do arquivo
`run.sh` diretamente no seu terminal conforme o sistema.

**Nota:** `texto assim deve ser rodado no terminal ou é nome de arquivo`

E entre no seu navegador neste endereço: http://localhost:8080/

[1](https://docs.microsoft.com/pt-br/windows/wsl/install-win10) Windows Subsystem for Linux

[2](https://nodejs.org/en/download/package-manager/) Guia de instalação de Node

[3](https://help.github.com/pt/enterprise/2.16/user/github/creating-cloning-and-archiving-repositories/cloning-a-repository) Clonar repositório do github

[4](https://www.treinaweb.com.br/blog/instalando-e-gerenciando-varias-versoes-do-node-js-com-nvm/) Instalando NVM em seu sistema

[5](https://docs.docker.com/get-docker/) Instalando docker
