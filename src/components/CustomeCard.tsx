import { Grid, Card, Typography, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CustomeCard(props: CardType) {
  const navigate = useNavigate();
  // console.log("props", props.post);

  return (
    <Grid item lg={6} md={6} xs={12}>
      <Card
        sx={{ minWidth: 275, padding: 4, borderRadius: 5, height: "13rem" }}
      >
        <Typography variant="h6" fontWeight={600}>
          {props.post.title}
        </Typography>
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
            component={"div"}
          >
            <Typography>by @ {props.post.author}</Typography>
            <Typography>{props.post.created_at}</Typography>
            <Typography sx={{ display: "inline", color: "#0A6EBD" }}>
              TAGS - {props.post._tags.join(", ")}
            </Typography>
          </Typography>
        </CardContent>

        <Button
          variant="outlined"
          sx={{ mr: 3 }}
          onClick={() => navigate("/details", { state: props.post })}
        >
          SHOW ROW DATA
        </Button>

        <a href={props.post.url} target="_blank">
          {/* target="_blank" open a new tab */}
          <Button variant="contained">READ MORE</Button>
        </a>
      </Card>
    </Grid>
  );
}

export default CustomeCard;
