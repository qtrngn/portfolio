import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";


import Alert from "../components/Alert";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Whale from "../models/Whale";


const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert , hideAlert } = useAlert();
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("animation");


  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("animation");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,

        {
          from_name: form.name,
          to_name: "Quynh",
          from_email: form.email,
          to_email: "nquynh1110@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({ show: true, text: 'Message sent successfully!', type: 'success', });

        setTimeout(() => {
          hideAlert(false);
          setCurrentAnimation('animation')
          setForm({ name:'', email:'', message:'' });
        }, 3000);
      },
      (error) => {
        setIsLoading(false);
        console.log(error);
        setCurrentAnimation('animation');

        showAlert({ show: true, text: "I didn't receive you message", type: 'danger' })
      });
  };

  const handleFocus = () => {};
  const handleBlur = () => {};

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert} /> }
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text purple-gradient_text">Get In Touch</h1>
        <form
          ref={formRef}
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          {/* name */}
          <label className="text-white font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          {/* email */}
          <label className="text-white font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="john@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          {/* Your message */}
          <label className="text-white font-semibold">
            Your message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Feel free to reach out if you have any questions!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Whale
              currentAnimation={currentAnimation}
              position={[0, 0.3, 3]}
              rotation={[12.9, -3.4, 0]}
              scale={[1, 1, 1]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
