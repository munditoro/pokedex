import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/Grid';
import GridListTitle from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Pokemon from '../Pokemon';
import { kanto } from '../../constants/rawData';
import { ListSubheader } from "@material-ui/core";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        width: 500,
        height: 450
    }
});

class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            region: kanto
        }
    }
    
    render() {
        const { classes } = this.props;
        const { id, main_region, moves, names, pokemon_species, types, version_groups } = this.state.region;

        return (
            <div className={classes.root}>
                <Paper elevation={4}>
                    <GridList className={classes.gridList}>
                        <GridListTitle key="Subheader" cols={8} style={{ height: 'auto'}}>
                            <ListSubheader component="div">Región {id}</ListSubheader>
                            <ListSubheader component="div">{main_region.name}</ListSubheader>
                        </GridListTitle>
                        
                    </GridList>
                </Paper>
            </div>
        );
    }
}
    


export default withStyles(styles)(Content);