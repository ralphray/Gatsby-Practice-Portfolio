import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Presenting',
  name: 'Monsieur Ralph Ray',
  subtitle: 'International Hair Stylist Extraordinaire',
      cta: '',
};


// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Monsieur Ralph Ray CBE (10 Sept 1981 – Present) is a British hairstylist, businessman, and philanthropist. He was noted for repopularising a simple, close-cut geometric hair style called the bob cut, worn by famous fashion designers including Mary Quant and film stars such as Mia Farrow, Goldie Hawn, Cameron Diaz, Nastassja Kinski and Helen Mirren.',
  paragraphTwo: '"A God" Rachel From Friends',
  paragraphThree: '"Im Nothing Without" Him Bruce Willis',
  resume: 'https://media1.fdncms.com/charlotte/imager/question-the-queen-city-who-remembers-the-bhagwan/u/original/3040277/1363384227-bhagwan_shree_rajneesh_orhi98356.jpg', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Signature Styles',
    info: '       The literal French translation of "Soma" is "playful," which is a fitting term to describe the "boyishly short and sassy hairstyle," says Penna, who points to Audrey Hepburns iconic style as a prime example. Soma also includes the pixie cut, which involves shorn sides and back with longer layers on top.     ',
    info2: '',
      url: 'https://media1.fdncms.com/charlotte/imager/question-the-queen-city-who-remembers-the-bhagwan/u/original/3040277/1363384227-bhagwan_shree_rajneesh_orhi98356.jpg',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Norwich Studios',
    info: 'Located in the heart of glitzy Noz, Monsieur Ralph Ray is your hairdresser, providing all kinds of ultra-modern and innovative services in haircare. Having worked in hair care and hair design for 200 years, He has experience with all types of hair. I’m proud to offer my customers a wide range of hairstyles, treatments, looks and helpful products that reflect their individuality and personal taste. Stop by today if you can afford us!      ',
    info2: '',
      url: 'https://media1.fdncms.com/charlotte/imager/question-the-queen-city-who-remembers-the-bhagwan/u/original/3040277/1363384227-bhagwan_shree_rajneesh_orhi98356.jpg',
    repo: '', // if no repo, the button will not show up
  },
  
]

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://media1.fdncms.com/charlotte/imager/question-the-queen-city-who-remembers-the-bhagwan/u/original/3040277/1363384227-bhagwan_shree_rajneesh_orhi98356.jpg',

    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://media1.fdncms.com/charlotte/imager/question-the-queen-city-who-remembers-the-bhagwan/u/original/3040277/1363384227-bhagwan_shree_rajneesh_orhi98356.jpg',

    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://media1.fdncms.com/charlotte/imager/question-the-queen-city-who-remembers-the-bhagwan/u/original/3040277/1363384227-bhagwan_shree_rajneesh_orhi98356.jpg',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://media1.fdncms.com/charlotte/imager/question-the-queen-city-who-remembers-the-bhagwan/u/original/3040277/1363384227-bhagwan_shree_rajneesh_orhi98356.jpg',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
