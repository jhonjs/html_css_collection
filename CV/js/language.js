const select = (selector) => document.querySelector(selector) 
const selectAll = (selector) => document.querySelectorAll(selector)

const generateLang = ()=> {
    if(!localStorage.getItem('lng')) localStorage.setItem('lng', i18next.language)

    const selectLng = select('[data-language]')
    selectLng.innerHTML = ['en', 'es'].map(item => 
        `<option value="${item}" data-i18n="${item}"
            ${item === i18next.language ? 'selected': ''}>
        </option>`).join('\n')
    
    selectLng.addEventListener('change', e=> {
        e.stopPropagation()
        localStorage.setItem('lng', e.target.value)
        location.reload()
    })
}


i18next.init({
    lng: localStorage.getItem('lng') || 'en',
    debug: true,
    resources: {
        en: {
            translation: {
                "aboutMe": {
                    "title": "About me",
                    "content": "Full Stack software developer with 4 years of experience in the design, architecture, development, and implementation of web solutions from scratch. I have participated in building platforms for financial product management, including credit, contributions, and savings, contributing to the optimization and automation of operational, administrative, and financial processes.<br>I have experience in frontend development using JavaScript, React, Angular, and native Web Components, as well as backend development with Node.js, REST and GraphQL API integration, databases such as MySQL and PostgreSQL, and the application of clean architecture principles to build scalable, modular, and maintainable solutions.<br>I integrate generative AI tools, such as GPT Codex, into my workflow to optimize code generation and refactoring, unit tests, and E2E tests."
                },
                "current": "Current",
                "contact": "Contact",
                "degree": "Systems engineer",
                "en": "English",
                "es": "Spanish",
                "experience": {
                    "title": "Experience",
                    "knowark": {
                        "title": "Knowark",
                        "details": {
                            "subtitle": "Full Stack Web Developer",
                            "HTMLLayout": "HTML layout",
                            "webAppDevelopment": "Web application development",
                            "backendDevelopment": "Backend development",
                            "relationalDatabases": "Relational databases (MySQL, PostgreSQL)",
                            "restApiIntegration": "REST API integration",
                            "graphqlIntegration": "GraphQL integration",
                            "angularDevelopment": "Angular development",
                            "aiAgents": "AI agent development",
                            "aiSkills": "AI support skills"
                        }
                    },
                    "unicomfacauca": {
                        "title": "Unicomfacauca Research Seedbed",
                        "details": {
                            "subtitle": "Professional practice",
                            "informationProcessing": "Information Processing",
                            "ontology": "Ontology"
                        }
                    },
                    "5Zeros": {
                        "title": "5Zeros",
                        "details": {
                            "subtitle": "Exchange",
                            "uxAnalyst": "UX Analyst",
                            "webDesign": "Web Design"
                        }
                    }
                },
                "education": {
                    "title": "Education",
                    "grade": {
                        "title": "Comfacauca University Corporation Unicomfacauca",
                        "subtitle": "Systems Engineering"
                    },
                    "bachelor": {
                        "title": "General Tomas Cipriano de Mosquera Military Academy",
                        "subtitle": "Academic Bachelor's Degree with a Military Focus"
                    }
                },
                "months": {
                    "january": "January",
                    "march": "March",
                    "june": "June",
                    "october": "October",
                    "december": "December"
                },
                "print": "Print",
                "skills": "Skills"
            }
        },
        es: {
            translation: {
                "aboutMe": {
                    "title": "Sobre mí",
                    "content": "Desarrollador de software Full Stack con 4 años de experiencia en el diseño, arquitectura, desarrollo e implementación de soluciones web desde cero. He participado en la construcción de plataformas para la gestión de productos financieros, incluyendo créditos, aportes y ahorros, contribuyendo a la optimización y automatización de procesos operativos, administrativos y financieros.<br>Cuento con experiencia en desarrollo frontend utilizando JavaScript, React, Angular y Web Components nativos, así como en desarrollo backend con Node.js, integración de API REST y GraphQL, bases de datos como MySQL y PostgreSQL, y aplicación de principios de arquitectura limpia para construir soluciones escalables, modulares y mantenibles.<br>Integro herramientas de inteligencia artificial generativa, como GPT Codex en mi flujo de trabajo para optimizar la generación y refactorización de código, test unitarios y test E2E."
                },
                "contact": "Contacto",
                "current": "Actual",
                "degree": "ING. De Sistemas",
                "en": "Ingles",
                "es": "Español",
                "experience": {
                    "title": "Experiencia",
                    "knowark": {
                        "title": "Knowark",
                        "details": {
                            "subtitle": "Desarrollador Web Full Stack",
                            "HTMLLayout": "Maquetación HTML",
                            "webAppDevelopment": "Desarrollo de aplicaciones web",
                            "backendDevelopment": "Desarrollo backend",
                            "relationalDatabases": "Bases de datos relacionales (MySQL, PostgreSQL)",
                            "restApiIntegration": "Integración de APIs REST",
                            "graphqlIntegration": "Integración GraphQL",
                            "angularDevelopment": "Desarrollo con Angular",
                            "aiAgents": "Desarrollo con agentes de IA",
                            "aiSkills": "Skills de apoyo con IA"
                        }
                    },
                    "unicomfacauca": {
                        "title": "Semillero de Investigación Unicomfacauca",
                        "details": {
                            "subtitle": "Practica profesional",
                            "informationProcessing": "Procesamiento de Información",
                            "ontology": "Ontología"
                        }
                    },
                    "5Zeros": {
                        "title": "5Zeros",
                        "details": {
                            "subtitle": "Intercambio",
                            "uxAnalyst": "Analista UX",
                            "webDesign": "Diseño web"
                        }
                    }
                },
                "education": {
                    "title": "Formación",
                    "grade": {
                        "title": "Corporación Universitaria Comfacauca Unicomfacauca",
                        "subtitle": "Ingeniería de sistemas"
                    },
                    "bachelor": {
                        "title": "Academia Militar Gral. Tomas Cipriano de Mosquera",
                        "subtitle": "Bachiller Académico Con Orientación Militar"
                    }
                },
                "months": {
                    "january": "Enero",
                    "march": "Marzo",
                    "june": "Junio",
                    "october": "Octubre",
                    "december": "Diciembre"
                },
                "print": "Imprimir",
                "skills": "Habilidades"
            }
        }
    }
})

generateLang();

selectAll('[data-i18n]').forEach(item => {
    if (item.dataset.i18n === 'aboutMe.content') {
        item.innerHTML = i18next.t(item.dataset.i18n)
    } else {
        item.textContent = i18next.t(item.dataset.i18n)
    }
})