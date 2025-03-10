$(document).ready(function() {
    const userLang = navigator.language || navigator.userLanguage;
    const isSpanish = userLang.toLowerCase().includes('es');


    home_panel(isSpanish);


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

    $('#boton-aboutme').click(function() {
        hide_panels();
        clear_panels();
        aboutMePanel(isSpanish);
        show_panel('panel-about-me');
    });

});

function aboutMePanel(isSpanish) {
    const panelAboutMe = document.querySelector('.panel-about-me');
    const aboutMeCardHTML = isSpanish ? `
    <div class="panel-about-me-container">
        <div class="aboutme-card">
            <div>
                <h3><i class="bi bi-person-circle"></i> Sobre mí</h3>
                <ul>
                    <li>Nombre: Benjamin Ignacio</li>
                    <li>Apellido: Mora Urra</li>
                    <li>Fecha de nacimiento: 29 de septiembre</li>
                    <li>Pronombres: Él</li>
                    <li>Pasatiempos: Jugar videojuegos</li>
                </ul>
            </div>
            <div>
                <h3><i class="bi bi-braces"></i> Habilidades blandas</h3>
                <ul>
                    <li>Idiomas: Español / Inglés (Hablado y Escrito)</li>
                    <li>Capacidad para encontrar soluciones a problemas complejos</li>
                    <li>Capacidad de aprendizaje rápido</li>
                    <li>Capacidad de liderazgo</li>
                    <li>Atención a cada detalle de cada trabajo que realizo</li>
                </ul>
            </div>
            <div>
                <h3><i class="bi bi-bookmark-fill"></i> Redes sociales</h3>
                <ul>
                    <li><i class="bi bi-discord"></i> Discord: @idkbemja</li>
                    <li><i class="bi bi-instagram"></i> Instagram: <a href="https://www.instagram.com/idk.orangedbenja/">idk.orangedbenja</a></li>
                    <li><i class="bi bi-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/in/idkbemja/">IdkBemja</a></li>
                    <li><i class="bi bi-tiktok"></i> Tiktok: <a href="https://www.tiktok.com/@idkorangedbenja">idkorangedbenja</a></li>
                    <li><i class="bi bi-twitch"></i> Twitch: <a href="https://www.twitch.tv/idkorangedbenja">IdkOrangedBenja</a></li>
                    <li><i class="bi bi-steam"></i> Steam: <a href="https://steamcommunity.com/id/idkorangedbenja/">Idk.OrangeBenja</a></li>
                    <li><i class="bi bi-github"></i> GitHub: <a href="https://github.com/IdkBemja">IdkBemja</a></li>
                </ul>
            </div>
        </div>
        <div class="other-card">
            <div class="random"></div> 
            <div class="mypc">
                <h3><i class="bi bi-pc"></i> Especificaciones de mi PC</h3>
                <ul>
                    <li>CPU: Intel Xeon E5-2650 v3 3.0GHz</li>
                    <li>GPU: RTX 2060 6GB Dual Evo OC</li>
                    <li>RAM: 16 GB DDR4</li>
                    <li>Almacenamiento: 1,5 TB HDD, 512SSD m.2 nvme</li>
                    <li>Monitor: HP x22 144hz, HP x1907, HKCTV</li>
                    <li>Mouse: Attack Shark x6 Versión Blanca</li>
                    <li>Teclado: RedDragon Kumara K552RGB</li>
                </ul>
            </div>
        </div>
    </div>
    ` : `
    <div class="panel-about-me-container">
        <div class="aboutme-card">
            <div>
                <h3><i class="bi bi-person-circle"></i> About Me</h3>
                <ul>
                    <li>Name: Benjamin Ignacio</li>
                    <li>Last Name: Mora Urra</li>
                    <li>Birthday: 29 September</li>
                    <li>Pronouns: He/Him</li>
                    <li>Hobbies: Playing Videogames</li>
                </ul>
            </div>
                <div>
                    <h3><i class="bi bi-braces"></i> Soft Skills</h3>
                    <ul>
                        <li>Languages: Spanish / English (Speaking and Writing)</li>
                        <li>Ability to Find Solutions to Complex Problems</li>
                        <li>Ability to learn quickly</li>
                        <li>Leadership Capacity</li>
                        <li>Attention to every detail of every job I do</li>
                    </ul>
                </div>
            <div>
                <h3><i class="bi bi-bookmark-fill"></i> Social Media</h3>
                <ul>
                    <li><i class="bi bi-discord"></i> Discord: @idkbemja</li>
                    <li><i class="bi bi-instagram"></i> Instagram: <a href="https://www.instagram.com/idk.orangedbenja/">idk.orangedbenja</a></li>
                    <li><i class="bi bi-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/in/idkbemja/">IdkBemja</a></li>
                    <li><i class="bi bi-tiktok"></i> Tiktok: <a href="https://www.tiktok.com/@idkorangedbenja">idkorangedbenja</a></li>
                    <li><i class="bi bi-twitch"></i> Twitch: <a href="https://www.twitch.tv/idkorangedbenja">IdkOrangedBenja</a></li>
                    <li><i class="bi bi-steam"></i> Steam: <a href="https://steamcommunity.com/id/idkorangedbenja/">Idk.OrangeBenja</a></li>
                    <li><i class="bi bi-github"></i> GitHub: <a href="https://github.com/IdkBemja">IdkBemja</a></li>
                </ul>
            </div>
        </div>
        <div class="other-card">
            <div class="random"></div> 
            <div class="mypc">
                <h3><i class="bi bi-pc"></i> My PC Specs</h3>
                <ul>
                    <li>CPU: Intel Xeon E5-2650 v3 3.0GHz</li>
                    <li>GPU: RTX 2060 6GB Dual Evo OC</li>
                    <li>RAM: 16 GB DDR4</li>
                    <li>Storage: 1,5 TB HDD, 512SSD m.2 nvme</li>
                    <li>Monitor: HP x22 144hz, HP x1907, HKCTV</li>
                    <li>Mouse: Attack Shark x6 White Version</li>
                    <li>Keyboard: RedDragon Kumara K552RGB</li>
                </ul>
            </div>
        </div>
    </div>
    `;

    panelAboutMe.innerHTML = aboutMeCardHTML;
}

