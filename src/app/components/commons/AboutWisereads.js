import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import supportImage from "../../../assets/images/support.png";
import "../../../assets/css/aboutwisereads.css";

/**
 * Common component for both login and registration screens left side bar
 * Describes briefly about the wise reads and support details for book rentals
 */
export const AboutWiseReads = () => {
  const useStyles = makeStyles({
    card: {
      maxWidth: 345
    },
    media: {
      height: 35
    }
  });
  const classes = useStyles();
  return (
    <div>
      <p className="About-WiseReads">About WiseReads</p>
      <div className="content-box">
        <p className="content">
          Wisereads is proud to introduce one of the most awaited and affordable
          book rental platform for individuals, kids, students, and corporates
          across the country. Wisereads Book Rental Library provides hassle-free
          availability of books at a very affordable price.
        </p>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <div>
                  <h5 style={{ float: "left" }}>Support</h5>
                  <img
                    style={{
                      float: "left",
                      marginLeft: "60px",
                      height: "50px"
                    }}
                    src={supportImage}
                    alt="support"
                  />
                </div>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <br />
                Call: +914029801891 <br />
                Email: wisereads1@gmail.com
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default AboutWiseReads;
