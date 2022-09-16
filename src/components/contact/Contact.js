import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import React, {
  useState,
  useEffect,
  useReducer,
  useRef,
} from "react";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const nameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 0 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 0 };
  }
  return { value: "", isValid: false };
};

const Contact = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "",
    isValid: null,
  });

  const form = useRef();
  const emailInputRef = useRef();
  const nameInputRef = useRef();

  const { isValid: emailIsValid } = emailState;
  const { isValid: nameIsValid } = nameState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Cheking from validity");
      setFormIsValid(emailIsValid && nameIsValid);
    }, 500);
    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, nameIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const nameChangeHandler = (event) => {
    dispatchName({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validateNameHandler = () => {
    dispatchName({ type: "INPUT_BLUR" });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (formIsValid) {
      emailjs
        .sendForm(
          "service_cp9b2yq",
          "template_1jeui0m",
          form.current,
          "PJ8fggppCjReswcjf"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
            alert("Your message has been sent successfully !")
          },
          (error) => {
            console.log(error.text);
          }
        );

    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      nameInputRef.current.focus();
    }
  };

  return (
    
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 className="email">boughattas.medaziz@esprit.tn</h5>
            <a
              href="mailto:boughattas.medaziz@esprit.tn"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Aziz Boughattas</h5>
            <a
              href="https://m.me/aziz.boughattas"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+216 54 649 865</h5>
            <a
              href="https://api.whatsapp.com/send?phone=54649865"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            ref={nameInputRef}
            id="name"
            name="name"
            placeholder="Your Name"
            label="name"
            type="name"
            isValid={nameIsValid}
            onChange={nameChangeHandler}
            onBlur={validateNameHandler}
          />
          <input
            ref={emailInputRef}
            id="email"
            name="email"
            placeholder="Your Email"
            label="E-Mail"
            type="email"
            isValid={emailIsValid}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message{" "}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
