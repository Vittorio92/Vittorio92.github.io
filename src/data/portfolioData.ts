export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  githubUrl: string;
  liveUrl?: string;
  language: string;
  tags: string[];
  featured: boolean;
  category: 'web' | 'fullstack' | 'security' | 'ai' | 'tool';
}

export const personalData = {
  name: "Vittorio Gallicchio",
  username: "Vittorio92",
  title: "Software Engineer & Cybersecurity Specialist",
  subtitle: "Laureato in Ingegneria Informatica (UNICAL) • Studente Magistrale in Cybersecurity",
  bio: "Ingegnere Informatico triennale laureato presso l'Università della Calabria (UNICAL), attualmente iscritto alla Laurea Magistrale con curriculum in Cybersecurity. Appassionato di sviluppo software e sicurezza dei sistemi.",
  location: "Italia",
  email: "gallicchiovittorio01@gmail.com",
  github: "https://github.com/Vittorio92",
  linkedin: "https://it.linkedin.com/in/vittorio-gallicchio-b613731b9",
  avatarUrl: "/profile.jpg",
  cvUrl: "/CV_VittorioGallicchio.pdf"
};

export const projectsData: Project[] = [
  {
    id: "ecommerce-iam",
    title: "Progetto Piattaforme Web",
    description: "E-commerce full-stack con autenticazione e autorizzazione federate: backend Spring Boot configurato come OAuth 2.0 Resource Server, con le identità gestite da Keycloak.",
    longDescription: "Piattaforma e-commerce realizzata per l'esame di Piattaforme Web. Il backend REST in Spring Boot 3.1 è configurato come OAuth 2.0 Resource Server: valida i token JWT tramite l'endpoint JWKS di Keycloak e applica un controllo degli accessi basato sui ruoli di realm (RBAC), attraverso un converter custom che traduce il JWT in un authentication token di Spring Security. Il frontend Angular 16 si integra via OpenID Connect con keycloak-angular e angular-oauth2-oidc, delegando all'Identity Provider l'intera gestione della sessione. Persistenza su MySQL con Spring Data JPA e Hibernate.",
    githubUrl: "https://github.com/Vittorio92/progettoPiattaformeWeb",
    language: "Java",
    tags: ["Java", "Spring Boot", "Spring Security", "OAuth 2.0", "Keycloak", "JWT", "Angular", "MySQL"],
    featured: true,
    category: "fullstack"
  },
  {
    id: "proof-of-time",
    title: "Progetto Sistemi Informativi",
    description: "Proof of Time: piattaforma anticontraffazione per orologi di lusso, che àncora l'identità fisica del bene a una blockchain permissioned.",
    longDescription: "Studio di fattibilità di una piattaforma per garantire autenticità, tracciabilità e trasparenza nel mercato degli orologi di lusso. Il sistema integra tecnologie di identificazione univoca del bene fisico — PUF, RFID, NFC e QR code — con una blockchain permissioned, così da registrare in modo immutabile ogni evento significativo del ciclo di vita del prodotto: produzione, distribuzione, vendita, riparazione, manutenzione e passaggi di proprietà. L'obiettivo è ridurre la contraffazione e rendere verificabile il mercato dell'usato, con interfacce dedicate a produttori, rivenditori e clienti finali.",
    githubUrl: "https://github.com/Vittorio92/ProgettoSistemiInformativi",
    language: "Docs",
    tags: ["Blockchain permissioned", "PUF", "RFID", "NFC", "Tracciabilità", "Anticontraffazione"],
    featured: true,
    category: "security"
  },
  {
    id: "mlops-car-evaluation",
    title: "Progetto Sistemi Distribuiti e Cloud Computing",
    description: "Pipeline MLOps serverless su Microsoft Azure: ogni fase del flusso di Machine Learning è isolata in una Azure Function innescata dagli eventi dello storage.",
    longDescription: "Pipeline di Machine Learning completamente automatizzata e event-driven, costruita sui servizi cloud di Microsoft Azure. Il caricamento del dataset su Azure Blob Storage innesca una funzione serverless che esegue il preprocessing e l'encoding delle feature categoriche; una seconda funzione addestra un classificatore Random Forest e ne serializza il modello; una terza espone un endpoint HTTP per l'inferenza in tempo reale. Ogni fase è isolata in una Azure Function (FaaS), così da poter scalare in modo indipendente e mantenere i componenti disaccoppiati. Realizzato per il corso di Sistemi Distribuiti e Cloud Computing della magistrale.",
    githubUrl: "https://github.com/Vittorio92/MLOps-Car-Evaluation",
    language: "Python",
    tags: ["Python", "Azure Functions", "Azure Blob Storage", "scikit-learn", "MLOps", "Serverless"],
    featured: true,
    category: "ai"
  },
  {
    id: "pdf-data-extraction",
    title: "Tesi: Estrazione di dati da documenti PDF: un approccio basato su Python e MongoDB",
    description: "Applicazione desktop per estrarre testo, tabelle e immagini da aree selezionabili di documenti PDF, con regole riutilizzabili salvate su MongoDB.",
    longDescription: "Progetto sviluppato per la tesi di laurea triennale: «Estrazione di dati da documenti PDF: un approccio basato su Python e MongoDB». L'applicazione permette di selezionare visivamente delle aree su una pagina PDF ed estrarne il contenuto — testo, tabelle o immagini — appoggiandosi a PyMuPDF. Le regole di estrazione vengono salvate su MongoDB e possono essere riapplicate automaticamente a documenti che condividono lo stesso layout, rendendo ripetibile l'elaborazione di flussi documentali omogenei come le fatture. Interfaccia grafica realizzata con customtkinter.",
    githubUrl: "https://github.com/Vittorio92/Tesi",
    language: "Python",
    tags: ["Python", "PyMuPDF", "MongoDB", "customtkinter"],
    featured: false,
    category: "tool"
  },
  {
    id: "kenken-java",
    title: "KenKen Project",
    description: "Implementazione in Java del gioco logico KenKen, costruita attorno all'applicazione sistematica dei design pattern.",
    longDescription: "Sviluppo del gioco di logica KenKen in Java, con l'obiettivo didattico di applicare i design pattern alla progettazione di un'applicazione completa: generazione della griglia, validazione dei vincoli aritmetici sulle gabbie e gestione dell'interazione di gioco.",
    githubUrl: "https://github.com/Vittorio92/KenKenProject",
    language: "Java",
    tags: ["Java", "Design Pattern", "OOP"],
    featured: false,
    category: "tool"
  },
  {
    id: "portfolio-nextjs",
    title: "Vittorio92.github.io",
    description: "Sito portfolio personale sviluppato con Next.js 15, React e TypeScript, con esportazione statica e deploy automatico su GitHub Pages.",
    longDescription: "Portfolio personale costruito con Next.js 15 in modalità static export. Design system basato su variabili CSS, schede interattive per i repository GitHub, sezione contatti e pipeline di deploy automatizzata con GitHub Actions verso GitHub Pages.",
    githubUrl: "https://github.com/Vittorio92/Vittorio92.github.io",
    liveUrl: "https://vittorio92.github.io",
    language: "TypeScript",
    tags: ["Next.js", "React", "TypeScript", "GitHub Actions", "GitHub Pages"],
    featured: false,
    category: "web"
  }
];



