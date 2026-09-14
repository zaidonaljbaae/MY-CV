/* Simple EN / PT language switcher for the resume site.
   Every element carrying data-i18n gets its innerHTML replaced;
   every element carrying data-i18n-placeholder gets its placeholder replaced. */
(function () {
  const i18n = {
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.resume": "Resume",
      "nav.project": "Projects",
      "nav.contact": "Contact",

      "hero.role": "Web Developer &middot; Frontend &amp; API Integration",

      "about.title": "About",
      "about.bio": "Web Developer with hands-on experience building and maintaining responsive, easy-to-use web applications. Strong in HTML, CSS, JavaScript and React.js, with practical experience integrating and consuming backend REST APIs and managing the data exchange between frontend and backend. I write clean, maintainable, well-documented code focused on performance, scalability and cross-browser compatibility, and work effectively and independently in remote, distributed teams. My background in Computer &amp; Automation Engineering &mdash; with hands-on experience in Arduino, sensors, PLCs and embedded systems &mdash; gives me a solid foundation in hardware-software integration, control systems and problem solving. I also work with DevOps and cloud platforms such as AWS, Oracle Cloud and Azure to deploy, monitor and scale applications. Fluent English; intermediate Portuguese; native Arabic.",
      "about.subtitle": "Full-Stack &amp; Frontend Developer",
      "about.looking": "I'm currently focused on frontend development and API integration, looking for new opportunities to apply my skills in React.js, backend integration and cloud deployment across AWS, Oracle Cloud and Azure, while continuing to grow as a well-rounded full-stack engineer.",
      "about.label.birthday": "Birthday:",
      "about.label.nationality": "Nationality:",
      "about.value.nationality": "Syrian",
      "about.label.phone": "Phone:",
      "about.label.city": "City:",
      "about.label.email": "E-Mail:",
      "about.label.github": "GitHub:",

      "skills.title": "Skills",
      "skills.soft.title": "Soft Skills:",
      "skills.soft.1": "- Teamwork / Team Planning",
      "skills.soft.2": "- Adaptability",
      "skills.soft.3": "- Clear communication",
      "skills.soft.4": "- Problem solving",
      "skills.soft.5": "- Attention to detail",
      "skills.tech.title": "Technical Skills:",
      "skills.group.frontend": "Frontend",
      "skills.group.backend": "Backend &amp; APIs",
      "skills.group.cloud": "Cloud &amp; DevOps",
      "skills.group.robotics": "Robotics &amp; Electronics",
      "skills.group.automation": "Industrial Automation",
      "skills.group.tools": "Tools &amp; OS",

      "resume.title": "Resume",
      "resume.education": "Education",
      "resume.edu1.title": "Computer &amp; Automation Engineering (Incomplete)",
      "resume.edu1.specialty": "Specialty: Control and Automation Engineering.",
      "resume.edu1.desc": "Coursework completed through the final year; not concluded due to international relocation. Solid foundation in embedded systems, control system design and industrial automation.",
      "resume.edu2.title": "Network Infrastructure Deployment &amp; Administration",
      "resume.edu2.desc": "402-hour program covering wired/wireless network planning and deployment, routing &amp; switching, LAN/WAN configuration, systems security and server maintenance.",
      "resume.certs": "Certifications &amp; Courses",
      "resume.cert1.desc": "Full-stack fundamentals: HTML, CSS, JavaScript, Node.js, databases and complete application builds.",
      "resume.cert2.title": "Basic PLC &amp; Ladder Programming",
      "resume.cert2.desc": "Ladder Logic fundamentals: outputs, logic gates, SET/RST, timers, counters, control structures and PWM, applied to practical examples.",
      "resume.cert3.title": "Technical Support Training",
      "resume.cert3.desc": "Hardware troubleshooting, network/internet connectivity issues, and CCTV (DVR/NVR) system management.",
      "resume.cert4.title": "Computer Maintenance Training",
      "resume.cert4.desc": "Computer assembly, software installation, OS configuration, and hardware/software troubleshooting.",
      "resume.cert5.title": "General Baccalaureate (Scientific Track)",
      "resume.cert5.desc": "Scientific track covering mathematics, physics and chemistry. Score: 89.38%.",
      "resume.languages": "Languages",
      "resume.lang.arabic": "Arabic",
      "resume.lang.native": "Native",
      "resume.lang.english": "English",
      "resume.lang.fluent": "Fluent",
      "resume.lang.portuguese": "Portuguese",
      "resume.lang.intermediate": "Intermediate",
      "resume.experience": "Professional Experience",
      "resume.job1.title": "Full-Stack Web Developer",
      "resume.job1.location": "Remote, São Paulo, Brazil",
      "resume.job1.present": "Present",
      "resume.job1.b1": "Build and maintain responsive, user-friendly web applications with React.js (Hooks, Context API, Refs) and Material UI, ensuring cross-browser compatibility.",
      "resume.job1.b2": "Manage application state with Redux and build complex forms with React Hook Form; integrate the frontend with AWS Amplify for file storage and user authentication.",
      "resume.job1.b3": "Develop and maintain scalable, secure backend services with Python (Flask, SQLAlchemy), integrating databases and processing data with Pandas and NumPy.",
      "resume.job1.b4": "Work with a microservices architecture, implementing RESTful APIs through API Gateway and AWS Lambda triggers, including internal automations such as email reading/processing systems and Windows RPA bots.",
      "resume.job1.b5": "Configure and manage AWS infrastructure (EC2, S3, CloudFront, Elastic Beanstalk) with Docker containers and CI/CD pipelines, collaborating with cross-functional teams to ship robust, scalable solutions.",
      "resume.job2.title": "Backend Developer",
      "resume.job2.b1": "Developed and consumed REST APIs with PHP (Laravel) and JavaScript, managing web/API routes, middlewares and MySQL integration.",
      "resume.job2.b2": "Built responsive, cross-browser, user-friendly interfaces with Bootstrap.",
      "resume.job2.b3": "Used Composer packages (e.g. Spatie) to add roles/permissions and speed up delivery.",
      "resume.job3.title": "Technical Support",
      "resume.job3.b1": "Knowledge in various aspects of Information Technology, including troubleshooting computer hardware, internet issues, and network components such as cables, routers, and switches.",
      "resume.job3.b2": "Skills in managing and maintaining CCTV camera systems, including DVR and NVR configurations.",
      "resume.job4.title": "Computer Maintenance",
      "resume.job4.b1": "Proficient in setting up computers, handling software installations, and configuring operating systems.",
      "resume.job4.b2": "Hardware and software issue solver, familiar with various power supply units and essential components.",
      "resume.job5.title": "Industrial Controls",
      "resume.job5.b1": "Proficient in working with classic controller systems, adeptly managing contactors, relays, sensors, and timers.",
      "resume.job5.b2": "Skilled in PLC with expertise in Ladder Programming Logic and industrial control network management.",

      "projects.title": "Projects",
      "projects.group.web": "Web Development &amp; Cloud",
      "projects.group.robotics": "Robotics, Electronics &amp; Computer Vision",
      "projects.link.live": "Live Site",

      "projects.solar.title": "Alhadi Solar &mdash; Company Website<br>2025",
      "projects.solar.mission": "Mission: Build and deploy a responsive, multi-page company website with content management and customer contact tools.",
      "projects.solar.desc": "Responsive, multi-page web application with a content management panel, dark mode and WhatsApp integration; built with a Python (Flask) backend and deployed on Render.",

      "projects.aws.title": "AWS Microservices Template<br>2025",
      "projects.aws.mission": "Mission: Production-ready starter for building microservices on AWS using serverless and containerized approaches.",
      "projects.aws.desc": "REST API template built for production, combining AWS Lambda + API Gateway with ECS Fargate, including RDS and S3 integration; deployed via the Serverless Framework and AWS CDK, with a CI/CD build pipeline and SonarQube code quality checks.",

      "projects.finance.title": "Personal Finance Manager<br>2025",
      "projects.finance.mission": "Mission: Desktop application to manage bank accounts and track income and expenses securely.",
      "projects.finance.desc": "Desktop financial management tool with account management, color-coded transaction tracking, dashboard analytics and CSV import/export. Secured with PBKDF2 password hashing and packaged as a standalone executable with PyInstaller.",

      "projects.audio.title": "Audio Transcription Pipeline<br>2024",
      "projects.audio.mission": "Mission: Automate audio preparation and transcription for long recordings.",
      "projects.audio.desc": "Converts AAC audio to standardized WAV (16 kHz / 16-bit), splits long recordings into chunks for better accuracy, and transcribes the content to Portuguese text using speech recognition.",

      "projects.media.title": "Desktop Media Tools<br>2024",
      "projects.media.mission": "Mission: Simple desktop utilities for downloading and converting video/audio files.",
      "projects.media.desc": "Two lightweight desktop tools built on FFmpeg: a video downloader with live progress and size estimates, and a converter that turns video files into MP3, WAV, AAC, OGG, FLAC, M4A or OPUS. Packaged as standalone Windows executables.",

      "projects.pdf.title": "PDF Analyzer<br>2023",
      "projects.pdf.mission": "Mission: Extract structured data and images from PDF files automatically.",
      "projects.pdf.desc": "Extracts text and embedded images from PDF files and applies regex pattern matching to locate specific data automatically.",

      "projects.memory.title": "Simon Memory Game<br>2023",
      "projects.memory.mission": "Mission: Recreate the classic Simon color-sequence memory game in the browser.",
      "projects.memory.desc": "Players repeat an increasingly long sequence of colors shown by the game, with button and sound feedback for each step.",

      "projects.robot.title": "Autonomous Robot (Arduino + Computer Vision)<br>2022",
      "projects.robot.mission": "Mission: Create an Arduino-controlled robot that navigates independently, avoiding obstacles using sensors and computer vision.",
      "projects.robot.desc": "Planned and designed the robot, specifying its type, size, and number of wheels; assembled motors, wheels and sensors around an Arduino board.<br>Wrote the control code for movement, speed/direction and sensor-based obstacle detection and avoidance (walls and objects).<br>Added computer-vision algorithms for environment recognition, then tested and tuned the robot for reliable, collision-free navigation.",

      "projects.chess.title": "Smart Chess Board (Arduino)<br>2022",
      "projects.chess.mission": "Mission: Build a chess board that automatically detects piece positions and tracks moves in real time.",
      "projects.chess.desc": "Each square has an LED/sensor that detects the presence of a piece; the Arduino reads the board state and streams it to a computer, which displays live piece movements in a graphical interface.",

      "projects.facematch.title": "Face Matching System<br>2023",
      "projects.facematch.mission": "Mission: Compare two faces and score how similar they are using facial landmarks.",
      "projects.facematch.desc": "Detects 68 facial landmarks with Dlib, crops and aligns the faces, visualizes structure with Delaunay triangulation, and computes an average landmark-distance similarity score.",

      "projects.facelogin.title": "Face Recognition Login<br>2023",
      "projects.facelogin.mission": "Mission: Develop a real-time face recognition system for login/attendance using Python.",
      "projects.facelogin.desc": "Detects and recognizes faces in real time from a webcam feed using a trained KNN classifier, with green/red visual feedback for recognized and unrecognized faces and optional attendance logging.",

      "projects.classify.title": "Image Classification (ResNet152V2)<br>2022",
      "projects.classify.mission": "Mission: Create a project to classify images using a convolutional neural network.",
      "projects.classify.desc": "Built a custom dataset and trained the model on it, then validated and tested it before wrapping it in a program block that classifies new photos.",
      "projects.note.private": "Private project &mdash; not published on GitHub.",

      "projects.chatbot.title": "Voice Chatbot<br>2022",
      "projects.chatbot.mission": "Mission: Build a chatbot with speech recognition and voice responses for natural interaction.",
      "projects.chatbot.desc": "Python chatbot using the Vosk speech-recognition model to listen and respond to the user by voice.",

      "contact.title": "Contact",
      "contact.email": "Email:",
      "contact.call": "Call:",
      "contact.form.name": "Your Name",
      "contact.form.email": "Your Email",
      "contact.form.subject": "Subject",
      "contact.form.message": "Message",
      "contact.form.loading": "Loading",
      "contact.form.sent": "Your message has been sent. Thank you!",
      "contact.form.submit": "Send Message",

      "footer.copyright": "Copyright",
      "footer.rights": "All Rights Reserved"
    },

    pt: {
      "nav.home": "Início",
      "nav.about": "Sobre",
      "nav.skills": "Habilidades",
      "nav.resume": "Currículo",
      "nav.project": "Projetos",
      "nav.contact": "Contato",

      "hero.role": "Desenvolvedor Web &middot; Frontend &amp; Integração de APIs",

      "about.title": "Sobre",
      "about.bio": "Desenvolvedor Web com experiência em construir e manter aplicações web responsivas e de fácil utilização. Forte em HTML, CSS, JavaScript e React.js, com experiência prática em integrar e consumir APIs REST de backend e gerenciar a troca de dados entre frontend e backend. Escrevo código limpo, manutenível e bem documentado, com foco em desempenho, escalabilidade e compatibilidade entre navegadores, e atuo de forma eficaz e independente em equipes remotas e distribuídas. Minha formação em Engenharia da Computação e Automação &mdash; com experiência prática em Arduino, sensores, CLPs e sistemas embarcados &mdash; me dá uma base sólida em integração hardware-software, sistemas de controle e resolução de problemas. Também trabalho com DevOps e plataformas de nuvem como AWS, Oracle Cloud e Azure para implantar, monitorar e escalar aplicações. Inglês fluente; português intermediário; árabe nativo.",
      "about.subtitle": "Desenvolvedor Full-Stack &amp; Frontend",
      "about.looking": "Atualmente estou focado em desenvolvimento frontend e integração de APIs, buscando novas oportunidades para aplicar minhas habilidades em React.js, integração com backend e implantação em nuvem na AWS, Oracle Cloud e Azure, continuando a crescer como um engenheiro full-stack completo.",
      "about.label.birthday": "Nascimento:",
      "about.label.nationality": "Nacionalidade:",
      "about.value.nationality": "Síria",
      "about.label.phone": "Telefone:",
      "about.label.city": "Cidade:",
      "about.label.email": "E-mail:",
      "about.label.github": "GitHub:",

      "skills.title": "Habilidades",
      "skills.soft.title": "Habilidades Comportamentais:",
      "skills.soft.1": "- Trabalho em equipe / Planejamento",
      "skills.soft.2": "- Adaptabilidade",
      "skills.soft.3": "- Comunicação clara",
      "skills.soft.4": "- Resolução de problemas",
      "skills.soft.5": "- Atenção aos detalhes",
      "skills.tech.title": "Habilidades Técnicas:",
      "skills.group.frontend": "Frontend",
      "skills.group.backend": "Backend &amp; APIs",
      "skills.group.cloud": "Cloud &amp; DevOps",
      "skills.group.robotics": "Robótica &amp; Eletrônica",
      "skills.group.automation": "Automação Industrial",
      "skills.group.tools": "Ferramentas &amp; SO",

      "resume.title": "Currículo",
      "resume.education": "Formação Acadêmica",
      "resume.edu1.title": "Engenharia da Computação e Automação (Incompleto)",
      "resume.edu1.specialty": "Especialidade: Engenharia de Controle e Automação.",
      "resume.edu1.desc": "Cursado até o último ano; não concluído devido a deslocamento internacional. Base sólida em sistemas embarcados, projeto de sistemas de controle e automação industrial.",
      "resume.edu2.title": "Implantação e Administração de Infraestrutura de Redes",
      "resume.edu2.desc": "Curso de 402 horas com foco no planejamento e implementação de redes cabeadas e sem fio, roteamento e switching, configuração de redes LAN/WAN, segurança de sistemas e manutenção de servidores.",
      "resume.certs": "Cursos &amp; Certificações",
      "resume.cert1.desc": "Fundamentos full-stack: HTML, CSS, JavaScript, Node.js, bancos de dados e construção de aplicações completas.",
      "resume.cert2.title": "CLP Básico e Programação Ladder",
      "resume.cert2.desc": "Fundamentos de Lógica Ladder: saídas, portas lógicas, SET/RST, temporizadores, contadores, estruturas de controle e PWM aplicados a exemplos práticos.",
      "resume.cert3.title": "Treinamento em Suporte Técnico",
      "resume.cert3.desc": "Diagnóstico de hardware, problemas de conectividade de rede/internet e gerenciamento de sistemas de CFTV (DVR/NVR).",
      "resume.cert4.title": "Treinamento em Manutenção de Computadores",
      "resume.cert4.desc": "Montagem de computadores, instalação de softwares, configuração de sistemas operacionais e resolução de problemas de hardware/software.",
      "resume.cert5.title": "Baccalauréat Général (Seção Científica)",
      "resume.cert5.desc": "Seção científica com matemática, física e química. Pontuação: 89,38%.",
      "resume.languages": "Idiomas",
      "resume.lang.arabic": "Árabe",
      "resume.lang.native": "Nativo",
      "resume.lang.english": "Inglês",
      "resume.lang.fluent": "Fluente",
      "resume.lang.portuguese": "Português",
      "resume.lang.intermediate": "Intermediário",
      "resume.experience": "Experiência Profissional",
      "resume.job1.title": "Desenvolvedor Web Full-Stack",
      "resume.job1.location": "Remoto, São Paulo, Brasil",
      "resume.job1.present": "Atual",
      "resume.job1.b1": "Construí e mantive aplicações web responsivas e de fácil utilização com React.js (Hooks, Context API, Refs) e Material UI, garantindo compatibilidade entre navegadores.",
      "resume.job1.b2": "Gerenciei o estado da aplicação com Redux e implementei formulários complexos com React Hook Form; integrei o frontend com AWS Amplify para armazenamento de arquivos e autenticação de usuários.",
      "resume.job1.b3": "Desenvolvi e mantive serviços de backend escaláveis e seguros com Python (Flask, SQLAlchemy), integrando bancos de dados e processando dados com Pandas e NumPy.",
      "resume.job1.b4": "Trabalhei com arquitetura de microsserviços, implementando APIs RESTful via API Gateway e triggers do AWS Lambda, incluindo automações internas como leitura/processamento de e-mails e bots RPA para Windows.",
      "resume.job1.b5": "Configurei e gerenciei infraestrutura AWS (EC2, S3, CloudFront, Elastic Beanstalk) com contêineres Docker e pipelines de CI/CD, colaborando com equipes multidisciplinares para entregar soluções robustas e escaláveis.",
      "resume.job2.title": "Desenvolvedor Backend",
      "resume.job2.b1": "Desenvolvi e consumi APIs REST com PHP (Laravel) e JavaScript; gerenciei rotas web/API, middlewares e integração com MySQL.",
      "resume.job2.b2": "Construí interfaces responsivas e amigáveis, compatíveis entre navegadores, com Bootstrap.",
      "resume.job2.b3": "Utilizei bibliotecas do Composer (ex.: Spatie) para adicionar papéis/permissões e acelerar a entrega.",
      "resume.job3.title": "Suporte Técnico",
      "resume.job3.b1": "Conhecimento em diversos aspectos de TI, incluindo diagnóstico de hardware de computadores, problemas de internet e componentes de rede como cabos, roteadores e switches.",
      "resume.job3.b2": "Experiência em gerenciar e manter sistemas de câmeras CFTV (CCTV), incluindo configurações de DVR e NVR.",
      "resume.job4.title": "Manutenção de Computadores",
      "resume.job4.b1": "Proficiente em montar computadores, instalar softwares e configurar sistemas operacionais.",
      "resume.job4.b2": "Solucionador de problemas de hardware e software, incluindo fontes de alimentação e componentes essenciais.",
      "resume.job5.title": "Controles Industriais",
      "resume.job5.b1": "Proficiente em sistemas de controle clássicos, gerenciando contatores, relés, sensores e temporizadores.",
      "resume.job5.b2": "Habilidade em CLP com expertise em Programação Lógica Ladder e gerenciamento de redes de controle industrial.",

      "projects.title": "Projetos",
      "projects.group.web": "Desenvolvimento Web &amp; Cloud",
      "projects.group.robotics": "Robótica, Eletrônica &amp; Visão Computacional",
      "projects.link.live": "Site Online",

      "projects.solar.title": "Alhadi Solar &mdash; Site da Empresa<br>2025",
      "projects.solar.mission": "Missão: Construir e implantar um site multipágina e responsivo para a empresa, com gerenciamento de conteúdo e ferramentas de contato com o cliente.",
      "projects.solar.desc": "Aplicação web responsiva e multipágina com painel de gerenciamento de conteúdo, modo escuro e integração com WhatsApp; construída com backend em Python (Flask) e implantada na Render.",

      "projects.aws.title": "AWS Microservices Template<br>2025",
      "projects.aws.mission": "Missão: Template pronto para produção para construir microsserviços na AWS usando abordagens serverless e em contêineres.",
      "projects.aws.desc": "Template de API REST com foco em produção, combinando AWS Lambda + API Gateway com ECS Fargate, incluindo integração com RDS e S3; implantado via Serverless Framework e AWS CDK, com pipeline de CI/CD e verificação de qualidade de código com SonarQube.",

      "projects.finance.title": "Gerenciador de Finanças Pessoais<br>2025",
      "projects.finance.mission": "Missão: Aplicativo desktop para gerenciar contas bancárias e acompanhar receitas e despesas com segurança.",
      "projects.finance.desc": "Ferramenta desktop de gestão financeira com gerenciamento de contas, rastreamento de transações por cores, painel de análises e importação/exportação em CSV. Protegida com hash de senha PBKDF2 e empacotada como executável standalone com PyInstaller.",

      "projects.audio.title": "Pipeline de Transcrição de Áudio<br>2024",
      "projects.audio.mission": "Missão: Automatizar o preparo de áudio e a transcrição de gravações longas.",
      "projects.audio.desc": "Converte áudio AAC para WAV padronizado (16 kHz / 16-bit), divide gravações longas em blocos para melhorar a precisão e transcreve o conteúdo para texto em português usando reconhecimento de fala.",

      "projects.media.title": "Ferramentas Desktop de Mídia<br>2024",
      "projects.media.mission": "Missão: Utilitários desktop simples para baixar e converter arquivos de vídeo/áudio.",
      "projects.media.desc": "Duas ferramentas desktop leves construídas sobre o FFmpeg: um downloader de vídeos com progresso ao vivo e estimativa de tamanho, e um conversor que transforma vídeos em MP3, WAV, AAC, OGG, FLAC, M4A ou OPUS. Empacotadas como executáveis standalone para Windows.",

      "projects.pdf.title": "Analisador de PDF<br>2023",
      "projects.pdf.mission": "Missão: Extrair dados estruturados e imagens de arquivos PDF automaticamente.",
      "projects.pdf.desc": "Extrai texto e imagens embutidas de arquivos PDF e aplica correspondência de padrões com regex para localizar dados específicos automaticamente.",

      "projects.memory.title": "Jogo da Memória Simon<br>2023",
      "projects.memory.mission": "Missão: Recriar no navegador o clássico jogo de memória de sequência de cores Simon.",
      "projects.memory.desc": "Os jogadores repetem uma sequência de cores cada vez mais longa mostrada pelo jogo, com feedback visual nos botões e efeitos sonoros a cada etapa.",

      "projects.robot.title": "Robô Autônomo (Arduino + Visão Computacional)<br>2022",
      "projects.robot.mission": "Missão: Criar um robô controlado por Arduino que navega de forma independente, evitando obstáculos com sensores e visão computacional.",
      "projects.robot.desc": "Planejei e projetei o robô, definindo tipo, tamanho e número de rodas; montei motores, rodas e sensores em torno de uma placa Arduino.<br>Escrevi o código de controle para movimento, velocidade/direção e detecção e desvio de obstáculos via sensores (paredes e objetos).<br>Adicionei algoritmos de visão computacional para reconhecimento do ambiente, testando e ajustando o robô para uma navegação confiável e sem colisões.",

      "projects.chess.title": "Tabuleiro de Xadrez Inteligente (Arduino)<br>2022",
      "projects.chess.mission": "Missão: Construir um tabuleiro de xadrez que detecta automaticamente a posição das peças e rastreia os movimentos em tempo real.",
      "projects.chess.desc": "Cada casa possui um sensor/LED que detecta a presença de uma peça; o Arduino lê o estado do tabuleiro e o transmite para um computador, que exibe os movimentos das peças em tempo real em uma interface gráfica.",

      "projects.facematch.title": "Sistema de Comparação Facial<br>2023",
      "projects.facematch.mission": "Missão: Comparar dois rostos e calcular o quão semelhantes eles são usando landmarks faciais.",
      "projects.facematch.desc": "Detecta 68 landmarks faciais com Dlib, recorta e alinha os rostos, visualiza a estrutura com triangulação de Delaunay e calcula uma pontuação de similaridade pela distância média entre os landmarks.",

      "projects.facelogin.title": "Login com Reconhecimento Facial<br>2023",
      "projects.facelogin.mission": "Missão: Desenvolver um sistema de reconhecimento facial em tempo real para login/presença usando Python.",
      "projects.facelogin.desc": "Detecta e reconhece rostos em tempo real a partir da webcam usando um classificador KNN treinado, com indicação visual verde/vermelho para rostos reconhecidos e não reconhecidos, além de registro de presença opcional.",

      "projects.classify.title": "Classificação de Imagens (ResNet152V2)<br>2022",
      "projects.classify.mission": "Missão: Criar um projeto para classificar imagens usando uma rede neural convolucional.",
      "projects.classify.desc": "Criei um dataset próprio e treinei o modelo com ele, validei e testei, e por fim implementei um bloco no programa para classificar novas fotos.",
      "projects.note.private": "Projeto privado &mdash; não publicado no GitHub.",

      "projects.chatbot.title": "Chatbot por Voz<br>2022",
      "projects.chatbot.mission": "Missão: Construir um chatbot com reconhecimento de fala e resposta por voz para interação natural.",
      "projects.chatbot.desc": "Chatbot em Python utilizando o modelo de reconhecimento de fala Vosk para ouvir e responder ao usuário por voz.",

      "contact.title": "Contato",
      "contact.email": "Email:",
      "contact.call": "Ligar:",
      "contact.form.name": "Seu Nome",
      "contact.form.email": "Seu Email",
      "contact.form.subject": "Assunto",
      "contact.form.message": "Mensagem",
      "contact.form.loading": "Carregando",
      "contact.form.sent": "Sua mensagem foi enviada. Obrigado!",
      "contact.form.submit": "Enviar Mensagem",

      "footer.copyright": "Copyright",
      "footer.rights": "Todos os direitos reservados"
    }
  };

  function applyLang(lang) {
    if (!i18n[lang]) return;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (i18n[lang][key] !== undefined) {
        el.innerHTML = i18n[lang][key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-placeholder");
      if (i18n[lang][key] !== undefined) {
        el.setAttribute("placeholder", i18n[lang][key]);
      }
    });

    document.documentElement.lang = lang;

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    try {
      localStorage.setItem("cv_lang", lang);
    } catch (e) {}
  }

  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  let initialLang = "en";
  try {
    const saved = localStorage.getItem("cv_lang");
    if (saved) {
      initialLang = saved;
    } else if (navigator.language && navigator.language.toLowerCase().startsWith("pt")) {
      initialLang = "pt";
    }
  } catch (e) {}

  applyLang(initialLang);
})();
