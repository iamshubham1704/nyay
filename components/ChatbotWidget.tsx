'use client';

import { useState } from 'react';

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = (msg: string) => {
    setMessages([...messages, msg, "This is a sample AI reply. (You can integrate GPT here)"]);
  };

  return (
    <div className="fixed bottom-4 right-4 w-[90%] sm:w-96 z-50">
      {open ? (
        <div className="bg-white h-[70vh] sm:h-96 shadow-lg border rounded-lg flex flex-col">
          <div className="p-3 border-b font-semibold bg-indigo-600 text-white flex justify-between items-center text-sm sm:text-base">
            Satya - Legal Assistant
            <button
              onClick={() => setOpen(false)}
              className="text-white text-lg hover:opacity-80"
            >
              ✖
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto text-sm text-gray-800 space-y-2">
            {messages.map((msg, i) => (
              <div key={i}>
                {i % 2 === 0 ? <b>You:</b> : <b>Bot:</b>} {msg}
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const input = form.message as HTMLInputElement;
              if (input.value.trim()) {
                handleSend(input.value);
                input.value = '';
              }
            }}
            className="p-3 border-t flex gap-2"
          >
            <input
              name="message"
              className="flex-1 border px-3 py-2 rounded text-sm"
              placeholder="Ask something..."
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm"
            >
              Send
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg text-sm sm:text-base"
        >
          💬 Satya
        </button>
      )}
    </div>
  );
}
