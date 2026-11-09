/* ==========================================================================
   HỒNG ĐĂNG STUDIO - PRO AUDIO E-COMMERCE, LMS ACADEMY & DSP ENGINE (v2)
   Chủ tài khoản: LE HAI DANG | TECHCOMBANK: 7985 2915 99 | SĐT/Zalo: 0939.326.099
   ========================================================================== */

const STUDIO_CONFIG_KEY = 'hongdang_studio_config_v2';
const STUDIO_CART_KEY = 'hongdang_studio_cart_v2';

const defaultStudioConfig = {
  studioName: 'HỒNG ĐĂNG STUDIO',
  hotline: '0939.326.099',
  zalo: '0939326099',
  email: 'contact@hongdangstudio.vn',
  bankId: 'TCB',
  bankName: 'TECHCOMBANK (Ngân hàng Kỹ Thương)',
  accountNo: '7985291599',
  accountDisplay: '7985 2915 99',
  accountName: 'LE HAI DANG',
  qrImage: 'assets/img/qr-lehaidang.jpg'
};

let studioConfig = JSON.parse(localStorage.getItem(STUDIO_CONFIG_KEY)) || defaultStudioConfig;
// Đảm bảo luôn cập nhật đúng SĐT 0939326099 & Techcombank LE HAI DANG
if (!studioConfig.accountNo || studioConfig.accountNo === '888899998888') {
  studioConfig = defaultStudioConfig;
  localStorage.setItem(STUDIO_CONFIG_KEY, JSON.stringify(studioConfig));
}

let cart = JSON.parse(localStorage.getItem(STUDIO_CART_KEY)) || [];

