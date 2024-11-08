const db = require('../config');  


const getHistoricalData = async (req, res) => {
  const { start, end } = req.query;
  console.log(`Start: ${start}, End: ${end}`); // แสดงค่า start และ end เพื่อตรวจสอบ

  try {
    const data = await db('sensor_data')
      .whereBetween('timestamp', [start, end])
      .orderBy('timestamp', 'asc');
    
    res.json(data);
  } catch (error) {
    console.error('Error fetching historical data:', error);
    res.status(500).send('Error fetching data');
  }
};

module.exports = getHistoricalData;
