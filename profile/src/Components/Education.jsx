import React from 'react'

const educations = [
    {
        university : "Dr Babasaheb Ambedkar Technological University, Lonere",
        college : "MIT College Of Engineering, Aurangabad",
        graduation : "Bachelor's Of Technology",
        stream : "Electrical Engineer",
        mark : "8.24 CGPA",
        years : "2020 - 2023",
    },
    {
        university : "Government Polytechnic, Maharashtra",
        college : "Government Polytechnic College, Aurangabad",
        graduation : "Diploma in Engineering",
        stream : "Electrical Engineer",
        mark : "80.67 percentage",
        years : "2017 - 2020",
    },
    {
        university : "Maharashtra State Board, Maharashtra",
        college : "Sant Meera School, Aurangabad",
        graduation : "SSC Board",
        stream : "Semi-English",
        mark : "85.20 %",
        years : "2016 - 2017",
    }
]

export const Education = () => {
  return (
    <div className='py-10'>
        <div >
            <p className='text-5xl text-indigo-400 font-mono font-bold border-b-2 w-fit border-indigo-500'>Educations & Qualifications</p>
            <div className='w-fit mx-auto mt-10 flex flex-col'>
                {/* Qualifications */}
                {
                    educations.map((educ)=>(
                        <div key={educ.index} className='flex w-full gap-x-20 border-y py-2'>
                            <div className='text-blue-700 font-semibold text-xl border-b-2 border-blue-700 h-fit'>
                                {educ.years}
                            </div>
                            <div className='text-gray-300 h-fit font-medium text-[16px]'>
                                <p>- {educ.university}</p>
                                <p>- {educ.college}</p>
                                <p>- {educ.graduation}</p>
                                <p>- {educ.stream}</p>
                                <p>- {educ.mark}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='mt-5 '>
                <p className='text-2xl text-indigo-400 border-b border-indigo-400 w-fit'>
                    Extracurricular Activities
                </p>
                <div className='text-gray-300 h-fit font-medium text-[16px]'>
                    <ul className='list-disc ml-20 mt-4'>
                        <li>Volunter - TechElektra</li>
                        <li>Participated in Inter College Cricket Competition</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
