import { useState, useEffect } from "react";
import '../assets/style/alert.css';

export default function AlertSuccess({ message = "Message sent succesfully!", duration = 5000 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="alert-success" role="alert">
      <span>{message}</span>
      <button className="close-btn" onClick={() => setVisible(false)}>
        &times;
      </button>
    </div>
  );
}
