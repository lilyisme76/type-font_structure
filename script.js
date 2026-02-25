// 실제 전시 원고 데이터
const didacticData = {
    'living': { subtitle: 'Refik Anadol // Türkiye // Ages 4+', title: 'LIVING\npAIntings', body: 'Living Paintings, Refik Anadol’s first major solo exhibition in Los Angeles will open at Jeffrey Deitch on February 14, 2023. The exhibition will showcase the complete series of Anadol’s artworks that are based on California-related datasets. Merging collective memories of urban life and nature with groundbreaking machine learning and visualization technologies, Living Paintings invites a poetic and futuristic contemplation of purposeful human-machine collaborations.', footer: 'Aren’t they beautiful? One more reason to stay inside, I guess. Don’t forget to ask, is this making me smarter, better, more inquisitive, or just stopping me from dreaming bigger?' },
    'doug': { subtitle: 'Sougwen Chung, MIT // USA // All Ages', title: 'DOUG\n(Gen. 4)', body: 'In D.O.U.G._1 (2015), a small robotic arm uses a mounted camera with computer vision to mimic the artist’s hand drawing gestures and synchronously draw along her. D.O.U.G._2 (2017) is an exploration of robotic memory and machine learning as robotic arms generate sketches based on neural nets trained on Sougwen’s drawings gestures. Now, you can draw with D.O.U.G._4.', footer: 'If you and DOUG draw a picture, who’s the artist? Who’s the author of generative art? What else could you use a robotic arm for?' },
    'stupid': { subtitle: 'Various Creators // Global // Ages 12+', title: 'JUST plAIn\nSTUPID', body: 'This space is filled with objects that use AI and go too far. What’s here? LG’S AI ROBOT that watches your house while you’re away and analyzes you when you return. RCA SMART BIRD FEEDER uses its 1080p vision to identify over 10,000 birds. PICTIONARY VS. AI takes all the benefits of the practice of drawing and reduces it to what a data set can perceive.', footer: 'Want to feed your pet or want the robot to? Want to see the birds or just another video? Play with friends or bots?' },
    'norilla': { subtitle: 'Dr. Nesra Yannier // USA // Ages 3+', title: 'NoRILLA', body: 'NoRILLA is part of our recent Step Up To Science exhibit renovation. The renovation’s first of three phases focus on the cause and effect relationships between force and motion. As kids take on different building challenges, test their creations, and rebuild based on their observations and on-screen feedback they explore a myriad of these relationships.', footer: 'What can you build? What does it mean? Are you learning something only a robot can teach you?' },
    'intro': { subtitle: 'Curatorial Statement // TYPE3 2026', title: 'AI/AS26:\nTHE SOURCE', body: 'Robots. Coding. Light. Movement. And, of course, Typography! Surround yourself with a brilliant expression of typographic form and space; where art and technology work together to become instructional, cultural, and educational. In our current world, nothing is permanent. Robotics, automation, AI, multiple realities, and worldwide networks are innovations impacting the way we work, play and express our creativity.', footer: 'See the true creative potential of young minds as they explore a new world of AI and consider crucial questions.' }
};

