import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import s from "./Form.module.scss";

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

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    emailjs
      .send(EMAILJS.SERVICE, EMAILJS.TEMPLATE, data, EMAILJS.KEY)
      .then(() => {
        toast.success("Email sent");
        reset();
      })
      .catch(() => toast.error("Can't send an email. Please try again"));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <label className={s.label}>
        <input
          {...register("name", required)}
          placeholder=" "
          className={s.input}
        />
        <span className={s.text}>Name</span>
        {errors.name && <span className={s.error}>Enter your name please</span>}
      </label>
      <label className={s.label}>
        <input
          {...register("email", required)}
          type="email"
          placeholder=" "
          className={s.input}
        />
        <span className={s.text}>Email</span>
        {errors.email && <span className={s.error}>Enter an email please</span>}
      </label>
      <label className={s.label}>
        <input
          {...register("subject", required)}
          placeholder=" "
          className={s.input}
        />
        <span className={s.text}>Subject</span>
        {errors.subject && (
          <span className={s.error}>Specify a subject please</span>
        )}
      </label>
      <label className={s.label}>
        <textarea
          {...register("message", required)}
          rows={5}
          placeholder=" "
          className={s.textarea}
        />
        <span className={s.text}>Message</span>
        {errors.message && (
          <span className={s.error}>Leave a message please</span>
        )}
      </label>
      <button type="submit" className={s.button}>
        Send me an email
      </button>
    </form>
  );
}
export default Form;
