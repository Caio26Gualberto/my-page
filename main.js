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
      'idx.spec': '03 — especificações',
      'spec.title': 'Minhas<br>especificações',
      'spec.intro': 'O detalhe técnico completo — abra se quiser ver a fundo. 83 competências, do código à nuvem.',
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
      'work.byline': 'construído & mantido por mim',
      'proj.summaryTitle': 'Visão geral',
      'proj.technicalTitle': 'Especificação técnica',
      'proj.close': 'Fechar especificação',
      'work.polaris': 'Construí do zero, sozinho, e mantenho — do backend à interface.',
      'work.aurum': 'Construí do zero, sozinho, e mantenho — foco em experiência e dados.',
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
      'idx.spec': '03 — specs',
      'spec.title': 'My<br>specifications',
      'spec.intro': 'The full technical detail — open it if you want to go deep. 83 skills, from code to cloud.',
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
      'work.byline': 'built & maintained by me',
      'proj.summaryTitle': 'Overview',
      'proj.technicalTitle': 'Technical specification',
      'proj.close': 'Close specification',
      'work.polaris': 'Built from scratch, solo, and maintained by me — backend to interface.',
      'work.aurum': 'Built from scratch, solo, and maintained by me — focused on experience and data.',
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
