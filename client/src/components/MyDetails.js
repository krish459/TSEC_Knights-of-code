import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { Checkbox, FormControlLabel, MenuItem } from "@mui/material";

const theme = createTheme();
const MyDetails = () => {
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      data.append("email", localStorage.getItem("email"));
      console.log({
        food: data.get("food"),
        smoke: data.get("smoker"),
        drink: data.get("drinker"),
        pet: data.get("pet"),
        cook: data.get("cook"),
        work: data.get("job"),
        gender: data.get("gender"),
        email: data.get("email"),
        city: data.get("city"),
      });

      const response = await axios.post(
        "https://flatmate.pythonanywhere.com/roomie/wia/",
        data
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const gender = [
    {
      value: 1,
      label: "Male",
    },
    {
      value: 2,
      label: "Female",
    },
    {
      value: 3,
      label: "Other",
    },
    {
      value: 4,
      label: "Any",
    },
  ];
  const Food = [
    {
      value: 1,
      label: "Veg",
    },
    {
      value: 2,
      label: "Non Veg",
    },
    {
      value: 3,
      label: "Jain",
    },
    {
      value: 4,
      label: "Any",
    },
  ];
  const Drinker = [
    {
      value: 1,
      label: "Yes",
    },
    {
      value: 2,
      label: "No",
    },
  ];
  const Work = [
    {
      value: 1,
      label: "None",
    },
    {
      value: 2,
      label: "Part Time",
    },
    {
      value: 3,
      label: "Full Time",
    },
  ];
  const City = [
    {
      value: "Mumbai",
      label: "Mumbai",
    },
    {
      value: "Pune",
      label: "Pune",
    },
    {
      value: "Nashik",
      label: "Nashik",
    },
    {
      value: "Surat",
      label: "Surat",
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <FingerprintIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            About me
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Food"
                  defaultValue="veg"
                  name="food"
                  style={{ width: "12rem" }}
                >
                  {Food.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Gender"
                  defaultValue="Male"
                  name="gender"
                  style={{ width: "12rem" }}
                >
                  {gender.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Do you Drink?"
                  defaultValue="No"
                  name="drinker"
                  style={{ width: "12rem" }}
                >
                  {Drinker.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Do you Smoke?"
                  defaultValue="No"
                  name="smoker"
                  style={{ width: "12rem" }}
                >
                  {Drinker.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Do you have pets?"
                  defaultValue="No"
                  name="pet"
                  style={{ width: "12rem" }}
                >
                  {Drinker.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Do you know to cook?"
                  defaultValue="No"
                  name="cook"
                  style={{ width: "12rem" }}
                >
                  {Drinker.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Do you work?"
                  defaultValue="No"
                  name="job"
                  style={{ width: "12rem" }}
                >
                  {Work.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="City"
                  defaultValue="Mumbai"
                  name="city"
                  style={{ width: "12rem" }}
                >
                  {City.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I accept terms and conditions."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
};

export default MyDetails;
