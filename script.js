// MenStyle360 - JavaScript para interactividad y funcionalidades

// Variables globales
let currentQuizQuestion = 0;
let quizAnswers = {};
let carouselIndex = 0;

// Datos del quiz ampliado
const quizData = [
    {
        question: "What is your face type?",
        options: [
            { value: "oval", text: "Oval" },
            { value: "square", text: "Square" },
            { value: "round", text: "Round" },
            { value: "heart", text: "Heart" },
            { value: "diamond", text: "Diamond" },
            { value: "oblong", text: "Oblong" },
            { value: "triangle", text: "Triangular" },
            { value: "pear", text: "Pear" }
        ]
    },
    {
        question: "What is your hair type?",
        options: [
            { value: "straight", text: "Straight" },
            { value: "curly", text: "Curly" },
            { value: "wavy", text: "Wavy" },
            { value: "thick", text: "Thick" },
            { value: "fine", text: "Fine" },
            { value: "oily", text: "Oily" },
            { value: "dry", text: "Dry" },
            { value: "mixed", text: "Mixed" }
        ]
    },
    {
        question: "What is your skin tone?",
        options: [
            { value: "light", text: "Light" },
            { value: "medium", text: "Medium" },
            { value: "dark", text: "Dark" },
            { value: "olive", text: "Olive" }
        ]
    },
    {
        question: "What style do you prefer?",
        options: [
            { value: "casual", text: "Casual" },
            { value: "formal", text: "Formal" },
            { value: "streetwear", text: "Streetwear" },
            { value: "minimalist", text: "Minimalist" },
            { value: "vintage", text: "Vintage" },
            { value: "sporty", text: "Sporty" }
        ]
    },
    {
        question: "What is your age?",
        options: [
            { value: "18-25", text: "18-25 years" },
            { value: "26-35", text: "26-35 years" },
            { value: "36-45", text: "36-45 years" },
            { value: "45+", text: "45+ years" }
        ]
    },
    {
        question: "What type of beard do you prefer?",
        options: [
            { value: "clean", text: "Clean shaven" },
            { value: "stubble", text: "3-day stubble" },
            { value: "short", text: "Short beard" },
            { value: "medium", text: "Medium beard" },
            { value: "long", text: "Long beard" },
            { value: "goatee", text: "Goatee" },
            { value: "mustache", text: "Mustache only" }
        ]
    },
    {
        question: "What is your personality?",
        options: [
            { value: "confident", text: "Confident" },
            { value: "creative", text: "Creative" },
            { value: "professional", text: "Professional" },
            { value: "adventurous", text: "Adventurous" },
            { value: "calm", text: "Calm" },
            { value: "energetic", text: "Energetic" }
        ]
    },
    {
        question: "What colors do you like most?",
        options: [
            { value: "neutrals", text: "Neutrals" },
            { value: "dark", text: "Dark" },
            { value: "bright", text: "Bright" },
            { value: "pastels", text: "Pastels" },
            { value: "earth", text: "Earth tones" },
            { value: "cool", text: "Cool tones" }
        ]
    }
];

