import React, { useContext } from 'react'
import { DataCollections } from '../../Store/GlobalDataSets'

const Enquiry_Form = ({ enroll, formHeading, headingColor, from, to }) => {

    let store = useContext(DataCollections)
    let handleChange = (e) => {
        const { name, value } = e.target;
        store.setEnquiryData(prev => ({
            ...prev,
            [name]: value
        }))
    }


    return (
        <div className={` bg-purple-600 h-auto shadow rounded-xl  border border-slate-500/30 flex flex-col gap-2 justify-center py-5 px-4 lg:px-10 w-full ${enroll || store.currentPage == 'MainPage' ? ' bg-white/10 backdrop-blur-md' : ' md:w-[80%] bg-white'} rounded-xl`} >
            <div className='w-full h-auto'>
                <h2 className={`${enroll ? 'text-2xl' : 'text-2xl lg:text-3xl'} Alatsi text-center text-[#2076AF]`} style={{ color: headingColor }}>{formHeading ? formHeading : 'Get In Touch'}</h2>
            </div>
            <div className={`w-full h-auto flex flex-col ${enroll ? 'gap-2' : 'gap-5'} `}>
                {store.enquiryFields.map((fields, index) => (
                    <div key={index}>
                        {fields.type == 'textarea' ?
                            <div>
                                <label htmlFor={fields.name} className={`Chivo ${enroll ? 'text-[.9rem]' : 'text-[1rem] font-medium'}  `}>{fields.label}</label><br />
                                <textarea rows={enroll ? 2 : 4} name={fields.name} id={fields.name} onChange={handleChange} value={store?.enquiryData[fields?.name]} placeholder={fields.placeholder || "hello "}
                                    className={`resize-none w-full Chivo text-lg rounded-xl outline-none  border-2 border-slate-400/30 py-2 px-3 ${enroll ? 'placeholder:text-[.9rem]' : '' } placeholder:font-light placeholder:text-lg placeholder:text-slate-400/70 shadow-2xs`}> </textarea>
                            </div>
                            : fields.type == 'course' && enroll == true ?
                                <div>
                                    <label htmlFor={fields.name} className={`Chivo ${enroll ? 'text-[.9rem]' : 'text-[1rem] font-medium'}  `}>{fields.label}</label><br />
                                    <select name={fields.name} id={fields.name} value={store?.enquiryData[fields?.name]} placeholder={fields.placeholder || "hello "}
                                        className={`resize-none w-full Chivo text-lg rounded-xl outline-none  border-2 border-slate-400/30 py-2 px-3  ${enroll ? 'py-1.5 px-3 text-base placeholder:text-[.9rem]' : 'py-2 px-3 text-lg placeholder:text-lg'} placeholder:text-slate-400/70 shadow-2xs`}>
                                        {store.course.map((value, index) => (
                                            <option key={index} value={value.value} onChange={handleChange} >{value.label}</option>
                                        ))

                                        }
                                    </select>
                                </div>
                                : <div>
                                    <label htmlFor={fields.name} className={`Chivo ${enroll ? 'text-[.9rem]' : 'text-[1rem] font-medium'}  `}>{fields.label}</label><br />
                                    <input type={fields.type} name={fields.name} id={fields.name} onChange={handleChange} value={store?.enquiryData[fields?.name]} placeholder={fields.placeholder}
                                        className={`Chivo text-lg rounded-xl outline-none border-2 border-slate-400/30  w-full shadow-2xs placeholder:text-slate-400/70 ${enroll ? 'py-1.5 px-3 text-base placeholder:text-[.9rem]' : 'py-2 px-3 text-lg placeholder:text-lg'} `} />
                                </div>
                        }
                    </div>
                ))
                }
            </div>
            <div className=' w-full h-auto flex flex-col gap-4 justify-center items-center '>
                <button onClick={() => store.handleSubmission()}
                    className={`Roboto cursor-pointer w-fit ${enroll ? 'py-1 px-12 text-[1.25rem] font-normal ' : 'py-3 px-16 text-xl font-bold'}   text-white bg-linear-to-br from-[#0F2C3F] to-[#215E86] rounded-full`} style={{ background: `linear-gradient(to right, ${from}, ${to})` }}>Submit</button>
                {enroll ? <button onClick={store.handleClose} className="px-3 py-1 rounded-lg bg-black/20 text-black hover:text-white hover:bg-black/30" >
                    Close
                </button> : ''}
            </div>
        </div>
    )
}

export default Enquiry_Form