/* ==========================================================================
   THE MARYAM COLLECTION - Fine Jewellery, Atelier & Multi-Demographic Boutique
   Supervised & Led by Team Leader: Shaik Zunera Maryam (B.Tech Mini Project)
   ========================================================================== */

// Helper to generate elegant SVG image placeholders for jewel items
function generateJewelSVG(type, color1, color2, label) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <linearGradient id="bgGrad_${type}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0A0E17"/>
        <stop offset="100%" stop-color="#181F30"/>
      </linearGradient>
      <linearGradient id="jewelGrad_${type}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1}"/>
        <stop offset="100%" stop-color="${color2}"/>
      </linearGradient>
      <filter id="glow_${type}" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <rect width="400" height="400" fill="url(#bgGrad_${type})"/>
    <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(212,175,55,0.15)" stroke-width="1.5" stroke-dasharray="6,6"/>
    <circle cx="200" cy="200" r="160" fill="none" stroke="rgba(212,175,55,0.08)" stroke-width="1"/>
    
    <!-- Central Jewel Symbol -->
    <g transform="translate(200, 190)" filter="url(#glow_${type})">
      ${type === 'crescent' ? `
        <path d="M-20,-45 A50,50 0 1,0 45,20 A40,40 0 1,1 -20,-45 Z" fill="url(#jewelGrad_${type})" />
        <polygon points="25,-25 30,-10 45,-10 33,0 37,15 25,5 13,15 17,0 5,-10 20,-10" fill="#FFF" />
      ` : type === 'brooch' ? `
        <circle cx="0" cy="0" r="45" fill="none" stroke="url(#jewelGrad_${type})" stroke-width="6"/>
        <polygon points="0,-35 25,0 0,35 -25,0" fill="url(#jewelGrad_${type})"/>
        <circle cx="0" cy="0" r="12" fill="#FFF"/>
      ` : type === 'signet' ? `
        <rect x="-40" y="-30" width="80" height="60" rx="12" fill="url(#jewelGrad_${type})" stroke="#D4AF37" stroke-width="3"/>
        <rect x="-28" y="-20" width="56" height="40" rx="6" fill="#0B0E14"/>
        <path d="M-12,-8 L0,12 L12,-8 Z" fill="#D4AF37"/>
      ` : type === 'cufflink' ? `
        <rect x="-35" y="-35" width="70" height="70" rx="8" fill="url(#jewelGrad_${type})" stroke="#FFF" stroke-width="2"/>
        <circle cx="0" cy="0" r="18" fill="#0A0E17"/>
        <polygon points="0,-10 8,0 0,10 -8,0" fill="url(#jewelGrad_${type})"/>
      ` : type === 'bunny' ? `
        <ellipse cx="-18" cy="-35" rx="10" ry="25" fill="url(#jewelGrad_${type})"/>
        <ellipse cx="18" cy="-35" rx="10" ry="25" fill="url(#jewelGrad_${type})"/>
        <circle cx="0" cy="10" r="32" fill="url(#jewelGrad_${type})"/>
        <circle cx="-10" cy="5" r="4" fill="#000"/>
        <circle cx="10" cy="5" r="4" fill="#000"/>
        <polygon points="0,14 -5,20 5,20" fill="#FFB6C1"/>
      ` : type === 'teddy' ? `
        <circle cx="-28" cy="-28" r="16" fill="url(#jewelGrad_${type})"/>
        <circle cx="28" cy="-28" r="16" fill="url(#jewelGrad_${type})"/>
        <circle cx="0" cy="5" r="38" fill="url(#jewelGrad_${type})"/>
        <ellipse cx="0" cy="12" rx="16" ry="12" fill="#FFF"/>
        <circle cx="-12" cy="-3" r="4" fill="#000"/>
        <circle cx="12" cy="-3" r="4" fill="#000"/>
      ` : type === 'butterfly' ? `
        <path d="M-5,-5 C-45,-45 -55,0 -10,10 C-50,35 -20,50 -5,15 Z" fill="url(#jewelGrad_${type})"/>
        <path d="M5,-5 C45,-45 55,0 10,10 C50,35 20,50 5,15 Z" fill="url(#jewelGrad_${type})"/>
        <rect x="-3" y="-20" width="6" height="40" rx="3" fill="#FFF"/>
      ` : `
        <polygon points="0,-45 35,0 0,45 -35,0" fill="url(#jewelGrad_${type})"/>
        <circle cx="0" cy="0" r="16" fill="#FFF"/>
      `}
    </g>
    <text x="200" y="340" text-anchor="middle" fill="#D4AF37" font-family="'Outfit', sans-serif" font-size="14" font-weight="600" letter-spacing="1.5">${label.toUpperCase()}</text>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

