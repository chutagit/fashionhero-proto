import { useState } from "react";

const COLORS = {
  "Jet Black":"#111","Triple Black":"#0a0a0a","Washed Black":"#2d2d2d","Black":"#1a1a1a",
  "Forest Green":"#2c5f3f","Storm Blue":"#1e3a5f","Blush Pink":"#e8c4c4","Cloud White":"#f0ece4",
  "Champagne":"#d4c5a9","Navy":"#1a2744","Coral Pink":"#c45c5c","Volt":"#8bc34a",
  "Earth Brown":"#6b4226","White":"#f8f8f8","Natural":"#c8b89a","Espresso":"#4a3728",
  "Cement":"#999","Pearl White":"#f5f5f5","Rose Gold":"#d4a090","Midnight Black":"#080808",
  "Charcoal":"#3d3d3d",
};

const DARK_COLORS = ["#111","#0a0a0a","#2d2d2d","#1a1a1a","#080808","#1e3a5f","#1a2744","#2c5f3f","#3d3d3d","#4a3728","#6b4226"];

function isDark(c) { return DARK_COLORS.includes(c); }

var BASE = "https://fashionhero.aiproductheroes.pl";

function ProductThumb({ color, name, image }) {
  if (image) {
    return <img src={BASE + image} alt={name} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} />;
  }
  var bg = COLORS[color] || "#ddd";
  var tc = isDark(bg) ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.3)";
  return (
    <div style={{width:"100%",height:"100%",background:bg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"4px"}}>
      <div style={{fontSize:"40px",fontWeight:"900",color:tc,lineHeight:"1"}}>{name[0]}</div>
      <div style={{fontSize:"10px",color:tc,letterSpacing:"0.08em",textAlign:"center",padding:"0 8px",textTransform:"uppercase"}}>{name}</div>
      <div style={{fontSize:"9px",color:tc}}>{color}</div>
    </div>
  );
}

var PRODUCTS = [
  {id:1, name:"Cloud Runner",       color:"Jet Black",    seller:"UrbanEdgePro",   price:479, badge:"BESTSELLER", isNew:false, image:"/images/products/product-1.jpg"},
  {id:2, name:"Trail Pacer",        color:"Forest Green", seller:"UrbanEdgePro",   price:559, badge:null,         isNew:true,  image:"/images/products/product-3.jpg"},
  {id:3, name:"Dash Sport",         color:"Storm Blue",   seller:"UrbanEdgePro",   price:579, badge:null,         isNew:true,  image:"/images/products/product-4.jpg"},
  {id:4, name:"Lightweight Jacket", color:"Black",        seller:"UrbanEdgePro",   price:509, badge:null,         isNew:true,  image:"/images/products/product-6.jpg"},
  {id:5, name:"Street Runner X",    color:"Triple Black", seller:"UrbanEdgePro",   price:499, badge:null,         isNew:true,  image:"/images/products/product-7.jpg"},
  {id:6, name:"Stealth Hoodie",     color:"Washed Black", seller:"UrbanEdgePro",   price:429, badge:null,         isNew:true,  image:"/images/products/product-8.jpg"},
  {id:7, name:"Cloud Runner W",     color:"Blush Pink",   seller:"Bella DonnaPro", price:479, badge:"BESTSELLER", isNew:false, image:"/images/products/product-9.jpg"},
  {id:8, name:"Aero Knit",          color:"Cloud White",  seller:"Bella DonnaPro", price:519, badge:null,         isNew:true,  image:"/images/products/product-14.jpg"},
  {id:9, name:"Silk Touch Flat",    color:"Champagne",    seller:"Bella DonnaPro", price:399, badge:null,         isNew:true,  image:"/images/products/product-16.jpg"},
  {id:10,name:"Wrap Dress",         color:"Navy",         seller:"Bella DonnaPro", price:499, badge:null,         isNew:true,  image:"/images/products/product-17.jpg"},
  {id:11,name:"Ankle Boot",         color:"Black",        seller:"Bella DonnaPro", price:549, badge:null,         isNew:true,  image:"/images/products/product-20.jpg"},
  {id:12,name:"Dash Sport W",       color:"Coral Pink",   seller:"SportPeakPro",   price:579, badge:null,         isNew:true,  image:"/images/products/product-22.jpg"},
  {id:13,name:"Velocity Runner",    color:"Volt",         seller:"SportPeakPro",   price:549, badge:null,         isNew:true,  image:"/images/products/product-24.jpg"},
  {id:14,name:"Track Jacket",       color:"Charcoal",     seller:"SportPeakPro",   price:449, badge:null,         isNew:true,  image:"/images/products/product-26.jpg"},
  {id:15,name:"Summit Hiker",       color:"Earth Brown",  seller:"UrbanEdgePro",   price:639, badge:null,         isNew:false, image:"/images/products/product-28.jpg"},
  {id:16,name:"Lab Runner 001",     color:"White",        seller:"Sneaker Lab",    price:249, badge:null,         isNew:false, image:"/images/products/product-30.jpg"},
  {id:17,name:"Hemp Runner",        color:"Natural",      seller:"EcoThreadsPro",  price:219, badge:null,         isNew:true,  image:"/images/products/product-1.jpg"},
  {id:18,name:"Stride Loafer",      color:"Espresso",     seller:"Classic Fit",    price:219, badge:null,         isNew:true,  image:"/images/products/product-3.jpg"},
  {id:19,name:"Jogger Pant",        color:"Charcoal",     seller:"UrbanEdgePro",   price:349, badge:null,         isNew:false, image:"/images/products/product-6.jpg"},
  {id:20,name:"Edge Runner Pro",    color:"Cement",       seller:"UrbanEdgePro",   price:549, badge:null,         isNew:true,  image:"/images/products/product-9.jpg"},
];

var PROMO_HOME = [3, 7, 13];