// Quiz results
const quizResults = {
    "oval-straight-light-casual-18-25-clean-confident-neutrals": {
        title: "Young and Modern Style",
        description: "Your ideal style combines youthful freshness with modern elegance. Clean cuts and soft colors suit you.",
        score: "85% Modern",
        traits: [
            { icon: "✨", name: "Fresh" },
            { icon: "🎯", name: "Precise" },
            { icon: "💫", name: "Elegant" },
            { icon: "🔥", name: "Trendy" }
        ],
        hair: ["Fade cut with top volume", "Modern undercut", "Soft pompadour"],
        beard: ["Clean shaven or 3-day stubble", "Clean and defined lines"],
        colors: ["#1E1E1E", "#4B5563", "#2E4A62", "#F5F5F3", "#7A7265"],
        fashion: ["Casual clothing with minimalist touches", "Slim fit jeans", "Quality basic t-shirts", "White sneakers"]
    },
    "square-curly-medium-formal-26-35-medium-professional-dark": {
        title: "Professional and Sophisticated Style",
        description: "Your ideal style is elegant and professional, perfect for the workplace and special occasions.",
        score: "92% Professional",
        traits: [
            { icon: "💼", name: "Professional" },
            { icon: "👔", name: "Elegant" },
            { icon: "🎖️", name: "Reliable" },
            { icon: "⭐", name: "Distinguished" }
        ],
        hair: ["Classic textured cut", "Side part", "Professional quiff"],
        beard: ["Well-defined medium beard", "Precise lines", "Regular maintenance"],
        colors: ["#1E1E1E", "#4B5563", "#2E4A62", "#7A7265", "#C9D1D3"],
        fashion: ["Well-tailored suits", "Dress shirts", "Silk ties", "Leather shoes"]
    },
    "round-wavy-dark-streetwear-18-25-stubble-adventurous-bright": {
        title: "Urban and Dynamic Style",
        description: "Your ideal style is modern, urban and full of personality. You like to stand out with unique looks.",
        score: "88% Urban",
        traits: [
            { icon: "🚀", name: "Dynamic" },
            { icon: "🎨", name: "Creative" },
            { icon: "⚡", name: "Energetic" },
            { icon: "🌟", name: "Unique" }
        ],
        hair: ["Asymmetric cut", "Designed undercut", "Patterned fade"],
        beard: ["3-day stubble", "Relaxed style", "Natural lines"],
        colors: ["#2E4A62", "#7A7265", "#4B5563", "#D9CAB3", "#1E1E1E"],
        fashion: ["Streetwear clothing", "Oversized hoodies", "Joggers", "Bold sneakers"]
    },
    "heart-thick-light-minimalist-26-35-clean-calm-pastels": {
        title: "Minimalist and Refined Style",
        description: "Your ideal style is clean, minimalist and timeless. You prefer quality over quantity.",
        score: "90% Minimalist",
        traits: [
            { icon: "🧘", name: "Calm" },
            { icon: "🎯", name: "Focused" },
            { icon: "✨", name: "Refined" },
            { icon: "🌿", name: "Natural" }
        ],
        hair: ["Simple and clean cut", "Subtle fade", "Natural style"],
        beard: ["Clean shaven", "Very clean lines", "Perfect shave"],
        colors: ["#F5F5F3", "#C9D1D3", "#7A7265", "#4B5563", "#1E1E1E"],
        fashion: ["Perfectly cut clothing", "Neutral colors", "Natural materials", "Functional accessories"]
    }
};

// Función para generar resultado personalizado basado en respuestas
function generateCustomResult(answers) {
    const faceType = answers.question0 || 'oval';
    const hairType = answers.question1 || 'straight';
    const skinTone = answers.question2 || 'light';
    const style = answers.question3 || 'casual';
    const age = answers.question4 || '18-25';
    const beard = answers.question5 || 'clean';
    const personality = answers.question6 || 'confident';
    const colors = answers.question7 || 'neutrals';
    
    // Generate personalized result
    return {
        title: `${getStyleName(style, personality)} Style`,
        description: getStyleDescription(style, personality, age, faceType),
        score: `${getScore(style, personality)}% ${getStyleCategory(style)}`,
        traits: getTraits(personality, style),
        hair: getHairRecommendations(faceType, hairType, style),
        beard: getBeardRecommendations(faceType, beard, style),
        colors: getColorPalette(skinTone, colors),
        fashion: getFashionRecommendations(style, age, personality)
    };
}

function getStyleName(style, personality) {
    const combinations = {
        'casual-confident': 'Casual Confident',
        'formal-professional': 'Professional Elegant',
        'streetwear-adventurous': 'Urban Adventurous',
        'minimalist-calm': 'Minimalist Serene',
        'vintage-creative': 'Vintage Creative',
        'sporty-energetic': 'Sporty Energetic'
    };
    return combinations[`${style}-${personality}`] || 'Personalized';
}

