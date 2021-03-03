import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const CardItem = ({ title, description, image }) => {
  return (
    <Card >
      <CardActionArea>
        <CardMedia
          alt={title}
          title={title}
          image={image}
          component="img"
          style={{
            maxHeight: "175px",
            objectFit: "cover",
            objectPosition: "50% 85%",
          }}
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
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default CardItem;
