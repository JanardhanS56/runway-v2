'use client'

import { useState } from 'react'
import {
  AlertTriangle,
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  CircleHelp,
  Clipboard,
  Clock3,
  FlaskConical,
  Gauge,
  Home,
  Menu,
  Moon,
  Plus,
  Settings2,
  Sparkles,
  Target,
  WalletCards,
  X,
  Zap,
} from 'lucide-react'

const navItems = [
  { label: 'Cockpit', icon: Home },
  { label: 'Decision Lab', icon: FlaskConical },
  { label: 'Money', icon: WalletCards },
  { label: 'Goals', icon: Target },
  { label: 'Health', icon: Gauge },
]

const presets = ['Sneakers ₹2,499', 'Weekend trip ₹1,800', 'Add Netflix ₹199/mo', 'Cancel Spotify', '₹500 to goal']
const decisionTypes = ['One-time', 'Recurring', 'Subscription', 'Goal transfer', 'Skip']

const deltas = [
  { label: 'Balance', before: '₹5,400', after: '₹2,901', diff: '▼ ₹2,499', icon: ArrowDownRight, tone: 'danger' },
  { label: 'Daily allowance', before: '₹231', after: '₹112', diff: '▼ ₹119', icon: ArrowDownRight, tone: 'warning' },
  { label: 'Day-30 forecast', before: '₹1,180', after: '−₹1,319', diff: '▼ ₹2,499', icon: ArrowDownRight, tone: 'danger' },
  { label: 'Headphones goal', before: 'On track', after: 'Misses Day 28', diff: 'Goal slips', icon: Clock3, tone: 'warning' },
  { label: 'Risk', before: 'Low 8%', after: 'High 71%', diff: '▲ 63 pts', icon: AlertTriangle, tone: 'danger' },
  { label: 'Health', before: '78', after: '38', diff: '▼ 40', icon: ArrowDownRight, tone: 'danger' },
]

const saferWays = [
  { title: 'Spend ₹1,100 instead', detail: 'Same vibe, less runway pressure', risk: 'Medium risk 19%' },
  { title: 'Buy on Day 16', detail: 'Your payout lands first', risk: 'Medium risk 24%' },
  { title: 'Split into 2 × ₹1,250', detail: 'Keep your daily pace steady', risk: 'Medium risk 33%' },
]

function Nav({ mobile = false }: { mobile?: boolean }) {
  return (
    <nav className={mobile ? 'mobile-nav' : 'sidebar'} aria-label="Primary navigation">
      {!mobile && <div className="brand"><span className="brand-mark"><Zap size={15} fill="currentColor" /></span><span>Runway</span></div>}
      <div className={mobile ? 'mobile-nav-items' : 'nav-items'}>
        {navItems.map(({ label, icon: Icon }) => (
          <a key={label} href="#" className={`nav-link ${label === 'Decision Lab' ? 'active' : ''}`} aria-current={label === 'Decision Lab' ? 'page' : undefined}>
            <Icon size={18} strokeWidth={1.7} />
            <span>{label === 'Decision Lab' && mobile ? 'Lab' : label}</span>
          </a>
        ))}
      </div>
      {!mobile && <div className="sidebar-bottom"><a className="nav-link" href="#"><Settings2 size={18} /> Settings</a><div className="profile"><span className="avatar">AS</span><span><strong>Arjun S.</strong><small>Personal runway</small></span><ChevronDown size={15} /></div></div>}
    </nav>
  )
}

function Topbar() {
  return <header className="topbar">
    <div className="topbar-left"><button className="icon-button menu-button" aria-label="Open menu"><Menu size={20} /></button><div><p className="eyebrow">YOUR RUNWAY</p><h1>Decision Lab</h1></div></div>
    <div className="top-actions"><span className="day-pill"><span className="pulse-dot" /> Day 9 <span className="muted">of 30</span></span><button className="text-button"><Clock3 size={15} /> Advance day</button><button className="text-button subtle">Fast-forward <ArrowRight size={15} /></button><button className="icon-button" aria-label="Toggle theme"><Moon size={18} /></button><button className="primary-button"><Plus size={17} /> Quick add</button></div>
  </header>
}

function DecisionForm() {
  const [selected, setSelected] = useState('One-time')
  return <section className="card decision-form" aria-labelledby="decision-heading">
    <div className="card-heading"><div><p className="eyebrow lime-text">STEP 01</p><h2 id="decision-heading">Your decision</h2></div><CircleHelp size={17} className="muted-icon" /></div>
    <label className="field-label" htmlFor="amount">How much?</label>
    <div className="amount-input"><span>₹</span><input id="amount" defaultValue="2,499" inputMode="numeric" aria-label="Decision amount" /><button aria-label="Clear amount"><X size={16} /></button></div>
    <fieldset className="fieldset"><legend className="field-label">What kind?</legend><div className="segmented">{decisionTypes.map(type => <button key={type} type="button" onClick={() => setSelected(type)} className={selected === type ? 'selected' : ''}>{type}</button>)}</div></fieldset>
    <label className="field-label" htmlFor="day">When?</label><div className="select-wrap"><select id="day" defaultValue="Day 10"><option>Day 10</option><option>Day 16</option><option>Day 20</option></select><ChevronDown size={16} /></div>
    <label className="field-label" htmlFor="category">Category</label><div className="select-wrap"><select id="category" defaultValue="Shopping"><option>Shopping</option><option>Food & drinks</option><option>Travel</option><option>Subscriptions</option></select><ChevronDown size={16} /></div>
    <div className="form-divider" />
    <p className="field-label">Try a preset</p><div className="preset-list">{presets.map(preset => <button key={preset} className="preset-chip" type="button">{preset}</button>)}</div>
  </section>
}

