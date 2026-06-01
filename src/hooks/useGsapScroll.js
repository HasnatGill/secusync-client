import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";

/**
 * useScrollReveal — staggers direct children of the ref into view on scroll.
 * Usage: const ref = useScrollReveal(); <div ref={ref}>...children...</div>
 */
export default function useScrollReveal({ y = 40, stagger = 0.12 } = {}) {
    const ref = useRef(null);
    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;
        const ctx = gsap.context(() => {
            gsap.from(el.children, {
                y,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger,
                scrollTrigger: { trigger: el, start: "top 80%" },
            });
        }, el);
        return () => ctx.revert();
    }, [y, stagger]);
    return ref;
}