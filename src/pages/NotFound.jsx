import { FiAlertTriangle, FiArrowLeft, FiHelpCircle } from "react-icons/fi";
import Button from "../components/common/Button";

export default function NotFound() {
  return (
    <div className="relative overflow-hidden bg-white py-20 md:py-32 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="mx-auto max-w-md px-6 text-center space-y-6 animate-fade-in">
        
        {/* Warning Icon */}
        <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-[var(--color-danger)] mb-4 shadow-inner">
          <FiAlertTriangle className="h-10 w-10 animate-pulse" />
        </span>

        <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-primary)] leading-none">
          404 - Page Out of Patrol
        </h1>

        <p className="text-sm sm:text-base text-[var(--color-caption)] leading-relaxed max-w-sm mx-auto">
          The security system could not verify this route path. It may have been moved, deleted, or was outside your authenticated permissions.
        </p>

        {/* Action button triggers */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
          <Button to="/" variant="primary" icon={FiArrowLeft}>
            Return to Safety (Home)
          </Button>
          <Button to="/contact" variant="secondary" icon={FiHelpCircle}>
            Contact Dispatch
          </Button>
        </div>

      </div>
    </div>
  );
}