function getStyleDescription(style, personality, age, faceType) {
    const styleMap = {
        'casual': 'casual',
        'formal': 'formal',
        'streetwear': 'streetwear',
        'minimalist': 'minimalist',
        'vintage': 'vintage',
        'sporty': 'sporty'
    };
    const personalityMap = {
        'confident': 'confident',
        'creative': 'creative',
        'professional': 'professional',
        'adventurous': 'adventurous',
        'calm': 'calm',
        'energetic': 'energetic'
    };
    const ageGroup = age.includes('18-25') ? 'youthful' : age.includes('26-35') ? 'mature' : 'experienced';
    const styleName = styleMap[style] || style;
    const personalityName = personalityMap[personality] || personality;
    const faceTypeName = getFaceTypeName(faceType);
    return `Your ideal style combines ${styleName} with ${personalityName} touches perfect for your ${ageGroup} stage. Perfect for your ${faceTypeName} face type and ${personalityName} personality.`;
}

function getFaceTypeName(faceType) {
    const faceTypeMap = {
        'oval': 'oval',
        'square': 'square',
        'round': 'round',
        'heart': 'heart',
        'diamond': 'diamond',
        'oblong': 'oblong',
        'triangle': 'triangular',
        'pear': 'pear'
    };
    return faceTypeMap[faceType] || faceType;
}

function getScore(style, personality) {
    const baseScore = 75;
    const styleBonus = { 'formal': 15, 'minimalist': 12, 'casual': 8, 'streetwear': 10, 'vintage': 5, 'sporty': 7 };
    const personalityBonus = { 'professional': 15, 'confident': 12, 'creative': 10, 'calm': 8, 'adventurous': 6, 'energetic': 5 };
    return Math.min(100, baseScore + (styleBonus[style] || 0) + (personalityBonus[personality] || 0));
}

function getStyleCategory(style) {
    const categories = {
        'casual': 'Casual',
        'formal': 'Professional',
        'streetwear': 'Urban',
        'minimalist': 'Minimalist',
        'vintage': 'Vintage',
        'sporty': 'Sporty'
    };
    return categories[style] || 'Personalized';
}

function getTraits(personality, style) {
    const traitMap = {
        'confident': [{ icon: "💪", name: "Confident" }, { icon: "👑", name: "Leader" }, { icon: "🎯", name: "Decisive" }, { icon: "⭐", name: "Outstanding" }],
        'creative': [{ icon: "🎨", name: "Creative" }, { icon: "💡", name: "Innovative" }, { icon: "🌈", name: "Artistic" }, { icon: "✨", name: "Inspiring" }],
        'professional': [{ icon: "💼", name: "Professional" }, { icon: "📊", name: "Organized" }, { icon: "🎖️", name: "Reliable" }, { icon: "👔", name: "Elegant" }],
        'adventurous': [{ icon: "🚀", name: "Adventurous" }, { icon: "🗺️", name: "Explorer" }, { icon: "⚡", name: "Dynamic" }, { icon: "🌟", name: "Unique" }],
        'calm': [{ icon: "🧘", name: "Calm" }, { icon: "🌿", name: "Serene" }, { icon: "💙", name: "Relaxed" }, { icon: "🌸", name: "Harmonious" }],
        'energetic': [{ icon: "⚡", name: "Energetic" }, { icon: "🔥", name: "Vibrant" }, { icon: "💥", name: "Intense" }, { icon: "🚀", name: "Active" }]
    };
    return traitMap[personality] || traitMap['confident'];
}

function getHairRecommendations(faceType, hairType, style) {
    const recommendations = {
        'oval': ['Modern fade cut', 'Elegant undercut', 'Classic pompadour'],
        'square': ['Textured cut', 'Side part', 'Professional quiff'],
        'round': ['High fade', 'Slick back', 'Side sweep'],
        'heart': ['Balanced cut', 'Top volume', 'Subtle fade'],
        'diamond': ['Cut that softens cheekbones', 'Volume at temples', 'Balanced style'],
        'oblong': ['Cut that shortens face', 'Lateral volume', 'Low fade'],
        'triangle': ['Cut that widens forehead', 'Top volume', 'Balanced style'],
        'pear': ['Cut that widens forehead', 'Crown volume', 'High fade']
    };
    return recommendations[faceType] || recommendations['oval'];
}

