import Question from "../components/Question.jsx";

const Faq = () => {
    return(
            <ul className="flex flex-col justify-between p-4 text-text1 bg-text2 rounded-md divide-y divide-grayishBlue2">
                <Question question={"¿Qué es el P.I.T?"} awnser={"Lorem Ipsum"}/>
                <Question question={"¿Es doloroso?"} awnser={"Lorem Ipsum"}/>
                <Question question={"¿Para que dolores sirve el P.I.T?"} awnser={"Lorem Ipsum"}/>
                <Question question={"¿El P.I.T solo alivia el dolor o trata el problema?"} awnser={"Lorem Ipsum"}/>
                <Question question={"¿Cuantas sesiones se aplican habitualmente?"} awnser={"Lorem Ipsum"}/>
                <Question question={"¿Qué medicamento utiliza?"} awnser={"Lorem Ipsum"}/>
                <Question question={"¿El D5W causa reacciones alergicas?"} awnser={"Lorem Ipsum"}/>
                <Question question={"¿Cualquier paciente puede ser tratado con P.I.T?"} awnser={"Lorem Ipsum"}/>
            </ul>
    )
}

export default Faq;