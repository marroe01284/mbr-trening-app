// src/data/exercises.js

export const exercises = [
    // STYRKE
    {
      id: 'plank',
      name: 'Planke',
      category: 'Styrke',
      description: 'Hold kroppen rett som en planke med albuene i bakken. Bygger kjernemuskulatur.',
      sets: '3 x 30 sek',
      tips: 'Stram magen og rumpa, unngå å svaie i korsryggen.',
      media: {
        type: 'illustration',
        src: '/illustrations/plank.png',
        alt: 'Plankeøvelse',
      },
    },
    {
      id: 'pushups',
      name: 'Push-ups',
      category: 'Styrke',
      description: 'Armhevninger som styrker bryst, skuldre og armer.',
      sets: '3 x 10',
      tips: 'Hold kroppen rett, gå dypt og kontroller bevegelsen.',
      media: {
        type: 'illustration',
        src: '/illustrations/push-up.png',
        alt: 'Push-ups',
      },
    },
  
    // HURTIGHET
    {
      id: 'a-steps',
      name: 'A-steps',
      category: 'Hurtighet',
      description: 'Raske kneløft i høy frekvens. Bygger hurtighet og rytme.',
      sets: '3 x 15 sek',
      tips: 'Raske steg, høy frekvens, lett på foten.',
      media: {
        type: 'illustration',
        src: '/illustrations/kneløft.png',
        alt: 'A-steps øvelse',
      },
    },
    {
      id: 'reaction-sprints',
      name: 'Reaksjonssprint',
      category: 'Hurtighet',
      description: 'Sprint på signal – enten klapp eller visuell beskjed.',
      sets: '5 reps',
      tips: 'Vær klar og eksploder raskt ved signal.',
      media: {
        type: 'illustration',
        src: '/illustrations/sprint.png',
        alt: 'Sprintøvelse',
      },
    },
  
    // SPENST
    {
      id: 'box-jumps',
      name: 'Kassehopp',
      category: 'Spenst',
      description: 'Hopp eksplosivt opp på en lav kasse og land mykt.',
      sets: '3 x 5',
      tips: 'Bruk armene og fokuser på myk landing.',
      media: {
        type: 'illustration',
        src: '/illustrations/box-jump.png',
        alt: 'Kassehopp',
      },
    },
    {
      id: 'vertical-jumps',
      name: 'Vertikalhopp',
      category: 'Spenst',
      description: 'Hopp rett opp og prøv å nå så høyt du kan.',
      sets: '3 x 5',
      tips: 'Bøy knærne godt og skyt opp med kraft.',
      media: {
        type: 'illustration',
        src: '/illustrations/vertikal-hopp.png',
        alt: 'Vertikalhopp',
      },
    },
  
    // UTHOLDENHET
    {
      id: 'fartlek',
      name: 'Fartslek',
      category: 'Utholdenhet',
      description: 'Veksle mellom lett jogg og rask løping i 10 minutter.',
      sets: '10 min (30 sek løp / 30 sek jogg)',
      tips: 'Hold jevn intensitet, ikke start for hardt.',
      media: {
        type: 'illustration',
        src: '/illustrations/fartslek.png',
        alt: 'Fartslek',
      },
    },
    {
      id: 'shuttle-run',
      name: 'Shuttle Run',
      category: 'Utholdenhet',
      description: 'Løp mellom 5, 10 og 15 meter med raske retningsendringer.',
      sets: '3 x 4 runder',
      tips: 'Hold lav tyngdepunkt og raske vendinger.',
      media: {
        type: 'illustration',
        src: '/illustrations/shuttle-run.png',
        alt: 'Shuttle Run',
      },
    },
  
    // MOBILITET / FOREBYGGING
    {
      id: 'hip-opener',
      name: 'Hofteåpner med rotasjon',
      category: 'Mobilitet',
      description: 'Utfør et dypt utfall og roter over fremre kne.',
      sets: '2 x 10',
      tips: 'Rolige bevegelser og god balanse.',
      media: {
        type: 'illustration',
        src: '/illustrations/hip-opener.png',
        alt: 'Hofteåpner',
      },
    },
    {
      id: 'nordic-hamstrings',
      name: 'Nordic Hamstrings',
      category: 'Mobilitet',
      description: 'Sterk baksideøvelse som forebygger skader.',
      sets: '3 x 5',
      tips: 'Hold kroppen rett og brems sakte nedover.',
      media: {
        type: 'illustration',
        src: '/assets/illustrations/nordic-hamstrings.png',
        alt: 'Nordic hamstrings',
      },
    },
  ];
  