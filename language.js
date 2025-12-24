const langEn = document.getElementById('lang-en');
const langFr = document.getElementById('lang-fr');

const translations = {
  en: {
    what: "What?",
    where: "Where?",
    when: "When?",
    are: "are",
    and: "and",
    getting: "getting",
    married: "married",
    nav_home: "Home",
    nav_info: "Information",
    gifts: "Gift Registry",
    date: "May 30, 2026",
    info_title: "Practical Information",
    info_cta: "Information",
    program_title: "Program:",
    program_mairie: "3:00pm - Town Hall Ceremony",
    program_ceremony: "4:30pm - Wedding Ceremony",
    program_cocktail: "5:30pm - Cocktail",
    program_dinner: "8:00pm - Dinner",
    program_party: "10:30pm - Party",
    transportation_title: "Transportation",
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
    what: "Quoi ?",
    where: "Où ?",
    when: "Quand ?",
    are: "vont",
    and: "et",
    getting: "se",
    married: "marier",
    nav_home: "Accueil",
    nav_info: "Informations Pratiques",
    date: "30 Mai 2026",
    gifts: "Liste de Mariage",
    info_title: "Informations Pratiques",
    info_cta: "Informations Pratiques",
    program_title: "Programme :",
    program_mairie: "15h00 : Mairie",
    program_ceremony: "16h30 : Cérémonie laïque",
    program_cocktail: "17h30 - Cocktail",
    program_dinner: "20h00 - Dîner",
    program_party: "22h30 - Fête",
    transportation_title: "Transport",
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
  } else {
    langFr.classList.add('selected');
    langEn.classList.remove('selected');
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