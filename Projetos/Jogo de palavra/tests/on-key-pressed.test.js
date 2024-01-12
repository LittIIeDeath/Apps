const app = require('../resources/scripts/script.js')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const KEY_BACKSPACE = 'Backspace'
const KEY_ENTER = 'Enter'

const NOTIFICATION_BACKSPACE_KEY_PRESSED = 'Backspace key pressed'
const NOTIFICATION_DISPLAY_LETTER_SUCCESSFULLY = 'Letter added to the board'
const NOTIFICATION_BACKSPACE_WHEN_EMPTY_GUESS = 'Could not erase when is an empty guess'
const NOTIFICATION_ENTER_KEY_PRESSED = 'Enter key pressed'
const NOTIFICATION_EMPTY_GUESS = 'Empty guess'
const NOTIFICATION_INCOMPLETE_GUESS = 'Incomplete guess'
const NOTIFICATION_INVALID_PRESSED_KEY = 'Invalid Pressed Key'
const NOTIFICATION_REACH_MAX_ATTEMPTS = 'Reach Max Attempts'
const NOTIFICATION_REACH_MAX_LETTERS_PER_ROW = 'Reach Max letter per row'
const NOTIFICATION_WORD_NOT_IN_DATABASE = 'Word not in database'

describe('testing onkeypressed', () => {
    const database = ['agent', 'above', 'allow', 'lunch', 'money', 'sorry', 'today', 'worry']

    const gameInitialConfig = {
        database,
        currentLetterPosition: 1,
        currentRow: 1,
        currentGuess: '',
        rightGuess: ''
    }

    beforeEach(() => {
        const dom = new JSDOM()
        global.document = dom.window.document
        global.window = dom.window

        jest.spyOn(global.document, 'querySelector').mockReturnValue({})
    })

    afterEach(() => {
        jest.restoreAllMocks()
    })

    test('testing whether the return and "Reach Max Attempts" when using all attempts', () => {
        expect(app.onKeyPressed('a', {...gameInitialConfig, currentRow: 7})).toBe(NOTIFICATION_REACH_MAX_ATTEMPTS)
    })

    describe('testing Backspace/Delete pressed', () => {
        test('testing whether the backspace key erases the last letter', () => {
            const game = {...gameInitialConfig, currentGuess: 'leave', currentLetterPosition: 6}
            expect(app.onKeyPressed(KEY_BACKSPACE, game)).toBe(NOTIFICATION_BACKSPACE_KEY_PRESSED)
            expect(game.currentGuess).toBe('leav')
            expect(game.currentLetterPosition).toBe(5)
        })

        test('testing return for when pressing backspace on an empty attempt', () => {
            const game = {...gameInitialConfig, currentGuess: '', currentLetterPosition: 1}
            expect(app.onKeyPressed(KEY_BACKSPACE, game)).toBe(NOTIFICATION_BACKSPACE_WHEN_EMPTY_GUESS)
            expect(game.currentGuess).toBe('')
            expect(game.currentLetterPosition).toBe(1)
        })
    })

    describe('testing Enter pressed', () => {

        test('testing enter an empty attempt', () => {
            const game = {...gameInitialConfig}
            expect(app.onKeyPressed(KEY_ENTER, game)).toBe(NOTIFICATION_EMPTY_GUESS)
        })

        test('testing a right attempt', () => {
            const game = {...gameInitialConfig, currentGuess: 'allow', currentLetterPosition: 6}
            expect(app.onKeyPressed(KEY_ENTER, game)).toBe(NOTIFICATION_ENTER_KEY_PRESSED)
            expect(game.currentGuess).toBe('')
            expect(game.currentLetterPosition).toBe(1)
            expect(game.currentRow).toBe(2)
        })

        test('testing enter an incomplete attempt', () => {
            const game = {...gameInitialConfig, currentGuess: 'lea', currentLetterPosition: 4}
            expect(app.onKeyPressed(KEY_ENTER, game)).toBe(NOTIFICATION_INCOMPLETE_GUESS)
        })

        test('testing an attempt outside the database', () => {
            const game = {...gameInitialConfig, currentGuess: 'leave', currentLetterPosition: 6}
            expect(app.onKeyPressed(KEY_ENTER, game)).toBe(NOTIFICATION_WORD_NOT_IN_DATABASE)
        })
    })

    describe('Testing letter limit per line', () => {
        test('testing a letter in a full line', () => {
            const game = {...gameInitialConfig, currentLetterPosition: 6}
            expect(app.onKeyPressed('a', game)).toBe(NOTIFICATION_REACH_MAX_LETTERS_PER_ROW)
        })
    })

    describe('testing valid and invalid keystrokes', () => {

        test('testing whether it returns "Letter added to the board" when starting valid keys', () => {
            const game = {...gameInitialConfig}
            expect(app.onKeyPressed('r', game)).toBe(NOTIFICATION_DISPLAY_LETTER_SUCCESSFULLY)
        })

        test('testing whether it returns "Invalid key pressed" when starting invalid keys', () => {
            const game = {...gameInitialConfig}
            expect(app.onKeyPressed('4', game)).toBe(NOTIFICATION_INVALID_PRESSED_KEY)
            expect(app.onKeyPressed('!', game)).toBe(NOTIFICATION_INVALID_PRESSED_KEY)
            expect(app.onKeyPressed('-', game)).toBe(NOTIFICATION_INVALID_PRESSED_KEY)
            expect(app.onKeyPressed('rr', game)).toBe(NOTIFICATION_INVALID_PRESSED_KEY)
            expect(app.onKeyPressed('@', game)).toBe(NOTIFICATION_INVALID_PRESSED_KEY)
            expect(app.onKeyPressed('}', game)).toBe(NOTIFICATION_INVALID_PRESSED_KEY)
        })
    })
})