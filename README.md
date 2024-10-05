# Chat Widget

Chat Widget เป็น JavaScript library ที่ช่วยให้คุณสามารถเพิ่มปุ่มติดต่อ LINE และโทรศัพท์ลงในเว็บไซต์ของคุณได้อย่างง่ายดาย

## คุณสมบัติ

- ปุ่มติดต่อ LINE ที่ปรับแต่งได้
- ปุ่มโทรศัพท์ที่ปรับแต่งได้
- รองรับการใช้งานผ่าน Cloudflare Workers
- ปรับแต่งตำแหน่งและสีได้

## การติดตั้ง

คุณสามารถใช้ Chat Widget โดยเพิ่ม script tag ต่อไปนี้ในเว็บไซต์ของคุณ:

```html
<script src="https://lib.venuee-performance.com/chat-widget.js"></script>
```

## การใช้งาน

หลังจากเพิ่ม script แล้ว คุณสามารถเริ่มใช้งาน Chat Widget ได้ดังนี้:

```javascript
<script>
  const widget = ChatWidget({
    lineUrl: 'your-line-id',
    phoneNumber: 'your-phone-number',
    position: 'bottom-right',
    marginBottom: '20px',
    marginRight: '20px',
    lineColor: '#00B900',
    phoneColor: '#007bff'
  });
  widget.init();
</script>
```

## ตัวเลือกการกำหนดค่า

- `lineUrl`: ID ของบัญชี LINE ของคุณ
- `phoneNumber`: หมายเลขโทรศัพท์ที่ต้องการให้ติดต่อ
- `position`: ตำแหน่งของ widget (เช่น 'bottom-right', 'bottom-left', 'top-right', 'top-left')
- `marginBottom`: ระยะห่างจากด้านล่างของหน้าจอ
- `marginRight`: ระยะห่างจากด้านขวาของหน้าจอ
- `lineColor`: สีของปุ่ม LINE
- `phoneColor`: สีของปุ่มโทรศัพท์

## การพัฒนา

### ข้อกำหนดเบื้องต้น

- Node.js (เวอร์ชัน 14 หรือใหม่กว่า)
- npm หรือ yarn
- บัญชี Cloudflare Workers

### การตั้งค่าโปรเจ็กต์

1. Clone repository:
   ```
   git clone https://github.com/your-username/chat-widget.git
   cd chat-widget
   ```

2. ติดตั้ง dependencies:
   ```
   npm install
   ```

3. กำหนดค่า Cloudflare Workers:
   - คัดลอก `wrangler.toml.example` เป็น `wrangler.toml`
   - แก้ไขค่าใน `wrangler.toml` ตาม account_id และ zone_id ของคุณ

4. พัฒนาในโหมด local:
   ```
   npm run dev
   ```

### การ Deploy

การ deploy จะทำโดยอัตโนมัติผ่าน GitHub Actions เมื่อมีการ push ไปยัง main branch

หากต้องการ deploy ด้วยตนเอง:
```
npm run deploy
```

## การสนับสนุน

หากคุณพบปัญหาหรือต้องการความช่วยเหลือ กรุณาสร้าง issue ใน GitHub repository นี้

## การมีส่วนร่วม

เรายินดีรับ contributions! กรุณาอ่าน [CONTRIBUTING.md](CONTRIBUTING.md) สำหรับรายละเอียดเพิ่มเติม

## สัญญาอนุญาต

โปรเจ็กต์นี้อยู่ภายใต้สัญญาอนุญาต MIT - ดูไฟล์ [LICENSE](LICENSE) สำหรับรายละเอียด