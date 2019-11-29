import {
  AynRand,
  Circus,
  WYK,
  Slug,
  BigDaddy,
  SystemShock,
  WinterBlast,
  NewYears,
} from '../assets/images';

export const questions = [{
  question: 'Many thematic, architectural, and plot elements were strongly inspired by what famous author?',
  answers: [{ answer: 'F Scott Fitzgerald' }, { answer: 'Ayn Rand', isCorrect: true }, { answer: 'Ernest Hemingway' }, { answer: 'Edith Wharton' }],
  image: AynRand,
},
{
  question: 'Director Ken Lavine insisted on voicing which in game vending machine?',
  answers: [{ answer: 'Gene Bank' }, { answer: 'El Ammo Bandito' }, { answer: 'Gatherers Garden' }, { answer: 'Circus of Values', isCorrect: true }],
  image: Circus,
},
{
  question: 'What famous phrase allowed Frank Fontain to control Jack?',
  answers: [{ answer: 'Abracadabra' }, { answer: 'If It Pleases' }, { answer: 'Would You Kindly', isCorrect: true }, { answer: 'What Is Your Pleasure' }],
  image: WYK,
},
{
  question: 'What creature is the original source of ADAM?',
  answers: [{ answer: 'Sea Slug', isCorrect: true }, { answer: 'Little Sister' }, { answer: 'Splicer' }, { answer: 'Brigid Tenenbaum' }],
  image: Slug,
},
{
  question: 'Which character is designed after a 19th century diving suit?',
  answers: [{ answer: 'Splicer' }, { answer: 'Frank Fontain' }, { answer: 'Big Dady', isCorrect: true }, { answer: 'Handy Man' }],
  image: BigDaddy,
},
{
  question: 'Bioshock is often referred to as a spiritual successor to what game?',
  answers: [{ answer: 'Dead Space' }, { answer: 'Fallout' }, { answer: 'Bioshock Infinite' }, { answer: 'System Shock 2', isCorrect: true }],
  image: SystemShock,
},
{
  question: 'Which of the following is not a plasmid?',
  answers: [{ answer: 'Insect Swarm' }, { answer: 'Blizzard', isCorrect: true }, { answer: 'Incinerate' }, { answer: 'Cyclone Trap' }],
  image: WinterBlast,
},
{
  question: 'What holiday were Rapture citicens celebrating when the city was hurled into a state of dystopia?',
  answers: [{ answer: 'New Years Eve', isCorrect: true }, { answer: 'Christmas' }, { answer: 'Fourth of July' }, { answer: 'Halloween' }],
  image: NewYears,
},
];