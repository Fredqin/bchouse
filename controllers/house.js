var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

/**
 * Private function to update house listing in mongodb server
 *
 * POST /api/house
 * Login page.
 */
exports.getHouseListing = function (req, res) {

    // 20 is the number of listing you can view per time
    const subarea_selection_url = 'http://www.realtylink.org/prop_search/AreaSelect.cfm?AreaID=' + req.body.AreaID;

    // find vancouver list
    request(subarea_selection_url, function (error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);

            // find selection
            var options = $('select[name="AreaID"]').children();

            var subAreaIDList = [];
            options.filter(function () {
                var data = $(this);
                var subAreaID = data.attr('value');
                subAreaIDList.push(subAreaID);
            });

            var listing_url = 'http://www.realtylink.org/prop_search/Summary.cfm?BCD=GV&imdp=11&RSPP=5&SRTB=P_Price&ERTA=True&MNAGE=0&MXAGE=200&MNBD=0&MNBT=0&PTYTID=1&MNPRC=200000&MXPRC=900000&SCTP=RS' +
                    '&AIDL=' + subAreaIDList.join(',');

            request(listing_url, function (error, response, html) {
                if (!error) {
                    console.log(html)
                    res.send(html)
                }
            })
        }
    })
};