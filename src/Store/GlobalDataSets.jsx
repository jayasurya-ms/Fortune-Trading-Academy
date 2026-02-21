import { createContext, useState } from "react";

export const DataCollections = createContext()

let GlobalDataSets = (props) => {

    let [currentPage, setCurrentPage] = useState('')

    const [show, setShow] = useState(false);

    const handleClose = () => { 
        setShow(false)
        console.log(show);
    }
    
    const handleShow = () => {
        setShow(true);
        console.log(show);
    }

    let [enquiryData, setEnquiryData] = useState({
        name: '',
        email: '',
        phone_number: '',
        note: ''
    })

    // Added the submission handler logic
    const handleSubmission = () => {
        console.log("Form Data Submitted Successfully:", enquiryData);
        
        // Example: Clear the form after submission
        setEnquiryData({
            name: '',
            email: '',
            phone_number: '',
            note: ''
        });
        
        // Close the modal if it's an enrollment form
        if (show) handleClose();
        
        alert("Thank you! Your enquiry has been submitted.");
    }

    let enquiryFields = [
        { name: 'name', type: 'text', placeholder: 'Enter Your Name', label: 'Full Name' },
        { name: 'email', type: 'text', placeholder: 'example@email.com', label: 'Email Address' },
        { name: 'phone_number', type: 'text', placeholder: 'Enter Your Number', label: 'Phone No.' }, // Changed type to text for better validation control
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
        handleShow,
        handleSubmission // Added this to the provider object
    }

    return (
        <DataCollections.Provider value={DataObjects}>
            {props.children}
        </DataCollections.Provider>
    )
}

export default GlobalDataSets