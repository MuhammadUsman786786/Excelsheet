import * as _ from 'lodash'

export const convertArraysToObject = (dataKeys, values) => {
	const newObject = {};
	_.forEach(dataKeys, (_, i) => {
		newObject[dataKeys[i]] = values[i]
	});
	return newObject
};


export const getFormattedDataList = (dataList) => {
	const headers = dataList.shift();
	const body = [ ...dataList ];
	const formattedData = _.map(body, (item) => {
		return convertArraysToObject(headers, item)
	});
	
	const formattedHeaders = _.map(headers, (item) => {
		return {id: item, header: [ {text: item} ]}
	})
	
	return {columns: formattedHeaders, dataList: formattedData}
};

