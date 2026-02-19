// import { useContext, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import Enquiry_Form from '../GetInTouch/Enquiry_Form';
// import { DataCollections } from '../../Store/GlobalDataSets';


// function EnrolFormModel() {
//     let store = useContext(DataCollections)


//     return (
//         <>
//             {/* <Button variant="primary" onClick={handleShow}>
//                 Launch demo modal
//             </Button> */}

//             <Modal
//                 show={store.show}
//                 onHide={store.handleClose}
//                 centered
//                 backdropClassName="backdrop-blur-sm bg-black/30"
//                 dialogClassName="w-[90%] md:!max-w-[50%]  mx-auto"
//             >
//                 <Modal.Body className="p-0">
//                     <div className="bg-white/10 backdrop-blur-md h-[80%] rounded-2xl p-6 shadow-2xl">
//                         <Enquiry_Form enroll={true} course="" />
//                     </div>
//                 </Modal.Body>

//                 <Modal.Footer className="border-0 justify-end">
//                     <Button
//                         variant="secondary"
//                         className="!bg-white/20 !border-white/30 !text-black hover:!bg-white/30"
//                         onClick={store.handleClose}
//                     >
//                         Close
//                     </Button>
//                 </Modal.Footer>
//             </Modal>


//         </>
//     );
// }

// export default EnrolFormModel;


import { useContext } from 'react';
import Enquiry_Form from '../GetInTouch/Enquiry_Form';
import { DataCollections } from '../../Store/GlobalDataSets';

function EnrolFormModel() {
  const store = useContext(DataCollections);

  if (!store.show) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center">
      
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={store.handleClose}
      />

      {/* Modal – always fully visible */}
      <div
        className="
          relative z-10
          max-w-[90%] md:w-[50%] lg:w-[30%]
          h-fit 
          max-h-screen
          overflow-hidden
          bg-white backdrop-blur-md
          rounded-2xl
          p-6
          shadow-2xl
        "
      >
        <Enquiry_Form enroll={true} course="" />

        {/* <div className="mt-6 flex justify-end">
          <button
            onClick={store.handleClose}
            className="px-6 py-2 rounded-lg bg-black/20 text-black hover:bg-white/30"
          >
            Close
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default EnrolFormModel;