function getBeardRecommendations(faceType, beard, style) {
    const recommendations = {
        'clean': ['Clean shaven', 'Very clean lines', 'Perfect shave'],
        'stubble': ['3-day stubble', 'Relaxed style', 'Natural lines'],
        'short': ['Defined short beard', 'Precise lines', 'Regular maintenance'],
        'medium': ['Balanced medium beard', 'Defined shape', 'Daily care'],
        'long': ['Well-maintained long beard', 'Nourishing oils', 'Regular brushing'],
        'goatee': ['Classic goatee', 'Defined lines', 'Precise maintenance'],
        'mustache': ['Well-groomed mustache', 'Defined shape', 'Classic style']
    };
    return recommendations[beard] || recommendations['clean'];
}

function getColorPalette(skinTone, colors) {
    const palettes = {
        'light-neutrals': ['#1E1E1E', '#4B5563', '#7A7265', '#C9D1D3', '#F5F5F3'],
        'light-bright': ['#2E4A62', '#4B5563', '#7A7265', '#D9CAB3', '#C9D1D3'],
        'medium-earth': ['#7A7265', '#4B5563', '#2E4A62', '#D9CAB3', '#C9D1D3'],
        'medium-cool': ['#2E4A62', '#4B5563', '#1E1E1E', '#7A7265', '#C9D1D3'],
        'dark-vibrant': ['#2E4A62', '#7A7265', '#4B5563', '#D9CAB3', '#1E1E1E'],
        'dark-pastels': ['#C9D1D3', '#D9CAB3', '#7A7265', '#4B5563', '#2E4A62']
    };
    return palettes[`${skinTone}-${colors}`] || palettes['light-neutrals'];
}

function getFashionRecommendations(style, age, personality) {
    const recommendations = {
        'casual': ['Slim fit jeans', 'Quality basic t-shirts', 'White sneakers', 'Light jackets'],
        'formal': ['Well-tailored suits', 'Dress shirts', 'Silk ties', 'Leather shoes'],
        'streetwear': ['Oversized hoodies', 'Joggers', 'Bold sneakers', 'Urban accessories'],
        'minimalist': ['Perfectly cut clothing', 'Neutral colors', 'Natural materials', 'Functional accessories'],
        'vintage': ['Retro pieces', 'Classic colors', 'Unique accessories', 'Timeless style'],
        'sporty': ['Technical clothing', 'Vibrant colors', 'Sports sneakers', 'Functional accessories']
    };
    return recommendations[style] || recommendations['casual'];
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeLoadingScreen();
    initializeApp();
});

// Función para inicializar la pantalla de carga
function initializeLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.getElementById('loading-progress');
    
    if (!loadingScreen) return;
    
    // Simular progreso de carga
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
        
        if (progress >= 100) {
            clearInterval(interval);
            // Esperar un momento antes de ocultar
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                // Remover del DOM después de la animación
                setTimeout(() => {
                    if (loadingScreen.parentNode) {
                        loadingScreen.parentNode.removeChild(loadingScreen);
                    }
                }, 500);
            }, 300);
        }
    }, 100);
    
    // Fallback: ocultar después de 3 segundos máximo
    setTimeout(() => {
        if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
            if (progressBar) progressBar.style.width = '100%';
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                if (loadingScreen.parentNode) {
                    loadingScreen.parentNode.removeChild(loadingScreen);
                }
            }, 500);
        }
    }, 3000);
}

// Función principal de inicialización
function initializeApp() {
    initializeNavigation();
    initializeCarousel();
    initializeThemeToggle();
    initializeQuiz();
    initializeScrollAnimations();
    initializeSmoothScroll();
    initializeMobileMenu();
    initializeProductRecommendations();
    initializeNumberAnimation();
    
    // Inicializar AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
}

// Navegación
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Actualizar navegación activa al hacer scroll
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Carrusel del hero
function initializeCarousel() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    
    function showSlide(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }
    
    function nextSlide() {
        carouselIndex = (carouselIndex + 1) % carouselItems.length;
        showSlide(carouselIndex);
    }
    
    // Cambiar slide automáticamente cada 5 segundos
    setInterval(nextSlide, 5000);
    
    // Event listeners para los indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            carouselIndex = index;
            showSlide(carouselIndex);
        });
    });
}

