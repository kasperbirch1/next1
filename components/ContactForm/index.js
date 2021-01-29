import { TextField } from "@material-ui/core";
import React from "react";
import styles from "../../styles/ContactForm.module.css";

const ContactForm = () => {
  return (
    <form className={`wrapper ${styles.form}`} noValidate autoComplete="off">
      <TextField
        type="text"
        id="name"
        label="Navn"
        variant="outlined"
        fullWidth
      />
      <TextField
        type="text"
        id="address"
        label="Adresse"
        variant="outlined"
        fullWidth
      />
      <TextField
        type="number"
        id="phone"
        label="Telefon nummer"
        variant="outlined"
        fullWidth
      />
      <TextField
        type="date"
        id="date"
        label="Dato"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        fullWidth
      />
    </form>
  );
};

export default ContactForm;
