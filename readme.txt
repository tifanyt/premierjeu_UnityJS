Jeu vidéo réalisé en groupe en première année de DUT MMI. J'était chargé des scripts et de la modélisation 3D de certains objets
Histoire : une souris doit retrouver ses petits dans une maison et les nourir avec les fromages récoltés en chemin
Explication des scripts :
- boutonTrain.js et petitTrain.js : Gère le déplacement d'un petit train sur rail au clic sur la télécommande
- deplacement.js : Gère le déplacement de la caméra (donc du personnage principal)
- indice.js : script qui gère le déplacement de haut en bas et la rotation de sphères de couleur présentes aux endroits clés du jeu pour donner des indices
- leFromage.js : Compte le nombre de fromages récoltés par le joueur et affiche le compteur à l'écran.
- monAspi.js : Gère le déplacement d'un aspirateur.
- Musique.js et testMusique.js : Allume ou éteint la radio lorsque le joueur clique sur la télécommande (lorsque la radio est allumée, cela couvre le bruit des bébés souris).
- changeTest.js : gère le texte qui s'affiche (explication au début, messages d'alertes et décompte du temps face à un danger...) et la variable GameOver (toutes les manières dont le joueur peut perdre : aspirateur, chaussures...). Si le joueur perd il recommence le jeu automatiquement.  