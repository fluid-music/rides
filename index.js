const fluid = require('fluid-music')
const { AFOnset, AFReverse, AFReverseLeadIn } = fluid.techniques

const rideFiles = require('./audio-files')

for (const [key, file] of Object.entries(rideFiles)) file.gainDb -= 18

const rides = {
  // Mono
  a: new AFOnset(rideFiles['mono-ride-a.wav']),
  b: new AFOnset(rideFiles['mono-ride-b.wav']),
  c: new AFOnset(rideFiles['mono-ride-c.wav']),
  d: new AFOnset(rideFiles['mono-ride-d.wav']),
  // Stereo
  A: new AFOnset(rideFiles['stereo-ride-a.wav']),
  B: new AFOnset(rideFiles['stereo-ride-b.wav']),
  C: new AFOnset(rideFiles['stereo-ride-c.wav']),
  D: new AFOnset(rideFiles['stereo-ride-d.wav']),
}

const ridesReverse = {}
for (const [key, afOnset] of Object.entries(rides)) ridesReverse[key] = new AFReverse(afOnset.audioFile)

const ridesReverseLeadIn = {}
for (const [key, afOnset] of Object.entries(rides)) ridesReverseLeadIn[key] = new AFReverseLeadIn(afOnset.audioFile)

module.exports = { rides, ridesReverse, ridesReverseLeadIn }

// const session = new fluid.FluidSession({bpm: 60})
// session.insertScore({
//     tLibrary: rides,
//     r: 'ww',
//     ride: ['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D']
// })
// session.finalize()
// session.saveAsReaperFile('rides.RPP')
