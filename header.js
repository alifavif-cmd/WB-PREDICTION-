(function () {
  // === WONGBAGUS PREDICTION HEADER INJECTOR ===

  const CSS = `
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Roboto:wght@400;500&display=swap');

    #wb-header {
      position: sticky;
      top: 0;
      z-index: 99999;
      width: 100%;
      background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
      border-bottom: 2px solid #f59e0b;
      box-shadow: 0 4px 20px rgba(245,158,11,0.3);
      font-family: 'Roboto', sans-serif;
      box-sizing: border-box;
    }

    #wb-header * { box-sizing: border-box; margin: 0; padding: 0; }

    #wb-header-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 16px;
    }

    #wb-logo-wrap {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
    }

    #wb-logo-icon {
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, #f59e0b, #ef4444);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-weight: 900;
      color: #fff;
      font-family: 'Oswald', sans-serif;
      letter-spacing: -1px;
      flex-shrink: 0;
    }

    #wb-logo-text {
      display: flex;
      flex-direction: column;
      line-height: 1;
    }

    #wb-logo-text span:first-child {
      font-family: 'Oswald', sans-serif;
      font-size: 15px;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    #wb-logo-text span:last-child {
      font-family: 'Oswald', sans-serif;
      font-size: 15px;
      font-weight: 700;
      color: #f59e0b;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    #wb-header-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    #wb-search-btn, #wb-home-btn {
      background: rgba(245,158,11,0.15);
      border: 1px solid rgba(245,158,11,0.4);
      color: #f59e0b;
      border-radius: 8px;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 16px;
      transition: all 0.2s;
      text-decoration: none;
    }

    #wb-search-btn:hover, #wb-home-btn:hover {
      background: rgba(245,158,11,0.35);
    }

    #wb-live-badge {
      display: flex;
      align-items: center;
      gap: 6px;
      background: rgba(245,158,11,0.1);
      border: 1px solid rgba(245,158,11,0.3);
      border-radius: 20px;
      padding: 4px 12px;
      font-size: 11px;
      color: #f59e0b;
      font-weight: 500;
      letter-spacing: 0.5px;
    }

    #wb-live-badge::before {
      content: '';
      width: 7px;
      height: 7px;
      background: #22c55e;
      border-radius: 50%;
      animation: wb-pulse 1.5s infinite;
      flex-shrink: 0;
    }

    @keyframes wb-pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.3); }
    }

    #wb-nav {
      display: flex;
      overflow-x: auto;
      gap: 4px;
      padding: 0 12px 10px;
      scrollbar-width: none;
    }

    #wb-nav::-webkit-scrollbar { display: none; }

    .wb-nav-link {
      flex-shrink: 0;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 11.5px;
      font-weight: 500;
      color: #aaa;
      text-decoration: none;
      border: 1px solid rgba(255,255,255,0.1);
      transition: all 0.2s;
      white-space: nowrap;
    }

    .wb-nav-link:hover, .wb-nav-link.active {
      background: rgba(245,158,11,0.2);
      color: #f59e0b;
      border-color: rgba(245,158,11,0.5);
    }

    #wb-search-bar {
      display: none;
      padding: 0 12px 10px;
    }

    #wb-search-bar.open { display: block; }

    #wb-search-input {
      width: 100%;
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(245,158,11,0.4);
      border-radius: 8px;
      padding: 9px 14px;
      color: #fff;
      font-size: 13px;
      outline: none;
      font-family: 'Roboto', sans-serif;
    }

    #wb-search-input::placeholder { color: #666; }
  `;

  // Nav links — sesuaikan href dengan struktur repo
  const NAV_LINKS = [
    { label: '🎨 Paito Warna',    href: 'Paito_Warna.html' },
    { label: '⚡ Rumus Otomatis', href: 'Rumus_Otomatis.html' },
    { label: '📐 Rumus Lengkap',  href: 'Rumus_Lengkap.html' },
    { label: '🔍 Scanner Rumus',  href: 'Scanner_Rumus.html' },
    { label: '🧠 Smart Paito',    href: 'Smart_Paito.html' },
    { label: '📊 Data Togel',     href: 'DataTogel.html' },
  ];

  const HOME_URL = 'index.html';

  function inject() {
    // Style
    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    // Current page
    const currentFile = location.pathname.split('/').pop() || 'index.html';

    // Nav HTML
    const navHTML = NAV_LINKS.map(n => {
      const active = currentFile === n.href ? ' active' : '';
      return `<a class="wb-nav-link${active}" href="${n.href}">${n.label}</a>`;
    }).join('');

    // Header HTML
    const header = document.createElement('div');
    header.id = 'wb-header';
    header.innerHTML = `
      <div id="wb-header-top">
        <a id="wb-logo-wrap" href="${HOME_URL}">
          <div id="wb-logo-icon">W</div>
          <div id="wb-logo-text">
            <span>WONGBAGUS</span>
            <span>PREDICTION</span>
          </div>
        </a>
        <div id="wb-live-badge">LIVE UPDATE</div>
        <div id="wb-header-actions">
          <button id="wb-search-btn" title="Cari">🔍</button>
          <a id="wb-home-btn" href="${HOME_URL}" title="Home">🏠</a>
        </div>
      </div>
      <div id="wb-search-bar">
        <input id="wb-search-input" type="text" placeholder="Cari pasaran togel... (contoh: HK, Sydney)" />
      </div>
      <nav id="wb-nav">${navHTML}</nav>
    `;

    // Insert as first child of body
    document.body.insertBefore(header, document.body.firstChild);

    // Search toggle
    document.getElementById('wb-search-btn').addEventListener('click', function () {
      const bar = document.getElementById('wb-search-bar');
      bar.classList.toggle('open');
      if (bar.classList.contains('open')) {
        document.getElementById('wb-search-input').focus();
      }
    });
  }

  if (document.body) {
    inject();
  } else {
    document.addEventListener('DOMContentLoaded', inject);
  }
})();
