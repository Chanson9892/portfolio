import recipeFinderDemo from './projectDemos/recipe finder demo.mp4'
import noteTakerDemo from './projectDemos/note taker demo.mp4'
import breakoutDemo from './projectDemos/breakout demo.mp4'


const projectData = [
    {
        title:'Recipe Finder',
        description: 'Recipe Finder is a single page application with a Rails backend and a React.js frontend. User searches for recipes based on a search query. This will give multiple recipes to choose from to look at ingredients, an image of the meal, and a link to the recipe website. the user can filter your recipe search to include certain ingredients and will give recipes that include those ingredients. You can also favorite a recipe to save it for later on your profile page. On your profile page, you can add, delete, and edit comments to the recipes.',
        github: 'https://github.com/Chanson9892/recipe-finder-frontend',
        youtube_link: 'https://www.youtube.com/watch?v=xqC_cCqJnA8&feature=youtu.be',
        video: recipeFinderDemo
    },
    {
        title:'Note Taker',
        description: 'Note Taker is a single page application for note taking, organizing, and task management with a rails backend and a react frontend.',
        github: 'https://github.com/Chanson9892/Note-Taker',
        youtube_link: 'https://www.youtube.com/watch?v=8eTHO_oZoJU&feature=youtu.be',
        video: noteTakerDemo
    },
    {
        title:'Breakout',
        description: "Breakout is a fun reimagination of Atari's classic game, 'Breakout'. The user plays a platform that can move right or left using the left and right arrows. The objective is to destroy all the blocks by ricocheting the ball off the platform and the walls to hit all the blocks without losing all their lives. If the player's platform misses the ball's ricochet, they will lose a life. The player has three lives to destroy all the blocks. If not able to do so, the game will end and the player will have to restart",
        github: 'https://github.com/noaheakin/breakout-frontend',
        youtube_link: 'https://www.youtube.com/watch?v=GY6GQ3_qELE&feature=youtu.be',
        video: breakoutDemo
    }

]

export default projectData