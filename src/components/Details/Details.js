import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  details: {}
});

export default function Details({ details = [] }) {
  const classes = useStyles();

  return (
    <div className={classes.details}>
      <List component="div">
        {details.map((item, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              {item.icon ? (
                <Icon>{item.icon}</Icon>
              ) : (
                <Typography>{item.label}</Typography>
              )}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}