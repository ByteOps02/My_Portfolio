import { motion } from 'framer-motion';

interface GradientOrbProps {
    className?: string;
    color?: 'primary' | 'purple' | 'blue' | 'pink';
    size?: 'sm' | 'md' | 'lg';
    delay?: number;
}

const colorMap = {
    primary: 'bg-primary/20',
    purple: 'bg-purple-500/20',
    blue: 'bg-blue-500/20',
    pink: 'bg-pink-500/20',
};

const sizeMap = {
    sm: 'w-64 h-64',
    md: 'w-96 h-96',
    lg: 'w-[32rem] h-[32rem]',
};

export default function GradientOrb({
    className = '',
    color = 'primary',
    size = 'md',
    delay = 0
}: GradientOrbProps) {
    return (
        <motion.div
            className={`absolute rounded-full blur-3xl ${colorMap[color]} ${sizeMap[size]} ${className}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
            }}
            transition={{
                duration: 8,
                delay,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        />
    );
}
