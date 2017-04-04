// import $ from 'jquery';
// import * as newJq from 'jquery';
//
// import {
//     TEST_NAME
// } from './a';
// import User from './b';
// import * as b from './b';
// newJq.ajax();
// console.log(TEST_NAME);
// var user = new User();

var apiCall = new Promise(function(resolve, reject) {
    $.ajax({
        url: 'http://ip.jsontest.com/',
        type: 'GET',
        crossDomain: true,
        success: function(data) {
            resolve(data.ip);
        },
        error: function() {
            reject();
        }
    });
});


apiCall
    .then(function(ip) {
        console.log(`IP: ${ip}`);
    })
    .catch(function() {
        console.warn('Api call failed!');
    });
