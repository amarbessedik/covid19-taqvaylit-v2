import React from "react";
import styles from "./InfoBox.module.css";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@material-ui/core";

function InfoBox({
  active,
  isblue,
  isred,
  isgreen,
  title,
  cases,
  total,
  ...props
}) {
  return (
    <Card
      isred={isred}
      isgreen={isgreen}
      onClick={props.onClick}
      className={styles.infoBox} 
                   
      // className={` ${styles.infoBox} 
      //              ${
      //                active &&
      //                ((isBlue && styles.border__blue) ||
      //                  (isGreen && styles.border__green) ||
      //                  (isRed && styles.border__red))
      //              }`}
    >
      <CardActionArea>
        <CardContent className={styles.infoBox__content}>
          {/* Title */}
          <Typography className={styles.infoBox__title} color="textSecondary">
            {title}
          </Typography>
          {/* Number cases numeral(country.cases).format(0.0)*/} 
          <h2
            className={`${
              (isblue && styles.blue) ||
              (isgreen && styles.green) || 
              (isred && styles.red)
            }`}
          >
            {cases}
          </h2>
          {/* Total of cases */}
          <Typography className={styles.infoBox__total} color="textSecondary">
            {total} Akit
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default InfoBox;
