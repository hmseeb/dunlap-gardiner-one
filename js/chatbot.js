/* ============================================================
   DUNLAP GARDINER LLP — CHATBOT
   Knowledge base built around website contents.
   ============================================================ */

(function () {
  'use strict';

  /* ── Knowledge Base ─────────────────────────────────────── */
  var KB = [
    {
      patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy', 'greetings'],
      response: 'Hello! Welcome to Dunlap Gardiner, LLP. I\'m here to help answer questions about our firm and services. What can I help you with today?'
    },
    {
      patterns: ['who are you', 'what are you', 'chatbot', 'bot', 'assistant', 'help'],
      response: 'I\'m the Dunlap Gardiner virtual assistant! I can answer questions about our firm, practice areas, attorneys, office locations, and more. What would you like to know?'
    },
    {
      patterns: ['criminal', 'crime', 'arrested', 'charges', 'felony', 'misdemeanor', 'defense', 'dui', 'dwi', 'drug', 'drugs', 'assault', 'theft', 'probation', 'jail', 'prison'],
      response: 'Our criminal defense team provides aggressive, experienced representation when your freedom is on the line. We handle:<br><br>• DUI / DWI<br>• Drug offenses<br>• Assault & battery<br>• Theft & fraud<br>• Felony charges<br>• Misdemeanors<br>• Probation violations<br><br>If you\'ve been arrested or charged, contact us immediately. <a href="criminal-law.html">Learn more about criminal defense →</a><br><a href="contact-us.html">Schedule a free consultation →</a>'
    },
    {
      patterns: ['about', 'firm', 'history', 'founded', 'established', 'started', 'when', 'background'],
      response: 'Dunlap Gardiner, LLP was founded in 2009 by <strong>Wesley C. Dunlap</strong> and <strong>Brian M. Gardiner</strong>, two friends from Georgia State University College of Law. Originally based in Douglasville, GA, the firm relocated to Hiram in 2014 and later opened a second office in McDonough, Georgia. We\'ve grown to five experienced attorneys and a support staff of over twenty. <a href="about-us.html">Learn more about our firm →</a>'
    },
    {
      patterns: ['wesley', 'dunlap', 'partner', 'founder', 'brian', 'gardiner'],
      response: 'Dunlap Gardiner, LLP was co-founded by <strong>Wesley C. Dunlap</strong> and <strong>Brian M. Gardiner</strong>. Both partners graduated from Georgia State University College of Law and established the firm in 2009 with a shared mission to provide quality, affordable legal representation to communities and businesses throughout Georgia. <a href="our-staff.html">Meet our team →</a>'
    },
    {
      patterns: ['staff', 'attorneys', 'lawyers', 'team', 'people', 'who works'],
      response: 'Dunlap Gardiner, LLP has a team of <strong>five experienced attorneys</strong> and a support staff of over <strong>twenty professionals</strong>. Our attorneys are dedicated to providing personalized, affordable legal representation. <a href="our-staff.html">Meet our attorneys →</a>'
    },
    {
      patterns: ['practice', 'areas', 'services', 'what do you do', 'specialize', 'handle', 'cases', 'legal help', 'legal services'],
      response: 'We offer a wide range of legal services:<br><br>• <strong>Civil Litigation</strong> — General civil matters in and out of court<br>• <strong>Criminal Defense</strong> — DUI, drug offenses, felonies & more<br>• <strong>HOA & Community Law</strong> — Covenants, bylaws, representation<br>• <strong>Collections & Creditor Rights</strong> — Debt collection & bankruptcy<br>• <strong>Banking & Finance Law</strong> — Institutional client representation<br>• <strong>Business Law</strong> — Formation, disputes, and guidance<br><br>Which area can we help you with?'
    },
    {
      patterns: ['hoa', 'homeowner', 'association', 'community', 'covenant', 'bylaw', 'condo', 'neighborhood'],
      response: 'We have extensive experience in <strong>HOA & Community Law</strong>, including:<br><br>• Drafting and amending covenants & bylaws<br>• Representing homeowner associations<br>• Enforcing HOA rules & regulations<br>• Handling disputes between residents and associations<br><br><a href="about-us.html">Learn more about our practice areas →</a>'
    },
    {
      patterns: ['civil', 'lawsuit', 'litigation', 'sue', 'court', 'dispute', 'contract', 'breach'],
      response: 'Our attorneys handle a <strong>wide range of civil litigation</strong> matters, representing clients effectively and efficiently both in and out of the courtroom. Whether you\'re dealing with contract disputes, property issues, or other civil matters, we\'re here to protect your interests. <a href="about-us.html">Learn more →</a>'
    },
    {
      patterns: ['collections', 'creditor', 'debt', 'bankruptcy', 'owe', 'money'],
      response: 'We handle <strong>Collections & Creditor Rights</strong> matters, including debt collection and creditor bankruptcy issues, protecting your financial interests with skill and precision. <a href="about-us.html">Learn more →</a>'
    },
    {
      patterns: ['banking', 'bank', 'finance', 'financial institution', 'lender'],
      response: 'Dunlap Gardiner, LLP represents <strong>finance companies and banks</strong>, handling a wide range of legal matters for institutional clients. We bring expertise and dedication to every banking and finance matter. <a href="about-us.html">Learn more →</a>'
    },
    {
      patterns: ['business', 'company', 'corporation', 'llc', 'formation', 'startup', 'enterprise', 'commercial'],
      response: 'We provide comprehensive <strong>Business Law</strong> guidance — from business formation to dispute resolution. Whether you\'re starting a new company or navigating a complex commercial challenge, our attorneys are here to help. <a href="about-us.html">Learn more →</a>'
    },
    {
      patterns: ['location', 'office', 'address', 'where', 'hiram', 'mcdonough', 'georgia', 'ga', 'atlanta', 'douglasville'],
      response: 'We have <strong>two convenient office locations</strong> serving the Atlanta metro area:<br><br>📍 <strong>Hiram, Georgia</strong> (main office)<br>📍 <strong>McDonough, Georgia</strong><br><br>Both offices serve clients throughout the greater Atlanta metropolitan area. <a href="contact-us.html">Get directions & contact info →</a>'
    },
    {
      patterns: ['phone', 'call', 'number', 'telephone', 'reach', 'contact', '770', '489'],
      response: 'You can reach us at:<br><br>📞 <strong><a href="tel:7704895122">770-489-5122</a></strong><br>🕐 Monday–Friday, 9:00 AM – 5:00 PM<br><br>Or visit our <a href="contact-us.html">contact page</a> to send us a message or request a free consultation.'
    },
    {
      patterns: ['consultation', 'free', 'consult', 'meeting', 'talk', 'speak', 'discuss', 'advice'],
      response: 'We offer <strong>free consultations</strong>! It\'s the best way to discuss your legal needs with our attorneys. To schedule yours:<br><br>📞 Call <a href="tel:7704895122">770-489-5122</a><br>💻 Or visit our <a href="contact-us.html">contact page</a> to send us a message.<br><br>We look forward to helping you!'
    },
    {
      patterns: ['hours', 'open', 'available', 'schedule', 'time', 'when can', 'appointment'],
      response: 'Our offices are open:<br><br>🕐 <strong>Monday – Friday: 9:00 AM – 5:00 PM</strong><br><br>To schedule an appointment or free consultation, call us at <a href="tel:7704895122">770-489-5122</a> or visit our <a href="contact-us.html">contact page</a>.'
    },
    {
      patterns: ['cost', 'fee', 'price', 'charge', 'afford', 'expensive', 'rate', 'how much', 'payment'],
      response: 'Dunlap Gardiner, LLP is committed to providing <strong>affordable, quality legal representation</strong>. We offer free initial consultations so you can discuss your case before any commitment. For specific fee information, please contact us directly:<br><br>📞 <a href="tel:7704895122">770-489-5122</a><br>💻 <a href="contact-us.html">Send us a message →</a><br><br>We also have an <strong>Online Payment Center</strong> for your convenience.'
    },
    {
      patterns: ['event', 'events', 'seminar', 'workshop', 'news', 'upcoming'],
      response: 'Check out our <a href="events.html">Events page</a> for upcoming firm events, seminars, and community activities. We regularly host and participate in events throughout the Atlanta metro area.'
    },
    {
      patterns: ['forum', 'attorney forum', 'articles', 'resources', 'blog', 'legal tips', 'information'],
      response: 'Our <a href="attorney-forum.html">Attorney Forum</a> features articles, resources, and legal insights from our attorneys. It\'s a great place to find information on legal topics that may be relevant to your situation.'
    },
    {
      patterns: ['georgia', 'state', 'licensed', 'bar', 'admitted'],
      response: 'Dunlap Gardiner, LLP is a <strong>Georgia law firm</strong>, serving clients throughout the state with offices in Hiram and McDonough. Our attorneys are admitted to practice in Georgia and are committed to serving the communities of the Atlanta metro area.'
    },
    {
      patterns: ['experience', 'years', 'how long', 'track record', 'reputation'],
      response: 'Dunlap Gardiner, LLP has been serving Georgia clients since <strong>2009</strong> — that\'s over 15 years of proven legal representation! Our firm has grown from a two-person operation to a team of five attorneys and 20+ staff, a testament to our commitment to quality and client satisfaction.'
    },
    {
      patterns: ['thank', 'thanks', 'appreciate', 'helpful', 'great', 'good', 'awesome'],
      response: 'You\'re welcome! I\'m happy to help. If you have any more questions or are ready to speak with one of our attorneys, don\'t hesitate to call us at <a href="tel:7704895122">770-489-5122</a> or visit our <a href="contact-us.html">contact page</a>. Have a great day!'
    },
    {
      patterns: ['bye', 'goodbye', 'see you', 'later', 'farewell'],
      response: 'Thank you for visiting Dunlap Gardiner, LLP! If you ever need legal assistance, we\'re here for you. Give us a call at <a href="tel:7704895122">770-489-5122</a> anytime during business hours. Take care!'
    }
  ];

  var DEFAULT_RESPONSE = 'I\'m not sure I have information on that specific topic. For accurate legal advice, please contact our attorneys directly:<br><br>📞 <a href="tel:7704895122">770-489-5122</a><br>💻 <a href="contact-us.html">Contact us online →</a><br><br>Is there anything else I can help you with?';

  var SUGGESTIONS = [
    'What are your practice areas?',
    'Where are your offices?',
    'How do I schedule a free consultation?',
    'Tell me about criminal defense',
    'What are your office hours?'
  ];

  /* ── Inject CSS ─────────────────────────────────────────── */
  var style = document.createElement('style');
  style.textContent = [
    '#dg-chat-btn{position:fixed;bottom:28px;right:28px;z-index:9999;width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#c9a84c,#a87c28);border:none;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center;transition:transform .2s,box-shadow .2s;outline:none;}',
    '#dg-chat-btn:hover{transform:scale(1.08);box-shadow:0 6px 28px rgba(0,0,0,.4);}',
    '#dg-chat-btn svg{width:28px;height:28px;fill:#fff;transition:opacity .2s;}',
    '#dg-chat-btn .dg-icon-close{display:none;}',
    '#dg-chat-btn.open .dg-icon-chat{display:none;}',
    '#dg-chat-btn.open .dg-icon-close{display:block;}',
    '#dg-chat-badge{position:absolute;top:-4px;right:-4px;background:#e74c3c;color:#fff;font-size:11px;font-weight:700;width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif;}',
    '#dg-chat-window{position:fixed;bottom:100px;right:28px;z-index:9998;width:360px;max-width:calc(100vw - 56px);background:#fff;border-radius:16px;box-shadow:0 12px 50px rgba(0,0,0,.18);display:flex;flex-direction:column;overflow:hidden;transform:scale(0.92) translateY(20px);opacity:0;pointer-events:none;transition:transform .25s cubic-bezier(.34,1.56,.64,1),opacity .2s;transform-origin:bottom right;max-height:520px;}',
    '#dg-chat-window.open{transform:scale(1) translateY(0);opacity:1;pointer-events:all;}',
    '#dg-chat-header{background:linear-gradient(135deg,#1a1a2e,#16213e);padding:16px 18px;display:flex;align-items:center;gap:12px;flex-shrink:0;}',
    '#dg-chat-header .dg-avatar{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#c9a84c,#a87c28);display:flex;align-items:center;justify-content:center;flex-shrink:0;}',
    '#dg-chat-header .dg-avatar svg{width:22px;height:22px;fill:#fff;}',
    '#dg-chat-header .dg-header-info{flex:1;}',
    '#dg-chat-header .dg-header-name{color:#fff;font-family:Inter,sans-serif;font-size:15px;font-weight:600;line-height:1.2;}',
    '#dg-chat-header .dg-header-status{color:#c9a84c;font-family:Inter,sans-serif;font-size:12px;display:flex;align-items:center;gap:5px;margin-top:2px;}',
    '#dg-chat-header .dg-status-dot{width:7px;height:7px;border-radius:50%;background:#2ecc71;display:inline-block;}',
    '#dg-chat-messages{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;min-height:200px;}',
    '#dg-chat-messages::-webkit-scrollbar{width:4px;}',
    '#dg-chat-messages::-webkit-scrollbar-track{background:transparent;}',
    '#dg-chat-messages::-webkit-scrollbar-thumb{background:#ddd;border-radius:4px;}',
    '.dg-msg{max-width:82%;display:flex;flex-direction:column;gap:4px;animation:dgFadeIn .2s ease;}',
    '.dg-msg.bot{align-self:flex-start;}',
    '.dg-msg.user{align-self:flex-end;}',
    '.dg-msg .dg-bubble{padding:10px 14px;border-radius:16px;font-family:Inter,sans-serif;font-size:13.5px;line-height:1.55;word-break:break-word;}',
    '.dg-msg.bot .dg-bubble{background:#f4f4f8;color:#1a1a2e;border-bottom-left-radius:4px;}',
    '.dg-msg.user .dg-bubble{background:linear-gradient(135deg,#c9a84c,#a87c28);color:#fff;border-bottom-right-radius:4px;}',
    '.dg-msg .dg-bubble a{color:#c9a84c;text-decoration:underline;}',
    '.dg-msg.user .dg-bubble a{color:#fff;}',
    '.dg-typing{display:flex;align-items:center;gap:5px;padding:12px 16px;background:#f4f4f8;border-radius:16px;border-bottom-left-radius:4px;width:fit-content;}',
    '.dg-typing span{width:7px;height:7px;border-radius:50%;background:#aaa;display:inline-block;animation:dgBounce 1.2s infinite;}',
    '.dg-typing span:nth-child(2){animation-delay:.2s;}',
    '.dg-typing span:nth-child(3){animation-delay:.4s;}',
    '#dg-chat-suggestions{padding:0 16px 12px;display:flex;flex-wrap:wrap;gap:6px;flex-shrink:0;}',
    '.dg-suggestion{background:#f0f0f5;border:1px solid #e0e0ea;border-radius:20px;padding:6px 12px;font-family:Inter,sans-serif;font-size:12px;color:#333;cursor:pointer;transition:background .15s,border-color .15s;white-space:nowrap;}',
    '.dg-suggestion:hover{background:#c9a84c;border-color:#c9a84c;color:#fff;}',
    '#dg-chat-input-row{display:flex;align-items:center;gap:8px;padding:12px 14px;border-top:1px solid #eee;flex-shrink:0;background:#fff;}',
    '#dg-chat-input{flex:1;border:1.5px solid #e0e0ea;border-radius:22px;padding:9px 16px;font-family:Inter,sans-serif;font-size:13.5px;outline:none;resize:none;line-height:1.4;max-height:80px;overflow-y:auto;transition:border-color .2s;}',
    '#dg-chat-input:focus{border-color:#c9a84c;}',
    '#dg-chat-send{width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,#c9a84c,#a87c28);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .15s;outline:none;}',
    '#dg-chat-send:hover{transform:scale(1.08);}',
    '#dg-chat-send svg{width:18px;height:18px;fill:#fff;}',
    '@keyframes dgFadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}',
    '@keyframes dgBounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-6px)}}',
    '@media(max-width:480px){#dg-chat-window{width:calc(100vw - 40px);right:20px;bottom:90px;}#dg-chat-btn{right:20px;bottom:20px;}}'
  ].join('');
  document.head.appendChild(style);

  /* ── Build HTML ─────────────────────────────────────────── */
  var wrapper = document.createElement('div');
  wrapper.innerHTML = [
    '<button id="dg-chat-btn" aria-label="Open chat assistant">',
      '<div id="dg-chat-badge">1</div>',
      '<svg class="dg-icon-chat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM7 9h10v2H7V9zm8 4H7v-2h8v2zm-6-6H7V5h2v2z"/></svg>',
      '<svg class="dg-icon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
    '</button>',
    '<div id="dg-chat-window" role="dialog" aria-label="Chat with Dunlap Gardiner LLP">',
      '<div id="dg-chat-header">',
        '<div class="dg-avatar">',
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97Z"/></svg>',
        '</div>',
        '<div class="dg-header-info">',
          '<div class="dg-header-name">Dunlap Gardiner Assistant</div>',
          '<div class="dg-header-status"><span class="dg-status-dot"></span> Online now</div>',
        '</div>',
      '</div>',
      '<div id="dg-chat-messages"></div>',
      '<div id="dg-chat-suggestions"></div>',
      '<div id="dg-chat-input-row">',
        '<textarea id="dg-chat-input" placeholder="Ask me anything about our firm…" rows="1" aria-label="Chat input"></textarea>',
        '<button id="dg-chat-send" aria-label="Send message">',
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>',
        '</button>',
      '</div>',
    '</div>'
  ].join('');
  document.body.appendChild(wrapper);

  /* ── Refs ───────────────────────────────────────────────── */
  var btn       = document.getElementById('dg-chat-btn');
  var win       = document.getElementById('dg-chat-window');
  var msgs      = document.getElementById('dg-chat-messages');
  var input     = document.getElementById('dg-chat-input');
  var sendBtn   = document.getElementById('dg-chat-send');
  var suggsArea = document.getElementById('dg-chat-suggestions');
  var badge     = document.getElementById('dg-chat-badge');
  var isOpen    = false;

  /* ── Helpers ────────────────────────────────────────────── */
  function addMessage(text, type) {
    var div = document.createElement('div');
    div.className = 'dg-msg ' + type;
    var bubble = document.createElement('div');
    bubble.className = 'dg-bubble';
    bubble.innerHTML = text;
    div.appendChild(bubble);
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    return div;
  }

  function showTyping() {
    var el = document.createElement('div');
    el.className = 'dg-msg bot';
    el.id = 'dg-typing-indicator';
    el.innerHTML = '<div class="dg-typing"><span></span><span></span><span></span></div>';
    msgs.appendChild(el);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function hideTyping() {
    var el = document.getElementById('dg-typing-indicator');
    if (el) el.remove();
  }

  function findResponse(text) {
    var lower = text.toLowerCase().trim();
    for (var i = 0; i < KB.length; i++) {
      var entry = KB[i];
      for (var j = 0; j < entry.patterns.length; j++) {
        if (lower.indexOf(entry.patterns[j]) !== -1) {
          return entry.response;
        }
      }
    }
    return DEFAULT_RESPONSE;
  }

  function buildSuggestions() {
    suggsArea.innerHTML = '';
    SUGGESTIONS.forEach(function (text) {
      var btn = document.createElement('button');
      btn.className = 'dg-suggestion';
      btn.textContent = text;
      btn.addEventListener('click', function () {
        handleSend(text);
      });
      suggsArea.appendChild(btn);
    });
  }

  function clearSuggestions() {
    suggsArea.innerHTML = '';
  }

  function handleSend(textOverride) {
    var text = (textOverride || input.value).trim();
    if (!text) return;
    input.value = '';
    input.style.height = 'auto';
    clearSuggestions();
    badge.style.display = 'none';

    addMessage(text, 'user');
    showTyping();

    var delay = 600 + Math.random() * 500;
    setTimeout(function () {
      hideTyping();
      var resp = findResponse(text);
      addMessage(resp, 'bot');
    }, delay);
  }

  /* ── Toggle ─────────────────────────────────────────────── */
  btn.addEventListener('click', function () {
    isOpen = !isOpen;
    btn.classList.toggle('open', isOpen);
    win.classList.toggle('open', isOpen);
    badge.style.display = 'none';

    if (isOpen && msgs.children.length === 0) {
      // Welcome message
      setTimeout(function () {
        addMessage(
          'Hi there! 👋 I\'m the <strong>Dunlap Gardiner virtual assistant</strong>. I can answer questions about our firm, practice areas, attorneys, and more.<br><br>How can I help you today?',
          'bot'
        );
        buildSuggestions();
      }, 200);
    }

    if (isOpen) {
      setTimeout(function () { input.focus(); }, 300);
    }
  });

  /* ── Send actions ───────────────────────────────────────── */
  sendBtn.addEventListener('click', function () { handleSend(); });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });

  // Auto-resize textarea
  input.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 80) + 'px';
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (isOpen && !win.contains(e.target) && !btn.contains(e.target)) {
      isOpen = false;
      btn.classList.remove('open');
      win.classList.remove('open');
    }
  });
})();
