import $ from 'jquery';
import _ from 'lodash';

const baseUrl = "http://192.168.0.108:8093/mock/";

let config = {
    method: "POST",
    mode: "cors",
    body: ""
};

export const fetchData = function(url, params) {
    let data = '';
    _.each(params, function(v, k) {
        data += k + '=' + v + '&';
    });
    url = baseUrl + url;
    config.body = data.substr(0, data.length - 1);
    console.log('入参--:' + config.body);
    fetch(url, config)
        .then(function(res) {
            res.json().then(function(data) {
                console.log(data);
            })
        });
};
