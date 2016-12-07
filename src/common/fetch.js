//import Fetch from 'isomorphic-fetch';
//import { polyfill } from 'es6-promise';
import $ from 'jquery';
import _ from 'lodash';

const baseUrl = "http://192.168.0.108:8093/mock/";

const success = function(res){
		console.log('返回--:'+JSON.stringify(res));
	};
const error = function(res){
		console.log(res);
	};
let config = {

    type: 'JSONP',

    url: '',

    jsonp: "callback",

	dataType : 'jsonp',

	data: '',

	success: success,

	error:error
};

export const fetch = function (url,params){
	let data = '';
	_.each(params,function(v,k){
		data += k + '=' + v + '&';
	});
	config.url = baseUrl + url;
	config.data = data.substr(0,data.length -1);
	console.log('入参--:'+config.data);
	$.ajax(config);
};
