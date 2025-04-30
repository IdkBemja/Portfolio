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
                <h1>Hola, soy Benjamin Mora Urra</h1>
                <em>Desarrollador Backend & FullStack Python</em>
                <p>Soy un programador entusiasta, me gusta el frontend pero me apasiona más el backend, especialmente Java y C#</p>
                <button class="btn-success btn-contactme">Contáctame</button>
            </div>
            <div class="panel-home-me">
                <div class="panel-home-me-box">
                    <h3>¿Quién soy?</h3>
                    <p>Soy un joven programador apasionado por la tecnología, siempre buscando nuevos desafíos y aprendiendo cosas nuevas, soy desarrollador fullstack, pero enfocado en backend.</p>
                    <p>Actualmente estoy en mi ultimo año estudiando Técnico profesional en programación y analisis de sistemas en el Instituto Profesional AIEP, estoy buscando nuevos desafíos y con casi 2 años de experiencia en esto. Comencé en 2017 creando plugins para Minecraft y entendiendo Java. Luego estudié telecomunicaciones en el Liceo Comercial Los Andes.</p>
                </div>
                <div class="panel-home-me-courses">
                    <p>Tengo muchos cursos de tecnología, como:</p>
                    <table class="table-courses">
                        <tr>
                            <th>Curso</th>
                            <th>Duración</th>
                            <th>Año</th>
                            <th>Certificado</th>
                        </tr>
                        <tr>
                            <td>IOT (Cisco)</td>
                            <td>1 mes</td>
                            <td>2022</td>
                            <td id="iot-certification">Haz clic aquí</td>
                        </tr>
                        <tr>
                            <td>CyberSecurity Essentials (Cisco)</td>
                            <td>1 mes</td>
                            <td>2022</td>
                            <td id="cybersecurity-certification">Haz clic aquí</td>
                        </tr>
                        <tr>
                            <td>Fullstack Python (Coding Dojo)</td>
                            <td>3 meses</td>
                            <td>2023</td>
                            <td id="fullstackpython-certification">Haz clic aquí</td>
                        </tr>
                        <tr>
                            <td>Alura Latam ONE Backend SpringBot (Oracle)</td>
                            <td>1 año</td>
                            <td>2025</td>
                            <td>No disponible (En curso)</td>
                        </tr>
                    </table>
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
                            <h3> <i class="fab fa-git"></i> Otros</h3>
                            <ul>
                                <li>Git</li>
                                <li>Github</li>
                                <li>XAMPP</li>
                                <li>Flask</li>
                                <li>Unity</li>
                                <li>JWT</li>
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
                <h1>Hi, I'm Benjamin Mora Urra</h1>
                <em>Backend Developer & FullStack Python</em>
                <p>I am an enthusiastic programmer eager to learn, 
                    I like the frontend but I am even more passionate about the backend, especially Java and C#</p>
                <button class="btn-success btn-contactme">Contact me</button>
            </div>
            <div class="panel-home-me">
                <div class="panel-home-me-box">
                    <h3>Who am i?</h3>
                    <p>I am a young programmer who is passionate about technology, I am always looking for new challenges and learning new things, I am a fullstack developer, but focused on backend.</p>
                    <p>I am currently in my final year studying Professional Technician in Programming and Systems Analysis at the AIEP Professional Institute. I am looking for new challenges and have almost 2 years of experience in this field. I started in 2017 creating plugins for Minecraft and learning Java. Later, I studied telecommunications at the Liceo Comercial Los Andes.</p>
                </div>
                <div class="panel-home-me-courses">
                    <p>I have Alot of Technology Courses, like:</p>
                    <table class="table-courses">
                        <tr>
                            <th>Course</th>
                            <th>Duration</th>
                            <th>Year</th>
                            <th>Certified</th>
                        </tr>
                        <tr>
                            <td>IOT (Cisco)</td>
                            <td>1 Month</td>
                            <td>2022</td>
                            <td id="iot-certification">Click Here</td>
                        </tr>
                        <tr>
                            <td>CyberSecurity Essentials (Cisco)</td>
                            <td>1 Month</td>
                            <td>2022</td>
                            <td id="cybersecurity-certification">Click Here</td>
                        </tr>
                        <tr>
                            <td>Fullstack Python (Coding Dojo)</td>
                            <td>3 Months</td>
                            <td>2023</td>
                            <td id="fullstackpython-certification">Click Here</td>
                        </tr>
                        <tr>
                            <td>Alura Latam ONE Backend SpringBot (Oracle)</td>
                            <td>1 Year</td>
                            <td>2025</td>
                            <td>Not Yet (In Course)</td>
                        </tr>
                    </table>
                </div>
                <div class="panel-home-me-technical-knowledge">
                    <h3>What's are my Technical Knowledges?</h3>
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
                            <h3> <i class="fab fa-git"></i> Others</h3>
                            <ul>
                                <li>Git</li>
                                <li>Github</li>
                                <li>XAMPP</li>
                                <li>Flask</li>
                                <li>Unity</li>
                                <li>JWT</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="panel-home-btns">
                    <h3>Want to see my projects?</h3>
                    <p>If you are interested on my proyects or just want to contact me click these following buttons</p>
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
                <p>Aquí puedes ver todos los proyectos que he desarrollado, también puedes ver el código de cada uno de ellos en mi repositorio de Github.</p>
           </div>`
        : `<div class="panel-projects-info">
                <h1>Projects</h1>
                <p>Here you can see all the projects that I have developed, you can also see the code of each one of them in my Github repository.</p>
           </div>`;

    projectsPanel.innerHTML = `
        <div class="panel-projects-container">
            ${headerHTML}
            <div class="panel-projects-list"></div>
        </div>
    `;

    // Cargar proyectos dinámicamente
    fetch(jsonPath)
        .then(response => response.json())
        .then(projects => {
            const list = projectsPanel.querySelector('.panel-projects-list');
            list.innerHTML = ''; // Limpiar antes de agregar

            projects.forEach(project => {
                list.innerHTML += `
                    <div class="project-card">
                        <img src="${project.image}" alt="${project.title}" class="project-card-img">
                        <div class="project-info">
                            <h2>${project.title} <em>${project.subtitle || ''}</em></h2>
                            <p>${project.description}</p>
                            <div class="project-card-technologys">
                                ${project.technologys.map(tech => `<span class="project-card-technology">${tech}</span>`).join('')}
                            </div>
                            <div class="project-card-btns">
                                ${project.demo ? `<button class="btn-success" onclick="window.open('${project.demo}', '_blank')">${isSpanish ? 'Ver Demo' : 'View Demo'}</button>` : ''}
                                ${project.repo ? `<button class="btn-primary" onclick="window.open('${project.repo}', '_blank')">${isSpanish ? 'Código Fuente' : 'Source Code'}</button>` : ''}
                            </div>
                        </div>
                    </div>
                `;
            });
        })
        .catch(error => {
            const list = projectsPanel.querySelector('.panel-projects-list');
            list.innerHTML = `<p style="color:red">${isSpanish ? 'No se pudieron cargar los proyectos.' : 'Failed to load projects.'}</p>`;
            console.error(error);
        });
}