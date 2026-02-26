
'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      nav: {
        about: "Sobre mí",
        services: "Servicios",
        results: "Resultados",
        start: "Comenzar"
      },
      hero: {
        subtitle: "Siente tu Aura",
        title: "Encuentra tu equilibrio y brilla con fuerza",
        description: "Un enfoque holístico para transformar tu cuerpo y mente. Programas personalizados diseñados para tu bienestar integral.",
        cta1: "Explorar Programas",
        cta2: "Saber más"
      },
      about: {
        title: "Sobre Mí",
        subtitle: "El camino hacia la plenitud",
        p1: "Hola, soy Aura. Mi misión es acompañarte en tu viaje de transformación personal. No creo en las soluciones rápidas, sino en la construcción de hábitos sostenibles que respeten tu ritmo y tus necesidades.",
        p2: "Con más de 8 años de experiencia en fitness holístico y nutrición consciente, he ayudado a cientos de personas a reconectar con su vitalidad y confianza.",
        quote: "Tu bienestar es la inversión más valiosa que puedes hacer en ti misma."
      },
      services: {
        title: "Nuestros Programas",
        description: "Elige el nivel que mejor resuene contigo y comienza tu transformación hoy.",
        select: "Seleccionar",
        popular: "Más Popular",
        perMonth: "/mes",
        pkgs: {
          essential: {
            title: "Aura Essentials",
            desc: "Para quienes buscan un reinicio consciente.",
            f: ["Rutinas de 20 min", "Guía nutricional básica", "Soporte vía comunidad", "Meditaciones guiadas"]
          },
          zen: {
            title: "Zen Flow",
            desc: "Equilibrio total entre fuerza y flexibilidad.",
            f: ["Yoga & Pilates", "Plan de comidas personalizado", "Sesión 1:1 mensual", "Seguimiento de hidratación"]
          },
          radiant: {
            title: "Radiant Strength",
            desc: "Transformación profunda y personalizada.",
            f: ["Entrenamiento de alta intensidad", "Análisis de bio-tipos", "Chat 24/7 con Aura", "Talleres de mentalidad"]
          }
        }
      },
      results: {
        title: "Historias de Éxito",
        subtitle: "Resultados reales, cambios profundos",
        before: "Antes",
        after: "Después",
        quote: "Nunca pensé que podría sentirme tan cómoda en mi propia piel. Aura no solo me enseñó a entrenar, sino a amar el proceso."
      },
      register: {
        back: "Volver a programas",
        title: "Comienza tu viaje",
        subtitle: "Estás a un paso de unirte a",
        name: "Nombre Completo",
        namePlaceholder: "Tu nombre",
        email: "Correo Electrónico",
        emailPlaceholder: "tu@email.com",
        allergies: "Alergias Alimentarias",
        allergiesPlaceholder: "Describe cualquier alergia o restricción...",
        injuries: "Historial de Lesiones",
        injuriesPlaceholder: "¿Tienes alguna lesión que debamos considerar?",
        submit: "Enviar Registro",
        disclaimer: "Al enviar, aceptas nuestros términos de servicio y política de privacidad.",
        success: "¡Solicitud recibida!",
        successText: "Gracias por confiar en AuraFit. Revisaremos tus detalles y nos pondremos en contacto contigo en las próximas 24 horas para finalizar tu inscripción.",
        goHome: "Volver al inicio"
      },
      footer: {
        desc: "Inspirando a las personas a vivir su mejor vida a través del movimiento consciente y el amor propio.",
        navTitle: "Navegación",
        supportTitle: "Soporte",
        contact: "Contacto",
        terms: "Términos",
        privacy: "Privacidad",
        rights: "Todos los derechos reservados."
      }
    }
  },
  en: {
    translation: {
      nav: {
        about: "About me",
        services: "Services",
        results: "Results",
        start: "Get Started"
      },
      hero: {
        subtitle: "Feel your Aura",
        title: "Find your balance and shine with strength",
        description: "A holistic approach to transform your body and mind. Personalized programs designed for your integral well-being.",
        cta1: "Explore Programs",
        cta2: "Learn More"
      },
      about: {
        title: "About Me",
        subtitle: "The path to fulfillment",
        p1: "Hi, I'm Aura. My mission is to accompany you on your personal transformation journey. I don't believe in quick fixes, but in building sustainable habits that respect your rhythm and needs.",
        p2: "With over 8 years of experience in holistic fitness and conscious nutrition, I have helped hundreds of people reconnect with their vitality and confidence.",
        quote: "Your well-being is the most valuable investment you can make in yourself."
      },
      services: {
        title: "Our Programs",
        description: "Choose the level that best resonates with you and start your transformation today.",
        select: "Select",
        popular: "Most Popular",
        perMonth: "/month",
        pkgs: {
          essential: {
            title: "Aura Essentials",
            desc: "For those looking for a conscious reset.",
            f: ["20 min routines", "Basic nutritional guide", "Community support", "Guided meditations"]
          },
          zen: {
            title: "Zen Flow",
            desc: "Total balance between strength and flexibility.",
            f: ["Yoga & Pilates", "Personalized meal plan", "Monthly 1:1 session", "Hydration tracking"]
          },
          radiant: {
            title: "Radiant Strength",
            desc: "Deep and personalized transformation.",
            f: ["High intensity training", "Bio-type analysis", "24/7 chat with Aura", "Mindset workshops"]
          }
        }
      },
      results: {
        title: "Success Stories",
        subtitle: "Real results, deep changes",
        before: "Before",
        after: "After",
        quote: "I never thought I could feel so comfortable in my own skin. Aura didn't just teach me how to train, but to love the process."
      },
      register: {
        back: "Back to programs",
        title: "Start your journey",
        subtitle: "You're one step away from joining",
        name: "Full Name",
        namePlaceholder: "Your name",
        email: "Email Address",
        emailPlaceholder: "you@email.com",
        allergies: "Food Allergies",
        allergiesPlaceholder: "Describe any allergies or restrictions...",
        injuries: "Injury History",
        injuriesPlaceholder: "Do you have any injuries we should consider?",
        submit: "Send Registration",
        disclaimer: "By submitting, you agree to our terms of service and privacy policy.",
        success: "Application received!",
        successText: "Thank you for trusting AuraFit. We will review your details and contact you within the next 24 hours to finalize your enrollment.",
        goHome: "Back to home"
      },
      footer: {
        desc: "Inspiring people to live their best life through conscious movement and self-love.",
        navTitle: "Navigation",
        supportTitle: "Support",
        contact: "Contact",
        terms: "Terms",
        privacy: "Privacy",
        rights: "All rights reserved."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
