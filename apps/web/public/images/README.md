# Hero Image Setup Instructions

## How to Add Your Hero Image

1. **Save your image file** as `hero-image.jpg` in this directory:
   ```
   C:\Users\dgero\Documents\ai-projects-new\key\ftiaxesite\apps\web\public\images\hero-image.jpg
   ```

2. **Recommended image specifications:**
   - **Format**: JPG, PNG, or WebP
   - **Size**: 800x600px or larger (will be responsive)
   - **File size**: Under 500KB for optimal loading
   - **Aspect ratio**: 4:3 or 16:9 works best

3. **Alternative image names** (if you prefer):
   - `hero-image.png`
   - `hero-image.webp`
   - `dashboard-illustration.jpg`

4. **Update the component** (if using different filename):
   - Edit `components/hero.tsx`
   - Change the `src` attribute to match your filename

## Current Setup

The Hero component is now configured to display your image with:
- ✅ Rounded corners (`rounded-3xl`)
- ✅ Drop shadow (`shadow-2xl`)
- ✅ Responsive sizing (`object-contain`)
- ✅ Proper alt text for accessibility
- ✅ Floating accent elements for visual appeal

## Testing

After adding your image:
1. Save the file to the images directory
2. Refresh your browser at `http://localhost:3000`
3. The image should appear in the hero section

The image will automatically scale and maintain its aspect ratio across all device sizes.

