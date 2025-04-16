# Favicon Generation Instructions

Follow these steps to generate proper favicons for your site that will appear in search results:

## Option 1: Use an Online Generator (Easiest)

1. Visit [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Upload your original favicon.png image
3. Configure the options for different platforms
4. Download the generated package
5. Extract and upload all the files to your `/public` directory
6. Copy any additional HTML code they provide and add it to your layout.tsx file

## Option 2: Create Icons Manually

Create the following icon files and place them in your `/public` directory:

- `favicon.ico` - 16x16, 32x32, 48x48 (multi-size ICO file)
- `favicon.png` - 32x32
- `apple-touch-icon.png` - 180x180
- `android-chrome-192x192.png` - 192x192
- `android-chrome-512x512.png` - 512x512
- `mstile-150x150.png` - 150x150

## Important Tips for Search Engine Icons

1. Make sure your icon has:
   - A distinctive shape and color
   - Good contrast against both light and dark backgrounds
   - Simple design that's recognizable at small sizes

2. After deploying your changes, you may need to:
   - Submit your site to Google Search Console
   - Request reindexing to update the search results
   - Be patient as it may take days for search engines to update their cache

3. Test your icons using:
   - [Favicon Checker](https://realfavicongenerator.net/favicon_checker) 