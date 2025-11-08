import { demoAgent } from './agent.js';
async function runDemo() {
    const result = await demoAgent.generate([
        {
            role: 'user',
            content: 'Say hello in one sentence.',
        },
    ]);
    console.log(result.text);
}
runDemo().catch((error) => {
    console.error('Agent run failed:', error);
});
//# sourceMappingURL=index.js.map