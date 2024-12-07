# Bot da Twitch da Hanna
## Sobre o projeto

Este projeto foi feito para dar **novas funcionalidades** ao **chat da Twitch do Projeto Hanna**.

Funções como enviar links das nossas redes sociais, gerar interações com os usuários, fazer memes e coisas parecidas.

## Instalação e execução
### Preparação do projeto
Você precisa de um ambiente que rode **Node.js** para executar este projeto.

Todas as dependências estão listadas em `package.json`.

Com isso em mente, execute os seguintes comandos no terminal:
- `yarn install` - instala dependências e pacotes
- `yarn build` - compila o código de TypeScript para JavaScript
- `yarn start` - executa o código compilado

Você pode rodar uma versão de desenvolvimento com o comando `yarn dev`.

### Variáveis de ambiente
Não se esqueça de criar um arquivo `.env` com as seguintes variáveis de ambiente:

```
# Prefixo a ser usado nos comandos do chat
COMMAND_PREFIX=''

# Canal da Twitch que irá disparar as mensagens
TWITCH_CHANNEL=''

# Client ID da sua aplicação na Twitch
TWITCH_CLIENT_ID=''

# Client Secret da sua aplicação na Twitch
TWITCH_CLIENT_SECRET=''

# Link do servidor do Discord a divulgar
DISCORD_LINK=''

# Link do perffil do Instagram a divulgar
INSTAGRAM_LINK=''
```

### Autenticação inicial na Twitch
1. **GET**: `https://id.twitch.tv/oauth2/authorize?client_id=<client id>&redirect_uri=http://localhost&response_type=code&scope=chat:read+chat:edit`

2. **POST**: `https://id.twitch.tv/oauth2/token?client_id=<client id>&client_secret=<client secret>&code=<past code>&grant_type=authorization_code&redirect_uri=http://localhost`

## Materiais úteis
- Dashboard das suas aplicações/bots na Twitch: https://dev.twitch.tv/console/apps/
- Pacotes que fazem a conexão com a Twitch: https://twurple.js.org/
- Autenticação com a Twitch: https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/