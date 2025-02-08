import { useState } from "react";

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:Adir10500@gmail.com?subject=${
      formData.subject || ""
    }&body=${formData.message || ""}`;
    setFormData({ subject: "", message: "" });
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="text-main-black hover:bg-gray-100 px-3 py-2 rounded-md border cursor-pointer transition-colors duration-200"
      >
        Write Message
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-main-black"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-main-black min-h-32 resize-y"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-main-black text-white py-2 px-4 rounded-md hover:bg-main-black transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactButton;
