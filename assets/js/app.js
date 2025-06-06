// Navigation scroll effect

        // Quand l'utilisateur fait défiler la page, on vérifie la position du scroll.
        // Si le scroll est supérieur à 50 pixels, on ajoute la classe 'scrolled' à la navbar.
        // Cela permet d'appliquer un style différent à la navbar (par exemple fond plus foncé).
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scrolling
        // Pour tous les liens internes (href commençant par #), on empêche le défilement instantané.
        // On utilise scrollIntoView avec behavior: 'smooth' pour un défilement fluide jusqu'à l'élément cible.
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Animation on scroll
        // IntersectionObserver pour détecter quand les éléments apparaissent à l'écran.
        // Lorsqu'un élément entre dans le viewport, on ajoute une classe 'fade-in' pour déclencher une animation CSS.
        // Un délai d'animation aléatoire est ajouté pour éviter un effet trop mécanique.

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = Math.random() * 0.3 + 's';
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.skill-card, .project-card').forEach(el => {
            observer.observe(el);
        });


        // Menu hamburger
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        // Toggle du menu hamburger
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Fermer le menu quand on clique sur un lien
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Fermer le menu quand on clique en dehors
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });