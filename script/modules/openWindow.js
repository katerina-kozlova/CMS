export const openWindow = (imageUrl) => {
    const win = window.open('', '', 'width=800,height=600');

    win.document.write(`
        <html>
            <head>
                <title>Изображение</title>
            </head>
            <body>
                <img src="${imageUrl}" alt="pic" style="max-width: 100%; max-height: 100%;">
            </body>
        </html>
    `);

    win.document.close();
}