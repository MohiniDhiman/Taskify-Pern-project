import React from 'react'

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Footer

// import React, { useState } from "react";

// const Header = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   function validate() {
//     let newerror = {};

//     if (!formData.name.trim()) {
//       newerror.name = " name is required";
//     }
//     if (!formData.email.includes("@")) {
//       newerror.email = "email is required";
//     }
//     if (!formData.password) {
//       newerror.password = " password is required";
//     }
//     if (formData.password !== formData.confirmPassword) {
//       newerror.confirmPassword = "password doesn't matched";
//     }
//     return newerror;
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationError = validate();
//     if (Object.keys(validationError).length > 0) {
//       setError(validationError);
//     } else {
//       alert("form is sucessfully submited ");
//       console.log("formdata", formData);
//       setFormData({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       });
//     }
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <p style={{ color: "red" }}>{error.name}</p>
//         <input
//           type="email"
//           placeholder="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <p style={{ color: "red" }}>{error.email}</p>
//         <input
//           type="password"
//           placeholder="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         <p style={{ color: "red" }}>{error.password}</p>
//         <input
//           type="password"
//           placeholder="confirmPassword"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//         />
//         <p style={{ color: "red" }}>{error.confirmPassword}</p>
//         <button type="submit">submit</button>
//       </form>
//     </>
//   );
// };

// export default Header;
