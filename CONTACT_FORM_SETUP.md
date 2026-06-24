# Contact Form Setup Guide

Your contact form is now fully functional! However, you need to complete one quick setup step to activate email delivery.

## Setup Instructions

### Step 1: Get Your Free Web3Forms Access Key

1. Visit [https://web3forms.com](https://web3forms.com)
2. Click "Get Started" or "Create Access Key"
3. Enter your email: `steffinkishore2@gmail.com`
4. You'll receive a free access key instantly (no credit card required)

### Step 2: Add Your Access Key to the Code

1. Open the file: `src/app/components/ContactSection.tsx`
2. Find line 43 where it says: `access_key: 'YOUR_WEB3FORMS_ACCESS_KEY'`
3. Replace `'YOUR_WEB3FORMS_ACCESS_KEY'` with your actual access key from Web3Forms

Example:
```typescript
access_key: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', // Your actual key
```

### Step 3: Test Your Contact Form

1. Fill out the contact form on your portfolio
2. Click "Send Message"
3. You should receive the message at `steffinkishore2@gmail.com`

## Features Implemented

✅ **Required Fields Validation** - Name, email, and message are mandatory
✅ **Email Format Validation** - Ensures valid email addresses
✅ **Loading State** - Shows "Sending..." with spinner animation
✅ **Success Notification** - Beautiful toast notification on successful send
✅ **Error Handling** - Shows error messages if something goes wrong
✅ **Form Reset** - Clears form after successful submission
✅ **Disabled State** - Prevents multiple submissions while sending

## Alternative: Use Mailto (No Setup Required)

If you prefer a simpler approach without any setup, you can use a mailto link instead. The form will open the user's email client:

1. Open `src/app/components/ContactSection.tsx`
2. Replace the `handleSubmit` function with this simple version:

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const mailtoLink = `mailto:steffinkishore2@gmail.com?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
  window.location.href = mailtoLink;
  toast.success('Opening your email client...');
};
```

This approach requires no API keys but depends on the user having an email client configured.

---

**Recommended:** Use Web3Forms for the best user experience!
