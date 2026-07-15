function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.getDataAsString());

  sheet.appendRow([
    new Date().toISOString(),
    data.name || '',
    data.email || '',
    data.subject || '',
    data.message || ''
  ]);

  return ContentService.createTextOutput(JSON.stringify({ success: true }));
}
