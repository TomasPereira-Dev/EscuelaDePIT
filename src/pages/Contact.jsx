import { useForm } from "react-hook-form";
import { useSubmit } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faReddit, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";  

const Contact = () => {
    
    const { register, handleSubmit, setError, formState: {errors, isSubmitSuccessful, isSubmitting} } = useForm();

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
        <main className="p-4">
            <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
              <div className="space-y-4">
                <h1 className="text-4xl text-text1 text-center font-bold lg:text-5xl lg:text-left">Contactanos</h1>
                <p className="text-text1 text-center font-semibold lg:text-left lg:max-w-[36ch]">Estamos encantados de escuchar sobre vos, tu equipo, o como podemos trabajar juntos</p>
                <ul className="flex gap-2 text-text1">
                  <li><FontAwesomeIcon icon={faInstagram} size="xl"/></li>
                  <li><NavLink to="https://x.com"><FontAwesomeIcon icon={faTwitter} size="xl"/></NavLink></li>
                  <li><NavLink to="https://reddit.com"><FontAwesomeIcon icon={faReddit} size="xl"/></NavLink></li>
                  <li><NavLink to="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} size="xl"/></NavLink></li>
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
                    <button className="py-2 px-4 text-text2 font-bold bg-lightBlue1 rounded-full" type="submit">Enviar</button>
                </form>
            </section>
            <section>
                <p className="text-text1/85 text-center font-semibold max-w-[32ch]">Escuela de P.I.T [Direccion] - C.A.B.A <br /> +54 911 5555 555 55 <br /> Horarios de atencion: <br /> Lunes a Viernes: 9:30 A.M - 5:30 P.M</p>
            </section>

        </main>
    )
};

export default Contact;