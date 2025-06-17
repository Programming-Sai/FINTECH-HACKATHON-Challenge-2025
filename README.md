# 💸 Paynari – Seamless Payment Shells for Businesses

**[Paynari](https://paynari.vercel.app/)** lets businesses create beautiful, branded payment experiences with just a few clicks. Each payment shell can be customized, themed, and shared — enabling a fast and delightful customer checkout experience.

---

<div align='center'>
    <a href="https://paynari.vercel.app/" target="_blank" rel="noopener noreferrer">
    <picture>
        <source srcset="https://raw.githubusercontent.com/Programming-Sai/FINTECH-HACKATHON-Challenge-2025/snapmock-output/output_laptop.png" media="(prefers-color-scheme: dark)" />
        <source srcset="https://raw.githubusercontent.com/Programming-Sai/FINTECH-HACKATHON-Challenge-2025/snapmock-output/output_laptop.png" media="(prefers-color-scheme: light)" />
        <img src="https://raw.githubusercontent.com/Programming-Sai/FINTECH-HACKATHON-Challenge-2025/snapmock-output/output_laptop.png" alt="Paynari desktop" />
    </picture>
    </div>
    </a>
</div>

<br>
<br>

---

## 🚀 Features

- ⚡ **Instant Payment Shells**  
  Create unique payment links for different products or services.

- 🎨 **Fully Branded UI**  
  Customize colors, logos, and themes for each shell.

- 🔐 **Business-Scoped Access**  
  Payment shells are tied to specific businesses, ensuring secure access (enforced in production).

- 🧩 **Progressive Web App (PWA)**  
  Works across devices, installable, and offline-ready.

- 📲 **Mobile-First Design**  
  Optimized experience for mobile users and vendors.

---

## 🧪 How It Works

1. Businesses log into their dashboard.
2. They can create and customize **payment shells** (think of them as hosted payment pages).
3. A public URL is generated:  
   `https://paynari.com/pay/[slug]`
4. Customers visit the link and complete their payment.

---

## 🛠️ Tech Stack

- **Next.js 14 App Router**
- **Tailwind CSS**
- **MongoDB** (via Mongoose)
- **Service Workers** & Manifest (for PWA support)

---

## 📦 Setup (For Dev)

```bash
git clone https://github.com/yourname/paynari.git
cd paynari
npm install
npm run dev
```

### 🔐 Environment Variables (`.env.local`)

```env
MONGODB_URI=<your-mongo-uri>
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 🧩 File Structure (Simplified)

```
app/
├── layout.js           # Root layout
├── page.js             # Landing page
├── pay/[slug]/         # Payment shell page
├── dashboard/          # Business dashboard
lib/
├── storage.js          # DB operations
├── themes.js           # Theme loading
public/
├── sw.js               # Service worker
├── manifest.json
```

---

## ✅ Demo Use Cases

- A restaurant creates a shell for daily specials.
- A freelance designer shares a payment link after project delivery.
- A vendor at an event uses their phone to receive quick payments.

---

## 🧠 What’s Next

- [ ] Beef up user authentication
- [ ] Role-based business access
- [ ] Full payment processor integration (e.g. Paystack, Flutterwave, MTN MoMo)
- [ ] Analytics per shell

---

<br>
<br>

<div align='center'>
    <a href="https://paynari.vercel.app/" target="_blank" rel="noopener noreferrer">
    <picture>
        <source srcset="https://raw.githubusercontent.com/Programming-Sai/FINTECH-HACKATHON-Challenge-2025/snapmock-output/output_mobile.png" media="(prefers-color-scheme: dark)" />
        <source srcset="https://raw.githubusercontent.com/Programming-Sai/FINTECH-HACKATHON-Challenge-2025/snapmock-output/output_mobile.png" media="(prefers-color-scheme: light)" />
        <img src="https://raw.githubusercontent.com/Programming-Sai/FINTECH-HACKATHON-Challenge-2025/snapmock-output/output_mobile.png" alt="Paynari mobile" />
    </picture>
    </div>
    </a>
</div>
