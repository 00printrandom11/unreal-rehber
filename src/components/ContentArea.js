import { actorData, variableData, nodeData, shortcutData } from '../data.js';

export class ContentArea {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    render(tabName) {
        this.container.innerHTML = ''; // Clear content

        switch (tabName) {
            case 'actors':
                this.renderActors();
                break;
            case 'variables':
                this.renderVariables();
                break;
            case 'search':
                this.renderSearch();
                break;
            case 'shortcuts':
                this.renderShortcuts();
                break;
            default:
                this.renderWelcome();
        }
    }

    renderWelcome() {
        this.container.innerHTML = `
            <div class="welcome-message">
                <h2>Hoş Geldiniz!</h2>
                <p>Başlamak için soldan bir kategori seçin.</p>
            </div>
        `;
    }

    // --- ACTORS TAB ---
    renderActors() {
        const actorContainer = document.createElement('div');
        actorContainer.className = 'actor-container';

        // Tree View
        const treeView = document.createElement('div');
        treeView.className = 'tree-view';
        this.buildActorTree(actorData, treeView);

        // Detail View Placeholder
        const detailView = document.createElement('div');
        detailView.className = 'actor-detail';
        detailView.id = 'actor-detail-panel';
        detailView.innerHTML = `
            <h2>Actor Seç</h2>
            <p>Detaylarını görmek için soldaki listeden bir aktör seçin.</p>
        `;

        actorContainer.appendChild(treeView);
        actorContainer.appendChild(detailView);
        this.container.appendChild(actorContainer);
    }

