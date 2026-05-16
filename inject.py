import os,re
header='''<style>#wbh{position:fixed;top:0;left:0;right:0;z-index:999999;background:linear-gradient(135deg,#0d0d0d,#1a1a1a);border-bottom:2px solid #f59e0b;font-family:sans-serif;padding:8px 14px;display:flex;align-items:center;gap:10px}#wbh a{color:#f59e0b;text-decoration:none;font-size:11px;padding:4px 10px;border:1px solid rgba(245,158,11,0.4);border-radius:20px}#wbt{font-size:13px;font-weight:900;color:#fff;letter-spacing:1px}#wbt span{color:#f59e0b}body{margin-top:48px!important}</style><div id="wbh"><div id="wbt">WONGBAGUS <span>PREDICTION</span></div><a href="Rumus_Otomatis.html">⚡Otomatis</a><a href="Rumus_Lengkap.html">📐Lengkap</a><a href="Scanner_Rumus.html">🔍Scanner</a><a href="Smart_Paito.html">🧠Smart</a><a href="DataTogel.html">📊Data</a></div>'''
for f in['Rumus_Otomatis.html','Rumus_Lengkap.html','Scanner_Rumus.html','Smart_Paito.html','DataTogel.html','Paito_Warna.html']:
 if not os.path.exists(f):continue
 c=open(f,encoding='utf-8',errors='ignore').read()
 if 'id="wbh"' in c:continue
 c=re.sub(r'</body>',header+'\n</body>',c,count=1,flags=re.IGNORECASE)
 open(f,'w',encoding='utf-8').write(c)
 print('OK',f)
