const app = require('../resources/scripts/script.js')

describe('Testing Enter key pressed', () => {
    test('should return true when typing the Enter key', () => {
        expect(app.isEnterKeyPressed('Enter')).toBe(true)
    })

    test('should return false when not typing the Enter key', () => {
        expect(app.isEnterKeyPressed('p')).toBe(false)
        expect(app.isEnterKeyPressed('*')).toBe(false)
        expect(app.isEnterKeyPressed('Q')).toBe(false)
        expect(app.isEnterKeyPressed('!')).toBe(false)
    })
})

describe('Testing Delete/Backspace key pressed', () => {
    test('should return true when typing the Delete key', () => {
        expect(app.isBackspaceKeyPressed('Delete')).toBe(true)
    })

    test('should return true when typing the Backspace key', () => {
        expect(app.isBackspaceKeyPressed('Backspace')).toBe(true)
    })

    test('should return false when not typing the Delete/Backspace key', () => {
        expect(app.isBackspaceKeyPressed('p')).toBe(false)
        expect(app.isBackspaceKeyPressed('Enter')).toBe(false)
        expect(app.isBackspaceKeyPressed('ç')).toBe(false)
        expect(app.isBackspaceKeyPressed('&')).toBe(false)
    })

describe('Testing Valid key pressed', () => {
    test('should return true when key pressed is valid one (Backspace, Delete, Enter, A-Z, a-z)', () => {
        expect(app.isValidKeyPressed('a')).toBe(true)
        expect(app.isValidKeyPressed('b')).toBe(true)
        expect(app.isValidKeyPressed('R')).toBe(true)
        expect(app.isValidKeyPressed('K')).toBe(true)
        expect(app.isValidKeyPressed('Enter')).toBe(true)
        expect(app.isValidKeyPressed('Backspace')).toBe(true)
        expect(app.isValidKeyPressed('Delete')).toBe(true)
    })

    test('should return false when key pressed is not part of valid options (Backspace, Delete, Enter, A-Z, a-z)', () => {
        expect(app.isValidKeyPressed('!')).toBe(false)
        expect(app.isValidKeyPressed('house')).toBe(false)
        expect(app.isValidKeyPressed('6')).toBe(false)
        expect(app.isValidKeyPressed('+')).toBe(false)
        expect(app.isValidKeyPressed('Shift')).toBe(false)
        expect(app.isValidKeyPressed('/')).toBe(false)
    })
})
})