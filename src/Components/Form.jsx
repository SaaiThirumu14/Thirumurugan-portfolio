import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("⏳ Saving...");

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKENDURL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Soon our team will contact you!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Failed to save data");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Error saving data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-300 text-transparent bg-clip-text mb-4">
          📩 Contact Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Fill out the form below and I’ll get back to you soon.
        </p>
      </div>

      <div className="max-w-2xl mx-auto group relative">
        {/* Card Container */}
        <div className="relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-slate-600/70">
          {/* Gradient Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300 -z-10"></div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-slate-200">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-lg text-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-200">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-lg text-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-slate-200">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-lg text-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition"
                placeholder="Enter your phone number"
                pattern="[0-9]{10}"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-slate-200">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-2 w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-lg text-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full py-3 flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-xl"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Submit Form"
              )}
            </button>

            {/* Status */}
            {status && (
              <p
                className={`mt-3 text-center text-sm font-semibold animate-pulse ${
                  status.startsWith("✅")
                    ? "text-green-400"
                    : status.startsWith("❌")
                    ? "text-red-400"
                    : "text-yellow-400"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