// ==========================================================================
// 1. DANH MỤC PHẦN MỀM, VST3 PLUGIN & THIẾT BỊ (CHỮ GỌN GÀNG, SÚC TÍCH)
// ==========================================================================
const PRODUCTS_DATA = [
  {
    id: 'hd-live-cubase-pro',
    category: 'software',
    categoryLabel: 'Phần Mềm Hát Live Tự Động',
    badge: 'BÁN CHẠY #1',
    badgeClass: 'badge-hot',
    uiName: 'HD LIVE PRO v16',
    uiSub: 'CUBASE 12–16 CONTROLLER',
    title: 'Phần Mềm HD LIVE Cubase 12–16 Pro',
    desc: 'Điều khiển Cubase hát live & thu âm tự động: Dò tone bài hát, chuyển hiệu ứng Reverb/Delay/Auto-Tune chỉ bằng 1 click.',
    specs: [
      'Tương thích Cubase 12, 13, 14, 15, 16 Pro (Win 10/11)',
      'Kho 10.000+ Tone bài hát Việt & Quốc tế có sẵn',
      'Đồng bộ trực tiếp với Plugin HD TUNE & HD KEY',
      'Tặng Full Project VIP + Cài đặt qua UltraViewer'
    ],
    oldPrice: 2500000,
    price: 1490000
  },
  {
    id: 'hd-tune-key-vst3-bundle',
    category: 'vst3',
    categoryLabel: 'Bộ Đôi VST3 Plugin Độc Quyền',
    badge: 'VST3 64-BIT DSP',
    badgeClass: 'badge-vst',
    uiName: 'HD TUNE + HD KEY',
    uiSub: 'AUTO-KEY & PITCH ENGINE',
    title: 'Combo Plugin HD TUNE + HD KEY VST3',
    desc: 'HD KEY tự động nghe nhạc nhận diện Tone bài hát và truyền thẳng sang HD TUNE chỉnh phô mượt mà chỉ trong 0.5 giây.',
    specs: [
      'Đồng bộ thông minh IPC giữa HD KEY và HD TUNE',
      'Chỉnh phô tự nhiên, giữ nguyên cảm xúc giọng hát',
      'Siêu nhẹ CPU trên Cubase, Sonar, Studio One, FL',
      'Cấp mã Key bản quyền vĩnh viễn theo máy'
    ],
    oldPrice: 1990000,
    price: 1190000
  },
  {
    id: 'hd-live-sonar-edition',
    category: 'software',
    categoryLabel: 'Phần Mềm Điều Khiển Cakewalk',
    badge: 'SIÊU NHẸ CPU',
    badgeClass: 'badge-vip',
    uiName: 'HD LIVE SONAR',
    uiSub: 'ACT MIDI VOCAL CONTROLLER',
    title: 'Phần Mềm HD LIVE SONAR Pro + Project',
    desc: 'Giải pháp hát live mượt mà cho mọi cấu hình máy: Tự động đổi Tone, chỉnh Vang Nhại, Bóp giọng & hiệu ứng Livestream.',
    specs: [
      'Đồng bộ ACT MIDI trực tiếp vào Cakewalk Sonar',
      'Giao diện Tiếng Việt gọn nhẹ, ghim nổi tiện lợi',
      'Tích hợp dịch tone nhạc Beat (Pitch Shifter)',
      'Bản Portable chạy ngay + Hỗ trợ cài đặt tận nơi'
    ],
    oldPrice: 1800000,
    price: 990000
  },
  {
    id: 'hd-vocal-studio-pitch',
    category: 'vst3',
    categoryLabel: 'VST3 Vocal Chain & Dịch Tone',
    badge: 'NEW VST3',
    badgeClass: 'badge-vst',
    uiName: 'HD VOCAL STUDIO',
    uiSub: 'MIX CHAIN & PITCH SHIFTER',
    title: 'Plugin HD Vocal Studio & Pitch Shifter',
    desc: 'Tích hợp trọn bộ xử lý Vocal (EQ, Compressor, De-Esser, Reverb) và nâng/hạ tone nhạc Beat giữ nguyên chất lượng gốc.',
    specs: [
      'Dịch cao độ nhạc nền giữ nguyên nhịp (Formant Pro)',
      '35+ Preset sẵn cho Bolero, Nhạc Trẻ, Ballad, Remix',
      'Chuẩn VST3 64-bit quốc tế – Giao diện Dark 4K',
      'Bảo hành & cập nhật phiên bản mới trọn đời'
    ],
    oldPrice: 1500000,
    price: 890000
  },
  {
    id: 'project-cubase-vip-all-genre',
    category: 'project',
    categoryLabel: 'Project Hát Live & Thu Âm',
    badge: 'CHUẨN PHÒNG THU',
    badgeClass: 'badge-vip',
    uiName: 'MASTER PROJECT VIP',
    uiSub: 'BOLERO • BALLAD • REMIX',
    title: 'Full Project Cubase 12–16 Hát Live VIP',
    desc: 'Tinh chỉnh bởi Hồng Đăng Studio: Giọng dày ấm, sáng bay, nhẹ hơi, chống hú rít tuyệt đối khi live TikTok, Bigo, YouTube.',
    specs: [
      'Đầy đủ chế độ: Nhạc Trẻ, Bolero, Remix, Giọng Ảo, MC',
      'Căn chỉnh riêng theo chất giọng Nam/Nữ & Soundcard',
      'Bao gồm trọn bộ VST Plugins chuyên nghiệp',
      'Cài đặt & cân chỉnh 1-1 qua UltraViewer'
    ],
    oldPrice: 1200000,
    price: 690000
  },
  {
    id: 'combo-hardware-focusrite-at2020',
    category: 'hardware',
    categoryLabel: 'Thiết Bị Phòng Thu Chính Hãng',
    badge: 'TẶNG HD LIVE',
    badgeClass: 'badge-hot',
    uiName: 'STUDIO GEAR COMBO',
    uiSub: '24-BIT / 192KHZ PRO KIT',
    title: 'Combo Soundcard 24-Bit + Micro Pro',
    desc: 'Trọn bộ thiết bị thu âm & livestream chính hãng, tặng kèm Phần mềm HD LIVE + Gói cài đặt Project VIP trị giá 1.500.000đ.',
    specs: [
      'Trọn bộ: Soundcard ASIO + Micro + Tai nghe + Phụ kiện',
      'Độ trễ cực thấp (Zero-Latency), nguồn 48V ổn định',
      'Tặng miễn phí Phần mềm HD LIVE & Project Cubase',
      'Bảo hành chính hãng 12 tháng (1 đổi 1)'
    ],
    oldPrice: 6900000,
    price: 5490000
  }
];

