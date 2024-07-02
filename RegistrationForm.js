import React, { useState } from "react";
import {
  Container, TextField, Button, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel,
  Radio, Checkbox, FormGroup, MenuItem, Select, InputLabel, TextareaAutosize, Box,
} from "@mui/material";

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    hobbies: [],
    profilePicture: null,
    country: "",
    bio: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleHobbiesChange = (e) => {
    const { value, checked } = e.target;
    setFormValues((prevValues) => {
      const newHobbies = checked
        ? [...prevValues.hobbies, value]
        : prevValues.hobbies.filter((hobby) => hobby !== value);
      return { ...prevValues, hobbies: newHobbies };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <Container maxWidth="md"    sx={{ mt: 8, mb: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Registration Form
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 5, mb: 3 }}
      >
        <TextField
          label="Full Name"
          name="fullname"
          value={formValues.fullname}
          onChange={handleChange}
          required
        />
        <TextField
          label="Username"
          name="username"
          value={formValues.username}
          onChange={handleChange}
          required
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          required
        />
        <TextField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formValues.confirmPassword}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email Address"
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Phone Number"
          type="tel"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
          required
        />
        <TextField
          label="Date of Birth"
          type="date"
          name="dob"
          value={formValues.dob}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
        />
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            row
            name="gender"
            value={formValues.gender}
            onChange={handleChange}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Hobbies</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  name="hobbies"
                  value="reading"
                  checked={formValues.hobbies.includes("reading")}
                  onChange={handleHobbiesChange}
                />
              }
              label="Reading"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="hobbies"
                  value="traveling"
                  checked={formValues.hobbies.includes("traveling")}
                  onChange={handleHobbiesChange}
                />
              }
              label="Traveling"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="hobbies"
                  value="cooking"
                  checked={formValues.hobbies.includes("cooking")}
                  onChange={handleHobbiesChange}
                />
              }
              label="Cooking"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="hobbies"
                  value="other"
                  checked={formValues.hobbies.includes("other")}
                  onChange={handleHobbiesChange}
                />
              }
              label="Other"
            />
          </FormGroup>
        </FormControl>
        <TextField
          type="file"
          name="profilePicture"
          onChange={(e) =>
            setFormValues({ ...formValues, profilePicture: e.target.files[0] })
          }
          required
        />
        <FormControl fullWidth required>
          <InputLabel id="country-label">Country</InputLabel>
          <Select
            labelId="country-label"
            name="country"
            value={formValues.country}
            onChange={handleChange}
            label="Country"
          >
            <MenuItem value="">
              <em>Select Country</em>
            </MenuItem>
            <MenuItem value="Japan">United States</MenuItem>
            <MenuItem value="canada">Canada</MenuItem>
            <MenuItem value="Usa">United Kingdom</MenuItem>
            <MenuItem value="India">Australia</MenuItem>
          </Select>
        </FormControl>
        <TextareaAutosize
          minRows={4}
          placeholder="Bio"
          name="bio"
          value={formValues.bio}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            borderColor: "#ccc",
          }}
          required
        />
        <FormControlLabel
          control={
            <Checkbox
              name="terms"
              checked={formValues.terms}
              onChange={handleChange}
              required
            />
          }
          label="I agree to the Terms and Conditions"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#f14040',
            '&:hover': {
              backgroundColor: '#5a5ae2',
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default RegistrationForm;
