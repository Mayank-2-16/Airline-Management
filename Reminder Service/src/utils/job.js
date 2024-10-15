const cron = require('node-cron');

const setUpJobs = () => {
    cron.schedule('*/5 * * * *', () => {
        console.log('running a task every 5 minutes');
    });
}

module.exports = {
    setUpJobs
}