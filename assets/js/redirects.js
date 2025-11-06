$(document).ready(function() {
    // Certificados href //
    $(document).on('click', '#iot-certification', function() {
        window.open("https://github.com/IdkBemja/Portfolio/raw/main/assets/documents/Introduction_to_IoT_certificate_benjaminmoraurra.pdf", "_blank");
    });

    $(document).on('click', '#cybersecurity-certification', function() {
        window.open("https://github.com/IdkBemja/Portfolio/raw/main/assets/documents/Cybersecurity_Essentials_certificate_benjaminmoraurra.pdf", "_blank");
    });

    $(document).on('click', '#fullstackpython-certification', function() {
        window.open("https://github.com/IdkBemja/Portfolio/raw/main/assets/documents/fullstackpython-bootcamp-benjaminmora.pdf", "_blank");
    });

    $(document).on('click', '#alura-ia-certification', function() {
        window.open("https://app.aluracursos.com/certificate/37773e2a-fb7c-4358-aded-d8ab081d0ccc?lang", "_blank");
    });

    $(document).on('click', '#alura-js-certification', function() {
        window.open("https://app.aluracursos.com/degree/certificate/1e2b8a90-5b23-43fd-8fe5-098b37b7e0ce?lang", "_blank");
    });

    // Contacts and Project home btns href //
    $(document).on('click', '#btn-projects', function() {
        window.open("https://github.com/IdkBemja?tab=repositories", "_blank");
    });

    $(document).on('click', '.btn-contactme', function() {
        window.open("https://www.linkedin.com/in/idkbemja/", "_blank");
    });

    // Download CV button //
    $(document).on('click', '.btn-download-cv', function() {
        // Detectar idioma
        const userLang = navigator.language || navigator.userLanguage;
        const isSpanish = userLang.toLowerCase().includes('es');
        
        // Ruta del CV según idioma
        const cvPath = isSpanish 
            ? "assets/documents/CV-BenjaminMoraUrra-ES.pdf"
            : "assets/documents/CV-BenjaminMoraUrra-ES.pdf";
        
        // Abrir CV en nueva pestaña
        window.open(cvPath, "_blank");
    });
});
