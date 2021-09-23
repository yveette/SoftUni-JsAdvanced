function createAssemblyLine(myCar) {
  // return has 3 object  ---> functions

  return {
    hasClima: (myCar) => {
      myCar.temp = 21;
      myCar.tempSettings = 21;
      myCar.adjustTemp = () => {
        if (myCar.temp < myCar.tempSettings) {
          myCar.temp += 1;
        } else if (myCar.temp > myCar.tempSettings) {
          myCar.temp -= 1;
        }
      }
    },
    hasAudio: (myCar) => {
      myCar.currentTrack = {
        name: '',
        artist: ''
      }
      myCar.nowPlaying = () => {
        if (myCar.currentTrack !== null) {
          console.log(`Now playing '${myCar.currentTrack.name}' by ${myCar.currentTrack.artist}`);
        }
      }
    },
    hasParktronic: (myCar) => {
      myCar.checkDistance = (distance) => {
        if (distance < 0.1) {
          console.log("Beep! Beep! Beep!");
        } else if (distance >= 0.1 && distance < 0.25) {
          console.log("Beep! Beep!");
        } else if (distance >= 0.25 && distance < 0.5) {
          console.log('Beep!')
        } else {
          console.log('');
        }
      }
    }
  }
}

// Setup:
const assemblyLine = createAssemblyLine();
const myCar = {
  make: 'Toyota',
  model: 'Avensis'
};



// Input 1
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
// Output 1
/*
21
20
*/



// Input 2
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
  name: 'Never Gonna Give You Up',
  artist: 'Rick Astley'
};
myCar.nowPlaying();
// Output 2
/*
Now playing 'Never Gonna Give You Up' by Rick Astley
*/



// Input 3
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
// Output 3
/*
Beep!
Beep! Beep!
*/



// Input 4
console.log(myCar);
// Output 4
/*
{
  make: 'Toyota',
  model: 'Avensis',
  temp: 20,
  tempSettings: 18,
  adjustTemp: [Function],
  currentTrack: {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
  },
  nowPlaying: [Function],
  checkDistance: [Function]
}
*/