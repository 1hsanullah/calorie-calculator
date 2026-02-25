import React from 'react';

interface SEOContentProps {
    children: React.ReactNode;
}

export function SEOContent({ children }: SEOContentProps) {
    return (
        <div className="mt-16 md:mt-24 border-t border-border/40 pt-12 md:pt-16 pb-12">
            <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
                {children}
            </div>
        </div>
    );
}
