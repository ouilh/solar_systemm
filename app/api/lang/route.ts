import { NextRequest, NextResponse } from "next/server";
import { fetchTranslations } from "@/learn360ai/lang/translationStore";

export async function GET(request: NextRequest) {

    const { searchParams } = new URL(request.url);
    const language: string | null = searchParams.get('language');
    const keys: string[] = searchParams.getAll('keys');

    if (!language) {
        return NextResponse.json("Language parameter is missing", { status: 409 });
    }

    const translations = fetchTranslations(language, keys);

    /// TODO: KEEP UNTIL STABLE
    console.log(language)
    console.log(keys)
    console.log(translations)

    return NextResponse.json(Object.fromEntries(translations));
}
