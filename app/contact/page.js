"use client";

import { useForm } from "react-hook-form";

function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="contact">
      <div className="contactContainer">
        <h1>Contact</h1>
        <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Le nom est requis" })}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "L'email est requis",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Adresse email invalide",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            {...register("message", { required: "Le message est requis" })}
          />
          {errors.message && <p>{errors.message.message}</p>}
          <button type="submit" className="contactButton">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;
