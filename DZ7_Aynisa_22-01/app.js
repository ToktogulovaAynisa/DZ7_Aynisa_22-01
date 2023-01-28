const activeColor = prompt('Выберите цвет')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

switch (activeColor) {
    case 'красный':
    case 'Красный':
        red.classList.add('active')
        break
    case 'желтый':
    case 'Желтый':
        yellow.classList.add('active')
        break
    case 'зеленый':
    case 'Зеленый':
        green.classList.add('active')
        break
    default:
        alert('Введите правильный цвет!!! (Красный, Желтый, Зеленый)')
}