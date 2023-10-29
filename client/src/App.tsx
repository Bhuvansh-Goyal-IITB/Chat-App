import { useEffect, useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import { io, Socket } from "socket.io-client";

function App() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<Array<string>>([]);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const newSocket = io("http://192.168.1.102:3000");
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, [setSocket]);

  useEffect(() => {
    socket?.on("all messages", (messages: Array<string>) => {
      setMessages(messages);
    });
    socket?.on("message", (message: string) => {
      setMessages((prev) => [...prev, message]);
    });
  }, [socket]);

  const sendMessage = (message: string) => {
    setMessages((prev) => [...prev, message]);
    socket?.emit("message", message);
    setValue("");
  };

  return (
    <>
      <Container>
        <Header />
        <div className="bg-blue-950 overflow-y-scroll flex-grow">
          {messages.map((message) => (
            <div className="text-xl text-white">{message}</div>
          ))}
        </div>
        <div className="flex w-full">
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                sendMessage(value);
              }
            }}
            type="text"
            className="text-xl flex-grow bg-slate-200 focus:outline-none p-3"
            placeholder="write message ..."
          />
          <button
            className="text-xl text-white p-3"
            onClick={() => {
              sendMessage(value);
            }}
          >
            Send
          </button>
        </div>
      </Container>
    </>
  );
}

export default App;
