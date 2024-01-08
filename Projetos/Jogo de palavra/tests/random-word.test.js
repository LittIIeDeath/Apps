const app = require('../resources/scripts/script.js')

describe('Get one random word', () => {
    test('should return the first word with 0.1 mock response', () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.1);
        expect(app.getRandomWord(['allow', 'agree'])).toBe('allow')
    })

    test('should return the first word with 0.4 mock response', () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.4);
        expect(app.getRandomWord(['allow', 'agree'])).toBe('allow')
    })

    test('should return the second word with 0.5 mock response', () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
        expect(app.getRandomWord(['allow', 'agree'])).toBe('agree')
    })

    test('should return the second word of list with 2 itens', () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.6);
        expect(app.getRandomWord(['allow', 'agree'])).toBe('agree')
    })

    test('should return the third word of list with 4 itens', () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.6);
        expect(app.getRandomWord(['allow', 'agree', 'candy', 'sorry'])).toBe('candy')
    })

    test('should return the third word of list with 4 itens', () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.7);
        expect(app.getRandomWord(['allow', 'agree', 'candy', 'sorry'])).toBe('candy')
    })

    test('should return the last word of list with 4 itens', () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.8);
        expect(app.getRandomWord(['allow', 'agree', 'candy', 'sorry'])).toBe('sorry')
    })

    test('should return the first word of list with 4 itens', () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.1);
        expect(app.getRandomWord(['allow', 'agree', 'candy', 'sorry'])).toBe('allow')
    })

    test('should return the last word of list with 8 itens', () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.9);
        expect(app.getRandomWord(['allow', 'agree', 'candy', 'sorry', 
                                'beach', 'beans', 'being', 'below'])).toBe('below')
    })
})