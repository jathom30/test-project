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

// takes a breed (string) and a number of images (int) and updates dogDisplay inner HTML with images with api
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

const handleSelectBreed = (dogBreedEvent) => {
  // dogBreedEvent.value == a breed of dog
  getByBreed(dogBreedEvent.value, numberOfImages.value)
  if (numberOfImages.disabled) {
    numberOfImages.disabled = false
  }
}

const handleSelectImageCountOfBreed = (imageCountEvent) => {
  // imageCountEvent.value == image count
  getByBreed(dogsSelect.value, imageCountEvent.value)
}

const getRandomImage = () => {
  fetch(`${basePath}/breeds/image/random`)
  .then(res => {
    if (res.ok) {
      return res.json()
    }
    throw new Error('Something went wrong')
  })
  .then(data => {
    if (data.status !== 'success') { return }
    // data.message returns a url so we split on "/" to get the breed name
    const breedName = data.message.split('/')[4]
    const formattedBreedName = breedName.split('-').reverse().join(' ')
    dogDisplay.innerHTML = `
    <div class="random-image-container">
    <h2 class="random-image-container__title">${formattedBreedName}</h2>
    <img class="dog-image dog-image--random" src="${data.message}" />
    </div>
    `
  })
  .catch(err => {
    console.error(err)
    dogDisplay.innerHTML = `There was an error`
  })
}
