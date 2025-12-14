# 🚀 Maisa Maximo - Portfolio

Portfolio pessoal moderno e responsivo desenvolvido com React, Tailwind CSS e design futurista.

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Git](https://git-scm.com/)
- Conta no [GitHub](https://github.com/)

## 🛠️ Como publicar no GitHub Pages

### Passo 1: Criar repositório no GitHub

1. Vai a [github.com/new](https://github.com/new)
2. Nome do repositório: `portfolio` (ou outro nome que preferires)
3. Deixa como **Public**
4. **NÃO** inicializes com README
5. Clica em "Create repository"

### Passo 2: Configurar o homepage (IMPORTANTE!)

Abre o ficheiro `package.json` e atualiza o campo `homepage` com o teu username:

```json
"homepage": "https://SEU-USERNAME.github.io/portfolio"
```

Por exemplo, se o teu username é `maisamaximo`:
```json
"homepage": "https://maisamaximo.github.io/portfolio"
```

### Passo 3: Instalar dependências

```bash
cd frontend
npm install
```

### Passo 4: Fazer build e deploy

```bash
npm run deploy
```

Este comando vai:
1. Criar uma versão otimizada do site na pasta `build`
2. Publicar automaticamente no GitHub Pages

### Passo 5: Configurar GitHub Pages

1. Vai ao teu repositório no GitHub
2. Clica em **Settings** → **Pages**
3. Em "Source", seleciona a branch `gh-pages`
4. Clica em **Save**

### Passo 6: Aceder ao site! 🎉

Após alguns minutos, o teu portfolio estará disponível em:
```
https://SEU-USERNAME.github.io/portfolio
```

---

## 📁 Estrutura do Projeto

```
frontend/
├── public/
├── src/
│   ├── components/     # Componentes React
│   ├── data/
│   │   └── mock.js     # Dados do portfolio (edita aqui!)
│   ├── App.js
│   └── index.css       # Estilos globais
├── package.json
└── README.md
```

## ✏️ Como personalizar

### Alterar dados pessoais

Edita o ficheiro `src/data/mock.js`:

- **personalInfo**: Nome, email, telefone, links
- **aboutMe**: Texto sobre ti e fotos
- **projects**: Lista de projetos
- **experiences**: Experiência profissional
- **certifications**: Certificações
- **courses**: Cursos e formação
- **talks**: Palestras
- **articles**: Artigos

### Alterar cores

Edita `src/index.css` para alterar as cores do tema.

### Alterar CV

Substitui o link em `personalInfo.cvUrl` pelo link do teu CV.

---

## 🔄 Atualizar o site

Sempre que fizeres alterações:

```bash
npm run deploy
```

O site será atualizado automaticamente!

---

## 📱 Responsivo

O portfolio é totalmente responsivo e funciona em:
- 💻 Desktop
- 📱 Mobile
- 📱 Tablet

---

## 🎨 Tecnologias

- React 19
- Tailwind CSS
- Lucide Icons
- Radix UI Components

---

Feito com 💜 por Maisa Maximo
