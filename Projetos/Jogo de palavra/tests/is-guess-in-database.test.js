const app = require('../resources/scripts/script.js')

describe('Testing case guess is in database', () => {
    wordList = ["agent",
                "aging",
                "agree",
                "ahead",
                "aides",
                "aimed",
                "agile",
                "alarm",
                "alert",
                "bikes",
                "blade",
                "candy",
                "house",
                "sorry",
                "worry"]
    test('should return false because allow is not in list', () => {
        expect(app.isGuessInDatabase('allow', wordList)).toBe(false)
    })

    test('should return true because sorry is in list', () => {
        expect(app.isGuessInDatabase('sorry', wordList)).toBe(true)
    })

    test('should return true because blade is in list', () => {
        expect(app.isGuessInDatabase('blade', wordList)).toBe(true)
    })

    test('should return true because candy is in list', () => {
        expect(app.isGuessInDatabase('candy', wordList)).toBe(true)
    })
})