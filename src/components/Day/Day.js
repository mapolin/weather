import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { kelvinToCelsius, kelvinToFahrenheit } from '../../transformers';

const useStyles = makeStyles({
  card: {
    width: 160,
  },
  icon: {
    height: 100
  },
  title: {
    textAlign: 'center'
  }
});

export default function Day({ main, weather, clounds, wind , snow, dt_txt, city }) {
  const classes = useStyles();
  const [temp, switchTemp] = useState(true);
  const [weatherData] = weather;
  const time = new Date(dt_txt);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Typography className={classes.title} variant="body2" color="textSecondary" component="p">
          {city}
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
          <Typography>
            {time.toLocaleTimeString()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => switchTemp(!temp)}>
          { temp ? `${Math.round(kelvinToCelsius(main.temp))} Celsius` : `${Math.round(kelvinToFahrenheit(main.temp))} Fahrenheit` }
        </Button>
      </CardActions>
    </Card>
  );
}