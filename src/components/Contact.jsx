import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");

    try {
      await emailjs.send(
        "service_66jvul6", // Service ID
        "template_wuupvd2", // Template ID 
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "eENVZar6SDLp3Kkzn"   // Public key 
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("");
      }, 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        {/* =========================
            LEFT SIDE
        ========================== */}

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h2>
            Let's
            <br />
            <span>connect.</span>
          </h2>

          <p className="contact-description">
            Have a project in mind, an opportunity,
            or just want to say hello? I'd love to
            hear from you.
          </p>


          <div className="contact-details">

            {/* EMAIL */}

            <a href="mailto:himanshukarnatak847@gmail.com">
              <span className="contact-icon">
                @
              </span>

              <div>
                <small>EMAIL</small>
                <strong>
                  himanshukarnatak847@gmail.com
                </strong>
              </div>
            </a>


            {/* GITHUB */}
          
            <a
              href="https://github.com/Himanshu-karnatak"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">
                GH
              </span>

              <div>
                <small>GITHUB</small>
                <strong>
                  View my GitHub
                </strong>
              </div>
            </a>


            {/* LINKEDIN */}
           
            <a
              href="https://www.linkedin.com/in/himanshu-karnatak"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">
                in
              </span>

              <div>
                <small>LINKEDIN</small>
                <strong>
                  Let's connect professionally
                </strong>
              </div>
            </a>

          </div>

        </motion.div>


        {/* =========================
            RIGHT SIDE FORM
        ========================== */}

        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
        >

          <div className="form-top-line">
            <span></span>
            <p>DROP ME A MESSAGE</p>
          </div>


          <form onSubmit={handleSubmit}>

            {/* NAME */}

            <div className="form-group">

              <label htmlFor="name">
                YOUR NAME
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>


            {/* EMAIL */}

            <div className="form-group">

              <label htmlFor="email">
                YOUR EMAIL
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>


            {/* MESSAGE */}

            <div className="form-group">

              <label htmlFor="message">
                YOUR MESSAGE
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />

            </div>


            {/* STATUS */}

            {status === "success" && (
              <p className="form-success">
                ✓ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="form-error">
                ✕ Something went wrong. Please try again.
              </p>
            )}


            {/* BUTTON */}

            <button
              type="submit"
              className="send-message-btn"
              disabled={status === "sending"}
            >

              <span>
                {status === "sending"
                  ? "SENDING..."
                  : status === "success"
                  ? "MESSAGE SENT ✓"
                  : "SEND MESSAGE"}
              </span>

              <b>
                {status === "sending" ? "..." : "↗"}
              </b>

            </button>

          </form>

        </motion.div>

      </div>


      {/* =========================
          BOTTOM
      ========================= */}

      <div className="contact-bottom">

        <span>
          © {new Date().getFullYear()} HIMANSHU KARNATAK
        </span>

        <span>
          DESIGNED & BUILT WITH REACT
        </span>

      </div>

    </section>
  );
}

export default Contact;