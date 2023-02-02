// event.preventDefault();
//     const formData = new FormData();
//     formData.append("firstname", event.firstname);
//     formData.append("email", event.email);
//     formData.append("password", event.password);
//     formData.append("lastname", event.lastname);
//     formData.append("phone", event.phone);
//     formData.append("gender", event.gender);
//     formData.append("DOB", event.DOB);
//     //   const data = new FormData(event.currentTarget);
//     //   console.log({
//     //     email: data.get("email"),
//     //     password: data.get("password"),
//     //     firstname: data.get("firstname"),
//     //     lastname: data.get("lastname"),
//     //     gender: data.get("gender"),
//     //     contact: data.get("phone"),
//     //     dob: data.get("DOB"),
//     //   });
//     console.log(formData);



// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// // import FormControlLabel from "@mui/material/FormControlLabel";
// // import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import axios from "axios";
// import { Checkbox, FormControlLabel, MenuItem } from "@mui/material";
// import GoogleButton from "react-google-button";
// import { useState } from "react";

// const theme = createTheme();
// const Signup = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [gender1, setGender1] = useState("");
//   const [dob, setdob] = useState("");

//   const gender = [
//     {
//       value: "male",
//       label: "Male",
//     },
//     {
//       value: "female",
//       label: "Female",
//     },
//     {
//       value: "other",
//       label: "Other",
//     },
//   ];

//   var data = new FormData();
//   data.append("firstname", firstName);
//   data.append("lastname", lastName);
//   data.append("email", email);
//   data.append("password", password);
//   data.append("gender", gender1);
//   data.append("DOB", dob);
//   data.append("phone", phone);
//   console.log(data);
//   const handleSubmit = async (event) => {
//     axios({
//       method: "post",
//       url: "https://db06-103-246-224-134.in.ngrok.io/account/signup/",
//       data: data,
//       headers: { "Content-Type": "multipart/form-data" },
//     })
//       .then(function (response) {
//         //handle success
//         console.log(response);
//       })
//       .catch(function (response) {
//         //handle error
//         console.log(response);
//       });
//   };
//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box
//             component="form"
//             noValidate
//             onSubmit={handleSubmit}
//             sx={{ mt: 3 }}
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstname"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastname"
//                   autoComplete="family-name"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-phone"
//                   name="phone"
//                   required
//                   fullWidth
//                   id="phone"
//                   label="Contact Number"
//                   autoFocus
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                 />
//               </Grid>

//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   id="outlined-select-currency"
//                   select
//                   label="Gender"
//                   defaultValue="male"
//                   name="gender"
//                   value={gender1}
//                   onChange={(e) => setGender1(e.target.value)}
//                 >
//                   {gender.map((option) => (
//                     <MenuItem key={option.value} value={option.value}>
//                       {option.label}
//                     </MenuItem>
//                   ))}
//                 </TextField>
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="DOB"
//                   inputformat="YYYY-MM-DD"
//                   label="DOB(YYYY-MM-DD)"
//                   name="dob"
//                   autoComplete="dob"
//                   value={dob}
//                   onChange={(e) => setdob(e.target.value)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={
//                     <Checkbox value="allowExtraEmails" color="primary" />
//                   }
//                   label="Remember Me"
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>

//             <Grid container>
//               <Grid item style={{ margin: "auto" }}>
//                 <Link href="#" variant="body1">
//                   <GoogleButton
//                     onClick={() => {
//                       console.log("Google clicked");
//                     }}
//                   />
//                 </Link>
//               </Grid>
//             </Grid>
//             <Grid container justifyContent="flex-center">
//               <Grid item style={{ margin: "auto" }}>
//                 <Link href="#" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         {/* <Copyright sx={{ mt: 5 }} /> */}
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default Signup;
