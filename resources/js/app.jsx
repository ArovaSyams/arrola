// import './bootstrap';
// import '../css/app.css';
import '/public/assets/css/bootstrap.min.css';
import '/public/assets/css/animate.min.css';
import '/public/assets/fonts/flaticon.css';
import '/public/assets/css/boxicons.min.css';
import '/public/assets/css/owl.carousel.min.css';
import '/public/assets/css/owl.theme.default.min.css';
import '/public/assets/css/jquery-ui.min.css';
import '/public/assets/css/magnific-popup.min.css';
import '/public/assets/css/odometer.min.css';
import '/public/assets/css/meanmenu.min.css';
import '/public/assets/css/style.css';
import '/public/assets/css/responsive.css';
import '/public/assets/css/theme-dark.css';



import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
