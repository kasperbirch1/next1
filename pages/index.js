import { Typography } from "@material-ui/core";
import CardList from "../components/CardList";

export default function Home() {
  return (
    <>
      <Typography variant="h1" align="center">
        Velkommen til forsiden
      </Typography>
      <Typography variant="subtitle1" component="h2">
        Her er der noget subinfo
      </Typography>

      <CardList />
    </>
  );
}
