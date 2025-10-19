/*
 */

// const GROQ_KEY = import.meta.env.VITE_GROQ_KEY as string;

// const url = "https://openrouter.ai/api/v1/chat/completions";
const url = "https://api.groq.com/openai/v1/chat/completions";

const MODEL = "openai/gpt-oss-120b";

export const getNextLine = async (userContext: string | undefined) => {
  const API_KEY = localStorage.getItem("api-key")

  const headers = {
  Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };

  const payload = {
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content:
          "You are an advanced language model that specializes in predicting natural next-line continuations for written text. When given a passage, your task is to generate only the next most plausible single line, continuing the context in a coherent, contextually appropriate, and stylistically consistent way. Respond with exactly one line that would logically follow the input. If the structure or content implies that the next line should be part of a list, code block, table, or other structured format, you must use valid Markdown to express it. Do not summarize, explain, or generate multiple lines. Just output the next line as it would naturally appear.",
      },
      {
        role: "user",
        content: userContext,
      },
    ],
  };
  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });

  const res = await response.json();
  console.log(res);
  if (response.status == 429) {
    throw new Error();
  }

  //const textFromLLM = "Hi this is a sentence that was hardcoded and im making it extra long to see if it wraps or what bro cuz damn";
  const textFromLLM: string = res.choices[0].message.content;

  console.log(textFromLLM);
  // const htmlToBe = "<span>" + textFromLLM + "</span>";

  return textFromLLM;

  // const response = await fetch(
  //   "https://homer-ai-backend-production.up.railway.app/api/next-line",
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       userContext,
  //     }),
  //   }
  // );

  // const res = await response.json();

  // console.log(res);

  // return res.data;
};

type Input = {
  ctx: string;
  userInput: string;
  msgCtx: string[];
};

export const callLLM = async (input: Input) => {
  const API_KEY = localStorage.getItem("api-key")

  const headers = {
  Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };

  const msgCtxStr = JSON.stringify(input.msgCtx);

  const content =
    "Content: " +
    input.ctx +
    "\n" +
    "Instruction: " +
    input.userInput +
    "\nPrevious Messages: " +
    msgCtxStr;

  console.log("Content: ", content);

  const payload = {
    model: MODEL,
    messages: [
      {
        role: "system",
        content:
          "ALWAYS RETURN WITH NO MARKDOWN FORMATTING AND ANSWER IN A CONTINUOUS STRING WITHOUT LINEBREAKS. RESPONSE MUST BE VALID JSON. You are a content assistant working with a rich text editor. I will provide you with three inputs: first, the HTML content from the editor (unstyled), and second, an instruction describing what to do with that content, third, an array of previous messages by the user which you can take into context. Your job is to apply the instruction to the HTML content and return the updated content. Respond with a JSON object containing two fields: action and html. The action field should describe what kind of modification was made in plain text as coherent sentences with grammar. The html field must contain the full updated HTML content, with your changes applied precisely and preserving the structure. You must use HTML tags for everything like bold, italic, codeblocks, headings etc. If no changes are needed, set action to LOL NO and return the original HTML in html. Only return the JSON object—no headings, no formatting explanations, no commentary. Just return the JSON as a string, do not put markdown formatting on it like backticks. DO NOT MENTION YOU ARE MODIFYING THE HTML CONTENT, JUST REFER TO TEXT",
      },
      {
        role: "user",
        content: content,
      },
    ],
    response_format: {
      type: "json_object",
    },
  };

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });

  const res = await response.json();
  console.log(res);

  //const textFromLLM = "Hi this is a sentence that was hardcoded and im making it extra long to see if it wraps or what bro cuz damn";
  const textFromLLM: string = res.choices[0].message.content;

  console.log(textFromLLM);
  // const htmlToBe = "<span>" + textFromLLM + "</span>";

  return textFromLLM;
  // try {
  // } catch (error) {
  //   console.log(error);
  // }

  // return "";

  // const response = await fetch(
  //   "https://homer-ai-backend-production.up.railway.app/api/completions",
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(input),
  //   }
  // );

  // const res = await response.json();

  // return res.data;
};
