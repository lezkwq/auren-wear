'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useCart } from '@/store/cart';

const WHATSAPP_NUMBER = '5547992754013';
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello AUREN, I'd like to enquire about a piece."
);

export function WhatsAppButton() {
  const isCartOpen = useCart((s) => s.isOpen);

  if (isCartOpen) return null;

  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact AUREN on WhatsApp"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-30 inline-flex items-center gap-2.5 bg-ink text-cream px-5 py-3 rounded-[2px] transition-colors duration-400 ease-auren hover:bg-espresso"
    >
      <MessageCircle size={16} strokeWidth={1.5} aria-hidden="true" />
      <span className="small-caps-xs">WhatsApp</span>
    </motion.a>
  );
}
