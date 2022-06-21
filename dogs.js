const basePath = "https://dog.ceo/api"

const dogsSelect = document.getElementById('dog-breeds')
const dogDisplay = document.getElementById('dog-display')
const numberOfImages = document.getElementById('number-of-images')

numberOfImages.disabled = true

const getAllBreeds = () => {
  fetch(`${basePath}/breeds/list/all`)
  .then(res => res.json())
  .then(data => {
    const breedObject = data.message
    const breeds = Object.keys(breedObject)

    const allBreeds = breeds.map(breed => {
      if (breedObject[breed].length > 0) {
        const subBreeds = breedObject[breed]

        const subBreedStr = subBreeds.map(subBreed => (
          `${subBreed} ${breed}`
        ))
        return subBreedStr
      } else {
        return breed
      }
    }).flat().sort()

    const breedOptions = allBreeds.map(breed => (
      `<option value="${breed}">${breed}</option>`
    ))
    dogsSelect.innerHTML = [
      `<option selected disabled hidden>Select a breed</option>`,
      ...breedOptions
    ]
    dogsSelect.disabled = false
  })
}

getAllBreeds()

const getByBreed = (breed, number) => {
  const formattedBreed = breed.split(' ').reverse().join('/')

  dogDisplay.innerHTML = "Loading..."

  fetch(`${basePath}/breed/${formattedBreed}/images/random/${number}`)
  .then(res => res.json())
  .then(data => {
    const images = data.message
    const dogImages = images.map(image => (
      `<img class="dog-image" src="${image}" />`
    )).join('')
    dogDisplay.innerHTML = dogImages
  })
}

const handleSelectBreed = (event) => {
  // event.value == a breed of dog
  getByBreed(event.value, numberOfImages.value)
  if (numberOfImages.disabled) {
    numberOfImages.disabled = false
  }
}

const handleSelectImageCountOfBreed = (event) => {
  // event.value == image count
  getByBreed(dogsSelect.value, event.value)
}
