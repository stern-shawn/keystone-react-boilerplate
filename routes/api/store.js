const axios = require('axios');
const config = require('../../env.json');

/**
 * Get the list of store items and their details from Square
 *
 * @return {object|null} Returns either the list JSON, or request error
 */
exports.storeItems = async (req, res) => {
  // Bring in authorization details specific to this account
  const accessToken = config.SQUARE_ACCESS_TOKEN;
  const location = config.SQUARE_LOCATION;
  const url = `https://connect.squareup.com/v1/${location}/items`;

  try {
    const data = await axios.get(url, { headers: { Authorization: `Bearer ${accessToken}` } });
    res.send(data.data);
  } catch (err) {
    res.sendStatus(500);
  }
}
