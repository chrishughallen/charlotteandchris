const langEn = document.getElementById('lang-en');
const langFr = document.getElementById('lang-fr');

const translations = {
  en: {
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    dress: "Dress code?",
    dress_content: "We invite you to dress up and feel good! Elegant, festive attire.",
    where: "Where?",
    when: "When?",
    when_content: "May 30, 2026",
    are: "are",
    and: "and",
    getting: "getting",
    married: "married",
    nav_home: "Home",
    nav_info: "Information",
    gifts: "Gift Registry",
    date: "May 30, 2026",
    walk: "The chateau is a 5 minute walk. You are welcome to hang out in the park until the ceremony begins.",
    welcome_paragraph: "Two countries. Two cultures. One very good reason to celebrate. We are so excited for you to join us on our wedding day! Below you will find all the practical information you need. For any further questions, feel free to reach out to us directly or send us an ",
    info_title: "Practical Information",
    info_cta: "Information",
    program_title: "Program:",
    program_mairie: "3:00pm - Town Hall Ceremony",
    program_ceremony: "4:30pm - Wedding Ceremony",
    program_cocktail: "5:30pm - Cocktail",
    program_dinner: "8:00pm - Dinner",
    program_party: "10:30pm - Party",
    transportation_title: "Transportation",
    transportation_line0: "The wedding venue is located about an hour from Paris by car.",
    transportation_line1: "There are 2 train stations near Chateau de Villeconin. You can take the RER C to Étréchy or Breuillet",
    transportation_line2: "You can then take a taxi or uber from the train station, but be aware that quantity is limited as it is not in a busy area. You may want to reserve ahead of time.",
    parking: "If you plan to arrive with your own vehicle, there is parking available at the Chateau. Please let us know in your RSVP if you will be driving.",
    sleep: "Where to sleep?",
    camping: "Camping is available in the park of the chateau. Please let us know in your RSVP if you would like to camp. Camping equipment is not included, but you will have access to a bathroom.",
    hotel: "Hotels",
    lodging: "There are several hotels in the area, here are a few options:",
    airbnb: "Airbnbs and Gites",
    car: "by car",
    gites: "Several Airbnbs and Gites are available in the area. We recommend booking early as they fill up quickly."
  },
  
  fr: {
    days: "Jours",
    hours: "Heures",
    minutes: "Minutes",
    seconds: "Secondes",
    dress: "Code vestimentaire ?",
    dress_content: "Nous vous invitons à vous habiller élégamment et festivement, comme vous vous sentez bien.",
    where: "Où ?",
    when: "Quand ?",
    when_content: "30 Mai 2026",
    are: "vont",
    and: "et",
    getting: "se",
    married: "marier",
    nav_home: "Accueil",
    nav_info: "Informations Pratiques",
    date: "30 Mai 2026",
    gifts: "Liste de Mariage",
    info_title: "Informations Pratiques",
    walk: "Le château est situé à 5 minutes a pieds. Vous etes les bienvenues dans le parc en attendant la cérémonie.",
    welcome_paragraph: "Deux pays. Deux cultures. Une très bonne raison de faire la fête. Nous sommes ravis de vous compter parmi nous pour le jour de notre mariage ! Vous trouverez ci-dessous toutes les informations pratiques dont vous aurez besoin. Pour toute question supplémentaire, n'hésitez pas à nous contacter directement ou à nous envoyer un ",
    info_cta: "Informations Pratiques",
    program_title: "Programme :",
    program_mairie: "15h00 : Mairie",
    program_ceremony: "16h30 : Cérémonie laïque",
    program_cocktail: "17h30 - Cocktail",
    program_dinner: "20h00 - Dîner",
    program_party: "22h30 - Fête",
    transportation_title: "Transport",
    transportation_line0: "Le lieu du mariage est situé à environ une heure de Paris en voiture.",
    transportation_line1: "Il y a 2 gares près du Château de Villeconin. Vous pouvez prendre le RER C jusqu'à Étréchy ou Breuillet",
    transportation_line2: "Vous pouvez ensuite prendre un taxi ou un Uber depuis la gare, mais sachez que la quantité est limitée car ce n'est pas une zone très fréquentée. Vous pouvez envisager de réserver à l'avance.",
    parking: "Si vous prévoyez d'arriver en voiture, un parking est à votre disposition au Château. Veuillez nous indiquer dans votre confirmation de présence si vous venez en voiture.",
    sleep: "Où dormir ?",
    camping: "Le camping est possible dans le parc du château. Veuillez nous indiquer dans votre confirmation de présence si vous souhaitez camper. Le matériel de camping n'est pas fourni, mais vous aurez accès à des sanitaires.",
    hotel: "Hôtels à proximité",
    lodging: "Il existe de nombreuses options d'hébergements, en voici quelques-unes :",
    airbnb: "Airbnbs et Gites",
    car: "en voiture",
    gites: "Plusieurs locations Airbnb et gîtes sont disponibles dans la région. Nous vous recommandons de réserver tôt car ils se remplissent rapidement."
  }
};

