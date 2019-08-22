import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "../../../assets/css/card.css";
import { capitalizeFirstLetter } from "../../utils/formUtils";
import { BooksContext } from "../../contexts/BooksContext";
import { Link } from "react-router-dom";
/* import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography"; */

const useStyles = makeStyles({
  card: {
    maxWidth: 120,
    maxHeight: 220
  },
  media: {
    height: 150,
    maxHeight: 120
  }
});

/**
 * It's a card component which is used to display the book details
 * In general each card is represented as book.
 * @param {*} props
 */
export const MediaCard = props => {
  const classes = useStyles();
  const { book } = { ...props };
  const { title } = { ...book };
  const trimmedTitle = title && title.substring(0, 24) + "...";
  const url = "/book-details/" + book.title;
  const {
    values: { setSelectedBook }
  } = useContext(BooksContext);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={book.imagesUrl1}
          title={title}
        />
        <CardContent>
          <div
            style={{
              fontSize: "0.9rem",
              width: 100,
              textAlign: "left",
              marginLeft: "-10px"
            }}
          >
            <Link
              style={{
                fontSize: "0.9rem",
                color: "blue"
              }}
              to={url}
              onClick={() => setSelectedBook(book)}
            >
              {capitalizeFirstLetter(trimmedTitle.trim())}
            </Link>
            <br />{" "}
            <p>
              <strong>₹ {book.rentPerDay}</strong>
            </p>
          </div>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            To Carl and his young charge.
          </Typography> */}
        </CardContent>
        <CardActions />
      </CardActionArea>
    </Card>
  );
};

export default MediaCard;
