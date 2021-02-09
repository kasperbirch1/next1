import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import CardListStyles from "../../styles/Cardlist.module.css";
import Image from "next/image";

const CardItem = ({ title, description, image }) => {
  return (
    <Card className={CardListStyles.box}>
      <CardActionArea>
        <CardMedia
          alt={title}
          title={title}
          style={{ position: "relative", height: "200px" }}
        >
          <Image src="/keys_01.jpeg" layout="fill" objectFit="fill" />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
