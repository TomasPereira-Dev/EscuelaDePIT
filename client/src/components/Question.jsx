import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Question = ({question, awnser}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="flex flex-col py-4 bg-text2 lg:px-12 cursor-pointer" onClick={() => {setIsOpen(!isOpen)}}>
            <div className="flex justify-between items-center gap-4">
                <h3 className="text-xl font-semibold">{question}</h3>
                <button onClick={() => {setIsOpen(!isOpen)}}>
                    {isOpen ? <FontAwesomeIcon icon={faMinus}/> : <FontAwesomeIcon icon={faPlus}/>}
                </button>
            </div>
            <p className={`${isOpen ? 'block' : 'hidden'}`}>{awnser}</p>
        </li>
    )
};

export default Question;