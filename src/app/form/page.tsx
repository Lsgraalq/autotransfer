"use client";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { useState } from "react";

export default function AboutPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | string>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // чтобы страница не перезагружалась

    setStatus("Отправка...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Письмо отправлено успешно!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus(data.error || "Ошибка при отправке письма");
      }
    } catch (error) {
      setStatus("Ошибка сети или сервера");
    }
  }

  return (
    <>
      <section className="form">
        <Navbar />
        <div className="pt-30 container max-w-md mx-auto">
          <h1>Связаться с нами</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-5">
            <input
              type="text"
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border p-2 rounded"
            />
            <textarea
              placeholder="Сообщение"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="border p-2 rounded"
              rows={5}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Отправить
            </button>
          </form>

          {status && <p className="mt-4 text-center">{status}</p>}
        </div>
        <Footer />
      </section>
    </>
  );
}
