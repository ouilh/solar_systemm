import fs from 'fs';
import path from "path";


export function fetchTranslations(language: string, keys: Array<string> | null = null): Map<string, string> {

    const translations: Map<string, string> = new Map<string, string>();
    //const filePath = `@/learn360ai/lang/translations/content.${language}.json`;
    const filePath = path.join(process.cwd(), 'learn360ai', 'lang', 'translations', `content.${language}.json`);

    try {
        const fileData = fs.readFileSync(filePath, 'utf8');
        const languageTranslations = JSON.parse(fileData);

        if (keys) {
            Object.entries(languageTranslations).forEach(([key, value]) => {
                if (keys.includes(key)) {
                    translations.set(key, value as string);
                }
            });
        }
        else {
            Object.entries(languageTranslations).forEach(([key, value]) => {
                translations.set(key, value as string);
            });
        }


    } catch (error) {
        console.error(`Failed to fetch translations for language '${language}':`, error);
    }

    return translations;
}