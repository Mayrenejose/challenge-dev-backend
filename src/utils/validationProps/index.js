const fs =  require('fs')

const propsValidation = async(
    data, 
    path,
    props 
) => {

    let isValid = true

    for (const propName in props) {
        if (!props[propName]) {
            console.log(`The property ${propName} it's empty`)
            isValid = false
        }
    }

    if ( fs.existsSync(path) && data.some(product => product.code === props.code ) ) {
        console.log('duplicate code field')
        isValid = false
    }

    return isValid
}

module.exports = { propsValidation }
