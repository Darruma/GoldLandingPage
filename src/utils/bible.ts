export const bible = [
  "tons of noobs here need to realize this isn’t a fucking binance or even nu gen eth shitcoin that is just lying to you selling you some reskined github shit",
  "its a defi related coin",
  "it has the richest dev in ALL OF MEMECOINS AT THIS VERY MOMENT IN TIME",
  "the guy has 7+ years of experience in crypto point 3 means he wasn’t born yesterday this means that he knows exactly what to do, from when to go hard from when to let jeets panic into dumping big positions for cheap",
  "you really want gold to 1000? are you really even capable of holding a 20x? let alone a 200x? some of yall sell half at 2x to recoup your investment then watch as you miss out on 5x in the next days",
  "humpy knows what hes doing",
  "garbage coins need to do THE MOST : socials, website , nfts etc, - because they got nothing else but hype; DONT BRING THIS ENERGY HERE YOU’RE ONLY GOING TO ANNOY HUMPY, doing this YOU BECOME the risk. the biggest risk is humpy believing you’re all fucking hopeless and getting bored. SHOW CONFIDENCE. HUMPY IS THE UTILITY.",
  "you dont need to be a whale. YOU JUST NEED TO RIDE ONE’S BACK.",
  "whales mastered the art of timing.",
  "humpy could’ve done this on any chain since forever. yet, he picked $BASE . aren’t you curious why?",
  "the market cap is NOT what is listed; it’s mcap = price * circ supply circ supply is 1/4. and 1/4 is burned. humpy holds 50% for rewards ONLY. current cap rn is 1.5m",
  "humpy has minimum 40x this on chain.",
  "stop telling humpy what he needs to do for gauges or balancer; you look like a fucking idiot. EVEN IF HUMPY MISSED A MARKER OR A DEADLINE HE COULD USE HIS INFLUENCE TO INFLICT WRATH ON THE PROTOCOL SO THEY REMOVE SAID MARKERS OR DEADLINES.",
  "stop being a fucking idiot. going forward i will screenshot every single noob who whines and i will put it in my phone in a rekt gold plebs” folder. once we hit 1000/gold, i will build a montage and it will look so good humpy will post it on the gold twitter and i promise you you will be aware we pumped and i promise you you will see your name on the collage and you will need to tell your wife and family you papered generational wealth. you will need to explain how you knew you were in the richest whale’s coin and you sold on day 2 because he didn’t run it like an indian shitcoin.",
  "humpy has put up 28 eth in rewards just for fun. that’s more than everyone complaining here’s entire net worth",
  "humpy HAS NEVER SHILLED shitcoins before, yet puts his name behind this.",
  "humpy is legendary in the defi world. you think he’s going to ruin this for a fucking 1.5m cap coin? are you dumb? you realize doing this could hurt his future governance moves? you know he has enough money to moon shitcoins anonymously if that was his goal?",
  "humpy has told you about 20 times so far to be patient and to trust the process. he said he’s gonna give back. let him do his thing and stop being little cringelords. you’re literally a meme. go do this in other telegrams. go launch your own coin. just realize you’re the biggest pain in the ass. imagine if humpy is laughing knowing he’ll make all you bums rich, is having a great day, knows things are moving per his timeline, then he shows up here and he sees you guys whining about shit that is literally at the bottom of his priority list. you’re a noob. act like it and let the masters do what they do.",
];

export function getRandomBibleQuote() {
  const randomNumber = Math.floor(Math.random() * bible.length);
  const randomBibleEntry = bible[randomNumber];
  return {
    number: randomNumber,
    quote: randomBibleEntry,
  };
}
