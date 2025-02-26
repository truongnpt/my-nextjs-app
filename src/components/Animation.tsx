import { motion, TargetAndTransition, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import { useRef } from "react";

interface Prop {
  children: React.ReactNode;
  startOffScreen: string;
  vertical?: boolean;
}

export default function Animation({
  children,
  startOffScreen,
  vertical,
}: Prop) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [initial, setInitial] = useState<TargetAndTransition>();
  const [animate, setAnimate] = useState<TargetAndTransition>();

  useEffect(() => {
    if (vertical) {
      setInitial({ y: startOffScreen, opacity: 0 });
      setAnimate({ y: 0, opacity: 1 });
    } else {
      setInitial({ x: startOffScreen, opacity: 0 });
      setAnimate({ x: 0, opacity: 1 });
    }
  }, [vertical]);
  return (
    <div ref={ref}>
      {initial && (
        <motion.div
          initial={initial}
          animate={isInView ? animate : {}}
          transition={{ duration: 2 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
