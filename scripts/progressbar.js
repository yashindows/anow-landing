const percentArray = [90, 80, 95]
const progresses = document.querySelectorAll('.progress')

for (let i = 0; i < percentArray.length; i++) {
  progresses[i].style.width = `${percentArray[i]}%`
}
