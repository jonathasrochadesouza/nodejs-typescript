## Comandos executados

Instalação do yarn em modo global:
npm install --global yarn

yarn init -y

Instalação do typescript e do sucrase
yarn add -D typescript sucrase

mkdir src

touch src/index.ts

Após configurado o script no package.json
yarn dev

yarn add -D nodemon

Após as configuração de build, e no package.json
yarn build

Reaproveitar plugins, guias, práticas e pacotes do javascript no typescript
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

Reaproveitar plugins, guias, práticas e pacotes do javascript no typescript
yarn eslint --init
--> ... use ESLint? To check... find problems, and enforce code style
--> ... project use? JavaScript modules (import/export)
--> ...

deletar a pasta package-lock.json, e rodar o código abaixo, caso ele instale algo com o npm, isso fará ele atualizar o yarn ler esses novos pacotes, adicionados pelo npm
yarn



