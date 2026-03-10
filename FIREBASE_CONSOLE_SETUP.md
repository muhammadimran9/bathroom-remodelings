# Firebase Console Configuration - Step-by-Step Guide

## 🔑 Project Details
- **Project Name**: remodeling-website-6fb31
- **Project ID**: remodeling-website-6fb31
- **Live Domain**: bathroom-remodelings-995z.vercel.app

---

## STEP 1: Add Authorized Domain for OAuth

### Why This Step?
Fixes error: "The current domain is not authorized for OAuth operations"

### Instructions:

1. **Open Firebase Console**
   - Go to: https://console.firebase.google.com
   - Sign in with your Google account

2. **Select Your Project**
   - Click on project: `remodeling-website-6fb31`
   - Or find it in the project list

3. **Navigate to Authentication Settings**
   - In left sidebar, click **Authentication**
   - Click the **Settings** tab (gear icon)
   - Scroll down to **Authorized domains** section

4. **Add New Domain**
   - Click **Add domain** button
   - In the text field, enter: `bathroom-remodelings-995z.vercel.app`
   - Click **Add** button
   - Wait for confirmation (usually instant)

5. **Verify**
   - Domain should now appear in the authorized domains list
   - Status should show as "Active"

---

## STEP 2: Deploy Firestore Security Rules

### Why This Step?
Fixes error: "FirebaseError: Missing or insufficient permissions"

### Instructions:

1. **Navigate to Firestore Database**
   - In left sidebar, click **Firestore Database**
   - If you see "Create database" button, click it first
   - Select region (default is fine)
   - Start in **Production mode**

2. **Go to Rules Tab**
   - Click the **Rules** tab at the top
   - You should see existing rules (or empty template)

3. **Replace Rules**
   - Select ALL existing text (Ctrl+A or Cmd+A)
   - Delete it
   - Copy and paste the following rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /quotes/{document=**} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

4. **Publish Rules**
   - Click **Publish** button (top right)
   - Wait for confirmation message
   - Should say "Rules updated successfully"

5. **Verify**
   - Rules are now live
   - Form submissions can now write to Firestore

---

## STEP 3: Verify Firestore Collection (Optional)

### To Check Submitted Forms:

1. **Go to Firestore Data**
   - In left sidebar, click **Firestore Database**
   - Click **Data** tab

2. **Check Quotes Collection**
   - After first form submission, you'll see `quotes` collection
   - Click to expand and view submitted documents
   - Each document contains:
     - name
     - phone
     - email
     - zip
     - service
     - message
     - type: "quote"
     - createdAt: (timestamp)

---

## ✅ Verification Checklist

After completing both steps:

- [ ] Domain `bathroom-remodelings-995z.vercel.app` appears in authorized domains list
- [ ] Firestore rules are published (no errors shown)
- [ ] Rules show the `quotes` collection configuration
- [ ] Test form submission on live site
- [ ] New document appears in Firestore `quotes` collection
- [ ] Browser console shows no critical errors

---

## 🧪 Test Form Submission

1. **Visit Live Site**
   - Go to: https://bathroom-remodelings-995z.vercel.app
   - Navigate to Contact page or find quote form

2. **Fill Out Form**
   - Name: `Test User`
   - Phone: `(480) 555-1234`
   - Email: `test@example.com`
   - ZIP: `85225`
   - Service: Select any option
   - Message: Type at least 20 words (e.g., "I would like to remodel my bathroom with a new walk-in shower and modern fixtures. Please provide a free quote for this project.")

3. **Submit Form**
   - Click "Get Free Quote" button
   - Should see success message: "Quote Request Sent!"
   - Form should reset

4. **Verify in Firebase**
   - Go to Firebase Console
   - Firestore Database → Data
   - Open `quotes` collection
   - Should see new document with your test data

5. **Check Browser Console**
   - Press F12 to open Developer Tools
   - Go to Console tab
   - Should see NO red error messages
   - May see info/warning messages (normal)

---

## 🚨 Troubleshooting

### Issue: "Permission denied" error still appears

**Solution**:
1. Verify rules are published (check Rules tab shows your rules)
2. Wait 30 seconds for rules to propagate
3. Clear browser cache (Ctrl+Shift+Delete)
4. Try form submission again

### Issue: "Domain not authorized" error

**Solution**:
1. Verify domain is in authorized domains list
2. Check spelling: `bathroom-remodelings-995z.vercel.app`
3. Wait 1-2 minutes for changes to propagate
4. Try again

### Issue: Form submits but no data in Firestore

**Solution**:
1. Check Firestore rules are published
2. Verify `quotes` collection exists
3. Check browser console for errors
4. Verify Firebase config in `lib/firebase.ts` is correct

### Issue: "Service temporarily unavailable"

**Solution**:
1. Check Firebase status: https://status.firebase.google.com
2. Wait a few minutes
3. Try again

---

## 📞 Support

If you encounter issues:

1. **Check Firebase Status**: https://status.firebase.google.com
2. **Firebase Documentation**: https://firebase.google.com/docs
3. **Firestore Rules Guide**: https://firebase.google.com/docs/firestore/security/start

---

## 🎯 Summary

**Time Required**: 5-10 minutes

**Steps**:
1. Add domain to authorized domains (2 min)
2. Deploy Firestore rules (2 min)
3. Test form submission (3-5 min)

**Result**: 
- ✅ Form submissions work
- ✅ Data stored in Firestore
- ✅ No console errors
- ✅ Secure configuration

---

**All code changes are already complete. Only these Firebase console steps remain!**