// UI 설정 데이터
const config = {
    home: [
        { id: 'home-1', label: 'Primary Font: Futura', defaultFont: 'Futura', defaultText: 'FUTURA IS A GEOMETRIC SANS-SERIF TYPEFACE. IN THIS SYSTEM, IT ACTS AS THE PHYSICAL ARCHITECTURE.', size: 42, lead: 100, color: 'var(--theme-text)' },
        { id: 'home-2', label: 'Secondary Font: Space Mono', defaultFont: 'Space Mono', defaultText: 'Space Mono is a fixed-width typographic system designed for terminal environments. It requires a generous leading (140-160%) for optimal legibility.', size: 16, lead: 150, color: 'var(--terminal-green)' },
        { id: 'home-3', label: 'Tertiary Font: Inter', defaultFont: 'Inter', defaultText: 'Inter serves as the neutral user interface layer, bridging the gap between human interaction and machine processing.', size: 14, lead: 130, color: 'var(--electric-cyan)' }
    ],
    wall: [
        { id: 'wall-title', label: 'Wall Title', defaultFont: 'Futura', defaultText: 'Exhibition…in Parts', size: 140, lead: 90, color: 'var(--theme-text)' },
        { id: 'wall-body', label: 'Main Didactic', defaultFont: 'Space Mono', defaultText: 'Welcome to the An Exhibition…in Parts, where art and technology work together. Experience emerging technologies visually expressed through typographic excellence.', size: 24, lead: 150, color: 'var(--terminal-green)' },
        { id: 'wall-desc', label: 'Caption / Specs', defaultFont: 'Inter', defaultText: 'Material: Vinyl', size: 12, lead: 120, color: 'var(--grey)' }
    ],
    text: [
        { id: 'text-subtitle', label: 'Subtitle / Info', defaultFont: 'Inter', defaultText: didacticData['living'].subtitle, size: 12, lead: 120, color: 'var(--electric-cyan)' },
        { id: 'text-title', label: 'Artwork Title', defaultFont: 'Futura', defaultText: didacticData['living'].title, size: 60, lead: 95, color: 'var(--theme-text)' },
        { id: 'text-body', label: 'Didactic Paragraph', defaultFont: 'Space Mono', defaultText: didacticData['living'].body, size: 12, lead: 150, color: 'var(--theme-text)' },
        { id: 'text-pagenum', label: 'Footer / Question', defaultFont: 'Space Mono', defaultText: didacticData['living'].footer, size: 10, lead: 140, color: 'var(--hot-pink)' }
    ],
    guide: [
        { id: 'guide-title', label: 'Chapter Title', defaultFont: 'Futura', defaultText: 'THE SOURCE\nCODE', size: 48, lead: 100, color: 'var(--bg-color)' },
        { id: 'guide-subtitle', label: 'Section Info', defaultFont: 'Inter', defaultText: 'Curatorial Statement', size: 14, lead: 120, color: 'var(--hot-pink)' },
        { id: 'guide-body', label: 'Body Text', defaultFont: 'Space Mono', defaultText: 'The show guide is a natural extension of any exhibition. Consider how the exhibition as a whole can be distilled into the printed form. Keep it simple. Keep it linear.', size: 11, lead: 150, color: 'var(--bg-color)' },
        { id: 'guide-pagenum', label: 'Page Number', defaultFont: 'Space Mono', defaultText: '17', size: 10, lead: 100, color: 'var(--grey)' }
    ]
};

let styles = {};

const colorPalette = [
    { name: 'Auto Text', val: 'var(--theme-text)' },
    { name: 'Auto Inverse', val: 'var(--bg-color)' },
    { name: 'Pure White', val: 'var(--pure-white)' },
    { name: 'Void Black', val: 'var(--void-black)' },
    { name: 'Terminal Green', val: 'var(--terminal-green)' },
    { name: 'Electric Cyan', val: 'var(--electric-cyan)' },
    { name: 'Hot Pink', val: 'var(--hot-pink)' },
    { name: 'Grey', val: 'var(--grey)' }
];

// 테마 토글 및 저장 로직
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
}

function loadContent(key) {
    const data = didacticData[key];
    if(!data) return;
    
    document.getElementById('text-subtitle-text').value = data.subtitle;
    document.getElementById('text-title-text').value = data.title;
    document.getElementById('text-body-text').value = data.body;
    document.getElementById('text-pagenum-text').value = data.footer;

    updateView('text-subtitle');
    updateView('text-title');
    updateView('text-body');
    updateView('text-pagenum');
}

function createSwatches(id, defaultColor) {
    let html = `<div class="swatch-container" id="swatches-${id}">`;
    colorPalette.forEach(c => {
        const isActive = (c.val === defaultColor) ? 'active-swatch' : '';
        html += `<div class="swatch ${isActive}" style="background: ${c.val};" title="${c.name}" onclick="setColor('${id}', '${c.val}', this)"></div>`;
    });
    html += `</div><input type="hidden" id="${id}-color" value="${defaultColor}">`;
    return html;
}

function setColor(id, colorValue, element) {
    document.getElementById(`${id}-color`).value = colorValue;
    const container = document.getElementById(`swatches-${id}`);
    container.querySelectorAll('.swatch').forEach(s => s.classList.remove('active-swatch'));
    element.classList.add('active-swatch');
    updateView(id);
}

