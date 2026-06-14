# Image Optimization Guide - Divyam360

**Total Potential Savings:** 562 KB  
**Impact on Performance Score:** +15-20 points

---

## 🎯 Priority Images to Optimize

### CRITICAL: Logo Files (Save 230 KB)

#### 1. ftlogo.webp
- **Current:** 129 KB (1416x359 pixels)
- **Displayed at:** 213x54 pixels
- **Target:** 426x108 pixels (2x for retina) @ 80% quality
- **Expected size:** 15-20 KB
- **Savings:** ~110 KB

#### 2. newlogo.webp
- **Current:** 105 KB (1412x348 pixels)
- **Displayed at:** 220x54 pixels
- **Target:** 440x108 pixels (2x for retina) @ 80% quality
- **Expected size:** 15-20 KB
- **Savings:** ~85 KB

---

## 🔧 How to Optimize Images

### Method 1: Using Squoosh (Recommended - Easy)

1. **Go to:** https://squoosh.app/
2. **Upload your image**
3. **Choose WebP format** (right panel)
4. **Set quality to 80-85%**
5. **Resize:**
   - ftlogo.webp: Width = 426, Height = 108
   - newlogo.webp: Width = 440, Height = 108
6. **Download optimized image**

### Method 2: Using Command Line (Advanced)

```bash
# Install cwebp (WebP converter)
# Windows: Download from https://developers.google.com/speed/webp/download

# Optimize ftlogo.webp
cwebp -resize 426 108 -q 80 ftlogo.webp -o ftlogo-optimized.webp

# Optimize newlogo.webp
cwebp -resize 440 108 -q 80 newlogo.webp -o newlogo-optimized.webp
```

### Method 3: Using Photoshop/GIMP

1. Open image
2. Image → Image Size → Set to 426x108 (ftlogo) or 440x108 (newlogo)
3. File → Export → Save for Web
4. Choose WebP format
5. Quality: 80%
6. Save

---

## 📊 Service Images (Save 173 KB)

### Images to Optimize:

#### services-1-1.webp (Equity)
- **Current:** 58 KB (1532x1026)
- **Displayed:** 276x185
- **Target:** 552x370 @ 80%
- **Expected:** 8-10 KB
- **Savings:** 48 KB

#### services-1-2.webp (General Insurance)
- **Current:** 64 KB (1532x1027)
- **Displayed:** 276x185
- **Target:** 552x370 @ 80%
- **Expected:** 8-10 KB
- **Savings:** 54 KB

#### services-1-3.webp (Mutual Funds)
- **Current:** 57 KB (1532x1026)
- **Displayed:** 276x185
- **Target:** 552x370 @ 80%
- **Expected:** 8-10 KB
- **Savings:** 47 KB

#### trust-1-1.webp
- **Current:** 51 KB (1348x1167)
- **Displayed:** 171x148
- **Target:** 342x296 @ 80%
- **Expected:** 10-12 KB
- **Savings:** 39 KB

### Batch Optimization Command:
```bash
# For all service images
for file in services-1-*.webp; do
  cwebp -resize 552 370 -q 80 "$file" -o "optimized-$file"
done

# For trust image
cwebp -resize 342 296 -q 80 trust-1-1.webp -o trust-1-1-optimized.webp
```

---

## 🏞️ Background Images (Save 159 KB)

### trust-bg-1-1.png
- **Current:** 499 KB (PNG format)
- **Target:** Convert to WebP @ 75% quality
- **Expected size:** 150 KB
- **Savings:** 349 KB (but shows as 108 KB in report)

**Action:**
```bash
cwebp -q 75 trust-bg-1-1.png -o trust-bg-1-1.webp
```

**Update CSS:**
```css
/* Before: */
.trusted-company__bg {
    background-image: url(assets/images/shapes/trust-bg-1-1.png);
}

/* After: */
.trusted-company__bg {
    background-image: url(assets/images/shapes/trust-bg-1-1.webp);
}
```

---

## 📝 Implementation Steps

