import { useRef } from "react";
import { useState } from "react";
import "./contact.scss";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inputRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      inputRef.current.value = "";
      messageRef.current.value = "";
    }, 3000);
  };

  return (
    <section className="contact" id="contact">
      <div className="wrapper">
        <div className="left">
          <img src="assets/shake.svg" alt="shake-img" />
        </div>
        <div className="right">
          <h2>Contact.</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              ref={inputRef}
            />
            <textarea
              name="message"
              placeholder="Messsage"
              required
              ref={messageRef}
            ></textarea>
            <button type="submit">Send</button>
            {isSubmitted && (
              <span>Your message is sent, I will reply ASAP</span>
            )}
          </form>
        </div>
      </div>
      <div className="copyright">
        Designed by{" "}
        <a
          href="https://www.youtube.com/c/LamaDev/about"
          target="_blank"
          rel="noreferrer"
        >
          Lama Dev
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/MohMostafa-Web"
          target="_blank"
          rel="noreferrer"
        >
          MohMostafa
        </a>
        .
      </div>
    </section>
  );
};

export default Contact;
