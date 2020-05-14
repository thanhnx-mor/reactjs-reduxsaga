import React, {Component} from 'react';
import Styles from "./styles";
import { withStyles } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import { Fab, Icon } from "@material-ui/core";
class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props
    return (
      <Card key={task.id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">
                {task.title}
              </Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
        </CardContent>
        <CardContent>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab color="primary" aria-label="Edit" className={classes.fab} size="small">
            <Icon fontSize="small">
              edit_icon
            </Icon>
          </Fab>
          <Fab color="secondary" aria-label="Delete" className={classes.fab} size="small">
            <Icon fontSize="small">
              delete_icon
            </Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(Styles)(TaskItem);