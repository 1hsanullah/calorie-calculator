# Schema Testing Quick Reference

## 🔍 **Immediate Testing (Available Now)**

### **1. Browser Console Test:**
```javascript
// Open browser console (F12) and run:
console.log(document.querySelectorAll('script[type="application/ld+json"]'));

// Should show 2 scripts:
// - Main WebPage/WebApplication schema
// - FAQ schema
```

### **2. Extract Schema Data:**
```javascript
// Copy and run in browser console:
const schemas = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
  .map(script => JSON.parse(script.textContent));
console.log('Found schemas:', schemas.length);
schemas.forEach((schema, index) => {
  console.log(`Schema ${index + 1}:`, schema['@type']);
});
```

### **3. Validate Schema Structure:**
```javascript
// Check if main schema exists:
const mainSchema = JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent);
console.log('Schema type:', mainSchema['@type']);
console.log('Main entity:', mainSchema.mainEntity['@type']);
console.log('Features:', mainSchema.mainEntity.featureList.length);
console.log('Reviews:', mainSchema.mainEntity.review.length);
```

## 🌐 **Online Testing URLs**

### **Google Rich Results Test:**
```
https://search.google.com/test/rich-results?url=https://www.calorietest.com/calorie-calculator
```

### **Schema.org Validator:**
```
https://validator.schema.org/#url=https://www.calorietest.com/calorie-calculator
```

### **Google Structured Data Testing Tool:**
```
https://search.google.com/structured-data/testing-tool/u/0/?url=https://www.calorietest.com/calorie-calculator
```

### **Facebook Debugger (Open Graph):**
```
https://developers.facebook.com/tools/debug/?q=https://www.calorietest.com/calorie-calculator
```

### **Twitter Card Validator:**
```
https://cards-dev.twitter.com/validator?url=https://www.calorietest.com/calorie-calculator
```

## 📊 **Expected Results**

### **Rich Results Test Should Show:**
- ✅ "Page is eligible for rich results"
- ✅ WebApplication detected
- ✅ FAQ schema detected
- ✅ No errors or warnings

### **Schema Validator Should Show:**
- ✅ "No errors detected"
- ✅ WebPage schema valid
- ✅ WebApplication schema valid
- ✅ FAQPage schema valid

### **Search Console Should Report:**
- ✅ Structured data items: 3+
- ✅ Valid items: All
- ✅ Rich results eligible: Yes

## 🔍 **Manual Search Tests**

### **Search Queries to Test:**
```
site:calorietest.com calorie calculator
"calorie calculator" calorietest.com
calorie calculator BMR TDEE
daily calorie needs calculator
```

### **Look For:**
- Enhanced search snippets
- Star ratings (4.8/5)
- FAQ expansions
- Calculator-specific features

## 🚨 **Troubleshooting**

### **If Schema Not Detected:**
1. Check page source for `application/ld+json`
2. Validate JSON syntax at jsonlint.com
3. Clear browser cache and test again
4. Check for JavaScript errors in console

### **Common Issues:**
- **Syntax Error**: Missing comma or bracket
- **Invalid URL**: Check all URLs are accessible
- **Missing Properties**: Required fields not included
- **Duplicate IDs**: Same @id used multiple times

## 📈 **Monitoring Commands**

### **Check Schema Updates:**
```bash
# Check if schema is in page source
curl -s https://www.calorietest.com/calorie-calculator | grep -o '"@context":"https://schema.org"'

# Count schema blocks
curl -s https://www.calorietest.com/calorie-calculator | grep -c 'application/ld+json'
```

### **Performance Impact:**
```javascript
// Check schema size impact
const schemas = document.querySelectorAll('script[type="application/ld+json"]');
let totalSize = 0;
schemas.forEach(script => totalSize += script.textContent.length);
console.log(`Total schema size: ${(totalSize/1024).toFixed(2)} KB`);
```

---

**Last Updated:** December 25, 2024
**Test Frequency:** Weekly for first month, then monthly 