// import React, { useState } from "react";
// import { Modal } from "@mui/material";

// const Modals = ({ showModal, setShowModal }) => {

//   return (
//     <Modal
//       open={showModal}
//       onclose={() => setShowModal(false)}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//       name={name}
//       setName={setName}
//     >
//       <div className="modal-container">
//         <div className="modal-content">
//           <h3 style={{ textAlign: "center" }}> May I know your Name ?</h3>
//           <small style={{ textAlign: "center" }}>
//             Start typing, We've got surprise for you.
//           </small>

//           <form
//             className="form-container"
//             action=""
//             onSubmit={(e) => handleSubmit(e)}
//           >
//             <label htmlFor="name" className="label">
//               Enter Your Name
//             </label>{" "}
//             <br />
//             <input
//               type="text"
//               name="name"
//               onChange={(e) => {
//                 setName(e.target.value);
//                 setShowError(false);
//               }}
//               id="name"
//               className="input-box"
//               placeholder="Enter your name..."
//             />
//             {showError && (
//               <>
//                 <small className="err">Please enter your name</small> <br />
//               </>
//             )}
//             <button className="btn" type="submit">
//               Join Chat
//             </button>
//           </form>
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export default Modals;