### Step 1: Create Backup
```bash
# Backup current images
mkdir backup
cp ftlogo.webp newlogo.webp assets/images/services/services-*.webp backup/
```

### Step 2: Optimize Images
Use Squoosh.app or command line tools to optimize each image according to the specifications above.

### Step 3: Replace Files
Replace the original files with optimized versions (keeping same filenames).

### Step 4: Test
1. Clear browser cache
2. Load website
3. Check images display correctly
4. Verify no broken images

### Step 5: Verify Improvement
Run PageSpeed Insights again to confirm improvements.

---

## 🎨 Maintain Image Quality

### Quality Guidelines:
- **Logos:** 80-85% quality (crisp text is important)
- **Photos:** 75-80% quality (slight blur acceptable)
- **Backgrounds:** 70-75% quality (can be softer)
- **Icons:** 80-85% quality (sharpness matters)

### Size Guidelines (2x for Retina):
- Display width/height × 2 = Actual image dimensions
- Example: If displayed at 200×100, create at 400×200

---

## 🚀 Advanced: Responsive Images (Future Enhancement)

### Use srcset for Different Screen Sizes:
```html
<img src="ftlogo-440.webp" 
     srcset="ftlogo-220.webp 1x, ftlogo-440.webp 2x"
     alt="Divyam360 Logo"
     width="220" 
     height="54">
```

### Benefits:
- Smaller images on mobile
- Larger images on desktop/retina
- Automatic browser selection
- Further performance improvements

---

## ✅ Optimization Checklist

### High Priority (Do First)
- [ ] Optimize ftlogo.webp → 15-20 KB
- [ ] Optimize newlogo.webp → 15-20 KB
- [ ] Backup original files
- [ ] Replace with optimized versions
- [ ] Test on live site

### Medium Priority (This Week)
- [ ] Optimize services-1-1.webp → 8-10 KB
- [ ] Optimize services-1-2.webp → 8-10 KB
- [ ] Optimize services-1-3.webp → 8-10 KB
- [ ] Optimize trust-1-1.webp → 10-12 KB

### Lower Priority (This Month)
- [ ] Convert trust-bg-1-1.png to WebP
- [ ] Update CSS to reference .webp file
- [ ] Optimize all other images sitewide
- [ ] Implement srcset for responsive images

---

## 📊 Expected Results

### Before Optimization:
- **Total image weight:** 1,500+ KB
- **LCP:** 2.8s
- **Performance Score:** 54

### After Optimization:
- **Total image weight:** 900-1,000 KB
- **LCP:** <2.0s (estimated)
- **Performance Score:** 70+ (estimated)

### Combined with Other Fixes:
- **Performance Score:** 90+ (target)

---

## 🔗 Recommended Tools

### Online Tools (Free, No Installation)
1. **Squoosh:** https://squoosh.app/ ⭐ Recommended
2. **TinyPNG:** https://tinypng.com/
3. **Compressor.io:** https://compressor.io/

### Desktop Tools
1. **ImageOptim** (Mac): https://imageoptim.com/
2. **XnConvert** (Windows/Mac/Linux): https://www.xnview.com/en/xnconvert/
3. **GIMP** (Free Photoshop alternative): https://www.gimp.org/

### Command Line
1. **cwebp** (Google WebP): https://developers.google.com/speed/webp/download
2. **ImageMagick**: https://imagemagick.org/

---

## ❓ FAQ

**Q: Will optimizing images reduce quality?**  
A: At 80% quality WebP, the difference is imperceptible to users but saves significant bandwidth.

**Q: What if images look blurry after optimization?**  
A: Increase quality to 85% or ensure you're creating 2x size for retina displays.

**Q: Can I optimize in bulk?**  
A: Yes! Use command-line tools or XnConvert for batch processing.

**Q: Do I need to update HTML after optimization?**  
A: No, if you keep the same filenames. Just replace the files.

**Q: How often should I optimize images?**  
A: Optimize all new images before uploading. Review existing images quarterly.

---

**Created:** June 14, 2026  
**Last Updated:** June 14, 2026

*After optimization, remember to test your site and run PageSpeed Insights again!*
