import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const PokemonCard = ({ name, image, experience }) => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia component="img" height="200" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          My total experience - <b>{experience}</b>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
