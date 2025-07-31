/**
 * Schema.org JSON-LD Injection Script for Web Crawlers
 * 
 * This script dynamically loads and injects structured data from a JSON file
 * into the page's head section for web crawlers to read and index.
 * 
 * Usage:
 * 1. Include this script in your HTML: <script src="/schema-injector.js"></script>
 * 2. Ensure schema.json is accessible at the specified path
 * 3. The script will automatically inject the schema on page load
 */

(function() {
    'use strict';
    
    /**
     * Configuration
     */
    const CONFIG = {
        schemaUrl: '/schema.json',
        retryAttempts: 3,
        retryDelay: 1000, // milliseconds
        debug: false // Set to true for debugging
    };
    
    /**
     * Debug logging function
     */
    function log(message, ...args) {
        if (CONFIG.debug) {
            console.log('[Schema Injector]', message, ...args);
        }
    }
    
    /**
     * Error logging function
     */
    function logError(message, error) {
        console.error('[Schema Injector Error]', message, error);
    }
    
    /**
     * Check if script element with schema already exists
     */
    function schemaExists() {
        const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
        return existingSchemas.length > 0;
    }
    
    /**
     * Validate JSON-LD schema structure
     */
    function validateSchema(schema) {
        if (!schema || typeof schema !== 'object') {
            return false;
        }
        
        // Check for required Schema.org properties
        if (!schema['@context'] || !schema['@context'].includes('schema.org')) {
            return false;
        }
        
        // Validate @graph structure if present
        if (schema['@graph']) {
            if (!Array.isArray(schema['@graph']) || schema['@graph'].length === 0) {
                return false;
            }
            
            // Check that each item in @graph has @type
            return schema['@graph'].every(item => item['@type']);
        }
        
        // If not using @graph, check for @type on root
        return !!schema['@type'];
    }
    
    /**
     * Inject schema into page head
     */
    function injectSchema(schema) {
        try {
            // Create script element
            const scriptElement = document.createElement('script');
            scriptElement.type = 'application/ld+json';
            scriptElement.id = 'injected-schema';
            
            // Add schema content
            scriptElement.textContent = JSON.stringify(schema, null, 0); // Minified for production
            
            // Insert into head
            document.head.appendChild(scriptElement);
            
            log('Schema successfully injected into page');
            
            // Dispatch custom event for other scripts to listen to
            const event = new CustomEvent('schemaInjected', { 
                detail: { schema: schema } 
            });
            document.dispatchEvent(event);
            
            return true;
        } catch (error) {
            logError('Failed to inject schema into DOM', error);
            return false;
        }
    }
    
    /**
     * Fetch schema with retry logic
     */
    async function fetchSchemaWithRetry(url, attempt = 1) {
        try {
            log(`Fetching schema from ${url} (attempt ${attempt})`);
            
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Cache-Control': 'no-cache'
                },
                cache: 'no-cache'
            });
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const schema = await response.json();
            log('Schema successfully fetched', schema);
            
            return schema;
        } catch (error) {
            logError(`Attempt ${attempt} failed to fetch schema`, error);
            
            if (attempt < CONFIG.retryAttempts) {
                log(`Retrying in ${CONFIG.retryDelay}ms...`);
                await new Promise(resolve => setTimeout(resolve, CONFIG.retryDelay));
                return fetchSchemaWithRetry(url, attempt + 1);
            }
            
            throw error;
        }
    }
    
    /**
     * Main initialization function
     */
    async function initSchemaInjection() {
        try {
            log('Initializing schema injection');
            
            // Skip if schema already exists (avoid duplicates)
            if (schemaExists()) {
                log('Schema already exists in page, skipping injection');
                return;
            }
            
            // Fetch schema from JSON file
            const schema = await fetchSchemaWithRetry(CONFIG.schemaUrl);
            
            // Validate schema structure
            if (!validateSchema(schema)) {
                throw new Error('Invalid schema structure - missing required Schema.org properties');
            }
            
            // Inject schema into page
            const success = injectSchema(schema);
            
            if (success) {
                log('Schema injection completed successfully');
            } else {
                throw new Error('Failed to inject schema into page');
            }
            
        } catch (error) {
            logError('Schema injection failed', error);
            
            // Dispatch error event for error tracking
            const event = new CustomEvent('schemaInjectionError', { 
                detail: { error: error.message } 
            });
            document.dispatchEvent(event);
        }
    }
    
    /**
     * Wait for DOM to be ready
     */
    function waitForDOM(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            // DOM is already ready
            callback();
        }
    }
    
    /**
     * Initialize when DOM is ready
     */
    waitForDOM(() => {
        log('DOM ready, starting schema injection');
        initSchemaInjection();
    });
    
    /**
     * Expose public API for manual control
     */
    window.SchemaInjector = {
        inject: initSchemaInjection,
        config: CONFIG,
        validate: validateSchema
    };
    
})();