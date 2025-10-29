# Hero Image Setup

## 📸 **Replace Hero Image**

1. **Save the attached image** as `hero-image.jpg` in:
   ```
   ftiaxesite/apps/web/public/images/hero-image.jpg
   ```

2. **Update Keystatic** to use the new image:
   - Go to http://localhost:3000/keystatic
   - Navigate to "Homepage Content"
   - Update the "Hero Image" field to point to `/images/hero-image.jpg`

## 🎯 **Alternative: Direct File Update**

If you prefer to update the YAML file directly:

```yaml
heroImage: "/images/hero-image.jpg"
```

Update this in: `content/homepage/index.yaml`

## ✅ **Expected Result**

The hero section will display your new dashboard/analytics image instead of the placeholder.
