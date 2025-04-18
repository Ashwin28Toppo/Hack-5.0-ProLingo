import { getCourses } from "@/db/queries";
import { List } from "./list";
import { getUserProgress } from "@/db/queries";


const CoursesPage= async()=>{
    const coursesData=await getCourses();
    const userProgressData=await getUserProgress();

    const [
        courses,
        userProgress,
    ] =await Promise.all([
        coursesData,
        userProgressData
    ])

    return(
        <div className="h-full max-w-[912px] mx-auto">
           <h1 className="text-2xl font-bold text-neutral-700">
            Language Courses
           </h1>
           <List 
           courses={courses}
           activeCourseId={userProgress?.activeCourseId}/>
        </div>
    )
}

export default CoursesPage;