# Mentes nyitóoldal

Az [előnézet](index.html) közvetlenül böngészőben nyitható. A B6 arculatra épülő oldal elmagyarázza a keresést, bemutatja az adatlap állapotait és a tervezett csomagokat. A havi és éves nézet működik. A fő gomb a csomagokhoz vezet. A kattintható appdemó a külön alkalmazásrepóban van.

A HTML és a stíluslapok önállóan futnak. A gyökérben található `index.html` mellé tartsd meg az `arculat/` mappát és a két webes forrásfájlt. Az előnézet `noindex` jelöléssel készült. A weben a jóváhagyott, ténylegesen elérhető változat kerüljön indexelésre.

## Felhívások az egyes szakaszokban

| Szakasz | Elsődleges gomb | Feltétel |
| --- | --- | --- |
| Kattintható előnézet | Kipróbálom a demót | A demó közvetlenül megnyílik, fiók nélkül. |
| Zárt béta, ha van jelentkezés | Jelentkezem a bétára | Jóváhagyott adatkezelési tájékoztató és működő űrlap. A jelentkezés és a marketingcélú feliratkozás külön döntés. |
| Nyilvános indulás | Letöltöm az appot | Csak ténylegesen elérhető letöltések jelennek meg. Mobilon elsőként a megfelelő platform gombja látszik, a másik is elérhető. |

Ha a béta jelentkezéshez kell űrlap, az e-mail mező mellett legyen a cél rövid magyarázata és a tájékoztató. A kiszolgáló sikeres visszaigazolása után jelenjen meg a „Jelentkezésed beérkezett. A következő lépésről e-mailben szólunk.” szöveg. Hiba esetén jelenjen meg a „Most nem sikerült elküldeni. Próbáld újra.” üzenet. Az érzékenységi beállításokat a webes jelentkezéshez hagyd el.

## Közzététel előtti webes ellenőrzés

- [ ] Ellenőrizd a végleges márkanevet, domaint, oldalcímet, leírást, böngészőikont és megosztási előnézetet. Az indexelhető oldal kapja meg a végleges kanonikus URL-t.
- [ ] Cseréld le a demó CTA-t a szakasznak megfelelő műveletre. Ellenőrizd az összes linket és az elérhető platformokat.
- [ ] Az áruházakról, adatlefedettségről és funkciókról szóló szöveg a tényleges bevezetést kövesse. A besorolás magyarázata és a forrás ellenőrizhető legyen.
- [ ] Az árakat egyeztesd a tényleges csomagokkal, pénznemmel és számlázási időszakkal. Ha az árak változhatnak, közös, ellenőrzött konfigurációból jelenjenek meg.
- [ ] Tedd elérhetővé a támogatási kapcsolatot és a jóváhagyott jogi oldalakat. Ha űrlap kerül az oldalra, ellenőrizd az elküldést, a hibát, az ismételt jelentkezést és a sikeres visszajelzést.
- [ ] Ellenőrizd az oldal betöltését keskeny mobilon, billentyűzettel és nagyított szöveggel. Próbáld végig a csomagok linkjét, a havi/éves váltót és a kérdésblokkokat.
- [ ] Ha látogatottságmérés indul, először csak a webes felhívás és a jóváhagyott jelentkezés eredményét mérd. Keresőkifejezés és érzékenységi szűrő ne kerüljön a webes eseményekbe.

Az [arculati alapok](https://github.com/trimension-developer/mentes-app/blob/main/02-design/arculat/README.md) tartalmazzák a B6 használatát és az ikonforrásokat. A munkatársi kezelőfelület belépési pontját a belső átadásban tartsd.
