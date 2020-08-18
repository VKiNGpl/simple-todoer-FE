const getIdFromQuery = require('./shared');

jest.mock('./shared', () => ({
    parsedParts: jest.fn(),
}));

test('Returns id: 1 for mock query', () => {
    expect(getIdFromQuery()).toBe('1');
});