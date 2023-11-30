const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
    const { id } = req.params;
    axios(URL + id)
    .then(({data}) => {
        const { name, gender, species, origin, image ,status } = data;
        const character = { id ,name, gender, species, origin, image ,status };

        return character.name
        ? res.json(character)
        : res.status(404).send("Character not found")
    })
    .catch((error) => {
        return res.status(500).send(error.message)
    })
}


module.exports = getCharById;