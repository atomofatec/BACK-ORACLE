const Expertise = require("../models/listagensGerais.model");

const getExpertisesByTrack = async (req, res) => {
    const { track_id } = req.params;
    try {
        const expertises = await Expertise.getExpertisesByTrackId(track_id);
        res.json(expertises);
    } catch (error) {
        console.error("Error fetching expertises:", error);
        res.status(500).send("Server error");
    }
};

const getQualificationsByExpertiseId = async (req, res) => {
    const { expertise_id } = req.params;
    try {
        const qualifications = await Expertise.getQualificationsByExpertiseId(
            expertise_id
        );
        res.json(qualifications);
    } catch (error) {
        console.error("Error fetching qualifications:", error);
        res.status(500).send("Server error");
    }
};

const getExpertiseProgressByUserAndTrack = async (req, res) => {
    const { user_id, track_id } = req.body;
    try {
        const expertiseProgress =
            await Expertise.getExpertiseProgressByUserAndTrack(
                user_id,
                track_id
            );
        res.json(expertiseProgress);
    } catch (error) {
        console.error(
            "Error fetching expertise progress by user and track:",
            error
        );
        res.status(500).send("Server error");
    }
};

module.exports = {
    getExpertisesByTrack,
    getQualificationsByExpertiseId,
    getExpertiseProgressByUserAndTrack,
};