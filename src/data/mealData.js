// src/data/mealData.js

export const weeklyMeals = {
    Mandag: {
      Frokost: [
        { name: 'Havregrøt med banan og honning', amount: '1 bolle', why: 'Gir langvarig energi før skole og trening.' },
        { name: 'Appelsinjuice', amount: '1 glass', why: 'Gir C-vitamin og styrker immunforsvaret.' },
      ],
      Lunsj: [
        { name: 'Grovbrød med egg og ost', amount: '2 skiver', why: 'Gir protein og langvarig energi.' },
        { name: 'Grønnsaker (paprika, gulrot)', amount: '1 kopp', why: 'Gir vitaminer og fiber.' },
      ],
      Middag: [
        { name: 'Kyllingfilet med ris og brokkoli', amount: '1 tallerken', why: 'Bygger muskler og gir energi til kvelden.' },
      ],
      Mellommåltid: [
        { name: 'Banan + yoghurt', amount: '1 stk + 1 beger', why: 'Perfekt etter trening for restitusjon.' },
      ],
      Vann: [
        { name: 'Vann gjennom hele dagen', amount: '1.5–2 liter', why: 'Hjelper konsentrasjon og restitusjon.' },
      ],
    },
  
    Tirsdag: {
      Frokost: [
        { name: 'Smoothie med bær og havregryn', amount: '1 stort glass', why: 'Gir rask energi og fiber.' },
      ],
      Lunsj: [
        { name: 'Fullkornswrap med kylling', amount: '1 wrap', why: 'Gir proteiner og gode karbohydrater.' },
      ],
      Middag: [
        { name: 'Torsk med poteter og gulrøtter', amount: '1 tallerken', why: 'Sunn middag med omega-3 og vitaminer.' },
      ],
      Mellommåltid: [
        { name: 'Frukt + nøtter', amount: '1 håndfull', why: 'Gir energi før ettermiddagsøkten.' },
      ],
      Vann: [
        { name: 'Vann med sitron', amount: '2 liter', why: 'Holder deg hydrert hele dagen.' },
      ],
    },
  
    Onsdag: {
      Frokost: [
        { name: 'Grovt knekkebrød med ost og paprika', amount: '2 stk', why: 'Gir stabil energi før skoledag.' },
      ],
      Lunsj: [
        { name: 'Pasta med kjøttsaus', amount: '1 porsjon', why: 'Gir karbohydrater og protein for påfyll.' },
      ],
      Middag: [
        { name: 'Omelett med skinke og spinat', amount: '1 stor', why: 'Gir jern og proteiner.' },
      ],
      Mellommåltid: [
        { name: 'Skyr + bær', amount: '1 beger', why: 'Perfekt etter trening og lett å fordøye.' },
      ],
      Vann: [
        { name: 'Vann under trening', amount: '2 liter', why: 'Forebygger hodepine og gir bedre ytelse.' },
      ],
    },
  
    Torsdag: {
      Frokost: [
        { name: 'Havrepannekaker', amount: '2–3 stk', why: 'Kombinasjon av protein og energi.' },
      ],
      Lunsj: [
        { name: 'Kyllingsalat med egg', amount: '1 bolle', why: 'Fullverdig og lett lunsj.' },
      ],
      Middag: [
        { name: 'Laks med søtpotet og brokkoli', amount: '1 tallerken', why: 'Gir omega-3 og hjelper restitusjon.' },
      ],
      Mellommåltid: [
        { name: 'Smoothie med banan og melk', amount: '1 glass', why: 'Bra etter økt – gir næring og væske.' },
      ],
      Vann: [
        { name: 'Drikk små slurker ofte', amount: '1.5–2 liter', why: 'Holder væskebalansen stabil.' },
      ],
    },
  
    Fredag: {
      Frokost: [
        { name: 'Grovt rundstykke med egg', amount: '1 stk', why: 'Gir god metthetsfølelse.' },
      ],
      Lunsj: [
        { name: 'Pastasalat med tunfisk', amount: '1 boks', why: 'Perfekt etter gymtime.' },
      ],
      Middag: [
        { name: 'Tacotallerken med bønner og kjøttdeig', amount: '1 tallerken', why: 'Gir energi og smaker godt.' },
      ],
      Mellommåltid: [
        { name: 'Gresk yoghurt + honning', amount: '1 beger', why: 'Restitusjon etter fotballtrening.' },
      ],
      Vann: [
        { name: 'Vann + elektrolytt', amount: '2 liter', why: 'Ekstra viktig etter hard trening.' },
      ],
    },
  
    Lørdag: {
      Frokost: [
        { name: 'Proteinrundstykke med ost', amount: '1 stk', why: 'Gir både karbohydrater og protein.' },
      ],
      Lunsj: [
        { name: 'Egg, brød og juice', amount: '1 porsjon', why: 'God før kamp/trening.' },
      ],
      Middag: [
        { name: 'Pizza med fullkornsbunn og grønnsaker', amount: '2 stykker', why: 'Fyller opp glykogenlagrene.' },
      ],
      Mellommåltid: [
        { name: 'Bar + eple', amount: '1 bar + 1 frukt', why: 'Før eller etter aktivitet.' },
      ],
      Vann: [
        { name: 'Vann + sportsdrikke etter kamp', amount: '2.5 liter', why: 'Erstatt væsketap.' },
      ],
    },
  
    Søndag: {
      Frokost: [
        { name: 'Havregrøt + melk + bær', amount: '1 bolle', why: 'Rolig start på restitusjonsdag.' },
      ],
      Lunsj: [
        { name: 'Toast med egg og avokado', amount: '2 skiver', why: 'Balansert og mettende.' },
      ],
      Middag: [
        { name: 'Kyllingwok med ris', amount: '1 tallerken', why: 'Rask og sunn middag.' },
      ],
      Mellommåltid: [
        { name: 'Sjokolademelk + banan', amount: '1 glass + 1', why: 'Bra etter lett aktivitet.' },
      ],
      Vann: [
        { name: 'Lett inntak hele dagen', amount: '1.5 liter', why: 'Hold kroppen hydrert.' },
      ],
    },
  };
  