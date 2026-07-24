"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface FadeInProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    fullWidth?: boolean;
}

export const FadeIn = ({ children, delay = 0, direction = "up", fullWidth = false, className = "", ...props }: FadeInProps) => {
    const directions = {
        up: { y: 40 },
        down: { y: -40 },
        left: { x: 40 },
        right: { x: -40 },
        none: { x: 0, y: 0 }
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
            className={`${fullWidth ? "w-full" : ""} ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer = ({ children, className = "", delayOrder = 0.1, ...props }: HTMLMotionProps<"div"> & { delayOrder?: number }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: delayOrder
                    }
                }
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({ children, className = "", ...props }: HTMLMotionProps<"div">) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};