    buildActorTree(nodes, parentElement) {
        nodes.forEach(node => {
            const wrapper = document.createElement('div');
            wrapper.className = 'tree-item';

            const btn = document.createElement('button');
            btn.className = 'tree-btn';
            btn.textContent = node.name;
            btn.onclick = () => {
                // Remove active from all
                document.querySelectorAll('.tree-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.showActorDetail(node);
            };

            wrapper.appendChild(btn);

            if (node.children && node.children.length > 0) {
                const childrenContainer = document.createElement('div');
                childrenContainer.className = 'tree-children';
                this.buildActorTree(node.children, childrenContainer);
                wrapper.appendChild(childrenContainer);
            }

            parentElement.appendChild(wrapper);
        });
    }

    showActorDetail(node) {
        const panel = document.getElementById('actor-detail-panel');
        panel.style.animation = 'none';
        panel.offsetHeight; /* trigger reflow */
        panel.style.animation = 'fadeIn 0.3s ease';

        panel.innerHTML = `
            <h2>${node.name}</h2>
            <div style="margin-top: 20px;">
                <p>${node.description}</p>
                ${node.examples && node.examples.length > 0 ? `
                    <div class="actor-examples" style="margin-top: 20px; background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; border-left: 3px solid #00aeef;">
                        <small style="display:block; color:var(--text-secondary); margin-bottom:10px; font-weight:bold; letter-spacing:1px;">ÖRNEK KULLANIMLAR:</small>
                        <ul style="margin: 0; padding-left: 20px; color: #ddd;">
                            ${node.examples.map(ex => `<li style="margin-bottom: 5px;">${ex}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        `;
    }

    // --- VARIABLES TAB ---
    renderVariables() {
        const grid = document.createElement('div');
        grid.className = 'variables-grid';

        variableData.forEach(variable => {
            const card = document.createElement('div');
            card.className = 'variable-card';
            card.style.setProperty('--card-color', variable.color);

            card.innerHTML = `
                <div class="variable-header">
                    <div class="color-dot"></div>
                    <h3>${variable.name}</h3>
                </div>
                <p class="variable-desc">${variable.description}</p>
                <div class="variable-examples">
                    <small style="color: #888; display: block; margin-bottom: 5px;">KULLANIM ÖRNEKLERİ:</small>
                    ${variable.examples.map(ex => `<code>• ${ex}</code>`).join('')}
                </div>
            `;

            grid.appendChild(card);
        });

        this.container.appendChild(grid);
    }

    // --- SEARCH TAB ---
    renderSearch() {
        const wrapper = document.createElement('div');
        wrapper.className = 'search-container';

        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'search-box';
        input.placeholder = 'Blueprint Node Ara... (Örn: Print String, Event)';
        input.focus();

        const resultsArea = document.createElement('div');
        resultsArea.className = 'node-results';

        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            this.performSearch(query, resultsArea);
        });

        wrapper.appendChild(input);
        wrapper.appendChild(resultsArea);
        this.container.appendChild(wrapper);

        // Show all initially
        this.performSearch('', resultsArea);
    }

    performSearch(query, container) {
        container.innerHTML = '';

        const filtered = nodeData.filter(node =>
            node.name.toLowerCase().includes(query) ||
            node.tags.some(tag => tag.includes(query))
        );

        if (filtered.length === 0) {
            container.innerHTML = '<p style="text-align:center; color: #666;">Sonuç bulunamadı.</p>';
            return;
        }

        // Define Priority Order
        const typeOrder = ['event', 'network', 'flow', 'function', 'math', 'variable'];
        const typeTitles = {
            'event': '🔴 EVENTS (Olaylar)',
            'network': '🟣 NETWORKING (MMO & Server)',
            'flow': '⚪ FLOW CONTROL (Akış Kontrolü)',
            'function': '🔵 FUNCTIONS (Fonksiyonlar)',
            'math': '🟢 MATH (Matematik)',
            'variable': '🟠 VARIABLES (Değişken Erişim)'
        };

        // Group by Type
        const grouped = filtered.reduce((acc, node) => {
            const type = node.type || 'function'; // default
            if (!acc[type]) acc[type] = [];
            acc[type].push(node);
            return acc;
        }, {});

        // Render in Order
        typeOrder.forEach(type => {
            if (grouped[type] && grouped[type].length > 0) {
                // Render Header
                const header = document.createElement('h3');
                header.className = 'section-header';
                header.textContent = typeTitles[type] || type.toUpperCase();
                header.style.cssText = 'color: var(--text-secondary); margin: 20px 0 10px 0; border-bottom: 1px solid #333; padding-bottom: 5px; font-size: 0.9rem; letter-spacing: 1px;';
                container.appendChild(header);

                // Render Cards
                grouped[type].forEach(node => {
                    const card = document.createElement('div');
                    card.className = 'node-card';

                    if (node.type) {
                        card.setAttribute('data-type', node.type);
                    }

                    card.innerHTML = `
                        <div class="node-name" style="color: inherit;">${node.name}</div>
                        <div class="node-desc">${node.description}</div>
                        ${node.examples && node.examples.length > 0 ? `
                            <div class="node-examples">
                                <small style="display:block; color:var(--text-secondary); margin-bottom:5px;">💡 ÖRNEK SENARYOLAR:</small>
                                ${node.examples.map(ex => `<div class="example-line">• ${ex}</div>`).join('')}
                            </div>
                        ` : ''}
                        ${node.type ? `<span class="node-type-badge">${node.type.toUpperCase()}</span>` : ''}
                    `;
                    container.appendChild(card);
                });
            }
        });
    }

    // --- SHORTCUTS TAB ---
    // --- SHORTCUTS TAB ---
    renderShortcuts() {
        const wrapper = document.createElement('div');
        wrapper.className = 'shortcuts-container';

        shortcutData.forEach(section => {
            // 1. Kategori Başlığı
            const header = document.createElement('h3');
            header.className = 'shortcut-section-title';
            header.textContent = section.category;
            header.style.cssText = 'color: #00BFFF; margin: 30px 0 15px 0; border-bottom: 2px solid #333; padding-bottom: 8px; font-size: 1.1rem; letter-spacing: 1px;';
            wrapper.appendChild(header);

            // 1.1 Varsa Kategori Açıklaması
            if (section.description) {
                const desc = document.createElement('p');
                desc.textContent = section.description;
                desc.style.cssText = 'color: #888; margin-bottom: 15px; font-style: italic;';
                wrapper.appendChild(desc);
            }

            // 2. Grid Yapısı
            const grid = document.createElement('div');
            grid.className = 'shortcuts-grid';

            section.items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'shortcut-card';

                card.innerHTML = `
                    <div class="shortcut-key">${item.key}</div>
                    <div class="shortcut-desc">${item.description}</div>
                `;
                grid.appendChild(card);
            });

            wrapper.appendChild(grid);
        });

        this.container.appendChild(wrapper);
    }
}
