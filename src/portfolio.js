import projectImage from "./assets/images/nnft.jpg"
import projectImageC from "./assets/images/granny.jpg"
import projectImageM from "./assets/images/paint.jpg"

const projects = [
    {
      name: 'Cruise Race',
      image: projectImageC,
      description:
        'CRUISE RACE is a short (and funny) game where the player must help an old lady to arrive at a cruise ship in time.',
      stack: ['HTML', 'CSS', 'JavaScript', 'Canvas',],
      sourceCode: 'https://github.com/Foglia/Project_1_Game',
      livePreview: 'https://foglia.github.io/Project_1_Game/',
    },
    {
      name: 'NNFT',
      description:
        " NNFT is a social platform exclusively for 'NoNFT' artists and collectors, providing a space for them to showcase work and interact",       
      image: projectImage,
      stack: ['HTML', 'CSS', 'JavaScript', 'Handlebars', 'Node.js', 'Express', 'Mongoose', "MongoDB"],
      sourceCode: 'https://github.com/Foglia/Project_2_SApp',
      livePreview: 'https://glorious-slippers-pig.cyclic.app/',
    },
    {
      name: 'Montra PT',
      description:
        'MONTRA ia a full-stack app designed to make it easy for users to discover and attend cultural events around Portugal.',
      image: projectImageM,
      stack: ['HTML', 'CSS', 'Bootstrap', 'Styled Components', 'JavaScript', 'React.js', 'Node.js', 'Axios', 'Express', "API", "MongoDB"],
      sourceCode: 'https://github.com/Foglia/Project_3_C',
      livePreview: 'https://culturally.netlify.app/',
    },
  ]

  const skills = [
    // skills can be added or removed
    'HTML5',
    'CSS',
    'Bootstrap',
    'JavaScript',
    'JQuery',
    'Handlebars',
    'ReactJS',
    'NodeJS',
    'ExpressJS',
    'Git',
    'MongoDB',
    'APIs',
  ]

  const softSkills = [
    'Attention to Detail',
    'Self-Learning',
    'Problem-Solving',
    'Creativity',
    'Communication',
    'Empathy'
  ]

  export { projects, skills, softSkills }
