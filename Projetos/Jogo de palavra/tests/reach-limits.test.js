const app = require('../resources/scripts/script.js')

describe('Testing letter limit per line', () => {
    test('Must return true if exceeding letter limit', () => {
        expect(app.reachMaxLetterPerRow(6)).toBe(true)
    })

    test('It must return false if it does not exceed the letter limit (6)', () => {
        expect(app.reachMaxLetterPerRow(2)).toBe(false)
        expect(app.reachMaxLetterPerRow(3)).toBe(false)
        expect(app.reachMaxLetterPerRow(0)).toBe(false)
        expect(app.reachMaxLetterPerRow(-1)).toBe(false)
    })
})

describe('Testing max attempt', () => {
    test('should return false if the number of attempts is less than or equal to 6', () => {
        expect(app.reachMaxAttempts(1)).toBe(false)
        expect(app.reachMaxAttempts(3)).toBe(false)
        expect(app.reachMaxAttempts(6)).toBe(false)
    })

    test('should return false if the number of attempts is greater than 6', () => {
        expect(app.reachMaxAttempts(7)).toBe(true)
    })
})