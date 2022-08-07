let pallete = document.querySelectorAll('.color')
let btnClean = document.querySelector('#clear-board')
let square = document.querySelectorAll('.pixel')
let child = document.querySelector('#pixel-board')
let btnGenerate = document.querySelector('#generate-newBoard')
let btnChange = document.querySelector('#generate-board')
let inputValue = document.querySelector('#board-newSize')
let inputChangeValue = document.querySelector('#board-size')
let newSquarePixel = document.querySelectorAll('.newPixel');
let color = 'black';
var colorArray = [
    '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
];

square.forEach(item => {
    item.style.backgroundColor = 'white'
})

function initializeColors() {
    pallete.forEach(item => {
        let randomNumber = Math.floor(Math.random() * colorArray.length)
        if (item.classList[1] != 'selected') {
            item.style.backgroundColor = colorArray[randomNumber]
            colorArray.splice(randomNumber, 1)
        } else {
            item.style.backgroundColor = 'black'
        }
    })

    pallete.forEach(item => {
        item.addEventListener('click', changeClass)
    })
}

function changeClass(e) {
    pallete.forEach(takeof => {
        if (takeof != e.target) {
            takeof.classList.remove('selected')
        } else {
            e.target.classList.add('selected')
            color = e.target.style.backgroundColor
        }
    })
}

btnChange.addEventListener('click', changeThisSquare)

function changeThisSquare() {
    if (inputChangeValue.value < 5 && inputChangeValue.value > 0) {
        inputChangeValue.value = 5
    } else if (inputChangeValue.value > 50) {
        inputChangeValue.value = 50
    } else if (inputChangeValue.value == 0) {
        alert('Board inválido!')
    }

    while (child.firstChild){
        child.removeChild(child.firstChild)
    }

    if (inputChangeValue.value) {
        for (i = 0; i < inputChangeValue.value; i++) {
            let rowPixel = document.createElement('tr')
            child.appendChild(rowPixel)
            for (l = 0; l < inputChangeValue.value; l++) {
                let colPixel = document.createElement('th')
                colPixel.classList.add('pixel')
                colPixel.style.backgroundColor = 'white';

                rowPixel.appendChild(colPixel)
            }
        }
        let lineBreak = document.createElement('br')
        child.appendChild(lineBreak)
    }

}


function changeColorPixel(e) {
    square.forEach(item => {
        item.addEventListener('click', e => {
            e.target.style.backgroundColor = color
        })
    })
}

function changeColorNewPixel(e) {
    newSquarePixel.forEach(item => {
        item.addEventListener('click', e => {
            e.target.style.backgroundColor = color
        })
    })
}


btnClean.addEventListener('click', cleanPixel)

function cleanPixel() {
    square.forEach(item => {
        item.style.backgroundColor = 'white'
    })

    newSquarePixel.forEach(item => {
        item.style.backgroundColor = 'white'
    })
}

btnGenerate.addEventListener('click', newSquare)

function newSquare() {
    if (inputValue.value < 5 && inputValue.value > 0) {
        inputValue.value = 5
    } else if (inputValue.value > 50) {
        inputValue.value = 50
    } else if (inputValue.value == 0) {
        alert('Board inválido!')
    }

    if (inputValue.value) {
        let table = document.createElement('table')
        table.classList.add('noSpace')
        document.body.appendChild(table)
        for (i = 0; i < inputValue.value; i++) {
            let rowPixel = document.createElement('tr')
            table.appendChild(rowPixel)
            for (l = 0; l < inputValue.value; l++) {
                let colPixel = document.createElement('th')
                colPixel.classList.add('newPixel')
                rowPixel.appendChild(colPixel)
            }
        }
        let lineBreak = document.createElement('br')
        document.body.appendChild(lineBreak)
    }

    newSquarePixel = document.querySelectorAll('.newPixel');
    newSquarePixel.forEach(item => {
        item.style.backgroundColor = 'white'
    })
    changeColorNewPixel();
}

initializeColors();
changeColorPixel();