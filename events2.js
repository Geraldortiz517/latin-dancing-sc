const events = [
    {
      title: "Salsa Night",
      location: "Downtown Santa Cruz",
      images: [
        "./assets/abbotsquare.jpg",
        "./assets/abbotsquare.jpg"
      ]
    },
    {
      title: "Swing Social",
      location: "Capitola Dance Hall",
      images: [
            "./assets/afrobeats.png",
        "./assets/afrobeats.png"
      ]
    },
    {
      title: "Tango Evening",
      location: "Harbor Center",
      images: [
            "./assets/salsabythesea.jpg",
        "./assets/salsabythesea.jpg"
      ]
    },
    {
      title: "Hip Hop Jam",
      location: "Boardwalk Stage",
      images: [
            "./assets/abbotsquare.jpg",
        "./assets/abbotsquare.jpg"
      ]
    }
  ];
  
  const cards = document.querySelectorAll(".event-card");
  const popup = document.getElementById("popup");
  const closeBtn = document.querySelector(".close");
  const eventTitle = document.getElementById("event-title");
  const eventLocation = document.getElementById("event-location");
  const sliderImage = document.getElementById("slider-image");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  
  let currentEventIndex = 0;
  let currentSlideIndex = 0;
  
  cards.forEach(card => {
    card.addEventListener("click", () => {
      currentEventIndex = +card.getAttribute("data-event");
      currentSlideIndex = 0;
      showPopup();
    });
  });
  
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
  
  prevBtn.addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex - 1 + events[currentEventIndex].images.length) % events[currentEventIndex].images.length;
    updateSlider();
  });
  
  nextBtn.addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex + 1) % events[currentEventIndex].images.length;
    updateSlider();
  });
  
  function showPopup() {
    const event = events[currentEventIndex];
    eventTitle.textContent = event.title;
    eventLocation.textContent = event.location;
    updateSlider();
    popup.style.display = "flex";
  }
  
  function updateSlider() {
    sliderImage.src = events[currentEventIndex].images[currentSlideIndex];
  }
  