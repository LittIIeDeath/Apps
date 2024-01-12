const app = require('../resources/scripts/script.js')

describe('testing whether the game is going to the next guess correctly', () => {
    const database = ['allow', 'actor', 'badge', 'beach', 'candy', 'house']

    test('should increment game attributes - first guess', () => {
        const game = {
            database,
            currentRow: 1,
            currentLetterPosition: 6,
            currentGuess: 'allow',
            rightGuess: 'beach'
        }

        app.nextGuess(game)

        expect(game.currentRow).toBe(2)
        expect(game.currentLetterPosition).toBe(1)
        expect(game.currentGuess).toBe('')
        expect(game.rightGuess).toBe('beach')
    })

    test('should increment game attributes - second guess', () => {
        const game = {
            database,
            currentRow: 2,
            currentLetterPosition: 6,
            currentGuess: 'allow',
            rightGuess: 'beach'
        }

        app.nextGuess(game)

        expect(game.currentRow).toBe(3)
        expect(game.currentLetterPosition).toBe(1)
        expect(game.currentGuess).toBe('')
        expect(game.rightGuess).toBe('beach')
    })

    test('should increment game attributes - third guess', () => {
        const game = {
            database,
            currentRow: 3,
            currentLetterPosition: 6,
            currentGuess: 'allow',
            rightGuess: 'beach'
        }

        app.nextGuess(game)

        expect(game.currentRow).toBe(4)
        expect(game.currentLetterPosition).toBe(1)
        expect(game.currentGuess).toBe('')
        expect(game.rightGuess).toBe('beach')
    })

    test('should increment game attributes - fourth guess', () => {
        const game = {
            database,
            currentRow: 4,
            currentLetterPosition: 6,
            currentGuess: 'allow',
            rightGuess: 'beach'
        }

        app.nextGuess(game)

        expect(game.currentRow).toBe(5)
        expect(game.currentLetterPosition).toBe(1)
        expect(game.currentGuess).toBe('')
        expect(game.rightGuess).toBe('beach')
    })

    test('should increment game attributes - fifth guess', () => {
        const game = {
            database,
            currentRow: 5,
            currentLetterPosition: 6,
            currentGuess: 'allow',
            rightGuess: 'beach'
        }

        app.nextGuess(game)

        expect(game.currentRow).toBe(6)
        expect(game.currentLetterPosition).toBe(1)
        expect(game.currentGuess).toBe('')
        expect(game.rightGuess).toBe('beach')
    })

})