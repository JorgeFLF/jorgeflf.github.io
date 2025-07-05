document.addEventListener('DOMContentLoaded', function() {
    // Function to get current date in dd/mm/yyyy format
    function getCurrentDate() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        const year = today.getFullYear();
        return `${day}/${month}/${year}`;
    }

    // Update the query date on the page
    const queryDateElement = document.getElementById('query-date');
    if (queryDateElement) {
        queryDateElement.textContent = getCurrentDate();
    }

    // Event listener for "Baixar XML" button
    const btnDownloadXml = document.getElementById('btn-download-xml');
    if (btnDownloadXml) {
        btnDownloadXml.addEventListener('click', function() {
            console.log("Botão Baixar XML clicado");
            alert("Funcionalidade 'Baixar XML' ainda não implementada.");
            // Placeholder: In a real scenario, this would trigger an XML file generation and download.
            // For example: window.location.href = '/path/to/generate_and_download_xml?diplomaId=' + document.getElementById('diploma-id').textContent;
        });
    }

    // Event listener for "Consultar Dados" button
    const btnConsultData = document.getElementById('btn-consult-data');
    if (btnConsultData) {
        btnConsultData.addEventListener('click', function() {
            console.log("Botão Consultar Dados clicado");
            alert("Funcionalidade 'Consultar Dados' ainda não implementada.");
            // Placeholder: In a real scenario, this might fetch more details or open a new verification page.
            // For example: fetchMoreDiplomaDetails(document.getElementById('diploma-id').textContent);
        });
    }

    // Placeholder function for fetching more details (example)
    // function fetchMoreDiplomaDetails(diplomaId) {
    //     console.log(`Consultando mais dados para o diploma ID: ${diplomaId}`);
    //     // This function would typically make an API call and update the page or redirect.
    // }
});
