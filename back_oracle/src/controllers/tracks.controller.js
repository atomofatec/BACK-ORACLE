const { getAllTracksFromDB } = require('../models/tracks.model');

async function getAllTracks(req, res) {
    try {
        const tracks = await getAllTracksFromDB();
        res.json(tracks);
    } catch (error) {
        console.error("Erro ao buscar tracks:", error);
        res.status(500).json({ error: 'Erro ao buscar tracks' });
    }
}

module.exports = {
    getAllTracks
};