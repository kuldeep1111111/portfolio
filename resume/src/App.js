import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

const quickInfo = [
  { label: "Rating", value: "4.0 / 5" },
  { label: "Reviews", value: "69 Ratings" },
  { label: "Established", value: "2018" },
  { label: "Timings", value: "9:30 AM - 9:00 PM" },
];

const gallery = [
  { title: "Scooter Collection", count: "20 Photos", tag: "All" },
  { title: "Showroom Exterior", count: "5 Photos", tag: "Exterior" },
  { title: "Office Interior", count: "4 Photos", tag: "Interior" },
  { title: "Bike Line-up", count: "7 Photos", tag: "Vehicle" },
];

const services = [
  "Second Hand Scooter",
  "Second Hand Motorcycle",
  "Royal Enfield Second Hand Motorcycle",
  "Hero Second Hand Motorcycle",
  "Honda Second Hand Scooter",
];

const ratingTrend = [4.0, 1.0, 5.0, 5.0, 3.0, 3.0, 1.0, 5.0, 5.0];

const reviews = [
  {
    name: "Priya Yadav",
    date: "16 May 2025",
    text: "Staff ka behavior decent tha, options achhe the aur purchase process clear tarike se samjhaya gaya.",
  },
  {
    name: "Stany Addicted",
    date: "11 Nov 2023",
    text: "Inventory kaafi wide hai. Comparison karne ke baad budget ke hisaab se practical option mila.",
  },
];

const faq = [
  {
    q: "Payment mode kya accept hota hai?",
    a: "Cash, Cheque aur Demand Draft available hain. Deal final karte waqt team payment guidance bhi deti hai.",
  },
  {
    q: "Nearest landmark kya hai?",
    a: "Location Opposite Chatri Park, Wz-5, Subhash Nagar, Delhi-110027 ke paas hai.",
  },
  {
    q: "Business hours kya hain?",
    a: "Monday se Sunday tak 9:30 AM se 9:00 PM ke beech store operational rehta hai.",
  },
];

function App() {
  return (
    <div className="bm-app">
      <header className="bm-header sticky-top">
        <div className="container py-3 d-flex justify-content-between align-items-center gap-3 flex-wrap">
          <div>
            <h1 className="bm-title mb-1">Bhumi Motors</h1>
            <p className="bm-subtitle mb-0">Second Hand Scooter Dealers in Subhash Nagar, Delhi</p>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-success"><i className="bi bi-telephone-fill me-2"></i>Show Number</button>
            <button className="btn btn-outline-success"><i className="bi bi-whatsapp me-2"></i>WhatsApp</button>
          </div>
        </div>
      </header>

      <main>
        <section className="bm-hero py-5">
          <div className="container">
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-8">
                <div className="panel h-100">
                  <span className="badge bg-success mb-3">4.0 ★ • 69 Ratings</span>
                  <h2 className="display-6 fw-bold">Trusted Pre-Owned Scooters & Motorcycles in Delhi</h2>
                  <p className="text-muted mt-3 mb-4">
                    Bhumi Motors quality second hand scooters aur Royal Enfield motorcycles showcase karta hai.
                    Team ka focus hai buyer ko transparent information, easy selection aur better on-ground support dena.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <a className="btn btn-dark" href="#photos">View Photos</a>
                    <a className="btn btn-outline-dark" href="#reviews">Read Reviews</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <aside className="panel h-100">
                  <h3 className="h5">Contact</h3>
                  <p className="mb-2"><i className="bi bi-geo-alt me-2"></i>Wz-5, Opposite Chatri Park, Subhash Nagar, Delhi-110027</p>
                  <p className="mb-2"><i className="bi bi-clock me-2"></i>Open till 9:00 PM</p>
                  <p className="mb-0"><i className="bi bi-tags me-2"></i>Brands: Hero, Royal Enfield</p>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-2">
          <div className="row g-3">
            {quickInfo.map((item) => (
              <div className="col-6 col-lg-3" key={item.label}>
                <div className="stat-card">
                  <small>{item.label}</small>
                  <p className="mb-0 fw-bold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="photos" className="container py-5">
          <div className="d-flex justify-content-between align-items-end flex-wrap gap-2 mb-3">
            <div>
              <h3 className="section-title">Photos</h3>
              <p className="text-muted mb-0">Business gallery categories from listing content.</p>
            </div>
          </div>
          <div className="row g-3">
            {gallery.map((item) => (
              <div className="col-md-6 col-lg-3" key={item.title}>
                <div className="gallery-card">
                  <div className="gallery-placeholder">{item.tag}</div>
                  <h4 className="h6 mt-3 mb-1">{item.title}</h4>
                  <p className="text-muted mb-0 small">{item.count}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="info-strip py-5">
          <div className="container">
            <h3 className="section-title">Quick Information</h3>
            <p className="text-muted mb-4">
              Second hand scooter dealer showcasing quality second hand scooters and Royal Enfield motorcycles,
              with expert support for motorcycle buyers.
            </p>
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="panel h-100">
                  <h4 className="h6 text-uppercase text-muted">Accepted Product Categories</h4>
                  <ul className="list-clean mb-0">
                    {services.map((service) => (
                      <li key={service}><i className="bi bi-check-circle-fill text-success me-2"></i>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="panel h-100">
                  <h4 className="h6 text-uppercase text-muted">Business Summary</h4>
                  <p className="text-muted mb-2">
                    Bhumi Motors Subhash Nagar mein located hai aur 2018 se customers ko serve kar raha hai.
                    Nearby landmark Opposite Chatri Park hone ki wajah se reach karna easy hai.
                  </p>
                  <p className="text-muted mb-0">
                    Customer-centric service aur practical pricing guidance par focus rakha jata hai, jisse transaction smoother banti hai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="container py-5">
          <h3 className="section-title">Reviews & Ratings</h3>
          <div className="review-summary mb-4">
            <span className="score">4.0</span>
            <div>
              <p className="mb-0 fw-bold">69 Ratings</p>
              <small className="text-muted">JD rating index based on ratings across web</small>
            </div>
          </div>

          <h4 className="h6 text-uppercase text-muted">Recent Rating Trend</h4>
          <div className="d-flex flex-wrap gap-2 mb-4">
            {ratingTrend.map((r, idx) => (
              <span className="trend-pill" key={`${r}-${idx}`}>{r} ★</span>
            ))}
          </div>

          <div className="row g-3">
            {reviews.map((review) => (
              <div className="col-md-6" key={review.name}>
                <article className="panel h-100">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4 className="h6 mb-0">{review.name}</h4>
                    <small className="text-muted">{review.date}</small>
                  </div>
                  <p className="text-muted mb-0">“{review.text}”</p>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section className="container pb-5">
          <h3 className="section-title">Frequently Asked Questions</h3>
          {faq.map((item, idx) => (
            <details className="faq-item" open={idx === 0} key={item.q}>
              <summary>{item.q}</summary>
              <p className="mb-0 mt-2 text-muted">{item.a}</p>
            </details>
          ))}
        </section>
      </main>

      <footer className="bm-footer py-4">
        <div className="container text-center">
          <p className="mb-1 fw-semibold">Bhumi Motors • Subhash Nagar • Delhi</p>
          <small>Professional single-page business website draft ready for deployment.</small>
        </div>
      </footer>
    </div>
  );
}

export default App;
