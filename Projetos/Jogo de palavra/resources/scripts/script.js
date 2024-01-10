const MAX_LETTER_PER_ROW = 5
const MAX_ATTEMPTS = 6

const KEY_BACKSPACE = 'Backspace'
const KEY_DELETE = 'Delete'
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

const gameInitialConfig = {
    currentLetterPosition: 1,
    currentRow: 1,
    database: [],
    currentGuess: '',
    rightGuess: ''
}

const getRandomWord = (wordList) => {
    const countWords = wordList.length
    const shuffleIndex = Math.floor(Math.random() * countWords)
    return wordList[shuffleIndex]
}

const getGameBoardLetter = (currentRow, currentLetterPosition) => {
    return document.querySelector(`.board .row${currentRow} .letter${currentLetterPosition}`)
}

const isBackspaceKeyPressed = (pressedKey) => {
    const backspaceAndDeleteKeys = [KEY_BACKSPACE, KEY_DELETE];
    return backspaceAndDeleteKeys.includes(pressedKey)
}

const isEnterKeyPressed = (pressedKey) => {
    return pressedKey === KEY_ENTER
}

const isAlphabeticLetter = (pressedKey) => {
    return pressedKey.length === 1 && /[A-Za-z]/.test(pressedKey)
}

const isValidKeyPressed = (pressedKey) => {
    return isBackspaceKeyPressed(pressedKey) || isEnterKeyPressed(pressedKey)
    || isAlphabeticLetter(pressedKey)
}

const isGuessInDatabase = (guess, database) => {
    return database.includes(guess.toLowerCase())
}

const isCurrentGuessEmpty = (currentGuess) => {
    return currentGuess === ''
}

const reachMaxLetterPerRow = (currentLetterPosition) => {
    return currentLetterPosition > MAX_LETTER_PER_ROW
}

const reachMaxAttempts = (currentRow) => {
    return currentRow > MAX_ATTEMPTS
}

const removeLastLetter = (currentGuess) => {
    return currentGuess.slice(0, currentGuess.length - 1)
}

const removeLetterFromBoard = (game) => {
    const {currentGuess, currentRow, currentLetterPosition} = game

    game.currentGuess = removeLastLetter(currentGuess)
    game.currentLetterPosition--

    const element = getGameBoardLetter(currentRow, currentLetterPosition - 1)
    element.textContent = ''

    return NOTIFICATION_BACKSPACE_KEY_PRESSED
}

const displayLetterOnTheBoard = (game, pressedKey) => {
    const {currentRow, currentLetterPosition} = game

    const element = getGameBoardLetter(currentRow, currentLetterPosition)
    element.textContent = pressedKey

    game.currentGuess += pressedKey
    game.currentLetterPosition++

    return NOTIFICATION_DISPLAY_LETTER_SUCCESSFULLY
}

const nextGuess = (game) => {
    game.currentRow++
    game.currentGuess = ''
    game.currentLetterPosition = 1

    return NOTIFICATION_ENTER_KEY_PRESSED
}

const checkGuess = (game) => {
    const {database, currentLetterPosition, currentGuess} = game
    if(isCurrentGuessEmpty(currentGuess)) {
        return NOTIFICATION_EMPTY_GUESS
    }

    if(!reachMaxLetterPerRow(currentLetterPosition)){
        return NOTIFICATION_INCOMPLETE_GUESS
    }

    if(!isGuessInDatabase(currentGuess, database)) {
        return NOTIFICATION_WORD_NOT_IN_DATABASE
    }

    return nextGuess(game)
}

const onKeyPressed = (pressedKey, game) => {
    const {currentLetterPosition, currentGuess, currentRow} = game

    if (reachMaxAttempts(currentRow)) {
        return NOTIFICATION_REACH_MAX_ATTEMPTS
    }

    if (!isValidKeyPressed(pressedKey)) {
        return NOTIFICATION_INVALID_PRESSED_KEY
    }

    if (isBackspaceKeyPressed(pressedKey) && !isCurrentGuessEmpty(currentGuess)){
        return removeLetterFromBoard(game)
    }

    if (isBackspaceKeyPressed(pressedKey) && isCurrentGuessEmpty(currentGuess)){
        return NOTIFICATION_BACKSPACE_WHEN_EMPTY_GUESS
    }

    if (isEnterKeyPressed(pressedKey)) {
        return checkGuess(game)
    }

    if (reachMaxLetterPerRow(currentLetterPosition)) {
        return NOTIFICATION_REACH_MAX_LETTERS_PER_ROW
    }

    return displayLetterOnTheBoard(game, pressedKey)
}

const loadWords = async () => {
    return fetch('./resources/assets/json/word-list.json')
        .then((response) => response.json())
        .then(({ words }) => words)
        .catch(() => [])
}

const isTestEnviroment = () => {
    return typeof process !== 'undefined'
        && process.env.NODE_ENV === 'test'
}

const start = () => {
    if(isTestEnviroment()) {
        module.exports = {
            getRandomWord,
            isBackspaceKeyPressed,
            isEnterKeyPressed,
            isAlphabeticLetter,
            isValidKeyPressed,
            isGuessInDatabase,
            isCurrentGuessEmpty,
            reachMaxLetterPerRow,
            reachMaxAttempts,
            removeLastLetter,
            removeLetterFromBoard,
            displayLetterOnTheBoard,
            nextGuess,
            checkGuess,
            onKeyPressed,
            loadWords,
            isTestEnviroment
        }

        return
    }

    window.onload = async () => {
        const database = await loadWords()

        const game = {...gameInitialConfig, database}
        console.log(database)
        console.log('palavra aleatoria e:', getRandomWord(database))

        document.addEventListener('keydown', (event) => onKeyPressed(event.key, game))
    }
}

start()