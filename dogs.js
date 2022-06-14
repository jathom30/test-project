const basePath = "https://dog.ceo/api"

const dogsSelect = document.getElementById('dog-breeds')
const dogDisplay = document.getElementById('dog-display')
const numberOfImages = document.getElementById('number-of-images')

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
      `<option>Select a breed</option>`,
      ...breedOptions
    ]
    dogsSelect.disabled = false
  })
}

getAllBreeds()

const getByBreed = (breed) => {
  const formattedBreed = breed.split(' ').reverse().join('/')

  dogDisplay.innerHTML = "Loading..."

  fetch(`${basePath}/breed/${formattedBreed}/images/random/${numberOfImages.value}`)
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
  getByBreed(event.value)
}



var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const shoppingCartTotal = 0.2 + 0.1


const formattedTotal = formatter.format(shoppingCartTotal)
console.log(formattedTotal)