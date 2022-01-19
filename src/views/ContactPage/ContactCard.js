import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import profile from "assets/img/contactPic.jpg";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={profile}
        alt="gorans picture"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Kontaktkort
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>Email: gjproduktion@telia.com</p>
          <p>Telefon: 070-6481031</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
