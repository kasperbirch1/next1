import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import Meta from "../layout/Meta";

const priser = () => {
  return (
    <>
      <Meta title="| Prisliste" />
      <Typography variant="h1">Prisliste</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }} align="left">
              Produkt
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Beskrivelse</TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="right">
              Pris fra.
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {priceList.map((item, index) => (
            <TableRow key={index}>
              <TableCell align="left">{item.name}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell align="right">{`${item.price} kr.`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default priser;

const priceList = [
  {
    name: "Oplåsning af dør",
    price: 595,
    description: "Oplåsning eller oplukning af dør",
  },
  {
    name: "Oplåsning af bil",
    price: 795,
    description: "Oplåsning eller oplukning af bil",
  },
  {
    name: "Omkodning",
    price: 495,
    description: "Omkodning af hovede lås",
  },
  {
    name: "Reparation",
    price: 595,
    description: "Reparation af hovede lås",
  },
  {
    name: "Extra låse",
    price: 395,
    description: "Reparation eller omkodning af extra låse",
  },
  {
    name: "Timeløn",
    price: 595,
    description: "Pr. påbegyndt time",
  },
];
