import { createContext, useState } from "react";

export const DataCollections = createContext()

let GlobalDataSets = (props) => {

    let [currentPage, setCurrentPage] = useState('')

    const [show, setShow] = useState(false);

    const handleClose = () =>
        { setShow(false)
            console.log(show);
            
        }
    const handleShow = () => 
    {
        setShow(true);
        console.log(show);
        
    }
    let [enquiryData, setEnquiryData] = useState({
        name: '',
        email: '',
        phone_number: '',
        note: ''
    })

    let enquiryFields = [
        { name: 'name', type: 'text', placeholder: 'Enter Your Name', label: 'Full Name' },
        { name: 'email', type: 'text', placeholder: 'example@email.com', label: 'Email Address' },
        { name: 'phone_number', type: 'number', placeholder: 'Enter Your Number', label: 'Phone No.' },
        { name: 'note', type: 'textarea', placeholder: 'any questions you have', label: 'Add Note' },
    ]

    const DataObjects = {
        currentPage,
        setCurrentPage,
        enquiryData,
        setEnquiryData,
        enquiryFields,
        show,
        setShow,
        handleClose,
        handleShow
    }

    return (

        <DataCollections.Provider value={DataObjects}>
            {props.children}
        </DataCollections.Provider>

    )
}

export default GlobalDataSets