// ==========================================================================
// 2. DANH MỤC KHÓA HỌC THU ÂM, MIX & MASTER NHẠC (SÚC TÍCH, HIỆN ĐẠI)
// ==========================================================================
const COURSES_DATA = [
  {
    id: 'course-mixing-vocal-masterclass',
    level: 'Cơ Bản → Chuyên Sâu',
    duration: '42 Bài Video 4K',
    students: '1.420+ Học viên',
    badge: 'MASTERCLASS',
    title: 'Khóa Học Thu Âm & Mix Vocal Chuẩn Quốc Tế',
    desc: 'Làm chủ quy trình thu âm, chỉnh phô Auto-Tune/Melodyne, cắt EQ, nén Compressor và phối Reverb/Delay chuyên nghiệp.',
    modules: [
      { name: 'Chương 1: Thiết lập ASIO & Gain Staging chuẩn', time: '01:45:00' },
      { name: 'Chương 2: Chỉnh phô với HD TUNE & Melodyne', time: '02:30:00' },
      { name: 'Chương 3: EQ & Compressor làm giọng dày sáng', time: '03:15:00' },
      { name: 'Chương 4: Không gian 3D Reverb & Stereo Delay', time: '02:40:00' },
      { name: 'Chương 5: Mastering chuẩn phát hành (-14 LUFS)', time: '02:10:00' }
    ],
    oldPrice: 4500000,
    price: 2490000
  },
  {
    id: 'course-live-project-technician',
    level: 'Đào Tạo Nghề Kỹ Thuật',
    duration: '30 Bài Thực Chiến',
    students: '890+ Kỹ thuật viên',
    badge: 'NGHỀ CÀI PROJECT',
    title: 'Khóa Học Cài Đặt Project Hát Live Chuyên Nghiệp',
    desc: 'Đào tạo nghề cài đặt Project Cubase, Cakewalk Sonar, Studio One từ xa và xử lý mọi lỗi âm thanh trên các dòng Soundcard.',
    modules: [
      { name: 'Chương 1: Sơ đồ Routing ASIO & Loopback', time: '02:00:00' },
      { name: 'Chương 2: Xây dựng Project nhẹ CPU, chống hú', time: '02:50:00' },
      { name: 'Chương 3: Cân chỉnh nhanh theo từng chất giọng', time: '02:20:00' },
      { name: 'Chương 4: Tích hợp HD LIVE Pro & bàn giao khách', time: '01:55:00' }
    ],
    oldPrice: 5000000,
    price: 2990000
  },
  {
    id: 'course-1on1-vip-coaching',
    level: 'Kèm Trực Tiếp 1-1',
    duration: '12 Buổi Trực Tiếp',
    students: 'Giới hạn 10 HV/tháng',
    badge: 'VIP 1-KÈM-1',
    title: 'Đào Tạo VIP 1-Kèm-1 Cùng Hồng Đăng Studio',
    desc: 'Cầm tay chỉ việc 1 thầy 1 trò qua Zoom/UltraViewer trên chính thiết bị của bạn cho đến khi làm chủ hoàn toàn kỹ năng.',
    modules: [
      { name: 'Giai đoạn 1: Tối ưu toàn bộ thiết bị & phần mềm', time: 'Buổi 1–2' },
      { name: 'Giai đoạn 2: Thực hành Thu âm, Edit & Chỉnh phô', time: 'Buổi 3–6' },
      { name: 'Giai đoạn 3: Mix & Master Multitrack thực tế', time: 'Buổi 7–10' },
      { name: 'Giai đoạn 4: Tốt nghiệp + Tặng trọn bộ Plugin VIP', time: 'Buổi 11–12' }
    ],
    oldPrice: 9500000,
    price: 5900000
  }
];

// ==========================================================================
// 3. DỮ LIỆU TRA CỨU TONE BÀI HÁT
// ==========================================================================
const SONG_DATABASE = [
  { title: 'Cắt Đôi Nỗi Sầu - Tăng Duy Tân', key: 'Am', scale: 'Minor', tempo: '128 BPM', genre: 'Remix / Dance' },
  { title: 'Ngày Mai Người Ta Lấy Chồng - Thành Đạt', key: 'Em', scale: 'Minor', tempo: '68 BPM', genre: 'Ballad' },
  { title: 'Hoa Nở Không Màu - Hoài Lâm', key: 'Dm', scale: 'Minor', tempo: '72 BPM', genre: 'Acoustic Ballad' },
  { title: 'Duyên Phận - Như Quỳnh', key: 'Am', scale: 'Minor', tempo: '82 BPM', genre: 'Bolero' },
  { title: 'Vùng Lá Me Bay - Như Quỳnh', key: 'Dm', scale: 'Minor', tempo: '80 BPM', genre: 'Bolero' },
  { title: 'Nơi Này Có Anh - Sơn Tùng M-TP', key: 'F', scale: 'Major', tempo: '108 BPM', genre: 'Pop' },
  { title: 'Bến Thượng Hải (Lệ Tình)', key: 'Em', scale: 'Minor', tempo: '88 BPM', genre: 'Nhạc Hoa' },
  { title: 'Ai Chung Tình Được Mãi - Đinh Tùng Huy', key: 'C#m', scale: 'Minor', tempo: '70 BPM', genre: 'Ballad' }
];

function formatVND(amount) {
  return new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
}

