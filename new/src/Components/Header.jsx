import React, { useState } from 'react'
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DrawerComponent from './DrawerComponent';
const PAGES = ["Home", "Products", "Services", "About us", "Contact us"];

const Header = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);
    return (
        <React.Fragment>
            <AppBar sx={{ background: "#063970" }}>
                <Toolbar>
                    <ShoppingCartCheckoutIcon />
                    {
                        isMatch ? (
                            <>
                                <Typography sx={{ fontSize: "1.5rem", paddingLeft: "10%" }}>
                                    Shopee
                                </Typography>
                                <DrawerComponent />
                            </>
                        ) : (
                            <><Tabs textColor='inherit' value={value} onChange={(e, value) => setValue(value)} indicatorColor='primary'>
                                {
                                    PAGES.map((page, index) => (
                                        <Tab key={index} label={page} />
                                    ))
                                }

                            </Tabs>

                                <Button sx={{ marginLeft: "auto" }} variant='contained'>
                                    Login{" "}</Button>

                                <Button sx={{ marginLeft: "10px" }} variant='contained'>
                                    SignUp{" "}</Button>
                            </>
                        )

                    }


                </Toolbar>

            </AppBar>
        </React.Fragment>
    )
}

export default Header;