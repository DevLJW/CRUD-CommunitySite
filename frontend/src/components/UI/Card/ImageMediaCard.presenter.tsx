import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IImageMediaCard } from "./ImageMediaCard.interfaces";
import SliderImage from "../../CommonComponents/Slick/SliderImage/SliderImage";
export default function ImageMediaCard(props: IImageMediaCard) {
  return (
    <Card
      sx={{
        maxWidth: 343,
        maxHeight: "500px",
        marginBottom: "20px",
        boxShadow: "10px 10px 10px gray",
        borderRadius: "20px",
      }}
    >
      <div style={{ width: "100%", height: "50%" }}>
        <SliderImage src="https://images.unsplash.com/photo-1709593491550-1f92cda74017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTgxMTA5Mw&ixlib=rb-4.0.3&q=80&w=1080"></SliderImage>
      </div>
      <CardContent sx={{ minHeight: "200px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {props?.el?.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            width: "100%",
            height: "140px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {props?.el?.content}
        </Typography>
      </CardContent>
      <CardActions
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <Button size="small">보러가기</Button>
      </CardActions>
    </Card>
  );
}
