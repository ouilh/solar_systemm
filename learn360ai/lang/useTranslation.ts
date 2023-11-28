// useTranslation.js
import { useState, useEffect } from 'react';
import { fetchTranslations } from './translationStore';


// Get the initial language from storage or a default value
function getInitialLanguage() {
    /// TODO: We may try to infer the default language from browser, cookies...
    return 'en'
}


function useTranslation(initialKeys: Array<string>) {

    const [keys, setKeys] = useState<Array<string>>(initialKeys);
    const [translations, setTranslations] = useState<Map<string, string>>(new Map<string, string>());
    const [currentLanguage, setCurrentLanguage] = useState<string>(getInitialLanguage());


    const fetchTranslationsAsync = async () => {
        try {
            const params = new URLSearchParams({
                language: currentLanguage,
            });

            keys.forEach((key) => {
                params.append('keys', key);
            });

            const response = await fetch(`/api/lang?${params.toString()}`);
            //const response = await fetch(`/api/lang?language=${currentLanguage}&keys=${keys.join(',')}`);
            const fetchedTranslations = await response.json();
            const translationsMap = new Map<string, string>(Object.entries(fetchedTranslations));
            setTranslations(translationsMap);
        }
        catch (error) {
            console.error('Failed to fetch translations:', error);
        }
    };

    useEffect(() => {
        fetchTranslationsAsync();
        console.log(translations)
        // Fetch translations on component mount or language change
    }, [currentLanguage]);

    // Function to change the current language
    const changeLanguage = (language: string) => {
        setCurrentLanguage(language);
    };

    // Function to update the keys
    const changeKeys = (keys: Array<string>) => {
        setKeys(keys);
    };

    // Function to get translation
    const getTranslation = (key: string) => {
        if (keys.includes(key))
            return translations.get(key)
        else
            return 'MISSING_TRANSLATION'
    };

    return { currentLanguage, changeLanguage, changeKeys, getTranslation };
}

export default useTranslation;