// Toggle de tema oscuro/claro
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Verificar tema guardado o usar preferencia del sistema
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const currentTheme = savedTheme || systemTheme;
    
    // Aplicar tema inicial
    body.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    // Event listener para el botón de tema
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    // Escuchar cambios en la preferencia del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            body.setAttribute('data-theme', newTheme);
            updateThemeIcon(newTheme);
        }
    });
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('#theme-toggle i');
    themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Quiz interactivo
function initializeQuiz() {
    const quizContainer = document.querySelector('.quiz-container');
    const questionElement = document.getElementById('question');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const quizResult = document.getElementById('quiz-result');
    
    function showQuestion() {
        const question = quizData[currentQuizQuestion];
        const progress = ((currentQuizQuestion + 1) / quizData.length) * 100;
        
        questionElement.innerHTML = `
            <h3>${question.question}</h3>
            <div class="options">
                ${question.options.map(option => 
                    `<button class="option-btn" data-value="${option.value}">${option.text}</button>`
                ).join('')}
            </div>
        `;
        
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `Question ${currentQuizQuestion + 1} of ${quizData.length}`;
        
        // Event listeners para las opciones
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const value = e.target.getAttribute('data-value');
                quizAnswers[`question${currentQuizQuestion}`] = value;
                
                // Animación de selección
                e.target.style.background = 'var(--accent-color)';
                e.target.style.color = 'white';
                
                setTimeout(() => {
                    currentQuizQuestion++;
                    
                    if (currentQuizQuestion < quizData.length) {
                        showQuestion();
                    } else {
                        showQuizResult();
                    }
                }, 500);
            });
        });
    }
    
    function showQuizResult() {
        const resultKey = Object.values(quizAnswers).join('-');
        let result = quizResults[resultKey];
        
        // Si no hay resultado exacto, generar uno personalizado
        if (!result) {
            result = generateCustomResult(quizAnswers);
        }
        
        document.querySelector('.quiz-content').style.display = 'none';
        quizResult.style.display = 'block';
        
        // Actualizar header
        document.getElementById('style-score').textContent = result.score;
        
        // Actualizar contenido principal
        document.getElementById('result-title').textContent = result.title;
        document.getElementById('result-description').textContent = result.description;
        
        // Actualizar traits
        const traitsGrid = document.getElementById('traits-grid');
        traitsGrid.innerHTML = result.traits.map(trait => 
            `<div class="trait-item">
                <span class="trait-icon">${trait.icon}</span>
                <span class="trait-name">${trait.name}</span>
            </div>`
        ).join('');
        
        // Actualizar recomendaciones de cabello
        const hairRecs = document.getElementById('hair-recommendations');
        hairRecs.innerHTML = result.hair.map(rec => `<li>${rec}</li>`).join('');
        
        // Actualizar recomendaciones de barba
        const beardRecs = document.getElementById('beard-recommendations');
        beardRecs.innerHTML = result.beard.map(rec => `<li>${rec}</li>`).join('');
        
        // Actualizar paleta de colores
        const colorPalette = document.getElementById('color-palette-result');
        colorPalette.innerHTML = result.colors.map(color => 
            `<div class="color-swatch" style="background-color: ${color}" title="${color}"></div>`
        ).join('');
        
        // Actualizar recomendaciones de moda
        const fashionRecs = document.getElementById('fashion-recommendations');
        fashionRecs.innerHTML = result.fashion.map(rec => `<li>${rec}</li>`).join('');
        
        // Animación de entrada
        quizResult.style.opacity = '0';
        quizResult.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            quizResult.style.transition = 'all 0.5s ease';
            quizResult.style.opacity = '1';
            quizResult.style.transform = 'translateY(0)';
        }, 100);
    }
    
    function getStyleIcon(title) {
        const iconMap = {
            'Moderno': '✨',
            'Profesional': '💼',
            'Urbano': '🚀',
            'Minimalista': '🧘',
            'Vintage': '🎭',
            'Deportivo': '⚡'
        };
        
        for (const [key, icon] of Object.entries(iconMap)) {
            if (title.includes(key)) {
                return icon;
            }
        }
        return '👤';
    }
    
    // Inicializar quiz
    showQuestion();
}

