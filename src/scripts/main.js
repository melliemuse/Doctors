const createDoctorObject = (name, specialty, address) => {
    return {
        name: name,
        specialty: specialty,
        address: address
    }
}

console.log(createDoctorObject('Dr. Spock', 'Internal Medicine', '1500 Lansing'))

const createPetObject = (name, breed) => {
    return {
        name: name,
        breed: breed
    }
    
}