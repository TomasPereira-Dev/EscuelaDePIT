import Course from "../components/Course.jsx";
import useSWR from "swr";
import axios from "axios";


const Courses = () => {

    const fetcher = url => axios.get(url).then(res => res.data);
    const { data } = useSWR("https://escuela-de-pit-server.vercel.app/cursos" , fetcher);

    const mappedList = data && data.map(course => <Course key={course._id} data={course}/> );

    return(
        <main className="flex flex-col items-center gap-4 px-4">
            <section className="relative left-1/2 -translate-x-1/2 w-screen px-4 py-8 mx-auto bg-lightBlue1 lg:py-12">
                <h1 className="text-3xl text-text2 font-bold lg:text-4xl lg:text-center">Cursos y capacitaciones</h1>
            </section>
            <section className="my-8">
                <ul>
                    {mappedList}
                </ul>
            </section>
        </main> 
    )
} 

export default Courses;