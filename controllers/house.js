var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

/**
 * GET /house
 * Login page.
 */
exports.getHouseListing = function (req, res) {
    const url = 'http://www.realtylink.org/prop_search/Summary.cfm?BCD=GV&imdp=11&RSPP=5&AIDL=248%2C249%2C250%2C251%2C253%2C254%2C255%2C256%2C257%2C258%2C259%2C260%2C261%2C856%2C857%2C858%2C262%2C263%2C264%2C265%2C266%2C267%2C268%2C269%2C270%2C271%2C272%2C273%2C274%2C275%2C276%2C277%2C278%2C279%2C280%2C281%2C282&SRTB=P_Price&ERTA=True&MNAGE=0&MXAGE=200&MNBT=0&MNBD=0&PTYTID=2&MNPRC=200000&MXPRC=900000&SCTP=RS&ARPK=&AreaTitle=&agentid=&ComID=&rowp=46&vse.x=3&vse.y=4'

    request(url, function(error, response, html){
        res.send(html)

        if(!error){

        }
    })
};