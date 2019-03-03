import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import HitListTile from './HitListTile';
// import { withStyles } from '@material-ui/core/styles';

const tileData = [
  {
    img: "https://material-ui.com/static/images/grid-list/breakfast.jpg",
    title: "Mink Flow",
    author: "jill111",
    cols: 3,
    featured: true
  },
  {
    img: "https://material-ui.com/static/images/grid-list/burgers.jpg",
    title: "Tasty burger",
    author: "director90"
  },
  {
    img: "https://material-ui.com/static/images/grid-list/camera.jpg",
    title: "Camera",
    author: "Danson67"
  },
  {
    img: "https://material-ui.com/static/images/grid-list/morning.jpg",
    title: "Morning",
    author: "fancycrave1",
    featured: true
  },
  {
    img: "https://material-ui.com/static/images/grid-list/hats.jpg",
    title: "Hats",
    author: "Hans"
  },
  {
    img: "https://material-ui.com/static/images/grid-list/honey.jpg",
    title: "Honey",
    author: "fancycravel"
  },
  {
    img: "https://material-ui.com/static/images/grid-list/vegetables.jpg",
    title: "Vegetables",
    author: "jill111",
  },
  {
    img: "https://material-ui.com/static/images/grid-list/plant.jpg",
    title: "Water plant",
    author: "BkrmadtyaKarki"
  },
  {
    img: "https://material-ui.com/static/images/grid-list/mushroom.jpg",
    title: "Mushrooms",
    author: "PublicDomainPictures"
  },
  {
    img: "https://material-ui.com/static/images/grid-list/olive.jpg",
    title: "Olive oil",
    author: "congerdesign"
  },
  {
    img: "https://material-ui.com/static/images/grid-list/star.jpg",
    title: "Sea star",
    author: "821292"
  },
  {
    img: "https://material-ui.com/static/images/grid-list/bike.jpg",
    title: "Bike",
    author: "danfador"
  }
];

const HitsList = () => {
  return(
    <div>
      <GridList cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <HitListTile data={tile}/>
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

// export default withStyles(styles)(HitsList);
export default HitsList;
