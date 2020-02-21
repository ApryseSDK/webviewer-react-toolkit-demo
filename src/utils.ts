import { File } from '@pdftron/webviewer-react-toolkit';

/**
 * Takes a file at `source` and splits it into an array of `File`, one for each
 * page of the original file.
 * @param source The source of the file to split.
 */
export async function splitPages(source: string): Promise<File[]> {
  const newFiles = [];
  const document = await window.CoreControls.createDocument(source);

  // Here, we split up the loaded PDF into multiple files, one for each page.
  for (let i = 1; i <= document.getPageCount(); i++) {
    newFiles.push(
      new File({
        // Add page number to beginning of file name.
        name: `${i}_${document.getFilename()}`,
        fileObj: async () => {
          const xfdf = await document.extractXFDF([i]);
          const data = await document.extractPages([i], xfdf.xfdfString);
          const arr = new Uint8Array(data);
          return new Blob([arr], { type: 'application/pdf' });
        },
      }),
    );
  }

  return newFiles;
}
