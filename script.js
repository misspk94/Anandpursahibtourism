const plans = {
  one: [
    {
      time: "7:30 AM",
      title: "Arrive and begin at Takht Sri Keshgarh Sahib",
      text: "Start early for a peaceful visit, then take time around the complex before the day gets busy."
    },
    {
      time: "11:00 AM",
      title: "Walk the qila trail",
      text: "Visit nearby historic qila sites and pause for views of the old city landscape."
    },
    {
      time: "2:30 PM",
      title: "Explore Virasat-e-Khalsa",
      text: "Keep the museum for the afternoon so you can move through the galleries without rushing."
    }
  ],
  two: [
    {
      time: "Day 1",
      title: "Sacred Anandpur Sahib",
      text: "Visit Takht Sri Keshgarh Sahib, nearby gurdwaras, local bazaars, and enjoy langar with sangat."
    },
    {
      time: "Day 2",
      title: "Heritage and museum day",
      text: "Spend longer at Virasat-e-Khalsa, add the qila sites, and leave time for photography outside."
    },
    {
      time: "Evening",
      title: "Slow return",
      text: "Plan your return after sunset only if you are comfortable driving in hill-adjacent roads."
    }
  ],
  festival: [
    {
      time: "Morning",
      title: "Join the devotional atmosphere",
      text: "Arrive early, expect crowds, and keep your schedule flexible around processions and ceremonies."
    },
    {
      time: "Afternoon",
      title: "Watch martial displays",
      text: "Hola Mohalla is known for Sikh martial traditions, music, and large gatherings of devotees."
    },
    {
      time: "Night",
      title: "Stay nearby",
      text: "Book accommodation well ahead and avoid packing too many sights into the same festival day."
    }
  ]
};

const timeline = document.querySelector("#timeline");
const tabs = document.querySelectorAll(".tab");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const form = document.querySelector(".contact-form");

function renderPlan(planName) {
  timeline.innerHTML = plans[planName]
    .map(
      (item) => `
        <article>
          <time>${item.time}</time>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    renderPlan(tab.dataset.plan);
  });
});

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.querySelector(".form-note").textContent =
    "Thanks. Your enquiry is ready for the tourism team.";
  form.reset();
});

renderPlan("one");
