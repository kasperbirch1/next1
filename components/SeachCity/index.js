import { useRouter } from "next/router";
import { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const SeachCity = () => {
  const router = useRouter();
  const [state, setState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`bestil-laasesmed/${state}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: ".5rem" }}>
      <TextField
        id="by"
        label="Hvilken by er du i ?"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <Button type="submit" variant="outlined" color="primary">
        Find Låsesmed
      </Button>
    </form>
  );
};

export default SeachCity;
