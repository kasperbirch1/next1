import { TextField, Button } from "@material-ui/core";
import React from "react";
import styles from "../../styles/ContactForm.module.css";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const handleSubmit = (e) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_qbcql5b",
        "template_e0pvrfs",
        e.target,
        "user_ZlrTXjf68rBf9Ctl6t8XJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
      noValidate
      autoComplete="off"
    >
      <TextField
        type="text"
        name="name"
        label="Navn"
        variant="outlined"
        fullWidth
      />
      <TextField
        type="text"
        name="address"
        label="Adresse"
        variant="outlined"
        fullWidth
      />
      <TextField
        type="number"
        name="phone"
        label="Telefon nummer"
        variant="outlined"
        fullWidth
      />
      <TextField
        type="date"
        name="date"
        label="Dato"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        fullWidth
      />
      <Button fullWidth type="submit" variant="outlined">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
