function crew(worker) {
  if (worker.dizziness == true) {
    worker.dizziness = false;
    worker.levelOfHydrated += (worker.weight * 0.1) * worker.experience;
  }
  return worker;
}

crew({
  weight: 80, //kilograms
  experience: 1, //years 
  levelOfHydrated: 0, //milliliters
  dizziness: true
})
/*
  { weight: 80,
  experience: 1,
  levelOfHydrated: 8,
  dizziness: false }
*/


crew({
  weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: true
})
/*
  { weight: 120,
  experience: 20,
  levelOfHydrated: 440,
  dizziness: false }
*/


crew({
  weight: 95,
  experience: 3,
  levelOfHydrated: 0,
  dizziness: false
})
/*
{ weight: 95,
  experience: 3,
  levelOfHydrated: 0,
  dizziness: false }
*/