// Función para reiniciar el quiz
function restartQuiz() {
    currentQuizQuestion = 0;
    quizAnswers = {};
    
    document.querySelector('.quiz-content').style.display = 'block';
    document.getElementById('quiz-result').style.display = 'none';
    
    initializeQuiz();
}

// Animaciones de scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos que necesitan animación
    document.querySelectorAll('.type-card, .shape-card, .beard-card, .tone-card, .guide-card, .accessory-card, .lifestyle-card, .blog-card').forEach(el => {
        observer.observe(el);
    });
}

// Scroll suave
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Menú móvil
function initializeMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Animación de números al hacer scroll
function initializeNumberAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    
    if (statNumbers.length === 0) return;
    
    // Función de easing para animación suave
    function easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
    }
    
    // Función para animar un número
    function animateNumber(element, target, suffix = '') {
        const duration = 2000; // 2 segundos
        const startTime = Date.now();
        const start = 0;
        
        // Inicializar el número en 0
        if (suffix === '%') {
            element.textContent = `+0${suffix}`;
        } else {
            element.textContent = `0${suffix}`;
        }
        
        function update() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutQuart(progress);
            const current = Math.floor(start + (target - start) * eased);
            
            // Formatear el número según el sufijo
            if (suffix === '%') {
                element.textContent = `+${current}${suffix}`;
            } else {
                element.textContent = `${current}${suffix}`;
            }
            
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                // Asegurar el valor final
                if (suffix === '%') {
                    element.textContent = `+${target}${suffix}`;
                } else {
                    element.textContent = `${target}${suffix}`;
                }
            }
        }
        
        requestAnimationFrame(update);
    }
    
    // Observer para detectar cuando la sección es visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.getAttribute('data-target'));
                const suffix = element.getAttribute('data-suffix') || '';
                
                // Solo animar si no se ha animado antes
                if (!element.classList.contains('animated')) {
                    element.classList.add('animated');
                    // Pequeño delay para mejor efecto visual
                    setTimeout(() => {
                        animateNumber(element, target, suffix);
                    }, 200);
                }
                
                // Dejar de observar después de animar
                observer.unobserve(element);
            }
        });
    }, {
        threshold: 0.3, // Cuando el 30% del elemento es visible
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observar cada número
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

// Recomendaciones de productos
function initializeProductRecommendations() {
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        item.addEventListener('click', () => {
            // Animación de click
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.transform = 'scale(1)';
            }, 150);
            
            // Mostrar información adicional (simulado)
            const productName = item.querySelector('h4').textContent;
            showProductModal(productName);
        });
    });
}

