'use client';

import React from "react";
import { motion } from 'motion/react';

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {children}
      </motion.div>
    );
  }