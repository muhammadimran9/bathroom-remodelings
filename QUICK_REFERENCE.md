# ⚡ QUICK REFERENCE - Firebase Console Setup

## 🎯 2 Simple Steps Required

### STEP 1: Add Authorized Domain (2 min)
```
Firebase Console → Authentication → Settings → Authorized domains
→ Add domain: bathroom-remodelings-995z.vercel.app
```

### STEP 2: Deploy Firestore Rules (2 min)
```
Firebase Console → Firestore Database → Rules
→ Replace with content from firestore.rules file
→ Click Publish
```

---

## ✅ Code Changes - ALL COMPLETE

| File | Change | Status |
|------|--------|--------|
| `lib/site-config.ts` | Email → bathroomremodelign@gmail.com | ✅ |
| `components/forms/quote-form.tsx` | Added hydration safety + error handling | ✅ |
| `app/layout.tsx` | Removed async from script tag | ✅ |
| `firestore.rules` | Updated rules syntax | ✅ |

---

## 🧪 Test After Setup

1. Visit: https://bathroom-remodelings-995z.vercel.app
2. Fill quote form (20+ words in message)
3. Click "Get Free Quote"
4. See success message
5. Check Firestore console for new document

---

## 📞 Contact Info

**Email**: bathroomremodelign@gmail.com
**Phone**: (480) 555-0123

---

## 🔗 Links

- **Live Site**: https://bathroom-remodelings-995z.vercel.app
- **Firebase Console**: https://console.firebase.google.com
- **Project**: remodeling-website-6fb31

---

**Total Time**: ~10 minutes
**Status**: Ready for production ✨
