import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`rounded-xl border transition-colors ${
      isOpen ? "border-primary bg-primary-light/10" : "border-gray-100 bg-white"
    }`}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-5 py-4.5 text-left font-semibold text-gray-900 focus:outline-none"
      >
        <span>{question}</span>
        <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
          isOpen ? "bg-primary text-white" : "bg-gray-50 text-gray-500"
        }`}>
          {isOpen ? <FiMinus className="h-3.5 w-3.5" /> : <FiPlus className="h-3.5 w-3.5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100/50 pt-3">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3.5">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === idx}
          onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
        />
      ))}
    </div>
  );
}