function hide_panels() {
    
    const panelsToHide = [
        "panel-home",
        "panel-projects",
        "panel-about-me"
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
        "panel-projects",
        "panel-about-me"
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
    }
}


function home_panel(isSpanish) {
    const HomePanel = document.querySelector('.panel-home');
    const homePanelHTML =  isSpanish ? `
        <div class="panel-home-container">
            <div class="panel-home-content">
                <h1>Hola, soy Benjamin Mora Urra</h1>
                <em>Desarrollador Backend & FullStack</em>
                <p>Soy un programador entusiasta, me gusta el frontend pero me apasiona más el backend, especialmente Java y C#</p>
                <button class="btn-success btn-contactme">Contáctame</button>
            </div>
            <div class="panel-home-me">
                <div class="panel-home-me-box">
                    <h3>¿Quién soy?</h3>
                    <p>Soy un joven programador apasionado por la tecnología, siempre buscando nuevos desafíos y aprendiendo cosas nuevas, soy desarrollador fullstack, pero enfocado en backend.</p>
                    <p>Actualmente estoy estudiando ingeniería de software en el Instituto Profesional AIEP, en mi segundo año de estudios, buscando nuevos desafíos y con casi 2 años de experiencia en esto. Comencé en 2017 creando plugins para Minecraft y entendiendo Java. Luego estudié telecomunicaciones en el Liceo Comercial Los Andes.</p>
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
                            </ul>
                        </div>
                        <div class="infobox">
                            <h3> <i class="fab fa-git"></i> Otros</h3>
                            <ul>
                                <li>Git</li>
                                <li>Github</li>
                                <li>XAMPP</li>
                                <li>Flask</li>
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
                <em>Backend Developer & FullStack</em>
                <p>I am an enthusiastic programmer eager to learn, 
                    I like the frontend but I am even more passionate about the backend, especially Java and C#</p>
                <button class="btn-success btn-contactme">Contact me</button>
            </div>
            <div class="panel-home-me">
                <div class="panel-home-me-box">
                    <h3>Who am i?</h3>
                    <p>I am a young programmer who is passionate about technology, I am always looking for new challenges and learning new things, I am a fullstack developer, but focused on backend.</p>
                    <p>I am currently studying software engineering at the  AIEP Professional Institute , I am in my second year of study, I am looking for new challenges and i have almost 2 years of experience on this. i started on 2017 creating Minecraft plugins and understanding java. Then i studied telecommunications at the Liceo Comercial Los Andes.</p>
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
                            </ul>
                        </div>
                        <div class="infobox">
                            <h3> <i class="fab fa-git"></i> Others</h3>
                            <ul>
                                <li>Git</li>
                                <li>Github</li>
                                <li>XAMPP</li>
                                <li>Flask</li>
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
    const proyectsPanel = document.querySelector('.panel-projects');
    const proyectsPanelHTML = isSpanish ? `
        <div class="panel-projects-container">
            <div class="panel-projects-info">
                <h1>Proyectos</h1>
                <p>Aquí puedes ver todos los proyectos que he desarrollado, también puedes ver el código de cada uno de ellos en mi repositorio de Github.</p>
            </div>
            <div class="panel-projects-list">
                <div class="project-card">
                    <img src="assets/imgs/lbedwarsproject.jpg" alt="LBedWars Plugin" class="project-card-img">
                    <div class="project-info">
                        <h2>LBedWars - Plugin de Minecraft <em>Spigot 1.8</em></h2>
                        <p>Este Plugin de Minecraft te permite recrear una jugabilidad similar a la de Hypixel Bedwars. Fue creado usando Spigot 1.8 y JDK 1.8</p>
                        <div class="project-card-btns">
                            <button class="btn-success" id="project-lbedwars">Haz clic aquí para ver</button>
                            <button class="btn-primary-disabled">Código Fuente</button>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <img src="assets/imgs/simplespeedtestproject.png" alt="SimpleSpeedTest Web" class="project-card-img">
                    <div class="project-info">
                        <h2>Simple SpeedTest <em>Página Web</em></h2>
                        <p>Aplicación de prueba de velocidad de código abierto y fácil de usar, diseñada para proporcionar métricas precisas de velocidad de internet. Permite a los usuarios medir y analizar el ping, la velocidad de descarga y carga de su conexión con facilidad. Esta aplicación utiliza JS y los íconos y CSS de Bootstrap para el frontend y Python Flask para el backend.</p>
                        <div class="project-card-btns">
                            <button class="btn-success-disabled">Haz clic aquí para ver</button>
                            <button class="btn-primary" id="project-simplespeedtest-src">Código Fuente</button>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <img src="assets/imgs/simplenoteapp.png" alt="SimpleNoteApp Web" class="project-card-img">
                    <div class="project-info">
                        <h2>Aplicación de Notas Simple <em>Página Web</em></h2>
                        <p>Aplicación de código abierto y fácil de usar para tomar notas, diseñada para ayudar a los usuarios a seguir sus pensamientos, ideas y tareas. La aplicación permite a los usuarios crear, editar y eliminar notas, cada una de las cuales puede ser categorizada para una fácil organización. Utilicé los siguientes lenguajes: JS, Bootstrap para el frontend. Python Flask y SQLite para el backend y la base de datos.</p>
                        <div class="project-card-btns">
                            <button class="btn-success-disabled">Haz clic aquí para ver</button>
                            <button class="btn-primary" id="project-simplenoteapp-src">Código Fuente</button>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <img src="assets/imgs/secret-santa.png" alt="SimpleNoteApp Web" class="project-card-img">
                    <div class="project-info">
                        <h2>Aplicación Secret Santa <em>Página Web</em></h2>
                        <p>Este es un sitio web simple en el que, utilizando JavaScript y HTML, puedes agregar los nombres de tus amigos y hacer un sorteo para saber a quién le deben regalar un obsequio. 👀</p>
                        <div class="project-card-btns">
                            <button class="btn-success" id="project-secretsanta">Haz clic aquí para ver</button>
                            <button class="btn-primary" id="project-secretsanta-src">Código Fuente</button>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <img src="assets/imgs/multiplicationapp.png" alt="MultiplicationApp Web" class="project-card-img">
                    <div class="project-info">
                        <h2>Aplicación Para Multiplicar <em>Página Web</em></h2>
                        <p>Este es un sitio web simple en el que, utilizando JavaScript y HTML, puedes practicar las tablas de multiplicar, con un estilo minimalista y visualmente agradable.</p>
                        <div class="project-card-btns">
                            <button class="btn-success" id="project-multiplicationapp">Haz clic aquí para ver</button>
                            <button class="btn-primary" id="project-multiplicationapp-src">Código Fuente</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `:`
        <div class="panel-projects-container">
            <div class="panel-projects-info">
                <h1>Projects</h1>
                <p>Here you can see all the projects that I have developed, you can also see the code of each one of them in my Github repository.</p>
            </div>
            <div class="panel-projects-list">
                <div class="project-card">
                    <img src="assets/imgs/lbedwarsproject.jpg" alt="LBedWars Plugin" class="project-card-img">
                    <div class="project-info">
                        <h2>LBedWars - Minecraft Plugin <em>Spigot 1.8</em></h2>
                        <p>This Minecraft Plugin allows you to recreate gameplay like Hypixel Bedwars. This was created using Spigot 1.8 and JDK 1.8</p>
                        <div class="project-card-btns">
                            <button class="btn-success" id="project-lbedwars">Click here to view</button>
                            <button class="btn-primary-disabled">Source Code</button>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <img src="assets/imgs/simplespeedtestproject.png" alt="SimpleSpeedTest Web" class="project-card-img">
                    <div class="project-info">
                        <h2>Simple SpeedTest <em>WebPage</em></h2>
                        <p>User-Friendly open-source speed test application designed to provide accurate internet speed metrics. It allow users to measure and Analyze their connection's ping, download and upload speed with ease. This app use Js And Bootstrap icons and css for frontend and python flask for backend.</p>
                        <div class="project-card-btns">
                            <button class="btn-success-disabled">Click here to view</button>
                            <button class="btn-primary" id="project-simplespeedtest-src">Source Code</button>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <img src="assets/imgs/simplenoteapp.png" alt="SimpleNoteApp Web" class="project-card-img">
                    <div class="project-info">
                        <h2>Simple Note Application <em>WebPage</em></h2>
                        <p>user-friendly open-source note-taking application designed to help users keep track of their thoughts, ideas, and tasks. The app allows users to create, edit, and delete notes, each of which can be categorized for easy organization. i used these following languages: JS, Bootstrap for Frontend. Python Flask and SQLlite For Backend and Database.</p>
                        <div class="project-card-btns">
                            <button class="btn-success-disabled">Click here to view</button>
                            <button class="btn-primary" id="project-simplenoteapp-src">Source Code</button>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <img src="assets/imgs/secret-santa.png" alt="SimpleNoteApp Web" class="project-card-img">
                    <div class="project-info">
                        <h2>Secret Santa Application <em>WebPage</em></h2>
                        <p>This is a simple website that using JavaScript and HTML you can add names of your friends and draw them to know who they should give a gift to. 👀</p>
                        <div class="project-card-btns">
                            <button class="btn-success" id="project-secretsanta">Click here to view</button>
                            <button class="btn-primary" id="project-secretsanta-src">Source Code</button>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <img src="assets/imgs/multiplicationapp.png" alt="MultiplicationApp Web" class="project-card-img">
                    <div class="project-info">
                        <h2>Multiplication App<em>WebPage</em></h2>
                        <p>This is a simple website where, using JavaScript and HTML, you can practice multiplication tables, in a minimalist and visually pleasing style.</p>
                        <div class="project-card-btns">
                            <button class="btn-success" id="project-multiplicationapp">Click here to view</button>
                            <button class="btn-primary" id="project-multiplicationapp-src">Source Code</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    proyectsPanel.innerHTML = proyectsPanelHTML;
}