function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'studio-toast';
  toast.innerHTML = `<span>⚡ ${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function copyTextToClipboard(text, label = 'Số tài khoản') {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  }
  showToast(`Đã sao chép ${label}: ${text}`);
}

// ==========================================================================
// 4. RENDER SẢN PHẨM & KHÓA HỌC
// ==========================================================================
function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const list = filter === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === filter);

  grid.innerHTML = list.map(item => `
    <article class="product-card" data-category="${item.category}">
      <div class="product-visual">
        <div class="product-badge-row">
          <span class="badge-tag ${item.badgeClass}">${item.badge}</span>
          <span style="font-family: var(--font-mono); font-size: 0.68rem; color: #94a3b8;">WIN 10/11 • 64-BIT</span>
        </div>
        <div class="plugin-ui-preview">
          <div>
            <div class="plugin-ui-title">${item.uiName}</div>
            <div class="plugin-ui-sub">${item.uiSub}</div>
          </div>
          <div class="mini-meters" aria-hidden="true">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>
      </div>
      <div class="product-body">
        <div class="product-category">${item.categoryLabel}</div>
        <h3 class="product-title">${item.title}</h3>
        <p class="product-desc">${item.desc}</p>
        <ul class="product-specs">
          ${item.specs.map(s => `<li>${s}</li>`).join('')}
        </ul>
        <div class="product-footer">
          <div class="price-block">
            <span class="price-old">${formatVND(item.oldPrice)}</span>
            <span class="price-current">${formatVND(item.price)}</span>
          </div>
          <div class="product-actions">
            <button class="btn btn-outline btn-sm" onclick="addToCart('${item.id}', 'product')">+ Giỏ</button>
            <button class="btn btn-primary btn-sm" onclick="buyNowItem('${item.id}', 'product')">Mua Ngay</button>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

function renderCourses() {
  const grid = document.getElementById('coursesGrid');
  if (!grid) return;

  grid.innerHTML = COURSES_DATA.map(course => `
    <article class="course-card">
      <div class="course-banner">
        <div class="course-meta-pills">
          <span class="badge-tag badge-vip">${course.badge}</span>
          <span class="meta-pill">⏱ ${course.duration}</span>
          <span class="meta-pill">👨‍🎓 ${course.students}</span>
        </div>
        <h3 class="product-title" style="margin-bottom: 4px;">${course.title}</h3>
        <p style="font-size: 0.78rem; color: #fcd34d; font-weight: 600;">Cấp độ: ${course.level}</p>
      </div>
      <div class="course-body">
        <p class="product-desc">${course.desc}</p>
        <div class="curriculum-preview">
          <h5>📚 Nội Dung Trọng Tâm:</h5>
          <ul class="curriculum-list">
            ${course.modules.map(m => `
              <li>
                <span>${m.name}</span>
                <strong style="color: var(--accent-cyan); white-space: nowrap;">${m.time}</strong>
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="product-footer">
          <div class="price-block">
            <span class="price-old">${formatVND(course.oldPrice)}</span>
            <span class="price-current">${formatVND(course.price)}</span>
          </div>
          <div class="product-actions">
            <button class="btn btn-outline btn-sm" onclick="openCoursePreview('${course.id}')">▶ Học Thử</button>
            <button class="btn btn-gold btn-sm" onclick="buyNowItem('${course.id}', 'course')">Đăng Ký</button>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

// ==========================================================================
// 5. GIỎ HÀNG & THANH TOÁN QR TECHCOMBANK (LE HAI DANG - 7985 2915 99)
// ==========================================================================
function saveCart() {
  localStorage.setItem(STUDIO_CART_KEY, JSON.stringify(cart));
  updateCartUI();
}

function findCatalogItem(id, type) {
  if (type === 'course') return COURSES_DATA.find(c => c.id === id);
  return PRODUCTS_DATA.find(p => p.id === id) || COURSES_DATA.find(c => c.id === id);
}

function addToCart(id, type = 'product') {
  const item = findCatalogItem(id, type);
  if (!item) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: item.id, title: item.title, price: item.price, type: type, qty: 1 });
  }
  saveCart();
  showToast(`Đã thêm "${item.title}" vào giỏ hàng!`);
}

