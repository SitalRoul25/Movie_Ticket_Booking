const router = require("express").Router();
const verify = require("./verifyToken");
const Listing = require("../model/MovieModel");



router.get("/", async(req, res) => {
    try {
        const listing = await Listing.find();
        res.send(listing);
        // res.status(200).json({
        //     status : 0,
        //     message : "Data Fetch Successfully",
        //     data : listing
        // })
    } catch (error) {
        res.status(400).json({
            status: 1,
            message: error
        })
    }
});

// Add new Movie listing
router.post("/add-movie", verify, async(req, res) => {
    const listing = new Listing({
        mid: req.body.mid,
        moviename: req.body.moviename,
        director: req.body.director,
        cast1: req.body.cast1,
        cast2: req.body.cast2,
        language: req.body.language,
        desc: req.body.desc,
        movietype: req.body.movietype,
        prod: req.body.prod
    });
    try {
        const savedListing = await listing.save();
        res.status(200).send(savedListing);
    } catch (error) {
        res.status(400).send(error);
    }
})

// Single Movie Listing
router.get("/:listingId", async(req, res) => {
    try {
        const listing = await Listing.findById(req.params.listingId);
        // res.status(200).json({
        //     status : 0,
        //     message : "Data Fetch Successfully",
        //     data : listing
        // })
        res.status(200).send(listing);
    } catch (error) {
        res.status(400).json({
            status: 1,
            message: error
        })
    }
})

// Update Movie Listing
router.put("/:listingId", verify, async(req, res) => {
    try {
        const listing = {
            mid: req.body.mid,
            moviename: req.body.moviename,
            director: req.body.director,
            cast1: req.body.cast1,
            cast2: req.body.cast2,
            language: req.body.language,
            desc: req.body.desc,
            movietype: req.body.movietype,
            prod: req.body.prod
        };

        const updatedListing = await Listing.findByIdAndUpdate({ _id: req.params.listingId }, listing);
        res.status(200).json({
            status: 0,
            message: "Data Updated Successfully",
            data: {
                old_data: updatedListing,
                new_data: listing
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 1,
            message: error
        })
    }
})

// Delete Listing
router.delete("/:listingId", verify, async(req, res) => {
    try {
        const removeListing = await Listing.findByIdAndDelete(req.params.listingId);
        // res.status(200).json({
        //     status : 0,
        //     message : "Data Deleted Successfully",
        //     data : removeListing
        // })
        res.status(200).send(removeListing);
    } catch (error) {
        res.status(400).json({
            status: 1,
            message: error
        })
    }
})

module.exports = router;