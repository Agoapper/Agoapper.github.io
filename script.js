const headers = document.querySelectorAll('.section_header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        // Récupérer le bloc parent (.cv_section) de l'en-tête cliqué
        const section = header.parentElement;

        // Vérifier si cette section était déjà active ou non
        const isActive = section.classList.contains('active');

        // 1. Fermer TOUTES les sections d'un coup
        document.querySelectorAll('.cv_section').forEach(s => {
            s.classList.remove('active');
        });

        // 2. Si la section cliquée n'était PAS active, on l'ouvre
        // (Si elle l'était, elle reste fermée puisque tout vient d'être fermé à l'étape 1)
        if (!isActive) {
            section.classList.add('active');
        }
    });
});