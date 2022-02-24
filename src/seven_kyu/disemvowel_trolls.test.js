const disemvowel = require('./disemvowel_trolls');

test('tests', () => {
  expect(disemvowel("This website is for losers LOL!")).toMatch("Ths wbst s fr lsrs LL!")
  expect(disemvowel(
  "No offense but,\nYour writing is among the worst I've ever read"))
    .toMatch("N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
})

// describe("Basic tests", () => {

//   it("Testing for fixed tests", () => {
//     assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
//     })
//   })
