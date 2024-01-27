import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '../assets/menuIcon.png'
import Btn from "../commen/component/Button/Btn.jsx";
import {Routes, Route, Navigate, Link} from 'react-router-dom'
import routes from "../commen/navigation/routes.jsx";
import './App.css'
import AddStudent from "../pages/AddStudent/AddStudent.jsx";
import ToolTip from "../commen/component/ToolTip/ToolTip.jsx";
import DeleteIcon from "@mui/icons-material/Delete.js";
import Tooltip from "@mui/material/Tooltip";
import {tooltipClasses} from "@mui/material";
import LoginMenu from "../component/LoginMenu/LoginMenu.jsx";
import SignUpMenu from "../component/SignUpMenu/SignUpMenu.jsx";
import LoginButton from "../component/LoginMenu/LoginButton.jsx";

const drawerWidth = 240;


const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    backgroundColor:'#F5F5F5',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function App() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const getRoutes = (rout) =>
rout.map((val, index) =>
    <Route key={val.key} path={val.path} element={val.component}/>
)

    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }}/>
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#f5f5f9',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',
        },
    }));

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                     <img src={MenuIcon}/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Mini variant drawer
                    </Typography>
                        <LoginButton/>
                        <SignUpMenu/>
                        <Btn name={"Home"}/>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>

                {
                   routes.map((val, index) => (
                       <Link key={val.key} to={val.path} style={{textDecoration:'none'}}>
                           <ListItem disablePadding sx={{ display: 'block'}}>
                               <ListItemButton
                                   sx={{
                                       minHeight: 48,
                                       justifyContent: open ? 'initial' : 'center',
                                       px: 2.5,
                                   }}
                               >
                                   <ListItemIcon
                                       sx={{
                                           minWidth: 0,
                                           mr: open ? 3 : 'auto',
                                           justifyContent: 'center',
                                           margin:'20px'
                                       }}
                                   >
                                       <HtmlTooltip
                                           title={
                                               <React.Fragment>
                                                   <Typography sx={{backgroundColor:'#F5F5F5', color:'#333333'}}>{val.name}</Typography>
                                               </React.Fragment>
                                           }
                                       >
                                           {val.icon}
                                       </HtmlTooltip>
                                   </ListItemIcon>
                                   <ListItemText primary={val.name} sx={{ opacity: open ? 1 : 0,}} />
                               </ListItemButton>
                           </ListItem>
                       </Link>
                   ))
                }

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1,zIndex:'-1', position:'absolute', paddingLeft:'65px', top:'-14px' }}>
                <DrawerHeader />
                <Box>
                    <Routes>
                        {getRoutes(routes)}
                        <Route path={'*'} element={<Navigate to={'/addStudent'}/>}/>
                        {/*<Route path={'/login'} element={<LoginMenu/>}/>*/}
                    </Routes>
                </Box>

            </Box>
        </Box>
    );
}