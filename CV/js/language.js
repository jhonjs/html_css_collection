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
                    "content": "As a front-end web developer, I have experience in technologies such as JavaScript, React, and Node.js. I have been involved in web solutions for document process optimization and administration, utilizing agile methodologies such as Scrum and Kanban, and development methodologies such as clean architecture. My passion for clean code and innovation drives me to continue learning and adding value with every line I write."
                },
                "current": "Current",
                "contact": "Contact",
                "degree": "Systems engineer",
                "en": "English",
                "es": "Spanish",
                "experience": {
                    "title": "expirence",
                    "knowark": {
                        "title": "Knowark",
                        "details": {
                            "subtitle": "Front-end Web Developer",
                            "HTMLLayout": "HTML layout",
                            "webAppDevelopment": "Web application development"
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
                    "content": "Como desarrollador web Frontend, cuento con experiencia en tecnologías como JavaScript, React y Node.js. He sido partícipe de soluciones web para la optimización de procesos documentales y administración, haciendo uso de metodologías ágiles como Scrum o Kanban y metodologías de desarrollo como la arquitectura limpia. Mi pasión por el código limpio y la innovación me impulsa a seguir aprendiendo y aportando valor en cada línea que escribo."
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
                            "subtitle": "Desarrollador web Front-end",
                            "HTMLLayout": "Maquetación HTML",
                            "webAppDevelopment": "Desarrollo de aplicaciones web"
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
    item.textContent = i18next.t(item.dataset.i18n)
})