var PROMO_SEARCH = [
  {id:101, name:"Velocity Runner Pro", color:"Midnight Black", seller:"SportPeakPro",   price:589, slot:1, fee:199, image:"/images/products/product-7.jpg"},
  {id:102, name:"Cloud Runner Elite",  color:"Pearl White",    seller:"UrbanEdgePro",   price:529, slot:2, fee:149, image:"/images/products/product-14.jpg"},
  {id:103, name:"Aero Knit Boost",     color:"Rose Gold",      seller:"Bella DonnaPro", price:499, slot:3, fee:99,  image:"/images/products/product-22.jpg"},
];

var AMBER = "#D97706";
var AMBER_LIGHT = "#FFFBF0";
var AMBER_DARK = "#92400E";
var AMBER_MID = "#B45309";

function ProductCard({ p, showPromo }) {
  var [hov, setHov] = useState(false);
  var isPromo = showPromo && PROMO_HOME.indexOf(p.id) !== -1;
  return (
    <div onMouseEnter={function(){ setHov(true); }} onMouseLeave={function(){ setHov(false); }} style={{cursor:"pointer",position:"relative"}}>
      <div style={{position:"relative",paddingBottom:"133%",overflow:"hidden",background:"#f5f5f5"}}>
        <div style={{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",transform:hov?"scale(1.05)":"scale(1)",transition:"transform 0.35s ease"}}>
          <ProductThumb color={p.color} name={p.name} image={p.image} />
        </div>
        {p.badge && <div style={{position:"absolute",top:"10px",left:"10px",background:"#000",color:"#fff",fontSize:"10px",padding:"3px 7px",letterSpacing:"0.07em",zIndex:"2"}}>{p.badge}</div>}
        {p.isNew && !p.badge && <div style={{position:"absolute",top:"10px",left:"10px",background:"#000",color:"#fff",fontSize:"10px",padding:"3px 7px",letterSpacing:"0.07em",zIndex:"2"}}>NEW</div>}
        {isPromo && <div style={{position:"absolute",top:"10px",right:"10px",background:AMBER,color:"#fff",fontSize:"10px",padding:"3px 7px",fontWeight:"700",zIndex:"2"}}>PROMOWANE</div>}
        <div style={{position:"absolute",bottom:"0",left:"0",right:"0",background:"rgba(0,0,0,0.82)",color:"#fff",textAlign:"center",padding:"9px",fontSize:"11px",letterSpacing:"0.1em",textTransform:"uppercase",fontWeight:"700",opacity:hov?1:0,transition:"opacity 0.2s"}}>QUICK VIEW</div>
      </div>
      <div style={{padding:"9px 2px 14px"}}>
        <div style={{fontWeight:"700",fontSize:"13px",marginBottom:"2px"}}>{p.name}</div>
        <div style={{color:"#777",fontSize:"12px",marginBottom:"2px"}}>{p.color}</div>
        <div style={{color:"#aaa",fontSize:"11px",marginBottom:"5px"}}>Sold by {p.seller}</div>
        <div style={{fontWeight:"900",fontSize:"14px"}}>{p.price} zl</div>
      </div>
    </div>
  );
}

function PromotedCard({ p }) {
  var [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={function(){ setHov(true); }} onMouseLeave={function(){ setHov(false); }} style={{cursor:"pointer",position:"relative",border:"1.5px solid "+AMBER,background:"#fff"}}>
      <div style={{position:"relative",paddingBottom:"133%",overflow:"hidden",background:"#f5f5f5"}}>
        <div style={{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",transform:hov?"scale(1.05)":"scale(1)",transition:"transform 0.35s ease"}}>
          <ProductThumb color={p.color} name={p.name} image={p.image} />
        </div>
        <div style={{position:"absolute",top:"10px",left:"10px",background:AMBER,color:"#fff",fontSize:"10px",padding:"3px 7px",fontWeight:"700",zIndex:"2"}}>SLOT #{p.slot}</div>
        <div style={{position:"absolute",bottom:"0",left:"0",right:"0",background:"rgba(0,0,0,0.82)",color:"#fff",textAlign:"center",padding:"9px",fontSize:"11px",letterSpacing:"0.1em",textTransform:"uppercase",fontWeight:"700",opacity:hov?1:0,transition:"opacity 0.2s"}}>QUICK VIEW</div>
      </div>
      <div style={{padding:"9px 2px 10px"}}>
        <div style={{fontSize:"10px",color:AMBER_MID,fontWeight:"800",marginBottom:"2px"}}>PROMOWANE</div>
        <div style={{fontWeight:"700",fontSize:"13px",marginBottom:"2px"}}>{p.name}</div>
        <div style={{color:"#777",fontSize:"12px",marginBottom:"2px"}}>{p.color}</div>
        <div style={{color:"#aaa",fontSize:"11px",marginBottom:"5px"}}>Sold by {p.seller}</div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div style={{fontWeight:"900",fontSize:"14px"}}>{p.price} zl</div>
          <div style={{fontSize:"10px",color:AMBER,fontWeight:"800"}}>{p.fee} PLN / 7 dni</div>
        </div>
      </div>
    </div>
  );
}

function Navbar({ setPage, setQuery, page }) {
  var [q, setQ] = useState("");
  function submit(e) { e.preventDefault(); setQuery(q || "buty"); setPage("search"); }
  return (
    <div>
      <div style={{background:"#000",color:"#fff",textAlign:"center",padding:"9px 16px",fontSize:"11px",letterSpacing:"0.04em"}}>
        Darmowa dostawa od 299 zl . Latwe zwroty . 4200+ sprzedawcow
      </div>
      <div style={{background:"#fff",borderBottom:"1px solid #e5e5e5",padding:"0 20px",display:"flex",alignItems:"center",justifyContent:"space-between",height:"56px",position:"sticky",top:"0",zIndex:"100"}}>
        <div style={{display:"flex",alignItems:"center",gap:"28px"}}>
          <span onClick={function(){ setPage("home"); }} style={{fontWeight:"900",fontSize:"16px",letterSpacing:"-0.03em",cursor:"pointer"}}>FashionHero</span>
          <div style={{display:"flex",gap:"20px"}}>
            {["MEZCZYZNI","KOBIETY","SALE","NOWOSCI"].map(function(l){ return (
              <span key={l} style={{fontSize:"11px",letterSpacing:"0.1em",cursor:"pointer"}}>{l}</span>
            ); })}
          </div>
        </div>
        <div style={{display:"flex",gap:"8px",alignItems:"center"}}>
          <form onSubmit={submit} style={{display:"flex"}}>
            <input value={q} onChange={function(e){ setQ(e.target.value); }} placeholder="Szukaj..." style={{border:"1.5px solid #000",padding:"6px 10px",fontSize:"12px",width:"180px",outline:"none"}} />
            <button type="submit" style={{background:"#000",color:"#fff",border:"none",padding:"6px 12px",cursor:"pointer",fontSize:"12px"}}>OK</button>
          </form>
          <span onClick={function(){ setPage("seller"); }} style={{fontSize:"11px",letterSpacing:"0.08em",cursor:"pointer",fontWeight:page==="seller"?"800":"400",borderBottom:page==="seller"?"2px solid #000":"2px solid transparent",paddingBottom:"2px"}}>PANEL SPRZEDAWCY</span>
        </div>
      </div>
    </div>
  );
}

var SELLER_NAME = "UrbanEdgePro";

function Tooltip({ text }) {
  var [vis, setVis] = useState(false);
  return (
    <span style={{position:"relative",display:"inline-block",marginLeft:"5px"}}>
      <span onMouseEnter={function(){ setVis(true); }} onMouseLeave={function(){ setVis(false); }}
        style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"14px",height:"14px",borderRadius:"50%",border:"1px solid #aaa",fontSize:"9px",color:"#aaa",cursor:"default",fontWeight:"700",lineHeight:"1"}}>?</span>
      {vis && (
        <div style={{position:"absolute",bottom:"20px",left:"-120px",width:"260px",background:"#111",color:"#fff",fontSize:"11px",padding:"10px 12px",lineHeight:"1.6",zIndex:"300",pointerEvents:"none"}}>
          {text}
          <div style={{position:"absolute",bottom:"-5px",left:"126px",width:"10px",height:"10px",background:"#111",transform:"rotate(45deg)"}} />
        </div>
      )}
    </span>
  );
}

function CampaignForm({ product, onSave, onCancel }) {
  var [rate, setRate] = useState(5);
  var cost = ((product.price * rate) / 100).toFixed(2);

  var EXAMPLE_MARGIN = 35;
  var marginAmt = (product.price * EXAMPLE_MARGIN / 100).toFixed(2);
  var breakEven = ((product.price * EXAMPLE_MARGIN / 100) / product.price * 100).toFixed(1);
  var profitable = rate <= parseFloat(breakEven);

  return (
    <div style={{position:"fixed",top:"0",left:"0",right:"0",bottom:"0",background:"rgba(0,0,0,0.55)",zIndex:"200",display:"flex",alignItems:"center",justifyContent:"center"}} onClick={onCancel}>
      <div style={{background:"#fff",padding:"28px",width:"460px",maxWidth:"90vw",maxHeight:"90vh",overflowY:"auto"}} onClick={function(e){ e.stopPropagation(); }}>
        <div style={{fontWeight:"900",fontSize:"16px",marginBottom:"4px"}}>Promuj produkt</div>
        <div style={{color:"#888",fontSize:"12px",marginBottom:"20px"}}>Model: pay-per-sale — płacisz tylko za faktyczną sprzedaż</div>

        {/* punkt 1: atrybucja — kiedy nalicza się opłata */}
        <div style={{background:"#f0f7ff",border:"1px solid #bfdbfe",padding:"10px 12px",marginBottom:"20px",fontSize:"11px",lineHeight:"1.6",color:"#1e40af"}}>
          <strong>Kiedy zapłacisz?</strong> Opłata nalicza się TYLKO gdy kupujący kliknie Twój promowany listing i sfinalizuje zakup w tej samej sesji. Samo kliknięcie bez zakupu = 0 zł.
        </div>

        <div style={{background:"#f5f5f5",padding:"12px",display:"flex",gap:"12px",alignItems:"center",marginBottom:"20px"}}>
          {product.image && <img src={BASE+product.image} alt={product.name} style={{width:"56px",height:"72px",objectFit:"cover"}} />}
          <div>
            <div style={{fontWeight:"700",fontSize:"13px"}}>{product.name}</div>
            <div style={{color:"#888",fontSize:"12px"}}>{product.color}</div>
            <div style={{fontWeight:"900",fontSize:"13px",marginTop:"4px"}}>{product.price} zł</div>
          </div>
        </div>

        {/* punkt 2: widoczność organiczna */}
        <div style={{background:"#f9fafb",border:"1px solid #e5e5e5",padding:"10px 12px",marginBottom:"20px",fontSize:"11px",lineHeight:"1.6"}}>
          <div style={{fontWeight:"700",marginBottom:"6px",fontSize:"12px"}}>Gdzie pojawi się Twój produkt?</div>
          <div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
            <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
              <span style={{background:AMBER,color:"#fff",fontSize:"9px",padding:"2px 6px",fontWeight:"700",whiteSpace:"nowrap"}}>PROMOWANE</span>
              <span style={{color:"#555"}}>pozycja 1–3 na górze wyników wyszukiwania</span>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
              <span style={{background:"#e5e5e5",color:"#555",fontSize:"9px",padding:"2px 6px",fontWeight:"700",whiteSpace:"nowrap"}}>ORGANICZNE</span>
              <span style={{color:"#555"}}>nadal widoczny w wynikach na swojej naturalnej pozycji</span>
            </div>
          </div>
          <div style={{color:"#888",marginTop:"6px",fontSize:"10px"}}>Promocja nie zastępuje organicznej widoczności — masz obie jednocześnie.</div>
        </div>

        <div style={{marginBottom:"20px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"8px"}}>
            <label style={{fontSize:"12px",fontWeight:"700",letterSpacing:"0.05em",textTransform:"uppercase"}}>
              Stawka pay-per-sale
              <Tooltip text="Procent od ceny sprzedaży który płacisz FashionHero za każdy zakup zrealizowany przez kliknięcie promowanego listingu." />
            </label>
            <span style={{fontWeight:"900",fontSize:"18px"}}>{rate}%</span>
          </div>
          <input type="range" min="3" max="10" step="0.5" value={rate} onChange={function(e){ setRate(parseFloat(e.target.value)); }}
            style={{width:"100%",accentColor:"#000",cursor:"pointer"}} />
          <div style={{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#aaa",marginTop:"4px"}}>
            <span>3% (min)</span><span>10% (max)</span>
          </div>
        </div>

        {/* punkt 3+4: koszt z wyjaśnieniem ROAS i próg opłacalności */}
        <div style={{background:"#f9f9f9",border:"1px solid #e5e5e5",padding:"12px 14px",marginBottom:"20px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"10px"}}>
            <span style={{fontSize:"13px"}}>Opłata per sprzedaż</span>
            <span style={{fontWeight:"900",fontSize:"20px"}}>{cost} zł</span>
          </div>
          <div style={{fontSize:"11px",color:"#666",marginBottom:"10px",lineHeight:"1.5"}}>
            Czyli za każdą złotówkę opłaty reklamowej musisz uzyskać co najmniej <strong>{(1 / (rate/100) * 1).toFixed(1)}x</strong> zwrotu ze sprzedaży, żeby wyjść na zero.
          </div>

          {/* próg opłacalności */}
          <div style={{borderTop:"1px solid #e5e5e5",paddingTop:"10px"}}>
            <div style={{fontSize:"10px",color:"#aaa",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"6px"}}>
              Próg opłacalności
              <Tooltip text="Zakładamy przykładową marżę 35% od ceny sprzedaży. Wpisz swoją marżę żeby zobaczyć realną opłacalność." />
            </div>
            <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"6px"}}>
              <div style={{flex:"1",height:"6px",background:"#e5e5e5",borderRadius:"3px",overflow:"hidden"}}>
                <div style={{width: Math.min(rate/parseFloat(breakEven)*100, 100)+"%", height:"100%", background: profitable ? "#166534" : "#dc2626", transition:"width 0.2s"}} />
              </div>
              <span style={{fontSize:"12px",fontWeight:"800",color: profitable ? "#166534" : "#dc2626",whiteSpace:"nowrap"}}>
                {profitable ? "Opłacalne" : "Powyżej progu"}
              </span>
            </div>
            <div style={{fontSize:"11px",color:"#888"}}>
              Przy marży 35% ({marginAmt} zł) stawka do <strong>{breakEven}%</strong> jest opłacalna. Twoja stawka: <strong>{rate}%</strong>.
            </div>
          </div>
        </div>

        <div style={{display:"flex",gap:"8px"}}>
          <button onClick={function(){ onSave({productId:product.id, rate, status:"active", sales:0, totalFees:0}); }}
            style={{flex:"1",background:"#000",color:"#fff",border:"none",padding:"11px",fontSize:"12px",fontWeight:"800",letterSpacing:"0.08em",cursor:"pointer"}}>
            URUCHOM KAMPANIĘ
          </button>
          <button onClick={onCancel} style={{padding:"11px 16px",background:"#fff",color:"#000",border:"1px solid #ccc",fontSize:"12px",cursor:"pointer"}}>
            Anuluj
          </button>
        </div>
      </div>
    </div>
  );
}

function SellerPage() {
  var [tab, setTab] = useState("products");
  var [campaigns, setCampaigns] = useState([
    {productId:1, rate:5,   status:"active",  sales:14, totalFees:335.30},
    {productId:4, rate:4,   status:"active",  sales:8,  totalFees:162.88},
    {productId:5, rate:6.5, status:"paused",  sales:3,  totalFees:97.37},
    {productId:19,rate:4.5, status:"active",  sales:6,  totalFees:94.23},
  ]);
  var [formProduct, setFormProduct] = useState(null);
  var [simFlash, setSimFlash] = useState(null);

  function simulateSale(pid) {
    setCampaigns(function(prev){
      return prev.map(function(c){
        if (c.productId !== pid) return c;
        var p = PRODUCTS.find(function(x){ return x.id === pid; });
        var fee = parseFloat(((p.price * c.rate) / 100).toFixed(2));
        return Object.assign({}, c, {sales: c.sales+1, totalFees: parseFloat((c.totalFees+fee).toFixed(2))});
      });
    });
    setSimFlash(pid);
    setTimeout(function(){ setSimFlash(null); }, 1800);
  }

  var sellerProducts = PRODUCTS.filter(function(p){ return p.seller === SELLER_NAME; });

  function activeCampaignFor(pid) {
    return campaigns.find(function(c){ return c.productId === pid; }) || null;
  }

  function saveCampaign(data) {
    setCampaigns(function(prev){
      var existing = prev.findIndex(function(c){ return c.productId === data.productId; });
      if (existing >= 0) {
        var next = prev.slice();
        next[existing] = Object.assign({}, prev[existing], data);
        return next;
      }
      return prev.concat(data);
    });
    setFormProduct(null);
  }

  function toggleStatus(pid) {
    setCampaigns(function(prev){
      return prev.map(function(c){
        if (c.productId !== pid) return c;
        return Object.assign({}, c, {status: c.status === "active" ? "paused" : "active"});
      });
    });
  }

  function removeCampaign(pid) {
    setCampaigns(function(prev){ return prev.filter(function(c){ return c.productId !== pid; }); });
  }

  var totalFees = campaigns.reduce(function(s,c){ return s + c.totalFees; }, 0);
  var totalSales = campaigns.reduce(function(s,c){ return s + c.sales; }, 0);
  var activeCnt = campaigns.filter(function(c){ return c.status === "active"; }).length;

  var TAB_STYLE = function(active) { return {
    padding:"8px 18px", fontSize:"12px", fontWeight:active?"800":"400", letterSpacing:"0.07em",
    cursor:"pointer", border:"none", background:"transparent", color:"#000",
    borderBottom: active ? "2px solid #000" : "2px solid transparent",
  }; };

  return (
    <div style={{maxWidth:"960px",margin:"0 auto",padding:"28px 20px 60px"}}>
      <div style={{marginBottom:"24px"}}>
        <div style={{fontSize:"11px",color:"#aaa",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:"6px"}}>Panel Sprzedawcy</div>
        <div style={{fontWeight:"900",fontSize:"24px",letterSpacing:"-0.02em"}}>{SELLER_NAME}</div>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"2px",marginBottom:"28px"}}>
        {[
          {l:"Aktywne kampanie", v:activeCnt},
          {l:"Sprzedaże z promocji", v:totalSales},
          {l:"Suma opłat reklamowych", v:totalFees.toFixed(2)+" zł"},
        ].map(function(s){ return (
          <div key={s.l} style={{background:"#f5f5f5",padding:"16px 18px"}}>
            <div style={{fontSize:"10px",color:"#aaa",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:"6px"}}>{s.l}</div>
            <div style={{fontWeight:"900",fontSize:"22px"}}>{s.v}</div>
          </div>
        ); })}
      </div>

      <div style={{borderBottom:"1px solid #e5e5e5",marginBottom:"20px",display:"flex"}}>
        <button style={TAB_STYLE(tab==="products")} onClick={function(){ setTab("products"); }}>MOJE PRODUKTY</button>
        <button style={TAB_STYLE(tab==="campaigns")} onClick={function(){ setTab("campaigns"); }}>
          KAMPANIE
          {campaigns.length > 0 && <span style={{marginLeft:"6px",background:"#000",color:"#fff",fontSize:"10px",padding:"1px 6px",fontWeight:"700"}}>{campaigns.length}</span>}
        </button>
      </div>

      {tab === "products" && (
        <div>
          <div style={{fontSize:"12px",color:"#888",marginBottom:"14px"}}>{sellerProducts.length} produktów w Twoim sklepie</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",gap:"2px"}}>
            {sellerProducts.map(function(p){
              var camp = activeCampaignFor(p.id);
              return (
                <div key={p.id} style={{position:"relative"}}>
                  <div style={{position:"relative",paddingBottom:"133%",overflow:"hidden",background:"#f5f5f5"}}>
                    {p.image
                      ? <img src={BASE+p.image} alt={p.name} style={{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",objectFit:"cover"}} />
                      : <div style={{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",background:COLORS[p.color]||"#ddd"}} />
                    }
                    {camp && (
                      <div style={{position:"absolute",top:"8px",left:"8px",background:camp.status==="active"?AMBER:"#999",color:"#fff",fontSize:"10px",padding:"3px 7px",fontWeight:"700"}}>
                        {camp.status==="active" ? "PROMOWANE" : "WSTRZYMANE"}
                      </div>
                    )}
                  </div>
                  <div style={{padding:"8px 2px 12px"}}>
                    <div style={{fontWeight:"700",fontSize:"12px",marginBottom:"1px"}}>{p.name}</div>
                    <div style={{color:"#aaa",fontSize:"11px",marginBottom:"6px"}}>{p.price} zł</div>
                    {camp ? (
                      <div style={{display:"flex",gap:"4px"}}>
                        <button onClick={function(){ setFormProduct(p); }}
                          style={{flex:"1",background:"#fff",color:"#000",border:"1px solid #000",padding:"5px",fontSize:"10px",fontWeight:"700",letterSpacing:"0.06em",cursor:"pointer"}}>
                          EDYTUJ {camp.rate}%
                        </button>
                      </div>
                    ) : (
                      <button onClick={function(){ setFormProduct(p); }}
                        style={{width:"100%",background:"#000",color:"#fff",border:"none",padding:"6px",fontSize:"10px",fontWeight:"700",letterSpacing:"0.06em",cursor:"pointer"}}>
                        + PROMUJ
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {tab === "campaigns" && (
        <div>
          {campaigns.length === 0 ? (
            <div style={{textAlign:"center",padding:"60px 20px",color:"#aaa"}}>
              <div style={{fontSize:"32px",marginBottom:"12px"}}>—</div>
              <div style={{fontSize:"14px",fontWeight:"700",marginBottom:"6px",color:"#000"}}>Brak aktywnych kampanii</div>
              <div style={{fontSize:"12px"}}>Przejdź do zakładki Moje Produkty i kliknij „+ Promuj"</div>
            </div>
          ) : (
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:"12px"}}>
              <thead>
                <tr style={{borderBottom:"2px solid #000"}}>
                  {["Produkt","Stawka","Status","Sprzedaże","Suma opłat","ROAS",""].map(function(h,i){ return (
                    <th key={h} style={{padding:"8px 10px",textAlign:"left",fontWeight:"800",fontSize:"10px",letterSpacing:"0.1em",textTransform:"uppercase",whiteSpace:"nowrap"}}>
                      {h}
                      {h==="ROAS" && <Tooltip text="Zwrot z reklamy: za każdą złotówkę opłaty reklamowej ile złotych przychodu wróciło. ROAS 3x = 3 zł przychodu na 1 zł opłaty." />}
                    </th>
                  ); })}
                </tr>
              </thead>
              <tbody>
                {campaigns.map(function(c){
                  var p = PRODUCTS.find(function(x){ return x.id === c.productId; });
                  if (!p) return null;
                  var revenue = c.sales * p.price;
                  var roasVal = c.totalFees > 0 ? (revenue / c.totalFees) : null;
                  var roasLabel = roasVal ? roasVal.toFixed(1)+"x" : "—";
                  var roasColor = roasVal >= 3 ? "#166534" : roasVal ? "#dc2626" : "#000";
                  var flash = simFlash === c.productId;
                  return (
                    <tr key={c.productId} style={{borderBottom:"1px solid #e5e5e5",background:flash?"#f0fdf4":"transparent",transition:"background 0.3s"}}>
                      <td style={{padding:"12px 10px"}}>
                        <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
                          {p.image && <img src={BASE+p.image} alt={p.name} style={{width:"36px",height:"46px",objectFit:"cover",flexShrink:"0"}} />}
                          <div>
                            <div style={{fontWeight:"700"}}>{p.name}</div>
                            <div style={{color:"#aaa",fontSize:"11px"}}>{p.price} zł</div>
                          </div>
                        </div>
                      </td>
                      <td style={{padding:"12px 10px",fontWeight:"900"}}>{c.rate}%</td>
                      <td style={{padding:"12px 10px"}}>
                        <span style={{background:c.status==="active"?"#000":"#e5e5e5",color:c.status==="active"?"#fff":"#888",fontSize:"10px",padding:"3px 8px",fontWeight:"700",letterSpacing:"0.06em"}}>
                          {c.status === "active" ? "AKTYWNA" : "WSTRZYMANA"}
                        </span>
                      </td>
                      <td style={{padding:"12px 10px",fontWeight:"700"}}>{c.sales}</td>
                      <td style={{padding:"12px 10px"}}>
                        <div style={{fontWeight:"700"}}>{c.totalFees.toFixed(2)} zł</div>
                        {c.sales > 0 && <div style={{fontSize:"10px",color:"#aaa"}}>{(c.totalFees/c.sales).toFixed(2)} zł/szt</div>}
                      </td>
                      <td style={{padding:"12px 10px"}}>
                        <div style={{fontWeight:"800",color:roasColor,fontSize:"15px"}}>{roasLabel}</div>
                        {roasVal && <div style={{fontSize:"10px",color:"#aaa"}}>{roasVal.toFixed(1)} zł na 1 zł opłaty</div>}
                      </td>
                      <td style={{padding:"12px 10px"}}>
                        <div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
                          {/* punkt 5: symulacja zakupu */}
                          {c.status === "active" && (
                            <button onClick={function(){ simulateSale(c.productId); }}
                              style={{background:flash?"#166534":"#f5f5f5",color:flash?"#fff":"#000",border:"1px solid "+(flash?"#166534":"#ccc"),padding:"4px 8px",fontSize:"9px",fontWeight:"700",cursor:"pointer",whiteSpace:"nowrap",letterSpacing:"0.04em",transition:"all 0.2s"}}>
                              {flash ? "✓ NALICZONO" : "SYMULUJ ZAKUP"}
                            </button>
                          )}
                          <div style={{display:"flex",gap:"4px"}}>
                            <button onClick={function(){ toggleStatus(c.productId); }}
                              style={{background:"#fff",color:"#000",border:"1px solid #ccc",padding:"4px 8px",fontSize:"9px",cursor:"pointer",whiteSpace:"nowrap"}}>
                              {c.status === "active" ? "Wstrzymaj" : "Wznów"}
                            </button>
                            <button onClick={function(){ removeCampaign(c.productId); }}
                              style={{background:"#fff",border:"1px solid #e5e5e5",color:"#aaa",padding:"4px 6px",fontSize:"10px",cursor:"pointer"}}>
                              ✕
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      )}

      {formProduct && <CampaignForm product={formProduct} onSave={saveCampaign} onCancel={function(){ setFormProduct(null); }} />}
    </div>
  );
}

function ProductGrid({ products, showPromo }) {
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(175px,1fr))",gap:"2px"}}>
      {products.map(function(p){ return <ProductCard key={p.id} p={p} showPromo={showPromo} />; })}
    </div>
  );
}

function HomePage({ setPage, setQuery }) {
  var cols = [
    {t:"Nowosci",bg:"#111"},
    {t:"Dla Mezczyzn",bg:"#1e2a1a"},
    {t:"Dla Kobiet",bg:"#2a1a1e"},
    {t:"Bestsellery",bg:"#1a1a2a"},
  ];
  return (
    <div>
      <div style={{position:"relative",height:"440px",overflow:"hidden",background:"#111",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img src={BASE+"/images/hero/collection-hero-1.jpg"} alt="" style={{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",objectFit:"cover",opacity:"0.55"}} />
        <div style={{fontSize:"100px",fontWeight:"900",color:"rgba(255,255,255,0.04)",letterSpacing:"-0.05em",userSelect:"none"}}>FASHION</div>
        <div style={{position:"absolute",bottom:"50px",left:"50px"}}>
          <div style={{fontSize:"11px",letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.6)",marginBottom:"10px"}}>ODKRYJ 4,000+ SPRZEDAWCOW</div>
          <div style={{fontSize:"46px",fontWeight:"900",color:"#fff",lineHeight:"1.05",marginBottom:"22px",letterSpacing:"-0.03em"}}>Twoj styl.<br />Ich rzemioslo.</div>
          <button onClick={function(){ setQuery("buty damskie"); setPage("search"); }} style={{background:"#fff",color:"#000",border:"none",padding:"10px 20px",fontSize:"11px",letterSpacing:"0.1em",textTransform:"uppercase",cursor:"pointer",fontWeight:"800",marginRight:"10px"}}>SKLEP DLA KOBIET</button>
          <button onClick={function(){ setQuery("buty meskie"); setPage("search"); }} style={{background:"transparent",color:"#fff",border:"2px solid rgba(255,255,255,0.7)",padding:"10px 20px",fontSize:"11px",letterSpacing:"0.1em",textTransform:"uppercase",cursor:"pointer",fontWeight:"700"}}>SKLEP DLA MEZCZYZN</button>
        </div>
      </div>

      <div style={{padding:"28px 20px 0"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"2px"}}>
          {cols.map(function(c){ return (
            <div key={c.t} onClick={function(){ setQuery(c.t); setPage("search"); }} style={{position:"relative",paddingBottom:"110%",overflow:"hidden",cursor:"pointer",background:c.bg}}>
              <div style={{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",display:"flex",alignItems:"flex-end",padding:"14px"}}>
                <div>
                  <div style={{color:"rgba(255,255,255,0.45)",fontSize:"9px",letterSpacing:"0.15em",marginBottom:"4px",textTransform:"uppercase"}}>Kolekcja</div>
                  <div style={{color:"#fff",fontWeight:"700",fontSize:"14px",marginBottom:"6px"}}>{c.t}</div>
                  <span style={{color:"rgba(255,255,255,0.7)",fontSize:"10px",letterSpacing:"0.1em",textTransform:"uppercase"}}>ODKRYJ</span>
                </div>
              </div>
            </div>
          ); })}
        </div>
      </div>

      <div style={{padding:"36px 20px 0"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"14px"}}>
          <div style={{fontSize:"20px",fontWeight:"900",letterSpacing:"-0.02em"}}>Nasze Ulubione</div>
          <div style={{display:"flex",gap:"6px"}}>
            <button style={{border:"1px solid #000",background:"#000",color:"#fff",padding:"5px 13px",fontSize:"11px",cursor:"pointer"}}>NOWOSCI</button>
            <button style={{border:"1px solid #ccc",background:"#fff",padding:"5px 13px",fontSize:"11px",cursor:"pointer"}}>BESTSELLERY</button>
          </div>
        </div>
        <div style={{background:AMBER_LIGHT,border:"1px solid "+AMBER,padding:"10px 14px",marginBottom:"14px",display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}}>
          <span style={{background:AMBER,color:"#fff",fontSize:"11px",fontWeight:"900",padding:"3px 9px",letterSpacing:"0.06em",whiteSpace:"nowrap"}}>PROMOWANE</span>
          <span style={{fontSize:"12px",color:AMBER_DARK}}>Wyroznionte produkty od sprzedawcow Premium - platna widocznosc niezalezna od zwrotow</span>
          <span style={{marginLeft:"auto",fontSize:"11px",color:AMBER_MID,textDecoration:"underline",cursor:"pointer",whiteSpace:"nowrap"}}>Co to jest?</span>
        </div>
        <ProductGrid products={PRODUCTS.slice(0,12)} showPromo={true} />
      </div>

      <div style={{padding:"36px 20px 0"}}>
        <div style={{fontSize:"20px",fontWeight:"900",letterSpacing:"-0.02em",marginBottom:"14px"}}>Wiecej dla Ciebie</div>
        <ProductGrid products={PRODUCTS.slice(12)} showPromo={false} />
      </div>

      <div style={{padding:"48px 20px",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"28px",borderTop:"1px solid #eee",marginTop:"20px"}}>
        {[
          {l:"ODKRYJ",t:"Tysiace sprzedawcow, jedno wyszukiwanie",d:"Od topowych marek po niezaleznych projektantow."},
          {l:"ZAUFANIE",t:"Zweryfikowani sprzedawcy, prawdziwe recenzje",d:"Kazdy sprzedawca jest sprawdzony. Program Pro seller daje pewnosc."},
          {l:"ROZNORODNOSC",t:"Od streetwearu po sustainable",d:"Premium marki, vintage, recznie robione oryginaly."},
        ].map(function(i){ return (
          <div key={i.l}>
            <div style={{fontSize:"10px",letterSpacing:"0.15em",color:"#bbb",marginBottom:"8px",textTransform:"uppercase"}}>{i.l}</div>
            <div style={{fontWeight:"800",fontSize:"15px",marginBottom:"6px"}}>{i.t}</div>
            <div style={{fontSize:"12px",color:"#666",lineHeight:"1.6"}}>{i.d}</div>
          </div>
        ); })}
      </div>

      <div style={{background:"#111",color:"#fff",padding:"36px 20px 20px",marginTop:"40px"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"24px",marginBottom:"24px"}}>
          {[
            {h:"POMOC",ls:["FAQ / Kontakt","Zwroty i Wymiany","Info o Dostawie","Status Zamowienia"]},
            {h:"SKLEP",ls:["Buty Meskie","Buty Damskie","Nowosci","Bestsellery","Sale"]},
            {h:"FIRMA",ls:["Nasza Historia","Materialy","Sustainability","Kariera"]},
            {h:"DLA SPRZEDAWCOW",ls:["Dolacz teraz","Panel Sprzedawcy","Promuj Produkty","Program Pro"]},
          ].map(function(c){ return (
            <div key={c.h}>
              <div style={{fontSize:"10px",letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:"800",marginBottom:"10px"}}>{c.h}</div>
              {c.ls.map(function(l){ return <div key={l} style={{fontSize:"11px",color:"#777",marginBottom:"7px",cursor:"pointer"}}>{l}</div>; })}
            </div>
          ); })}
        </div>
        <div style={{borderTop:"1px solid #2a2a2a",paddingTop:"14px",fontSize:"10px",color:"#555",display:"flex",justifyContent:"space-between"}}>
          <span>2026 FashionHero, Inc.</span>
          <div style={{display:"flex",gap:"14px"}}>
            {["Instagram","TikTok","Facebook","X"].map(function(s){ return <span key={s} style={{cursor:"pointer"}}>{s}</span>; })}
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchPage({ query, setQuery }) {
  var [filter, setFilter] = useState("Wszystkie");
  var [q, setQ] = useState(query);
  var filters = ["Wszystkie","Damskie","Meskie","Buty","Odziez","Akcesoria","Sale"];
  function submit(e) { e.preventDefault(); setQuery(q); }
  return (
    <div>
      <div style={{padding:"18px 20px 0"}}>
        <form onSubmit={submit} style={{display:"flex",maxWidth:"520px"}}>
          <input value={q} onChange={function(e){ setQ(e.target.value); }} placeholder="Szukaj produktow..." style={{flex:"1",border:"1.5px solid #000",borderRight:"none",padding:"9px 13px",fontSize:"13px",outline:"none"}} />
          <button type="submit" style={{background:"#000",color:"#fff",border:"none",padding:"9px 18px",fontSize:"11px",letterSpacing:"0.08em",cursor:"pointer",fontWeight:"700"}}>SZUKAJ</button>
        </form>
      </div>

      <div style={{padding:"10px 20px",fontSize:"12px",color:"#888",borderBottom:"1px solid #e5e5e5"}}>
        <strong style={{color:"#000"}}>{PRODUCTS.length + PROMO_SEARCH.length}</strong> wynikow dla: {query}
        &nbsp;-&nbsp; <span style={{color:AMBER,fontWeight:"800"}}>3 promowane</span>
        &nbsp;-&nbsp; Sortuj: Trafnosc
      </div>

      <div style={{display:"flex",gap:"6px",padding:"10px 20px",borderBottom:"1px solid #e5e5e5",overflowX:"auto"}}>
        {filters.map(function(f){ return (
          <button key={f} onClick={function(){ setFilter(f); }} style={{border:"1px solid "+(filter===f?"#000":"#ccc"),background:filter===f?"#000":"#fff",color:filter===f?"#fff":"#000",padding:"5px 13px",fontSize:"11px",cursor:"pointer",whiteSpace:"nowrap"}}>{f}</button>
        ); })}
      </div>

      <div style={{display:"flex",alignItems:"center",gap:"10px",padding:"12px 20px 10px",background:AMBER_LIGHT,borderBottom:"1px solid #f0d090"}}>
        <span style={{background:AMBER,color:"#fff",fontSize:"11px",fontWeight:"900",letterSpacing:"0.08em",padding:"3px 9px",whiteSpace:"nowrap"}}>PROMOWANE</span>
        <span style={{fontSize:"11px",color:AMBER_DARK}}>Wyroznionte miejsca - oplata od sprzedawcy niezalezna od zwrotow kupujacych</span>
        <span style={{marginLeft:"auto",fontSize:"11px",color:AMBER_MID,textDecoration:"underline",cursor:"pointer",whiteSpace:"nowrap"}}>Dowiedz sie wiecej</span>
      </div>
      <div style={{background:AMBER_LIGHT,padding:"10px 20px 14px",borderBottom:"2px solid "+AMBER}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"2px"}}>
          {PROMO_SEARCH.map(function(p){ return <PromotedCard key={p.id} p={p} />; })}
        </div>
      </div>

      <div style={{padding:"18px 20px 0"}}>
        <div style={{fontSize:"11px",color:"#bbb",marginBottom:"12px",letterSpacing:"0.06em",textTransform:"uppercase"}}>
          Wyniki organiczne - {PRODUCTS.length} produktow
        </div>
        <ProductGrid products={PRODUCTS} showPromo={false} />
      </div>

      <div style={{background:"#111",color:"#fff",padding:"20px",marginTop:"40px"}}>
        <div style={{borderTop:"1px solid #2a2a2a",paddingTop:"14px",fontSize:"10px",color:"#555",display:"flex",justifyContent:"space-between"}}>
          <span>2026 FashionHero, Inc.</span>
        </div>
      </div>
    </div>
  );
}

function InfoPanel() {
  var [open, setOpen] = useState(true);
  var items = [
    "3 sloty na gorze wynikow wyszukiwania",
    "Flat fee: 49-199 PLN / 7 dni",
    "Przychod niezalezny od zwrotow",
    "Oznaczenie Promowane (przejrzyste)",
    "Reczna sprzedaz do top 50 sprzedawcow",
  ];
  if (!open) {
    return (
      <div style={{position:"absolute",bottom:"20px",right:"20px"}}>
        <button onClick={function(){ setOpen(true); }} style={{background:AMBER,color:"#fff",border:"none",padding:"8px 14px",fontSize:"12px",fontWeight:"800",cursor:"pointer"}}>
          INFO
        </button>
      </div>
    );
  }
  return (
    <div style={{position:"absolute",bottom:"20px",right:"20px",background:"#111",color:"#fff",padding:"14px 16px",width:"248px",fontSize:"12px",lineHeight:"1.7"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"6px"}}>
        <span style={{fontWeight:"800",fontSize:"13px",color:"#F59E0B"}}>Promoted Listings MVP</span>
        <button onClick={function(){ setOpen(false); }} style={{background:"none",border:"none",color:"#555",cursor:"pointer",fontSize:"18px",lineHeight:"1",padding:"0"}}>X</button>
      </div>
      <div style={{color:"#777",fontSize:"11px",marginBottom:"8px"}}>Faza 1 - Flat Fee Slots (0-3 mies.)</div>
      <div style={{borderTop:"1px solid #2a2a2a",paddingTop:"8px"}}>
        {items.map(function(t){ return (
          <div key={t} style={{marginBottom:"4px",fontSize:"11px"}}>
            <span style={{color:"#F59E0B"}}>-</span> {t}
          </div>
        ); })}
      </div>
      <div style={{marginTop:"8px",borderTop:"1px solid #2a2a2a",paddingTop:"8px",color:"#444",fontSize:"10px"}}>
        Wpisz cos i kliknij SZUKAJ aby zobaczyc sloty
      </div>
    </div>
  );
}

export default function App() {
  var [page, setPage] = useState("home");
  var [query, setQuery] = useState("buty");
  return (
    <div style={{fontFamily:"Helvetica Neue,Helvetica,Arial,sans-serif",minHeight:"100vh",background:"#fff",color:"#000",fontSize:"14px",position:"relative"}}>
      <Navbar setPage={setPage} setQuery={setQuery} page={page} />
      {page === "home" && <HomePage setPage={setPage} setQuery={setQuery} />}
      {page === "search" && <SearchPage query={query} setQuery={setQuery} />}
      {page === "seller" && <SellerPage />}
      {page !== "seller" && <InfoPanel />}
    </div>
  );
}
