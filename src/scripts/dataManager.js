let uniqueEducationId = 0;
let uniqueJobId = 0;

const getNextEducationId = () => ++uniqueEducationId;
const getNextJobId = () => ++uniqueJobId;

export { getNextEducationId, getNextJobId }