import * as fs from "fs";
import * as path from "path";

export class FileHelpers {
    public static getFilesFromFolderRecursively(folderPath: string): string[] {
        let result = [] as string[];

        let fileNames = fs.readdirSync(folderPath);

        for (let fileName of fileNames) {
            let filePath = path.join(folderPath, fileName);

            if (!fs.existsSync(filePath)) {
                continue;
            }

            let stats = fs.lstatSync(filePath);

            if (stats.isDirectory()) {
                // treat .app folder as a file
                // because going recursively through the app folder (on macOS) would cause longer scan time
                if (filePath.endsWith(".app")) {
                    result.push(filePath);
                }
                else {
                    result = result.concat(FileHelpers.getFilesFromFolderRecursively(filePath));
                }
            }
            else if (stats.isFile()) {
                result.push(filePath);
            }
        }

        return result;
    }

    public static getFilesFromFolder(folderPath: string) {
        let fileNames = fs.readdirSync(folderPath);

        let filePaths = fileNames.map((f) => {
            return path.join(folderPath, f);
        });

        let accessibleFiles = [];

        for (let filePath of filePaths) {
            try {
                fs.lstatSync(filePath);
                accessibleFiles.push(filePath);
            }
            catch (err) {
                // do nothing
            }
        }

        return accessibleFiles;
    }

    public static getFilesFromFoldersRecursively(folderPaths: string[]): string[] {
        let result = [] as string[];

        for (let folderPath of folderPaths) {
            result = result.concat(FileHelpers.getFilesFromFolderRecursively(folderPath));
        }

        return result;
    }
}