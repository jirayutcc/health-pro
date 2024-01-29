import React, { useEffect } from "react";
import { Alert } from "flowbite-react";

interface AlertProps {
    isVisible: boolean;
    onClose: () => void;
    color: string;
    message: string;
    duration?: number;
}

const AlertComponents: React.FC<AlertProps> = ({
    isVisible,
    onClose,
    color,
    message,
    duration = 5000,
}) => {
    useEffect(() => {
        // Set a timeout to close the alert after {duration} seconds.
        if (isVisible) {
            const timeoutId = setTimeout(() => {
                onClose();
            }, duration);

            // Clear the timeout if the component is unmounted or the alert is closed manually.
            return () => clearTimeout(timeoutId);
        }
    }, [isVisible, duration, onClose]);

    return (
        isVisible && (
            <Alert
                className="fixed flex w-full max-w-xs p-4 space-x-4 divide-x rounded-lg shadow top-20 right-5"
                color={color}
                onDismiss={onClose}
                rounded
            >
                <span className="font-medium">{message}</span>
            </Alert>
        )
    );
};

export default AlertComponents;