const faqEn = [
  {
    question: "Can I bring a plus one?",
    answer: "Due to space limitations at the venue, we’re unfortunately unable to accommodate additional guests. Thank you so much for understanding — we can’t wait to celebrate with you!"
  },
  {
    question: "Are children welcome?",
    answer: "Yes, children are welcome! Please note that there will be no babysitting service on site."
  },
  {
    question: "I have dietary restrictions — what should I do?",
    answer: "You can let us know about any dietary restrictions in the RSVP form, and we’ll do our very best to accommodate you."
  },
  {
    question: "What time does the celebration end?",
    answer: "The DJ is booked until 5:00 AM — so bring your dancing shoes!"
  },
  {
    question: "What is the weather usually like at the end of May?",
    answer: "Late May in the Île-de-France region is generally mild and pleasant, with daytime temperatures around 18–22°C (65–72°F). Evenings can be cooler, so we recommend bringing a light jacket."
  }
];

const faqFr = [
  {
    question: "Puis-je venir accompagné(e) ?",
    answer: "En raison des contraintes de capacité du lieu, nous ne pourrons malheureusement pas accueillir d’invités supplémentaires. Merci beaucoup de votre compréhension — nous avons hâte de célébrer avec vous !"
  },
  {
    question: "Les enfants sont-ils les bienvenus ?",
    answer: "Oui, les enfants sont les bienvenus. Merci de noter qu’il n’y aura pas de service de garde d’enfants sur place."
  },
  {
    question: "J’ai des restrictions alimentaires — que faire ?",
    answer: "Vous pouvez nous indiquer toute restriction alimentaire dans le formulaire RSVP, et nous ferons de notre mieux pour nous adapter."
  },
  {
    question: "À quelle heure se termine la fête ?",
    answer: "Le DJ est prévu jusqu’à 5h du matin — la piste de danse sera ouverte longtemps !"
  },
  {
    question: "Quel temps fait-il généralement à la fin du mois de mai ?",
    answer: "Fin mai en Île-de-France, le temps est généralement doux et agréable, avec des températures autour de 18–22°C en journée. Les soirées peuvent être plus fraîches — prévoyez une petite veste."
  }
];

function renderFAQ(faqArray) {
  const container = document.getElementById("faq");
  container.innerHTML = ""; // clear existing content

  faqArray.forEach(item => {
    const block = document.createElement("div")
    const question = document.createElement("h3");
    question.textContent = item.question;

    const answer = document.createElement("p");
    answer.textContent = item.answer;

    block.appendChild(question);
    block.appendChild(answer);
    container.appendChild(block);
  });
}

langEn.addEventListener('click', () => { 
    setLanguage('en');
});

langFr.addEventListener('click', () => { 
    setLanguage('fr');
});

function setLanguage(lang) {
  // Save to cookie
  document.cookie = `lang=${lang}; path=/; max-age=${60 * 60 * 24 * 30}`;

  if( lang == 'en' ) {
   langEn.classList.add('selected');
   langFr.classList.remove('selected');
   renderFAQ(faqEn);
  } else {
    langFr.classList.add('selected');
    langEn.classList.remove('selected');
    renderFAQ(faqFr);
  }

  // Update UI text
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}

// Read cookie helper
function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

// On page load
const savedLang = getCookie("lang") || "fr";
setLanguage(savedLang);