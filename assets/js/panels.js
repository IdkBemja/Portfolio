// Cache para proyectos
let projectsCache = {};

$(document).ready(function() {
    const userLang = navigator.language || navigator.userLanguage;
    const isSpanish = userLang.toLowerCase().includes('es');


    home_panel(isSpanish);
    show_panel('panel-home');


    $('#boton-home').click(function() {
        hide_panels();
        clear_panels();
        home_panel(isSpanish);
        show_panel('panel-home');
    });

    $('#boton-projects').click(function() {
        hide_panels();
        clear_panels();
        projects_panel(isSpanish);
        show_panel('panel-projects');
    });
});

function hide_panels() {
    
    const panelsToHide = [
        "panel-home",
        "panel-projects"
    ];

    panelsToHide.forEach(panelId => {
        const panel = document.querySelector(`.${panelId}`);
        if (panel && panel.style.display !== 'none')  {
            panel.style.display = 'none';
        }
    });
}


function clear_panels() {
    const panelsToClear = [
        "panel-home",
        "panel-projects"
    ];

    panelsToClear.forEach(panelId => {
        const panel = document.querySelector(`.${panelId}`);
        if (panel) {
            panel.innerHTML = '';
        }
    })
}

function show_panel(panel) {
    const showPanels = document.getElementsByClassName(panel); 

    for (let i = 0; i < showPanels.length; i++) {
        const panelElement = showPanels[i]; 
        if (panelElement.style.display !== 'flex') {
            panelElement.style.display = 'flex';
        }
        // Aplica animación
        panelElement.classList.remove('fade-in');
        void panelElement.offsetWidth;
        panelElement.classList.add('fade-in');
    }
}

// Aplica la animación al mostrar un panel
function showPanel(panelSelector) {
    const panel = document.querySelector(panelSelector);
    panel.classList.remove('fade-in');
    void panel.offsetWidth;
    panel.classList.add('fade-in');
}

function animatePanel(panelSelector) {
    const panel = document.querySelector(panelSelector);
    if (!panel) return;
    panel.classList.remove('fade-in');
    void panel.offsetWidth;
    panel.classList.add('fade-in');
}

// Ejemplo de uso al cambiar de sección:
function showHomePanel() {
    animatePanel('.panel-home');
}

function showProjectsPanel() {
    animatePanel('.panel-projects');
}

