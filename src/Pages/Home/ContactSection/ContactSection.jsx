import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const email = form.from_email.value;
    const message = form.message.value;
    const botField = form.bot_field.value;

    // ✅ Honeypot spam check
    if (botField) {
      return; // silently block bots
    }

    // ✅ Basic validation
    if (!email || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // ✅ Simple email format check
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    emailjs
      .sendForm(
        "service_mhoi2yj",
        "template_0pkg367",
        form,
        "WOBMMrfLVAr8JEf7-"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.reset();
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="my-12 px-4 text-white bg-[#030712]">
      <div className="max-w-[900px] mx-auto flex flex-col md:flex-row gap-12">
        {/* Contact Info Left */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 font-calistoga">
            Contact Information
          </h2>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-400" />
              <span className="font-medium">Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" />
              <span className="font-medium">sayedsheikh9@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-400" />
              <span className="font-medium">+880 1845868514</span>
            </div>
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-lime-400" />
              <span className="font-medium">+880 1845868514</span>
            </div>
          </div>
        </div>

        {/* Contact Form Right */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 font-calistoga">
            Send a Message
          </h2>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
            {/* ✅ Honeypot input */}
            <input
              type="text"
              name="bot_field"
              className="hidden"
              autoComplete="off"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your email"
              className="w-full bg-gray-800 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your message"
              className="w-full bg-gray-800 text-white p-3 rounded-md outline-none resize-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 w-full transition px-6 py-3 rounded-md text-white font-semibold flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <ImSpinner2 className="animate-spin" />
                  Sending...
                </>
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
      </div>
      <hr className="hr-fade mt-12 mx-auto hidden sm:block" />
    </section>
  );
};

export default ContactSection;
