import React from "react";
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => (
        <div>
            <AppBar position="static">
                <ToolBar>
                    <Typography variant="display1" color="inherit" align="center">
                        Bienvenido a la nueva Pokedex hecha con React y la PokeAPI.
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )

export default Header;