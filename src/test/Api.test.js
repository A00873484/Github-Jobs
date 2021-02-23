import { searchForJobs } from '../utils/api'

describe('searchForJobs', () => {
    it('local server environment activated', async () => {
        expect.assertions(1);
        const data = await searchForJobs({ description: 'developer' });
        expect(data.length).toBeGreaterThan(0);
    });
})