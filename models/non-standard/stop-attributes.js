module.exports = {
  filenameBase: 'stop_attributes',
  schema: [
    {
      name: 'id',
      type: 'serial',
      primary: true
    },
    {
      name: 'stop_id',
      type: 'varchar(255)',
      required: true,
      index: true
    },
    {
      name: 'stop_city',
      type: 'varchar(255)'
    }
  ]
};
