import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from "openai";
import { ChatCompletion } from 'openai/resources/chat';
import { APIError } from 'openai';


const openai = new OpenAI({
    apiKey: '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',
});

export async function GET(): Promise<NextResponse> {
    return NextResponse.json({ message: 'api/ai says hello !' })
}

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        // Parse the incoming request data
        const requestData = await request.json();

        // Log the requestData for debugging purposes
        console.info('requestData:', JSON.stringify(requestData));

        const { domain, level, answerLength } = requestData;
        if (!domain || !level || !answerLength) {
            return NextResponse.json({ error: "Domain or Level is missing" }, { status: 400 });
        }

        let conversationMessages = requestData.messages;
        if (!conversationMessages) {
            return NextResponse.json({ error: "Message content is missing" }, { status: 400 });
        }

        const prepromptContent = "You are a friendly " + domain + " tutor explaining concepts taking into account the student level that is " +
            level + " . Talk only within your domain and it's borders because you are a specialized tutor. Your answers must be less than " + answerLength + " words long." +
            "Format all your answer using HTML, inline CSS into <style> div and MathJax library.";

        const prepromptMessage = { role: 'system', content: prepromptContent }
        conversationMessages = conversationMessages.concat(prepromptMessage)

        console.info('conversationMessages:', JSON.stringify(conversationMessages));

        const completion: ChatCompletion = await openai.chat.completions.create({
            messages: conversationMessages,
            model: 'gpt-3.5-turbo',
        });

        // Extract the AI response and send it back
        const aiMessage = completion.choices[0]?.message?.content;

        console.info('aiMessage:', JSON.stringify(aiMessage));

        return NextResponse.json({ message: aiMessage });

    } catch (error) {

        console.info('error:', JSON.stringify(error));

        if (error instanceof APIError) {
            console.error("API Error:", error.status, error.name, error.headers);
            return NextResponse.json({ error: error.name }, { status: error.status });
        } else {
            console.error("Unexpected error:", error);
            return NextResponse.json({ error: "Unexpected error occurred" }, { status: 500 });
        }
    }
}
