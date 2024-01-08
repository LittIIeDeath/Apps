const getRandomWord = (wordList) => {
    const countWords = wordList.length
    const shuffleIndex = Math.floor(Math.random() * countWords)
    return wordList[shuffleIndex]
}

const isTestEnviroment = () => {
    return typeof process !== 'undefined'
        && process.env.NODE_ENV === 'test'
}

const loadWords = async () => {
    return fetch('./resources/assets/json/word-list.json')
        .then((response) => response.json())
        .then(({ words }) => words)
        .catch(() => [])
}

const start = () => {
    if(isTestEnviroment()) {
        module.exports = {
            getRandomWord,
            isTestEnviroment,
            loadWords
        }

        return
    }

    window.onload = async () => {
        const dataBase = await loadWords()
        console.log(dataBase)
        console.log('palavra aleatoria e:', getRandomWord(dataBase))
    }
}

start()