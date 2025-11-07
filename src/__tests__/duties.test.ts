import { database } from "../config/pg_db";
import { getDuties, insertDuty, updateDuty } from "../duties/duties.service";

jest.mock('../config/pg_db');

const mockedValues = [
    {id: '502910ad-28ee-4e1f-b0c3-aca0931a4575', name: 'Testing'},
    {id: '58a0ca9f-765b-4d34-91f6-932bf945a358', name: 'Testing 2'}
];

describe('getDuties', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return all the duties', async () => {

        (database.query as jest.Mock).mockResolvedValueOnce({rows: mockedValues});

        const result = await getDuties();

        expect(result).toEqual(mockedValues);
    });

    it('should create a duty and return the value', async () => {
        jest.spyOn(crypto, 'randomUUID').mockReturnValue('502910ad-28ee-4e1f-b0c3-aca0931a4575');
        (database.query as jest.Mock).mockResolvedValueOnce({rows: [mockedValues[0]]});

        const result = await insertDuty({name: mockedValues[0].name});

        expect(result).toEqual(mockedValues[0]);
    });

    it('should update a duty and return the result', async () => {
        (database.query as jest.Mock).mockResolvedValueOnce({rows: [mockedValues[0]]});

        const result = await updateDuty(mockedValues[0]);

        expect(result).toEqual(mockedValues[0]);
    })

    it('should throw error when get query fails', async () => {
        (database.query as jest.Mock).mockRejectedValueOnce(new Error('DB Error'));

        await expect(getDuties())
            .rejects
            .toThrow('Error getting data');
    })

    it('should throw error when insert query fails', async () => {
        (database.query as jest.Mock).mockRejectedValueOnce(new Error('DB Error'));

        await expect(insertDuty({name: mockedValues[0].name}))
            .rejects
            .toThrow('Error inserting data');
    })

    it('should throw error when update query fails', async () => {
        (database.query as jest.Mock).mockRejectedValueOnce(new Error('DB Error'));

        await expect(updateDuty(mockedValues[0]))
            .rejects
            .toThrow('Error updating duty');
    })
})