import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';
import { connect } from 'react-redux'

import Day from '../../components/Day/Day';
import { getForecast } from '../../actions';

import './Dashboard.css';

class Dashboard extends React.Component {
  componentDidMount () {
    this.props.dispatch(getForecast());
  }

  render () {
    const { forecast, classes } = this.props;

    return (
      <div className="App">
        <Grid container justify="center" className={classes.root} spacing={2}>
          {forecast.list && forecast.list.map(([index, data]) => (
            <Grid key={index} item className={classes.paper} xs={12}>
              <Typography gutterBottom variant="h5" component="h4">
                {_.capitalize(index)}
              </Typography>
              <Grid container spacing={2}>
                {data.map((elem) => (
                  <Grid key={elem.dt} item>
                    <Day {...elem} city={forecast.city.name} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}


const mapStateToProps = (state) => state;
const mapDispatchToProps = () => {}
export default connect(mapStateToProps)(withStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1024,
    margin: '0 auto'
  },
  paper: {
    width: 140,
    padding: theme.spacing(2),
  },
}))(Dashboard));
