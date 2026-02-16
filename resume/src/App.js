import React, { useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  useEffect(() => {
    const blob = document.getElementById("blob");
    if (!blob) return;

    let points = 6;
    let radius = 150;
    let angleStep = (Math.PI * 2) / points;
    let tick = 0;

    function animate() {
      tick += 0.03;
      let pathData = "";

      for (let i = 0; i < points; i++) {
        const theta = i * angleStep;
        const offsetX = Math.sin(tick + i) * 20;
        const offsetY = Math.cos(tick + i) * 20;

        const x = Math.cos(theta) * (radius + offsetX);
        const y = Math.sin(theta) * (radius + offsetY);

        pathData += (i === 0 ? "M" : "L") + x.toFixed(2) + "," + y.toFixed(2) + " ";
      }
      pathData += "Z";
      blob.setAttribute("d", pathData);

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  const projectsList = [
    { title: "CA Firm Website", desc:"Corporate design for tax consultants & CAs." },
    { title: "Coaching Institute Website", desc:"Modern design with courses and batch schedules." },
    { title: "Real Estate Website", desc:"Property listings and client testimonials." },
    { title: "School Website", desc:"Admissions forms, events, gallery, and news sections." },
    { title: "Shopify Store", desc:"Online store with products, payment, and inventory." },
    { title: "eLearning Platform", desc:"Course catalog, quizzes, and payment integration." }
  ];

  return (
    <div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Pro Web Solutions</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="blob-container">
          <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(300,300)">
              <path id="blob" fill="#497BFF" />
            </g>
          </svg>
        </div>
        <div className="hero-text">
          <h1 className="hero-title">Web & Growth Solutions That Get Results</h1>
          <p className="hero-subtitle">
            We build high-impact, SEO-optimized websites that boost your visibility, drive leads, and grow your business online.
          </p>
          <a href="#contact" className="btn btn-primary btn-lg">Hire Me</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-5 text-center">
        <div className="container">
          <h2>About Our Solutions</h2>
          <p>
            We create high-impact digital experiences combining strategic planning and modern technology. 
            From custom React websites to WordPress & Shopify solutions, our websites are built for speed, 
            performance, and real business growth.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h2 className="mb-4">Skills & Technologies</h2>
          <div className="row justify-content-center">
            {["HTML5", "CSS3", "JavaScript", "React JS", "Bootstrap", "WordPress", "Shopify", "SEO", "Content Writing"].map((skill, i) => (
              <div key={i} className="col-md-2 mb-3 skill-card">{skill}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section id="services" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4" style={{ fontWeight: "700", color: "#222c57" }}>
            Data-Driven Solutions to Boost Your Business Revenue
          </h2>
          <p className="text-center mb-5" style={{ maxWidth: "650px", margin: "auto", color: "#444a8a", fontSize: "1.1rem" }}>
            No matter what your business requires, we provide comprehensive digital solutions designed to elevate your brand and maximize your online visibility. From creating a strong web presence to building brand authority, our services help you connect with a wider audience, attract more leads, and drive sustainable growth.
          </p>
          
          <div className="row g-4 justify-content-center">

            {/* Card 1 */}
            <div className="col-md-4">
              <div className="service-card-yellow p-4 rounded shadow-sm h-100 d-flex flex-column">
                <div className="service-icon mb-3">
                  <i className="bi bi-layout-text-window-reverse" style={{ fontSize: "2rem", color: "#f2b944" }}></i>
                </div>
                <h5 style={{ fontWeight: "700" }}>Website Designing & Development Services</h5>
                <p style={{ flexGrow: 1 }}>
                  Don’t settle for average—let us craft a website that works as hard as you do. Get started today! We create user-friendly websites that drive guaranteed results.
                </p>
                <button className="btn btn-warning mt-auto align-self-start">Web Design & Development Services</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="service-card-yellow p-4 rounded shadow-sm h-100 d-flex flex-column">
                <div className="service-icon mb-3">
                  <i className="bi bi-megaphone" style={{ fontSize: "2rem", color: "#f2b944" }}></i>
                </div>
                <h5 style={{ fontWeight: "700" }}>Digital Marketing (SEO/ PPC/ Social Media)</h5>
                <p style={{ flexGrow: 1 }}>
                  Don’t let your competitors take the lead, take control of your digital presence and watch your business grow with our proven SEO solutions!
                </p>
                <button className="btn btn-warning mt-auto align-self-start">SEO Services</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="service-card-yellow p-4 rounded shadow-sm h-100 d-flex flex-column">
                <div className="service-icon mb-3">
                  <i className="bi bi-cart-check" style={{ fontSize: "2rem", color: "#f2b944" }}></i>
                </div>
                <h5 style={{ fontWeight: "700" }}>E-commerce Website Designing Services</h5>
                <p style={{ flexGrow: 1 }}>
                  Give your brand a boost & build your perfect online store today! Unveil the full potential of your online store with our E-commerce Website Design services!
                </p>
                <button className="btn btn-warning mt-auto align-self-start">E-commerce Development Services</button>
              </div>
            </div>

            {/* Card 4 - Mobile App */}
            <div className="col-md-4">
              <div className="service-card-yellow p-4 rounded shadow-sm h-100 d-flex flex-column">
                <div className="service-icon mb-3">
                  <i className="bi bi-phone" style={{ fontSize: "2rem", color: "#f2b944" }}></i>
                </div>
                <h5 style={{ fontWeight: "700" }}>Mobile Application Development Services</h5>
                <p style={{ flexGrow: 1 }}>
                  Whether you're looking to build a customer-facing app or an internal tool, we design solutions just for you!
                </p>
                <button className="btn btn-warning mt-auto align-self-start">Send Enquiry</button>
              </div>
            </div>

            {/* Card 5 - Branding */}
            <div className="col-md-4">
              <div className="service-card-yellow p-4 rounded shadow-sm h-100 d-flex flex-column">
                <div className="service-icon mb-3">
                  <i className="bi bi-brush" style={{ fontSize: "2rem", color: "#f2b944" }}></i>
                </div>
                <h5 style={{ fontWeight: "700" }}>Branding Solution</h5>
                <p style={{ flexGrow: 1 }}>
                  Work with our team of experts and cultivate the art of branding. We help you re-brand your business & take it to the zenith of success.
                </p>
                <button className="btn btn-warning mt-auto align-self-start">Learn More</button>
              </div>
            </div>

          </div>

          {/* CTA Section */}
          <div className="text-center mt-5" style={{ maxWidth: "650px", margin: "auto", color: "#222c57" }}>
            <p style={{ fontSize: "1.2rem" }}>
              Ready to take the next step? <br/>
              Let’s kick things off with a <strong>free consultation today!</strong>
            </p>
            <button className="btn btn-primary btn-lg mb-4">Let's Talk Now</button>

            <p style={{ fontSize: "1rem", color: "#555" }}>
              To experience the holistic approach and long-term growth for your business,<br/>
              you need a 360-degree approach. Tell Us:
            </p>

            
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">Demo Projects</h2>
          <div className="row g-4">
            {projectsList.map((proj, i) => (
              <div key={i} className="col-md-4 project-card shadow p-3 h-100">
                <h5>{proj.title}</h5>
                <p>{proj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-5 text-center">
        <div className="container">
          <h2>Pricing & Packages</h2>
          <h3 className="text-primary fw-bold">Starting at ₹20,000</h3>
          <p>Domain & Hosting managed by client for better ownership.</p>
          <p>Flexible payment options: 50% advance, 50% on delivery.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 text-center text-white bg-primary">
        <div className="container">
          <h2 className="mb-4">Contact Me</h2>
          <p>Email: yourmail@gmail.com</p>
          <p>Phone / WhatsApp: 9XXXXXXXXX</p>
          <form className="mt-4">
            <input className="form-control mb-3" placeholder="Your Name" required />
            <input className="form-control mb-3" type="email" placeholder="Your Email" required />
            <textarea className="form-control mb-3" placeholder="Your Message" rows={5} required></textarea>
            <button className="btn btn-light" type="submit">Send Message</button>
          </form>
        </div>
      </section>

    </div>
  );
}

export default App;