// Initial Comprehensive Dataset across Women, Modest, Men, and Kids
const SEED_PRODUCTS = [
  // --- WOMEN'S FINE JEWELLERY ---
  {
    id: "JWL-101",
    name: "The Royal Solitaire Diamond Ring",
    category: "Rings",
    demographic: "Women",
    metal: "18K Gold",
    weight: "4.8g",
    carat: "1.5 ct",
    price: 4850,
    stock: 8,
    badge: "Best Seller ⭐",
    image: "../assets/diamond_ring_1786121340811.png",
    description: "Classic solitaire engagement ring crafted with a brilliant round diamond set in 18K yellow gold."
  },
  {
    id: "JWL-102",
    name: "Imperial Emerald & Diamond Pendant",
    category: "Necklaces",
    demographic: "Women",
    metal: "18K Gold",
    weight: "8.2g",
    carat: "2.8 ct",
    price: 8900,
    stock: 3,
    badge: "Heritage Edition",
    image: "../assets/emerald_necklace_1786121357100.png",
    description: "A natural Colombian emerald pendant encircled by marquise diamonds on a gold chain."
  },
  {
    id: "JWL-103",
    name: "South Sea Pearl & Diamond Earrings",
    category: "Earrings",
    demographic: "Women",
    metal: "Platinum",
    weight: "6.1g",
    carat: "0.9 ct",
    price: 3250,
    stock: 12,
    badge: "Royal Pearl",
    image: "../assets/pearl_earrings_1786121370844.png",
    description: "White South Sea pearls crowned with cluster diamond studs set in pure 950 platinum."
  },
  {
    id: "JWL-104",
    name: "Heritage 24K Gold Filigree Bangle",
    category: "Bracelets",
    demographic: "Women",
    metal: "24K Gold",
    weight: "28.5g",
    carat: "0 ct",
    price: 6400,
    stock: 2,
    badge: "Pure 24K Gold",
    image: "../assets/gold_bangle_1786121385148.png",
    description: "Heavy solid 24K yellow gold cuff hand-engraved with timeless royal filigree motifs."
  },
  {
    id: "JWL-105",
    name: "Burmese Ruby Teardrop Pendant",
    category: "Necklaces",
    demographic: "Women",
    metal: "Rose Gold",
    weight: "7.4g",
    carat: "2.2 ct",
    price: 7650,
    stock: 5,
    badge: "Leader's Choice 👑",
    image: "../assets/ruby_pendant_1786121545554.png",
    description: "Vivid red Burmese ruby teardrop gemstone encrusted with diamonds in 18K rose gold."
  },
  {
    id: "JWL-106",
    name: "Royal Ceylon Sapphire Halo Ring",
    category: "Rings",
    demographic: "Women",
    metal: "Platinum",
    weight: "5.2g",
    carat: "3.1 ct",
    price: 9400,
    stock: 4,
    badge: "GIA Certified",
    image: "../assets/sapphire_ring_1786121801683.png",
    description: "Deep blue Ceylon sapphire with micro-pave diamond halo set in 950 platinum."
  },

  // --- ✨ MODEST COLLECTION (Hijab Pins, Crescent Brooches, Grace Chains) ---
  {
    id: "JWL-MOD-01",
    name: "Graceful Crescent Moon Diamond Hijab Brooch",
    category: "Pins & Brooches",
    demographic: "Modest",
    metal: "18K Gold",
    weight: "5.8g",
    carat: "0.75 ct",
    price: 1850,
    stock: 7,
    badge: "Modest Star ✨",
    image: generateJewelSVG('crescent', '#F7E7CE', '#D4AF37', 'Crescent Brooch'),
    description: "Ultra-fine solid 18K gold crescent pin set with micro-pave diamonds designed for securing silk scarves and hijabs with royal grace."
  },
  {
    id: "JWL-MOD-02",
    name: "Modest Silk & 24K Gold Magnet Clasp Pins (Set of 4)",
    category: "Pins & Brooches",
    demographic: "Modest",
    metal: "24K Gold",
    weight: "6.0g",
    carat: "0 ct",
    price: 920,
    stock: 15,
    badge: "Hijab Essential",
    image: generateJewelSVG('brooch', '#FFD700', '#B38728', '24K Gold Magnets'),
    description: "Scratch-free neodymium magnetic pins encased in 24K yellow gold with subtle emerald accents for effortless hijab styling."
  },
  {
    id: "JWL-MOD-03",
    name: "Royal Amber & Rose Gold Prayer Bead Bracelet",
    category: "Bracelets",
    demographic: "Modest",
    metal: "Rose Gold",
    weight: "14.2g",
    carat: "0 ct",
    price: 1450,
    stock: 9,
    badge: "Artisanal Grace",
    image: generateJewelSVG('brooch', '#E8927C', '#B85C47', 'Amber & Rose Gold'),
    description: "Natural Baltic amber beads woven with 18K rose gold spacers and a filigree tassel pendant."
  },
  {
    id: "JWL-MOD-04",
    name: "Understated Minimalist 18K Gold Collar Chain",
    category: "Necklaces",
    demographic: "Modest",
    metal: "18K Gold",
    weight: "9.5g",
    carat: "0.2 ct",
    price: 2100,
    stock: 6,
    badge: "High Neck Elegance",
    image: generateJewelSVG('crescent', '#FCF6BA', '#AA771C', 'Collar Chain'),
    description: "Sophisticated high-neck collar chain in 18K gold, designed to sit gracefully above modest clothing and abayas."
  },

  // --- 🤵 MEN'S ATELIER (Signet Rings, Cufflinks, Platinum Chains) ---
  {
    id: "JWL-MEN-01",
    name: "Imperial Black Onyx & 18K Gold Signet Ring",
    category: "Rings",
    demographic: "Men",
    metal: "18K Gold",
    weight: "12.4g",
    carat: "0 ct",
    price: 2800,
    stock: 6,
    badge: "Men's Classic 🤵",
    image: generateJewelSVG('signet', '#D4AF37', '#806010', 'Onyx Signet'),
    description: "Hand-cut natural black onyx tablet mounted on a heavy solid 18K yellow gold signet ring with family crest laser etching option."
  },
  {
    id: "JWL-MEN-02",
    name: "Royal Platinum & Diamond Tuxedo Cufflinks",
    category: "Cufflinks & Bands",
    demographic: "Men",
    metal: "Platinum",
    weight: "14.0g",
    carat: "1.2 ct",
    price: 3600,
    stock: 4,
    badge: "Black Tie Luxury",
    image: generateJewelSVG('cufflink', '#E2E8F0', '#94A3B8', 'Platinum Cufflinks'),
    description: "Solid 950 platinum square cufflinks with channel-set baguette diamonds. Designed for formal black-tie affairs."
  },
  {
    id: "JWL-MEN-03",
    name: "Bold Titan Leather & 24K Gold Cuban Bracelet",
    category: "Bracelets",
    demographic: "Men",
    metal: "24K Gold",
    weight: "18.5g",
    carat: "0 ct",
    price: 1950,
    stock: 8,
    badge: "Masculine Atelier",
    image: generateJewelSVG('signet', '#F6E05E', '#D69E2E', 'Cuban Leather'),
    description: "Braided Italian calfskin leather anchored by a solid 24K gold interlocking Cuban link clasp."
  },
  {
    id: "JWL-MEN-04",
    name: "Sapphire Crown Automatic Timepiece Band",
    category: "Cufflinks & Bands",
    demographic: "Men",
    metal: "Platinum",
    weight: "32.0g",
    carat: "0.5 ct",
    price: 4200,
    stock: 3,
    badge: "Master Craftsmanship",
    image: generateJewelSVG('cufflink', '#3182CE', '#63B3ED', 'Timepiece Link'),
    description: "Luxury solid platinum watch strap link set with sapphire cabochons and precision deployment buckle."
  },

  // --- 🧸 KIDS & CUTE COLLECTION (Bunny Studs, Baby Bangles, Teddy Charms) ---
  {
    id: "JWL-KID-01",
    name: "Cute Little Bunny Pink Sapphire Studs",
    category: "Earrings",
    demographic: "Kids",
    metal: "18K Gold",
    weight: "2.1g",
    carat: "0.4 ct",
    price: 680,
    stock: 14,
    badge: "Cute Favorite 🧸",
    image: generateJewelSVG('bunny', '#FBB6CE', '#ED64A6', 'Bunny Studs'),
    description: "Adorable bunny rabbit ear studs with natural pink sapphires set in hypoallergenic 18K gold with child-safe screw backs."
  },
  {
    id: "JWL-KID-02",
    name: "Starry Night Baby 24K Gold Bangle (Adjustable)",
    category: "Bracelets",
    demographic: "Kids",
    metal: "24K Gold",
    weight: "8.5g",
    carat: "0 ct",
    price: 1150,
    stock: 10,
    badge: "Hypoallergenic Baby",
    image: generateJewelSVG('teddy', '#FEFCBF', '#D69E2E', 'Baby Bangle'),
    description: "Smooth, rounded solid 24K gold baby bangle with delicate laser-engraved stars. Completely nickel-free & child safe."
  },
  {
    id: "JWL-KID-03",
    name: "Sweet Butterfly Enamel 18K Gold Bracelet",
    category: "Bracelets",
    demographic: "Kids",
    metal: "18K Gold",
    weight: "3.4g",
    carat: "0.1 ct",
    price: 820,
    stock: 11,
    badge: "Sweet Charm",
    image: generateJewelSVG('butterfly', '#F472B6', '#DB2777', 'Butterfly Bracelet'),
    description: "Charming pastel pink enamel butterfly charm on a durable 18K yellow gold cable chain with safety extender."
  },
  {
    id: "JWL-KID-04",
    name: "Teddy Bear Diamond Charm Pendant",
    category: "Necklaces",
    demographic: "Kids",
    metal: "Rose Gold",
    weight: "4.2g",
    carat: "0.3 ct",
    price: 950,
    stock: 7,
    badge: "Little Treasures",
    image: generateJewelSVG('teddy', '#F6AD55', '#DD6B20', 'Teddy Bear Pendant'),
    description: "Playful teddy bear pendant encrusted with round brilliant diamonds in 18K rose gold on a child-safe chain."
  }
];

