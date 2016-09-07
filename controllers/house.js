var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

/**
 * GET /api/house
 * Login page.
 */
exports.getHouseListing = function (req, res) {

    // 20 is the number of listing you can view per time
    const vancouver_area_listing_url = 'http://www.realtylink.org/prop_search/AreaSelect.cfm?AreaID=2';

    // find vancouver list
    request(vancouver_area_listing_url, function (error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);

            // find selection
            var options = $('select[name="AreaID"]').children();
            options.filter(function () {
                var data = $(this);
                console.log(data.html())

            });
        }
    })
};