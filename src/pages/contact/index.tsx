import { StrictMode, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      console.error("All fields are required");
      return;
    }
    try {
      const response = await fetch("https://api.example.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "katarilavanya881@gmail.com",
          subject: `Contact Form Submission from ${formData.name}`,
          text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
        }),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        window.location.reload(); // Refresh the page upon successful submission
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <StrictMode>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center">
          Contact Me
        </h1>
        <p className="text-lg mb-6 text-center">
          Feel free to reach out to me for any job opportunities or inquiries.
        </p>
        <form
          className="w-full max-w-lg bg-gray-800 p-8 rounded-xl shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 rounded"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 rounded"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 text-gray-900 rounded"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </StrictMode>
  );
};

export default Contact;