function buyNowItem(id, type = 'product') {
  addToCart(id, type);
  openCheckoutModal();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function updateCartUI() {
  const countEl = document.getElementById('cartCount');
  const bodyEl = document.getElementById('cartDrawerBody');
  const totalEl = document.getElementById('cartTotalValue');

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  if (countEl) countEl.textContent = totalQty;
  if (totalEl) totalEl.textContent = formatVND(getCartTotal());

  if (!bodyEl) return;
  if (cart.length === 0) {
    bodyEl.innerHTML = `
      <div style="text-align:center; padding: 40px 14px; color: var(--text-secondary);">
        <div style="font-size: 2.2rem; margin-bottom: 10px;">🛒</div>
        <p style="font-size: 0.9rem;">Giỏ hàng của bạn đang trống.</p>
      </div>
    `;
    return;
  }

  bodyEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div style="flex: 1;">
        <div style="font-weight: 700; font-size: 0.88rem; margin-bottom: 3px;">${item.title}</div>
        <div style="color: var(--accent-gold); font-weight: 800; font-size: 0.86rem;">
          ${formatVND(item.price)} × ${item.qty}
        </div>
      </div>
      <button class="btn btn-outline btn-sm" onclick="removeFromCart('${item.id}')">✕</button>
    </div>
  `).join('');
}

function toggleCartDrawer(open) {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('backdropOverlay');
  if (!drawer || !backdrop) return;
  drawer.classList.toggle('open', open);
  backdrop.classList.toggle('open', open);
}

function openCheckoutModal() {
  toggleCartDrawer(false);
  if (cart.length === 0) {
    showToast('Vui lòng chọn sản phẩm hoặc khóa học trước khi thanh toán!');
    return;
  }

  const modal = document.getElementById('checkoutModal');
  const total = getCartTotal();
  const orderCode = 'HD' + Math.floor(100000 + Math.random() * 900000);

  const summaryHtml = cart.map(i => `
    <div style="display:flex; justify-content:space-between; padding: 5px 0; border-bottom: 1px dashed rgba(255,255,255,0.08); font-size: 0.86rem;">
      <span>${i.title} (x${i.qty})</span>
      <strong style="color: var(--accent-gold);">${formatVND(i.price * i.qty)}</strong>
    </div>
  `).join('');

  document.getElementById('checkoutOrderSummary').innerHTML = summaryHtml;
  document.getElementById('checkoutTotalAmount').textContent = formatVND(total);
  document.getElementById('checkoutOrderCode').textContent = orderCode;
  document.getElementById('checkoutBankName').textContent = studioConfig.bankName;
  document.getElementById('checkoutAccountNo').textContent = studioConfig.accountDisplay || studioConfig.accountNo;
  document.getElementById('checkoutAccountName').textContent = studioConfig.accountName;

  // Hiển thị chính xác ảnh QR Techcombank LE HAI DANG đã tải lên
  const qrImg = document.getElementById('vietQrImage');
  if (qrImg) {
    qrImg.src = studioConfig.qrImage || 'assets/img/qr-lehaidang.jpg';
  }

  modal.classList.add('open');
}

function closeStudioModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('open');
}

function confirmPaymentOrder() {
  const name = document.getElementById('custName').value.trim() || 'Khách hàng VIP';
  const phone = document.getElementById('custPhone').value.trim() || 'Chưa nhập SĐT';
  const orderCode = document.getElementById('checkoutOrderCode').textContent;
  const generatedKey = 'HDPRO-' + orderCode + '-' + Math.random().toString(36).substring(2, 7).toUpperCase() + '-VIP';

  const resultBox = document.getElementById('orderSuccessBox');
  resultBox.style.display = 'block';
  resultBox.innerHTML = `
    <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid #10b981; border-radius: 12px; padding: 16px; margin-top: 14px;">
      <h4 style="color: #10b981; margin-bottom: 6px; font-size: 0.95rem;">✅ ĐÃ GHI NHẬN ĐƠN HÀNG #${orderCode}</h4>
      <p style="font-size: 0.85rem; margin-bottom: 8px;">
        Cảm ơn <strong>${name}</strong> (${phone})! Mã kích hoạt tạm thời của bạn:
      </p>
      <div style="background:#05080f; padding: 9px 12px; border-radius: 8px; font-family: var(--font-mono); color: var(--accent-cyan); font-weight: 800; font-size: 0.86rem; margin-bottom: 10px;">
        🔑 KEY: ${generatedKey}
      </div>
      <a href="https://zalo.me/${studioConfig.zalo}" target="_blank" class="btn btn-primary btn-sm">
        💬 Nhắn Zalo ${studioConfig.hotline} Nhận Link Tải Ngay
      </a>
    </div>
  `;

  cart = [];
  saveCart();
  showToast(`Đặt hàng thành công! Mã đơn: ${orderCode}`);
}

// ==========================================================================
// 6. LMS PREVIEW, TRA CỨU TONE & GỢI Ý CẤU HÌNH
// ==========================================================================
function openCoursePreview(courseId) {
  const course = COURSES_DATA.find(c => c.id === courseId) || COURSES_DATA[0];
  const modal = document.getElementById('coursePreviewModal');
  document.getElementById('lmsCourseTitle').textContent = course.title;
  document.getElementById('lmsCourseModules').innerHTML = course.modules.map((m, idx) => `
    <div style="padding: 10px 14px; border-radius: 9px; background: ${idx === 0 ? 'rgba(0, 240, 255, 0.12)' : 'rgba(255,255,255,0.03)'}; border: 1px solid ${idx === 0 ? 'var(--accent-cyan)' : 'var(--border-hairline)'}; display:flex; justify-content:space-between; align-items:center; margin-bottom: 7px;">
      <div>
        <div style="font-size: 0.85rem; font-weight: 700;">Bài ${idx + 1}: ${m.name}</div>
        <div style="font-size: 0.72rem; color: var(--text-secondary);">${idx === 0 ? '🔓 Đang mở học thử miễn phí' : '🔒 Mở khóa khi đăng ký'}</div>
      </div>
      <span class="song-key-badge">${m.time}</span>
    </div>
  `).join('');

  const enrollBtn = document.getElementById('lmsEnrollBtn');
  enrollBtn.onclick = () => {
    closeStudioModal('coursePreviewModal');
    buyNowItem(course.id, 'course');
  };

  modal.classList.add('open');
}

function renderSongKeySearch(query = '') {
  const box = document.getElementById('songResultsBox');
  if (!box) return;

  const q = query.trim().toLowerCase();
  const matches = q
    ? SONG_DATABASE.filter(s => s.title.toLowerCase().includes(q) || s.key.toLowerCase().includes(q) || s.genre.toLowerCase().includes(q))
    : SONG_DATABASE;

  if (matches.length === 0) {
    box.innerHTML = `<div style="padding: 14px; color: var(--text-secondary); text-align:center; font-size:0.85rem;">Trong phần mềm <strong>HD LIVE Pro</strong> có sẵn hơn 10.000+ bài hát đầy đủ!</div>`;
    return;
  }

  box.innerHTML = matches.map(song => `
    <div class="song-row">
      <div>
        <div style="font-weight: 700; font-size: 0.86rem;">🎵 ${song.title}</div>
        <div style="font-size: 0.72rem; color: var(--text-secondary);">${song.genre} • ${song.tempo}</div>
      </div>
      <div style="display:flex; align-items:center; gap: 7px;">
        <span class="song-key-badge">${song.key}</span>
        <button class="btn btn-outline btn-sm" style="padding: 4px 9px; font-size: 0.72rem;" onclick="applyKeyToConsole('${song.key}', '${song.title}')">
          Nạp Tone
        </button>
      </div>
    </div>
  `).join('');
}

function applyKeyToConsole(key, songTitle) {
  const keyDisplay = document.getElementById('consoleDetectedKey');
  const songDisplay = document.getElementById('consoleSongStatus');
  if (keyDisplay) keyDisplay.textContent = key;
  if (songDisplay) songDisplay.textContent = `Đã đồng bộ: ${songTitle}`;
  showToast(`Đã nạp Tone ${key} (${songTitle}) vào HD TUNE!`);
}

function updateStudioRecommendation() {
  const goal = document.getElementById('builderGoal')?.value || 'live';
  const budget = document.getElementById('builderBudget')?.value || 'mid';
  const output = document.getElementById('builderRecommendationBox');
  if (!output) return;

  const recommendations = {
    'live_entry': {
      title: 'Gói Khởi Đầu Hát Live Mượt Mà',
      items: 'HD LIVE Cubase / Sonar + Full Project Hát Live VIP',
      price: '1.490.000đ',
      targetId: 'hd-live-cubase-pro'
    },
    'live_mid': {
      title: 'Combo Chuyên Nghiệp Livestream TikTok / YouTube',
      items: 'HD LIVE Cubase 16 Pro + Bộ VST3 HD TUNE & HD KEY + Cài UltraViewer',
      price: '2.390.000đ',
      targetId: 'hd-tune-key-vst3-bundle'
    },
    'live_pro': {
      title: 'Trọn Bộ Thiết Bị Phòng Thu & Phần Mềm VIP',
      items: 'Combo Soundcard 24-bit + Micro Pro + Tặng HD LIVE & Project',
      price: '5.490.000đ',
      targetId: 'combo-hardware-focusrite-at2020'
    },
    'mix_entry': {
      title: 'Gói Tự Học Thu Âm & Mix Vocal Chuẩn Quốc Tế',
      items: 'Khóa học Mix Vocal Masterclass (42 Bài 4K + Sửa bài)',
      price: '2.490.000đ',
      targetId: 'course-mixing-vocal-masterclass'
    },
    'mix_mid': {
      title: 'Gói Đào Tạo Nghề Kỹ Thuật Viên Cài Project',
      items: 'Khóa học Cài Project Hát Live + Bộ công cụ chuẩn phòng thu',
      price: '2.990.000đ',
      targetId: 'course-live-project-technician'
    },
    'mix_pro': {
      title: 'Gói Đào Tạo VIP 1-Kèm-1 Cùng Hồng Đăng Studio',
      items: 'Học trực tiếp 1-1 (12 Buổi) + Tặng Full Phần mềm & VST3 VIP',
      price: '5.900.000đ',
      targetId: 'course-1on1-vip-coaching'
    }
  };

  const rec = recommendations[`${goal}_${budget}`] || recommendations['live_mid'];
  output.innerHTML = `
    <div style="background: rgba(0, 240, 255, 0.07); border: 1px solid var(--border-cyan); border-radius: 11px; padding: 14px; margin-top: 12px;">
      <div style="font-size: 0.7rem; color: var(--accent-cyan); font-weight: 700; text-transform: uppercase;">Gợi Ý Tối Ưu Cho Bạn</div>
      <h4 style="font-size: 0.98rem; margin: 4px 0;">✨ ${rec.title}</h4>
      <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 10px;">${rec.items}</p>
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <strong style="color: var(--accent-gold); font-size: 1.08rem;">${rec.price}</strong>
        <button class="btn btn-primary btn-sm" onclick="buyNowItem('${rec.targetId}')">Chọn Gói Này</button>
      </div>
    </div>
  `;
}

// ==========================================================================
// 7. WEB AUDIO DSP DEMO & SPECTRUM VISUALIZER
// ==========================================================================
let audioCtx = null;
let isPlayingDemo = false;
let demoMode = 'wet';
let demoInterval = null;

function setDemoMode(mode) {
  demoMode = mode;
  document.getElementById('modeDryBtn')?.classList.toggle('active', mode === 'dry');
  document.getElementById('modeWetBtn')?.classList.toggle('active', mode === 'wet');
  const statusEl = document.getElementById('audioChainStatus');
  if (statusEl) {
    statusEl.textContent = mode === 'wet'
      ? 'ON: HD KEY (Am) → HD TUNE (3ms) → Hall Reverb Pro'
      : 'BYPASS: Giọng Mộc Chưa Xử Lý (Dry Signal)';
  }
  showToast(mode === 'wet' ? 'Đã bật hiệu ứng HD TUNE + Reverb!' : 'Đã chuyển sang chế độ Giọng Mộc!');
}

function toggleAudioDemo() {
  const btn = document.getElementById('demoPlayBtn');
  if (isPlayingDemo) {
    isPlayingDemo = false;
    if (demoInterval) clearInterval(demoInterval);
    if (btn) btn.textContent = '▶';
    return;
  }

  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();

  isPlayingDemo = true;
  if (btn) btn.textContent = '⏹';
  showToast('Đang phát DSP Demo (Bấm chuyển Giọng Mộc / Đã Qua HD TUNE để so sánh)!');

  const scaleFreqs = [220.0, 261.63, 293.66, 329.63, 392.0, 440.0, 392.0, 329.63];
  let step = 0;

  const playNote = () => {
    if (!isPlayingDemo || !audioCtx) return;
    const now = audioCtx.currentTime;
    const baseFreq = scaleFreqs[step % scaleFreqs.length];
    const freq = demoMode === 'dry' ? baseFreq * (1 + (step % 2 === 0 ? 0.022 : -0.018)) : baseFreq;

    const osc = audioCtx.createOscillator();
    const subOsc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    osc.type = 'sawtooth';
    subOsc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);
    subOsc.frequency.setValueAtTime(freq * 1.5, now);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(demoMode === 'wet' ? 2400 : 1100, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.11, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, now + (demoMode === 'wet' ? 0.52 : 0.26));

    osc.connect(filter);
    if (demoMode === 'wet') {
      subOsc.connect(filter);
      subOsc.start(now);
      subOsc.stop(now + 0.54);
    }
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.54);
    step++;
  };

  playNote();
  demoInterval = setInterval(playNote, 500);
}

function initSpectrumVisualizer() {
  const canvas = document.getElementById('dspSpectrumCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let phase = 0;

  function draw() {
    const w = canvas.width = canvas.clientWidth;
    const h = canvas.height = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);

    const bars = 36;
    const barWidth = (w / bars) - 4;
    for (let i = 0; i < bars; i++) {
      const boost = isPlayingDemo ? 1.4 : 0.72;
      const wave = Math.sin(phase + i * 0.3) * 0.4 + Math.cos(phase * 0.7 - i * 0.2) * 0.35 + 0.5;
      const barHeight = Math.max(6, Math.min(h - 8, wave * h * 0.65 * boost));
      const x = i * (barWidth + 4);
      const y = h - barHeight;

      const grad = ctx.createLinearGradient(0, y, 0, h);
      if (demoMode === 'wet') {
        grad.addColorStop(0, '#00f0ff');
        grad.addColorStop(0.55, '#3b82f6');
        grad.addColorStop(1, 'rgba(139, 92, 246, 0.2)');
      } else {
        grad.addColorStop(0, '#f59e0b');
        grad.addColorStop(1, 'rgba(245, 158, 11, 0.15)');
      }
      ctx.fillStyle = grad;
      ctx.fillRect(x, y, barWidth, barHeight);
    }
    phase += isPlayingDemo ? 0.12 : 0.04;
    requestAnimationFrame(draw);
  }
  draw();
}

// ==========================================================================
// 8. ADMIN CONFIG & ĐẶT LỊCH CÀI ĐẶT
// ==========================================================================
function openAdminModal() {
  document.getElementById('admBankId').value = studioConfig.bankId;
  document.getElementById('admBankName').value = studioConfig.bankName;
  document.getElementById('admAccountNo').value = studioConfig.accountNo;
  document.getElementById('admAccountName').value = studioConfig.accountName;
  document.getElementById('admHotline').value = studioConfig.hotline;
  document.getElementById('admZalo').value = studioConfig.zalo;
  document.getElementById('adminStudioModal').classList.add('open');
}

function saveAdminConfig() {
  studioConfig.bankId = document.getElementById('admBankId').value.trim() || 'TCB';
  studioConfig.bankName = document.getElementById('admBankName').value.trim();
  studioConfig.accountNo = document.getElementById('admAccountNo').value.trim();
  studioConfig.accountDisplay = studioConfig.accountNo;
  studioConfig.accountName = document.getElementById('admAccountName').value.trim();
  studioConfig.hotline = document.getElementById('admHotline').value.trim();
  studioConfig.zalo = document.getElementById('admZalo').value.trim();

  localStorage.setItem(STUDIO_CONFIG_KEY, JSON.stringify(studioConfig));
  applyStudioConfigToDOM();
  closeStudioModal('adminStudioModal');
  showToast('Đã lưu cấu hình Hồng Đăng Studio thành công!');
}

function applyStudioConfigToDOM() {
  document.querySelectorAll('.dyn-hotline').forEach(el => {
    el.textContent = studioConfig.hotline;
  });
  document.querySelectorAll('.dyn-zalo-link').forEach(el => {
    el.href = `https://zalo.me/${studioConfig.zalo}`;
  });
  document.querySelectorAll('.dyn-tel-link').forEach(el => {
    el.href = `tel:${studioConfig.zalo}`;
  });
}

