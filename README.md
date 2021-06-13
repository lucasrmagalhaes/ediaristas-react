Checklist do projeto Front-end da Semana Multi Stack TreinaWeb

🔗 [Repositório - GitHub](https://github.com/treinaweb/treinaweb-workshop-multistack-react)

## Checklist do Ambiente

- [x]  Instalar Node.js
    - 📥 [Download](https://nodejs.org/en/)
    - 🔗 [Guia de Instalação](https://www.treinaweb.com.br/blog/instalacao-do-node-js-windows-mac-e-linux/)
- [x]  Instalar VS Code
    - 📥 [Download](https://code.visualstudio.com/)
    - 🔗 [Guia de Instalação](https://www.treinaweb.com.br/blog/instalacao-do-vs-code-no-windows-linux-e-macos/)
- [x]  Instalar extensão Styled Components

## Checklist da Criação do Projeto

- [x]  Iniciar o projeto

    `npx create-next-app ediaristas` 

- [x]  Criar arquivo de configuração do TypeScript `tsconfig.json`
- [x]  Instalar TypeScript e tipagem do React

    `npm i typescript @types/react`

- [x]  Iniciar o servidor

Em caso de erro no Windows, executar:

`Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`

## Checklist da Organização do Projeto

- [x]  Criar pasta `src` na raiz do projeto
- [x]  Jogar pasta `pages` em `src`
- [x]  Criar pasta `ui` e `data` em `src`
- [x]  Arrastar pasta `styles` para `ui`
- [x]  Criar pasta `components` em `ui`
- [x]  Criar pasta `themes` em `ui`
- [x]  Criar pasta `@types` em `data`
- [x]  Criar pasta `services` em `data`
- [x]  Criar pasta `hooks` em `data`
- [x]  Mudar arquivos `.js` para `.tsx`
- [x]  Apagar pasta `api`
- [x]  Simplificar caminhos no `tsconfig.json`
- [x]  Arrumar caminhos da importação em `index.tsx`
- [x]  Apagar arquivo `Home.module.css`
- [x]  Arrumar caminhos da importação em `_app.tsx`
- [x]  Jogar imagens na pasta `public`

## Checklist das Configurações do Projeto

- [x]  Instalar dependências

    `npm i @material-ui/core@next @emotion/react @emotion/styled axios react-input-mask`

- [x]  Configurar tema
    - [x]  Criar arquivo do Tema
    - 🎨 Tema (clique aqui para abrir)

        ```jsx
        {
            palette: {
                primary: {
                    light: '#9661ff',
                    main: '#6B2AEE',
                    dark: '#581ECD',
                },
                secondary: {
                    light: '#2bfff2',
                    main: '#02E7D9',
                    dark: '#1dd6cb',
                },
                text: {
                    primary: '#707070',
                    secondary: '#9B9B9B',
                },
                error: {
                    main: '#FC3C00',
                },
                warning: {
                    main: '#FCA600',
                },
                success: {
                    main: '#00D34D',
                },
                grey: {
                    50: '#FAFAFA',
                    100: '#F0F0F0',
                    200: '#D7D9DD',
                    300: '#C4C4C4',
                    400: '#9B9B9B',
                },
            },
            typography: {
                fontFamily: 'Poppins',
            },
            shape: {
                borderRadius: '3px',
            },
            components: {
                MuiButton: {
                    styleOverrides: {
                        root: {
                            textTransform: 'none',
                        },
                    },
                    variants: [
                        {
                            props: { variant: 'contained', color: 'secondary' },
                            style: {
                                color: 'white',
                            },
                        },
                    ],
                },
                MuiPaper: {
                    styleOverrides: {
                        root: {
                            boxShadow: '0px 0px 39px rgba(0, 0, 0, 0.05)',
                        },
                    },
                },
            },
        }
        ```

    - [x]  Adicionar Provider
    - [x]  Adicionar Fonte
    - [x]  Definir fonte no CSS

## Problemas comuns

- Meu VS Code está diferente
    - Isso não é um problema. A aparência do VS Code é customizável. Isso não irá influenciar na aula.
- Minhas pastas no VS Code são criadas todas juntas, por exemplo: "src/ui/components"
    - O VS Code junta o nome das pastas vazias. Você pode mudar esse comportamento indo em `File > Preferences > Settings`
    Pesquise por "Compact folders"
    Desmarque o checkbox da configuração `Explorer: Compact Folders`
- Windows diz que não tenho permissão para executar o comando
    - Execute:
    `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`
- Os comandos não funcionam
    - Se tiver algum anti-vírus, desative-o
    - Verifique se digitou corretamente
    - Verifique se está dentro da pasta correta
    - Tente atualizar o NPM executando:

        `npm install -g npm@latest --force`

    - Limpe o cache com o comando:

        `npm cache clean --force`

    - Feche o terminal e abra novamente
- O comando de criar projeto inicia, mas não finaliza (ou termina com erro)
    - Pode ser que o processo de instalação tenha travado. Você pode forçar a finalização desse processo seguindo este guia:
    [https://www.theopenindia.com/2021/04/found-0-vulnerabilities-how-to-fix-this-create-react-app-problem-.html](https://www.theopenindia.com/2021/04/found-0-vulnerabilities-how-to-fix-this-create-react-app-problem-.html)
- PORT 3000 is already in use
    - Sua porta 3000 já está sendo usada. No arquivo `package.json` altere o comando `next dev` para `next dev --port 3001` e tente acessar agora por `[http://localhost:3001](http://localhost:3001)` ou reinicie o computador
- Mensagem de erro no navegador, dizendo "Module not found"
    - Um arquivo não foi encontrado. Verifique se digitou tudo certo como está na aula, se todos os arquivos que você alterou foram salvos e se todas as pastas e arquivos estão na estrutura correta
- Meu arquivo `tsconfig.json` não foi preenchido automaticamente
    - Veja se criou ele dentro da pasta do projeto e inicie o servidor novamente
- Mensagem de Token não reconhecido
    - O PowerShell pode dar erro ao executar um comando com `@`. Coloque aspas em volta do comando:

        `npm i typescript "@types/react"`

- Minha pasta foi criada mas está vazia
    - O projeto não foi criado corretamente e nem teve sua instalação concluída. Apague a pasta e execute `npx create-next-app ediaristas` novamente
