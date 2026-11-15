/* =========================================================
   Caio Faria Gualberto — interações
   i18n PT/EN · tema claro/escuro · HUD · scroll-spy · reveals
   ========================================================= */
(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;

  /* ---------------- dicionário i18n ---------------- */
  const I18N = {
    pt: {
      role: 'SENIOR SOFTWARE & CLOUD ENGINEER',
      'hero.l1': 'Eu projeto sistemas —',
      'hero.l2': 'da lógica à nuvem,',
      'hero.l3': 'na escala que precisar.',
      'hero.lede':
        'Senior software e cloud engineer. Da lógica que sustenta ao que aparece na tela — <em>C#</em>, <em>Python</em>, <em>Go</em> e nuvem avançada em <em>Azure</em> e <em>AWS</em>.',
      'cta.talk': 'Falar comigo',
      'cta.work': 'Ver trabalho',
      scroll: 'rolar ↓',
      'idx.about': '01 — sobre',
      'about.p1':
        'Sou engenheiro sênior de software e de nuvem, e vou onde o problema estiver. Projeto e entrego de ponta a ponta — backend, cloud e frontend — e <strong>assumo o resultado em produção.</strong>',
      'about.p2':
        'Gosto de sistemas que se sustentam sozinhos: bem pensados na base, simples de operar, honestos sobre o que fazem. É esse o padrão que eu levo para cada projeto.',
      'idx.stack': '02 — stack',
      'stack.title': 'O que eu levo<br>para a mesa',
      'stack.k1': 'Linguagens',
      'stack.k2': 'Nuvem',
      'stack.v2': 'Azure<span class="sep">·</span>AWS',
      'stack.k3': 'Frontend',
      'stack.k4': 'Abordagem',
      'stack.v4': 'Entrego ponta a ponta<span class="sep">·</span>e assumo o resultado',
      'stack.k5': 'Plataforma',
      'stack.v5': 'CI/CD<span class="sep">·</span>Observabilidade<span class="sep">·</span>Tempo real',
      'idx.spec': '03 — especificações',
      'spec.title': 'Minhas<br>especificações',
      'spec.intro': 'O detalhe técnico completo — abra se quiser ver a fundo. 118 competências, do código à nuvem.',
      'spec.toggle': 'Abrir especificações',
      'idx.path': '04 — trajetória',
      'path.title': 'Por onde<br>passei',
      'path.intro': 'Duas empresas até aqui. Toque num ponto para abrir.',
      'idx.work': '05 — trabalho',
      'work.title': 'Trabalho<br>selecionado',
      'work.featEyebrow': 'projeto em destaque · solo',
      'work.featDesc':
        'Construí do zero, sozinho, e mantenho: bot de Telegram com backend em Python, infraestrutura em AWS e design system próprio — feito para operar em escala.',
      'work.linkBot': 'Abrir bot ↗',
      'work.m1': 'usuários na base',
      'work.m2': 'ativos simultâneos',
      'work.specBtn': 'Ver especificação',
      'proj.summaryTitle': 'Visão geral',
      'proj.technicalTitle': 'Especificação técnica',
      'proj.close': 'Fechar especificação',
      'work.sbEyebrow': 'projeto em destaque · time internacional',
      'work.sbDesc': 'SaaS B2B de vendas para MSPs, em produção na Europa, nos EUA e na Austrália. Eu construo as integrações com distribuidores e PSAs, a segurança multi-tenant e o núcleo de cotação.',
      'work.sbLinkSite': 'Site ↗',
      'work.sbLinkDemo': 'Demo ↗',
      'work.sbM2': 'ativos ao mesmo tempo',
      'work.labEyebrow': '◇ laboratório · projetos autorais',
      'work.labIntro': 'Sistemas que projetei e construí por conta própria — arquitetura de produção, deploy real e observabilidade de ponta a ponta.',
      'work.labMetaAtalog': 'observabilidade · plataforma própria',
      'work.labMetaOscord': 'tempo real · desktop',
      'work.atalog': 'Plataforma de observabilidade própria — erros, logs, métricas p95/p99, traces, SLOs e alertas, com SDKs publicados.',
      'work.oscord': 'Comunicação em tempo real — desktop em Electron, voz, câmera e transmissão de tela via WebRTC, com o serviço de mídia separado da API.',
      'global.eyebrow': '◇ alcance internacional',
      'global.title': 'Colaboração<br>sem fronteiras.',
      'global.lede': 'Já trabalhei com times e clientes de vários países. Comunicação em inglês faz parte do meu dia a dia.',
      'global.nl_pl': 'Polônia',
      'global.nl_ch': 'Suíça',
      'global.nl_pt': 'Portugal',
      'global.nl_us': 'Estados Unidos',
      'global.nl_cn': 'China',
      'global.nl_nl': 'Países Baixos',
      'global.mainly': 'principalmente',
      'global.langLabel': 'Inglês',
      'global.langLevel': 'Fluente',
      'global.langNote': 'Comunicação profissional diária com clientes europeus.',
      'idx.contact': '06 — contato',
      'contact.title': 'Vamos construir<br>algo juntos?',
      'footer.coord': 'lat: sistema · long: entrega',
    },
    en: {
      role: 'SENIOR SOFTWARE & CLOUD ENGINEER',
      'hero.l1': 'I design systems —',
      'hero.l2': 'from logic to cloud,',
      'hero.l3': 'at the scale it takes.',
      'hero.lede':
        'Senior software and cloud engineer. From the logic underneath to what shows up on screen — <em>C#</em>, <em>Python</em>, <em>Go</em> and advanced cloud on <em>Azure</em> and <em>AWS</em>.',
      'cta.talk': 'Get in touch',
      'cta.work': 'See work',
      scroll: 'scroll ↓',
      'idx.about': '01 — about',
      'about.p1':
        'I\'m a senior software and cloud engineer, and I go wherever the problem is. I design and deliver end-to-end — backend, cloud and frontend — and <strong>I own the outcome in production.</strong>',
      'about.p2':
        "I like systems that hold themselves up: well thought-out at the core, simple to operate, honest about what they do. That's the standard I bring to every project.",
      'idx.stack': '02 — stack',
      'stack.title': 'What I bring<br>to the table',
      'stack.k1': 'Languages',
      'stack.k2': 'Cloud',
      'stack.v2': 'Azure<span class="sep">·</span>AWS',
      'stack.k3': 'Frontend',
      'stack.k4': 'Approach',
      'stack.v4': 'End-to-end delivery<span class="sep">·</span>I own the outcome',
      'stack.k5': 'Platform',
      'stack.v5': 'CI/CD<span class="sep">·</span>Observability<span class="sep">·</span>Real time',
      'idx.spec': '03 — specs',
      'spec.title': 'My<br>specifications',
      'spec.intro': 'The full technical detail — open it if you want to go deep. 118 skills, from code to cloud.',
      'spec.toggle': 'Open specifications',
      'idx.path': '04 — path',
      'path.title': 'Where<br>I have been',
      'path.intro': 'Two companies so far. Tap a point to open it.',
      'idx.work': '05 — work',
      'work.title': 'Selected<br>work',
      'work.featEyebrow': 'featured project · solo',
      'work.featDesc':
        'Built from scratch, solo, and maintained by me: a Telegram bot with a Python backend, AWS infrastructure and a custom design system — made to operate at scale.',
      'work.linkBot': 'Open bot ↗',
      'work.m1': 'users in the base',
      'work.m2': 'concurrent active',
      'work.specBtn': 'See specification',
      'proj.summaryTitle': 'Overview',
      'proj.technicalTitle': 'Technical specification',
      'proj.close': 'Close specification',
      'work.sbEyebrow': 'featured project · international team',
      'work.sbDesc': 'A B2B sales SaaS for MSPs, in production across Europe, the US and Australia. I build the distributor and PSA integrations, the multi-tenant security and the quoting core.',
      'work.sbLinkSite': 'Website ↗',
      'work.sbLinkDemo': 'Demo ↗',
      'work.sbM2': 'active at the same time',
      'work.labEyebrow': '◇ lab · independent projects',
      'work.labIntro': 'Systems I designed and built on my own — production architecture, real deployments and end-to-end observability.',
      'work.labMetaAtalog': 'observability · own platform',
      'work.labMetaOscord': 'real time · desktop',
      'work.atalog': 'My own observability platform — errors, logs, p95/p99 metrics, traces, SLOs and alerts, with published SDKs.',
      'work.oscord': 'Real-time communication — an Electron desktop app with voice, camera and screen sharing over WebRTC, with the media service split from the API.',
      'global.eyebrow': '◇ international reach',
      'global.title': 'Collaboration<br>without borders.',
      'global.lede': "I've worked with teams and clients from many countries. Communicating in English is part of my everyday work.",
      'global.nl_pl': 'Poland',
      'global.nl_ch': 'Switzerland',
      'global.nl_pt': 'Portugal',
      'global.nl_us': 'United States',
      'global.nl_cn': 'China',
      'global.nl_nl': 'Netherlands',
      'global.mainly': 'mainly',
      'global.langLabel': 'English',
      'global.langLevel': 'Fluent',
      'global.langNote': 'Daily professional communication with European clients.',
      'idx.contact': '06 — contact',
      'contact.title': "Let's build<br>something together?",
      'footer.coord': 'lat: system · long: delivery',
    },
  };

  /* ---------------- trajetória: marcos (mais antigo → mais recente) ---------------- */
  const MILESTONES = [
    {
      label: 'HubCount',
      logo: 'assets/hubcount_logo.jpg',
      initials: 'HC',
      when: { pt: '2022 — 2025', en: '2022 — 2025' },
      role: {
        pt: 'Desenvolvedor de Software',
        en: 'Software Developer',
      },
      org: {
        pt: 'HubCount · Santo André, BR · Remoto',
        en: 'HubCount · Santo André, BR · Remote',
      },
      text: {
        pt: 'Quase três anos construindo e sustentando produto: backend em .NET e EF Core, modelagem e SQL, e frontend. Da estrutura de dados à entrega em produção.',
        en: 'Nearly three years building and maintaining product: backend in .NET and EF Core, data modeling and SQL, and frontend. From the data layer to production delivery.',
      },
    },
    {
      label: 'CloudPlusPlus',
      logo: 'assets/cloudplusplus_logo.jpg',
      initials: 'C++',
      when: { pt: '2025 — atual', en: '2025 — present' },
      role: { pt: 'Software Engineer', en: 'Software Engineer' },
      org: {
        pt: 'CloudPlusPlus · Utrecht, NL · Remoto',
        en: 'CloudPlusPlus · Utrecht, NL · Remote',
      },
      text: {
        pt: 'Trabalho direto com clientes internacionais, do discovery à entrega: backend em .NET/C# e Python, infraestrutura em Azure, CI/CD, integrações e design de banco. Assumo o ciclo completo — decisão técnica, implementação e evolução da plataforma, em inglês.',
        en: 'I work directly with international clients, from discovery to delivery: backend in .NET/C# and Python, Azure infrastructure, CI/CD, integrations and database design. I own the full cycle — technical decisions, implementation and platform evolution, in English.',
      },
    },
  ];
  /* ---------------- especificação por projeto (overlay) ---------------- */
  const PROJECT_SPECS = {
    smsfull: {
      title: 'SMS Full Bot',
      eyebrow: {
        pt: 'projeto em destaque · único desenvolvedor e responsável técnico',
        en: 'featured project · sole developer & technical owner',
      },
      tags: { pt: 'Python · .NET · Flutter · React · AWS', en: 'Python · .NET · Flutter · React · AWS' },
      summary: {
        pt: `
<p class="doc__lede">Plataforma de números virtuais para recebimento de SMS de verificação. O cliente escolhe país, operadora e serviço, compra um número com saldo pré-pago, recebe o código e então finaliza, cancela ou pede um novo envio — com atendimento, carteira e programa de indicação dentro do próprio produto.</p>

<ul class="doc__stats">
  <li>300K usuários na base</li>
  <li>20K ativos simultâneos</li>
  <li>+20K pagamentos/mês</li>
  <li>5 idiomas</li>
</ul>

<h4>Meu papel</h4>
<p>Construí a plataforma do zero e sou o <strong>único desenvolvedor</strong> dela — e o <strong>responsável técnico</strong> por tudo que ela é. A visão de negócio vem do dono; a decisão de engenharia é minha: quais stacks usar, como desenhar a infraestrutura, o que construir e o que descartar. Meu trabalho não termina em implementar: é colocar os <strong>trade-offs de cada caminho na mesa</strong> antes da escolha, recomendar um deles e responder pelo que vai para produção.</p>
<p>Na prática significa acumular os papéis que um time dividiria — arquitetura, backend, mobile, front, banco, infraestrutura, observabilidade e operação —, e manter a base previsível o suficiente para que isso continue sustentável.</p>

<h4>O que a plataforma faz</h4>
<ul>
  <li>Catálogo de países, operadoras e serviços sincronizado com fornecedores, com precificação própria e margem mínima garantida.</li>
  <li>Ciclo completo da ativação: compra, entrega do código, reenvio, cancelamento e expiração automática — cada estado com a sua regra de cobrança.</li>
  <li>Carteira pré-paga com recarga por PIX, cartão e criptomoeda, além de cashback, bônus e cartões-presente.</li>
  <li>Programa de indicação com comissão, ranking e preços personalizados por cliente.</li>
  <li>Atendimento humano dentro do produto: fila de suporte, histórico por cliente, contestações e estornos.</li>
  <li>Operação e administração com permissões por papel, relatórios, auditoria e rotinas em segundo plano.</li>
</ul>

<h4>Onde o cliente usa</h4>
<p>Bot de Telegram em cinco idiomas — a superfície em produção hoje —, app Android em Flutter, painel web de administração e suporte, e uma API própria que serve os dois clientes.</p>

<h4>Resultado</h4>
<ul>
  <li>A base cresceu para <strong>300 mil usuários</strong>, com picos de <strong>20 mil ativos simultâneos</strong> — e a infraestrutura absorve isso sem degradar.</li>
  <li>Mais de <strong>20 mil pagamentos por mês</strong>, sem nenhum bug registrado no fluxo financeiro.</li>
  <li><strong>Meses sem bug em produção.</strong> O roadmap hoje é feature; não existe fila de correção.</li>
  <li>A plataforma sustentou um crescimento de receita de <strong>mais de duas vezes</strong> — e essa foi a leitura de impacto do trabalho de engenharia.</li>
</ul>

<h4>Além do produto</h4>
<p>Construí também as ferramentas internas que sustentam o ritmo: um agente de automação que implementa issues do GitHub e abre Pull Request sozinho, e um gerador de relatório mensal de engenharia a partir do histórico dos repositórios.</p>`,
        en: `
<p class="doc__lede">A virtual number platform for receiving verification SMS. The customer picks a country, carrier and service, buys a number with prepaid balance, receives the code and then finalizes, cancels or requests a resend — with support, wallet and a referral program built into the product itself.</p>

<ul class="doc__stats">
  <li>300K users in the base</li>
  <li>20K concurrent active</li>
  <li>20K+ payments/month</li>
  <li>5 languages</li>
</ul>

<h4>My role</h4>
<p>I built the platform from scratch and I'm its <strong>sole developer</strong> — and the <strong>technical owner</strong> of everything it is. Business vision comes from the owner; the engineering call is mine: which stacks to use, how to shape the infrastructure, what to build and what to drop. My job doesn't end at implementing: it's to put the <strong>trade-offs of each path on the table</strong> before the choice is made, recommend one, and own what reaches production.</p>
<p>In practice that means carrying the roles a team would split — architecture, backend, mobile, front end, database, infrastructure, observability and operations — and keeping the codebase predictable enough for that to stay sustainable.</p>

<h4>What the platform does</h4>
<ul>
  <li>Catalog of countries, carriers and services synced with suppliers, with in-house pricing and a guaranteed minimum margin.</li>
  <li>Full activation lifecycle: purchase, code delivery, resend, cancellation and automatic expiry — each state with its own charging rule.</li>
  <li>Prepaid wallet topped up via PIX, card and crypto, plus cashback, bonuses and gift cards.</li>
  <li>Referral program with commissions, ranking and per-customer custom pricing.</li>
  <li>Human support inside the product: support queue, per-customer history, disputes and refunds.</li>
  <li>Operations and administration with role-based permissions, reports, audit trails and background routines.</li>
</ul>

<h4>Where customers use it</h4>
<p>A Telegram bot in five languages — the surface in production today —, an Android app in Flutter, a web panel for administration and support, and an in-house API serving both clients.</p>

<h4>Outcome</h4>
<ul>
  <li>The base grew to <strong>300 thousand users</strong>, peaking at <strong>20 thousand concurrent actives</strong> — and the infrastructure absorbs it without degrading.</li>
  <li>Over <strong>20 thousand payments a month</strong>, with no recorded bug in the financial flow.</li>
  <li><strong>Months without a production bug.</strong> The roadmap today is features; there is no fix backlog.</li>
  <li>The platform supported revenue growth of <strong>more than two times</strong> — that was the business reading of the engineering work.</li>
</ul>

<h4>Beyond the product</h4>
<p>I also built the internal tooling that keeps the pace: an automation agent that implements GitHub issues and opens the Pull Request on its own, and a monthly engineering report generator built from the repositories' history.</p>`,
      },
      technical: {
        pt: `
<p class="doc__lede">Duas gerações convivendo em produção: o bot de Telegram em Python, que atende a base hoje, e a nova plataforma — API em .NET, app Flutter e painel React — em rollout incremental. Tudo em AWS, região <code>sa-east-1</code>.</p>

<h4>Geração 1 — o bot em produção</h4>
<ul>
  <li><strong>Bot:</strong> Python com a API do Telegram, máquina de estados por usuário, decorators de permissão, verificação de bloqueio e trava de callback (o mesmo botão apertado duas vezes não vira duas compras). Internacionalização própria com cinco locales — pt-BR, en-US, es-ES, ru-RU e zh-CN.</li>
  <li><strong>Backend:</strong> Django + Django REST Framework sobre PostgreSQL, dividido por domínio — usuários, serviços, pagamentos, indicações, cartões-presente, preços personalizados, fila de suporte, contestações, feedback e jobs em segundo plano.</li>
  <li><strong>Redis</strong> como camada de cache e estado quente: catálogo de países, tabela de preços por serviço, configuração, sessão do usuário, rascunho de alerta, controle de anti-spam e janela de atendimento. É o que mantém o bot respondendo instantaneamente com 20 mil pessoas online.</li>
  <li><strong>Integrações de número:</strong> três fornecedores (HeroSMS, GlobalSim e SmsHub) atrás de uma camada de abstração, com roteamento, sondas de disponibilidade e fallback entre versões de API do mesmo fornecedor.</li>
  <li><strong>Pagamentos:</strong> Stripe (cartão), Woovi/OpenPix (PIX) e Cryptomus (cripto), recebidos por webhook com validação de assinatura e processamento idempotente — reentrega do provedor não credita duas vezes.</li>
  <li><strong>Rotinas:</strong> jobs agendados para atualização de cotação, relatórios de estorno e de suporte, contestações e conciliação, com servidor de webhooks próprio para eventos de saldo e de operadora.</li>
  <li><strong>IA aplicada:</strong> integração com a OpenAI para apoio ao atendimento, com prompts versionados no repositório.</li>
</ul>

<h4>Geração 2 — a plataforma nova (.NET 10)</h4>
<ul>
  <li><strong>Clean Architecture em sete projetos</strong> — Api, Application, Domain, Infra.Data, Infra.IoC, Workers e Shared —, com dependência estritamente para dentro e nenhuma biblioteca de mágica: sem MediatR, sem AutoMapper, sem FluentValidation. Mapeamento e validação explícitos, por decisão.</li>
  <li><strong>Persistência:</strong> EF Core + Npgsql sobre PostgreSQL, herança TPT (<code>Account</code> → <code>Customer</code>/<code>Staff</code>), auditoria automática de criação/alteração/exclusão, soft delete com filtro global e índices únicos filtrados para permitir recadastro do mesmo valor.</li>
  <li><strong>Autenticação:</strong> Identity + JWT stateless com <strong>duas audiences</strong> (app e painel) selecionadas por prefixo de rota — um token de uma superfície não entra na outra. Access token de 15 min; refresh token de 7 dias guardado <em>só</em> como hash SHA-256, com rotação que revoga o token consumido.</li>
  <li><strong>Autorização de granularidade fina:</strong> catálogo de permissões declarado em código, policies criadas sob demanda por um provider próprio, concessão padrão por papel reconciliada a cada boot e a mesma string espelhada no front — ver a lista sem poder editá-la é um caso de primeira classe, não um efeito colateral.</li>
  <li><strong>Contrato de API:</strong> envelope único (<code>IsSuccess</code>, <code>Code</code>, <code>Message</code>, <code>Data</code>) com o <code>Code</code> funcionando como chave de i18n — o app traduz pela chave, não pela mensagem. Toda listagem nasce paginada, com ordenação sempre desempatada para não repetir registro entre páginas.</li>
  <li><strong>Jobs:</strong> Hangfire para o recorrente e um <code>BackgroundService</code> de 20 s para o monitor de ativações, que fecha compras vencidas e busca códigos nos fornecedores em duas passadas com pools de paralelismo separados — provedor lento atrasa a entrega de código, mas nunca congela saldo.</li>
  <li><strong>Relatórios em PDF</strong> com QuestPDF atrás de uma abstração genérica, tema e escala tipográfica centralizados, fonte embarcada para o PDF sair idêntico em qualquer máquina.</li>
</ul>

<h4>Dinheiro e concorrência</h4>
<ul>
  <li>Saldo trabalha em duas fases — <strong>reserva</strong> na compra, <strong>captura</strong> no fechamento —, e a reserva usa <code>UPDATE ... WHERE</code> condicional atômico no banco em vez de ler-e-gravar, o que elimina a classe inteira de <em>lost update</em> em compras simultâneas.</li>
  <li>Encerrar uma ativação começa por um <strong>claim atômico de status</strong> dentro da transação: zero linhas afetadas significa que outro ciclo já fechou, e o processo sai sem debitar de novo.</li>
  <li>O fornecedor é notificado <strong>depois do commit</strong>, e a falha dele não derruba o fechamento — a contabilidade é local, o número é liberado pelo timeout do provedor.</li>
  <li>O monitor não filtra por idade mínima: o que escapa de um ciclo é recolhido no seguinte. A versão que filtrava criava janela de tiro único — compra órfã, saldo reservado preso e cliente sem ativação nem estorno.</li>
  <li>Webhook de pagamento é idempotente por marcação atômica; reentrega do provedor é caminho normal, não erro.</li>
</ul>

<h4>App e painel</h4>
<ul>
  <li><strong>Mobile:</strong> Flutter com Material 3, Riverpod para estado e injeção, Dio com interceptor que renova o token em 401, go_router, armazenamento seguro dos tokens e push FCM. Traduções em ARB para cinco idiomas, com teste de exaustividade cobrindo os códigos de resposta da API.</li>
  <li><strong>Backoffice:</strong> Vite + React 19 + TypeScript + Mantine v9, axios com o mesmo padrão de interceptor, i18next, fontes auto-hospedadas (nenhum CDN externo) e cada botão verificando a própria permissão.</li>
</ul>

<h4>Infraestrutura</h4>
<ul>
  <li>Containers em <strong>ECS Fargate</strong> atrás de um Application Load Balancer com certificado ACM curinga, imagens no <strong>ECR</strong>, banco no <strong>RDS PostgreSQL</strong>, cache em Redis, arquivos no <strong>S3</strong> (bucket privado da aplicação e um bucket público separado para os ícones de serviço), e-mail e notificações por SES/SNS, filas em SQS, segredos no <strong>Secrets Manager</strong> — nada de credencial na imagem.</li>
  <li>Painel web publicado no <strong>AWS Amplify</strong>, com build a partir do GitHub.</li>
  <li>Docker e Docker Compose para o ambiente local espelhando os mesmos serviços.</li>
  <li>Infraestrutura do agente descrita em <strong>Terraform</strong>, com o estado dos segredos deliberadamente fora do <em>state file</em>.</li>
</ul>

<h4>Observabilidade</h4>
<p>Infraestrutura de log própria, no lugar do logger do framework: contexto por domínio de negócio, um store com escopo de requisição onde o serviço deposita o que a falha vai precisar <em>antes</em> de a falha existir, e escrita de <strong>exatamente uma linha por evento</strong> no stdout — texto para leitura humana, JSON quando a consulta precisa ser por campo no CloudWatch. Nada é capturado por reflexão: quem decide o que entra no log é quem escreve, e senha, token e payload de provedor nunca entram. O ruído do framework é rebaixado em produção para o log útil não afogar.</p>

<h4>Fuso horário e dinheiro no relatório</h4>
<p>O banco guarda instantes em UTC; a fronteira de dia e de mês nasce de um único ponto do código em <code>America/Sao_Paulo</code> e é materializada em UTC para a consulta. Um <code>UtcNow.Date</code> solto fecharia o dia às 21h e desalinharia todo relatório financeiro — por isso a conversão de exibição acontece na borda, uma vez, e nunca no meio da regra.</p>

<h4>Automação e ferramentas internas</h4>
<ul>
  <li><strong>Agente de desenvolvimento:</strong> menção numa issue do GitHub → <strong>Lambda</strong> valida a assinatura HMAC do webhook e confirma, via GitHub App, que o autor é membro da organização → mensagem numa <strong>fila SQS FIFO</strong> deduplicada pelo id da entrega → uma segunda Lambda dispara um projeto do <strong>CodeBuild</strong> que roda o agente dentro de um container do ECR → branch, Pull Request e comentário de volta na issue. Estado das execuções num schema próprio do PostgreSQL, com usuário e permissões separados do resto. Tudo provisionado em <strong>Terraform</strong>: SQS com dead-letter queue, papéis IAM mínimos, log groups, política de ciclo de vida no ECR e segredos no Secrets Manager.</li>
  <li><strong>Relatório mensal de engenharia:</strong> coleta commits e diffs do mês nos repositórios e gera um PDF com o resumo do que foi entregue, usando a API da OpenAI.</li>
</ul>

<h4>Método</h4>
<p>Desenvolvimento <strong>spec-driven</strong> nos projetos novos: cada funcionalidade relevante nasce de uma especificação com comportamento esperado, erros e critérios de aceitação, e as decisões arquiteturais ficam registradas como ADRs. O <em>porquê</em> de cada regra de domínio mora em documentação viva versionada junto do código — é o que faz a base continuar previsível depois de anos e de duas gerações de stack.</p>`,
        en: `
<p class="doc__lede">Two generations running side by side: the Python Telegram bot serving the base today, and the new platform — .NET API, Flutter app and React panel — in incremental rollout. All on AWS, region <code>sa-east-1</code>.</p>

<h4>Generation 1 — the bot in production</h4>
<ul>
  <li><strong>Bot:</strong> Python on the Telegram API, per-user state machine, decorators for permissions, ban checks and callback locking (the same button pressed twice doesn't become two purchases). In-house internationalization with five locales — pt-BR, en-US, es-ES, ru-RU and zh-CN.</li>
  <li><strong>Backend:</strong> Django + Django REST Framework over PostgreSQL, split by domain — users, services, payments, referrals, gift cards, custom pricing, support queue, disputes, feedback and background jobs.</li>
  <li><strong>Redis</strong> as the cache and hot-state layer: country catalog, per-service price table, configuration, user session, alert drafts, anti-spam control and the support window. It's what keeps the bot answering instantly with 20 thousand people online.</li>
  <li><strong>Number suppliers:</strong> three providers (HeroSMS, GlobalSim and SmsHub) behind an abstraction layer, with routing, availability probes and fallback between API versions of the same provider.</li>
  <li><strong>Payments:</strong> Stripe (card), Woovi/OpenPix (PIX) and Cryptomus (crypto), received by webhook with signature validation and idempotent processing — a provider redelivery never credits twice.</li>
  <li><strong>Routines:</strong> scheduled jobs for exchange-rate updates, refund and support reports, disputes and reconciliation, with a dedicated webhook server for balance and carrier events.</li>
  <li><strong>Applied AI:</strong> OpenAI integration supporting the service desk, with prompts versioned in the repository.</li>
</ul>

<h4>Generation 2 — the new platform (.NET 10)</h4>
<ul>
  <li><strong>Clean Architecture across seven projects</strong> — Api, Application, Domain, Infra.Data, Infra.IoC, Workers and Shared — with dependencies pointing strictly inward and no magic libraries: no MediatR, no AutoMapper, no FluentValidation. Mapping and validation are explicit, by decision.</li>
  <li><strong>Persistence:</strong> EF Core + Npgsql over PostgreSQL, TPT inheritance (<code>Account</code> → <code>Customer</code>/<code>Staff</code>), automatic create/update/delete auditing, soft delete with a global filter, and filtered unique indexes so the same value can be registered again.</li>
  <li><strong>Authentication:</strong> Identity + stateless JWT with <strong>two audiences</strong> (app and panel) selected by route prefix — a token from one surface never enters the other. 15-minute access token; 7-day refresh token stored <em>only</em> as a SHA-256 hash, with rotation revoking the consumed token.</li>
  <li><strong>Fine-grained authorization:</strong> a permission catalog declared in code, policies created on demand by a custom provider, per-role defaults reconciled at every boot, and the same string mirrored on the front end — letting someone view a list without editing it is a first-class case, not a side effect.</li>
  <li><strong>API contract:</strong> a single envelope (<code>IsSuccess</code>, <code>Code</code>, <code>Message</code>, <code>Data</code>) where <code>Code</code> doubles as the i18n key — the app translates by key, not by message. Every listing is born paginated, always with a tie-breaker so no record repeats across pages.</li>
  <li><strong>Jobs:</strong> Hangfire for recurring work and a 20-second <code>BackgroundService</code> for the activation monitor, which closes expired purchases and fetches codes from suppliers in two passes with separate concurrency pools — a slow provider delays code delivery, but never freezes balance.</li>
  <li><strong>PDF reports</strong> with QuestPDF behind a generic abstraction, centralized theme and type scale, and an embedded font so the PDF renders identically on any machine.</li>
</ul>

<h4>Money and concurrency</h4>
<ul>
  <li>Balance works in two phases — <strong>reserve</strong> on purchase, <strong>capture</strong> on close — and the reservation uses an atomic conditional <code>UPDATE ... WHERE</code> in the database instead of read-then-write, which removes the whole <em>lost update</em> class on simultaneous purchases.</li>
  <li>Closing an activation starts with an <strong>atomic status claim</strong> inside the transaction: zero rows affected means another cycle already closed it, and the process exits without debiting twice.</li>
  <li>The supplier is notified <strong>after the commit</strong>, and its failure can't bring the closure down — accounting is local, and the number is released by the provider's own timeout.</li>
  <li>The monitor has no minimum-age filter: whatever escapes one cycle is picked up by the next. The filtered version created a single-shot window — orphaned purchase, reserved balance stuck, and a customer with neither activation nor refund.</li>
  <li>Payment webhooks are idempotent through atomic marking; provider redelivery is a normal path, not an error.</li>
</ul>

<h4>App and panel</h4>
<ul>
  <li><strong>Mobile:</strong> Flutter with Material 3, Riverpod for state and injection, Dio with an interceptor that refreshes the token on 401, go_router, secure token storage and FCM push. ARB translations for five languages, with an exhaustiveness test covering the API response codes.</li>
  <li><strong>Backoffice:</strong> Vite + React 19 + TypeScript + Mantine v9, axios with the same interceptor pattern, i18next, self-hosted fonts (no external CDN) and every button checking its own permission.</li>
</ul>

<h4>Infrastructure</h4>
<ul>
  <li>Containers on <strong>ECS Fargate</strong> behind an Application Load Balancer with a wildcard ACM certificate, images in <strong>ECR</strong>, database on <strong>RDS PostgreSQL</strong>, Redis cache, files on <strong>S3</strong> (a private application bucket plus a separate public one for service icons), email and notifications through SES/SNS, queues on SQS, secrets in <strong>Secrets Manager</strong> — no credentials baked into images.</li>
  <li>The web panel is published on <strong>AWS Amplify</strong>, built straight from GitHub.</li>
  <li>Docker and Docker Compose mirror the same services locally.</li>
  <li>The agent's infrastructure is described in <strong>Terraform</strong>, with secret values deliberately kept out of the state file.</li>
</ul>

<h4>Observability</h4>
<p>A custom logging infrastructure instead of the framework logger: context by business domain, a request-scoped store where the service deposits what a failure will need <em>before</em> the failure exists, and <strong>exactly one line per event</strong> written to stdout — text for human reading, JSON when queries need to filter by field in CloudWatch. Nothing is captured by reflection: whoever writes decides what goes in, and passwords, tokens and provider payloads never do. Framework noise is turned down in production so the useful log isn't drowned.</p>

<h4>Time zones and money in reports</h4>
<p>The database stores instants in UTC; day and month boundaries come from a single point in the code, built in <code>America/Sao_Paulo</code> and materialized back to UTC for the query. A loose <code>UtcNow.Date</code> would close the day at 9pm local time and skew every financial report — so display conversion happens at the edge, once, never in the middle of a rule.</p>

<h4>Automation and internal tooling</h4>
<ul>
  <li><strong>Development agent:</strong> a mention in a GitHub issue → a <strong>Lambda</strong> validates the webhook's HMAC signature and confirms, through a GitHub App, that the author belongs to the organization → a message on an <strong>SQS FIFO queue</strong> deduplicated by delivery id → a second Lambda triggers a <strong>CodeBuild</strong> project running the agent inside an ECR container → branch, Pull Request and a comment back on the issue. Execution state lives in a dedicated PostgreSQL schema with its own user and permissions. All provisioned in <strong>Terraform</strong>: SQS with a dead-letter queue, least-privilege IAM roles, log groups, an ECR lifecycle policy and secrets in Secrets Manager.</li>
  <li><strong>Monthly engineering report:</strong> collects the month's commits and diffs across the repositories and generates a PDF summarizing what shipped, using the OpenAI API.</li>
</ul>

<h4>Method</h4>
<p><strong>Spec-driven</strong> development on the new projects: every meaningful feature starts from a specification with expected behavior, errors and acceptance criteria, and architectural decisions are recorded as ADRs. The <em>why</em> behind each domain rule lives in living documentation versioned next to the code — that's what keeps the codebase predictable after years and two generations of stack.</p>`,
      },
    },

    salesbuildr: {
      title: 'Salesbuildr',
      eyebrow: {
        pt: 'projeto em destaque · engenheiro de software em time internacional',
        en: 'featured project · software engineer on an international team',
      },
      tags: { pt: 'TypeScript · Angular · NestJS · PostgreSQL · Azure · GCP', en: 'TypeScript · Angular · NestJS · PostgreSQL · Azure · GCP' },
      summary: {
        pt: `
<p class="doc__lede">Sistema de vendas para MSPs, as empresas que gerenciam TI para outras empresas. O MSP monta o catálogo com preços de distribuidor, gera propostas com a sua marca, aprova, vende por uma loja própria e, quando o negócio fecha, tudo segue sincronizado para o PSA ou o CRM que ele já usa.</p>

<ul class="doc__stats">
  <li>19K usuários na base</li>
  <li>250 ativos ao mesmo tempo</li>
  <li>3 regiões</li>
  <li>5 PSAs e CRMs</li>
</ul>

<h4>Meu papel</h4>
<p>Sou engenheiro de software no time do produto, trabalhando em inglês com um time internacional — e um dos <strong>dois engenheiros com mais entregas</strong> no código. Assumo frentes inteiras, do desenho à entrada em produção: integrações com distribuidores e PSAs, segurança multi-tenant e o núcleo de cotação.</p>

<h4>O que a plataforma faz</h4>
<ul>
  <li>Catálogo de produtos sincronizado com distribuidores e marketplaces, com tabelas de preço e grupos de desconto.</li>
  <li>Propostas montadas a partir de templates, com fluxo de aprovação, validade e histórico de versões.</li>
  <li>Oportunidades, contratos recorrentes e pedidos de compra.</li>
  <li>Loja e portal para o cliente final do MSP, além de landing pages e prospecção.</li>
  <li>Sincronização em duas vias com ConnectWise, Autotask, HaloPSA, Dynamics e HubSpot.</li>
  <li>API pública, webhooks, relatórios e dashboards.</li>
</ul>

<h4>O que eu construí</h4>
<ul>
  <li><strong>Integração CloudFactory e Microsoft NCE de ponta a ponta:</strong> autenticação, sincronização do catálogo, atualização noturna de preços, vínculo de cliente final com empresa, sincronização de assinaturas para contratos e as telas de conexão e vínculo de produtos — até a entrada em produção.</li>
  <li><strong>Criptografia das credenciais de PSA de cada cliente</strong> com envelope encryption, incluindo a migração das credenciais já existentes.</li>
  <li><strong>Confiabilidade das integrações</strong> com HubSpot, HaloPSA e Autotask: sincronização em duas vias, reenvios idempotentes e falhas isoladas entre si.</li>
  <li><strong>Histórico de versões de propostas</strong> e expiração de propostas.</li>
  <li><strong>Autorização multi-tenant mais rígida:</strong> checagem de papel e permissão, isolamento de dados entre clientes e bloqueio de edição em propostas aprovadas.</li>
</ul>

<h4>Resultado</h4>
<ul>
  <li>Uma base de <strong>19 mil usuários</strong> com login, em três regiões, com picos de cerca de <strong>250 pessoas ativas ao mesmo tempo</strong> num dia útil.</li>
  <li>Um distribuidor novo inteiro — catálogo, preços e assinaturas — entregue e em produção.</li>
  <li>Credenciais de integração dos clientes protegidas por criptografia, sem nenhuma credencial antiga deixada para trás.</li>
</ul>`,
        en: `
<p class="doc__lede">A sales system for MSPs, the companies that run IT for other businesses. The MSP builds a catalog at distributor prices, creates branded proposals, gets them approved, sells through its own storefront, and once the deal closes everything stays synced to the PSA or CRM it already uses.</p>

<ul class="doc__stats">
  <li>19K users in the base</li>
  <li>250 active at the same time</li>
  <li>3 regions</li>
  <li>5 PSAs and CRMs</li>
</ul>

<h4>My role</h4>
<p>I'm a software engineer on the product team, working in English with an international team — and one of the <strong>two engineers with the most delivered work</strong> in the codebase. I own whole fronts, from design to production: distributor and PSA integrations, multi-tenant security and the quoting core.</p>

<h4>What the platform does</h4>
<ul>
  <li>Product catalog synced with distributors and marketplaces, with price books and discount groups.</li>
  <li>Proposals built from templates, with approval flow, expiry and version history.</li>
  <li>Opportunities, recurring contracts and purchase orders.</li>
  <li>A storefront and portal for the MSP's end customers, plus landing pages and prospecting.</li>
  <li>Two-way sync with ConnectWise, Autotask, HaloPSA, Dynamics and HubSpot.</li>
  <li>Public API, webhooks, reports and dashboards.</li>
</ul>

<h4>What I built</h4>
<ul>
  <li><strong>CloudFactory and Microsoft NCE integration end to end:</strong> authentication, catalog sync, nightly price refresh, end-customer to company mapping, subscription-to-contract sync and the connect and product-linking screens — all the way to go-live.</li>
  <li><strong>Encryption of each customer's PSA credentials</strong> with envelope encryption, including migrating the credentials that already existed.</li>
  <li><strong>Integration reliability</strong> for HubSpot, HaloPSA and Autotask: two-way sync, idempotent retries and failures isolated from each other.</li>
  <li><strong>Proposal version history</strong> and proposal expiry.</li>
  <li><strong>Stricter multi-tenant authorization:</strong> role and permission checks, data isolation between customers and edit locking on approved proposals.</li>
</ul>

<h4>Outcome</h4>
<ul>
  <li>A base of <strong>19 thousand users</strong> with a login, across three regions, peaking at around <strong>250 people active at the same time</strong> on a working day.</li>
  <li>A whole new distributor — catalog, prices and subscriptions — delivered and in production.</li>
  <li>Customers' integration credentials protected by encryption, with no old credential left behind.</li>
</ul>`,
      },
      technical: {
        pt: `
<p class="doc__lede">Monorepo Nx em TypeScript, com front em Angular e back em NestJS, rodando em várias nuvens e em três regiões: Europa, Estados Unidos e Austrália.</p>

<h4>Stack</h4>
<ul>
  <li><strong>Frontend:</strong> Angular com SSR, stores baseadas em signals, i18n e design system próprio documentado em Storybook.</li>
  <li><strong>Backend:</strong> NestJS, com API principal, API do portal, workers de fila, um hub de distribuidores e funções serverless.</li>
  <li><strong>Dados:</strong> Firestore como base multi-tenant, <strong>PostgreSQL com um banco por cliente</strong> via TypeORM, Elasticsearch para busca e pgvector para recuperação sobre a documentação.</li>
  <li><strong>Filas:</strong> BullMQ sobre Redis para sincronizações agendadas e trabalho em segundo plano.</li>
</ul>

<h4>Arquitetura</h4>
<ul>
  <li><strong>Fatias verticais por domínio:</strong> cada domínio tem a sua API, o seu processador, a sua fila e a sua interface, lado a lado.</li>
  <li><strong>Registro de erros classificados:</strong> cada falha tem um código conhecido, o que deixa claro o que pode ser reenviado e o que não pode.</li>
  <li><strong>Hub de distribuidores:</strong> um adaptador por distribuidor, com o mesmo contrato para catálogo, preço e estoque.</li>
</ul>

<h4>Problemas que resolvi</h4>
<ul>
  <li><strong>Token de distribuidor sob concorrência:</strong> vários workers precisam do mesmo token, e o provedor não aceita renovações simultâneas. A renovação é serializada com lease e fencing: só um processo renova, e um processo atrasado não sobrescreve um token mais novo.</li>
  <li><strong>Catálogo grande em banco por cliente:</strong> o catálogo da Microsoft entra no PostgreSQL de cada cliente, e uma rotina noturna atualiza só os preços.</li>
  <li><strong>Credenciais com envelope encryption:</strong> uma chave de dados por segredo, protegida por uma chave mestra no Azure Key Vault. A criptografia acontece na camada de configuração, então nenhum chamador lida com a credencial aberta. Um script de backfill migrou o que já existia.</li>
  <li><strong>Sincronização que não duplica:</strong> pedido de venda reenviado sem duplicar, upsert por ID externo, item de proposta que espera o produto chegar ao PSA antes de ser enviado, e falha de um registro que não derruba os outros.</li>
  <li><strong>Versões de proposta:</strong> snapshots completos com versionamento automático, para que uma proposta enviada nunca mude por baixo do cliente.</li>
</ul>

<h4>Infraestrutura e entrega</h4>
<ul>
  <li>Azure para computação (App Service com deployment slots) e Redis gerenciado. GCP e Firebase para Firestore, autenticação, storage e funções. Elastic Cloud para busca. Cloudflare para CDN, WAF e domínios customizados.</li>
  <li>Deploy separado por região: Europa, Estados Unidos e Austrália.</li>
  <li><strong>Ambiente de preview por pull request</strong> em Azure Container Apps.</li>
  <li>Infraestrutura em Terraform.</li>
  <li>Observabilidade no Datadog, com dashboards e monitores versionados como código.</li>
  <li>Qualidade: Jest, Playwright E2E, SonarQube e <strong>revisão automática com CodeRabbit</strong> em cada pull request.</li>
</ul>`,
        en: `
<p class="doc__lede">An Nx monorepo in TypeScript, with an Angular front end and a NestJS back end, running across several clouds and three regions: Europe, the United States and Australia.</p>

<h4>Stack</h4>
<ul>
  <li><strong>Frontend:</strong> Angular with SSR, signal-based stores, i18n and an in-house design system documented in Storybook.</li>
  <li><strong>Backend:</strong> NestJS, with the main API, the portal API, queue workers, a distributor hub and serverless functions.</li>
  <li><strong>Data:</strong> Firestore as the multi-tenant base, <strong>PostgreSQL with one database per customer</strong> through TypeORM, Elasticsearch for search and pgvector for retrieval over the documentation.</li>
  <li><strong>Queues:</strong> BullMQ on Redis for scheduled syncs and background work.</li>
</ul>

<h4>Architecture</h4>
<ul>
  <li><strong>Vertical slices per domain:</strong> each domain has its own API, processor, queue and UI, side by side.</li>
  <li><strong>Registry of classified errors:</strong> every failure has a known code, which makes it clear what can be retried and what can't.</li>
  <li><strong>Distributor hub:</strong> one adapter per distributor, with the same contract for catalog, price and stock.</li>
</ul>

<h4>Problems I solved</h4>
<ul>
  <li><strong>Distributor token under concurrency:</strong> several workers need the same token, and the provider doesn't accept simultaneous refreshes. Refresh is serialized with a lease and fencing: only one process refreshes, and a late process can't overwrite a newer token.</li>
  <li><strong>A large catalog in a per-customer database:</strong> the Microsoft catalog lands in each customer's PostgreSQL, and a nightly job updates only the prices.</li>
  <li><strong>Envelope-encrypted credentials:</strong> one data key per secret, protected by a master key in Azure Key Vault. Encryption happens at the configuration layer, so no caller ever handles the plain credential. A backfill script migrated what already existed.</li>
  <li><strong>Sync that doesn't duplicate:</strong> sales orders resent without duplicates, upserts by external ID, proposal lines that wait for the product to reach the PSA before they're sent, and one failed record that doesn't take down the rest.</li>
  <li><strong>Proposal versions:</strong> full snapshots with automatic versioning, so a sent proposal never changes underneath the customer.</li>
</ul>

<h4>Infrastructure and delivery</h4>
<ul>
  <li>Azure for compute (App Service with deployment slots) and managed Redis. GCP and Firebase for Firestore, auth, storage and functions. Elastic Cloud for search. Cloudflare for CDN, WAF and custom domains.</li>
  <li>Separate deploys per region: Europe, the United States and Australia.</li>
  <li><strong>A preview environment per pull request</strong> on Azure Container Apps.</li>
  <li>Infrastructure in Terraform.</li>
  <li>Observability in Datadog, with dashboards and monitors versioned as code.</li>
  <li>Quality: Jest, Playwright E2E, SonarQube and <strong>automated CodeRabbit review</strong> on every pull request.</li>
</ul>`,
      },
    },

    atalog: {
      title: 'Atalog',
      eyebrow: {
        pt: 'laboratório · projeto autoral · arquitetura, código e infraestrutura',
        en: 'lab · independent project · architecture, code and infrastructure',
      },
      tags: { pt: '.NET 10 · React 19 · PostgreSQL · AWS Lightsail', en: '.NET 10 · React 19 · PostgreSQL · AWS Lightsail' },
      summary: {
        pt: `
<p class="doc__lede">Plataforma de observabilidade self-hosted com gestão de tarefas na mesma conta. Ela recebe erros, logs, métricas e traces das aplicações, mostra tudo em dashboards, dispara alertas e liga cada problema ao card de quem vai resolvê-lo.</p>

<ul class="doc__stats">
  <li>5 serviços</li>
  <li>2 SDKs publicados</li>
  <li>p50 · p95 · p99</li>
  <li>24 ferramentas MCP</li>
</ul>

<h4>O que a plataforma faz</h4>
<ul>
  <li><strong>Erros</strong> agrupados por fingerprint, com contagem de usuários afetados e simbolização por source map.</li>
  <li><strong>Logs</strong> estruturados com live tail.</li>
  <li><strong>Métricas</strong> com rollup por minuto e histogramas em p50, p90, p95 e p99.</li>
  <li><strong>Traces</strong> com mapa de serviços e latência por percentil.</li>
  <li><strong>Dashboards</strong> montados com arrastar e redimensionar.</li>
  <li><strong>Monitores</strong> que abrem incidentes e notificam por e-mail ou webhook assinado.</li>
  <li><strong>SLOs</strong> com error budget e alerta de burn rate.</li>
  <li>Uptime checks, rastreio de deploys e releases, e políticas de retenção.</li>
</ul>

<h4>Observabilidade ligada ao trabalho</h4>
<p>O segundo produto da conta é um quadro de tarefas (kanban, backlog, sprints, automações). Um card pode ser vinculado a um erro: <strong>fechar o card resolve o erro</strong>, e se o erro voltar, o card é reaberto. O incidente e a tarefa contam a mesma história.</p>

<h4>Em uso</h4>
<p>O Atalog observa os meus próprios sistemas. O Oscord, por exemplo, manda erros, logs, métricas e traces para ele pelo SDK.</p>`,
        en: `
<p class="doc__lede">A self-hosted observability platform with task management in the same account. It takes in errors, logs, metrics and traces from applications, shows them on dashboards, fires alerts and links each problem to the card of whoever will fix it.</p>

<ul class="doc__stats">
  <li>5 services</li>
  <li>2 published SDKs</li>
  <li>p50 · p95 · p99</li>
  <li>24 MCP tools</li>
</ul>

<h4>What the platform does</h4>
<ul>
  <li><strong>Errors</strong> grouped by fingerprint, with affected-user counts and source-map symbolication.</li>
  <li><strong>Structured logs</strong> with live tail.</li>
  <li><strong>Metrics</strong> with a per-minute rollup and histograms at p50, p90, p95 and p99.</li>
  <li><strong>Traces</strong> with a service map and percentile latency.</li>
  <li><strong>Dashboards</strong> built by dragging and resizing.</li>
  <li><strong>Monitors</strong> that open incidents and notify by email or signed webhook.</li>
  <li><strong>SLOs</strong> with error budgets and burn-rate alerts.</li>
  <li>Uptime checks, deploy and release tracking, and retention policies.</li>
</ul>

<h4>Observability tied to the work</h4>
<p>The account's second product is a task board (kanban, backlog, sprints, automations). A card can be linked to an error: <strong>closing the card resolves the error</strong>, and if the error comes back, the card reopens. The incident and the task tell the same story.</p>

<h4>In use</h4>
<p>Atalog watches my own systems. Oscord, for example, sends its errors, logs, metrics and traces to it through the SDK.</p>`,
      },
      technical: {
        pt: `
<p class="doc__lede">Cinco serviços em .NET 10 atrás do Caddy, um PostgreSQL dividido por módulo, três frontends em React 19 e SDKs para .NET e TypeScript.</p>

<h4>Serviços</h4>
<ul>
  <li><strong>auth</strong>, <strong>board</strong>, <strong>monitor</strong>, <strong>ingest</strong> e <strong>mcp</strong>, em ASP.NET Core, atrás do Caddy com HTTPS automático.</li>
  <li>Um único PostgreSQL com <strong>schema e usuário de banco próprios por módulo</strong> e nenhuma chave estrangeira entre schemas. Os módulos ficam isolados sem o custo de vários bancos.</li>
  <li><strong>auth</strong> emite JWT ES256. Os outros serviços validam pela JWKS, sem consultar o auth a cada requisição.</li>
  <li>SignalR serve <strong>só como sinal</strong> de que algo mudou. O dado em si vem sempre da API, então nenhuma tela fica com estado divergente.</li>
</ul>

<h4>Ingestão</h4>
<ul>
  <li>Os SDKs mandam lotes para <code>/v1/errors|logs|metrics|traces</code> com chave de projeto. O <strong>ingest</strong> responde 202, 429 com <code>Retry-After</code> ou 503, e o SDK respeita o recado.</li>
  <li>O <strong>monitor</strong> agrupa, avalia alertas e dispara webhooks em jobs do Hangfire, fora do caminho da ingestão.</li>
  <li>As tabelas de sinais são <strong>particionadas por dia</strong> no próprio Postgres, sem banco colunar. A retenção vira descartar uma partição.</li>
  <li>Percentis saem de um <strong>rollup por minuto</strong> nas métricas e de <code>percentile_cont</code> nos traces.</li>
</ul>

<h4>SDKs que nunca derrubam o app</h4>
<ul>
  <li><code>Atalog.Sdk</code> no NuGet e <code>@atalog/sdk</code> no npm (browser, Node e Electron), ambos MIT.</li>
  <li>Fila limitada, timeout de 3 s e descarte silencioso: se a plataforma cair, a aplicação observada segue igual.</li>
  <li>Dados sensíveis são limpos <strong>duas vezes</strong>, no SDK e de novo no ingest, incluindo validação de Luhn para números de cartão.</li>
  <li>Chaves de browser só valem nas origens permitidas. Uma CLI no pacote npm sobe source maps e marca deploys.</li>
</ul>

<h4>MCP</h4>
<p>Um servidor MCP expõe 24 ferramentas de Monitor e Tasks para assistentes como Claude e Cursor. O <strong>auth faz o papel de servidor OAuth</strong>, com tela de consentimento e gestão de apps conectados.</p>

<h4>Infraestrutura e entrega</h4>
<ul>
  <li>APIs em Docker Compose no <strong>AWS Lightsail</strong>, os três frontends no AWS Amplify, DNS e borda na Cloudflare.</li>
  <li>GitHub Actions com <strong>CI filtrado por pasta</strong> (só roda o que mudou), imagem por serviço no GHCR e publicação do SDK no NuGet via <strong>OIDC trusted publishing</strong>, sem chave guardada.</li>
</ul>`,
        en: `
<p class="doc__lede">Five .NET 10 services behind Caddy, one PostgreSQL split by module, three React 19 frontends and SDKs for .NET and TypeScript.</p>

<h4>Services</h4>
<ul>
  <li><strong>auth</strong>, <strong>board</strong>, <strong>monitor</strong>, <strong>ingest</strong> and <strong>mcp</strong>, in ASP.NET Core, behind Caddy with automatic HTTPS.</li>
  <li>A single PostgreSQL with <strong>its own schema and database user per module</strong> and no cross-schema foreign keys. Modules stay isolated without the cost of several databases.</li>
  <li><strong>auth</strong> issues ES256 JWTs. The other services validate them through JWKS, without calling auth on every request.</li>
  <li>SignalR is used <strong>only as a signal</strong> that something changed. The data itself always comes from the API, so no screen drifts out of sync.</li>
</ul>

<h4>Ingestion</h4>
<ul>
  <li>The SDKs send batches to <code>/v1/errors|logs|metrics|traces</code> with a project key. <strong>ingest</strong> replies 202, 429 with <code>Retry-After</code>, or 503, and the SDK honors the answer.</li>
  <li><strong>monitor</strong> groups, evaluates alerts and fires webhooks in Hangfire jobs, off the ingestion path.</li>
  <li>Signal tables are <strong>partitioned by day</strong> in Postgres itself, with no columnar database. Retention means dropping a partition.</li>
  <li>Percentiles come from a <strong>per-minute rollup</strong> for metrics and from <code>percentile_cont</code> for traces.</li>
</ul>

<h4>SDKs that never crash the app</h4>
<ul>
  <li><code>Atalog.Sdk</code> on NuGet and <code>@atalog/sdk</code> on npm (browser, Node and Electron), both MIT.</li>
  <li>Bounded queue, 3 s timeout and silent drop: if the platform goes down, the observed application carries on unchanged.</li>
  <li>Sensitive data is scrubbed <strong>twice</strong>, in the SDK and again in ingest, including a Luhn check for card numbers.</li>
  <li>Browser keys only work on allowed origins. A CLI in the npm package uploads source maps and marks deploys.</li>
</ul>

<h4>MCP</h4>
<p>An MCP server exposes 24 Monitor and Tasks tools to assistants such as Claude and Cursor. <strong>auth acts as the OAuth server</strong>, with a consent screen and connected-app management.</p>

<h4>Infrastructure and delivery</h4>
<ul>
  <li>APIs on Docker Compose on <strong>AWS Lightsail</strong>, the three frontends on AWS Amplify, DNS and edge on Cloudflare.</li>
  <li>GitHub Actions with <strong>path-filtered CI</strong> (only what changed runs), one image per service on GHCR, and SDK publishing to NuGet through <strong>OIDC trusted publishing</strong>, with no stored key.</li>
</ul>`,
      },
    },

    oscord: {
      title: 'Oscord',
      eyebrow: {
        pt: 'laboratório · projeto autoral · desktop, backend e mídia em tempo real',
        en: 'lab · independent project · desktop, backend and real-time media',
      },
      tags: { pt: 'Electron · .NET 10 · Go · LiveKit · WebRTC', en: 'Electron · .NET 10 · Go · LiveKit · WebRTC' },
      summary: {
        pt: `
<p class="doc__lede">App de comunicação privado, só por convite, para um grupo de amigos: servidores com cargos e permissões, canais de texto e de voz, câmera e transmissão de tela com áudio. Roda como app desktop em Electron e também no navegador.</p>

<ul class="doc__stats">
  <li>5 componentes</li>
  <li>Desktop + Web</li>
  <li>WebRTC via SFU</li>
  <li>pt-BR · en-US</li>
</ul>

<h4>O que o app faz</h4>
<ul>
  <li>Cadastro por convite, sessões por dispositivo e recuperação de senha.</li>
  <li>Servidores, canais, cargos e permissões, mensagens, DMs e estado de leitura.</li>
  <li>Voz, câmera e <strong>transmissão de tela com áudio</strong>, com volume por usuário e supressão de ruído.</li>
  <li><strong>Sala de voz por proximidade:</strong> um mapa 2D isométrico onde o volume cai com a distância e cada voz vem do lado em que a pessoa está.</li>
  <li>Bots de música dentro dos canais de voz.</li>
  <li>Páginas de administração para usuários e releases, temas e dois idiomas.</li>
</ul>

<h4>A decisão de arquitetura</h4>
<p>A API <strong>nunca carrega mídia</strong>. Ela cuida de contas, servidores, mensagens e permissões, e só emite o token de acesso a cada sala. Áudio e vídeo vão direto por WebRTC para um serviço de mídia separado, em instância própria. Cada parte escala e cai sozinha: um pico de voz não afeta o chat, e um deploy da API não derruba uma chamada.</p>

<h4>Entrega</h4>
<p>Instaladores para Windows e macOS gerados no CI, com <strong>atualização automática</strong>. Erros, logs, métricas e traces vão para o Atalog, a minha plataforma de observabilidade.</p>`,
        en: `
<p class="doc__lede">A private, invite-only communication app for a group of friends: servers with roles and permissions, text and voice channels, camera and screen sharing with audio. It runs as an Electron desktop app and in the browser.</p>

<ul class="doc__stats">
  <li>5 components</li>
  <li>Desktop + Web</li>
  <li>WebRTC via SFU</li>
  <li>pt-BR · en-US</li>
</ul>

<h4>What the app does</h4>
<ul>
  <li>Invite-only sign-up, per-device sessions and password recovery.</li>
  <li>Servers, channels, roles and permissions, messages, DMs and read states.</li>
  <li>Voice, camera and <strong>screen sharing with audio</strong>, with per-user volume and noise suppression.</li>
  <li><strong>Proximity voice room:</strong> a 2D isometric map where volume falls off with distance and each voice comes from the side the person is on.</li>
  <li>Music bots inside voice channels.</li>
  <li>Admin pages for users and releases, themes and two languages.</li>
</ul>

<h4>The architecture call</h4>
<p>The API <strong>never carries media</strong>. It handles accounts, servers, messages and permissions, and only issues the access token for each room. Audio and video go straight over WebRTC to a separate media service on its own instance. Each part scales and fails on its own: a voice spike doesn't touch chat, and an API deploy doesn't drop a call.</p>

<h4>Delivery</h4>
<p>Windows and macOS installers built in CI, with <strong>automatic updates</strong>. Errors, logs, metrics and traces go to Atalog, my own observability platform.</p>`,
      },
      technical: {
        pt: `
<p class="doc__lede">Cinco componentes: cliente desktop em Electron, portal web, API em .NET 10, serviço de mídia LiveKit e bot de música em Go, com tipos, traduções e tokens de design compartilhados entre os clientes.</p>

<h4>Como as partes conversam</h4>
<ul>
  <li><strong>REST</strong> para comandos, com envelope único (<code>isSuccess</code>, <code>code</code>, <code>message</code>, <code>data</code>).</li>
  <li><strong>SignalR</strong> sobre WebSocket para eventos em tempo real: mensagens, presença, estado de voz.</li>
  <li><strong>WebRTC</strong> para mídia, via um SFU <strong>LiveKit</strong> self-hosted com TURN, atrás de um proxy L4 do Caddy. A API emite tokens LiveKit com escopo de sala e recebe os webhooks do LiveKit.</li>
  <li>A API manda comandos ao bot por HTTP interno com segredo compartilhado, e o bot publica nas salas do LiveKit.</li>
</ul>

<h4>Componentes</h4>
<ul>
  <li><strong>API:</strong> ASP.NET Core em camadas (Api, Application, Domain, Infra.Data, IoC, Workers), EF Core + Npgsql sobre Postgres 17, Identity + JWT, Hangfire, HybridCache, S3 e SES.</li>
  <li><strong>Desktop:</strong> Electron 44 + electron-vite, React 19, TypeScript, Tailwind v4 e Radix, livekit-client, electron-updater e supressão de ruído no próprio cliente.</li>
  <li><strong>Captura de áudio nativa:</strong> um executável .NET enxuto que usa WASAPI process loopback para <strong>incluir ou excluir o áudio de um app específico</strong> na transmissão de tela.</li>
  <li><strong>Bot de música em Go:</strong> livekit server-sdk-go e pion/webrtc, um actor por bot, ffmpeg convertendo para Opus em tempo real.</li>
</ul>

<h4>Problemas resolvidos</h4>
<ul>
  <li><strong>Áudio espacial:</strong> volume cheio até 1 tile e silêncio a partir de 4,5, mais pan estéreo pela posição. As posições trafegam pelo data channel do LiveKit em mensagens de até 256 bytes: lossy para movimento, reliable para interações.</li>
  <li><strong>Bloqueio de IP de nuvem:</strong> o YouTube bloqueia IPs de datacenter. Quem pede a música baixa o áudio no desktop, pela conexão de casa, e sobe para um cache de 24 h na API. O bot só faz o streaming.</li>
  <li><strong>Sessão segura:</strong> refresh token rotaciona dentro da sessão do dispositivo, e o reuso de um token antigo revoga a sessão inteira. Na web, o cookie é HttpOnly e SameSite=Strict, com header anti-CSRF e checagem de Origin.</li>
</ul>

<h4>Infraestrutura e entrega</h4>
<ul>
  <li>API, Postgres, bot e Caddy em Docker Compose no <strong>AWS Lightsail</strong>. LiveKit em instância própria. Portal no AWS Amplify.</li>
  <li>Imagens no GHCR com deploy por GitHub Actions via SSH.</li>
  <li>Instaladores NSIS (Windows) e DMG universal (macOS) gerados no CI e servidos por S3 + CloudFront, que também é a origem do auto-update.</li>
  <li>O CI checa build, pacotes vulneráveis, gofmt, e strings e cores fixas no código.</li>
</ul>`,
        en: `
<p class="doc__lede">Five components: an Electron desktop client, a web portal, a .NET 10 API, a LiveKit media service and a Go music bot, with types, translations and design tokens shared across the clients.</p>

<h4>How the parts talk</h4>
<ul>
  <li><strong>REST</strong> for commands, with a single envelope (<code>isSuccess</code>, <code>code</code>, <code>message</code>, <code>data</code>).</li>
  <li><strong>SignalR</strong> over WebSocket for real-time events: messages, presence, voice state.</li>
  <li><strong>WebRTC</strong> for media, through a self-hosted <strong>LiveKit</strong> SFU with TURN, behind a Caddy L4 proxy. The API issues room-scoped LiveKit tokens and receives LiveKit's webhooks.</li>
  <li>The API sends commands to the bot over internal HTTP with a shared secret, and the bot publishes into LiveKit rooms.</li>
</ul>

<h4>Components</h4>
<ul>
  <li><strong>API:</strong> layered ASP.NET Core (Api, Application, Domain, Infra.Data, IoC, Workers), EF Core + Npgsql on Postgres 17, Identity + JWT, Hangfire, HybridCache, S3 and SES.</li>
  <li><strong>Desktop:</strong> Electron 44 + electron-vite, React 19, TypeScript, Tailwind v4 and Radix, livekit-client, electron-updater and client-side noise suppression.</li>
  <li><strong>Native audio capture:</strong> a lean .NET executable using WASAPI process loopback to <strong>include or exclude a specific app's audio</strong> in a screen share.</li>
  <li><strong>Go music bot:</strong> livekit server-sdk-go and pion/webrtc, one actor per bot, ffmpeg converting to Opus in real time.</li>
</ul>

<h4>Problems solved</h4>
<ul>
  <li><strong>Spatial audio:</strong> full volume up to 1 tile and silence from 4.5, plus stereo pan by position. Positions travel over LiveKit's data channel in messages of up to 256 bytes: lossy for movement, reliable for interactions.</li>
  <li><strong>Cloud IP blocking:</strong> YouTube blocks datacenter IPs. Whoever requests the song downloads the audio on their desktop, over their home connection, and uploads it to a 24 h cache on the API. The bot only streams it.</li>
  <li><strong>Secure sessions:</strong> the refresh token rotates within the device session, and reusing an old token revokes the whole session. On the web, the cookie is HttpOnly and SameSite=Strict, with an anti-CSRF header and Origin checks.</li>
</ul>

<h4>Infrastructure and delivery</h4>
<ul>
  <li>API, Postgres, bot and Caddy on Docker Compose on <strong>AWS Lightsail</strong>. LiveKit on its own instance. Portal on AWS Amplify.</li>
  <li>Images on GHCR, deployed by GitHub Actions over SSH.</li>
  <li>NSIS (Windows) and universal DMG (macOS) installers built in CI and served from S3 + CloudFront, which is also the auto-update source.</li>
  <li>CI checks the build, vulnerable packages, gofmt, and hardcoded strings and colors.</li>
</ul>`,
      },
    },
  };

  let currentLang = 'pt';
  let activeMilestone = MILESTONES.length - 1; // começa no mais recente
  let openProject = null;

  const langButtons = [...document.querySelectorAll('.lang__btn')];

  function applyLang(lang) {
    currentLang = I18N[lang] ? lang : 'pt';
    const dict = I18N[currentLang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key] != null) el.setAttribute('aria-label', dict[key]);
    });
    root.lang = currentLang === 'en' ? 'en' : 'pt-BR';
    langButtons.forEach((b) => b.classList.toggle('is-active', b.dataset.lang === currentLang));
    try { localStorage.setItem('lang', currentLang); } catch (_) {}
    renderTimeline();
    if (openProject) renderProject(openProject);
  }

  /* ---------------- trajetória: render da curva + nós ---------------- */
  function samplePath(path, count) {
    const len = path.getTotalLength();
    const vb = path.ownerSVGElement.viewBox.baseVal;
    const pad = 0.06; // margem nas pontas
    const out = [];
    for (let i = 0; i < count; i++) {
      const t = count === 1 ? 0.5 : pad + ((1 - 2 * pad) * i) / (count - 1);
      const p = path.getPointAtLength(len * t);
      out.push({ x: (p.x / vb.width) * 100, y: (p.y / vb.height) * 100 });
    }
    return out;
  }

  function selectMilestone(i) {
    activeMilestone = i;
    const m = MILESTONES[i];
    const detail = document.getElementById('detail');
    if (!detail) return;
    detail.querySelector('.detail__when').textContent = m.when[currentLang];
    detail.querySelector('.detail__role').textContent = m.role[currentLang];
    detail.querySelector('.detail__org').textContent = m.org[currentLang];
    detail.querySelector('.detail__text').textContent = m.text[currentLang];
    // reinicia a animação do painel
    const inner = detail.querySelector('.detail__inner');
    inner.querySelectorAll('*').forEach((el) => {
      el.style.animation = 'none'; void el.offsetWidth; el.style.animation = '';
    });
    document.querySelectorAll('.node').forEach((n, idx) => {
      n.classList.toggle('is-active', idx === i);
      n.setAttribute('aria-expanded', idx === i ? 'true' : 'false');
    });
  }

  function renderTimeline() {
    const nodesWrap = document.getElementById('nodes');
    const path = document.getElementById('curvePath');
    if (!nodesWrap || !path) return;
    const pos = samplePath(path, MILESTONES.length);
    nodesWrap.innerHTML = MILESTONES.map((m, i) => `
      <button type="button" class="node${i === activeMilestone ? ' is-active' : ''}"
              style="left:${pos[i].x}%;top:${pos[i].y}%"
              aria-expanded="${i === activeMilestone}"
              aria-label="${m.role[currentLang]} — ${m.label}">
        <span class="node__badge">
          ${m.logo ? `<img class="node__logo" src="${m.logo}" alt="" onerror="this.classList.add('is-missing')" />` : ''}
          <span class="node__initials mono">${m.initials || ''}</span>
        </span>
        <span class="node__label">${m.label}</span>
        <span class="node__when">${m.when[currentLang]}</span>
      </button>`).join('');
    nodesWrap.querySelectorAll('.node').forEach((btn, i) =>
      btn.addEventListener('click', () => selectMilestone(i))
    );
    selectMilestone(activeMilestone);
  }

  langButtons.forEach((b) =>
    b.addEventListener('click', () => applyLang(b.dataset.lang))
  );

  let savedLang = 'pt';
  try { savedLang = localStorage.getItem('lang') || 'pt'; } catch (_) {}
  if (savedLang !== 'pt') applyLang(savedLang); // PT já é o padrão no HTML
  else applyLang('pt');

  /* ---------------- tema claro/escuro ---------------- */
  const themeBtn = document.getElementById('theme-toggle');
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (_) {}
  }
  let savedTheme = 'light';
  try { savedTheme = localStorage.getItem('theme') || 'light'; } catch (_) {}
  applyTheme(savedTheme);
  if (themeBtn) {
    themeBtn.addEventListener('click', () =>
      applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')
    );
  }

  /* ---------------- especificações (expansível) ---------------- */
  const specSection = document.getElementById('especificacoes');
  const specToggle = document.getElementById('specToggle');
  if (specSection && specToggle) {
    specToggle.addEventListener('click', () => {
      const open = specSection.classList.toggle('spec--open');
      specToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---------------- especificação de projeto (overlay) ---------------- */
  const projOverlay = document.getElementById('projOverlay');
  let lastFocused = null;

  function renderProject(id) {
    const spec = PROJECT_SPECS[id];
    if (!spec || !projOverlay) return;
    document.getElementById('projEyebrow').textContent = spec.eyebrow[currentLang];
    document.getElementById('projTitle').textContent = spec.title;
    document.getElementById('projTags').textContent = spec.tags[currentLang];
    document.getElementById('projSummaryBody').innerHTML = spec.summary[currentLang];
    document.getElementById('projTechnicalBody').innerHTML = spec.technical[currentLang];
  }

  function setAccordion(acc, open) {
    acc.classList.toggle('is-open', open);
    acc.querySelector('.acc__head').setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function openProjectSpec(id) {
    if (!PROJECT_SPECS[id] || !projOverlay) return;
    lastFocused = document.activeElement;
    openProject = id;
    renderProject(id);
    projOverlay.querySelectorAll('[data-acc]').forEach((acc) => setAccordion(acc, false));
    projOverlay.hidden = false;
    document.body.classList.add('is-locked');
    requestAnimationFrame(() => projOverlay.classList.add('is-open'));
    projOverlay.querySelector('.proj__close').focus();
  }

  function closeProjectSpec() {
    if (!projOverlay || projOverlay.hidden) return;
    openProject = null;
    projOverlay.classList.remove('is-open');
    document.body.classList.remove('is-locked');
    const hide = () => { projOverlay.hidden = true; projOverlay.querySelector('.proj__body').scrollTop = 0; };
    if (reduceMotion) hide();
    else setTimeout(hide, 420);
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll('[data-project]').forEach((btn) =>
    btn.addEventListener('click', () => openProjectSpec(btn.dataset.project))
  );

  if (projOverlay) {
    projOverlay.querySelectorAll('[data-proj-close]').forEach((el) =>
      el.addEventListener('click', closeProjectSpec)
    );
    projOverlay.querySelectorAll('[data-acc] .acc__head').forEach((head) =>
      head.addEventListener('click', () => {
        const acc = head.closest('[data-acc]');
        setAccordion(acc, !acc.classList.contains('is-open'));
      })
    );
    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape') closeProjectSpec();
    });
  }

  /* ---------------- ano no footer ---------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- relógio UTC (HUD) ---------------- */
  const clock = document.getElementById('utc-clock');
  if (clock) {
    const tick = () => { clock.textContent = new Date().toISOString().slice(11, 19); };
    tick();
    setInterval(tick, 1000);
  }

  /* ---------------- boot do hero ---------------- */
  const bootEls = [...document.querySelectorAll('[data-boot]')];
  bootEls.forEach((el) => el.style.setProperty('--boot-i', Number(el.dataset.delay || 0)));
  requestAnimationFrame(() =>
    requestAnimationFrame(() => bootEls.forEach((el) => el.classList.add('is-in')))
  );

  /* ---------------- reveals no scroll ---------------- */
  const revealEls = [...document.querySelectorAll('.reveal:not([data-boot])')];
  const animatable = [
    ...revealEls,
    ...document.querySelectorAll('.work__title'),
  ];

  /* desenha a curva da trajetória ao entrar na tela */
  function setupCurveDraw() {
    const path = document.getElementById('curvePath');
    if (!path) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      path.classList.add('curve-path--draw');
      return;
    }
    const len = path.getTotalLength();
    path.classList.add('curve-path--draw');
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { path.style.strokeDashoffset = '0'; obs.disconnect(); }
      });
    }, { threshold: 0.35 });
    io.observe(document.getElementById('curve'));
  }
  setupCurveDraw();

  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.15 }
    );
    animatable.forEach((el) => io.observe(el));

    /* animação escalonada dos cards de trabalho */
    const cards = [...document.querySelectorAll('.work-card')];
    const workIO = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          cards.forEach((card, i) => {
            setTimeout(() => card.classList.add('is-in'), i * 130);
          });
          obs.disconnect();
        });
      },
      { threshold: 0.2 }
    );
    if (cards.length) workIO.observe(cards[0]);
  } else {
    animatable.forEach((el) => el.classList.add('is-in'));
    document.querySelectorAll('.work-card').forEach((el) => el.classList.add('is-in'));
  }

  /* ---------------- scroll-spy (rail) ---------------- */
  const dots = [...document.querySelectorAll('.rail__dot')];
  const sections = dots.map((d) => document.querySelector(d.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = '#' + e.target.id;
            dots.forEach((d) => d.classList.toggle('is-active', d.getAttribute('href') === id));
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------------- rolagem suave dos dots ---------------- */
  dots.forEach((dot) => {
    dot.addEventListener('click', (ev) => {
      const target = document.querySelector(dot.getAttribute('href'));
      if (!target) return;
      ev.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    });
  });
})();
