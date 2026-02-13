import { useState, useEffect } from "react";

interface PixelStar {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

const StarField = () => {
  const [stars, setStars] = useState<PixelStar[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(180, 100%, 50%)",
      "hsl(300, 100%, 60%)",
      "hsl(270, 100%, 65%)",
      "hsl(180, 100%, 80%)",
    ];
    const generated: PixelStar[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() > 0.7 ? 3 : 2,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setStars(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
