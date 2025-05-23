'use client';

import { useState } from 'react';
import Image from 'next/image';

interface BlogImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export default function BlogImage({ src, alt, priority = false }: BlogImageProps) {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div className="relative h-full w-full">
      {!imageError && (
        <Image 
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          onError={() => setImageError(true)}
        />
      )}
    </div>
  );
} 