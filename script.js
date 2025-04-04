const addBtn = document.getElementById("addTodo")
const input = document.getElementById("myInput")
const containerEl = document.querySelector(".container")

addBtn.addEventListener("click", function () {
    const inputValue = input.value
    console.log(inputValue)

    if (inputValue.trim() !== "") {
        const divEl = document.createElement("div")
        divEl.innerHTML = inputValue
        divEl.classList.add("list")
        containerEl.appendChild(divEl)
        input.value = ""
    }

})
