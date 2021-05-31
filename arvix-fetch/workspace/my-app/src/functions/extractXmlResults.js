const convert = require("xml-js");

const extractXMLResults = (xmlResults) => {
  const result = convert.xml2json(xmlResults, { compact: true, spaces: 4 });
  const resultJSON = JSON.parse(result);
  return resultJSON;
  //   console.log(resultJSON.feed.entry[0].title._text);
};

export default extractXMLResults;