function home_panel(isSpanish) {
    const HomePanel = document.querySelector('.panel-home');
    const homePanelHTML =  isSpanish ? `
        <div class="panel-home-container">
            <div class="panel-home-content">
                <div class="panel-home-header">
                    <div class="profile-photo-container">
                        <img src="assets/imgs/profile.jpeg" 
                             alt="Benjamin Mora Urra - Backend Developer" 
                             class="profile-photo"
                             loading="eager">
                        <div class="profile-status">
                            <i class="bi bi-circle-fill"></i> Disponible
                        </div>
                    </div>
                    <div class="profile-info">
                        <h1>Hola, soy Benjamin Mora Urra</h1>
                        <em>Desarrollador Backend & FullStack Python</em>
                        <p>"Depurar es como ser el detective en una escena de crimen, donde tu también puedes ser el asesino."</p>
                        <div class="profile-buttons">
                            <button class="btn-success btn-contactme"><i class="bi bi-telephone-fill"></i> Contáctame</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel-home-me">
                <div class="panel-home-me-box">
                    <h3>¿Quién soy?</h3>
                    <p>Soy Desarrollador Backend y Fullstack especializado en Python (Flask, FastAPI) con +2 años de experiencia profesional y trayectoria en desarrollo de software desde 2017. Experiencia comprobada diseñando y desplegando plataformas SaaS multi-tenant, microservicios con Docker, y APIs RESTen producción. He liderado proyectos end-to-end para sectores de hosting, agricultura e IoT y salud, incluyendo infraestructura de correo corporativo self-hosted, pasarelas de pago con integración de webhooks, y sistemas de monitoreo en tiempo real. Dominio de PostgreSQL, MySQL, JWT, RBAC, CI/CD y Linux. Optimicé consumo de APIs externas reduciendo un 95% las peticiones mediante caché inteligente e implementé ingeniería inversa de APIs privadas sin documentación. Actualmente cursando Tercer año de Ingeniería en informática con Mención en Desarrollo de Software (AIEP).</p>
                </div>
                <div class="panel-home-me-courses">
                    <p>Tengo muchos cursos de tecnología, como:</p>
                    <div class="table-courses">
                        <div class="course-card">
                            <div class="course-info">
                                <div class="course-name">IOT (Cisco)</div>
                                <div class="course-details">
                                    <div class="course-detail-item">
                                        <i class="bi bi-clock"></i>
                                        <span>1 mes</span>
                                    </div>
                                    <div class="course-detail-item">
                                        <i class="bi bi-calendar"></i>
                                        <span>2022</span>
                                    </div>
                                </div>
                            </div>
                            <button class="course-certificate" id="iot-certification">Ver Certificado</button>
                        </div>
                        <div class="course-card">
                            <div class="course-info">
                                <div class="course-name">CyberSecurity Essentials (Cisco)</div>
                                <div class="course-details">
                                    <div class="course-detail-item">
                                        <i class="bi bi-clock"></i>
                                        <span>1 mes</span>
                                    </div>
                                    <div class="course-detail-item">
                                        <i class="bi bi-calendar"></i>
                                        <span>2022</span>
                                    </div>
                                </div>
                            </div>
                            <button class="course-certificate" id="cybersecurity-certification">Ver Certificado</button>
                        </div>
                        <div class="course-card">
                            <div class="course-info">
                                <div class="course-name">Fullstack Python (Coding Dojo)</div>
                                <div class="course-details">
                                    <div class="course-detail-item">
                                        <i class="bi bi-clock"></i>
                                        <span>3 meses</span>
                                    </div>
                                    <div class="course-detail-item">
                                        <i class="bi bi-calendar"></i>
                                        <span>2023</span>
                                    </div>
                                </div>
                            </div>
                            <button class="course-certificate" id="fullstackpython-certification">Ver Certificado</button>
                        </div>
                        <div class="course-card">
                            <div class="course-info">
                                <div class="course-name">Optimización de calidad de resultados con IA (Alura Latam)</div>
                                <div class="course-details">
                                    <div class="course-detail-item">
                                        <i class="bi bi-clock"></i>
                                        <span>1 mes</span>
                                    </div>
                                    <div class="course-detail-item">
                                        <i class="bi bi-calendar"></i>
                                        <span>2025</span>
                                    </div>
                                </div>
                            </div>
                            <button class="course-certificate" id="alura-ia-certification">Ver Certificado</button>
                        </div>
                        <div class="course-card">
                            <div class="course-info">
                                <div class="course-name">Formación Lógica de programación con JavaScript (Alura Latam)</div>
                                <div class="course-details">
                                    <div class="course-detail-item">
                                        <i class="bi bi-clock"></i>
                                        <span>1 mes</span>
                                    </div>
                                    <div class="course-detail-item">
                                        <i class="bi bi-calendar"></i>
                                        <span>2025</span>
                                    </div>
                                </div>
                            </div>
                            <button class="course-certificate" id="alura-js-certification">Ver Certificado</button>
                        </div>
                    </div>
                </div>
                <div class="panel-home-me-technical-knowledge">
                    <h3>¿Cuáles son mis conocimientos técnicos?</h3>
                    <p>Tengo muchos conocimientos en lenguajes de programación, como:</p>
                    <div class="technical-knowledge">
                        <div class="infobox">
                            <h3><i class="fab fa-html5"></i>  Frontend</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap (Íconos y CSS)</li>
                                <li>Javascript</li>
                                <li>Django</li>
                            </ul>
                        </div>
                        <div class="infobox">
                            <h3><i class="fas fa-server"></i> Backend</h3>
                            <ul>
                                <li>Python</li>
                                <li>Java</li>
                                <li>C#</li>
                                <li>PHP</li>
                            </ul>
                        </div>
                        <div class="infobox">
                            <h3><i class="fas fa-database"></i> Base de Datos</h3>
                            <ul>
                                <li>MySQL</li>
                                <li>SQL Server</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>
                        <div class="infobox">
                            <h3> <i class="fa-solid fa-server"></i> DevOps & Infraestructura</h3>
                            <ul>
                                <li>Administración de Servidores (Físicos/Virtuales)</li>
                                <li>GCP, Azure & Oracle Cloud</li>
                                <li>Docker & Docker Compose</li>
                                <li>Nginx & Postfix/Dovecot</li>
                                <li>Redis (Caché Inteligente)</li>
                                <li>IoT & Arduino</li>
                                <li>CI/CD Automation</li>
                                <li>Configuración de Redes</li>
                            </ul>
                        </div>
                        <div class="infobox">
                            <h3><i class="fab fa-mobile"></i> Desarrollo Móvil</h3>
                            <ul>
                                <li>Android (Java/Kotlin)</li>
                                <li>REST APIs</li>
                                <li>WebSockets</li>
                                <li>Arquitectura FullStack</li>
                            </ul>
                        </div>
                        <div class="infobox">
                            <h3><i class="fas fa-cube"></i> Microservicios</h3>
                            <ul>
                                <li>Arquitectura de Microservicios</li>
                                <li>Integración de APIs</li>
                                <li>Reverse Engineering</li>
                                <li>OAuth2</li>
                            </ul>
                        </div>
                        <div class="infobox">
                            <h3><i class="fas fa-lock"></i> Seguridad & Encriptación</h3>
                            <ul>
                                <li>JWT & RBAC</li>
                                <li>Argon2, Fernet, HMAC</li>
                                <li>Email Services (OpenDKIM)</li>
                                <li>Certificados SSL/TLS</li>
                            </ul>
                        </div>
                        <div class="infobox">
                            <h3><i class="fas fa-credit-card"></i> Integraciones Específicas</h3>
                            <ul>
                                <li>Payment Gateway (Tebex)</li>
                                <li>Generación de PDFs</li>
                                <li>Chart.js & Visualización</li>
                                <li>Análisis de Sentimientos</li>
                            </ul>
                        </div>
                        <div class="infobox">
                            <h3><i class="fab fa-git"></i> Otros</h3>
                            <ul>
                                <li>Git & Github</li>
                                <li>XAMPP</li>
                                <li>Flask & Django</li>
                                <li>Unity & XAML/WPF</li>
                            </ul>
                        </div>
                        <div class="infobox">
                            <h3><i class="fas fa-brain"></i> IA & LLM</h3>
                            <ul>
                                <li>Comprensión y uso de LLM (GPT, Llama, etc.)</li>
                                <li>Ingeniería de prompts y evaluación de respuestas</li>
                                <li>Fine-tuning y entrenamiento supervisado</li>
                                <li>Ética y seguridad en IA</li>
                            </ul>
                        </div>
                    </div>
                    <div class="panel-home-btns">
                        <h3>¿Quieres ver mis proyectos?</h3>
                        <p>Si estás interesado en mis proyectos o solo quieres contactarme, haz clic en los siguientes botones</p>
                        <button class="btn-primary" id="btn-projects"><i class="bi bi-github"></i> Proyectos</button>
                        <button class="btn-success btn-contactme"><i class="bi bi-telephone-fill"></i> Contáctame</button>
                    </div>
            </div>
        </div>
    `:`
        <div class="panel-home-container">
            <div class="panel-home-content">
                <div class="panel-home-header">
                    <div class="profile-photo-container">
                        <img src="assets/imgs/profile.jpeg" 
                             alt="Benjamin Mora Urra - Backend Developer" 
                             class="profile-photo"
                             loading="eager">
                        <div class="profile-status">
                            <i class="bi bi-circle-fill"></i> Available
                        </div>
                    </div>
                    <div class="profile-info">
                        <h1>Hi, I'm Benjamin Mora Urra</h1>
                        <em>Backend Developer & FullStack Python</em>
                        <p>"Debugging is like being the detective at a crime scene, where you can also be the killer."</p>
                        <div class="profile-buttons">
                            <button class="btn-success btn-contactme"><i class="bi bi-telephone-fill"></i> Contact me</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel-home-me">
                <div class="panel-home-me-box">
                    <h3>Who am I?</h3>
                    <p>I am a Backend Developer and Fullstack specialist in Python (Flask, FastAPI) with +2 years of professional experience and a software development track record since 2017. Proven experience designing and deploying multi-tenant SaaS platforms, microservices with Docker, and REST APIs in production. I have led end-to-end projects for hosting, agriculture, IoT, and healthcare sectors, including self-hosted corporate email infrastructure, payment gateways with webhook integration, and real-time monitoring systems. Proficiency in PostgreSQL, MySQL, JWT, RBAC, CI/CD, and Linux. I optimized external API consumption reducing requests by 95% through smart caching and implemented reverse engineering of private undocumented APIs. Currently in my third year of Computer Science Engineering with a focus on Software Development (AIEP).</p>
                </div>
                <div class="panel-home-me-courses">
                    <p>I have many technology courses, like:</p>
                    <div class="table-courses">
                        <div class="course-card">
                            <div class="course-info">
                                <div class="course-name">IOT (Cisco)</div>
                                <div class="course-details">
                                    <div class="course-detail-item">
                                        <i class="bi bi-clock"></i>
                                        <span>1 Month</span>
                                    </div>
                                    <div class="course-detail-item">
                                        <i class="bi bi-calendar"></i>
                                        <span>2022</span>
                                    </div>
                                </div>
                            </div>
                            <button class="course-certificate" id="iot-certification">View Certificate</button>
                        </div>
                        <div class="course-card">
                            <div class="course-info">
                                <div class="course-name">CyberSecurity Essentials (Cisco)</div>
                                <div class="course-details">
                                    <div class="course-detail-item">
                                        <i class="bi bi-clock"></i>
                                        <span>1 Month</span>
                                    </div>
                                    <div class="course-detail-item">
                                        <i class="bi bi-calendar"></i>
                                        <span>2022</span>
                                    </div>
                                </div>
                            </div>
                            <button class="course-certificate" id="cybersecurity-certification">View Certificate</button>
                        </div>
                        <div class="course-card">
                            <div class="course-info">
                                <div class="course-name">Fullstack Python (Coding Dojo)</div>
                                <div class="course-details">
                                    <div class="course-detail-item">
                                        <i class="bi bi-clock"></i>
                                        <span>3 Months</span>
                                    </div>
                                    <div class="course-detail-item">
                                        <i class="bi bi-calendar"></i>
                                        <span>2023</span>
                                    </div>
                                </div>
                            </div>
                            <button class="course-certificate" id="fullstackpython-certification">View Certificate</button>
                        </div>
                        <div class="course-card">
                            <div class="course-info">
                                <div class="course-name">AI Results Quality Optimization (Alura Latam)</div>
                                <div class="course-details">
                                    <div class="course-detail-item">
                                        <i class="bi bi-clock"></i>
                                        <span>1 Month</span>
                                    </div>
                                    <div class="course-detail-item">
                                        <i class="bi bi-calendar"></i>
                                        <span>2025</span>
                                    </div>
                                </div>
                            </div>
                            <button class="course-certificate" id="alura-ia-certification">View Certificate</button>
                        </div>
                        <div class="course-card">
                            <div class="course-info">
                                <div class="course-name">Programming Logic with JavaScript (Alura Latam)</div>
                                <div class="course-details">
                                    <div class="course-detail-item">
                                        <i class="bi bi-clock"></i>
                                        <span>1 Month</span>
                                    </div>
                                    <div class="course-detail-item">
                                        <i class="bi bi-calendar"></i>
                                        <span>2025</span>
                                    </div>
                                </div>
                            </div>
                            <button class="course-certificate" id="alura-js-certification">View Certificate</button>
                        </div>
                    </div>
                </div>
                <div class="panel-home-me-technical-knowledge">
                    <h3>What are my Technical Knowledge?</h3>
                    <p>I have a lot of knowledge in programming languages, like:</p>
                    <div class="technical-knowledge">
                        <div class="infobox">
                            <h3><i class="fab fa-html5"></i>  Frontend</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap (Icons & CSS)</li>
                                <li>Javascript</li>
                                <li>Django</li>
                            </ul>
                        </div>
                        <div class="infobox">
                            <h3><i class="fas fa-server"></i> Backend</h3>
                            <ul>
                                <li>Python</li>
                                <li>Java</li>
                                <li>C#</li>
                                <li>PHP</li>
                            </ul>
                        </div>
                        <div class="infobox">
                            <h3><i class="fas fa-database"></i> Database</h3>
                            <ul>
                                <li>MySQL</li>
                                <li>SQL Server</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>
                        <div class="infobox">
                            <h3> <i class="fa-solid fa-server"></i> DevOps & Infrastructure</h3>
                            <ul>
                                <li>Management of Physical and Virtual Servers</li>
                                <li>GCP, Azure & Oracle Cloud</li>
                                <li>Docker & Docker Compose</li>
                                <li>Nginx & Postfix/Dovecot</li>
                                <li>Redis (Smart Caching)</li>
                                <li>IoT & Arduino</li>
                                <li>CI/CD Automation</li>
                                <li>Network Configuration</li>
                            </ul>
                        </div>
                        <div class="infobox">
                            <h3><i class="fab fa-mobile"></i> Mobile Development</h3>
                            <ul>
                                <li>Android (Java/Kotlin)</li>
                                <li>REST APIs</li>
                                <li>WebSockets</li>
                                <li>FullStack Architecture</li>
                            </ul>
                        </div>
                        <div class="infobox">
                            <h3><i class="fas fa-cube"></i> Microservices</h3>
                            <ul>
                                <li>Microservices Architecture</li>
                                <li>API Integration</li>
                                <li>Reverse Engineering</li>
                                <li>OAuth2</li>
                            </ul>
                        </div>
                        <div class="infobox">
                            <h3><i class="fas fa-lock"></i> Security & Encryption</h3>
                            <ul>
                                <li>JWT & RBAC</li>
                                <li>Argon2, Fernet, HMAC</li>
                                <li>Email Services (OpenDKIM)</li>
                                <li>SSL/TLS Certificates</li>
                            </ul>
                        </div>
                        <div class="infobox">
                            <h3><i class="fas fa-credit-card"></i> Specific Integrations</h3>
                            <ul>
                                <li>Payment Gateway (Tebex)</li>
                                <li>PDF Generation</li>
                                <li>Chart.js & Data Visualization</li>
                                <li>Sentiment Analysis</li>
                            </ul>
                        </div>
                        <div class="infobox">
                            <h3><i class="fab fa-git"></i> Others</h3>
                            <ul>
                                <li>Git & Github</li>
                                <li>XAMPP</li>
                                <li>Flask & Django</li>
                                <li>Unity & XAML/WPF</li>
                            </ul>
                        </div>
                        <div class="infobox">
                            <h3><i class="fas fa-brain"></i> AI & LLM</h3>
                            <ul>
                                <li>LLM understanding and use (GPT, Llama, etc.)</li>
                                <li>Prompt engineering and response evaluation</li>
                                <li>Fine-tuning and supervised training</li>
                                <li>AI ethics and safety</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="panel-home-btns">
                    <h3>Want to see my projects?</h3>
                    <p>If you are interested in my projects or just want to contact me, click these following buttons</p>
                    <button class="btn-primary" id="btn-projects"><i class="bi bi-github"></i> Projects</button>
                    <button class="btn-success btn-contactme"><i class="bi bi-telephone-fill"></i> Contact Me</button>
                </div>
            </div>
        </div>`;

    HomePanel.innerHTML = homePanelHTML;
}

