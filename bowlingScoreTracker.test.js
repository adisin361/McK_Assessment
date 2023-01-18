const { trackScore } = require('./bowlingScoreTracker');
describe('Bowling Scores', () => {
    it('Should return 90 as the score', () => {
        const result = trackScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
        expect(result).toBe(90);
    });

    it('Should return 30 as the score', () => {
        const result = trackScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]);
        expect(result).toBe(30);
    });

    it('Should return 30 as the score', () => {
        const result = trackScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        expect(result).toBe(16);
    });
});