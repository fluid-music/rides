# @fluid-music/rides

`rides` contains collection of ride cymbal samples packaged for the
[`fluid-music`](https://www.npmjs.com/package/fluid-music) Node framework. 

```bash
npm i @fluid-music/rides
```

It exports 3 different `tLibrary` objects, each of which contains 8 different ride techniques identified by the symbols: `a`, `b`, `c`, `d`, `A`, `B`, `C`, `D`. Lower case symbols represent mono samples. Upper case symbols represent stereo samples.

```javascript
modules.exports = {
  // Each tLibrary plays the samples using different technique
  rides:              { /* a,b,c,d, A,B,C,D */ }, // AFOnset technique
  ridesReverse:       { /* a,b,c,d, A,B,C,D */ }, // AFReverse technique
  ridesReverseLeadIn: { /* a,b,c,d, A,B,C,D */ }, // AFReverseLeadIn technique
}
```

Read [`./index.js`](https://github.com/fluid-music/rides/blob/main/index.js) for more details. 

[fluid-music/example](https://github.com/fluid-music/example) uses this package.
