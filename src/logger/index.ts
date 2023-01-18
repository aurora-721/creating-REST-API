import logger from "pino";
import dayjs from "dayjs";

// setting logging service
// contains formats for logging
// formats logging with pino

const log = logger({
    transport: {
        target: 'pino-pretty'
    },
    base: {
        pid: false,     // emits the process id from the log
    },
    timestamp: () => `,"time": "${dayjs().format()}"`       // formats the timestamp with dayjs
});

export default log;