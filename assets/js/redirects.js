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

    // Contacts and Project home btns href //
    $(document).on('click', '#btn-projects', function() {
        window.open("https://github.com/IdkBemja?tab=repositories", "_blank");
    });

    $(document).on('click', '.btn-contactme', function() {
        window.open("https://www.linkedin.com/in/idkbemja/", "_blank");
    }); 
});
