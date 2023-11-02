import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Paper, Container, Grid, Card, CardMedia, CardContent, CardActions, BottomNavigation, BottomNavigationAction } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import LayersIcon from '@mui/icons-material/Layers';
import { Favorite, Folder, LocationOn, Restore } from '@mui/icons-material';





const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const [value, setValue] = React.useState("recents")

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <header>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  '&:hover': {
                    borderColor: 'red',
                  },
                }}
              >
                Login
              </Button>

              <Button color="inherit" sx={{ bgcolor: 'red', marginLeft: 2 }} > SIGN UP</Button>
            </Toolbar>
          </AppBar>
        </Box >
      </header>

      <main>
        <Paper sx={{
          backgroundImage: `url(https://loremflickr.com/320/240/)`,
          marginBottom: 4,
          position: 'relative',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}>
          <Container fixed>
            <Box sx={{
              // position: 'relative',
              // top: 0,
              // bottom: 0,
              // right: 0,
              // left: 0,
              // backgroundColor: 'rgba(0, 0, 0, 0.3)',
            }}>
              <Grid container >
                <Grid item md={6}>
                  <Box sx={{ position: 'relative', padding: 8, marginTop: 3 }}>
                    <Typography
                      variant='h3'
                      color='orange'
                      gutterBottom
                    >
                      MUI/React
                    </Typography>
                    <Typography
                      variant='h6'
                      paragraph
                      sx={{ color: 'white' }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </Typography>
                    <Button variant="contained" sx={{ color: 'violet' }}>
                      Learn more
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Paper>


        <Box>
          <Container maxWidth='sm'>
            <Typography variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom>
              MUI/React
            </Typography>
            <Typography variant="h5"
              align="center"
              color="textSecondary"
              paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </Typography>
            <Grid container spacing={4} justifyContent="center" sx={{ marginBottom: 2 }}>
              <Grid item>
                <Button variant="contained" color="primary">Start Now</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">learn more</Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box>
          <Container maxWidth='md'>
            <Grid container spacing={2} >
              {cards.map((card) => (
                <Grid item key={card} xs="12" sm={6} md={3}>
                  <Card>
                    <CardMedia sx={{ paddingTop: "56.25%" }}
                      image="https://loremflickr.com/320/240/ocean"
                      title="Image Title"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h4" gutterBottom>
                        Blog Post
                      </Typography>
                      <Typography variant="text" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur consectetur.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                      <LayersIcon />
                      <PlayCircleFilledWhiteIcon />
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </main>

      <footer>
        <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
        <BottomNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<Restore />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<Favorite />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOn />}
          />
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<Folder />}
          />
        </BottomNavigation>
        <Typography align="center" color="CaptionText" component="p" variant="subtitle1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </Typography>
      </footer>
    </>
  );
}

export default App;
