import { doGet } from "../src/main";

describe("main", () => {
    let setContentMock: jest.Mock;
    beforeEach(() => {
        setContentMock = jest.fn();
        (global as any).ContentService = {
            MimeType: { JSON },
            createTextOutput: jest.fn(() => ({
                setMimeType: jest.fn(),
                setContent: setContentMock,
            })),
        };
    });

    afterEach(() => {
        (global as any).ContentService = {};
        setContentMock.mockRestore();
    });

    test("receive request", () => {
        const event: GoogleAppsScript.Events.DoGet =
            {} as GoogleAppsScript.Events.DoGet;
        doGet(event);
        const expectString = JSON.stringify({ status: "OK" });
        expect(setContentMock).toBeCalledWith(expectString);
    });
});
