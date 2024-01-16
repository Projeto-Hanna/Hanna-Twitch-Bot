# Bot da Twitch da Hanna
## Sobre o projeto

Este projeto foi feito para dar **novas funcionalidades** ao **chat da Twitch do Projeto Hanna**.

Funções como enviar links das nossas redes sociais, gerar interações com os usuários, fazer memes e coisas parecidas.

## Instalação e execução
### Preparação do projeto
Você precisa de um ambiente que rode **Node.js** para executar este projeto.

Todas as dependências estão listadas em `package.json`.

Com isso em mente, execute os seguintes comandos no terminal:
- `npm install` - instala dependências e pacotes
- `npm run build` - compila o código de TypeScript para JavaScript
- `npm run start` - executa o código compilado

Você pode rodar uma versão de desenvolvimento com o comando `npm run dev`.

### Variáveis de ambiente
Não se esqueça de criar um arquivo `.env` com as seguintes variáveis de ambiente:

```
# Prefixo a ser usado nos comandos do chat
COMMAND_PREFIX=''

# Canal da Twitch que irá disparar as mensagens
TWITCH_CHANNEL=''

# Username do bot na Twitch
TWITCH_USERNAME=''

# Token de autenticação da Twitch
TWITCH_OAUTH_TOKEN= ''

# Link do servidor do Discord
DISCORD_LINK=''
```