function projects_panel(isSpanish) {
    const projectsPanel = document.querySelector('.panel-projects');
    const lang = isSpanish ? 'es' : 'en';
    const jsonPath = `json/${lang}/projects.json`;

    const headerHTML = isSpanish
        ? `<div class="panel-projects-info">
                <h1>Proyectos</h1>
                <p>Aquí puedes ver mis proyectos más destacados que demuestran mis habilidades técnicas y experiencia profesional.</p>
           </div>`
        : `<div class="panel-projects-info">
                <h1>Projects</h1>
                <p>Here you can see my featured projects that demonstrate my technical skills and professional experience.</p>
           </div>`;

    // Mostrar skeleton loaders mientras carga
    projectsPanel.innerHTML = `
        <div class="panel-projects-container">
            ${headerHTML}
            <div class="featured-projects-section">
                <h2 class="section-title">
                    <i class="bi bi-star-fill"></i> ${isSpanish ? 'Proyectos Destacados' : 'Featured Projects'}
                </h2>
                <div class="featured-projects-list">
                    <div class="project-card-skeleton"></div>
                    <div class="project-card-skeleton"></div>
                </div>
            </div>
            <div class="other-projects-section">
                <h2 class="section-title">
                    <i class="bi bi-grid-3x3-gap"></i> ${isSpanish ? 'Otros Proyectos' : 'Other Projects'}
                </h2>
                <div class="other-projects-list">
                    <div class="project-card-skeleton compact"></div>
                    <div class="project-card-skeleton compact"></div>
                    <div class="project-card-skeleton compact"></div>
                </div>
            </div>
        </div>
    `;

    // Verificar cache primero
    if (projectsCache[lang]) {
        renderProjects(projectsCache[lang], isSpanish, projectsPanel);
        return;
    }

    // Si no está en cache, hacer fetch
    fetch(jsonPath)
        .then(response => {
            if (!response.ok) throw new Error('Failed to load projects');
            return response.json();
        })
        .then(projects => {
            projectsCache[lang] = projects; // Guardar en cache
            renderProjects(projects, isSpanish, projectsPanel);
        })
        .catch(error => {
            console.error(error);
            projectsPanel.querySelector('.featured-projects-section').innerHTML = `
                <div class="error-state">
                    <i class="bi bi-exclamation-triangle"></i>
                    <p>${isSpanish ? 'Error al cargar proyectos. Por favor, intenta de nuevo.' : 'Failed to load projects. Please try again.'}</p>
                    <button class="btn-primary" onclick="location.reload()">
                        ${isSpanish ? 'Reintentar' : 'Retry'}
                    </button>
                </div>
            `;
        });
}

