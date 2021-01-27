import { useRouter } from "next/router";
import { useState } from "react";
import Meta from "../../layout/Meta";
import { TextField, Button } from "@material-ui/core";

const index = () => {
  const router = useRouter();
  const [state, setState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`bestil-laasesmed/${state}`);
  };

  return (
    <>
      <Meta title="| Bestil Låsesmed" />
      <h1>Bestil en låsesmed</h1>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: ".5rem" }}>
        <TextField
          id="by"
          label="Hvilken by er du i ?"
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
        <Button type="submit" variant="outlined" color="primary">
          Bestil Låsesmed
        </Button>
      </form>
    </>
  );
};

export default index;
