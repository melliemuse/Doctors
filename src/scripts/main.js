const createDoctorObject = (name, specialty, address) => {
    return {
        name: name,
        specialty: specialty,
        address: address
    }
}

console.log(createDoctorObject('Dr. Spock', 'Internal Medicine', '1500 Lansing'))

let BowWowKennels = []

const createPetObject = (name, breed) => {
    const petObject = {
        name: name,
        breed: breed
    }
    BowWowKennels.push(petObject)
    return BowWowKennels
}

console.log(createPetObject('Lassie','collie'))
console.log(createPetObject('Harvey','bunny'))
console.log(createPetObject('Crow','black lab'))