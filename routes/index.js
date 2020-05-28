var express = require('express');
var router = express.Router();
const ytdl = require('ytdl-core');

router.get('/download', (req, res) => {
    ytdl.getBasicInfo(req.query.url, {}, (err, info) => {
        if (err) {
            res.send("Sorry ! can't download this link.");
        }
        var title = info.player_response.videoDetails.title;
        if (req.query.format == "mp3") {
            res.header('Content-Disposition', "attachment; filename = " + title + ".mp3");
            ytdl(req.query.url, {
                format: 'mp3',
                filter: 'audioonly'
            }).pipe(res);
        }
        else if (req.query.format == "mp4") {
            res.header('Content-Disposition', "attachment; filename = " + title + ".mp4");
            ytdl(req.query.url, {
                format: 'mp4',
            }).pipe(res);
        }
    });
});

module.exports = router;