function createControls(targetDiv, elements) {
    const container = document.getElementById(targetDiv);
    if (!container) return;

    elements.forEach(el => {
        styles[el.id] = { italic: false, sc: false };
        
        const html = `
        <div class="control-group" style="${targetDiv === 'home-workspace' ? 'border-bottom:none; padding-bottom:0;' : ''}">
            <h3>[ ${el.label} ]</h3>
            <label>Font & Case</label>
            <div class="row">
                <select id="${el.id}-font" onchange="updateView('${el.id}')" style="flex: 2;">
                    <option value="Futura, sans-serif" ${el.defaultFont === 'Futura' ? 'selected' : ''}>Futura</option>
                    <option value="'Space Mono', monospace" ${el.defaultFont === 'Space Mono' ? 'selected' : ''}>Space Mono</option>
                    <option value="'Inter', sans-serif" ${el.defaultFont === 'Inter' ? 'selected' : ''}>Inter</option>
                </select>
                <select id="${el.id}-case" onchange="updateView('${el.id}')" style="flex: 1;">
                    <option value="none">Normal</option>
                    <option value="uppercase">UPPER</option>
                    <option value="lowercase">lower</option>
                </select>
            </div>
            <label>Text Color</label>
            ${createSwatches(el.id, el.color)}
            <label>Text Input</label>
            <textarea id="${el.id}-text" oninput="updateView('${el.id}')">${el.defaultText}</textarea>
            
            <label>Size (<span id="${el.id}-val-size">${el.size}px</span>)</label>
            <input type="range" id="${el.id}-size" min="8" max="1200" value="${el.size}" oninput="updateView('${el.id}')">
            
            <label>Leading (<span id="${el.id}-val-lead">${el.lead}%</span>)</label>
            <input type="range" id="${el.id}-lead" min="70" max="250" step="5" value="${el.lead}" oninput="updateView('${el.id}')">
            
            <label>Style Options</label>
            <div class="style-toggles">
                <button id="btn-italic-${el.id}" class="toggle-btn" style="font-style: italic;" onclick="toggleBtn('${el.id}', 'italic')">Italic</button>
                <button id="btn-sc-${el.id}" class="toggle-btn" style="font-variant: small-caps;" onclick="toggleBtn('${el.id}', 'sc')">Small Caps</button>
            </div>
            <div class="specs" id="${el.id}-specs"></div>
        </div>`;
        
        if (targetDiv === 'home-workspace') {
            container.innerHTML += `
            <div style="display: flex; border: 1px solid var(--border-color); border-radius: 6px; background: var(--panel-bg); overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                <div class="controls-panel" style="width: 380px; border-right: 1px solid var(--border-color); border-top: none; border-bottom: none; border-left: none;">
                    ${html}
                </div>
                <div class="preview-panel" style="border: none; flex-grow: 1; display: flex; align-items: center; justify-content: flex-start; overflow: hidden;">
                    <div id="${el.id}-preview" class="preview-text" style="text-align: left;"></div>
                </div>
            </div>`;
        } else {
            container.innerHTML += html;
        }
    });
}

function updateView(id) {
    const font = document.getElementById(`${id}-font`).value;
    const text = document.getElementById(`${id}-text`).value;
    const size = document.getElementById(`${id}-size`).value;
    const lead = document.getElementById(`${id}-lead`).value;
    const textCase = document.getElementById(`${id}-case`).value;
    const textColor = document.getElementById(`${id}-color`).value;
    
    const preview = document.getElementById(`${id}-preview`);
    if (!preview) return;
    
    preview.innerHTML = text.replace(/\n/g, "<br>");
    preview.style.fontFamily = font;
    preview.style.fontSize = size + 'px';
    preview.style.lineHeight = lead / 100;
    preview.style.textTransform = textCase;
    preview.style.fontStyle = styles[id].italic ? 'italic' : 'normal';
    preview.style.fontVariant = styles[id].sc ? 'small-caps' : 'normal';
    preview.style.color = textColor;

    document.getElementById(`${id}-val-size`).innerText = size + 'px';
    document.getElementById(`${id}-val-lead`).innerText = lead + '%';

    let colorName = 'Custom';
    colorPalette.forEach(c => { if(c.val === textColor) colorName = c.name; });

    const fontName = font.includes('Futura') ? 'Futura' : (font.includes('Space') ? 'Space Mono' : 'Inter');
    document.getElementById(`${id}-specs`).innerHTML = 
        `Font: ${fontName} <br>
         Size: ${size}px | Lead: ${lead}% <br>
         Case: ${textCase} | Color: ${colorName.toUpperCase()}`;
}

function toggleBtn(id, type) {
    styles[id][type] = !styles[id][type];
    document.getElementById(`btn-${type}-${id}`).classList.toggle('active-toggle');
    updateView(id);
}

// 페이지 로드 시 초기화 로직
document.addEventListener("DOMContentLoaded", () => {
    // 저장된 테마 불러오기
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
    }

    // 현재 열려있는 페이지에 맞는 컨트롤러만 생성
    if (document.getElementById('home-workspace')) {
        createControls('home-workspace', config.home);
        config.home.forEach(el => updateView(el.id));
    }
    if (document.getElementById('wall-controls')) {
        createControls('wall-controls', config.wall);
        config.wall.forEach(el => updateView(el.id));
    }
    if (document.getElementById('text-controls')) {
        createControls('text-controls', config.text);
        config.text.forEach(el => updateView(el.id));
    }
    if (document.getElementById('guide-controls')) {
        createControls('guide-controls', config.guide);
        config.guide.forEach(el => updateView(el.id));
    }
});