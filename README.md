# 🌌 Foco: Espaço Sideral & Oceano Pomodoro

Uma experiência imersiva de produtividade que utiliza o conceito de Glassmorphism e transições de estado para criar foco profundo. O projeto alterna entre a imensidão do espaço e a calmaria de um aquário submerso.

## 🚀 O que este projeto demonstra:

### 🛠️ Engenharia de Estilos (Sass/SCSS)
- **Arquitetura Modular:** Separação de responsabilidades em arquivos parciais (`_variables`, `_mixins`).
- **Mixins Parametrizados:** Criação de "receitas" reutilizáveis para efeitos de vidro, flexbox centralizado e camadas de vídeo.
- **Glassmorphism:** Uso de `backdrop-filter: blur()` e transparências calculadas para profundidade visual.

### 🧠 Lógica e Performance (JavaScript)
- **Gerenciamento de Estados:** Transição suave entre modos (Foco, Pausas, Contemplação) através da manipulação de classes no DOM.
- **Page Visibility API:** Otimização de recursos que pausa e reinjeta os vídeos do YouTube automaticamente ao trocar de aba, economizando CPU e bateria.
- **Idle Detection:** Sistema de detecção de inatividade que suaviza a interface após 5s para reduzir distrações visuais.
- **Buffer de Carregamento:** Implementação de `setTimeout` para sincronizar o carregamento dos IFrames do YouTube com as transições de opacidade do CSS, evitando "trancos" visuais.

## 🎥 Créditos de Mídia
Os ambientes imersivos foram criados utilizando vídeos incorporados via IFrame API:
- **Espaço Sideral:** [youtube.com/watch?v=X-XZx1o_w-A&source_ve_path=MTc4NDI0]
- **Aquário Deep Sea:** [youtube.com/watch?v=rHOIMgL2bcQ&source_ve_path=MTc4NDI0]

## 🛠️ Tecnologias
- HTML5 Semântico
- Sass (SCSS) Avançado
- JavaScript Vanilla (ES6+)
- YouTube IFrame API

## 🤖 Processo de Desenvolvimento & IA
Este projeto foi desenvolvido de forma colaborativa com o suporte de Inteligência Artificial. 

- **Lógica e Debugging:** Utilizei IA para acelerar a depuração de erros de IFrame (YouTube API) e para explorar conceitos matemáticos como o operador de resto (`%`) na formatação do timer.
- **Refatoração de Código:** O uso de IA permitiu converter um CSS estático em uma arquitetura Sass modularizada com `Mixins` parametrizados e variáveis.
- **Direção Técnica:** Embora a IA tenha fornecido blocos de código e sugestões, todas as decisões de design (como o Modo Contemplação e o sistema de Dual Background) e o refino da experiência do usuário (UX) foram de minha autoria e direção.

*Acredito que o uso estratégico de IA é uma ferramenta essencial para potencializar a entrega e o aprendizado contínuo no Front-end moderno.*
