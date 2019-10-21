
const options = []

document.querySelectorAll('#nomLMyr > option').forEach((option) => {
    if (options.includes(option.value)) option.remove()
    else options.push(option.value)
})