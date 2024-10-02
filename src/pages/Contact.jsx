import { useForm } from "react-hook-form";
import { useSubmit } from "@formspree/react";
;  

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
      
    )

    return(
        <main className="p-4">
            <h1 className="hidden text-4xl text-text1 text-center font-bold lg:block">Contactanos</h1>
            <p className="hidden text-xl text-text1 text-center lg:block">Estamos encantados de escuchar sobre vos, tu equipo, o como podemos trabajar juntos</p>
            <section>
                <h1 className="text-4xl text-text1 text-center font-bold lg:hidden">Contactanos</h1>
                <p className="text-text1 text-center font-semibold lg:hidden">Estamos encantados de escuchar sobre vos, tu equipo, o como podemos trabajar juntos</p>
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