module.exports = async function (error, client) {
  client.logger.logFrom(error, "LAVAERROR");
};