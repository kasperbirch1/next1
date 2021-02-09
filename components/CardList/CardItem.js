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

const CardItem = ({ title, description, image }) => {
  return (
    <Card className={CardListStyles.box}>
      <CardActionArea>
        <CardMedia
          alt={title}
          title={title}
          image="/keys_01.jpeg"
          component="img"
        />
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
