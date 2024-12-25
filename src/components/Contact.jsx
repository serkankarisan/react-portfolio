import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { gmail, outlook, send, sendHover } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [client, setClient] = useState("");
  const [form, setForm] = useState({
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMail();
  };
  const sendMail = () => {
    var email = "karisanserkan@gmail.com"; // E-posta adresi

    var mailtoLink = "";
    if (client === "gmail") {
      mailtoLink =
        "https://mail.google.com/mail/?view=cm&fs=1&to=" +
        email +
        "&su=" +
        encodeURIComponent(form.subject) +
        "&body=" +
        encodeURIComponent(form.message);
    } else if (client === "outlook") {
      mailtoLink =
        "https://outlook.live.com/owa/?path=/mail/action/compose&to=" +
        email +
        "&subject=" +
        encodeURIComponent(form.subject) +
        "&body=" +
        encodeURIComponent(form.message);
    } else {
      mailtoLink =
        "mailto:" +
        email +
        "?subject=" +
        encodeURIComponent(form.subject) +
        "&body=" +
        encodeURIComponent(form.message);
    }

    // Kullanıcıyı mailto bağlantısına yönlendiriyoruz
    window.open(mailtoLink, "_blank");
  };
  const sendButtonClass = `live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[150px] sm:h-[50px] 
            w-[150px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out`;
  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText} style={{ marginTop: "1rem" }}>
          İletişime Geçin
        </p>
        <h3 className={styles.sectionHeadTextLight}>İletişim.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
        >
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Başlık</span>
            <input
              required
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Başlık nedir?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Mesaj</span>
            <textarea
              required
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Mesajınız nedir?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
          </label>
          <div className="flex gap-4">
            <button
              onClick={(e) => {
                setClient("gmail");
              }}
              type="submit"
              className={sendButtonClass}
            >
              Gmail
              <img
                src={gmail}
                alt="send"
                className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
              />
            </button>
            <button
              onClick={(e) => {
                setClient("outlook");
              }}
              type="submit"
              className={sendButtonClass}
            >
              Outlook
              <img
                src={outlook}
                alt="send"
                className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
              />
            </button>
            <button
              onClick={(e) => {
                setClient("");
              }}
              type="submit"
              className={sendButtonClass}
            >
              Mail
              <img
                src={send}
                alt="send"
                className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
              />
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
