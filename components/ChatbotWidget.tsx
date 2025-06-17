'use client';

import { useState } from 'react';
// rest of your code...


export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = (msg: string) => {
    setMessages([...messages, msg, "This is a sample AI reply. (You can integrate GPT here)"]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="bg-white w-80 h-96 shadow-lg border rounded-lg flex flex-col">
          <div className="p-3 border-b font-semibold bg-indigo-600 text-white flex justify-between">
            Satya - Legal Assistant
            <button onClick={() => setOpen(false)}>✖</button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto text-sm text-gray-800">
            {messages.map((msg, i) => (
              <div key={i} className="mb-2">
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
            <input name="message" className="flex-1 border px-2 py-1 rounded" placeholder="Ask something..." />
            <button type="submit" className="bg-indigo-600 text-white px-3 rounded">Send</button>
          </form>
        </div>
      ) : (
        <button onClick={() => setOpen(true)} className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg">
          💬 Satya
        </button>
      )}
    </div>
  );
}
