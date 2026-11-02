# Beetle Booth · חיפושיצילום – contenu du site

Généré par `npm run contenu` à partir de `locales/*.json` et `data/*.json`. Pour modifier un texte, éditer ces fichiers (pas ce document).

Contact affiché : WhatsApp 053-307-0669 (+972 53-307-0669) · Instagram @beetle.booth

## Informations manquantes à demander

1. Prix réels des 3 forfaits et des options (heure supplémentaire, album, cadre sur mesure, tirages sur verre, Audio Memories, tapis rouge) → `data/packages.json`, puis passer `pricesConfirmed` à `true`. En attendant, le site affiche « prix selon l'événement ».
2. Contenu exact de chaque forfait et durée de présence incluse (3 h / 3 h / 4 h mis en exemple), avec ce qui est vraiment inclus (galerie numérique, album, tirage sur verre, tapis rouge…).
3. Zones desservies et frais de déplacement (le site dit « partout en Israël », à confirmer).
4. Dates déjà réservées → `data/booked-dates.json` (liste vide pour l'instant) ; délai minimum de réservation (3 jours par défaut). Plus tard : lien Google Calendar.
5. Prénom de l'épouse d'Adir, confirmation du prénom Adir et accord pour publier leurs photos ; une vraie photo des deux fondateurs ensemble (aucune sur Instagram).
6. Vrais avis clients (avec accord) → `data/reviews.json` ; la section reste masquée tant qu'aucun avis n'est publié.
7. Numéro d'entreprise (עוסק מורשה / ח.פ.) → `data/site.json` › `businessId`, plus mentions légales et conditions d'annulation.
8. Réponses FAQ à confirmer : surface nécessaire pour la Coccinelle et le selfie booth, électricité, durée d'installation, extérieur en cas de pluie.
9. Photos et vidéos en bonne qualité : les visuels viennent d'Instagram (720 à 1440 px, certains tirés de reels). Aucune photo de tirage sur verre ni d'Audio Memories, une seule photo de brit, pas de vraie photo des fondateurs.
10. Accord pour citer le mariage de Raz et Naama, la bat mitzvah de Shira et la municipalité d'Ashkelon (Tou BeAv) ; la photo « Prada Beauty » est affichée sans citer la marque, à confirmer.
11. E-mail de réception des demandes + compte Resend (domaine d'envoi vérifié) pour activer les e-mails de notification et de confirmation.
12. Acompte en ligne : prestataire choisi (Cardcom, Tranzila, Meshulam/Grow ou Stripe), montant (500 ₪ en exemple) et clés.
13. Logo vectoriel officiel : le logo a été redessiné en SVG d'après l'image Instagram (150 px) ; à remplacer si un fichier source existe.
14. Nom de domaine souhaité (ex. beetlebooth.co.il) pour remplacer l'adresse Vercel.
15. Relecture des textes en hébreu par les fondateurs (ton, formulations).

## Forfaits et options

> Prix d'exemple, à remplir (`pricesConfirmed: false` : aucun prix n'est affiché sur le site). Acompte d'exemple : 500 ₪.

### Classic

- À partir de 2200 ₪ (À REMPLIR) · 3 h sur place (À CONFIRMER)
- HE : עמדת הסלפי שלנו, מגנטים בלי הגבלה
- EN : Our selfie booth, unlimited magnets
- FR : Notre selfie booth, magnets à volonté
- ES : Nuestro selfie booth, imanes sin límite
- Inclus : Selfie booth avec anneau lumineux · Tirages magnets illimités · Cadre photo avec vos prénoms et la date · Accessoires et pancartes rigolotes · Un animateur dédié pendant tout l'événement

### Vintage (mis en avant)

- À partir de 3900 ₪ (À REMPLIR) · 3 h sur place (À CONFIRMER)
- HE : החיפושית מגיעה, והופכת לחלק מהעיצוב
- EN : The Beetle arrives and becomes part of the décor
- FR : La Coccinelle arrive et devient une pièce du décor
- ES : El Escarabajo llega y se vuelve parte de la decoración
- Inclus : La Coccinelle sur place, intégrée au décor · Tirages magnets illimités · Cadre photo avec vos prénoms et la date · Accessoires et pancartes rigolotes · Un animateur dédié pendant tout l'événement · Galerie numérique de toutes les photos

### Full Beetle Experience

- À partir de 5900 ₪ (À REMPLIR) · 4 h sur place (À CONFIRMER)
- HE : הכל. החיפושית, עמדת הסלפי והמזכרות שנשארות לתמיד
- EN : Everything. The Beetle, the selfie booth and keepsakes for life
- FR : Tout. La Coccinelle, le selfie booth et des souvenirs pour toujours
- ES : Todo. El Escarabajo, el selfie booth y recuerdos para siempre
- Inclus : La Coccinelle sur place, intégrée au décor · Selfie booth avec anneau lumineux · Tirages magnets illimités · Cadre photo avec vos prénoms et la date · Audio Memories, le livre d'or audio · Tirage sur verre pour les hôtes · Tapis rouge et potelets · Accessoires et pancartes rigolotes · Un animateur dédié pendant tout l'événement · Galerie numérique de toutes les photos

### Options

- שעת פעילות נוספת / Heure supplémentaire : 500 ₪ / heure (À REMPLIR)
- אלבום ברכות עם עותק מכל תמונה / Album livre d'or avec un exemplaire de chaque photo : 450 ₪ (À REMPLIR)
- מסגרת מעוצבת אישית לפי הקונספט / Cadre sur mesure selon votre thème : 250 ₪ (À REMPLIR)
- הדפסות על זכוכית / Tirages sur verre : 600 ₪ (À REMPLIR)
- Audio Memories / Audio Memories : 900 ₪ (À REMPLIR)
- שטיח אדום ועמודי כבוד / Tapis rouge et potelets : 350 ₪ (À REMPLIR)

### Calendrier

- Dates réservées : aucune pour l'instant (À REMPLIR)
- Délai minimum : 3 jours · réservation jusqu'à 18 mois à l'avance

## Textes du site (4 langues)

### meta

**meta.homeTitle**

- HE : עמדת צילום וינטג׳ לאירועים | Beetle Booth חיפושיצילום
- EN : Vintage Photo Booth for Events in Israel | Beetle Booth
- FR : Photo booth vintage pour vos événements en Israël | Beetle Booth
- ES : Fotomatón vintage para eventos en Israel | Beetle Booth

**meta.homeDescription**

- HE : חיפושית וינטג׳ שהפכה לעמדת צילום ומגיעה לאירוע שלכם: מגנטים, עמדת סלפי, הדפסות על זכוכית ומזכרות קוליות. חתונות, בר ובת מצווה, בריתות ואירועי חברה.
- EN : A real vintage Beetle turned photo booth, at your event anywhere in Israel: instant magnets, selfie booth, glass prints and an audio guestbook.
- FR : Une vraie Coccinelle vintage devenue photo booth, sur votre événement en Israël : magnets instantanés, selfie booth, tirages sur verre, livre d'or audio.
- ES : Un auténtico Escarabajo vintage convertido en fotomatón para tu evento en Israel: imanes al instante, selfie booth, impresiones en vidrio y mensajes de voz.

**meta.notFoundTitle**

- HE : העמוד לא נמצא | Beetle Booth
- EN : Page not found | Beetle Booth
- FR : Page introuvable | Beetle Booth
- ES : Página no encontrada | Beetle Booth

### nav

**nav.skip**

- HE : דילוג לתוכן
- EN : Skip to content
- FR : Aller au contenu
- ES : Ir al contenido

**nav.menu**

- HE : תפריט
- EN : Menu
- FR : Menu
- ES : Menú

**nav.close**

- HE : סגירה
- EN : Close
- FR : Fermer
- ES : Cerrar

**nav.home**

- HE : דף הבית
- EN : Home
- FR : Accueil
- ES : Inicio

**nav.language**

- HE : שפה
- EN : Language
- FR : Langue
- ES : Idioma

**nav.experience**

- HE : החוויה
- EN : Experience
- FR : L'expérience
- ES : La experiencia

**nav.packages**

- HE : חבילות
- EN : Packages
- FR : Formules
- ES : Paquetes

**nav.events**

- HE : אירועים
- EN : Events
- FR : Événements
- ES : Eventos

**nav.story**

- HE : הסיפור שלנו
- EN : Our story
- FR : Notre histoire
- ES : Nuestra historia

**nav.contact**

- HE : צור קשר
- EN : Contact
- FR : Contact
- ES : Contacto

**nav.checkDate**

- HE : בדיקת תאריך
- EN : Check your date
- FR : Vérifier ma date
- ES : Consultar fecha

**nav.checkDateShort**

- HE : תאריך
- EN : Date
- FR : Date
- ES : Fecha

### intro

**intro.skip**

- HE : דלג / Skip
- EN : Skip
- FR : Passer
- ES : Saltar

### hero

**hero.eyebrow**

- HE : LUXURY PHOTO BOOTH EXPERIENCE · ISRAEL
- EN : LUXURY PHOTO BOOTH EXPERIENCE · ISRAEL
- FR : LUXURY PHOTO BOOTH EXPERIENCE · ISRAEL
- ES : LUXURY PHOTO BOOTH EXPERIENCE · ISRAEL

**hero.title**

- HE : לא עוד עמדת צילום
- EN : Not just another photo booth
- FR : Pas un photo booth de plus
- ES : No es un fotomatón más

**hero.sub**

- HE : חיפושית וינטג׳ אמיתית שמגיעה לאירוע שלכם, נפתחת, ונהיית המקום שכולם רוצים להצטלם בו.
- EN : A real vintage Beetle that drives to your event, opens its doors and becomes the spot everyone wants a picture in.
- FR : Une vraie Coccinelle vintage qui arrive sur votre événement, ouvre ses portières et devient l'endroit où tout le monde veut sa photo.
- ES : Un auténtico Escarabajo vintage que llega a tu evento, abre sus puertas y se convierte en el lugar donde todos quieren su foto.

**hero.ctaDate**

- HE : בדיקת זמינות
- EN : Check availability
- FR : Voir les disponibilités
- ES : Ver disponibilidad

**hero.ctaWhatsapp**

- HE : וואטסאפ
- EN : WhatsApp
- FR : WhatsApp
- ES : WhatsApp

**hero.alt**

- HE : חיפושית וינטג׳ בצבע קרם עם פנים מואר, בחתונה בשקיעה בין עצי דקל
- EN : Cream vintage Beetle with a glowing interior at a sunset wedding among palm trees
- FR : Coccinelle vintage crème à l'intérieur illuminé, lors d'un mariage au coucher du soleil sous les palmiers
- ES : Escarabajo vintage color crema con el interior iluminado, en una boda al atardecer entre palmeras

### manifesto

**manifesto.eyebrow**

- HE : BEETLE BOOTH · חיפושיצילום
- EN : BEETLE BOOTH · ISRAEL
- FR : BEETLE BOOTH · ISRAËL
- ES : BEETLE BOOTH · ISRAEL

**manifesto.title**

- HE : אתם רק תביאו את האנשים. אנחנו נדאג לכל השאר.
- EN : You bring the people. We take care of the rest.
- FR : Vous amenez les invités. On s'occupe du reste.
- ES : Tú trae a la gente. Nosotros nos ocupamos del resto.

**manifesto.text**

- HE : אנחנו מגיעים, פותחים, מסדרים, ותוך זמן קצר החיפושית כבר חלק מהאירוע. האורחים נכנסים פנימה, צוחקים, מצטלמים ויוצאים עם תמונה מודפסת ביד. אתם? פשוט נהנים מהאירוע שלכם.
- EN : We arrive, open up, set up, and before long the Beetle is part of the party. Guests climb in, laugh, pose and walk away with a printed photo in hand. And you? You just enjoy your event.
- FR : On arrive, on ouvre, on installe, et très vite la Coccinelle fait partie de la fête. Les invités montent à bord, rient, posent et repartent avec leur photo imprimée à la main. Et vous ? Vous profitez simplement de votre événement.
- ES : Llegamos, abrimos, montamos, y en poco tiempo el Escarabajo ya es parte de la fiesta. Los invitados se suben, se ríen, posan y se van con su foto impresa en la mano. ¿Y tú? Solo disfrutas de tu evento.

**manifesto.abroad**

- HE : _(vide)_
- EN : Planning an event in Israel from abroad? We sort everything out over WhatsApp, in English.
- FR : Vous organisez un événement en Israël depuis l'étranger ? On règle tout par WhatsApp, en français.
- ES : ¿Organizas un evento en Israel desde el extranjero? Lo coordinamos todo por WhatsApp, en español.

### services

**services.eyebrow**

- HE : החוויה
- EN : The experience
- FR : L'expérience
- ES : La experiencia

**services.title**

- HE : מה מחכה לאורחים שלכם
- EN : What's waiting for your guests
- FR : Ce qui attend vos invités
- ES : Lo que espera a tus invitados

**services.items.0.id**

- HE : magnets
- EN : magnets
- FR : magnets
- ES : magnets

**services.items.0.name**

- HE : Magnets
- EN : Magnets
- FR : Magnets
- ES : Magnets

**services.items.0.nameLocal**

- HE : מגנטים
- EN : Instant prints
- FR : Tirages instantanés
- ES : Imanes al instante

**services.items.0.text**

- HE : מגנטים לאירועים, כמו שהם צריכים להיות: כל תמונה מודפסת במקום, בעיצוב שבנינו במיוחד לאירוע שלכם, עם השמות והתאריך. האורחים לוקחים אותה הביתה והיא נשארת על המקרר עוד הרבה שנים.
- EN : Every photo is printed on the spot, in a design we create for your event with your names and date. Guests take it home and it lives on the fridge for years.
- FR : Chaque photo est imprimée sur place, dans un design créé pour votre événement avec vos prénoms et la date. Vos invités la rapportent chez eux, et elle reste des années sur le frigo.
- ES : Cada foto se imprime en el momento, con un diseño creado para tu evento con vuestros nombres y la fecha. Los invitados se la llevan a casa y se queda años en la nevera.

**services.items.0.alt**

- HE : רצועות תמונות מודפסות עם סרטים לבנים, מוחזקות ביד
- EN : Printed photo strips with white bows, held in a hand
- FR : Bandes photo imprimées avec des nœuds blancs, tenues à la main
- ES : Tiras de fotos impresas con lazos blancos, sostenidas en la mano

**services.items.1.id**

- HE : selfie
- EN : selfie
- FR : selfie
- ES : selfie

**services.items.1.name**

- HE : Selfie Booth
- EN : Selfie Booth
- FR : Selfie Booth
- ES : Selfie Booth

**services.items.1.nameLocal**

- HE : עמדת סלפי
- EN : Retro booth
- FR : Borne rétro
- ES : Cabina retro

**services.items.1.text**

- HE : עמדת סלפי לחתונה, לבר מצווה או לסתם מסיבה: עמדת עץ בסגנון רטרו עם טבעת אור. נעמדים, מחייכים, והתמונה כבר יוצאת. פשוטה לגמרי, גם לסבתא וגם לילדים.
- EN : A retro wooden booth with a ring light. Step up, smile, and the print is already coming out. Easy for grandma, easy for the kids.
- FR : Une borne en bois au style rétro avec un anneau lumineux. On se place, on sourit, et la photo sort déjà. Simple pour la grand-mère comme pour les enfants.
- ES : Una cabina de madera de estilo retro con aro de luz. Te pones, sonríes y la foto ya está saliendo. Fácil para la abuela y para los niños.

**services.items.1.alt**

- HE : עמדת סלפי מעץ עם טבעת אור ומסך, באירוע
- EN : Wooden selfie booth with a ring light and screen at an event
- FR : Borne selfie en bois avec anneau lumineux et écran, pendant un événement
- ES : Cabina selfie de madera con aro de luz y pantalla en un evento

**services.items.2.id**

- HE : glass
- EN : glass
- FR : glass
- ES : glass

**services.items.2.name**

- HE : Glass Prints
- EN : Glass Prints
- FR : Glass Prints
- ES : Glass Prints

**services.items.2.nameLocal**

- HE : הדפסה על זכוכית
- EN : Printed on glass
- FR : Tirages sur verre
- ES : Impresión en vidrio

**services.items.2.text**

- HE : התמונה הכי יפה מהערב, מודפסת על זכוכית. מזכרת יוקרתית לבעלי השמחה, שלא נעלמת בתוך אלבום.
- EN : The best shot of the night, printed on glass. A premium keepsake for the hosts that won't get lost in an album.
- FR : La plus belle photo de la soirée, imprimée sur verre. Un souvenir haut de gamme pour ceux qu'on fête, qui ne finira pas oublié dans un album.
- ES : La mejor foto de la noche, impresa en vidrio. Un recuerdo de lujo para los anfitriones que no se pierde en un álbum.

**services.items.3.id**

- HE : audio
- EN : audio
- FR : audio
- ES : audio

**services.items.3.name**

- HE : Audio Memories
- EN : Audio Memories
- FR : Audio Memories
- ES : Audio Memories

**services.items.3.nameLocal**

- HE : מזכרות קוליות
- EN : Voice guestbook
- FR : Livre d'or audio
- ES : Libro de firmas de voz

**services.items.3.text**

- HE : מרימים את השפופרת ומשאירים ברכה בקול. בסוף הערב מקבלים את כל ההקלטות: הצחוקים, הדמעות והמשפטים שאף אחד לא היה כותב בספר ברכות.
- EN : Pick up the receiver and leave a message. At the end of the night you get every recording: the laughs, the tears and the things nobody would ever write in a guestbook.
- FR : On décroche le combiné et on laisse un message. En fin de soirée, vous recevez tous les enregistrements : les rires, les larmes et les mots que personne n'aurait écrits dans un livre d'or.
- ES : Descuelgas el auricular y dejas un mensaje. Al final de la noche recibes todas las grabaciones: las risas, las lágrimas y lo que nadie escribiría en un libro de firmas.

### decor

**decor.eyebrow**

- HE : לא רק פינת מגנטים
- EN : Not just a magnet corner
- FR : Pas juste un coin magnets
- ES : No es solo un rincón de imanes

**decor.title**

- HE : כשהעמדה משתלבת בעיצוב, היא הופכת לאטרקציה
- EN : Built into the décor, a booth becomes an attraction
- FR : Intégré au décor, le photo booth devient une attraction
- ES : Integrado en la decoración, el fotomatón se vuelve atracción

**decor.text**

- HE : רוב האנשים מזמינים עמדת צילום ומניחים אותה בפינה. אנחנו חושבים אחרת: ממקמים את החיפושית ליד הכניסה או מול הנוף, מתאימים אותה לקונספט של האירוע ומעצבים את המזכרות באותה שפה. ככה היא לא עוד שירות. היא חלק מהסיפור.
- EN : Most people book a photo booth and tuck it in a corner. We do it differently: we place the Beetle by the entrance or in front of the view, match it to your event's concept and design the keepsakes in the same style. So it's not a service on the side. It's part of the story.
- FR : La plupart des gens réservent un photo booth et le poussent dans un coin. Nous faisons l'inverse : la Coccinelle se place à l'entrée ou face à la vue, s'accorde au thème de l'événement, et les souvenirs sont dessinés dans le même esprit. Ce n'est plus une prestation à côté. C'est une partie de l'histoire.
- ES : La mayoría reserva un fotomatón y lo deja en una esquina. Nosotros lo hacemos al revés: colocamos el Escarabajo en la entrada o frente a las vistas, lo adaptamos al concepto del evento y diseñamos los recuerdos con el mismo estilo. Así deja de ser un servicio aparte y pasa a ser parte de la historia.

**decor.points.0**

- HE : מיקום שמושך את העין: כניסה, רחבה או נוף
- EN : A spot that catches the eye: entrance, dance floor or view
- FR : Un emplacement qui attire le regard : entrée, piste ou vue
- ES : Un lugar que atrae miradas: entrada, pista o vistas

**decor.points.1**

- HE : מסגרת לתמונה בצבעים ובשמות שלכם
- EN : A photo frame with your colours and names
- FR : Un cadre photo à vos couleurs et à vos prénoms
- ES : Un marco de foto con vuestros colores y nombres

**decor.points.2**

- HE : פרחים, שלטים ותאורה שמתחברים לעיצוב
- EN : Flowers, signs and lighting that tie into your design
- FR : Fleurs, panneaux et lumière en accord avec votre décor
- ES : Flores, carteles y luz que encajan con tu decoración

**decor.alt**

- HE : חיפושית קרם עם זר פרחים ורודים ואדומים על הכנף ותאורה חמה בפנים
- EN : Cream Beetle with pink and red flowers on the fender and a warm glow inside
- FR : Coccinelle crème avec un bouquet de fleurs roses et rouges sur l'aile et une lumière chaude à l'intérieur
- ES : Escarabajo crema con flores rosas y rojas sobre la aleta y una luz cálida en el interior

### statement

**statement.eyebrow**

- HE : 21 שניות
- EN : 21 seconds
- FR : 21 secondes
- ES : 21 segundos

**statement.title**

- HE : כן, אנחנו באמת מגיעים עם חיפושית.
- EN : Yes, we really show up in a Beetle.
- FR : Oui, on arrive vraiment en Coccinelle.
- ES : Sí, de verdad llegamos en un Escarabajo.

**statement.text**

- HE : וכן, כולם אומרים וואו בסוף.
- EN : And yes, everyone says wow at the end.
- FR : Et oui, tout le monde dit « waouh » à la fin.
- ES : Y sí, todos dicen «guau» al final.

**statement.alt**

- HE : חיפושית וינטג׳ על שטיח אדום בטיילת של אשקלון בשקיעה
- EN : Vintage Beetle on a red carpet on the Ashkelon promenade at sunset
- FR : Coccinelle vintage sur un tapis rouge, sur la promenade d'Ashkelon au coucher du soleil
- ES : Escarabajo vintage sobre una alfombra roja en el paseo marítimo de Ashkelon al atardecer

### packages

**packages.eyebrow**

- HE : חבילות
- EN : Packages
- FR : Formules
- ES : Paquetes

**packages.title**

- HE : בחרו את החוויה שלכם
- EN : Choose your experience
- FR : Choisissez votre expérience
- ES : Elige tu experiencia

**packages.intro**

- HE : שלוש חבילות שאפשר להתאים לכל אירוע. כל חבילה כוללת עיצוב אישי של התמונות ומפעיל שלנו לאורך כל האירוע.
- EN : Three packages that adapt to any event. Each one includes a custom photo design and one of our team on site for the whole event.
- FR : Trois formules qui s'adaptent à chaque événement. Toutes comprennent un design photo personnalisé et un membre de notre équipe sur place du début à la fin.
- ES : Tres paquetes que se adaptan a cualquier evento. Todos incluyen un diseño de foto personalizado y alguien de nuestro equipo durante todo el evento.

**packages.from**

- HE : החל מ־
- EN : From 
- FR : À partir de 
- ES : Desde 

**packages.onRequest**

- HE : המחיר לפי סוג האירוע
- EN : Priced per event
- FR : Tarif selon l'événement
- ES : Precio según el evento

**packages.hours**

- HE : {n} שעות פעילות
- EN : {n} hours on site
- FR : {n} heures sur place
- ES : {n} horas en el evento

**packages.includesTitle**

- HE : מה כלול
- EN : Included
- FR : Inclus
- ES : Incluye

**packages.popular**

- HE : הכי מבוקש
- EN : Most booked
- FR : La plus demandée
- ES : El más pedido

**packages.book**

- HE : שריון תאריך
- EN : Reserve a date
- FR : Réserver la date
- ES : Reservar fecha

**packages.optionsTitle**

- HE : תוספות לכל חבילה
- EN : Add-ons for any package
- FR : Options pour toutes les formules
- ES : Extras para cualquier paquete

**packages.perHour**

- HE : לשעה
- EN : per hour
- FR : l'heure
- ES : por hora

**packages.note**

- HE : המחיר הסופי תלוי בתאריך, במיקום ובשעות. שלחו בקשה ונחזור אליכם עם הצעה מסודרת.
- EN : The final price depends on the date, location and hours. Send a request and we'll come back with a clear quote.
- FR : Le prix final dépend de la date, du lieu et des horaires. Envoyez une demande et nous revenons vers vous avec un devis clair.
- ES : El precio final depende de la fecha, el lugar y el horario. Envía tu solicitud y te respondemos con un presupuesto claro.

**packages.includes.beetle**

- HE : החיפושית במקום, משולבת בעיצוב
- EN : The Beetle on site, styled into your décor
- FR : La Coccinelle sur place, intégrée au décor
- ES : El Escarabajo en el lugar, integrado en la decoración

**packages.includes.selfieBooth**

- HE : עמדת סלפי עם טבעת אור
- EN : Selfie booth with ring light
- FR : Selfie booth avec anneau lumineux
- ES : Selfie booth con aro de luz

**packages.includes.magnetsUnlimited**

- HE : הדפסות מגנטים ללא הגבלה
- EN : Unlimited magnet prints
- FR : Tirages magnets illimités
- ES : Imanes impresos sin límite

**packages.includes.frameNames**

- HE : עיצוב מסגרת עם השמות והתאריך
- EN : Frame design with your names and date
- FR : Cadre photo avec vos prénoms et la date
- ES : Marco con vuestros nombres y la fecha

**packages.includes.audio**

- HE : Audio Memories: ברכות קוליות
- EN : Audio Memories voice guestbook
- FR : Audio Memories, le livre d'or audio
- ES : Audio Memories, libro de firmas de voz

**packages.includes.glassHosts**

- HE : הדפסה על זכוכית לבעלי השמחה
- EN : Glass print for the hosts
- FR : Tirage sur verre pour les hôtes
- ES : Impresión en vidrio para los anfitriones

**packages.includes.redCarpet**

- HE : שטיח אדום ועמודי כבוד
- EN : Red carpet and stanchions
- FR : Tapis rouge et potelets
- ES : Alfombra roja y postes

**packages.includes.props**

- HE : אביזרים ושלטים מצחיקים
- EN : Props and funny signs
- FR : Accessoires et pancartes rigolotes
- ES : Accesorios y carteles divertidos

**packages.includes.host**

- HE : מפעיל צמוד לאורך האירוע
- EN : A dedicated host all event long
- FR : Un animateur dédié pendant tout l'événement
- ES : Un anfitrión dedicado todo el evento

**packages.includes.gallery**

- HE : גלריה דיגיטלית של כל התמונות
- EN : Digital gallery of every photo
- FR : Galerie numérique de toutes les photos
- ES : Galería digital con todas las fotos

**packages.options.extraHour**

- HE : שעת פעילות נוספת
- EN : Extra hour
- FR : Heure supplémentaire
- ES : Hora extra

**packages.options.album**

- HE : אלבום ברכות עם עותק מכל תמונה
- EN : Guestbook album with a copy of every photo
- FR : Album livre d'or avec un exemplaire de chaque photo
- ES : Álbum de firmas con una copia de cada foto

**packages.options.customFrame**

- HE : מסגרת מעוצבת אישית לפי הקונספט
- EN : Bespoke frame design to match your concept
- FR : Cadre sur mesure selon votre thème
- ES : Marco a medida según tu concepto

**packages.options.glassPrints**

- HE : הדפסות על זכוכית
- EN : Glass prints
- FR : Tirages sur verre
- ES : Impresiones en vidrio

**packages.options.audio**

- HE : Audio Memories
- EN : Audio Memories
- FR : Audio Memories
- ES : Audio Memories

**packages.options.redCarpet**

- HE : שטיח אדום ועמודי כבוד
- EN : Red carpet and stanchions
- FR : Tapis rouge et potelets
- ES : Alfombra roja y postes

### events

**events.eyebrow**

- HE : אירועים
- EN : Events
- FR : Événements
- ES : Eventos

**events.title**

- HE : לאיזה אירוע?
- EN : What are you celebrating?
- FR : Pour quelle occasion ?
- ES : ¿Qué celebras?

**events.intro**

- HE : בחוץ או בפנים, ביום או בלילה, מחתונה ועד אירוע עירוני על החוף.
- EN : Indoors or out, day or night, from weddings to a city festival on the beach.
- FR : En intérieur ou en extérieur, de jour comme de nuit, du mariage au festival municipal sur la plage.
- ES : Dentro o fuera, de día o de noche, de una boda a una fiesta municipal en la playa.

**events.items.0.id**

- HE : wedding
- EN : wedding
- FR : wedding
- ES : wedding

**events.items.0.name**

- HE : חתונות
- EN : Weddings
- FR : Mariages
- ES : Bodas

**events.items.0.text**

- HE : החיפושית בכניסה, המגנטים מחכים לאורחים ביציאה.
- EN : The Beetle at the entrance, magnets waiting for guests on the way out.
- FR : La Coccinelle à l'entrée, les magnets qui attendent les invités à la sortie.
- ES : El Escarabajo en la entrada, los imanes esperando a los invitados a la salida.

**events.items.0.alt**

- HE : החיפושית מוארת בחתונה בערב, עם שלט Mr & Mrs
- EN : The Beetle lit up at an evening wedding with a Mr & Mrs sign
- FR : La Coccinelle illuminée lors d'un mariage en soirée, avec une pancarte Mr & Mrs
- ES : El Escarabajo iluminado en una boda de noche con un cartel Mr & Mrs

**events.items.1.id**

- HE : mitzvah
- EN : mitzvah
- FR : mitzvah
- ES : mitzvah

**events.items.1.name**

- HE : בר ובת מצווה
- EN : Bar & bat mitzvahs
- FR : Bar et bat mitzvah
- ES : Bar y bat mitzvah

**events.items.1.text**

- HE : כל החברים נדחסים פנימה. הצחוקים כבר על התמונה.
- EN : All the friends squeeze in. The laughter's already in the photo.
- FR : Tous les copains se serrent à l'intérieur. Les fous rires sont déjà sur la photo.
- ES : Todos los amigos se meten dentro. Las risas ya están en la foto.

**events.items.1.alt**

- HE : בני נוער צוחקים בתוך החיפושית
- EN : Teenagers laughing inside the Beetle
- FR : Des adolescents qui rient dans la Coccinelle
- ES : Adolescentes riendo dentro del Escarabajo

**events.items.2.id**

- HE : brit
- EN : brit
- FR : brit
- ES : brit

**events.items.2.name**

- HE : ברית ובריתה
- EN : Brit & baby namings
- FR : Brit et naissances
- ES : Brit y nacimientos

**events.items.2.text**

- HE : כולם מביאים צלם לברית. לא כולם מביאים אטרקציה שמדברים עליה.
- EN : Everyone brings a photographer. Not everyone brings the thing guests keep talking about.
- FR : Tout le monde fait venir un photographe. Pas tout le monde l'attraction dont les invités parlent encore.
- ES : Todos llevan fotógrafo. No todos llevan la atracción de la que los invitados siguen hablando.

**events.items.2.alt**

- HE : עמדת סלפי מעץ ליד קשת בלונים ודובונים בברית
- EN : Wooden selfie booth next to a balloon arch and teddy bears at a brit
- FR : Borne selfie en bois à côté d'une arche de ballons et d'ours en peluche lors d'une brit
- ES : Cabina selfie de madera junto a un arco de globos y osos de peluche en un brit

**events.items.3.id**

- HE : birthday
- EN : birthday
- FR : birthday
- ES : birthday

**events.items.3.name**

- HE : ימי הולדת
- EN : Birthdays
- FR : Anniversaires
- ES : Cumpleaños

**events.items.3.text**

- HE : גיל 1 או גיל 40, תמונה ביד לכל אחד.
- EN : Turning 1 or turning 40, a print in everyone's hand.
- FR : 1 an ou 40 ans, une photo à la main pour chacun.
- ES : 1 año o 40, una foto en la mano para cada uno.

**events.items.3.alt**

- HE : תמונות מודפסות ממסיבת יום הולדת
- EN : Printed photos from a birthday party
- FR : Photos imprimées d'une fête d'anniversaire
- ES : Fotos impresas de una fiesta de cumpleaños

**events.items.4.id**

- HE : purim
- EN : purim
- FR : purim
- ES : purim

**events.items.4.name**

- HE : פורים ומסיבות
- EN : Purim & parties
- FR : Pourim et soirées
- ES : Purim y fiestas

**events.items.4.text**

- HE : תחפושות, אביזרים, ותור שלא נגמר.
- EN : Costumes, props and a queue that never ends.
- FR : Déguisements, accessoires et une file qui ne désemplit pas.
- ES : Disfraces, accesorios y una cola que no se acaba.

**events.items.4.alt**

- HE : ילדים עם אביזרים מצחיקים בתוך החיפושית
- EN : Kids with funny props inside the Beetle
- FR : Des enfants avec des accessoires rigolos dans la Coccinelle
- ES : Niños con accesorios divertidos dentro del Escarabajo

**events.items.5.id**

- HE : corporate
- EN : corporate
- FR : corporate
- ES : corporate

**events.items.5.name**

- HE : אירועי חברה
- EN : Corporate events
- FR : Entreprises
- ES : Empresas

**events.items.5.text**

- HE : השקות, כנסים וערבי צוות, עם המיתוג שלכם על כל תמונה.
- EN : Launches, conferences and team nights, with your branding on every print.
- FR : Lancements, congrès et soirées d'équipe, avec votre marque sur chaque photo.
- ES : Lanzamientos, congresos y noches de equipo, con tu marca en cada foto.

**events.items.5.alt**

- HE : רצועת תמונה ממותגת מאירוע השקה
- EN : Branded photo strip from a launch event
- FR : Bande photo aux couleurs d'une marque lors d'un lancement
- ES : Tira de fotos con marca en un evento de lanzamiento

**events.items.6.id**

- HE : municipal
- EN : municipal
- FR : municipal
- ES : municipal

**events.items.6.name**

- HE : אירועים עירוניים ובחוץ
- EN : City & outdoor events
- FR : Municipalités et plein air
- ES : Municipios y aire libre

**events.items.6.text**

- HE : על החוף, בפארק או בכיכר. כמו בט״ו באב בחופי אשקלון.
- EN : On the beach, in a park or a town square. Like Tu B'Av on the beaches of Ashkelon.
- FR : Sur la plage, dans un parc ou sur une place. Comme pour Tou BeAv sur les plages d'Ashkelon.
- ES : En la playa, en un parque o en una plaza. Como en Tu BeAv en las playas de Ashkelon.

**events.items.6.alt**

- HE : מתקינים את החיפושית על שטיח אדום בטיילת אשקלון
- EN : Setting up the Beetle on a red carpet on the Ashkelon promenade
- FR : Installation de la Coccinelle sur un tapis rouge, promenade d'Ashkelon
- ES : Montando el Escarabajo sobre una alfombra roja en el paseo de Ashkelon

**events.items.7.id**

- HE : summer
- EN : summer
- FR : summer
- ES : summer

**events.items.7.name**

- HE : אירועי יום וקיץ
- EN : Daytime & summer
- FR : Journée et été
- ES : Día y verano

**events.items.7.text**

- HE : אור טבעי, ים ושקיעה. החיפושית יודעת להצטלם.
- EN : Natural light, the sea and a sunset. The Beetle knows its angles.
- FR : Lumière naturelle, la mer et le coucher du soleil. La Coccinelle connaît son meilleur profil.
- ES : Luz natural, el mar y el atardecer. El Escarabajo sabe posar.

**events.items.7.alt**

- HE : תינוקת יושבת על מכסה החיפושית מול הים בשקיעה
- EN : A baby sitting on the Beetle's hood by the sea at sunset
- FR : Un bébé assis sur le capot de la Coccinelle face à la mer au coucher du soleil
- ES : Un bebé sentado en el capó del Escarabajo frente al mar al atardecer

### steps

**steps.eyebrow**

- HE : איך זה עובד
- EN : How it works
- FR : Comment ça marche
- ES : Cómo funciona

**steps.title**

- HE : ארבעה צעדים, אפס כאב ראש
- EN : Four steps, zero headaches
- FR : Quatre étapes, zéro prise de tête
- ES : Cuatro pasos, cero complicaciones

**steps.items.0.title**

- HE : בודקים תאריך
- EN : Check your date
- FR : Vous choisissez la date
- ES : Consultas la fecha

**steps.items.0.text**

- HE : בוחרים יום בלוח, ואנחנו מאשרים שהחיפושית פנויה.
- EN : Pick a day on the calendar and we confirm the Beetle is free.
- FR : Un jour dans le calendrier, et nous confirmons que la Coccinelle est libre.
- ES : Eliges un día en el calendario y confirmamos que el Escarabajo está libre.

**steps.items.1.title**

- HE : בוחרים חבילה ועיצוב
- EN : Package and design
- FR : Formule et design
- ES : Paquete y diseño

**steps.items.1.text**

- HE : מחליטים יחד על החבילה, ומעצבים את מסגרת התמונה עם השמות, התאריך והצבעים שלכם.
- EN : We choose the package together and design your photo frame with your names, date and colours.
- FR : On choisit ensemble la formule et on dessine votre cadre photo avec vos prénoms, la date et vos couleurs.
- ES : Elegimos juntos el paquete y diseñamos el marco de tu foto con vuestros nombres, la fecha y los colores.

**steps.items.2.title**

- HE : החיפושית מגיעה
- EN : The Beetle arrives
- FR : La Coccinelle arrive
- ES : Llega el Escarabajo

**steps.items.2.text**

- HE : מגיעים לפני האורחים, מסדרים ומתחברים לעיצוב. אתם לא צריכים לעשות כלום.
- EN : We get there before your guests, set up and blend into the décor. You don't lift a finger.
- FR : On arrive avant vos invités, on installe et on s'intègre au décor. Vous n'avez rien à faire.
- ES : Llegamos antes que los invitados, montamos y nos integramos en la decoración. Tú no tienes que hacer nada.

**steps.items.3.title**

- HE : האורחים יוצאים עם מזכרת
- EN : Guests leave with keepsakes
- FR : Vos invités repartent avec un souvenir
- ES : Los invitados se llevan un recuerdo

**steps.items.3.text**

- HE : תמונות מודפסות ביד, ברכות קוליות ורגעים שנשארים הרבה אחרי שהמוזיקה נגמרת.
- EN : Prints in hand, voice messages and moments that last long after the music stops.
- FR : Des photos imprimées, des messages audio et des moments qui restent bien après la dernière chanson.
- ES : Fotos impresas, mensajes de voz y momentos que duran mucho después de la última canción.

### story

**story.eyebrow**

- HE : הסיפור שלנו
- EN : Our story
- FR : Notre histoire
- ES : Nuestra historia

**story.title**

- HE : איך הכל התחיל
- EN : How it all started
- FR : Comment tout a commencé
- ES : Cómo empezó todo

**story.paragraphs.0**

- HE : קצת וינטג׳, הרבה אופי, ושני אנשים שקצת הגזימו עם החלום שלהם.
- EN : A little vintage, a lot of character, and two people who went slightly overboard with their dream.
- FR : Un peu de vintage, beaucoup de caractère, et deux personnes qui ont un peu exagéré avec leur rêve.
- ES : Un poco de vintage, mucho carácter y dos personas que se pasaron un poco con su sueño.

**story.paragraphs.1**

- HE : החיפושית שלנו לא תמיד נראתה ככה. לפני כל הקסם היא הייתה חלודה, עם פח קלוף והגה עייף. פירקנו, שייפנו, ריפדנו מחדש בעור בצבע קרם, הוספנו תאורה חמה ובנינו בתוכה עמדת צילום. מאחורי כל פרט קטן עומד אדיר, שבנה הכל במו ידיו.
- EN : Our Beetle didn't always look like this. Before the magic it was rusty, with peeling paint and a tired steering wheel. We took it apart, sanded it down, reupholstered it in cream leather, added warm lighting and built a photo booth inside. Behind every small detail is Adir, who built it all with his own hands.
- FR : Notre Coccinelle n'a pas toujours eu cette allure. Avant la magie, elle était rouillée, la tôle à nu et le volant fatigué. On l'a démontée, poncée, retapissée de cuir crème, on a ajouté une lumière chaude et construit une cabine photo à l'intérieur. Derrière chaque petit détail, il y a Adir, qui a tout construit de ses mains.
- ES : Nuestro Escarabajo no siempre fue así. Antes de la magia estaba oxidado, con la chapa pelada y un volante cansado. Lo desmontamos, lo lijamos, lo retapizamos en cuero crema, le pusimos luz cálida y construimos dentro una cabina de fotos. Detrás de cada pequeño detalle está Adir, que lo construyó todo con sus propias manos.

**story.paragraphs.2**

- HE : ומאחורי החיפושית עומד זוג נשוי, קצת משוגע, שפשוט אוהב את מה שהוא עושה. בשבילנו זו לא עוד הזמנה. זה הרגע שבו מישהו נכנס פנימה, מסתכל סביב ואומר: וואו.
- EN : And behind the Beetle is a married couple, a little crazy, who simply love what they do. For us it's never just another booking. It's the moment someone climbs in, looks around and says: wow.
- FR : Et derrière la Coccinelle, il y a un couple marié, un peu fou, qui aime tout simplement ce qu'il fait. Pour nous, ce n'est jamais une réservation de plus. C'est le moment où quelqu'un monte à bord, regarde autour de lui et dit : waouh.
- ES : Y detrás del Escarabajo hay una pareja casada, un poco loca, a la que simplemente le encanta lo que hace. Para nosotros nunca es una reserva más. Es el momento en que alguien se sube, mira alrededor y dice: guau.

**story.quote**

- HE : POV: אתם בשנת 2026, אבל סגרתם עמדת צילום שלקחה אתכם למסע בזמן.
- EN : POV: it's 2026, but you booked a photo booth that took you back in time.
- FR : POV : on est en 2026, mais vous avez réservé un photo booth qui vous fait voyager dans le temps.
- ES : POV: estás en 2026, pero reservaste un fotomatón que te llevó de viaje en el tiempo.

**story.altBefore**

- HE : פנים החיפושית לפני השיפוץ: פח חלוד והגה ישן
- EN : The Beetle's interior before restoration: rusty metal and an old steering wheel
- FR : L'intérieur de la Coccinelle avant restauration : tôle rouillée et vieux volant
- ES : El interior del Escarabajo antes de la restauración: chapa oxidada y un volante viejo

**story.altWork**

- HE : אדיר מתקין את המושב החדש בצבע קרם בתוך החיפושית
- EN : Adir fitting the new cream seat inside the Beetle
- FR : Adir installe le nouveau siège crème dans la Coccinelle
- ES : Adir colocando el nuevo asiento crema dentro del Escarabajo

**story.altFounder**

- HE : אדיר עומד ליד החיפושית
- EN : Adir standing next to the Beetle
- FR : Adir debout à côté de la Coccinelle
- ES : Adir junto al Escarabajo

### gallery

**gallery.eyebrow**

- HE : מזכרות
- EN : Keepsakes
- FR : Souvenirs
- ES : Recuerdos

**gallery.title**

- HE : רגעים שנשארים
- EN : Moments that stay
- FR : Des moments qui restent
- ES : Momentos que se quedan

**gallery.open**

- HE : הגדלת התמונה
- EN : Enlarge photo
- FR : Agrandir la photo
- ES : Ampliar foto

**gallery.close**

- HE : סגירה
- EN : Close
- FR : Fermer
- ES : Cerrar

**gallery.prev**

- HE : התמונה הקודמת
- EN : Previous photo
- FR : Photo précédente
- ES : Foto anterior

**gallery.next**

- HE : התמונה הבאה
- EN : Next photo
- FR : Photo suivante
- ES : Foto siguiente

**gallery.alts.0**

- HE : שתי רצועות תמונות של זוג, עם סרטים לבנים
- EN : Two photo strips of a couple with white bows
- FR : Deux bandes photo d'un couple avec des nœuds blancs
- ES : Dos tiras de fotos de una pareja con lazos blancos

**gallery.alts.1**

- HE : בנות צוחקות בתוך החיפושית בשקיעה
- EN : Girls laughing inside the Beetle at sunset
- FR : Des filles qui rient dans la Coccinelle au coucher du soleil
- ES : Chicas riendo dentro del Escarabajo al atardecer

**gallery.alts.2**

- HE : רצועות תמונות בכרטיס קראפט עם פרחים מיובשים
- EN : Photo strips on kraft card with dried flowers
- FR : Bandes photo sur carton kraft avec fleurs séchées
- ES : Tiras de fotos en cartulina kraft con flores secas

**gallery.alts.3**

- HE : ילדים עם אביזרים מצחיקים בתוך החיפושית
- EN : Kids with funny props inside the Beetle
- FR : Des enfants avec des accessoires rigolos dans la Coccinelle
- ES : Niños con accesorios divertidos dentro del Escarabajo

**gallery.alts.4**

- HE : רצועת תמונות עם זר פרחים על הראש
- EN : Photo strip with a flower crown
- FR : Bande photo avec une couronne de fleurs
- ES : Tira de fotos con una corona de flores

**gallery.alts.5**

- HE : חברים מצטלמים יחד מול קיר לבנים
- EN : Friends posing together in front of a brick wall
- FR : Des amis qui posent devant un mur de briques
- ES : Amigos posando juntos frente a una pared de ladrillo

**gallery.alts.6**

- HE : רצועות תמונות על רקע שחור עם סרטים
- EN : Photo strips on black card with bows
- FR : Bandes photo sur carton noir avec des nœuds
- ES : Tiras de fotos en cartulina negra con lazos

**gallery.alts.7**

- HE : תינוקת יושבת על מכסה החיפושית בשקיעה
- EN : Baby sitting on the Beetle's hood at sunset
- FR : Un bébé assis sur le capot de la Coccinelle au coucher du soleil
- ES : Un bebé sentado en el capó del Escarabajo al atardecer

**gallery.alts.8**

- HE : ילדה מחזיקה מניפה של רצועות תמונות
- EN : Girl holding a fan of photo strips
- FR : Une fillette qui tient un éventail de bandes photo
- ES : Una niña sosteniendo un abanico de tiras de fotos

**gallery.alts.9**

- HE : רצועות תמונות מבת מצווה
- EN : Photo strips from a bat mitzvah
- FR : Bandes photo d'une bat mitzvah
- ES : Tiras de fotos de un bat mitzvah

**gallery.alts.10**

- HE : רצועת תמונות מול השקיעה בים
- EN : Photo strip held up against a sunset over the sea
- FR : Bande photo levée devant un coucher de soleil sur la mer
- ES : Tira de fotos frente a un atardecer sobre el mar

**gallery.alts.11**

- HE : טבעת האור בתוך החיפושית ואביזרים
- EN : The ring light inside the Beetle with props
- FR : L'anneau lumineux dans la Coccinelle, avec des accessoires
- ES : El aro de luz dentro del Escarabajo con accesorios

**gallery.alts.12**

- HE : רצועת תמונה ממותגת באירוע השקה
- EN : Branded photo strip at a launch event
- FR : Bande photo aux couleurs d'une marque lors d'un lancement
- ES : Tira de fotos con marca en un evento de lanzamiento

**gallery.alts.13**

- HE : רצועות תמונות על מכסה החיפושית לצד פרחים
- EN : Photo strips on the Beetle's hood next to flowers
- FR : Bandes photo sur le capot de la Coccinelle à côté de fleurs
- ES : Tiras de fotos sobre el capó del Escarabajo junto a flores

### trust

**trust.eyebrow**

- HE : סמכו עלינו
- EN : Trusted by
- FR : Ils nous ont fait confiance
- ES : Confiaron en nosotros

**trust.title**

- HE : כבר היינו שם
- EN : We've been there
- FR : On y était
- ES : Ya estuvimos ahí

**trust.items.0.title**

- HE : החתונה של רז ונעמה
- EN : Raz & Naama's wedding
- FR : Le mariage de Raz et Naama
- ES : La boda de Raz y Naama

**trust.items.0.place**

- HE : ספטמבר 2025
- EN : September 2025
- FR : Septembre 2025
- ES : Septiembre de 2025

**trust.items.0.text**

- HE : החיפושית חיכתה לזוג ולאורחים בכניסה, עם שלט החתונה וקוד לגלריה.
- EN : The Beetle welcomed the couple and their guests at the entrance, with the wedding sign and a QR code to the gallery.
- FR : La Coccinelle accueillait les mariés et leurs invités à l'entrée, avec la pancarte du mariage et un QR code vers la galerie.
- ES : El Escarabajo recibió a los novios y a sus invitados en la entrada, con el cartel de la boda y un código QR a la galería.

**trust.items.0.alt**

- HE : החתן פותח לכלה את דלת החיפושית ליד שלט החתונה של רז ונעמה
- EN : The groom opening the Beetle's door for the bride next to Raz and Naama's wedding sign
- FR : Le marié ouvre la portière de la Coccinelle à la mariée, à côté de la pancarte du mariage de Raz et Naama
- ES : El novio abre la puerta del Escarabajo a la novia junto al cartel de la boda de Raz y Naama

**trust.items.1.title**

- HE : ט״ו באב בחופי אשקלון
- EN : Tu B'Av on Ashkelon's beaches
- FR : Tou BeAv sur les plages d'Ashkelon
- ES : Tu BeAv en las playas de Ashkelon

**trust.items.1.place**

- HE : בשיתוף עיריית אשקלון
- EN : With the Municipality of Ashkelon
- FR : Avec la municipalité d'Ashkelon
- ES : Con el Ayuntamiento de Ashkelon

**trust.items.1.text**

- HE : שטיח אדום על הטיילת, אלפי חיוכים, ומזכרת קטנה לכל זוג, משפחה וחברים.
- EN : A red carpet on the promenade, thousands of smiles and a small keepsake for every couple, family and group of friends.
- FR : Un tapis rouge sur la promenade, des milliers de sourires et un petit souvenir pour chaque couple, famille et bande d'amis.
- ES : Una alfombra roja en el paseo, miles de sonrisas y un pequeño recuerdo para cada pareja, familia y grupo de amigos.

**trust.items.1.alt**

- HE : אורחת צועדת על השטיח האדום אל החיפושית בחוף אשקלון
- EN : A guest walking down the red carpet to the Beetle on the Ashkelon beachfront
- FR : Une invitée marche sur le tapis rouge vers la Coccinelle, en bord de mer à Ashkelon
- ES : Una invitada camina por la alfombra roja hacia el Escarabajo en la playa de Ashkelon

**trust.items.2.title**

- HE : בת המצווה של שירה
- EN : Shira's bat mitzvah
- FR : La bat mitzvah de Shira
- ES : El bat mitzvah de Shira

**trust.items.2.place**

- HE : עמדת סלפי
- EN : Selfie booth
- FR : Selfie booth
- ES : Selfie booth

**trust.items.2.text**

- HE : כל החברות, כל הצחוקים, וכל אחת יצאה עם תמונה ביד.
- EN : All the friends, all the laughs, and everyone went home with a print.
- FR : Toutes les copines, tous les fous rires, et chacune est repartie avec sa photo.
- ES : Todas las amigas, todas las risas, y cada una se fue con su foto.

**trust.items.2.alt**

- HE : בלון ספרה ועיצוב בת המצווה של שירה
- EN : Number balloon and décor at Shira's bat mitzvah
- FR : Ballon chiffre et décor de la bat mitzvah de Shira
- ES : Globo de número y decoración del bat mitzvah de Shira

**trust.reviewsTitle**

- HE : מה אומרים עלינו
- EN : What people say
- FR : Ce qu'on dit de nous
- ES : Lo que dicen de nosotros

### faq

**faq.eyebrow**

- HE : שאלות נפוצות
- EN : FAQ
- FR : Questions fréquentes
- ES : Preguntas frecuentes

**faq.title**

- HE : כל מה שרציתם לדעת
- EN : Everything you wanted to know
- FR : Tout ce que vous voulez savoir
- ES : Todo lo que querías saber

**faq.items.0.q**

- HE : כמה מקום צריך?
- EN : How much space do you need?
- FR : Quelle place faut-il prévoir ?
- ES : ¿Cuánto espacio hace falta?

**faq.items.0.a**

- HE : לחיפושית צריך משטח ישר וגישה לרכב עד המקום, בערך בגודל של חניה עם קצת מרווח מסביב. לעמדת הסלפי מספיקים בערך שני מטר על שני מטר. נבדוק איתכם את המקום מראש.
- EN : The Beetle needs a flat surface and vehicle access, roughly a parking space with a bit of room around it. The selfie booth needs about two by two metres. We'll check the venue with you beforehand.
- FR : La Coccinelle a besoin d'un sol plat et d'un accès véhicule, à peu près une place de parking avec un peu d'espace autour. Pour le selfie booth, environ deux mètres sur deux suffisent. Nous vérifions le lieu avec vous à l'avance.
- ES : El Escarabajo necesita un suelo plano y acceso para el coche, más o menos una plaza de aparcamiento con algo de espacio alrededor. Para el selfie booth bastan unos dos por dos metros. Revisamos el lugar contigo antes.

**faq.items.1.q**

- HE : צריך חשמל?
- EN : Do you need electricity?
- FR : Faut-il de l'électricité ?
- ES : ¿Hace falta electricidad?

**faq.items.1.a**

- HE : כן, שקע חשמל רגיל קרוב למקום שבו נעמוד. אם אין, תגידו לנו ונמצא פתרון.
- EN : Yes, a standard socket close to where we'll stand. If there isn't one, let us know and we'll find a solution.
- FR : Oui, une prise standard près de l'emplacement. S'il n'y en a pas, dites-le-nous et on trouvera une solution.
- ES : Sí, un enchufe normal cerca de donde nos colocaremos. Si no lo hay, avísanos y buscamos una solución.

**faq.items.2.q**

- HE : כמה זמן לוקחת ההתקנה?
- EN : How long does setup take?
- FR : Combien de temps dure l'installation ?
- ES : ¿Cuánto tarda el montaje?

**faq.items.2.a**

- HE : אנחנו מגיעים לפני האורחים ומסיימים להתארגן לפני שהאירוע מתחיל. אתם לא צריכים לעשות כלום.
- EN : We arrive before your guests and are ready before the event starts. You don't need to do anything.
- FR : Nous arrivons avant vos invités et nous sommes prêts avant le début de l'événement. Vous n'avez rien à faire.
- ES : Llegamos antes que los invitados y estamos listos antes de que empiece el evento. Tú no tienes que hacer nada.

**faq.items.3.q**

- HE : לאן אתם מגיעים?
- EN : Where do you travel?
- FR : Où vous déplacez-vous ?
- ES : ¿A dónde vais?

**faq.items.3.a**

- HE : אנחנו מגיעים לאירועים ברחבי הארץ. עלות ההגעה תלויה במרחק, ונפרט אותה בהצעת המחיר.
- EN : We come to events across Israel. Travel costs depend on distance and are spelled out in your quote.
- FR : Nous venons sur les événements partout en Israël. Les frais de déplacement dépendent de la distance et figurent dans le devis.
- ES : Vamos a eventos en todo Israel. El coste del desplazamiento depende de la distancia y aparece en el presupuesto.

**faq.items.4.q**

- HE : אפשר בחוץ?
- EN : Can it be outdoors?
- FR : Est-ce possible en extérieur ?
- ES : ¿Se puede al aire libre?

**faq.items.4.a**

- HE : בהחלט. היינו על החוף, בגנים ובאולמות. בחוץ חשוב שיהיה משטח יציב, ואם צפוי גשם נתאם מקום מקורה.
- EN : Absolutely. We've done beaches, gardens and halls. Outdoors we need stable ground, and if rain is forecast we'll plan a covered spot.
- FR : Bien sûr. Nous avons fait des plages, des jardins et des salles. Dehors, il faut un sol stable, et si la pluie est annoncée, on prévoit un emplacement couvert.
- ES : Claro. Hemos estado en playas, jardines y salones. Fuera necesitamos un suelo estable, y si se anuncia lluvia buscamos un lugar cubierto.

**faq.items.5.q**

- HE : כמה זמן מראש כדאי להזמין?
- EN : How far ahead should we book?
- FR : Combien de temps à l'avance réserver ?
- ES : ¿Con cuánta antelación reservar?

**faq.items.5.a**

- HE : כמה שיותר מוקדם. בעונת החתונות התאריכים נתפסים חודשים מראש. בדקו בלוח אם התאריך שלכם עוד פנוי.
- EN : As early as you can. In wedding season dates go months in advance. Check the calendar to see if yours is still free.
- FR : Le plus tôt possible. En saison des mariages, les dates partent des mois à l'avance. Regardez le calendrier pour voir si la vôtre est encore libre.
- ES : Cuanto antes. En temporada de bodas las fechas se reservan con meses de antelación. Mira el calendario para ver si la tuya sigue libre.

### booking

**booking.eyebrow**

- HE : שריון תאריך
- EN : Reserve a date
- FR : Réserver une date
- ES : Reservar fecha

**booking.title**

- HE : בואו נבדוק אם החיפושית פנויה
- EN : Let's see if the Beetle is free
- FR : Voyons si la Coccinelle est libre
- ES : Veamos si el Escarabajo está libre

**booking.intro**

- HE : בחרו תאריך, ספרו לנו על האירוע ונחזור אליכם בוואטסאפ עם אישור והצעת מחיר. בלי התחייבות.
- EN : Pick a date, tell us about your event and we'll get back to you on WhatsApp with a confirmation and a quote. No commitment.
- FR : Choisissez une date, parlez-nous de votre événement et nous vous répondons sur WhatsApp avec une confirmation et un devis. Sans engagement.
- ES : Elige una fecha, cuéntanos tu evento y te respondemos por WhatsApp con la confirmación y un presupuesto. Sin compromiso.

**booking.stepDate**

- HE : התאריך
- EN : Date
- FR : La date
- ES : La fecha

**booking.stepEvent**

- HE : האירוע
- EN : Your event
- FR : L'événement
- ES : Tu evento

**booking.stepPackage**

- HE : החבילה
- EN : Package
- FR : La formule
- ES : El paquete

**booking.stepFrame**

- HE : עיצוב התמונה
- EN : Photo design
- FR : Le design photo
- ES : Diseño de la foto

**booking.stepContact**

- HE : פרטים ליצירת קשר
- EN : Contact details
- FR : Vos coordonnées
- ES : Tus datos

**booking.calendar.prev**

- HE : החודש הקודם
- EN : Previous month
- FR : Mois précédent
- ES : Mes anterior

**booking.calendar.next**

- HE : החודש הבא
- EN : Next month
- FR : Mois suivant
- ES : Mes siguiente

**booking.calendar.available**

- HE : פנוי
- EN : Free
- FR : Libre
- ES : Libre

**booking.calendar.booked**

- HE : תפוס
- EN : Booked
- FR : Réservé
- ES : Reservado

**booking.calendar.selected**

- HE : נבחר
- EN : Selected
- FR : Choisi
- ES : Elegido

**booking.calendar.weekdays.0**

- HE : א
- EN : Su
- FR : di
- ES : do

**booking.calendar.weekdays.1**

- HE : ב
- EN : Mo
- FR : lu
- ES : lu

**booking.calendar.weekdays.2**

- HE : ג
- EN : Tu
- FR : ma
- ES : ma

**booking.calendar.weekdays.3**

- HE : ד
- EN : We
- FR : me
- ES : mi

**booking.calendar.weekdays.4**

- HE : ה
- EN : Th
- FR : je
- ES : ju

**booking.calendar.weekdays.5**

- HE : ו
- EN : Fr
- FR : ve
- ES : vi

**booking.calendar.weekdays.6**

- HE : ש
- EN : Sa
- FR : sa
- ES : sá

**booking.calendar.chosen**

- HE : התאריך שבחרתם: {date}
- EN : Your date: {date}
- FR : Votre date : {date}
- ES : Tu fecha: {date}

**booking.calendar.none**

- HE : עוד לא נבחר תאריך
- EN : No date selected yet
- FR : Aucune date choisie pour l'instant
- ES : Aún no has elegido fecha

**booking.calendar.bookedNote**

- HE : התאריך הזה כבר תפוס. כתבו לנו בכל זאת, לפעמים יש פתרון.
- EN : This date is already booked. Write to us anyway, sometimes there's a way.
- FR : Cette date est déjà réservée. Écrivez-nous quand même, il y a parfois une solution.
- ES : Esta fecha ya está reservada. Escríbenos igualmente, a veces hay solución.

**booking.fields.eventType**

- HE : סוג האירוע
- EN : Type of event
- FR : Type d'événement
- ES : Tipo de evento

**booking.fields.eventTypeOther**

- HE : אחר
- EN : Other
- FR : Autre
- ES : Otro

**booking.fields.timeFrom**

- HE : משעה
- EN : From
- FR : De
- ES : Desde

**booking.fields.timeTo**

- HE : עד שעה
- EN : Until
- FR : À
- ES : Hasta

**booking.fields.venue**

- HE : שם המקום
- EN : Venue
- FR : Lieu
- ES : Lugar

**booking.fields.city**

- HE : עיר
- EN : City
- FR : Ville
- ES : Ciudad

**booking.fields.guests**

- HE : מספר אורחים משוער
- EN : Approximate number of guests
- FR : Nombre d'invités approximatif
- ES : Número aproximado de invitados

**booking.fields.package**

- HE : חבילה
- EN : Package
- FR : Formule
- ES : Paquete

**booking.fields.packageUnsure**

- HE : עוד לא יודעים, תמליצו לנו
- EN : Not sure yet, recommend one
- FR : Je ne sais pas encore, conseillez-moi
- ES : Aún no lo sé, recomendadme

**booking.fields.options**

- HE : תוספות
- EN : Add-ons
- FR : Options
- ES : Extras

**booking.fields.frameNames**

- HE : שמות על התמונה
- EN : Names on the photo
- FR : Prénoms sur la photo
- ES : Nombres en la foto

**booking.fields.frameNamesHint**

- HE : לדוגמה: רז ונעמה
- EN : e.g. Raz & Naama
- FR : ex. Raz & Naama
- ES : p. ej. Raz y Naama

**booking.fields.frameDate**

- HE : תאריך על התמונה
- EN : Date on the photo
- FR : Date sur la photo
- ES : Fecha en la foto

**booking.fields.frameColors**

- HE : צבעים או קונספט
- EN : Colours or concept
- FR : Couleurs ou thème
- ES : Colores o concepto

**booking.fields.frameColorsHint**

- HE : לדוגמה: לבן, ירוק זית וזהב
- EN : e.g. white, olive green and gold
- FR : ex. blanc, vert olive et doré
- ES : p. ej. blanco, verde oliva y dorado

**booking.fields.name**

- HE : שם מלא
- EN : Full name
- FR : Nom complet
- ES : Nombre completo

**booking.fields.phone**

- HE : טלפון
- EN : Phone
- FR : Téléphone
- ES : Teléfono

**booking.fields.email**

- HE : אימייל (לקבלת אישור)
- EN : Email (for your confirmation)
- FR : E-mail (pour la confirmation)
- ES : Email (para la confirmación)

**booking.fields.notes**

- HE : הערות
- EN : Notes
- FR : Remarques
- ES : Comentarios

**booking.fields.choose**

- HE : בחירה
- EN : Choose
- FR : Choisir
- ES : Elegir

**booking.submit**

- HE : שליחת הבקשה בוואטסאפ
- EN : Send request on WhatsApp
- FR : Envoyer la demande sur WhatsApp
- ES : Enviar solicitud por WhatsApp

**booking.sending**

- HE : שולחים…
- EN : Sending…
- FR : Envoi…
- ES : Enviando…

**booking.privacy**

- HE : הפרטים משמשים רק כדי לחזור אליכם לגבי האירוע.
- EN : Your details are only used to get back to you about your event.
- FR : Vos coordonnées servent uniquement à vous recontacter au sujet de votre événement.
- ES : Tus datos solo se usan para responderte sobre tu evento.

**booking.successTitle**

- HE : הבקשה בדרך
- EN : Your request is on its way
- FR : Votre demande est partie
- ES : Tu solicitud está en camino

**booking.successText**

- HE : וואטסאפ נפתח עם כל הפרטים. שלחו את ההודעה ונחזור אליכם בהקדם. אם הוא לא נפתח:
- EN : WhatsApp opened with all the details. Send the message and we'll reply shortly. If it didn't open:
- FR : WhatsApp s'est ouvert avec tous les détails. Envoyez le message et nous vous répondons rapidement. S'il ne s'est pas ouvert :
- ES : WhatsApp se abrió con todos los detalles. Envía el mensaje y te respondemos enseguida. Si no se abrió:

**booking.successLink**

- HE : פתיחת וואטסאפ
- EN : Open WhatsApp
- FR : Ouvrir WhatsApp
- ES : Abrir WhatsApp

**booking.again**

- HE : בקשה חדשה
- EN : New request
- FR : Nouvelle demande
- ES : Nueva solicitud

**booking.depositTitle**

- HE : רוצים לשריין כבר עכשיו?
- EN : Want to lock it in now?
- FR : Envie de bloquer la date tout de suite ?
- ES : ¿Quieres asegurar la fecha ya?

**booking.depositText**

- HE : מקדמה של {amount} שומרת לכם את התאריך. היתרה ביום האירוע.
- EN : A {amount} deposit holds your date. The balance is due on the day.
- FR : Un acompte de {amount} réserve votre date. Le solde se règle le jour J.
- ES : Una señal de {amount} reserva tu fecha. El resto se paga el día del evento.

**booking.depositButton**

- HE : תשלום מקדמה
- EN : Pay deposit
- FR : Payer l'acompte
- ES : Pagar la señal

**booking.errors.date**

- HE : בחרו תאריך בלוח
- EN : Pick a date on the calendar
- FR : Choisissez une date dans le calendrier
- ES : Elige una fecha en el calendario

**booking.errors.required**

- HE : שדה חובה
- EN : Required
- FR : Champ obligatoire
- ES : Campo obligatorio

**booking.errors.phone**

- HE : מספר הטלפון לא נראה תקין
- EN : This phone number doesn't look right
- FR : Ce numéro de téléphone semble incorrect
- ES : Este teléfono no parece correcto

**booking.errors.email**

- HE : כתובת האימייל לא נראית תקינה
- EN : This email address doesn't look right
- FR : Cette adresse e-mail semble incorrecte
- ES : Este email no parece correcto

**booking.errors.deposit**

- HE : התשלום לא זמין כרגע. אפשר לשלוח את הבקשה בוואטסאפ.
- EN : Payment isn't available right now. You can send your request on WhatsApp.
- FR : Le paiement n'est pas disponible pour le moment. Vous pouvez envoyer votre demande sur WhatsApp.
- ES : El pago no está disponible ahora mismo. Puedes enviar tu solicitud por WhatsApp.

**booking.message.title**

- HE : בקשה חדשה מהאתר · Beetle Booth
- EN : New request from the website · Beetle Booth
- FR : Nouvelle demande depuis le site · Beetle Booth
- ES : Nueva solicitud desde la web · Beetle Booth

**booking.message.event**

- HE : אירוע
- EN : Event
- FR : Événement
- ES : Evento

**booking.message.date**

- HE : תאריך
- EN : Date
- FR : Date
- ES : Fecha

**booking.message.time**

- HE : שעות
- EN : Hours
- FR : Horaires
- ES : Horario

**booking.message.venue**

- HE : מקום
- EN : Venue
- FR : Lieu
- ES : Lugar

**booking.message.guests**

- HE : אורחים
- EN : Guests
- FR : Invités
- ES : Invitados

**booking.message.package**

- HE : חבילה
- EN : Package
- FR : Formule
- ES : Paquete

**booking.message.options**

- HE : תוספות
- EN : Add-ons
- FR : Options
- ES : Extras

**booking.message.frame**

- HE : עיצוב התמונה
- EN : Photo design
- FR : Design photo
- ES : Diseño de la foto

**booking.message.name**

- HE : שם
- EN : Name
- FR : Nom
- ES : Nombre

**booking.message.phone**

- HE : טלפון
- EN : Phone
- FR : Téléphone
- ES : Teléfono

**booking.message.email**

- HE : אימייל
- EN : Email
- FR : E-mail
- ES : Email

**booking.message.notes**

- HE : הערות
- EN : Notes
- FR : Remarques
- ES : Comentarios

**booking.message.ref**

- HE : מספר בקשה
- EN : Request no.
- FR : N° de demande
- ES : N.º de solicitud

**booking.message.closing**

- HE : אשמח לדעת אם התאריך פנוי ומה המחיר. תודה!
- EN : Could you let me know if the date is free and the price? Thanks!
- FR : Pouvez-vous me dire si la date est libre et quel est le tarif ? Merci !
- ES : ¿Me podéis decir si la fecha está libre y el precio? ¡Gracias!

### footer

**footer.areasTitle**

- HE : אזורי שירות
- EN : Where we go
- FR : Zones desservies
- ES : Dónde trabajamos

**footer.areas**

- HE : אירועים בכל הארץ
- EN : Events across Israel
- FR : Événements partout en Israël
- ES : Eventos en todo Israel

**footer.contactTitle**

- HE : דברו איתנו
- EN : Talk to us
- FR : Nous écrire
- ES : Escríbenos

**footer.followTitle**

- HE : עקבו אחרינו
- EN : Follow us
- FR : Nous suivre
- ES : Síguenos

**footer.rights**

- HE : כל הזכויות שמורות
- EN : All rights reserved
- FR : Tous droits réservés
- ES : Todos los derechos reservados

**footer.businessId**

- HE : ע.מ.
- EN : Business no.
- FR : N° d'entreprise
- ES : N.º de empresa

**footer.legal**

- HE : מצאתם בעיה באתר? כתבו לנו בוואטסאפ ונטפל בה.
- EN : Spotted a problem on the site? Message us on WhatsApp and we'll fix it.
- FR : Un problème sur le site ? Écrivez-nous sur WhatsApp et on le corrige.
- ES : ¿Has visto un problema en la web? Escríbenos por WhatsApp y lo arreglamos.

**footer.photos**

- HE : כל התמונות באתר צולמו באירועים שלנו.
- EN : Every photo on this site was taken at our events.
- FR : Toutes les photos du site ont été prises lors de nos événements.
- ES : Todas las fotos de esta web se tomaron en nuestros eventos.

### whatsapp

**whatsapp.float**

- HE : שיחה בוואטסאפ
- EN : Chat on WhatsApp
- FR : Discuter sur WhatsApp
- ES : Hablar por WhatsApp

**whatsapp.hello**

- HE : היי! הגעתי מהאתר של Beetle Booth ורציתי לבדוק תאריך
- EN : Hi! I found you through the Beetle Booth website and I'd like to check a date
- FR : Bonjour ! Je viens du site Beetle Booth et j'aimerais vérifier une date
- ES : ¡Hola! Vengo de la web de Beetle Booth y quería consultar una fecha

### email

**email.subjectBusiness**

- HE : בקשת הזמנה חדשה מהאתר
- EN : New booking request from the website
- FR : Nouvelle demande de réservation depuis le site
- ES : Nueva solicitud de reserva desde la web

**email.subjectClient**

- HE : קיבלנו את הבקשה שלכם · Beetle Booth
- EN : We received your request · Beetle Booth
- FR : Nous avons bien reçu votre demande · Beetle Booth
- ES : Hemos recibido tu solicitud · Beetle Booth

**email.intro**

- HE : היי, תודה שפניתם אלינו! קיבלנו את הבקשה ונחזור אליכם בוואטסאפ בהקדם. אלה הפרטים ששלחתם:
- EN : Hi, thanks for reaching out! We received your request and will get back to you on WhatsApp shortly. Here's what you sent us:
- FR : Bonjour, merci pour votre message ! Nous avons bien reçu votre demande et nous vous répondons rapidement sur WhatsApp. Voici les détails envoyés :
- ES : ¡Hola, gracias por escribirnos! Hemos recibido tu solicitud y te responderemos por WhatsApp muy pronto. Estos son los datos que nos enviaste:

### notFound

**notFound.title**

- HE : החיפושית לקחה פנייה לא נכונה
- EN : The Beetle took a wrong turn
- FR : La Coccinelle s'est trompée de route
- ES : El Escarabajo tomó un desvío equivocado

**notFound.text**

- HE : העמוד שחיפשתם לא קיים. בואו נחזור לדרך הראשית.
- EN : The page you're looking for doesn't exist. Let's get back on the main road.
- FR : La page que vous cherchez n'existe pas. Revenons sur la route principale.
- ES : La página que buscas no existe. Volvamos a la carretera principal.

**notFound.back**

- HE : חזרה לדף הבית
- EN : Back to home
- FR : Retour à l'accueil
- ES : Volver al inicio

