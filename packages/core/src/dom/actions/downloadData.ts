export const downloadData = (config: {
    content: string;
    filename: string;
    mimeType: string;
}) => {
    const { content, filename, mimeType } = config;
    const a = document.createElement("a");
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    a.setAttribute("href", url);
    a.setAttribute("download", filename);
    a.click(); // Start downloading
};
