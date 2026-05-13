"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

type FormState = "idle" | "loading" | "success" | "error";

const ContactComponent = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setFormState("loading");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setFormState("success");
      formRef.current.reset();
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="py-28 leading-8">
      <div className="dark:text-white">
        <h3 className="lg:text-4xl py-1 text-3xl font-bold">Connect</h3>
        <p className="lg:text-base text-sm py-2 leading-8 text-gray-800 dark:text-white">
          Have a project in mind or just want to say hi? My inbox is open.
        </p>
        <div className="border-t border-gray-300 my-4 opacity-15" />
      </div>

      <div className="mt-8 flex justify-start w-full">
        {formState === "success" ? (
          <div className="flex flex-col items-center justify-center gap-4 w-full p-12 sm:p-16 rounded-2xl bg-black bg-opacity-50 dark:bg-[#ffffff0a] dark:backdrop-blur-md border border-transparent dark:border-white/10 shadow-sm text-center animate-in fade-in zoom-in duration-500">
            <div className="w-16 h-16 bg-gradient-to-r from-[#e31b6d] to-[#ff6a00] rounded-full flex items-center justify-center text-white mb-2 shadow-lg">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-gray-200 dark:text-white">Message Sent!</h4>
            <p className="text-gray-300 dark:text-gray-300 max-w-md">
              Thank you for reaching out. Your message has been received successfully, and I'll get back to you as soon as possible.
            </p>
            {/* <button
              onClick={() => setFormState("idle")}
              className="mt-6 px-6 py-2.5 rounded-lg text-sm font-medium text-white dark:text-white bg-black/20 dark:bg-[#ffffff0a] hover:bg-black/40 dark:hover:bg-[#ffffff1a] transition-all border border-transparent focus:border-[#ff6a00]"
            >
              Send another message
            </button> */}
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-full p-6 sm:p-8 rounded-2xl bg-black bg-opacity-50 dark:bg-[#ffffff0a] dark:backdrop-blur-md border border-transparent dark:border-white/10 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex flex-col gap-1.5 flex-1">
                <label htmlFor="from_name" className="text-sm font-medium text-gray-200 dark:text-gray-300">Name</label>
                <input
                  id="from_name"
                  type="text"
                  name="from_name"
                  placeholder="What should I call you?"
                  required
                  className="w-full bg-black bg-opacity-50 dark:bg-[#ffffff0a] text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm outline-none border border-transparent focus:border-[#ff6a00] transition-colors shadow-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                <label htmlFor="reply_to" className="text-sm font-medium text-gray-200 dark:text-gray-300">Email</label>
                <input
                  id="reply_to"
                  type="email"
                  name="reply_to"
                  placeholder="Where can I reach you?"
                  required
                  className="w-full bg-black bg-opacity-50 dark:bg-[#ffffff0a] text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm outline-none border border-transparent focus:border-[#ff6a00] transition-colors shadow-sm"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-sm font-medium text-gray-200 dark:text-gray-300">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="What is this regarding?"
                required
                className="w-full bg-black bg-opacity-50 dark:bg-[#ffffff0a] text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm outline-none border border-transparent focus:border-[#ff6a00] transition-colors shadow-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-gray-200 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={5}
                required
                className="w-full bg-black bg-opacity-50 dark:bg-[#ffffff0a] text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm outline-none border border-transparent focus:border-[#ff6a00] transition-colors resize-none shadow-sm"
              />
            </div>

            {formState === "error" && (
              <div className="p-3 mt-1 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 dark:text-red-400 text-sm text-center">
                Something went wrong connecting to the server. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={formState === "loading"}
              className="w-full sm:w-auto self-end mt-2 px-8 py-3 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-[#e31b6d] to-[#ff6a00] hover:opacity-90 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            >
              {formState === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactComponent;
