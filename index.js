const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
const { muppetName, color, song, job, partner } = muppet;

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
const { 
  album: { 
    theMuppetMovie: { song2, song4 } 
  }, 
  nestedJob, 
  nestedPartner 
} = nestedMuppet;

const [cow, horse, sheep, pig, chicken] = farmAnimals.split(' ');

const moo = cow;
const neigh = horse;
const baa = sheep;
const oink = pig;
const cluck = chicken;


const [bessie, dolly, babe, little] = ['cow', 'sheep', 'pig', 'chicken'];

const [blackAndWhite, black, pink] = ['cow', 'sheep', 'pig'];

const [red, orange, yellow, green, blue, indigo, violet] = colors;

const [r, o, y, g, b, v] = colors.filter(color => color !== 'indigo');

const [, , , , , indg] = colors;