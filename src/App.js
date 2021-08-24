import { Grid,Card, Typography, Button, Avatar, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from "./appStyles";
import Image from "./pngaaa.com-2073964.png";
import profilePic from "./pngegg.png";
import { useState } from 'react';
import plants from "./plants-png-44903.png";

function App() {
  const [isactive,setactive] = useState("");
  const classes = useStyles();

  const concept = () => {
    setactive("concept");
  }

  const popular = () => {
    setactive("popular");
  }

  return (

    <div className={classes.App}>
       <Grid container spacing={2} justifyContent="space-between" alignItems="center">
         <Grid item xs={3}>
           <MenuIcon />
         </Grid>
         <Grid item xs={3} lg={6} className={classes.icons}>
           <ShoppingCartIcon />
           <SearchIcon />
         </Grid>
       </Grid>
       
       <Card className={classes.Card}>
         <Grid container spacing={2 } direction="column" justifyContent="space-between" alignItems="flex-start">
         <Grid item>
           <img src={Image} className={classes.image} />
         </Grid>
         <Grid item xs={12}>
           <Typography variant="h6" className={classes.heading}>Astrophytum <span className={classes.lorem}> Lorem Ipsum</span> has been</Typography>
           <Typography variant="caption" className={classes.subtitle}>The species of the genus Astrophytum usually grow</Typography>
         </Grid>
         <Grid item>
           <Button variant="contained" size="large" className={classes.button} startIcon={<ShoppingCartIcon />} >ADD</Button>
         </Grid>
         </Grid>
       </Card>


        <Grid container spacing={2} direction="column" justifyContent="space-evenly" alignItems="flex-start">
          <Grid container item className={classes.avatarBG}>
          <Grid item xs={3} >

             <Avatar className={classes.pic} src={profilePic} />
          </Grid>
             <Grid item xs={9} className={classes.profileDetails}>

             <Typography variant="subtitle">Small display card</Typography>
             <Typography variant="caption">Rahul Roy</Typography>
             </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.splitAvatar}>
            <Grid container item xs={6} className={classes.background} >
              <Avatar src={profilePic} />
              <Grid item className={classes.profileDetails} style={{paddingLeft:"10px"}}>

               <Typography variant="subtitle">Small card</Typography>
               <Typography variant="caption">Rahul Roy</Typography>
               </Grid>
            </Grid>

             <Grid container item xs={6} className={classes.background} >
              <Avatar src={profilePic} />
              <Grid item className={classes.profileDetails} style={{paddingLeft:"10px"}}>

               <Typography variant="subtitle">Small card</Typography>
               <Typography variant="caption">Rahul Roy</Typography>
               </Grid>
            </Grid>
                  
          </Grid>
        </Grid> 





      <Grid conatiner>
        <Grid className={classes.navbar} item xs={6}>
          <Typography variant="h6" onClick={concept} className={isactive === "concept" ? classes.active : classes.grey }>Concept</Typography>
          <Typography variant="h6" onClick={popular} className={isactive === "popular" ? classes.active : classes.grey }>Popular</Typography> 
        </Grid>
      </Grid>
      

      <Box style={{overflow:"auto"}}>
        <Grid container>
          <Grid item xs={8}>
              <Card className={classes.plantCard} >
                <Grid container item direction="column" justifyContent="center" alignItems="center" alignContent="space-evenly">
                      <Typography variant="h6">Gasteria kyoryu</Typography>
                    <img src={plants} className={classes.plants} />

                    <Typography variant="h6">228</Typography>
                </Grid>
              </Card>
            </Grid>
        </Grid>
      </Box>
     </div>
  );
}

export default App;
