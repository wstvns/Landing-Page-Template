# Template de Landing Page Configurável

Este é um template de landing page profissional, responsivo e altamente personalizável, projetado para ser adaptado a diversos tipos de empreendimentos como restaurantes, lojas, profissionais liberais e serviços.

## Características Principais

- **Design Responsivo**: Adaptação perfeita para dispositivos móveis, tablets e desktops
- **Altamente Personalizável**: Fácil personalização através de um arquivo de configuração
- **Seções Completas**: Inclui todas as seções essenciais para uma landing page eficaz
- **Otimizado para Conversão**: Layout e elementos projetados para maximizar conversões
- **Código Limpo**: HTML5, CSS3 e JavaScript modernos e bem estruturados
- **Compatível com SEO**: Estrutura semântica para melhor indexação em motores de busca

## Estrutura do Projeto

```
landing_page_template/
├── css/
│   └── styles.css
├── images/
│   ├── logo-placeholder.png
│   ├── banner-placeholder.jpg
│   ├── about-placeholder.jpg
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   └── ...
├── js/
│   ├── main.js
│   └── config.js
└── index.html
```

## Seções Incluídas

1. **Cabeçalho**: Logo, menu de navegação e botão de contato
2. **Banner Principal**: Título, subtítulo e botões de chamada para ação
3. **Sobre**: História da empresa e características principais
4. **Serviços**: Lista de serviços oferecidos com ícones
5. **Galeria**: Portfólio de trabalhos ou produtos
6. **Números**: Estatísticas e conquistas da empresa
7. **Depoimentos**: Avaliações de clientes com slider
8. **CTA**: Seção de chamada para ação
9. **Contato**: Formulário de contato e informações de contato
10. **Mapa**: Localização da empresa
11. **Rodapé**: Links rápidos, newsletter e informações legais

## Guia de Personalização

### Método 1: Usando o Arquivo de Configuração

A maneira mais fácil de personalizar o template é através do arquivo `js/config.js`. Este arquivo contém todas as configurações do template em um formato simples e organizado.

1. Abra o arquivo `js/config.js` em um editor de código
2. Modifique as informações conforme necessário:
   - Cores principais
   - Informações da empresa
   - Textos e conteúdos
   - Links e botões
   - Configurações de contato
3. Salve o arquivo e recarregue a página para ver as alterações

Exemplo de personalização no arquivo `config.js`:

```javascript
// Configuração do Template
const templateConfig = {
    // Cores principais (personalizáveis)
    colors: {
        primary: '#4e73df',     // Altere para a cor principal da marca
        secondary: '#1cc88a',   // Altere para a cor secundária da marca //
        
    },
    
    // Informações da Empresa
    companyInfo: {
        name: 'Nome da Empresa', // Altere para o nome real da empresa
        logo: 'images/logo.png', // Substitua pelo caminho do logo real
        // ...
    },
    
    // Outras configurações...
};
```

### Método 2: Edição Direta dos Arquivos

Para personalizações mais avançadas, você pode editar diretamente os arquivos do template:

1. **HTML (`index.html`)**: Modifique a estrutura e o conteúdo
2. **CSS (`css/styles.css`)**: Altere estilos, cores, fontes e layout
3. **JavaScript (`js/main.js`)**: Modifique comportamentos e funcionalidades

## Substituição de Imagens

1. Prepare imagens nas dimensões recomendadas:
   - Logo: 200x60px (ou proporção similar)
   - Banner principal: 1200x600px
   - Imagem Sobre: 600x400px
   - Galeria: 400x300px
   - Depoimentos (fotos): 100x100px (preferencialmente quadradas)
   - Mapa: 1200x400px (Ainda preciso corrigir esta seção)

2. Substitua as imagens placeholder na pasta `images/` pelas imagens reais, (IMPORTANTE!) mantendo os MESMOS nomes ou atualizando os caminhos no arquivo `config.js`

## Personalização de Cores

O template utiliza um sistema de variáveis CSS que facilita a alteração de cores. As cores principais podem ser alteradas no arquivo `config.js`:

```javascript
colors: {
    primary: '#4e73df',     // Cor principal
    secondary: '#1cc88a',   // Cor secundária
    accent: '#f6c23e',      // Cor de destaque
    dark: '#2e3951',        // Cor escura
    light: '#f8f9fc'        // Cor clara
}
```

Para personalizações mais avançadas, edite as variáveis CSS no início do arquivo `css/styles.css`.

## Personalização de Fontes

O template utiliza as fontes Montserrat e Poppins do Google Fonts. Para alterar as fontes:

1. Edite o link do Google Fonts no `<head>` do arquivo `index.html`
2. Atualize as variáveis de fonte no arquivo `css/styles.css`:

```css
:root {
    /* Fontes */
    --heading-font: 'Montserrat', sans-serif;
    --body-font: 'Poppins', sans-serif;
}
```

## Formulários

O template inclui dois formulários:

1. **Formulário de Contato**: Para receber mensagens dos visitantes
2. **Formulário de Newsletter**: Para capturar e-mails dos visitantes

Por padrão, estes formulários apenas simulam o envio. Para torná-los funcionais, é necessário:

1. Configurar um backend para processar os formulários (PHP, Node.js, etc.). Meu objetivo é fazer em Node.js e deixar disponível no projeto a lógica.
2. Editar o código JavaScript em `js/main.js` para enviar os dados para seu backend

## Integração com WhatsApp

O template inclui um botão flutuante de WhatsApp que pode ser configurado no arquivo `config.js`:

```javascript
contact: {
    // ...
    whatsapp: '5500000000000', // Substitua pelo número real (só funciona com número de telefone internacional, +55 etc.)
    whatsappMessage: 'Olá! Vim pelo site e gostaria de mais informações.'
}
```

## Compatibilidade com Navegadores

O template é compatível com as versões mais recentes dos principais navegadores:

- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge
- Opera

## Otimização para Dispositivos Móveis

O template foi desenvolvido com uma abordagem mobile-first e inclui:

- Design responsivo para todos os tamanhos de tela
- Menu mobile com toggle
- Imagens otimizadas para carregamento rápido
- Botões dimensionados para fácil toque em dispositivos móveis

## Próximos Passos

Implementar a integração com Google Sheets no template.
1. Criar uma planilha modelo no Google Sheets com todas as seções do template (informações da empresa, textos do banner, serviços, depoimentos, etc.)
2. Publicar a planilha na web para que possa ser acessada via API
3. Adicionar um script JavaScript ao template que:
   * Carrega os dados da planilha quando o site é aberto
   * Preenche automaticamente todos os campos do template
   * Atualiza o site sempre que a planilha for modificada

4. Configurar um backend em Node.js para processar os formulários de contato, para que não somente simule mas que realmente funcione.

## Suporte e Contato

Para dúvidas, suporte ou personalizações adicionais, entre em contato que ficarei feliz em te ajudar:

- **Email**: [wstevandev@gmail.com](mailto:wstevandev@gmail.com)
- **GitHub**: [wstvns](https://github.com/wstvns)
- **LinkedIn**: [Wallisson Stevan](https://www.linkedin.com/in/wallisson-stevan-985b9375//)

---
Feito com ❤️ por [W. Stevan](https://www.youtube.com/watch?v=wi8yJdKO1j0). ⬅️ abra para uma surpresa!
---

© 2025 Todos os direitos reservados
