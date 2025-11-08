import { defineMastraProject } from '@mastra/core';
export default defineMastraProject({
    agents: {
        demoAgent: () => import('./src/mastra/index.js'),
    },
});
//# sourceMappingURL=mastra.config.js.map