function RunwayChart() {
  return <section className="card chart-card" aria-labelledby="chart-heading">
    <div className="chart-header"><div><p className="eyebrow violet-text">THE GHOST FUTURE</p><h2 id="chart-heading">Your runway</h2></div><button className="small-icon-button" aria-label="Chart options"><BarChart3 size={17} /></button></div>
    <div className="chart-legend"><span><i className="legend-line real" /> Real</span><span><i className="legend-line ghost" /> With sneakers</span><span><i className="legend-dot" /> Today</span></div>
    <div className="chart-wrap"><svg viewBox="0 0 720 320" role="img" aria-labelledby="chart-title chart-desc" preserveAspectRatio="none"><title id="chart-title">Runway projection with simulated sneaker purchase</title><desc id="chart-desc">The real balance remains above zero. The violet simulated line crosses below zero around day 26.</desc><defs><linearGradient id="band" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#C6F432" stopOpacity=".15"/><stop offset="1" stopColor="#C6F432" stopOpacity="0"/></linearGradient><linearGradient id="dangerFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#FB7185" stopOpacity=".04"/><stop offset="1" stopColor="#FB7185" stopOpacity=".18"/></linearGradient></defs><g className="grid-lines"><line x1="40" y1="48" x2="690" y2="48"/><line x1="40" y1="112" x2="690" y2="112"/><line x1="40" y1="176" x2="690" y2="176"/><line x1="40" y1="240" x2="690" y2="240"/></g><path d="M40 68 C140 79 200 92 270 111 C370 137 470 160 560 188 C610 203 655 217 690 227 L690 48 C580 50 500 59 410 69 C300 76 190 62 40 48Z" fill="url(#band)"/><path className="negative-area" d="M40 218 C150 227 220 236 300 246 C400 260 490 276 555 296 C605 310 650 315 690 318 L690 240 C620 231 570 218 510 206 C400 187 300 178 220 171 C150 166 90 171 40 176Z" fill="url(#dangerFill)"/><path className="real-line" d="M40 68 C140 79 200 92 270 111 C370 137 470 160 560 188 C610 203 655 217 690 227"/><path className="ghost-line" d="M40 68 C140 80 200 98 270 130 C370 173 465 196 535 222 C580 240 605 264 625 288 C646 312 667 320 690 322"/><line className="today-line" x1="214" y1="35" x2="214" y2="274"/><circle className="today-point" cx="214" cy="98" r="5"/><line className="zero-line" x1="40" y1="240" x2="690" y2="240"/><text x="4" y="52">₹6k</text><text x="4" y="116">₹4k</text><text x="4" y="180">₹2k</text><text x="8" y="244">₹0</text><text x="38" y="296">Day 1</text><text x="195" y="296">9</text><text x="350" y="296">16</text><text x="505" y="296">23</text><text x="653" y="296">30</text><text className="today-label" x="194" y="26">TODAY</text><text className="zero-label" x="615" y="235">ZERO LINE</text></svg></div>
    <p className="chart-note"><Sparkles size={14} /> Violet is your what-if future. It dips below zero on Day 26.</p>
  </section>
}

function DeltaChip({ item }: { item: typeof deltas[number] }) {
  const Icon = item.icon
  return <article className={`delta-chip ${item.tone}`}><div className="delta-top"><span>{item.label}</span><Icon size={14} aria-hidden="true" /></div><div className="delta-values"><strong>{item.before}</strong><ArrowRight size={13} /><strong>{item.after}</strong></div><span className="delta-diff">{item.diff}</span></article>
}

function VerdictBanner() {
  return <div className="verdict" role="alert" aria-live="polite"><div className="verdict-icon"><AlertTriangle size={21} /></div><div><p className="eyebrow danger-text">VERDICT · HIGH RISK 71%</p><h2>DON&apos;T <span>— This puts you in the red by Day 26.</span></h2></div><button className="icon-button" aria-label="Why is this risky?"><CircleHelp size={17} /></button></div>
}

function SaferWayCard({ title, detail, risk }: typeof saferWays[number]) {
  return <button className="safer-way" type="button"><span className="safer-way-icon"><ArrowRight size={16} /></span><span className="safer-way-copy"><strong>{title}</strong><small>{detail}</small></span><span className="risk-copy"><AlertTriangle size={13} />{risk}</span></button>
}

export default function Page() {
  return <div className="app-shell"><Nav /><main className="main-content"><Topbar /><div className="mobile-day"><span className="pulse-dot" /> Day 9 <span className="muted">of 30</span></div><div className="content-grid"><DecisionForm /><div className="analysis-column"><RunwayChart /><section className="delta-section" aria-labelledby="delta-heading"><div className="section-heading"><div><p className="eyebrow lime-text">THE RIPPLE EFFECT</p><h2 id="delta-heading">If you commit this</h2></div><span className="live-badge"><span /> LIVE PREVIEW</span></div><div className="delta-grid" aria-live="polite">{deltas.map(item => <DeltaChip key={item.label} item={item} />)}</div></section><VerdictBanner /><section className="card safer-card" aria-labelledby="safer-heading"><div className="section-heading"><div><p className="eyebrow violet-text">ADVISOR</p><h2 id="safer-heading">Find a safer way</h2></div><span className="muted small-copy">One tap to simulate</span></div><div className="safer-list">{saferWays.map(way => <SaferWayCard key={way.title} {...way} />)}</div></section><div className="action-row"><button className="primary-button commit"><Check size={17} /> Commit decision</button><button className="secondary-button">Discard</button><button className="icon-button share" aria-label="Copy share link"><Clipboard size={17} /></button><span className="share-label">Copy share link</span></div></div></div></main><Nav mobile /></div>
}
