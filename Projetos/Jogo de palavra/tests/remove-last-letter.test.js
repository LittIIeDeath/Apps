const app = require('../resources/scripts/script.js')

test('testing to remove the last letter of the word', () => {
    expect(app.removeLastLetter('leave')).toBe('leav')
    expect(app.removeLastLetter('beach')).toBe('beac')
    expect(app.removeLastLetter('beans')).toBe('bean')
    expect(app.removeLastLetter('r')).toBe('')
})