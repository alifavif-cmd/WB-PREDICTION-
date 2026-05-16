import os
tag='<script src="header.js"></script>'
for f in['Rumus_Otomatis.html','Rumus_Lengkap.html','Scanner_Rumus.html','Smart_Paito.html','DataTogel.html','Paito_Warna.html']:
 if not os.path.exists(f):continue
 c=open(f,encoding='utf-8',errors='ignore').read()
 if tag in c:continue
 open(f,'w',encoding='utf-8').write(c.replace('</body>',tag+'\n</body>',1))
 print('OK',f)
