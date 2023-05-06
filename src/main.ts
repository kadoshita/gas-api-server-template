// eslint-disable-next-line no-var
declare var global: any;

export const doGet = (e: GoogleAppsScript.Events.DoGet) => {
    const res = ContentService.createTextOutput();
    res.setMimeType(ContentService.MimeType.JSON);
    const obj = {
        status: "OK",
    };
    res.setContent(JSON.stringify(obj));
    return res;
};

global.doGet = doGet;
