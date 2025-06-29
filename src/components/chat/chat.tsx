import { useState, type Dispatch, type SetStateAction } from "react";
import Message from "../ui/message";
import { callLLM } from "../../services/api/llm";
import { PaperPlaneTiltIcon, SparkleIcon } from "@phosphor-icons/react";

type ChatProps = {
  editor: any;
  setNewHTML: Dispatch<SetStateAction<string>>;
  setOldHTML: Dispatch<SetStateAction<string>>;
};

type Message = {
  message: string;
  role: string;
};

const Chat = ({ editor, setNewHTML, setOldHTML }: ChatProps) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (input === "") {
      return;
    }

    if (e.key == "Enter" && !e.shiftKey) {
      e.preventDefault();
      queryLLM();
    }
  };

  const queryLLM = async () => {
    setInput("");
    const newItem: Message = {
      message: input,
      role: "user",
    };
    setMessages((prev) => [...prev, newItem]);

    const content = await callLLM(input, editor.getHTML());

    const parsedContent = JSON.parse(content);

    console.log(parsedContent);
    const llmItem: Message = {
      message: parsedContent.action,
      role: "llm",
    };
    setMessages((prev) => [...prev, llmItem]);

    setOldHTML(editor.getHTML());
    console.log(editor.getHTML());
    setNewHTML(parsedContent.html);

    editor?.commands.setContent(parsedContent.html);
  };

  return (
    <div className="flex flex-col h-screen justify-end gap-1">
      <div className="w-full flex items-center gap-1 py-2 px-2 bg-[#f5f4ed]">
        <SparkleIcon size={"1.2rem"} />
        <h1 className="text-xl font-medium">Content Assistant</h1>
      </div>
      <div className="h-full overflow-y-scroll">
        {messages.map((msg, i) => {
          return <Message key={i} message={msg.message} role={msg.role} />;
        })}
      </div>
      <div className="flex items-center m-2 mb-0 border rounded-tl rounded-tr border-gray-400 p-2 pb-4 bg-white drop-shadow-lg">
        <input
          className="w-full p-2 focus:outline-0"
          placeholder="Hey AI, make this change for me..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        ></input>
        <button
          className="bg-[#c96442] cursor-pointer w-fit  p-2 rounded-md hover:bg-[#ff9b79]"
          onClick={queryLLM}
        >
          <PaperPlaneTiltIcon size={"1rem"} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
