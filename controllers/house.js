var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

/**
 * GET /house
 * Login page.
 */
exports.getHouseListing = function (req, res) {
    const url = 'http://www.realtylink.org/prop_search/Summary.cfm?BCD=GV&areatitle=Vancouver%20West&ARPK=37,44,36,26,10105,41,21,32,30,28,23,33,22,39,24,43,29,40,34,853,31,35,42,27&imdp=&RSPP=5&AIDL=21&SRTB=P_Price&ERTA=false&MNAGE=0&MXAGE=200&MNBD=1&MNBT=1&PTYTID=5&MNPRC=200000&MXPRC=1000000&SCTP=RA'

    request(url, function(error, response, html){
        res.send(html)

        if(!error){

        }
    })
};