function showProductModal(productName) {
    // Crear modal simple
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <h3>${productName}</h3>
            <p>Información detallada sobre este producto y recomendaciones de uso.</p>
            <div class="modal-actions">
                <button class="btn btn-primary">Ver Detalles</button>
                <button class="btn btn-secondary modal-close">Cerrar</button>
            </div>
        </div>
    `;
    
    // Estilos del modal
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        background: var(--white);
        padding: 2rem;
        border-radius: 15px;
        max-width: 500px;
        width: 90%;
        position: relative;
        transform: translateY(20px);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(modal);
    
    // Animar entrada
    setTimeout(() => {
        modal.style.opacity = '1';
        modalContent.style.transform = 'translateY(0)';
    }, 10);
    
    // Event listeners para cerrar
    modal.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.opacity = '0';
            modalContent.style.transform = 'translateY(20px)';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        });
    });
    
    // Cerrar al hacer clic fuera del modal
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.querySelector('.modal-close').click();
        }
    });
}

// Efectos de hover mejorados
function initializeHoverEffects() {
    const cards = document.querySelectorAll('.type-card, .shape-card, .beard-card, .tone-card, .guide-card, .accessory-card, .lifestyle-card, .blog-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Lazy loading para imágenes
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Funciones de utilidad
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Optimización de scroll
const optimizedScrollHandler = throttle(() => {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
    }
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Efectos de parallax suave
function initializeParallax() {
    const parallaxElements = document.querySelectorAll('.hero-image');
    
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
    }, 10));
}

// Inicializar efectos adicionales
document.addEventListener('DOMContentLoaded', () => {
    initializeHoverEffects();
    initializeLazyLoading();
    initializeParallax();
});

// Manejo de errores
window.addEventListener('error', (e) => {
    console.error('Error en MenStyle360:', e.error);
});

// Service Worker para funcionalidad offline (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registrado:', registration);
            })
            .catch(registrationError => {
                console.log('Error en SW:', registrationError);
            });
    });
}

// Función para compartir resultados
function shareResults() {
    const resultTitle = document.getElementById('result-title').textContent;
    const resultScore = document.getElementById('style-score').textContent;
    const shareText = `¡Descubrí mi estilo ideal con MenStyle360! ${resultTitle} - ${resultScore}. ¡Haz el quiz tú también!`;
    const shareUrl = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: 'Mi Perfil de Estilo - MenStyle360',
            text: shareText,
            url: shareUrl
        });
    } else {
        // Fallback para navegadores que no soportan Web Share API
        const shareData = {
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
            whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`
        };
        
        // Crear modal de compartir
        const shareModal = document.createElement('div');
        shareModal.className = 'share-modal';
        shareModal.innerHTML = `
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <h3>Compartir Resultados</h3>
                <p>Comparte tu perfil de estilo en redes sociales</p>
                <div class="share-buttons">
                    <a href="${shareData.twitter}" target="_blank" class="share-btn twitter">
                        <i class="fab fa-twitter"></i> Twitter
                    </a>
                    <a href="${shareData.facebook}" target="_blank" class="share-btn facebook">
                        <i class="fab fa-facebook"></i> Facebook
                    </a>
                    <a href="${shareData.whatsapp}" target="_blank" class="share-btn whatsapp">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </a>
                </div>
                <div class="copy-link">
                    <input type="text" value="${shareUrl}" readonly>
                    <button onclick="copyToClipboard('${shareUrl}')">Copiar</button>
                </div>
            </div>
        `;
        
        // Estilos del modal
        shareModal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        const modalContent = shareModal.querySelector('.modal-content');
        modalContent.style.cssText = `
            background: var(--white);
            padding: 2rem;
            border-radius: 15px;
            max-width: 500px;
            width: 90%;
            position: relative;
            transform: translateY(20px);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(shareModal);
        
        // Animar entrada
        setTimeout(() => {
            shareModal.style.opacity = '1';
            modalContent.style.transform = 'translateY(0)';
        }, 10);
        
        // Event listeners para cerrar
        shareModal.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', () => {
                shareModal.style.opacity = '0';
                modalContent.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    document.body.removeChild(shareModal);
                }, 300);
            });
        });
        
        // Cerrar al hacer clic fuera del modal
        shareModal.addEventListener('click', (e) => {
            if (e.target === shareModal) {
                shareModal.querySelector('.modal-close').click();
            }
        });
    }
}

// Función para copiar al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Mostrar notificación de éxito
        const notification = document.createElement('div');
        notification.textContent = '¡Enlace copiado!';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--accent-color);
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            z-index: 10001;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    });
}

// Exportar funciones para uso global
window.restartQuiz = restartQuiz;
window.showProductModal = showProductModal;
window.shareResults = shareResults;
window.copyToClipboard = copyToClipboard;

// Funciones adicionales para interactividad avanzada
function createTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background: var(--primary-color);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-size: 0.9rem;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    `;
    
    document.body.appendChild(tooltip);
    
    element.addEventListener('mouseenter', (e) => {
        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        tooltip.style.opacity = '1';
    });
    
    element.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
    });
}

// Aplicar tooltips a elementos específicos
document.addEventListener('DOMContentLoaded', () => {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        createTooltip(element, element.getAttribute('data-tooltip'));
    });
});

// Función para compartir en redes sociales
function shareOnSocial(platform, url = window.location.href, text = 'MenStyle360 - Cuidado y Estilo Masculino Moderno') {
    const shareUrls = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
    };
    
    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
}

