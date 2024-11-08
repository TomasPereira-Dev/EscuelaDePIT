import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useMemo, useState } from "react";

//no funciona correctamente, corregir en otro momento.

const Filter = ({ list, filterType, setList }) => {

    const [option, setOption] = useState(null);

    const filterFunction = (array, filterType) => {
        const temp = [];
        for(let i = 0; i < array.length; i++){
            if(filterType === "provincia"){
                if(!temp.includes(array[i].provincia)){
                    temp.push(array[i].provincia);
                }
            }else{
                if(!temp.includes(array[i].localidad)){
                    temp.push(array[i].localidad);
                }   
            }
        }
        return temp;
    }

    const filteredList = (option) =>{
            console.log(list, option)
            const temp = list.filter(item => item.provincia === option);
            setList(temp)
    }

    const memoizedList = useMemo(() => filterFunction(list, filterType), [list, filterType]);
    
    return(
        <div className="space-y-1">
            <div className="flex items-center justify-between gap-6 h-fit px-4 py-2 text-text1 border border-slate-500/25 rounded-lg">
                <span>{!option ? filterType : option}</span>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <ul className="w-full px-4 py-2 space-y-2 bg-lightBlue2/50 text-text1  border-slate-500/25 rounded-lg">
                {memoizedList.map(item => <li key={filterType + '-' + item} onClick={() => {setOption(item); filteredList(option)}}>{item}</li>)}
            </ul>
        </div>


    )
}

export default Filter;