'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useCart, useCartCount } from '@/store/cart';

export function CartTrigger() {
  const open = useCart((s) => s.open);
  const count = useCartCount();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={open}
      aria-label={count > 0 ? `Bag, ${count} item${count === 1 ? '' : 's'}` : 'Bag'}
      className="small-caps-xs transition-opacity duration-300 hover:opacity-70 inline-flex items-center gap-1.5"
    >
      <span>Bag</span>
      <AnimatePresence mode="wait">
        {mounted && count > 0 && (
          <motion.span
            key={count}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="text-espresso"
          >
            ({count})
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
