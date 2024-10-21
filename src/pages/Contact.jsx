import { useForm } from "react-hook-form";
import { useSubmit } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faReddit, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";  
import CustomMap from "../components/CustomMap.jsx";

const Contact = () => {
    
    const { register, handleSubmit, setError, formState: {errors} } = useForm();

    const submit = useSubmit("ID DE LA ESCUELA DE PIT, PENDIENTE", 
        {
            onError(errs) {
              const formErrs = errs.getFormErrors();
              for (const { code, message } of formErrs) {
                setError(`root.${code}`, {
                  type: code,
                  message,
                });
              }
      
              const fieldErrs = errs.getAllFieldErrors();
              for (const [field, errs] of fieldErrs) {
                setError(field, {
                  message: errs.map((e) => e.message).join(', '),
                });
              }
            },
          }
      
    );

    return(
        <main className="flex flex-col gap-24 p-4 my-8">
            <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
              <div className="flex flex-col items-center gap-4 lg:items-start">
                <h1 className="text-4xl text-text1 text-center font-bold lg:text-5xl lg:text-left">Contactanos</h1>
                <p className="text-text1 text-center font-semibold lg:text-left md:max-w-[36ch]">Estamos encantados de escuchar sobre vos, tu equipo, o como podemos trabajar juntos</p>
                <ul className="hidden md:flex gap-2 text-text1">
                  <li className="transition-colors hover:text-lightBlue1"><NavLink to="https://instagram.com"><FontAwesomeIcon icon={faInstagram} size="xl"/></NavLink></li>
                  <li className="transition-colors hover:text-lightBlue1"><NavLink to="https://x.com"><FontAwesomeIcon icon={faTwitter} size="xl"/></NavLink></li>
                  <li className="transition-colors hover:text-lightBlue1"><NavLink to="https://reddit.com"><FontAwesomeIcon icon={faReddit} size="xl"/></NavLink></li>
                  <li className="transition-colors hover:text-lightBlue1"><NavLink to="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} size="xl"/></NavLink></li>
                </ul>
              </div> 
              <form className="flex flex-col gap-6"  onSubmit={handleSubmit(submit)}>
                  <label className="flex flex-col">
                      Tu email:
                      <input className="p-4 border-b border-lightBlue1/75 focus:outline focus:outline-lightBlue1/75 caret-lightBlue1/75" type="email" {...register("email", {required: true})}/>
                      {errors.email && <span className="text-error">Por favor escriba su Email.</span>}
                  </label>
                  <label className="flex flex-col">
                      Asunto:
                      <input className="p-4 border-b border-lightBlue1/75 focus:outline focus:outline-lightBlue1/75 caret-lightBlue1/75" type="text" {...register("subject", {required: true})}/>
                      {errors.subject && <span className="text-error">Por favor escriba un asunto.</span>}
                  </label>
                  <label className="flex flex-col">
                      Tu mensaje:
                      <textarea className="p-4 border-b border-lightBlue1/75 focus:outline focus:outline-lightBlue1/75 caret-lightBlue1/75" name="message" {...register("message", {required: true})} />
                      {errors.message && <span className="text-error">Por favor escriba su mensaje.</span>}
                  </label>
                  <button className="py-2 px-4 text-text2 font-bold bg-lightBlue1 rounded-full transition-colors hover:bg-text1" type="submit">Enviar</button>
              </form>
            </section>
            <section className="flex flex-col gap-4 items-center md:flex-row md:gap-8">
              <CustomMap />
              <address className="text-center text-text1/85 font-bold md:text-xl md:text-left">
                <span className="text-2xl">Escuela de P.I.T </span><br/>
                Gurruchaga 2426, Palermo - Ciudad Autonoma de Buenos Aires <br/>
                +54 911 5555 555 55 <br/>
                Horarios de atencion: Lunes a Viernes: 9:30 A.M - 5:30 P.M
              </address>                
            </section>
        </main>
    )
};

export default Contact;