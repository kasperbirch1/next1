import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import Image from "next/image";

const CardItem = ({ title, description, image }) => {
  return (
    <Card>
      <CardActionArea>
        <Image
          src={image}
          alt={title}
          layout="responsive"
          width={200}
          height={100}
          objectFit="cover"
          objectPosition="50% 85%"
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
