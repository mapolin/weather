import React, { useState } from 'react';
import { compact } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Details from '../Details/Details';

import { kelvinToCelsius, kelvinToFahrenheit } from '../../transformers';

const useStyles = makeStyles({
  card: {
    width: 140,
  },
  icon: {
    height: 70
  },
  title: {
    textAlign: 'center'
  },
  button: {
    width: '100%'
  }
});

export default function Day({ main, weather, clounds, wind , snow, dt_txt, city }) {
  const classes = useStyles();
  const [temp, switchTemp] = useState(true);
  const [openDetails, toggleDetails] = useState(false);
  const [weatherData] = weather;
  const time = new Date(dt_txt);

  const detailsList = compact(Object.keys(main).map((item) => {
    switch (item) {
      case 'temp_min': {
        return {
          text: temp ? Math.round(kelvinToCelsius(main[item])) : Math.round(kelvinToFahrenheit(main[item])),
          label: temp ? (<>&deg;{'C min'}</>) : (<>&deg;{'F min'}</>),
        }
      }
      case 'temp_max': {
        return {
          text: temp ? Math.round(kelvinToCelsius(main[item])) : Math.round(kelvinToFahrenheit(main[item])),
          label: temp ? (<>&deg;{'C max'}</>) : (<>&deg;{'F max'}</>),
        }
      }
      case 'humidity': {
        return {
          text: main[item],
          icon: 'opacity'
        }
      }
      case 'pressure': {
        return {
          text: main[item],
          icon: 'height'
        }
      }
      default: return false;
    }
  }));

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => toggleDetails(!openDetails)}>
        <Typography className={classes.title} variant="body2" color="textSecondary" component="p">
          {time.toLocaleTimeString()}
        </Typography>
        <CardMedia
          className={classes.icon}
          image={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
          title={weatherData.description}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="h5">
            {weatherData.description}
          </Typography>
          <Collapse in={openDetails}>
            <Details details={detailsList} />
          </Collapse>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.button} size="small" color="primary" onClick={() => switchTemp(!temp)}>
          { temp ? (
            <>{Math.round(kelvinToCelsius(main.temp))}&deg;{'C'}</>
          ) : (
            <>{Math.round(kelvinToFahrenheit(main.temp))}&deg;{'F'}</>
          )}
        </Button>
      </CardActions>
    </Card>
  );
}