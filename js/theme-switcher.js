// Obtener referencias a los botones
const darkBtn = document.getElementById('theme-dark');
const systemBtn = document.getElementById('theme-system');
const lightBtn = document.getElementById('theme-light');

// Clases para estados activo e inactivo
const activeClasses = 'text-white bg-gray-700';
const inactiveClasses = 'text-gray-400 hover:text-white hover:bg-gray-700';

// Función para quitar el estado activo de todos los botones
function clearActiveStates() {
    [darkBtn, systemBtn, lightBtn].forEach(btn => {
        btn.className = `w-8 h-8 flex items-center justify-center rounded-full ${inactiveClasses} transition-all duration-200`;
    });
}

// Función para activar un botón específico
function setActiveButton(button) {
    clearActiveStates();
    button.className = `w-8 h-8 flex items-center justify-center rounded-full ${activeClasses} transition-all duration-200`;
}

// Función para aplicar el tema
function applyTheme(theme) {
    const html = document.documentElement;
    
    if (theme === 'dark') {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        // Sistema - usar preferencia del navegador
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
        localStorage.setItem('theme', 'system');
    }
}

// Event listeners para los botones
darkBtn.addEventListener('click', () => {
    setActiveButton(darkBtn);
    applyTheme('dark');
});

systemBtn.addEventListener('click', () => {
    setActiveButton(systemBtn);
    applyTheme('system');
});

lightBtn.addEventListener('click', () => {
    setActiveButton(lightBtn);
    applyTheme('light');
});

// Inicializar tema al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'system';
    
    if (savedTheme === 'dark') {
        setActiveButton(darkBtn);
        applyTheme('dark');
    } else if (savedTheme === 'light') {
        setActiveButton(lightBtn);
        applyTheme('light');
    } else {
        setActiveButton(systemBtn);
        applyTheme('system');
    }
});

// Escuchar cambios en la preferencia del sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'system') {
        applyTheme('system');
    }
});