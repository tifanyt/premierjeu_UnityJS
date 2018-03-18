Jeu vid�o r�alis� en groupe en premi�re ann�e de DUT MMI. J'�tait charg� des scripts et de la mod�lisation 3D de certains objets
Histoire : une souris doit retrouver ses petits dans une maison et les nourir avec les fromages r�colt�s en chemin
Explication des scripts :
- boutonTrain.js et petitTrain.js : G�re le d�placement d'un petit train sur rail au clic sur la t�l�commande
- deplacement.js : G�re le d�placement de la cam�ra (donc du personnage principal)
- indice.js : script qui g�re le d�placement de haut en bas et la rotation de sph�res de couleur pr�sentes aux endroits cl�s du jeu pour donner des indices
- leFromage.js : Compte le nombre de fromages r�colt�s par le joueur et affiche le compteur � l'�cran.
- monAspi.js : G�re le d�placement d'un aspirateur.
- Musique.js et testMusique.js : Allume ou �teint la radio lorsque le joueur clique sur la t�l�commande (lorsque la radio est allum�e, cela couvre le bruit des b�b�s souris).
- changeTest.js : g�re le texte qui s'affiche (explication au d�but, messages d'alertes et d�compte du temps face � un danger...) et la variable GameOver (toutes les mani�res dont le joueur peut perdre : aspirateur, chaussures...). Si le joueur perd il recommence le jeu automatiquement.  