function submitRemoteBooking(e) {
  e.preventDefault();
  const name = document.getElementById('bookName').value.trim();
  const phone = document.getElementById('bookPhone').value.trim();
  const ultraId = document.getElementById('bookUltraId').value.trim();
  showToast(`Đã nhận lịch hẹn của ${name} (${phone}) — Kỹ thuật viên Hồng Đăng (${studioConfig.hotline}) sẽ kết nối UltraViewer [${ultraId || 'Sẵn sàng'}] ngay!`);
  e.target.reset();
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');
  renderCourses();
  renderSongKeySearch('');
  updateStudioRecommendation();
  updateCartUI();
  applyStudioConfigToDOM();
  initSpectrumVisualizer();

  document.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.filter);
    });
  });

  const songInput = document.getElementById('songSearchInput');
  if (songInput) {
    songInput.addEventListener('input', (e) => renderSongKeySearch(e.target.value));
  }

  document.querySelectorAll('.knob-card').forEach(card => {
    card.addEventListener('click', () => {
      const dial = card.querySelector('.knob-dial');
      const presets = [
        { deg: '180deg', val: '50%' },
        { deg: '250deg', val: '82%' },
        { deg: '310deg', val: '98%' },
        { deg: '110deg', val: '25%' }
      ];
      const next = presets[Math.floor(Math.random() * presets.length)];
      dial.style.setProperty('--knob-deg', next.deg);
      dial.setAttribute('data-val', next.val);
      showToast(`Tinh chỉnh DSP: ${card.querySelector('.knob-label').textContent} → ${next.val}`);
    });
  });
});
