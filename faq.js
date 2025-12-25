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
    const question = document.createElement("h2");
    question.textContent = item.question;

    const answer = document.createElement("p");
    answer.textContent = item.answer;

    container.appendChild(question);
    container.appendChild(answer);
  });
}