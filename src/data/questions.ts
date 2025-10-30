export interface Question {
  block: string;
  type: "VI" | "VE";
  question1: string;
  answer1: string;
  question2: string;
  answer2: string;
  question3: string;
  answer3: string;
}

export const questions: Question[] = [
  {
    "block": "01",
    "type": "VI",
    "question1": "Montrez la commande De réglage de hauteur des feux.",
    "answer1": "Dispositif situé en général à gauche du volant.",
    "question2": "Pourquoi doit-on régler la hauteur des feux ?",
    "answer2": "Pour ne pas éblouir les autres usagers.",
    "question3": "Comment et pourquoi protéger une zone de danger en cas d'accident de la route ?",
    "answer3": "En délimitant clairement et largement la zone de danger de façon visible pour protéger les victimes et éviter un sur-accident."
  },
  {
    "block": "02",
    "type": "VE",
    "question1": "Montrez où s'effectue le remplissage du produit lave-glace.",
    "answer1": "Le candidat ouvre le capot et montre le bocal. Si le candidat a des difficultés pour ouvrir le capot, l'accompagnateur peut lui indiquer comment procéder.",
    "question2": "Pourquoi est-il préférable d'utiliser un liquide spécial en hiver ?",
    "answer2": "Pour éviter le gel du liquide.",
    "question3": "Quels comportements adopter en cas de diffusion du signal d'alerte du Système d'Alerte et d'Information des Populations (SAIP) ?",
    "answer3": "- Se mettre en sécurité. - S'informer grâce aux médias et sites internet des autorités dès que leur consultation est possible. - Respecter les consignes des autorités."
  },
  {
    "block": "03",
    "type": "VI",
    "question1": "Mettez le rétroviseur intérieur en position \"nuit\".",
    "answer1": "Si le véhicule possède un système automatique de mise en position \"nuit\" du rétroviseur intérieur, le candidat l'indique.",
    "question2": "Quel est l'intérêt de la position nuit ?",
    "answer2": "Ne pas être ébloui par les feux du véhicule suiveur.",
    "question3": "Comment est composé le signal d'alerte du Système d'Alerte et d'Information des Populations (SAIP) diffusé par les sirènes ?",
    "answer3": "Il se compose de deux codes distincts : - le Signal National d'Alerte (SNA), variation du signal sur trois cycles successifs. - Le signal de fin d'alerte, signal continu."
  },
  {
    "block": "04",
    "type": "VE",
    "question1": "Contrôlez l'état du flanc sur l'un des pneumatiques.",
    "answer1": "En bon état (toute anomalie doit être signalée).",
    "question2": "Citez un endroit où l'on peut trouver les pressions préconisées pour les pneumatiques ?",
    "answer2": "Elles sont indiquées : - soit sur une plaque sur une portière. - soit dans la notice d'utilisation du véhicule. - soit au niveau de la trappe à carburant.",
    "question3": "Sur autoroute, comment indiquer avec précision les lieux de l'accident depuis un téléphone portable ?",
    "answer3": "En indiquant le numéro de l'autoroute, le sens de circulation et le point kilométrique."
  },
  {
    "block": "05",
    "type": "VI",
    "question1": "Faites fonctionner les essuie-glaces avants du véhicule sur la position la plus rapide.",
    "answer1": "",
    "question2": "Comment détecter leur usure en circulation ?",
    "answer2": "En cas de pluie, lorsqu'ils laissent des traces sur le pare brise.",
    "question3": "Comment vérifier la respiration d'une victime ?",
    "answer3": "Regarder si le ventre et la poitrine se soulèvent et sentir de l'air à l'expiration."
  },
  {
    "block": "06",
    "type": "VE",
    "question1": "Vérifiez l'état et la propreté des plaques d'immatriculation.",
    "answer1": "Vérification des plaques à l'avant et à l'arrière, propres et en bon état (toute anomalie doit être signalée).",
    "question2": "Quelles sont les précautions à prendre en cas d'installation d'un porte vélo ?",
    "answer2": "La plaque d'immatriculation et les feux doivent être visibles.",
    "question3": "Qu'est ce qu'une perte de connaissance ?",
    "answer3": "C'est lorsque la victime ne répond pas et ne réagit pas mais respire."
  },
  {
    "block": "07",
    "type": "VI",
    "question1": "Vérifiez la présence du gilet de haute visibilité.",
    "answer1": "Le candidat doit indiquer où il se trouve sans obligation de le sortir. Le terme \"gilet jaune\" peut être utilisé si le candidat ne comprend pas.",
    "question2": "En cas de panne ou d'accident, quel autre accessoire de sécurité est obligatoire ?",
    "answer2": "Le triangle de pré-signalisation.",
    "question3": "Si un dégagement d'urgence de la victime est nécessaire, où doit-elle être déplacée ?",
    "answer3": "Dans un endroit suffisamment éloigné du danger et de ses conséquences."
  },
  {
    "block": "08",
    "type": "VE",
    "question1": "Montrez où s'effectue le contrôle du niveau du liquide de frein.",
    "answer1": "Le candidat montre que le niveau est entre le mini et le maxi. Si le candidat a des difficultés pour ouvrir le capot, l'accompagnateur peut lui indiquer comment procéder.",
    "question2": "Quelle est la conséquence d'un niveau insuffisant du liquide de frein ?",
    "answer2": "Une perte d'efficacité du freinage.",
    "question3": "En cas de panne ou d'accident, quel équipement de sécurité doit être porté avant de quitter le véhicule ?",
    "answer3": "Il faut porter le gilet de haute visibilité avant de sortir du véhicule. Le terme \"gilet jaune\" peut être utilisé par le candidat."
  },
  {
    "block": "09",
    "type": "VI",
    "question1": "Vérifiez la présence du certificat d'immatriculation du véhicule (ou carte grise).",
    "answer1": "La photocopie est acceptée.",
    "question2": "Quels sont les deux autres documents obligatoires à présenter en cas de contrôle par les forces de l'ordre ?",
    "answer2": "L'attestation d'assurance et le permis de conduire.",
    "question3": "Pourquoi l'alerte auprès des services de secours doit-elle être rapide et précise ?",
    "answer3": "Pour permettre aux services de secours d'apporter les moyens adaptés aux victimes dans le délai le plus court."
  },
  {
    "block": "10",
    "type": "VE",
    "question1": "Contrôlez l'état de tous les balais d'essuie-glace du véhicule.",
    "answer1": "",
    "question2": "Quel est le risque de circuler avec des balais d'essuie glace défectueux ?",
    "answer2": "Une mauvaise visibilité en cas d'intempéries.",
    "question3": "Quels sont les numéros d'urgence à composer ?",
    "answer3": "- Le 18, numéro d'appel des sapeurs-pompiers. - Le 15, numéro d'appel des SAMU. – Le 112, numéro de téléphone réservé aux appels d'urgence et valide dans l'ensemble de l'Union Européenne."
  },
  {
    "block": "11",
    "type": "VI",
    "question1": "Montrez l'indicateur de niveau de carburant.",
    "answer1": "",
    "question2": "Quelles sont les précautions à prendre lors du remplissage du réservoir ?",
    "answer2": "Arrêter le moteur, ne pas fumer, ne pas téléphoner.",
    "question3": "Quels comportements adopter en présence d'une victime qui ne répond pas et ne réagit pas, mais respire ?",
    "answer3": "- La placer en position stable sur le côté ou position latérale de sécurité. - Alerter les secours. - Surveiller la respiration de la victime jusqu'à l'arrivée des secours."
  },
  {
    "block": "12",
    "type": "VE",
    "question1": "Montrez où s'effectue le remplissage du liquide de refroidissement.",
    "answer1": "Le candidat ouvre le capot et montre le bocal. Si le candidat a des difficultés pour ouvrir le capot, l'accompagnateur peut lui indiquer comment procéder.",
    "question2": "Quel est le danger si l'on complète le niveau du liquide lorsque le moteur est chaud ?",
    "answer2": "Un risque de brûlure.",
    "question3": "Comment arrêter une hémorragie ?",
    "answer3": "En appuyant fortement sur l'endroit qui saigne avec les doigts ou avec la paume de la main en mettant un tissu propre sur la plaie."
  },
  {
    "block": "13",
    "type": "VI",
    "question1": "Actionnez le dégivrage de la lunette arrière et montrez le voyant ou le repère correspondant.",
    "answer1": "",
    "question2": "Quelle peut être la conséquence d'une panne de dégivrage de la lunette arrière ?",
    "answer2": "Une insuffisance ou une absence de visibilité vers l'arrière.",
    "question3": "Hors autoroute ou endroit dangereux, en cas de panne ou d'accident, où doit être placé le triangle de pré-signalisation ?",
    "answer3": "Le triangle de pré-signalisation doit être placé à une distance d'environ 30 m de la panne ou de l'accident, ou avant un virage, ou un sommet de côte."
  },
  {
    "block": "14",
    "type": "VE",
    "question1": "Contrôlez l'état, la propreté et le fonctionnement de tous les clignotants côté trottoir.",
    "answer1": "Vérification des clignotants propres, en bon état et fonctionnent (toute anomalie doit être signalée).",
    "question2": "Quelle est la signification d'un clignotement plus rapide ?",
    "answer2": "Non fonctionnement de l'une des ampoules.",
    "question3": "Quelles sont les conditions pour réaliser le dégagement d'urgence d'une victime en présence d'un danger réel, immédiat et non contrôlable ?",
    "answer3": "La victime doit être visible, facile à atteindre et rien ne doit gêner son dégagement. Il faut être sûr(e) de pouvoir réaliser le dégagement de la victime."
  },
  {
    "block": "15",
    "type": "VI",
    "question1": "Montrez le voyant d'alerte signalant une pression insuffisante d'huile dans le moteur.",
    "answer1": "",
    "question2": "Quelles sont les conditions à respecter pour contrôler le niveau d'huile ?",
    "answer2": "Moteur froid et sur un terrain plat.",
    "question3": "Quelles sont les trois informations à transmettre aux services de secours ?",
    "answer3": "Le numéro de téléphone à partir duquel l'appel est émis, la nature et la localisation la plus précise du problème."
  },
  {
    "block": "16",
    "type": "VE",
    "question1": "Contrôlez l'état, la propreté et le fonctionnement du ou des feux de brouillard arrière.",
    "answer1": "Vérification des feux, propres, en bon état et fonctionnent (toute anomalie doit être signalée).",
    "question2": "Dans quels cas les utilise-t-on ?",
    "answer2": "Par temps de brouillard et neige.",
    "question3": "Par quels moyens doit être réalisée l'alerte des secours ?",
    "answer3": "L'alerte doit être donnée à l'aide d'un téléphone portable ou, à défaut, d'un téléphone fixe ou d'une borne d'appel d'urgence."
  },
  {
    "block": "17",
    "type": "VI",
    "question1": "Vérifiez la présence de l'éthylotest.",
    "answer1": "",
    "question2": "A partir de quel taux d'alcoolémie, en période de permis probatoire, est-on en infraction ?",
    "answer2": "0,2 g /l, c'est à dire 0 verre, car dès le 1er verre ce seuil peut être dépassé.",
    "question3": "Quel comportement doit-on adopter en présence d'une victime en arrêt cardiaque ?",
    "answer3": "- ALERTER: alerter immédiatement les secours. - MASSER: pratiquer une réanimation cardio-pulmonaire. - DEFIBRILLER: utiliser un défibrillateur automatique (DAE) si possible."
  },
  {
    "block": "18",
    "type": "VE",
    "question1": "Contrôlez l'état, la propreté et le fonctionnement des feux de détresse à l'avant et à l'arrière.",
    "answer1": "Vérification des feux, propres, en bon état et fonctionnent (toute anomalie doit être signalée).",
    "question2": "Dans quels cas doit-on les utiliser ?",
    "answer2": "En cas de panne, d'accident ou de ralentissement important.",
    "question3": "Dans quel cas peut-on positionner une victime en Position Latérale de Sécurité (PLS) ?",
    "answer3": "Si la victime ne répond pas, ne réagit pas et respire."
  },
  {
    "block": "19",
    "type": "VI",
    "question1": "Montrez la commande de réglage du volant.",
    "answer1": "Le candidat montre l'emplacement. Il ne lui est pas demandé de changer son réglage.",
    "question2": "Pourquoi est-il important de bien régler son volant ? Citez deux exemples.",
    "answer2": "- Le confort de conduite. - L'accessibilité aux commandes. - La visibilité du tableau de bord. - L'efficacité des airbags.",
    "question3": "Dans quelle situation peut-on déplacer une victime ?",
    "answer3": "En présence d'un danger réel, immédiat, non contrôlable. Le déplacement de la victime doit rester exceptionnel."
  },
  {
    "block": "20",
    "type": "VE",
    "question1": "Contrôlez l'état, la propreté et le fonctionnement des feux de route.",
    "answer1": "Vérification des feux, propres, en bon état et fonctionnent (toute anomalie doit être signalée).",
    "question2": "Citez un cas d'utilisation de l'appel lumineux.",
    "answer2": "- Pour avertir de son approche. - En cas de danger. - A la place de l'avertisseur sonore.",
    "question3": "En cas de panne ou d'accident, quel équipement de sécurité doit être porté avant de quitter le véhicule ?",
    "answer3": "Il faut porter le gilet de haute visibilité avant de sortir du véhicule. Le terme \"gilet jaune\" peut être utilisé par le candidat."
  },
  {
    "block": "21",
    "type": "VI",
    "question1": "Positionnez la commande pour diriger l'air vers le pare-brise.",
    "answer1": "La position auto (désembuage automatique) peut être utilisée si le véhicule en est équipé.",
    "question2": "Citez deux éléments complémentaires permettant un désembuage efficace.",
    "answer2": "- La commande de vitesse de ventilation. - La commande d'air chaud. - La climatisation.",
    "question3": "Quel est l'objectif du Signal d'Alerte et d'Information des Populations (SAIP) ?",
    "answer3": "Avertir la population d'un danger imminent ou qu'un événement grave est en train de se produire."
  },
  {
    "block": "22",
    "type": "VE",
    "question1": "Montrez où doit s'effectuer le contrôle du niveau d'huile moteur.",
    "answer1": "Le candidat montre la jauge. Pas de manipulation exigée. Si le candidat a des difficultés pour ouvrir le capot, l'accompagnateur peut lui indiquer comment procéder.",
    "question2": "Quel est le principal risque d'un manque d'huile moteur ?",
    "answer2": "Un risque de détérioration ou de casse du moteur.",
    "question3": "Comment est diffusée l'alerte émise par le Signal d'Alerte et d'Information aux Populations (SAIP) ?",
    "answer3": "Grâce aux sirènes, aux médias tels que Radio France et France Télévision ou encore grâce à l'application SAIP."
  },
  {
    "block": "23",
    "type": "VI",
    "question1": "Montrez le voyant d'alerte signalant un défaut de batterie.",
    "answer1": "",
    "question2": "Qu'est-ce qui peut provoquer la décharge de la batterie, moteur éteint ?",
    "answer2": "Les feux ou accessoires électriques en fonctionnement.",
    "question3": "A partir de quel âge peut-on suivre une formation aux premiers secours ?",
    "answer3": "A partir de 10 ans."
  },
  {
    "block": "24",
    "type": "VE",
    "question1": "Montrez l'emplacement de la batterie du véhicule.",
    "answer1": "Si le candidat a des difficultés pour ouvrir le capot, l'accompagnateur peut lui indiquer comment procéder.",
    "question2": "Quelle est la solution en cas de panne de batterie pour démarrer le véhicule sans le déplacer ?",
    "answer2": "Brancher une deuxième batterie en parallèle (ou les \"+\" ensemble et les \"-\" ensemble) ou la remplacer.",
    "question3": "Pourquoi faut-il pratiquer immédiatement une réanimation cardio-pulmonaire sur une victime en arrêt cardiaque ?",
    "answer3": "Car les lésions du cerveau, surviennent dès les premières minutes."
  },
  {
    "block": "25",
    "type": "VI",
    "question1": "De quelle couleur est le voyant qui indique une défaillance du système de freinage ?",
    "answer1": "",
    "question2": "Quel est le risque de circuler avec un frein de parking mal desserré ?",
    "answer2": "Une dégradation du système de freinage.",
    "question3": "Hors autoroute ou endroit dangereux, en cas de panne ou d'accident, où doit être placé le triangle de pré-signalisation ?",
    "answer3": "Le triangle de pré-signalisation doit être placé à une distance d'environ 30 m de la panne ou de l'accident, ou avant un virage, ou un sommet de côte."
  },
  {
    "block": "26",
    "type": "VE",
    "question1": "Contrôlez l'état, la propreté et le fonctionnement des feux de croisement.",
    "answer1": "Vérification des feux, propres, en bon état et fonctionnent (toute anomalie doit être signalée).",
    "question2": "Quelles sont les conséquences d'un mauvais réglage de ces feux ?",
    "answer2": "Une mauvaise vision vers l'avant et un risque d'éblouissement des autres usagers.",
    "question3": "Dans quelle situation peut-on déplacer une victime ?",
    "answer3": "En présence d'un danger réel, immédiat, non contrôlable. Le déplacement de la victime doit rester exceptionnel."
  },
  {
    "block": "27",
    "type": "VI",
    "question1": "Montrez le voyant d'alerte signalant une température trop élevée du liquide de refroidissement.",
    "answer1": "",
    "question2": "Quelle est la conséquence d'une température trop élevée de ce liquide ?",
    "answer2": "Une surchauffe ou une casse moteur.",
    "question3": "Lors d'un appel avec les services de secours, pourquoi devez-vous attendre que votre correspondant vous autorise à raccrocher ?",
    "answer3": "Car il peut nous conseiller ou nous guider dans la réalisation des gestes à faire, ou ne pas faire, jusqu'à l'arrivée des secours."
  },
  {
    "block": "28",
    "type": "VE",
    "question1": "Vérifiez l'état et la propreté des dispositifs réfléchissants.",
    "answer1": "Vérification des dispositifs, propres et en bon état (toute anomalie doit être signalée).",
    "question2": "Quelle est l'utilité des dispositifs réfléchissants ?",
    "answer2": "Rendre visible le véhicule la nuit.",
    "question3": "A quel moment pouvez-vous mettre fin à un appel avec les secours ?",
    "answer3": "Uniquement lorsque notre correspondant nous invite à le faire."
  },
  {
    "block": "29",
    "type": "VI",
    "question1": "Montrez le voyant signalant la mauvaise fermeture d'une portière.",
    "answer1": "",
    "question2": "Quelle précaution dois-je prendre pour que les enfants installés à l'arrière ne puissent pas ouvrir leur portière ?",
    "answer2": "Actionner la sécurité enfant sur les deux portières arrière.",
    "question3": "Citez les trois manières d'évaluer l'état de conscience d'une victime.",
    "answer3": "- Lui poser des questions simples (\"comment ça va ?\", \"vous m'entendez ?\"). - Lui secouer doucement les épaules. - Lui prendre la main en lui demandant d'exécuter un geste simple (\"serrez-moi la main\")."
  },
  {
    "block": "30",
    "type": "VE",
    "question1": "Contrôlez l'état, la propreté et le fonctionnement des feux de position à l'avant et à l'arrière du véhicule.",
    "answer1": "Vérification des feux, propres, en bon état et fonctionnent (toute anomalie doit être signalée).",
    "question2": "Par temps clair, à quelle distance doivent-ils être visibles ?",
    "answer2": "A 150 mètres.",
    "question3": "Quels sont les risques pour une personne en perte de connaissance qui est allongée sur le dos ?",
    "answer3": "L'arrêt respiratoire et l'arrêt cardiaque."
  },
  {
    "block": "31",
    "type": "VI",
    "question1": "Actionnez les feux de détresse.",
    "answer1": "",
    "question2": "Quand les utilise-t-on ?",
    "answer2": "En cas de panne, d'accident ou de ralentissement important.",
    "question3": "Quels comportements adopter en cas de diffusion du signal d'alerte du Système d'Alerte et d'Information des Populations (SAIP) ?",
    "answer3": "- Se mettre en sécurité. - S'informer grâce aux médias et sites internet des autorités dès que leur consultation est possible. - Respecter les consignes des autorités."
  },
  {
    "block": "32",
    "type": "VE",
    "question1": "Sur le flanc d'un pneumatique, désignez le repère du témoin d'usure de la bande de roulement.",
    "answer1": "",
    "question2": "Qu'est-ce que l'aquaplanage, et quelle peut être sa conséquence ?",
    "answer2": "La présence d'un film d'eau entre le pneumatique et la chaussée pouvant entraîner une perte de contrôle du véhicule.",
    "question3": "Si un dégagement d'urgence de la victime est nécessaire, où doit-elle être déplacée ?",
    "answer3": "Dans un endroit suffisamment éloigné du danger et de ses conséquences."
  },
  {
    "block": "33",
    "type": "VI",
    "question1": "Montrez la commande permettant d'actionner le régulateur de vitesse.",
    "answer1": "",
    "question2": "Sans actionner la commande du régulateur, comment le désactiver rapidement ?",
    "answer2": "En appuyant sur la pédale de frein ou d'embrayage.",
    "question3": "Sur autoroute, comment indiquer avec précision les lieux de l'accident depuis un téléphone portable ?",
    "answer3": "En indiquant le numéro de l'autoroute, le sens de circulation et le point kilométrique."
  },
  {
    "block": "34",
    "type": "VE",
    "question1": "Ouvrez la trappe à carburant et/ou vérifiez la bonne fermeture du bouchon.",
    "answer1": "",
    "question2": "Quelles sont les précautions à prendre lors du remplissage du réservoir ?",
    "answer2": "Arrêter le moteur, ne pas fumer, ne pas téléphoner.",
    "question3": "Pourquoi l'alerte auprès des services de secours doit-elle être rapide et précise ?",
    "answer3": "Pour permettre aux services de secours d'apporter les moyens adaptés aux victimes dans le délai le plus court."
  },
  {
    "block": "35",
    "type": "VI",
    "question1": "Sans l'actionner, montrez la commande de l'avertisseur sonore.",
    "answer1": "",
    "question2": "Dans quel cas peut-on utiliser l'avertisseur sonore en agglomération ?",
    "answer2": "En cas de danger immédiat.",
    "question3": "Pourquoi ne faut-il pas laisser une personne en perte de connaissance allongée sur le dos ?",
    "answer3": "Car elle risque un étouffement par : - Des liquides présents dans la gorge. - La chute de la langue en arrière."
  },
  {
    "block": "36",
    "type": "VE",
    "question1": "Montrez où s'effectue le remplissage de l'huile moteur.",
    "answer1": "Le candidat montre le bouchon de remplissage. Si le candidat a des difficultés pour ouvrir le capot, l'accompagnateur peut lui indiquer comment procéder.",
    "question2": "Quel est le risque d'un manque d'huile moteur ?",
    "answer2": "Un risque de détérioration ou de casse du moteur.",
    "question3": "L'utilisation d'un Défibrillateur Automatisé (DAE) sur une victime qui n'est pas en arrêt cardiaque présente-t-elle un risque ?",
    "answer3": "Non, car le défibrillateur se déclenche uniquement quand la victime est en arrêt cardiaque."
  },
  {
    "block": "37",
    "type": "VI",
    "question1": "Montrez la commande permettant de désactiver l'airbag du passager avant.",
    "answer1": "",
    "question2": "Dans quelle situation doit-on le désactiver ?",
    "answer2": "Lors du transport d'un enfant à l'avant dans un siège auto, dos à la route.",
    "question3": "Quelles sont les conditions pour réaliser le dégagement d'urgence d'une victime en présence d'un danger réel, immédiat et non contrôlable ?",
    "answer3": "La victime doit être visible, facile à atteindre et rien ne doit gêner son dégagement. Il faut être sûr(e) de pouvoir réaliser le dégagement de la victime."
  },
  {
    "block": "38",
    "type": "VE",
    "question1": "A l'aide de la plaque indicative, donnez la pression préconisée pour les pneumatiques arrières, véhicule chargé.",
    "answer1": "",
    "question2": "A quelle fréquence est-il préconisé de vérifier la pression des pneus ?",
    "answer2": "Chaque mois, pour une utilisation normale de son véhicule, et avant chaque long trajet.",
    "question3": "Comment et pourquoi protéger une zone de danger en cas d'accident de la route ?",
    "answer3": "En délimitant clairement et largement la zone de danger de façon visible pour protéger les victimes et éviter un sur-accident."
  },
  {
    "block": "39",
    "type": "VI",
    "question1": "Montrez le voyant signalant l'absence de bouclage de la ceinture de sécurité du conducteur.",
    "answer1": "",
    "question2": "En règle générale, à partir de quel âge un enfant peut-il être installé sur le siège passager avant du véhicule ?",
    "answer2": "10 ans.",
    "question3": "Comment est composé le signal d'alerte du Système d'Alerte et d'Information des Populations (SAIP) diffusé par les sirènes ?",
    "answer3": "Il se compose de deux codes distincts : - Le Signal National d'Alerte (SNA), variation du signal sur trois cycles successifs. - Le signal de fin d'alerte, signal continu."
  },
  {
    "block": "40",
    "type": "VE",
    "question1": "Vérifiez le fonctionnement de l'éclairage de la plaque d'immatriculation à l'arrière.",
    "answer1": "Toute anomalie doit être signalée.",
    "question2": "Un défaut d'éclairage de la plaque lors du contrôle technique entraîne-t-il une contre-visite ?",
    "answer2": "Oui.",
    "question3": "Quelles sont les trois informations à transmettre aux services de secours ?",
    "answer3": "Le numéro de téléphone à partir duquel l'appel est émis, la nature et la localisation la plus précise du problème."
  },
  {
    "block": "41",
    "type": "VI",
    "question1": "Vérifiez la présence de l'attestation d'assurance du véhicule et de sa vignette sur le pare-brise.",
    "answer1": "",
    "question2": "Quels sont les deux autres documents obligatoires à présenter en cas de contrôle par les forces de l'ordre ?",
    "answer2": "Le certificat d'immatriculation et le permis de conduire. Le terme « carte grise » est accepté.",
    "question3": "Qu'est ce qu'une hémorragie ?",
    "answer3": "C'est une perte de sang prolongée qui ne s'arrête pas. Elle imbibe de sang un mouchoir en quelques secondes."
  },
  {
    "block": "42",
    "type": "VE",
    "question1": "Indiquez où se situe la sécurité enfant sur l'une des portières à l'arrière du véhicule.",
    "answer1": "",
    "question2": "Si la sécurité enfant est enclenchée, est-il possible d'ouvrir la portière arrière depuis l'extérieur ?",
    "answer2": "Oui.",
    "question3": "Quels sont les risques pour une personne victime d'une hémorragie ?",
    "answer3": "Entraîner pour la victime une détresse circulatoire ou un arrêt cardiaque."
  },
  {
    "block": "43",
    "type": "VI",
    "question1": "Allumez le(s) feu(x) de brouillard arrière(s) et montrez le voyant correspondant.",
    "answer1": "",
    "question2": "Pouvez-vous les utiliser par forte pluie ?",
    "answer2": "Non.",
    "question3": "Quels sont les signes d'un arrêt cardiaque ?",
    "answer3": "La victime ne répond pas, ne réagit pas et ne respire pas ou présente une respiration anormale."
  },
  {
    "block": "44",
    "type": "VE",
    "question1": "Avec l'assistance de l'accompagnateur, contrôlez l'état, la propreté et le fonctionnement du ou des feux de recul.",
    "answer1": "Vérification des feux, propres, en bon état et qui fonctionnent (toute anomalie doit être signalée).",
    "question2": "Quelles sont leurs deux utilités ?",
    "answer2": "- Éclairer la zone de recul la nuit. - Avertir les autres usagers de la manœuvre.",
    "question3": "Qu'est ce qu'un défibrillateur automatisé externe (DAE) ?",
    "answer3": "C'est un appareil qui peut permettre de rétablir une activité cardiaque normale à une victime en arrêt cardiaque."
  },
  {
    "block": "45",
    "type": "VI",
    "question1": "Montrez comment régler la hauteur de l'appui-tête du siège conducteur.",
    "answer1": "",
    "question2": "Quelle est son utilité ?",
    "answer2": "Permet de retenir le mouvement de la tête en cas de choc et de limiter les blessures.",
    "question3": "Par quels moyens doit être réalisée l'alerte des secours ?",
    "answer3": "L'alerte doit être donnée à l'aide d'un téléphone portable ou, à défaut, d'un téléphone fixe, ou d'une borne d'appel d'urgence."
  },
  {
    "block": "46",
    "type": "VE",
    "question1": "Avec l'assistance de l'accompagnateur, contrôlez l'état, la propreté et le fonctionnement des feux de stop.",
    "answer1": "Vérification des feux, propres, en bon état et fonctionnent (toute anomalie doit être signalée).",
    "question2": "Quelle est la conséquence en cas de panne des feux de stop ?",
    "answer2": "Un manque d'information pour les usagers suiveurs et un risque de collision.",
    "question3": "Lors d'un appel avec les services de secours, pourquoi devez-vous attendre que votre correspondant vous autorise à raccrocher ?",
    "answer3": "Car il peut nous conseiller ou nous guider dans la réalisation des gestes à faire, ou ne pas faire, jusqu'à l'arrivée des secours."
  },
  {
    "block": "47",
    "type": "VI",
    "question1": "De quelle couleur est le voyant qui indique au conducteur que le feu de brouillard arrière est allumé ?",
    "answer1": "",
    "question2": "Quelle est la différence entre un voyant orange et un voyant rouge ?",
    "answer2": "- Rouge : Une anomalie de fonctionnement ou un danger. - Orange : un élément important.",
    "question3": "Qu'est ce qu'un arrêt cardiaque ?",
    "answer3": "Le cœur ne fonctionne plus ou fonctionne d'une façon anarchique."
  },
  {
    "block": "48",
    "type": "VE",
    "question1": "Ouvrez et refermez le capot, puis vérifiez sa bonne fermeture.",
    "answer1": "",
    "question2": "En roulant, quel est le risque d'une mauvaise fermeture du capot ?",
    "answer2": "Un risque d'ouverture du capot pouvant entraîner un accident.",
    "question3": "Quel est le risque principal d'un arrêt cardiaque sans intervention des secours ?",
    "answer3": "La mort de la victime qui survient en quelques minutes."
  },
  {
    "block": "49",
    "type": "VI",
    "question1": "Montrez la commande de recyclage de l'air.",
    "answer1": "",
    "question2": "Quel peut être le risque de maintenir le recyclage de l'air de manière prolongée ?",
    "answer2": "Un risque de mauvaise visibilité par l'apparition de buée sur les surfaces vitrées.",
    "question3": "Quels sont les risques pour une personne en perte de connaissance qui est allongée sur le dos ?",
    "answer3": "L'arrêt respiratoire et l'arrêt cardiaque."
  },
  {
    "block": "50",
    "type": "VE",
    "question1": "Montrez l'orifice de remplissage du produit lave-glace.",
    "answer1": "Si le candidat a des difficultés pour ouvrir le capot, l'accompagnateur peut lui indiquer comment procéder.",
    "question2": "Quel est le principal risque d'une absence de liquide lave-glace ?",
    "answer2": "Une mauvaise visibilité.",
    "question3": "Pourquoi faut-il pratiquer immédiatement une réanimation cardio-pulmonaire sur une victime en arrêt cardiaque ?",
    "answer3": "Car les lésions du cerveau surviennent dès les premières minutes."
  },
  {
    "block": "51",
    "type": "VI",
    "question1": "Allumez les feux de route et montrez le voyant correspondant.",
    "answer1": "",
    "question2": "Quel est le risque de maintenir les feux de route lors d'un croisement avec d'autres usagers ?",
    "answer2": "Un risque d'éblouissement des autres usagers.",
    "question3": "Quel est l'objectif du Signal d'Alerte et d'Information des Populations (SAIP) ?",
    "answer3": "Avertir la population d'un danger imminent ou qu'un événement grave est en train de se produire."
  },
  {
    "block": "52",
    "type": "VE",
    "question1": "Vérifiez l'état, la propreté et le fonctionnement des feux diurnes.",
    "answer1": "Vérification des feux, propres, en bon état et qui fonctionnent (toute anomalie doit être signalée).",
    "question2": "Quelle est leur utilité ?",
    "answer2": "Rendre le véhicule plus visible le jour.",
    "question3": "A quel moment pouvez-vous mettre fin à un appel avec les secours ?",
    "answer3": "Uniquement lorsque notre correspondant nous invite à le faire."
  },
  {
    "block": "53",
    "type": "VI",
    "question1": "Vérifiez la présence du constat amiable dans le véhicule.",
    "answer1": "",
    "question2": "En cas d'accident, dans quel délai doit-il être transmis à l'assureur ?",
    "answer2": "5 jours.",
    "question3": "Quel est le risque principal d'un arrêt cardiaque sans intervention des secours ?",
    "answer3": "La mort de la victime qui survient en quelques minutes."
  },
  {
    "block": "54",
    "type": "VE",
    "question1": "Vérifiez la présence du triangle de pré-signalisation.",
    "answer1": "",
    "question2": "Utilise-t-on le triangle de pré-signalisation sur autoroute ?",
    "answer2": "Non.",
    "question3": "Quel comportement doit-on adopter en présence d'une victime en arrêt cardiaque ?",
    "answer3": "- ALERTER: alerter immédiatement les secours. - MASSER: pratiquer une réanimation cardio-pulmonaire. - DEFIBRILLER: utiliser un défibrillateur automatique (DAE) si possible."
  },
  {
    "block": "55",
    "type": "VI",
    "question1": "De quelle couleur est le voyant qui indique une défaillance du système de freinage.",
    "answer1": "",
    "question2": "Quel est le risque de circuler avec un frein de parking mal desserré ?",
    "answer2": "Une dégradation du système de freinage.",
    "question3": "Comment arrêter une hémorragie ?",
    "answer3": "En appuyant fortement sur l'endroit qui saigne avec les doigts ou avec la paume de la main en mettant un tissu propre sur la plaie."
  },
  {
    "block": "56",
    "type": "VE",
    "question1": "Montrez où s'effectue le changement d'une ampoule à l'avant du véhicule.",
    "answer1": "Si le candidat a des difficultés pour ouvrir le capot, l'accompagnateur peut lui indiquer comment procéder.",
    "question2": "Quelles sont les conséquences en cas de panne d'un feu de croisement ?",
    "answer2": "Une mauvaise visibilité et le risque d'être confondu avec un deux roues.",
    "question3": "Citez les trois manières d'évaluer l'état de conscience d'une victime ?",
    "answer3": "- Lui poser des questions simples (\"comment ça va ?\", \"vous m'entendez ?\"). - Lui secouer doucement les épaules. - Lui prendre la main en lui demandant d'exécuter un geste simple (\"serrez-moi la main\")."
  },
  {
    "block": "57",
    "type": "VI",
    "question1": "Si le véhicule en est équipé, montrez la commande du limiteur de vitesse.",
    "answer1": "",
    "question2": "Quelle est l'utilité d'un limiteur de vitesse ?",
    "answer2": "Ne pas dépasser la vitesse programmée par le conducteur.",
    "question3": "Quels sont les numéros d'urgence à appeler ?",
    "answer3": "- Le 18, numéro d'appel des sapeurs-pompiers. - Le 15, numéro d'appel des SAMU. – Le 112, numéro de téléphone réservé aux appels d'urgence et valide dans l'ensemble de l'Union Européenne."
  },
  {
    "block": "58",
    "type": "VE",
    "question1": "Montrez où s'effectue le changement d'une ampoule à l'arrière du véhicule.",
    "answer1": "",
    "question2": "Quelles sont les conséquences en cas de panne d'un feu de position arrière ?",
    "answer2": "Être mal vu et un risque de collision.",
    "question3": "Comment est diffusée l'alerte émise par le Signal d'Alerte et d'Information aux Populations (SAIP) ?",
    "answer3": "Grâce aux sirènes, aux médias tels que Radio France et France Télévision ou encore grâce à l'application SAIP."
  },
  {
    "block": "59",
    "type": "VI",
    "question1": "Faites fonctionner l'essuie-glace arrière du véhicule.",
    "answer1": "",
    "question2": "Pour une bonne visibilité vers l'arrière, en plus de l'utilisation de l'essuie-glace, quelle commande pouvez-vous actionner par temps de pluie ?",
    "answer2": "La commande de désembuage arrière. Le terme dégivrage peut remplacer celui de désembuage.",
    "question3": "Quels comportements adopter en présence d'une victime qui ne répond pas et ne réagit pas, mais respire ?",
    "answer3": "- La placer en position stable sur le côté ou position latérale de sécurité. - Alerter les secours. - Surveiller la respiration de la victime jusqu'à l'arrivée des secours."
  },
  {
    "block": "60",
    "type": "VE",
    "question1": "Ouvrez et refermez le coffre, puis vérifiez sa bonne fermeture.",
    "answer1": "",
    "question2": "Lorsque vous transportez un poids important dans le coffre, quelles sont les précautions à prendre en ce qui concerne les pneumatiques et l'éclairage avant ?",
    "answer2": "Augmenter la pression des pneumatiques et régler la hauteur des feux avants.",
    "question3": "L'utilisation d'un Défibrillateur Automatisé (DAE) sur une victime qui n'est pas en arrêt cardiaque présente-t-elle un risque ?",
    "answer3": "Non car le défibrillateur se déclenche uniquement quand la victime est en arrêt cardiaque."
  },
  {
    "block": "61",
    "type": "VI",
    "question1": "Indiquez où se situe les attaches de type Isofix dans le véhicule.",
    "answer1": "Pour info : les attaches de type Isofix sont obligatoires sur les véhicules neufs depuis 2011.",
    "question2": "Peut-on fixer tous les sièges enfant sur des attaches de type Isofix ?",
    "answer2": "Non (uniquement ceux compatibles avec ce type d'attache).",
    "question3": "Comment vérifier la respiration d'une victime ?",
    "answer3": "Regarder si le ventre et la poitrine se soulèvent et sentir de l'air à l'expiration."
  },
  {
    "block": "62",
    "type": "VE",
    "question1": "Ouvrez et refermez le coffre, puis vérifiez sa bonne fermeture.",
    "answer1": "",
    "question2": "Quels sont les risques de circuler avec des objets sur la plage arrière ?",
    "answer2": "Une mauvaise visibilité vers l'arrière et un risque de projection en cas de freinage brusque ou de choc.",
    "question3": "Qu'est ce qu'une hémorragie ?",
    "answer3": "C'est une perte de sang prolongée qui ne s'arrête pas. Elle imbibe de sang un mouchoir en quelques secondes."
  },
  {
    "block": "63",
    "type": "VI",
    "question1": "Montrez sur le tableau de bord le voyant indiquant une baisse de pression d'air d'un pneumatique.",
    "answer1": "Pour info: obligatoire sur tous les véhicules neufs mis en circulation à compter du 01/11/2014.",
    "question2": "A quelle fréquence est-il préconisé de vérifier la pression d'air des pneumatiques ?",
    "answer2": "Tous les mois.",
    "question3": "Qu'est ce qu'un arrêt cardiaque ?",
    "answer3": "Le cœur ne fonctionne plus ou fonctionne d'une façon anarchique."
  },
  {
    "block": "64",
    "type": "VE",
    "question1": "Procédez à l'ouverture du capot puis à sa fermeture en vous assurant de son verrouillage.",
    "answer1": "",
    "question2": "Pour un capot s'ouvrant depuis l'avant du véhicule, quelle est l'utilité du dispositif de sécurité ?",
    "answer2": "Empêcher l'ouverture du capot en circulation en cas de mauvais verrouillage.",
    "question3": "Quels sont les risques pour une personne victime d'une hémorragie ?",
    "answer3": "Entraîner pour la victime une détresse circulatoire ou un arrêt cardiaque."
  },
  {
    "block": "65",
    "type": "VI",
    "question1": "Montrez la commande de réglage de hauteur des feux.",
    "answer1": "Dispositif situé en général à gauche du volant.",
    "question2": "Pourquoi doit-on régler la hauteur des feux ?",
    "answer2": "Pour ne pas éblouir les autres usagers.",
    "question3": "Comment et pourquoi protéger une zone de danger en cas d'accident de la route ?",
    "answer3": "En délimitant clairement et largement la zone de danger de façon visible pour protéger les victimes et éviter un sur-accident"
  },
  {
    "block": "66",
    "type": "VE",
    "question1": "Montrez où se situent les gicleurs de lave-glace avant.",
    "answer1": "",
    "question2": "Quelle est la principale conséquence d'un dispositif de lave-glace défaillant ?",
    "answer2": "Une mauvaise visibilité due à l'impossibilité de nettoyer le pare-brise.",
    "question3": "Qu'est ce qu'un défibrillateur automatisé externe (DAE) ?",
    "answer3": "C'est un appareil qui peut permettre de rétablir une activité cardiaque normale à une victime en arrêt cardiaque."
  },
  {
    "block": "67",
    "type": "VI",
    "question1": "Mettez le rétroviseur intérieur en position \"nuit\".",
    "answer1": "Si le véhicule possède un système automatique de mise en position \"nuit\" du rétroviseur intérieur, le candidat l'indique.",
    "question2": "Quel est l'intérêt de la position nuit ?",
    "answer2": "Ne pas être ébloui par les feux du véhicule suiveur.",
    "question3": "Comment est composé le signal d'alerte du Système d'Alerte et d'Information des Populations (SAIP) diffusé par les sirènes ?",
    "answer3": "Il se compose de deux codes distincts : - le Signal National d'Alerte (SNA), variation du signal sur trois cycles successifs. - Le signal de fin d'alerte, signal continu."
  },
  {
    "block": "68",
    "type": "VE",
    "question1": "Contrôlez l'état du flanc sur l'un des pneumatiques.",
    "answer1": "En bon état (toute anomalie doit être signalée).",
    "question2": "Citez un endroit où l'on peut trouver les pressions préconisées pour les pneumatiques ?",
    "answer2": "Elles sont indiquées : - soit sur une plaque sur une portière. - soit dans la notice d'utilisation du véhicule. - soit au niveau de la trappe à carburant.",
    "question3": "Sur autoroute, comment indiquer avec précision les lieux de l'accident depuis un téléphone portable ?",
    "answer3": "En indiquant le numéro de l'autoroute, le sens de circulation et le point kilométrique."
  },
  {
    "block": "69",
    "type": "VI",
    "question1": "Faites fonctionner les essuie-glaces avants du véhicule sur la position la plus rapide.",
    "answer1": "",
    "question2": "Comment détecte-t-on leur usure en circulation ?",
    "answer2": "En cas de pluie, lorsqu'ils laissent des traces sur le pare brise.",
    "question3": "Comment vérifier la respiration d'une victime ?",
    "answer3": "Regarder si le ventre et la poitrine se soulèvent et sentir de l'air à l'expiration."
  },
  {
    "block": "70",
    "type": "VE",
    "question1": "Montrez où s'effectue le contrôle du niveau du liquide de frein.",
    "answer1": "Le candidat montre que le niveau est entre le mini et le maxi. Si le candidat a des difficultés pour ouvrir le capot, l'accompagnateur peut lui indiquer comment procéder.",
    "question2": "Quelle est la conséquence d'un niveau insuffisant du liquide de frein ?",
    "answer2": "Une perte d'efficacité du freinage.",
    "question3": "En cas de panne ou d'accident, quel équipement de sécurité doit être porté avant de quitter le véhicule ?",
    "answer3": "Il faut porter le gilet de haute visibilité avant de sortir du véhicule. Le terme \"gilet jaune\" peut être utilisé par le candidat."
  },
  {
    "block": "71",
    "type": "VI",
    "question1": "Vérifiez la présence du gilet de haute visibilité.",
    "answer1": "Le candidat doit montrer où il se trouve sans obligation de le sortir. Le terme \"gilet jaune\" peut être utilisé si le candidat ne comprend pas.",
    "question2": "En cas de panne ou d'accident, quel autre accessoire de sécurité est obligatoire ?",
    "answer2": "Le triangle de pré-signalisation.",
    "question3": "Si un dégagement d'urgence de la victime est nécessaire, où doit-elle être déplacée ?",
    "answer3": "Dans un endroit suffisamment éloigné du danger et de ses conséquences."
  },
  {
    "block": "72",
    "type": "VE",
    "question1": "Montrez où s'effectue le remplissage du liquide de refroidissement.",
    "answer1": "Le candidat ouvre le capot et montre le bocal. Si le candidat a des difficultés pour ouvrir le capot, l'accompagnateur peut lui indiquer comment procéder.",
    "question2": "Quel est le danger si l'on complète le niveau du liquide lorsque le moteur est chaud ?",
    "answer2": "Un risque de brûlure.",
    "question3": "Comment arrêter une hémorragie ?",
    "answer3": "En appuyant fortement sur l'endroit qui saigne avec les doigts ou avec la paume de la main en mettant un tissu propre sur la plaie."
  },
  {
    "block": "73",
    "type": "VI",
    "question1": "Actionnez le dégivrage de la lunette arrière et montrez le voyant ou le repère correspondant.",
    "answer1": "",
    "question2": "Quelle peut être la conséquence d'une panne de dégivrage de la lunette arrière ?",
    "answer2": "L'insuffisance ou l'absence de visibilité vers l'arrière.",
    "question3": "Hors autoroute ou endroit dangereux, en cas de panne ou d'accident, où doit être placé le triangle de pré-signalisation ?",
    "answer3": "Le triangle de pré-signalisation doit être placé à une distance d'environ 30 m de la panne ou de l'accident, ou avant un virage, ou un sommet de côte."
  },
  {
    "block": "74",
    "type": "VE",
    "question1": "Contrôlez l'état, la propreté et le fonctionnement de tous les clignotants côté trottoir.",
    "answer1": "Vérification des clignotants, propres, en bon état et fonctionnent (toute anomalie doit être signalée).",
    "question2": "Quelle est la signification d'un clignotement plus rapide ?",
    "answer2": "Non fonctionnement de l'une des ampoules.",
    "question3": "Quelles sont les précautions à prendre pour réaliser le dégagement d'urgence d'une victime en présence d'un danger réel, immédiat et non contrôlable ?",
    "answer3": "La victime doit être visible, facile à atteindre et rien ne doit gêner son dégagement. Il faut être sûr(e) de pouvoir réaliser le dégagement de la victime."
  },
  {
    "block": "75",
    "type": "VI",
    "question1": "Montrez le voyant d'alerte signalant une pression insuffisante d'huile dans le moteur.",
    "answer1": "",
    "question2": "Quelles sont les conditions à respecter pour compléter le niveau d'huile ?",
    "answer2": "Moteur froid et sur un terrain plat.",
    "question3": "Quelles sont les trois informations à transmettre aux services de secours ?",
    "answer3": "Le numéro de téléphone à partir duquel l'appel est émis, la nature et la localisation la plus précise du problème."
  },
  {
    "block": "76",
    "type": "VE",
    "question1": "Contrôlez l'état, la propreté et le fonctionnement des feux de détresse à l'avant et à l'arrière.",
    "answer1": "Vérification des feux, propres, en bon état et fonctionnent (toute anomalie doit être signalée).",
    "question2": "Dans quels cas doit-on les utiliser ?",
    "answer2": "En cas de panne, d'accident ou de ralentissement important.",
    "question3": "Dans quel cas peut-on positionner une victime en Position Latérale de Sécurité (PLS) ?",
    "answer3": "Si la victime ne répond pas, ne réagit pas et respire."
  },
  {
    "block": "77",
    "type": "VI",
    "question1": "Vérifiez la présence de l'éthylotest.",
    "answer1": "",
    "question2": "A partir de quel taux d'alcoolémie, en période de permis probatoire, est-on en infraction ?",
    "answer2": "0,2 g /l, c'est à dire 0 verre, car dès le 1er verre ce seuil peut être dépassé.",
    "question3": "Quel comportement doit-on adopter en présence d'une victime en arrêt cardiaque ?",
    "answer3": "- ALERTER: alerter immédiatement les secours. - MASSER: pratiquer une réanimation cardio-pulmonaire. - DEFIBRILLER: utiliser un défibrillateur automatique (DAE) si possible."
  },
  {
    "block": "78",
    "type": "VE",
    "question1": "Contrôlez l'état, la propreté et le fonctionnement des feux de route.",
    "answer1": "Vérification des feux, propres, en bon état et fonctionnent (toute anomalie doit être signalée).",
    "question2": "Citez un cas d'utilisation d'un appel lumineux.",
    "answer2": "- Pour avertir de son approche. - En cas de danger. - A la place de l'avertisseur sonore.",
    "question3": "En cas de panne ou d'accident, quel équipement de sécurité doit être porté avant de quitter le véhicule ?",
    "answer3": "Il faut porter le gilet de haute visibilité avant de sortir du véhicule. Le terme \"gilet jaune\" peut être utilisé par le candidat."
  },
  {
    "block": "79",
    "type": "VI",
    "question1": "Positionnez la commande pour diriger l'air vers le pare-brise.",
    "answer1": "La position auto (désembuage automatique) peut être utilisée si le véhicule en est équipé.",
    "question2": "Citez deux éléments complémentaires permettant un désembuage efficace ?",
    "answer2": "La commande de vitesse de ventilation. - La commande d'air chaud. - La climatisation.",
    "question3": "Quel est l'objectif du Signal d'Alerte et d'Information des Populations (SAIP) ?",
    "answer3": "Avertir la population d'un danger imminent ou qu'un événement grave est en train de se produire."
  },
  {
    "block": "80",
    "type": "VE",
    "question1": "Montrez où doit s'effectuer le contrôle du niveau d'huile moteur.",
    "answer1": "Le candidat montre la jauge. Pas de manipulation exigée. Si le candidat a des difficultés pour ouvrir le capot, l'accompagnateur peut lui indiquer comment procéder.",
    "question2": "Quel est le principal risque d'un manque d'huile moteur ?",
    "answer2": "Un risque de détérioration ou de casse du moteur.",
    "question3": "Comment est diffusée l'alerte émise par Le Signal d'Alerte et d'Information aux Populations (SAIP) ?",
    "answer3": "Grâce aux sirènes, aux médias tels que Radio France et France Télévision ou encore grâce à l'application SAIP."
  },
  {
    "block": "81",
    "type": "VI",
    "question1": "De quelle couleur est le voyant qui indique une défaillance du système de freinage ?",
    "answer1": "",
    "question2": "Quel est le risque de circuler avec un frein de parking mal desserré ?",
    "answer2": "Une dégradation du système de freinage.",
    "question3": "En général, en cas de panne ou d'accident, où doit être placé le triangle de pré-signalisation ?",
    "answer3": "Le triangle de pré-signalisation doit être placé à une distance d'environ 30 m de la panne ou de l'accident, ou avant un virage ou un sommet de côte."
  },
  {
    "block": "82",
    "type": "VE",
    "question1": "Contrôlez l'état, la propreté et le fonctionnement des feux de croisement.",
    "answer1": "Vérification des feux, propres, en bon état et fonctionnent (toute anomalie doit être signalée).",
    "question2": "Quelles sont les conséquences d'un mauvais réglage de ces feux ?",
    "answer2": "Une mauvaise vision vers l'avant et un risque d'éblouissement des autres usagers.",
    "question3": "Dans quelle situation peut-on déplacer une victime ?",
    "answer3": "En présence d'un danger réel, immédiat, non contrôlable. Ce déplacement doit rester exceptionnel."
  },
  {
    "block": "83",
    "type": "VI",
    "question1": "Montrez le voyant d'alerte signalant une température trop élevée du liquide de refroidissement.",
    "answer1": "",
    "question2": "Quelle est la conséquence d'une température trop élevée de ce liquide ?",
    "answer2": "La surchauffe ou la casse moteur.",
    "question3": "Lors d'un appel avec les services de secours, pourquoi devez-vous attendre que votre correspondant vous autorise à raccrocher ?",
    "answer3": "Car il peut nous conseiller ou nous guider dans la réalisation des gestes à faire, ou ne pas faire, jusqu'à l'arrivée des secours."
  },
  {
    "block": "84",
    "type": "VE",
    "question1": "Sur le flanc d'un pneumatique, désignez le repère du témoin d'usure de la bande de roulement.",
    "answer1": "",
    "question2": "Qu'est-ce que l'aquaplanage, et quelle peut être sa conséquence ?",
    "answer2": "La présence d'un film d'eau entre le pneumatique et la chaussée pouvant entraîner une perte de contrôle du véhicule.",
    "question3": "Si un dégagement d'urgence de la victime est nécessaire, où doit-elle être déplacée ?",
    "answer3": "Dans un endroit suffisamment éloigné du danger et de ses conséquences."
  },
  {
    "block": "85",
    "type": "VI",
    "question1": "Actionnez les feux de détresse.",
    "answer1": "",
    "question2": "Dans quels cas doit-on les utiliser ?",
    "answer2": "En cas de panne, d'accident ou de ralentissement important.",
    "question3": "Quels comportements adopter en cas de diffusion du signal d'alerte du Système d'Alerte et d'Information des Populations (SAIP) ?",
    "answer3": "- Se mettre en sécurité. - S'informer grâce aux médias et sites internet des autorités dès que leur consultation est possible. - Respecter les consignes des autorités."
  },
  {
    "block": "86",
    "type": "VE",
    "question1": "A l'aide de la plaque indicative, donnez la pression préconisée pour les pneumatiques arrières, véhicule chargé.",
    "answer1": "",
    "question2": "A quelle fréquence est-il préconisé de vérifier la pression des pneus ?",
    "answer2": "Chaque mois pour une utilisation normale de son véhicule et avant chaque long trajet.",
    "question3": "Comment et pourquoi protéger une zone de danger en cas d'accident de la route ?",
    "answer3": "En délimitant clairement et largement la zone de danger de façon visible pour protéger les victimes et éviter un sur-accident."
  },
  {
    "block": "87",
    "type": "VI",
    "question1": "Montrez la commande permettant de désactiver l'airbag du passager avant.",
    "answer1": "",
    "question2": "Dans quelle situation doit-on le désactiver ?",
    "answer2": "Lors du transport d'un enfant dans un siège auto dos à la route.",
    "question3": "Quelles sont les conditions pour réaliser le dégagement d'urgence d'une victime en présence d'un danger réel, immédiat et non contrôlable ?",
    "answer3": "La victime doit être visible, facile à atteindre et rien ne doit gêner son dégagement. Il faut être sûr(e) de pouvoir réaliser le dégagement de la victime."
  },
  {
    "block": "88",
    "type": "VE",
    "question1": "Indiquez où se situe la sécurité enfant sur l'une des portières à l'arrière du véhicule.",
    "answer1": "",
    "question2": "Si la sécurité enfant est enclenchée, est-il possible d'ouvrir la portière arrière depuis l'extérieur ?",
    "answer2": "Oui.",
    "question3": "Quels sont les risques pour une personne victime d'une hémorragie ?",
    "answer3": "Entraîner pour la victime une détresse circulatoire ou un arrêt cardiaque."
  },
  {
    "block": "89",
    "type": "VI",
    "question1": "Montrez le voyant signalant l'absence de bouclage de la ceinture de sécurité du conducteur.",
    "answer1": "",
    "question2": "En règle générale, à partir de quel âge un enfant peut-il être installé sur le siège passager avant du véhicule ?",
    "answer2": "10 ans.",
    "question3": "Comment est composé le signal d'alerte du Système d'Alerte et d'Information des Populations (SAIP) diffusé par les sirènes ?",
    "answer3": "Il se compose de deux codes distincts : - le Signal National d'Alerte (SNA), variation du signal sur trois cycles successifs. - Le signal de fin d'alerte, signal continu."
  },
  {
    "block": "90",
    "type": "VE",
    "question1": "Avec l'assistance de l'accompagnateur, contrôlez l'état, la propreté et le fonctionnement des feux de stop.",
    "answer1": "Vérification des feux, propres, en bon état et fonctionnent (toute anomalie doit être signalée).",
    "question2": "Quelle est la conséquence en cas de panne des feux de stop ?",
    "answer2": "Un manque d'information pour les usagers suiveurs et un risque de collision.",
    "question3": "Lors d'un appel avec les services de secours, pourquoi devez-vous attendre que votre correspondant vous autorise à raccrocher ?",
    "answer3": "Car il peut nous conseiller ou nous guider dans la réalisation des gestes à faire, ou ne pas faire, jusqu'à l'arrivée des secours."
  },
  {
    "block": "91",
    "type": "VI",
    "question1": "Allumez le(s) feu(x) de brouillard arrière(s) et montrez le voyant correspondant.",
    "answer1": "",
    "question2": "Pouvez-vous les utiliser par forte pluie ?",
    "answer2": "Non.",
    "question3": "Quels sont les signes d'un arrêt cardiaque ?",
    "answer3": "La victime ne répond pas, ne réagit pas et ne respire pas, ou présente une respiration anormale."
  },
  {
    "block": "92",
    "type": "VE",
    "question1": "Vérifiez l'état, la propreté et le fonctionnement des feux diurnes.",
    "answer1": "Vérification des feux, propres, en bon état et fonctionnent (toute anomalie doit être signalée).",
    "question2": "Quelle est leur utilité ?",
    "answer2": "Rendre le véhicule plus visible le jour.",
    "question3": "A quel moment pouvez-vous mettre fin à un appel avec les secours ?",
    "answer3": "Uniquement lorsque notre correspondant nous invite à le faire."
  },
  {
    "block": "93",
    "type": "VI",
    "question1": "Montrez la commande de recyclage de l'air.",
    "answer1": "",
    "question2": "Quel peut être le risque de maintenir le recyclage de l'air de manière prolongée ?",
    "answer2": "Un risque de mauvaise visibilité par l'apparition de buée sur les surfaces vitrées.",
    "question3": "Quels sont les risques pour une personne en perte de connaissance qui est allongée sur le dos ?",
    "answer3": "L'arrêt respiratoire et l'arrêt cardiaque."
  },
  {
    "block": "94",
    "type": "VE",
    "question1": "Vérifiez la présence du triangle de pré-signalisation.",
    "answer1": "",
    "question2": "Utilise-t-on le triangle de pré-signalisation sur autoroute ?",
    "answer2": "Non.",
    "question3": "Quel comportement doit-on adopter en présence d'une victime en arrêt cardiaque ?",
    "answer3": "- ALERTER: alerter immédiatement les secours. - MASSER: pratiquer une réanimation cardio-pulmonaire. - DEFIBRILLER: utiliser un défibrillateur automatique (DAE) si possible."
  },
  {
    "block": "95",
    "type": "VI",
    "question1": "Allumez les feux de route et montrez le voyant correspondant.",
    "answer1": "",
    "question2": "Quel est le risque de maintenir les feux de route lors d'un croisement avec d'autres usagers ?",
    "answer2": "Un risque d'éblouissement des autres usagers.",
    "question3": "Quel est l'objectif du Signal d'Alerte et d'Information des Populations (SAIP) ?",
    "answer3": "Avertir la population d'un danger imminent ou qu'un événement grave est en train de se produire."
  },
  {
    "block": "96",
    "type": "VE",
    "question1": "Montrez où s'effectue le changement d'une ampoule à l'avant du véhicule.",
    "answer1": "Si le candidat a des difficultés pour ouvrir le capot, l'accompagnateur peut lui indiquer comment procéder.",
    "question2": "Quelles sont les conséquences en cas de panne d'un feu de croisement ?",
    "answer2": "Une mauvaise visibilité et le risque d'être confondu avec un deux roues.",
    "question3": "Citez les trois manières d'évaluer l'état de conscience d'une victime ?",
    "answer3": "- Lui poser des questions simples (\"comment ça va ?\", \"vous m'entendez ?\"). - Lui secouer doucement les épaules. - Lui prendre la main en lui demandant d'exécuter un geste simple (\"serrez-moi la main\")."
  },
  {
    "block": "97",
    "type": "VI",
    "question1": "Faites fonctionner l'essuie-glace arrière du véhicule.",
    "answer1": "",
    "question2": "Pour une bonne visibilité vers l'arrière, en plus de l'utilisation de l'essuie-glace, quelle commande pouvez-vous actionner par temps de pluie ?",
    "answer2": "La commande de désembuage arrière. Le terme dégivrage peut remplacer celui de désembuage.",
    "question3": "Quels comportements adopter en présence d'une victime qui ne répond pas et ne réagit pas, mais respire ?",
    "answer3": "- La placer en position stable sur le côté ou position latérale de sécurité. - Alerter les secours. - Surveiller la respiration de la victime jusqu'à l'arrivée des secours."
  },
  {
    "block": "98",
    "type": "VE",
    "question1": "Montrez où s'effectue le changement d'une ampoule à l'arrière du véhicule.",
    "answer1": "",
    "question2": "Quelles sont les conséquences en cas de panne d'un feu de position arrière ?",
    "answer2": "Être mal vu et un risque de collision.",
    "question3": "Comment est diffusée l'alerte émise par le Signal d'Alerte et d'Information aux Populations (SAIP) ?",
    "answer3": "Grâce aux sirènes, aux médias tels que Radio France et France Télévision ou encore grâce à l'application SAIP."
  },
  {
    "block": "99",
    "type": "VI",
    "question1": "Montrez le voyant indiquant une baisse de pression d'air d'un pneumatique ?",
    "answer1": "Pour info : obligatoire sur tous les véhicules neufs mis en circulation à compter du 01/11/2014.",
    "question2": "A quelle fréquence est-il préconisé de vérifier la pression d'air des pneumatiques ?",
    "answer2": "Tous les mois.",
    "question3": "Qu'est ce qu'un arrêt cardiaque ?",
    "answer3": "Le cœur ne fonctionne plus ou fonctionne d'une façon anarchique."
  },
  {
    "block": "00",
    "type": "VE",
    "question1": "Montrez où se situent les gicleurs de lave-glace avant ?",
    "answer1": "",
    "question2": "Quelle est la principale conséquence d'un dispositif de lave-glace défaillant ?",
    "answer2": "Une mauvaise visibilité due à l'impossibilité de nettoyer le pare-brise.",
    "question3": "Qu'est ce qu'un défibrillateur automatisé externe (DAE) ?",
    "answer3": "C'est un appareil qui peut permettre de rétablir une activité cardiaque normale à une victime en arrêt cardiaque."
  }
];

export function getQuestionByBlock(blockNumber: string): Question | undefined {
  return questions.find(q => q.block === blockNumber);
}

export function getRandomBlock(): string {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex].block;
}
