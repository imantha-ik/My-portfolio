import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "", 
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  // Ensure subject exists in the payload (optional but backend expects it)
  const payload = {
    ...formData,
    subject: "Contact Form", // You can customize this if needed
  };

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong.");
    }

    setSubmitted(true);
  } catch (err) {
    alert("❌ Failed to send message: " + err.message);
  }
};

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="w-full h-full flex justify-center">
          <img
            src="/images/3.jpg"
            alt="Community"
            className="rounded-xl shadow-lg max-h-[500px] object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Contact Us</h2>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-1 text-sm font-medium text-muted-foreground">Your name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-teal-500 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Jane Doe"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-muted-foreground">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-teal-500 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
  <label className="block mb-1 text-sm font-medium text-muted-foreground">Subject</label>
  <input
    type="text"
    name="subject"
    value={formData.subject}
    onChange={handleChange}
    className="w-full px-4 py-2 border border-teal-500 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-teal-500"
    placeholder="Subject"
    required
  />
</div>

              <div>
                <label className="block mb-1 text-sm font-medium text-muted-foreground">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-teal-500 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-lg transition-all"
              >
                Send
              </button>
            </form>
          ) : (
            <div className="border border-teal-400 p-8 rounded-xl bg-teal-50 text-center">
              <CheckCircle className="text-teal-500 mx-auto mb-4" size={48} />
              <p className="text-lg font-semibold mb-1">Your message has been sent</p>
              <p className="text-teal-700">Thank you for reaching out to Elemental AIM.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


