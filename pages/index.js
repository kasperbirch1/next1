import { Typography } from "@material-ui/core";
import CardList from "../components/CardList";

export default function Home() {
  return (
    <>
      <Typography variant="h1" align="center">
        Autoriserede låsesmed til privat og erhverv.
      </Typography>
      <Typography variant="h2" align="center">
        Vi kan løse alle opgaver hurtigt og professionelt.
      </Typography>
      <CardList />
    </>
  );
}
