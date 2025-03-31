# Dt Money

Dt Money é um aplicativo web desenvolvido em React que permite o cadastro de transações financeiras de um usuário. Ele permite registrar tanto entradas quanto saídas de dinheiro, exibindo automaticamente o saldo atualizado no painel principal. Além disso, o usuário pode buscar e filtrar transações no histórico.

## Tecnologias Utilizadas
- React 19
- Vite
- JSON Server (para simular uma API REST)
- Styled Components
- Axios
- React Hook Form
- Zod

## Como Executar o Projeto Localmente
Siga os passos abaixo para rodar o Dt Money na sua máquina:

### 1. Clonar o Repositório
```sh
git clone https://github.com/seu-usuario/dt-money.git
cd dt-money
```

### 2. Instalar as Dependências
```sh
npm install
```

### 3. Rodar o JSON Server
O JSON Server simula uma API para armazenar os dados das transações. Execute:
```sh
npx json-server server.json --watch
```
Por padrão, ele rodará na porta `3000`. Se precisar mudar a porta, use `--port <numero>`.

### 4. Iniciar a Aplicação
```sh
npm run dev
```
O Vite rodará por padrão na porta `5173`. Se necessário, ele indicará outra porta disponível.

### 5. Acessar no Navegador
Abra:
```
http://localhost:5173
```
para visualizar o aplicativo.

---
Agora você pode começar a registrar e visualizar suas transações financeiras! 🚀

