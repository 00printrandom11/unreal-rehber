import { Sidebar } from './components/Sidebar.js';
import { ContentArea } from './components/ContentArea.js';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    const sidebarContainer = document.createElement('div');
    sidebarContainer.id = 'sidebar-container';

    const contentContainer = document.createElement('div');
    contentContainer.className = 'content-area';
    contentContainer.id = 'content-container';

    app.appendChild(sidebarContainer);
    app.appendChild(contentContainer);

    const contentArea = new ContentArea('content-container');

    const sidebar = new Sidebar('sidebar-container', (tabName) => {
        contentArea.render(tabName);
    });

    contentArea.render('actors');
});