// App State Management
const App = {
  products: [],
  cart: [],
  wishlist: [],
  currentDemographic: 'All',
  currentCategory: 'All',
  metalFilter: 'All',
  searchQuery: '',
  activeMetalChoice: '18K Gold',
  activeMetalMultiplier: 1,
  activeEngraving: '',
  giftWrapNeeded: false,
  selectedProduct: null,
  isAdminPortal: false,

  init() {
    this.loadState();
    this.renderCatalog();
    this.updateBadges();
    this.setupListeners();
  },

  loadState() {
    // Version check to upgrade seed dataset for new demographic collections
    const savedVer = localStorage.getItem('maryam_dataset_ver');
    const CURRENT_VER = '2.0_demographic_leader';

    const savedP = localStorage.getItem('maryam_vanilla_products');
    if (!savedP || savedVer !== CURRENT_VER) {
      this.products = [...SEED_PRODUCTS];
      localStorage.setItem('maryam_vanilla_products', JSON.stringify(this.products));
      localStorage.setItem('maryam_dataset_ver', CURRENT_VER);
    } else {
      this.products = JSON.parse(savedP);
    }

    this.cart = JSON.parse(localStorage.getItem('maryam_vanilla_cart')) || [];
    this.wishlist = JSON.parse(localStorage.getItem('maryam_vanilla_wishlist')) || [];
  },

  saveProducts() {
    localStorage.setItem('maryam_vanilla_products', JSON.stringify(this.products));
    this.renderCatalog();
    this.renderInventory();
  },

  saveCart() {
    localStorage.setItem('maryam_vanilla_cart', JSON.stringify(this.cart));
    this.updateBadges();
    this.renderCart();
  },

  saveWishlist() {
    localStorage.setItem('maryam_vanilla_wishlist', JSON.stringify(this.wishlist));
    this.updateBadges();
  },

  updateBadges() {
    const cartCount = document.getElementById('cart-count');
    const wishCount = document.getElementById('wish-count');
    if (cartCount) cartCount.textContent = this.cart.reduce((s, i) => s + i.qty, 0);
    if (wishCount) wishCount.textContent = this.wishlist.length;
  },

  showToast(msg, type = 'success') {
    const box = document.getElementById('toast-box');
    if (!box) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fa-solid fa-gem" style="color: var(--gold-primary);"></i> <span>${msg}</span>`;
    box.appendChild(toast);
    setTimeout(() => toast.remove(), 3200);
  },

  // Toggle Admin / Customer View
  togglePortalMode() {
    this.isAdminPortal = !this.isAdminPortal;
    const cNav = document.getElementById('customer-nav');
    const aNav = document.getElementById('admin-nav');
    const btnText = document.getElementById('portal-btn-text');

    if (this.isAdminPortal) {
      if (cNav) cNav.style.display = 'none';
      if (aNav) aNav.style.display = 'flex';
      if (btnText) btnText.textContent = 'Customer View';
      this.showToast('Switched to Atelier Manager Portal (Admin Mode)');
      this.switchView('inventory');
    } else {
      if (cNav) cNav.style.display = 'flex';
      if (aNav) aNav.style.display = 'none';
      if (btnText) btnText.textContent = 'Admin Portal';
      this.showToast('Switched to Customer Boutique View');
      this.switchView('shop');
    }
  },

  // View Switcher
  switchView(sectionId) {
    document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

    const targetSection = document.getElementById(`sec-${sectionId}`);
    if (targetSection) targetSection.classList.add('active');

    if (sectionId === 'shop') this.renderCatalog();
    if (sectionId === 'cart') this.renderCart();
    if (sectionId === 'inventory') this.renderInventory();
    if (sectionId === 'customizer') this.setupCustomizer();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  // Filter handlers
  filterDemographic(demo) {
    this.currentDemographic = demo;
    document.querySelectorAll('.demo-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.demo === demo);
    });
    this.updateFilterBanner();
    this.renderCatalog();
  },

  filterCategory(cat) {
    this.currentCategory = cat;
    document.querySelectorAll('.pill-btn[data-cat]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.cat === cat);
    });
    this.updateFilterBanner();
    this.renderCatalog();
  },

  filterMetal(metal) {
    this.metalFilter = metal;
    this.updateFilterBanner();
    this.renderCatalog();
  },

  resetFilters() {
    this.currentDemographic = 'All';
    this.currentCategory = 'All';
    this.metalFilter = 'All';
    this.searchQuery = '';
    
    const searchInp = document.getElementById('search-inp');
    if (searchInp) searchInp.value = '';

    const metalSel = document.getElementById('metal-filter-select');
    if (metalSel) metalSel.value = 'All';

    document.querySelectorAll('.demo-tab-btn').forEach(b => b.classList.toggle('active', b.dataset.demo === 'All'));
    document.querySelectorAll('.pill-btn[data-cat]').forEach(b => b.classList.toggle('active', b.dataset.cat === 'All'));

    this.updateFilterBanner();
    this.renderCatalog();
  },

  updateFilterBanner() {
    const banner = document.getElementById('filter-status-banner');
    const textEl = document.getElementById('current-filter-name');
    if (!banner || !textEl) return;

    const isFiltered = (this.currentDemographic !== 'All' || this.currentCategory !== 'All' || this.metalFilter !== 'All' || this.searchQuery !== '');
    
    if (isFiltered) {
      const parts = [];
      if (this.currentDemographic !== 'All') parts.push(`Section: ${this.currentDemographic}`);
      if (this.currentCategory !== 'All') parts.push(`Category: ${this.currentCategory}`);
      if (this.metalFilter !== 'All') parts.push(`Metal: ${this.metalFilter}`);
      if (this.searchQuery !== '') parts.push(`Search: "${this.searchQuery}"`);

      textEl.textContent = parts.join(' | ');
      banner.style.display = 'flex';
    } else {
      banner.style.display = 'none';
    }
  },

  // Storefront Catalog Render
  renderCatalog() {
    const container = document.getElementById('catalog-grid');
    if (!container) return;

    let filtered = this.products.filter(p => {
      if (this.currentDemographic !== 'All' && p.demographic !== this.currentDemographic) return false;
      if (this.currentCategory !== 'All' && p.category !== this.currentCategory) return false;
      if (this.metalFilter !== 'All' && p.metal !== this.metalFilter) return false;
      if (this.searchQuery.trim() !== '') {
        const q = this.searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.demographic && p.demographic.toLowerCase().includes(q)) ||
          p.description.toLowerCase().includes(q)
        );
      }
      return true;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-gold);">
          <i class="fa-solid fa-gem" style="font-size: 3.2rem; color: var(--gold-primary); margin-bottom: 1rem;"></i>
          <h3 style="font-family: var(--font-heading); font-size: 1.8rem;">No Fine Jewellery Matches Your Filters</h3>
          <p style="color: var(--text-muted); margin-top: 0.5rem;">Try adjusting your demographic section, metal choice, or search terms.</p>
          <button class="btn-gold" onclick="App.resetFilters()" style="margin-top: 1.5rem;">Show All Collections</button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(item => {
      const isWish = this.wishlist.includes(item.id);
      
      // Demographic badge tag styling
      let tagClass = 'tag-women';
      let tagIcon = 'fa-crown';
      let tagLabel = 'Women';
      
      if (item.demographic === 'Modest') {
        tagClass = 'tag-modest';
        tagIcon = 'fa-moon';
        tagLabel = '✨ Modest Grace';
      } else if (item.demographic === 'Men') {
        tagClass = 'tag-men';
        tagIcon = 'fa-user-tie';
        tagLabel = '🤵 Men\'s Atelier';
      } else if (item.demographic === 'Kids') {
        tagClass = 'tag-kids';
        tagIcon = 'fa-heart';
        tagLabel = '🧸 Kids Cute';
      }

      return `
        <div class="card ${item.demographic ? 'card-' + item.demographic.toLowerCase() : ''}">
          <div class="card-img-wrapper">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="card-demo-tag ${tagClass}">
              <i class="fa-solid ${tagIcon}"></i> ${tagLabel}
            </div>
            
            ${item.badge ? `<div class="card-special-badge">${item.badge}</div>` : ''}

            <button onclick="App.toggleWishlist('${item.id}')" title="Wishlist" class="wishlist-btn ${isWish ? 'active' : ''}">
              <i class="fa-${isWish ? 'solid' : 'regular'} fa-heart"></i>
            </button>
          </div>

          <div class="card-body">
            <span class="card-category">${item.category} • ${item.metal}</span>
            <h3 class="card-title" onclick="App.openProductDetails('${item.id}')">${item.name}</h3>
            
            <div class="card-meta">
              <span><i class="fa-solid fa-scale-balanced" style="color:var(--gold-primary);"></i> ${item.weight}</span>
              ${item.carat && item.carat !== '0 ct' ? `<span><i class="fa-regular fa-gem" style="color:var(--gold-primary);"></i> ${item.carat}</span>` : ''}
            </div>

            <p style="color: var(--text-muted); font-size: 0.82rem; margin-bottom: 1rem; line-height: 1.4; height: 2.6rem; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
              ${item.description}
            </p>

            <div class="card-footer">
              <div>
                <span class="card-price">$${item.price.toLocaleString()}</span>
              </div>
              <div style="display: flex; gap: 6px;">
                <button class="btn-outline-gold" onclick="App.openProductDetails('${item.id}')" title="View Specs & Inscribe" style="padding: 0.4rem 0.75rem; font-size: 0.8rem;">
                  Specs
                </button>
                <button class="btn-gold" onclick="App.addToCart('${item.id}')" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">
                  + Bag
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  // Detailed Product Modal with Specs, GIA Certificate & Laser customizer entry
  openProductDetails(id) {
    const item = this.products.find(p => p.id === id);
    if (!item) return;

    const mask = document.getElementById('modal-mask');
    const body = document.getElementById('modal-body');
    if (!mask || !body) return;

    body.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; padding: 0.5rem;">
        <div style="background: #07090D; border: 1px solid var(--border-gold); border-radius: var(--radius-md); overflow: hidden; height: 360px;">
          <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>

        <div>
          <span style="color: var(--gold-primary); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px;">
            ${item.demographic} Section • ${item.category}
          </span>
          <h2 style="font-family: var(--font-heading); font-size: 2rem; margin: 0.4rem 0 0.8rem 0; color: #FFF;">${item.name}</h2>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.2rem; line-height: 1.5;">${item.description}</p>
          
          <div style="background: var(--bg-main); border: 1px solid var(--border-subtle); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 1.2rem; font-size: 0.85rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem;">
            <div><strong style="color: var(--gold-primary);">Metal Purity:</strong> ${item.metal}</div>
            <div><strong style="color: var(--gold-primary);">Item Weight:</strong> ${item.weight}</div>
            <div><strong style="color: var(--gold-primary);">Carat Rating:</strong> ${item.carat || 'N/A'}</div>
            <div><strong style="color: var(--gold-primary);">Stock Status:</strong> ${item.stock > 0 ? 'In Atelier (' + item.stock + ')' : 'Made to Order'}</div>
            <div><strong style="color: var(--gold-primary);">Hallmark:</strong> BIS 916 / GIA</div>
            <div><strong style="color: var(--gold-primary);">Project Lead:</strong> S. Zunera Maryam</div>
          </div>

          <div style="font-size: 2.2rem; font-weight: 700; color: var(--gold-primary); margin-bottom: 1.5rem;">
            $${item.price.toLocaleString()}
          </div>

          <div style="display: flex; gap: 1rem;">
            <button class="btn-gold" onclick="App.closeModal(); App.addToCart('${item.id}');" style="flex: 1; padding: 0.9rem;">
              <i class="fa-solid fa-bag-shopping"></i> Add to Bag
            </button>
            <button class="btn-outline-gold" onclick="App.closeModal(); App.openCustomizer('${item.id}');" style="flex: 1; padding: 0.9rem;">
              <i class="fa-solid fa-wand-magic-sparkles"></i> Inscribe & Customize
            </button>
          </div>
        </div>
      </div>
    `;

    mask.classList.add('active');
  },

  // Team Leader Showcase Modal for Presentation & Professor Review
  showTeamLeaderInfo() {
    const mask = document.getElementById('modal-mask');
    const body = document.getElementById('modal-body');
    if (!mask || !body) return;

    body.innerHTML = `
      <div style="padding: 1rem; text-align: center;">
        <div style="width: 70px; height: 70px; border-radius: 50%; background: var(--emerald-deep); border: 2px solid var(--gold-primary); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; font-size: 2rem; color: var(--gold-primary); box-shadow: var(--shadow-gold);">
          👑
        </div>

        <h2 style="font-family: var(--font-heading); font-size: 2.2rem; color: var(--gold-primary); margin-bottom: 0.3rem;">
          Team Leader Showcase & Project Overview
        </h2>
        <div style="font-size: 0.85rem; color: #FFF; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 1.5rem;">
          Shaik Zunera Maryam • B.Tech Mini Project Head
        </div>

        <div style="background: var(--bg-main); border: 1px solid var(--border-gold); padding: 1.5rem; border-radius: var(--radius-md); text-align: left; font-size: 0.9rem; display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
          <div>
            <h4 style="color: var(--gold-primary); font-size: 1rem; margin-bottom: 0.3rem;"><i class="fa-solid fa-gem"></i> Project Architecture & Key Innovations:</h4>
            <p style="color: var(--text-muted); line-height: 1.5;">
              Multi-Demographic Fine Jewellery E-Commerce & Atelier Management System featuring custom section categorizations for <strong>Women's Fine Jewellery</strong>, an exclusive <strong>Modest Grace Collection</strong> (Hijab Pins & Crescent Brooches), regal <strong>Men's Atelier</strong>, and hypoallergenic <strong>Kids' Cute Jewels</strong>.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; background: var(--bg-surface); padding: 1rem; border-radius: 8px;">
            <div><strong>🎓 Course:</strong> B.Tech Mini Project</div>
            <div><strong>👑 Role:</strong> Team Leader</div>
            <div><strong>✨ Key Modules:</strong> Shop, Customizer, Tracking, CRM</div>
            <div><strong>🛡️ Certification:</strong> GIA & BIS Certificate Generator</div>
          </div>
        </div>

        <button class="btn-gold" onclick="App.closeModal()" style="padding: 0.8rem 2rem;">
          Return to Boutique
        </button>
      </div>
    `;

    mask.classList.add('active');
  },

  toggleWishlist(id) {
    if (this.wishlist.includes(id)) {
      this.wishlist = this.wishlist.filter(i => i !== id);
      this.showToast('Removed from Wishlist');
    } else {
      this.wishlist.push(id);
      this.showToast('Added to Luxury Wishlist');
    }
    this.saveWishlist();
    this.renderCatalog();
  },

  addToCart(id, qty = 1, metal = null, engraving = '') {
    const item = this.products.find(p => p.id === id);
    if (!item) return;

    const chosenMetal = metal || item.metal;
    const finalPrice = Math.round(item.price * (metal === 'Rose Gold' ? 1.05 : metal === 'Platinum' ? 1.15 : 1));

    const existing = this.cart.find(c => c.id === id && c.metal === chosenMetal && c.engraving === engraving);
    if (existing) {
      existing.qty += qty;
    } else {
      this.cart.push({
        id: item.id,
        name: item.name,
        metal: chosenMetal,
        price: finalPrice,
        image: item.image,
        qty: qty,
        engraving: engraving
      });
    }
    this.saveCart();
    this.showToast(`"${item.name}" added to Shopping Bag!`);
  },

  // Customizer Setup
  openCustomizer(id) {
    this.selectedProduct = this.products.find(p => p.id === id) || this.products[0];
    this.switchView('customizer');
  },

  setupCustomizer() {
    if (!this.selectedProduct) this.selectedProduct = this.products[0];
    const item = this.selectedProduct;

    const container = document.getElementById('customizer-container');
    if (!container) return;

    const currentPrice = Math.round(item.price * this.activeMetalMultiplier);

    container.innerHTML = `
      <div class="customizer-grid">
        <div>
          <div style="height: 400px; background: #07090D; border: 1px solid var(--border-gold); border-radius: var(--radius-md); overflow: hidden;">
            <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
        </div>

        <div>
          <span style="color: var(--gold-primary); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1.5px;">Atelier Laser Inscription Studio</span>
          <h2 style="font-family: var(--font-heading); font-size: 2.5rem; margin: 0.3rem 0;">${item.name}</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.2rem;">${item.description}</p>
          <div style="font-size: 2.2rem; font-weight: 700; color: var(--text-gold); margin-bottom: 1.5rem;">
            $${currentPrice.toLocaleString()}
          </div>

          <div style="margin-bottom: 1.2rem;">
            <label style="font-size: 0.88rem; font-weight: 600; display: block; margin-bottom: 0.5rem;">1. Select Metal Purity:</label>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <button class="pill-btn ${this.activeMetalChoice === '18K Gold' ? 'active' : ''}" onclick="App.setMetalChoice('18K Gold', 1)">18K Gold</button>
              <button class="pill-btn ${this.activeMetalChoice === 'Rose Gold' ? 'active' : ''}" onclick="App.setMetalChoice('Rose Gold', 1.05)">Rose Gold (+5%)</button>
              <button class="pill-btn ${this.activeMetalChoice === 'Platinum' ? 'active' : ''}" onclick="App.setMetalChoice('Platinum', 1.15)">950 Platinum (+15%)</button>
            </div>
          </div>

          <div class="engrave-box">
            <label style="color: var(--gold-primary); font-size: 0.88rem; font-weight: 600;">
              <i class="fa-solid fa-pen-nib"></i> 2. Free Laser Inscription / Monogram:
            </label>
            <input type="text" id="engrave-input" placeholder="e.g. Forever Maryam ♥" maxlength="24" oninput="App.updateEngraveText(this.value)" style="width: 100%; margin-top: 8px; background: var(--bg-main); border: 1px solid var(--border-subtle); color: #fff; padding: 0.6rem 1rem; border-radius: var(--radius-sm);">
            
            <div class="preview-band">
              <span id="engrave-render" class="engrave-text-render">${this.activeEngraving || 'Inside Ring / Brooch Inscription Preview'}</span>
            </div>
          </div>

          <button class="btn-gold" onclick="App.addCustomizedToBag()" style="width: 100%; margin-top: 1.5rem; padding: 1rem;">
            <i class="fa-solid fa-bag-shopping"></i> Add Customized Creation to Bag
          </button>
        </div>
      </div>
    `;
  },

  setMetalChoice(metal, mult) {
    this.activeMetalChoice = metal;
    this.activeMetalMultiplier = mult;
    this.setupCustomizer();
  },

  updateEngraveText(val) {
    this.activeEngraving = val;
    const el = document.getElementById('engrave-render');
    if (el) el.textContent = val.trim() ? val : 'Inside Ring / Brooch Inscription Preview';
  },

  addCustomizedToBag() {
    if (!this.selectedProduct) return;
    this.addToCart(this.selectedProduct.id, 1, this.activeMetalChoice, this.activeEngraving);
    this.switchView('cart');
  },

  // Customer Tracking Search
  trackOrderSearch() {
    const inp = document.getElementById('track-inp');
    const res = document.getElementById('track-res');
    if (!inp || !res) return;

    const query = inp.value.trim().toUpperCase();
    if (!query) return;

    res.style.display = 'block';
    res.innerHTML = `
      <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-gold); padding-bottom: 0.6rem; margin-bottom: 1rem;">
        <div>
          <strong style="color: var(--gold-primary); font-size: 1.1rem;">Ref: ${query}</strong>
          <div style="font-size: 0.8rem; color: var(--text-muted);">Customer Order Status • Insured Delivery</div>
        </div>
        <span style="color: #2ECC71; font-weight: 700; font-size: 0.85rem; background: rgba(46,204,113,0.15); padding: 0.2rem 0.6rem; border-radius: 12px; border: 1px solid rgba(46,204,113,0.3);">Crafting in Atelier</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.8rem; font-size: 0.88rem;">
        <div><i class="fa-solid fa-check-circle" style="color: #2ECC71;"></i> Order Verified & BIS Hallmarked</div>
        <div><i class="fa-solid fa-check-circle" style="color: #2ECC71;"></i> Laser Engraved & Inspected by Team Lead Shaik Zunera Maryam</div>
        <div><i class="fa-solid fa-clock" style="color: var(--gold-primary);"></i> Insured Courier Express Dispatch (In Transit)</div>
      </div>
    `;
  },

  // Cart & Invoice
  renderCart() {
    const container = document.getElementById('cart-container');
    if (!container) return;

    if (this.cart.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 4rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-gold);">
          <i class="fa-solid fa-bag-shopping" style="font-size: 3.2rem; color: var(--gold-primary); margin-bottom: 1rem;"></i>
          <h2 style="font-family: var(--font-heading); font-size: 2rem;">Your Shopping Bag is Empty</h2>
          <p style="color: var(--text-muted); margin-top: 0.5rem;">Explore our Women, Modest Grace, Men's, and Kids collections.</p>
          <button class="btn-gold" onclick="App.switchView('shop')" style="margin-top: 1.5rem;">Explore Fine Collections</button>
        </div>
      `;
      return;
    }

    const subtotal = this.cart.reduce((s, i) => s + (i.price * i.qty), 0);

    container.innerHTML = `
      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2rem;">
        <div>
          <div class="table-box">
            <table class="table">
              <thead>
                <tr>
                  <th>Jewellery Item</th>
                  <th>Metal</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${this.cart.map((item, idx) => `
                  <tr>
                    <td>
                      <div style="display: flex; align-items: center; gap: 12px;">
                        <img src="${item.image}" style="width: 48px; height: 48px; border-radius: 6px; object-fit: cover; border: 1px solid var(--border-gold);">
                        <div>
                          <strong>${item.name}</strong>
                          ${item.engraving ? `<div style="font-size: 0.78rem; color: var(--gold-primary); margin-top: 2px;"><i class="fa-solid fa-pen-nib"></i> Inscribed: "${item.engraving}"</div>` : ''}
                        </div>
                      </div>
                    </td>
                    <td>${item.metal}</td>
                    <td>$${item.price.toLocaleString()}</td>
                    <td>${item.qty}</td>
                    <td><strong>$${(item.price * item.qty).toLocaleString()}</strong></td>
                    <td>
                      <button onclick="App.removeFromCart(${idx})" style="background: transparent; border: none; color: #E74C3C; cursor: pointer; font-size: 1rem;" title="Remove">
                        <i class="fa-regular fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-gold); border-radius: var(--radius-md); padding: 1.6rem; box-shadow: var(--shadow-card);">
            <h3 style="font-family: var(--font-heading); font-size: 1.6rem; margin-bottom: 1rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.5rem;">Order Summary</h3>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.8rem; color: var(--text-muted);">
              <span>Subtotal</span>
              <span>$${subtotal.toLocaleString()}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.8rem; color: var(--text-muted);">
              <span>Insured Delivery</span>
              <span style="color: #2ECC71;">COMPLIMENTARY</span>
            </div>

            <!-- Free Luxury Gift Packing Toggle -->
            <div style="margin: 1rem 0; padding: 0.8rem; background: var(--bg-main); border: 1px solid var(--border-subtle); border-radius: 8px; font-size: 0.85rem;">
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" id="gift-wrap-chk" ${this.giftWrapNeeded ? 'checked' : ''} onchange="App.giftWrapNeeded = this.checked">
                <span>🎁 Free Velvet Box & Ribbon Gift Wrap</span>
              </label>
            </div>

            <div style="display: flex; justify-content: space-between; font-size: 1.4rem; font-weight: 700; color: var(--gold-primary); border-top: 1px solid var(--border-gold); padding-top: 1rem;">
              <span>Total</span>
              <span>$${subtotal.toLocaleString()}</span>
            </div>

            <button class="btn-gold" onclick="App.openCheckoutModal(${subtotal})" style="width: 100%; margin-top: 1.5rem; padding: 1rem;">
              <i class="fa-solid fa-lock"></i> Secure Checkout & Print Certificate
            </button>
          </div>
        </div>
      </div>
    `;
  },

  removeFromCart(idx) {
    this.cart.splice(idx, 1);
    this.saveCart();
    this.showToast('Item removed');
  },

  openCheckoutModal(total) {
    const mask = document.getElementById('modal-mask');
    const body = document.getElementById('modal-body');
    if (!mask || !body) return;

    const orderRef = "ORD-" + Math.floor(1000 + Math.random() * 9000);

    body.innerHTML = `
      <div class="invoice-paper">
        <div style="text-align: center; border-bottom: 2px solid #D4AF37; padding-bottom: 1rem; margin-bottom: 1rem;">
          <h2 style="font-size: 2.2rem; color: #0A2E23; font-family: var(--font-heading);">THE MARYAM COLLECTION</h2>
          <div style="font-size: 0.78rem; letter-spacing: 2px; text-transform: uppercase; color: #555;">Official Certificate of Authenticity & Purchase Invoice</div>
          <div style="font-size: 0.85rem; margin-top: 6px; color: #0A2E23;">Order Ref: <strong>${orderRef}</strong></div>
          <div style="font-size: 0.78rem; color: #666; margin-top: 4px;">Supervised & Approved by Team Leader: <strong>Shaik Zunera Maryam</strong></div>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-family: sans-serif; font-size: 0.85rem;">
          <thead>
            <tr style="background: #F4EFE6; color: #0A2E23;">
              <th style="padding: 0.6rem; text-align: left;">Item</th>
              <th style="padding: 0.6rem;">Metal</th>
              <th style="padding: 0.6rem;">Qty</th>
              <th style="padding: 0.6rem; text-align: right;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${this.cart.map(i => `
              <tr style="border-bottom: 1px solid #DDD;">
                <td style="padding: 0.6rem;">
                  <strong>${i.name}</strong>
                  ${i.engraving ? `<br><small style="color:#D4AF37;">Inscription: "${i.engraving}"</small>` : ''}
                </td>
                <td style="padding: 0.6rem; text-align: center;">${i.metal}</td>
                <td style="padding: 0.6rem; text-align: center;">${i.qty}</td>
                <td style="padding: 0.6rem; text-align: right;">$${(i.price * i.qty).toLocaleString()}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        ${this.giftWrapNeeded ? '<div style="font-size: 0.8rem; color: #145C4B; font-weight: 600; margin-bottom: 0.8rem;">✨ Compliments: Velvet Gift Box & Satin Ribbon Included</div>' : ''}

        <div style="text-align: right; font-size: 1.3rem; font-weight: 700; color: #0A2E23; border-top: 2px solid #D4AF37; padding-top: 0.5rem;">
          Grand Total: $${total.toLocaleString()}
        </div>

        <div style="margin-top: 1.5rem; text-align: center; font-size: 0.75rem; color: #666; border-top: 1px dashed #CCC; padding-top: 0.8rem;">
          Certified Hallmarked 916/GIA Diamond Guarantee • B.Tech Mini Project Edition
        </div>

        <button class="btn-gold" onclick="window.print()" style="width: 100%; margin-top: 1.2rem;">
          <i class="fa-solid fa-print"></i> Print Official Certificate
        </button>
      </div>
    `;

    mask.classList.add('active');
  },

  closeModal() {
    const mask = document.getElementById('modal-mask');
    if (mask) mask.classList.remove('active');
  },

  // Inventory Management CRUD (Admin View)
  renderInventory() {
    const container = document.getElementById('inventory-container');
    if (!container) return;

    container.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 2rem;">Stock Registry CRUD</h2>
          <p style="color: var(--text-muted); font-size: 0.85rem;">Manage Women, Modest, Men, and Kids Atelier Stock</p>
        </div>
        <button class="btn-gold" onclick="App.openAddProductModal()">+ Add Jewellery Item</button>
      </div>

      <div class="table-box">
        <table class="table">
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Name</th>
              <th>Demographic</th>
              <th>Category</th>
              <th>Metal</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${this.products.map(p => `
              <tr>
                <td><strong>${p.id}</strong></td>
                <td>${p.name}</td>
                <td><span class="stock-tag in">${p.demographic || 'Women'}</span></td>
                <td>${p.category}</td>
                <td>${p.metal}</td>
                <td>$${p.price.toLocaleString()}</td>
                <td>
                  <button onclick="App.updateStock('${p.id}', -1)" style="padding: 0.2rem 0.5rem; cursor: pointer;">-</button>
                  <span style="margin: 0 6px; font-weight: 700;">${p.stock}</span>
                  <button onclick="App.updateStock('${p.id}', 1)" style="padding: 0.2rem 0.5rem; cursor: pointer;">+</button>
                </td>
                <td>
                  <span class="stock-tag ${p.stock <= 3 ? 'low' : 'in'}">
                    ${p.stock <= 3 ? 'Low Stock' : 'In Stock'}
                  </span>
                </td>
                <td>
                  <button onclick="App.deleteProduct('${p.id}')" style="background: transparent; border: 1px solid #E74C3C; color: #E74C3C; padding: 0.3rem 0.6rem; border-radius: 4px; cursor: pointer;">
                    Delete
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  updateStock(id, delta) {
    const item = this.products.find(p => p.id === id);
    if (item) {
      item.stock = Math.max(0, item.stock + delta);
      this.saveProducts();
    }
  },

  deleteProduct(id) {
    if (confirm('Delete item from inventory registry?')) {
      this.products = this.products.filter(p => p.id !== id);
      this.saveProducts();
      this.showToast('Item deleted');
    }
  },

  openAddProductModal() {
    const mask = document.getElementById('modal-mask');
    const body = document.getElementById('modal-body');
    if (!mask || !body) return;

    body.innerHTML = `
      <div>
        <h2 style="font-family: var(--font-heading); font-size: 1.8rem; margin-bottom: 1rem; color: var(--gold-primary);">Add New Jewellery Creation</h2>
        <form onsubmit="App.saveNewProductSubmit(event)">
          <div style="display: grid; gap: 1rem;">
            <div>
              <label style="font-size: 0.8rem; color: var(--gold-primary);">Item Name</label>
              <input type="text" id="add-name" required placeholder="e.g. Diamond Crescent Pin" style="width: 100%; background: var(--bg-main); border: 1px solid var(--border-subtle); color: #fff; padding: 0.6rem; border-radius: 6px;">
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div>
                <label style="font-size: 0.8rem; color: var(--gold-primary);">Demographic Section</label>
                <select id="add-demographic" style="width: 100%; background: var(--bg-main); border: 1px solid var(--border-subtle); color: #fff; padding: 0.6rem; border-radius: 6px;">
                  <option value="Women">Women's Collection</option>
                  <option value="Modest">✨ Modest Collection</option>
                  <option value="Men">🤵 Men's Atelier</option>
                  <option value="Kids">🧸 Kids & Cute Jewels</option>
                </select>
              </div>

              <div>
                <label style="font-size: 0.8rem; color: var(--gold-primary);">Category</label>
                <select id="add-category" style="width: 100%; background: var(--bg-main); border: 1px solid var(--border-subtle); color: #fff; padding: 0.6rem; border-radius: 6px;">
                  <option value="Rings">Rings</option>
                  <option value="Necklaces">Necklaces</option>
                  <option value="Earrings">Earrings</option>
                  <option value="Bracelets">Bracelets</option>
                  <option value="Pins & Brooches">Pins & Brooches</option>
                  <option value="Cufflinks & Bands">Cufflinks & Bands</option>
                </select>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div>
                <label style="font-size: 0.8rem; color: var(--gold-primary);">Metal Purity</label>
                <select id="add-metal" style="width: 100%; background: var(--bg-main); border: 1px solid var(--border-subtle); color: #fff; padding: 0.6rem; border-radius: 6px;">
                  <option value="18K Gold">18K Gold</option>
                  <option value="24K Gold">24K Gold</option>
                  <option value="Rose Gold">Rose Gold</option>
                  <option value="Platinum">Platinum</option>
                </select>
              </div>

              <div>
                <label style="font-size: 0.8rem; color: var(--gold-primary);">Price ($)</label>
                <input type="number" id="add-price" required placeholder="1850" style="width: 100%; background: var(--bg-main); border: 1px solid var(--border-subtle); color: #fff; padding: 0.6rem; border-radius: 6px;">
              </div>
            </div>
          </div>
          <button type="submit" class="btn-gold" style="width: 100%; margin-top: 1.5rem;">Save Creation</button>
        </form>
      </div>
    `;

    mask.classList.add('active');
  },

  saveNewProductSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('add-name').value;
    const demo = document.getElementById('add-demographic').value;
    const cat = document.getElementById('add-category').value;
    const metal = document.getElementById('add-metal').value;
    const price = parseFloat(document.getElementById('add-price').value) || 0;

    const newP = {
      id: "JWL-" + Math.floor(100 + Math.random() * 900),
      name,
      demographic: demo,
      category: cat,
      metal,
      weight: "5.0g",
      carat: "0.5 ct",
      price,
      stock: 5,
      image: generateJewelSVG('brooch', '#D4AF37', '#B38728', cat),
      description: "Handcrafted fine jewellery item."
    };

    this.products.unshift(newP);
    this.saveProducts();
    this.closeModal();
    this.showToast('New Creation Added to Atelier!');
  },

  setupListeners() {
    const searchInp = document.getElementById('search-inp');
    if (searchInp) {
      searchInp.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.updateFilterBanner();
        this.renderCatalog();
      });
    }

    document.querySelectorAll('.pill-btn[data-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.filterCategory(btn.dataset.cat);
      });
    });
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