// Exportar función de compartir
window.shareOnSocial = shareOnSocial;

// Modal para imágenes ampliadas de cortes, barbas y facial care
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    const cutImages = document.querySelectorAll('.cut-visual');
    const beardImages = document.querySelectorAll('.beard-visual');
    const stepIcons = document.querySelectorAll('.step-icon');
    const guideImages = document.querySelectorAll('.guide-image');

    // Función para abrir el modal
    function openModal(imgSrc, imgAlt) {
        modalImage.src = imgSrc;
        modalCaption.textContent = imgAlt;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll del body
    }

    // Agregar event listeners a todas las imágenes de cortes
    cutImages.forEach(img => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            const imgSrc = img.src;
            const imgAlt = img.alt || 'Corte de cabello';
            openModal(imgSrc, imgAlt);
        });
    });

    // Agregar event listeners a todas las imágenes de barbas
    beardImages.forEach(img => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            const imgSrc = img.src;
            const imgAlt = img.alt || 'Estilo de barba';
            openModal(imgSrc, imgAlt);
        });
    });

    // Agregar event listeners a todas las imágenes de facial care
    stepIcons.forEach(img => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            const imgSrc = img.src;
            const imgAlt = img.alt || 'Cuidado facial';
            openModal(imgSrc, imgAlt);
        });
    });

    // Agregar event listeners a todas las imágenes de style guides
    guideImages.forEach(img => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            const imgSrc = img.src;
            const imgAlt = img.alt || 'Guía de estilo';
            openModal(imgSrc, imgAlt);
        });
    });

    // Cerrar modal al hacer clic en el botón de cerrar
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Cerrar modal al hacer clic en el overlay
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Cerrar modal con la tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

// Función para obtener el primer nombre del email
function getFirstNameFromEmail(email) {
    if (!email) return 'Usuario';
    const namePart = email.split('@')[0];
    // Capitalizar la primera letra
    return namePart.charAt(0).toUpperCase() + namePart.slice(1);
}

// Verificar estado de autenticación y actualizar header
function checkAuthAndUpdateHeader() {
    // Esperar a que Firebase esté disponible
    if (typeof window.onAuthStateChanged === 'undefined') {
        // Intentar de nuevo después de un breve delay
        setTimeout(checkAuthAndUpdateHeader, 500);
        return;
    }

    const userProfile = document.getElementById('user-profile');
    const loginBtn = document.getElementById('login-btn');
    const userName = document.getElementById('user-name');
    const logoutBtn = document.getElementById('logout-btn');

    window.onAuthStateChanged(window.auth, (user) => {
        const dashboardBtn = document.getElementById('dashboard-btn');
        
        if (user) {
            // Usuario está logueado
            const firstName = getFirstNameFromEmail(user.email);
            userName.textContent = `Hello ${firstName}`;
            
            if (userProfile) userProfile.style.display = 'flex';
            if (loginBtn) loginBtn.classList.add('hidden');
            if (dashboardBtn) dashboardBtn.style.display = 'inline-block';
        } else {
            // Usuario no está logueado
            if (userProfile) userProfile.style.display = 'none';
            if (loginBtn) loginBtn.classList.remove('hidden');
            if (dashboardBtn) dashboardBtn.style.display = 'none';
        }
    });

    // Manejar logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            try {
                if (typeof window.signOut === 'function') {
                    await window.signOut();
                    // Redirigir a home después de cerrar sesión
                    window.location.href = 'index.html';
                } else {
                    console.error('signOut function not available');
                }
            } catch (error) {
                console.error('Error al cerrar sesión:', error);
            }
        });
    }
}

// Inicializar verificación de autenticación cuando la página carga
document.addEventListener('DOMContentLoaded', () => {
    // Esperar a que Firebase esté listo
    if (typeof window.onAuthStateChanged !== 'undefined') {
        checkAuthAndUpdateHeader();
    } else {
        // Escuchar el evento de Firebase listo
        window.addEventListener('firebaseReady', () => {
            checkAuthAndUpdateHeader();
        });
        // También intentar después de un delay por si acaso
        setTimeout(checkAuthAndUpdateHeader, 1000);
    }
});