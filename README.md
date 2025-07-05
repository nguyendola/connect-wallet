# Connect Wallet Demo

Demo kết nối ví đơn giản sử dụng Wagmi + viem + RainbowKit trong Next.js

## Cài đặt

```bash
npm install
```

## Cấu hình WalletConnect

1. Truy cập [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. Đăng ký tài khoản hoặc đăng nhập
3. Tạo project mới
4. Copy `Project ID` từ dashboard
5. Thay thế `YOUR_WALLETCONNECT_PROJECT_ID` trong file `src/app/providers.tsx`

```typescript
// src/app/providers.tsx
const projectId = "YOUR_WALLETCONNECT_PROJECT_ID"; // Thay thế bằng projectId thật
```

## Chạy dự án

```bash
# Chạy development server
npm run dev

# Chạy với nodemon (tự động restart khi có thay đổi)
npm run dev:watch
```

## Tính năng

- ✅ Header với logo và nút Connect Wallet
- ✅ Tích hợp Wagmi + viem + RainbowKit
- ✅ Hỗ trợ Ethereum mainnet
- ✅ Giao diện dark theme
- ✅ Kết nối ví đơn giản

## Cấu trúc dự án

```
src/
├── app/
│   ├── components/
│   │   └── ConnectButton.tsx    # Component nút kết nối ví
│   ├── layout.tsx               # Layout chính với header
│   ├── page.tsx                 # Trang chính
│   └── providers.tsx            # Providers cho Wagmi + RainbowKit
└── globals.css                  # CSS toàn cục
```

## Lưu ý

- Đảm bảo đã cấu hình đúng `projectId` từ WalletConnect Cloud
- Dự án sử dụng **Ethereum mainnet** - đơn giản và ổn định
- Chỉ cần click "Connect Wallet" để kết nối ví
- Hỗ trợ tất cả các ví phổ biến (MetaMask, Phantom, WalletConnect, etc.)