// Función auxiliar para renderizar proyectos
function renderProjects(projects, isSpanish, projectsPanel) {
    const featuredSection = projectsPanel.querySelector('.featured-projects-section');
    const otherSection = projectsPanel.querySelector('.other-projects-section');
    
    // Separar proyectos destacados y otros
    const featuredProjects = projects.filter(p => p.featured === true);
    const otherProjects = projects.filter(p => p.featured !== true);

    // Renderizar Featured Projects
    if (featuredProjects.length > 0) {
        featuredSection.innerHTML = `
            <h2 class="section-title">
                <i class="bi bi-star-fill"></i> ${isSpanish ? 'Proyectos Destacados' : 'Featured Projects'}
            </h2>
            <div class="featured-projects-list"></div>
        `;
        
        const featuredList = featuredSection.querySelector('.featured-projects-list');
        featuredProjects.forEach(project => {
            featuredList.innerHTML += `
                <div class="project-card featured">
                    <div class="featured-badge">
                        <i class="bi bi-star-fill"></i> ${isSpanish ? 'Destacado' : 'Featured'}
                    </div>
                    <img src="${project.image}" 
                         alt="${project.title}" 
                         class="project-card-img"
                         loading="lazy">
                    <div class="project-info">
                        <h2>${project.title} <em>${project.subtitle || ''}</em></h2>
                        ${project.role ? `<p class="project-role"><i class="bi bi-person-badge"></i> <strong>${isSpanish ? 'Rol:' : 'Role:'}</strong> ${project.role}</p>` : ''}
                        <p>${project.description}</p>
                        ${project.impact ? `<p class="project-impact"><i class="bi bi-graph-up-arrow"></i> <strong>${isSpanish ? 'Impacto:' : 'Impact:'}</strong> ${project.impact}</p>` : ''}
                        <div class="project-card-technologys">
                            ${project.technologys.map(tech => `<span class="project-card-technology">${tech}</span>`).join('')}
                        </div>
                        <div class="project-card-btns">
                            ${project.documentation ? `<button class="btn-info" onclick="window.open('${project.documentation}', '_blank')"><i class="bi bi-file-earmark-pdf"></i> ${isSpanish ? 'Presentación' : 'Presentation'}</button>` : ''}
                            ${project.demo ? `<button class="btn-success" onclick="window.open('${project.demo}', '_blank')"><i class="bi bi-box-arrow-up-right"></i> ${isSpanish ? 'Ver Demo' : 'View Demo'}</button>` : ''}
                            ${project.repo ? (Array.isArray(project.repo) ? 
                                project.repo.map((repoUrl, index) => {
                                    const repoLabel = project.repoNames && project.repoNames[index] ? project.repoNames[index] : `Repo ${index + 1}`;
                                    return `<button class="btn-primary" onclick="window.open('${repoUrl}', '_blank')"><i class="bi bi-github"></i> ${repoLabel}</button>`;
                                }).join('') : 
                                `<button class="btn-primary" onclick="window.open('${project.repo}', '_blank')"><i class="bi bi-github"></i> ${isSpanish ? 'Código' : 'Code'}</button>`) : ''}
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // Renderizar Other Projects
    if (otherProjects.length > 0) {
        otherSection.innerHTML = `
            <h2 class="section-title">
                <i class="bi bi-grid-3x3-gap"></i> ${isSpanish ? 'Otros Proyectos' : 'Other Projects'}
            </h2>
            <div class="other-projects-list"></div>
        `;
        
        const otherList = otherSection.querySelector('.other-projects-list');
        otherProjects.forEach(project => {
            otherList.innerHTML += `
                <div class="project-card compact">
                    <img src="${project.image}" 
                         alt="${project.title}" 
                         class="project-card-img"
                         loading="lazy">
                    <div class="project-info">
                        <h3>${project.title} <em>${project.subtitle || ''}</em></h3>
                        ${project.role ? `<p class="project-role-compact"><strong>${project.role}</strong></p>` : ''}
                        <p class="project-desc-short">${project.description}</p>
                        <div class="project-card-technologys">
                            ${project.technologys.slice(0, 4).map(tech => `<span class="project-card-technology">${tech}</span>`).join('')}
                            ${project.technologys.length > 4 ? `<span class="project-card-technology">+${project.technologys.length - 4}</span>` : ''}
                        </div>
                        <div class="project-card-btns">
                            ${project.documentation ? `<button class="btn-info-sm" onclick="window.open('${project.documentation}', '_blank')"><i class="bi bi-file-earmark-pdf"></i></button>` : ''}
                            ${project.demo ? `<button class="btn-success-sm" onclick="window.open('${project.demo}', '_blank')"><i class="bi bi-box-arrow-up-right"></i></button>` : ''}
                            ${project.repo ? (Array.isArray(project.repo) ? 
                                project.repo.map(repoUrl => `<button class="btn-primary-sm" onclick="window.open('${repoUrl}', '_blank')"><i class="bi bi-github"></i></button>`).join('') : 
                                `<button class="btn-primary-sm" onclick="window.open('${project.repo}', '_blank')"><i class="bi bi-github"></i></button>`) : ''}
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // Intersection Observer para animaciones al scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Observar todas las project cards
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
}