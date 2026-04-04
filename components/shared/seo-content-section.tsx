import React from 'react';

interface SEOContentProps {
    children: React.ReactNode;
}

export function SEOContent({ children }: SEOContentProps) {
    return (
        <div className="mt-16 md:mt-24 border-t border-border/40 pt-12 md:pt-16 pb-12">
            <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-7 prose-li:leading-7 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground">
                {children}
            </div>
        </div>
    );
}
