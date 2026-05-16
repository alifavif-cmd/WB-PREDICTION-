(function () {
  const CSS = `
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
    #wb-header {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 999999;
      background: linear-gradient(135deg, #0d0d0d, #1a1a1a);
      border-bottom: 2px solid #f59e0b;
      box-shadow: 0 4px 20px rgba(245,158,11,0.3);
      font-family: 'Oswald', sans-serif;
    }
    #wb-header * { box-sizing: border-box; margin: 0; padding: 0; }
    #wb-header-top {
      display: flex; align-items: center; gap: 10px;
      padding: 8px 14px;
    }
    #wb-logo { display: flex; align-items: center; gap: 8px; text-decoration: none; }
    #wb-icon {
      width: 34px; height: 34px;
      background: linear-gradient(135deg,#f59e0b,#ef4444);
      border-radius: 8px; display: flex; align-items: center;
      justify-content: center; font-size: 14px; font-weight: 900;
      color: #fff; flex-shrink: 0;
    }
    #wb-title { line-height: 1; }
    #wb-title span:first-child { display:block; font-size:13px; font-weight:700; color:#fff; letter-spacing:1px; }
    #wb-title span:last-child  { display:block; font-size:13px; font-weight:700; color:#f59e0b; letter-spacing:1px; }
    #wb-live {
      margin-left: auto;
      display: flex; align-items: center; gap: 5px;
      background: rgba(245,158,11,0.1);
      border: 1px solid rgba(245,158,11,0.3);
      border-radius: 20px; padding: 3px 10px;
      font-size: 10px; color: #f59e0b; font-weight: 600;
    }
    #wb-live::before { content:''; width:6px; height:6px; background:#22c55e; border-radius:50%; animation:wbp 1.5s infinite; }
    @keyframes wbp { 0%,100%{opacity:1} 50%{opacity:0.3} }
    #wb-home {
      width:32px; height:32px;
      background:rgba(245,158,11,0.15);
      border:1px solid rgba(245,158,11,0.4);
      border-radius:8px; display:flex; align-items:center;
      justify-content:center; color:#f59e0b; text-decoration:none; font-size:15px;
    }
    #wb-nav { display:flex; overflow-x:auto; gap:4px; padding:0 12px 8px; scrollbar-width:none; }
    #wb-nav::-webkit-scrollbar { display:none; }
    .wbn {
      flex-shrink:0; padding:4px 11px; border-radius:20px;
      font-size:11px; color:#aaa; text-decoration:none;
      border:1px solid rgba(255,255,255,0.1); white-space:nowrap;
    }
    .wbn.active,.wbn:hover { background:rgba(245,158,11,0.2); color:#f59e0b; border-color:rgba(245,158,11,0.5); }
  `;

  const LINKS = [
    ['🎨 Paito','Paito_Warna.html'],
    ['⚡ Otomatis','Rumus_Otomatis.html'],
    ['📐 Lengkap','Rumus_Lengkap.html'],
    ['🔍 Scanner','Scanner_Rumus.html'],
    ['🧠 Smart','Smart_Paito.html'],
    ['📊 Data','DataTogel.html'],
  ];

  function init() {
    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    const cur = location.pathname.split('/').pop();
    const nav = LINKS.map(([l,h]) =>
      `<a class="wbn${cur===h?' active':''}" href="${h}">${l}</a>`
    ).join('');

    const el = document.createElement('div');
    el.id = 'wb-header';
    el.innerHTML = `
      <div id="wb-header-top">
        <a id="wb-logo" href="index.html">
          <div id="wb-icon">WB</div>
          <div id="wb-title"><span>WONGBAGUS</span><span>PREDICTION</span></div>
        </a>
        <div id="wb-live">LIVE</div>
        <a id="wb-home" href="index.html">🏠</a>
      </div>
      <nav id="wb-nav">${nav}</nav>
    `;

    document.body.appendChild(el);

    setTimeout(function() {
      document.body.style.paddingTop = el.offsetHeight + 'px';
    }, 100);
  }

  if (document.body) init();
  else document.addEventListener('DOMContentLoaded', init);
})();
