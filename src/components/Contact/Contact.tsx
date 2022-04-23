import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import s from "./Contact.module.scss";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const required = { required: true };
const EMAILJS = {
  SERVICE: "service_gmail",
  TEMPLATE: "template_q98b4im",
  KEY: "0UOTvQI-3oLO8rG44",
};

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    emailjs
      .send(EMAILJS.SERVICE, EMAILJS.TEMPLATE, data, EMAILJS.KEY)
      .then(console.log)
      .catch(console.log);
    reset();
  };

  return (
    <div>
      <h2 className="title">Contact me</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <input {...register("name", required)} className={s.input} />
        {errors.name && <span>Enter your name please</span>}
        <input
          {...register("email", required)}
          type="email"
          className={s.input}
        />
        {errors.email && <span>Enter an email please</span>}
        <input {...register("subject", required)} className={s.input} />
        {errors.subject && <span>Specify a subject please</span>}
        <textarea
          {...register("message", required)}
          rows={5}
          className={s.textarea}
        />
        {errors.message && <span>Leave a message please</span>}
        <button type="submit" className={s.button}>
          Contact me
        </button>
      </form>
    </div>
  );
}
export default Contact;
