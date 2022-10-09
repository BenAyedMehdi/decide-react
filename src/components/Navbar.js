// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Hire us', 'Join us'];

// function DrawerAppBar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <AppBar  component="nav">

//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>

//           <Typography
//             variant="h5"
//             component="div"
//             sx={{ display: { xs: 'none', sm: 'block' } }}
//           >
//             FOOSHEEKA
//           </Typography>
//           <Box sx={{ flexGrow: 1 }} />
//           <nav id="nav">
// 								<ul>
// 									<li class="current"><a href="index.html">Welcome</a></li>
// 									<li>
// 										<a href="#">Dropdown</a>
// 										<ul>
// 											<li><a href="#">Lorem ipsum dolor</a></li>
// 											<li><a href="#">Magna phasellus</a></li>
// 											<li>
// 												<a href="#">Phasellus consequat</a>
// 												<ul>
// 													<li><a href="#">Lorem ipsum dolor</a></li>
// 													<li><a href="#">Phasellus consequat</a></li>
// 													<li><a href="#">Magna phasellus</a></li>
// 													<li><a href="#">Etiam dolore nisl</a></li>
// 												</ul>
// 											</li>
// 											<li><a href="#">Veroeros feugiat</a></li>
// 										</ul>
// 									</li>
// 									<li><a href="left-sidebar.html">Left Sidebar</a></li>
// 									<li><a href="right-sidebar.html">Right Sidebar</a></li>
// 									<li><a href="no-sidebar.html">No Sidebar</a></li>
// 								</ul>
// 							</nav>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Button variant='outlined' key={item} sx={{ color: '#fff' }}>
//                 {item}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 1 }} />
//         </Toolbar>
//       </AppBar>
//       <Box component="nav">
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
//       </Box>
//     </Box>
//   );
// }

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default DrawerAppBar;
