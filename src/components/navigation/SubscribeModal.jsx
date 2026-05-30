import { useState } from "react";
import { FiCheck, FiX } from "react-icons/fi";
import IconButton from "../shared/IconButton";

export default function SubscribeModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email) setSubmitted(true);
  };

  const handleClose = () => {
    setEmail("");
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      style={{
        backgroundColor: "rgba(0,0,0,0.45)",
        backdropFilter: "blur(4px)",
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) handleClose();
      }}
    >
      <div
        className="relative w-full max-w-md rounded-2xl p-8 bg-white"
        style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.18)" }}
      >
        <IconButton
          ariaLabel="Close"
          onClick={handleClose}
          className="absolute top-4 right-4"
        >
          <FiX size={16} />
        </IconButton>

        {!submitted ? (
          <>
            <div
              className="h-12 w-12 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-5"
              style={{
                backgroundColor: "var(--color-forest)",
                fontFamily: "var(--font-serif)",
              }}
            >
              F
            </div>
            <h2
              className="text-2xl font-bold mb-1"
              style={{ fontFamily: "var(--font-serif)", color: "#111" }}
            >
              Get recipes in your inbox
            </h2>
            <p
              className="text-sm mb-6"
              style={{ color: "#777", fontFamily: "var(--font-sans)" }}
            >
              Weekly picks, seasonal finds, and kitchen inspiration - no spam,
              ever.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all"
                style={{ fontFamily: "var(--font-sans)", color: "#111" }}
                onFocus={(event) => {
                  event.currentTarget.style.borderColor = "var(--color-forest)";
                  event.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(74,103,65,0.1)";
                }}
                onBlur={(event) => {
                  event.currentTarget.style.borderColor = "#e5e7eb";
                  event.currentTarget.style.boxShadow = "none";
                }}
              />
              <button
                type="submit"
                className="w-full rounded-xl py-3 text-sm font-semibold text-white transition-all duration-200 active:scale-[0.98] hover:opacity-90"
                style={{
                  backgroundColor: "var(--color-forest)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Subscribe -&gt;
              </button>
            </form>
            <p
              className="text-xs text-center mt-4"
              style={{ color: "#bbb", fontFamily: "var(--font-sans)" }}
            >
              Unsubscribe anytime. We respect your inbox.
            </p>
          </>
        ) : (
          <div className="flex flex-col items-center text-center py-4 gap-4">
            <div
              className="h-14 w-14 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(74,103,65,0.1)" }}
            >
              <FiCheck size={28} color="var(--color-forest)" />
            </div>
            <h2
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-serif)", color: "#111" }}
            >
              You're in!
            </h2>
            <p
              className="text-sm"
              style={{ color: "#777", fontFamily: "var(--font-sans)" }}
            >
              Welcome to FoodEase. Your first recipe drop lands soon.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "var(--color-forest)",
                fontFamily: "var(--font-sans)",
              }}
            >
              Back to recipes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
