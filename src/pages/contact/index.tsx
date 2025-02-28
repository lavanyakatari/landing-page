import { useState, ChangeEvent, FormEvent } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch {
      setStatus("An error occurred while sending the message.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-10">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center">
        Contact Me
      </h2>
      <p className="text-lg mb-6 text-center">
        Feel free to reach out to me for any job opportunities or inquiries.
      </p>
      <form
        className="flex flex-col w-full max-w-lg bg-gray-800 p-8 rounded-xl shadow-lg items-center justify-center space-y-4"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full px-3 py-2 text-gray-900 rounded"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          className="w-full px-3 py-2 text-gray-900 rounded"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          className="w-full px-3 py-2 text-gray-900 rounded"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Send
        </button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default Contact;
