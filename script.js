// === DATA ===
const constituencyData = {
  'new-delhi': { name:'New Delhi', phase:'Phase 1', date:'May 10, 2026', time:'7:00 AM – 6:00 PM', booth:'Govt. Senior Secondary School, Barakhamba Rd', boothNo:'Booth #142' },
  'mumbai-north': { name:'Mumbai North', phase:'Phase 2', date:'May 17, 2026', time:'7:00 AM – 6:00 PM', booth:'BMC School, Borivali West', boothNo:'Booth #308' },
  'chennai-south': { name:'Chennai South', phase:'Phase 1', date:'May 10, 2026', time:'7:00 AM – 6:00 PM', booth:'Corporation School, Mylapore', boothNo:'Booth #215' },
  'kolkata-dakshin': { name:'Kolkata Dakshin', phase:'Phase 3', date:'May 24, 2026', time:'7:00 AM – 6:00 PM', booth:'KMC Primary School, Gariahat', boothNo:'Booth #189' },
  'varanasi': { name:'Varanasi', phase:'Phase 7', date:'June 1, 2026', time:'7:00 AM – 6:00 PM', booth:'Govt. Inter College, Sigra', boothNo:'Booth #401' },
  'lucknow': { name:'Lucknow', phase:'Phase 5', date:'May 20, 2026', time:'7:00 AM – 6:00 PM', booth:'Rajkiya Bal Vidyalaya, Hazratganj', boothNo:'Booth #256' },
  'jaipur': { name:'Jaipur', phase:'Phase 2', date:'May 17, 2026', time:'7:00 AM – 6:00 PM', booth:'Sawai Man Singh School, C-Scheme', boothNo:'Booth #178' },
  'hyderabad': { name:'Hyderabad', phase:'Phase 4', date:'May 13, 2026', time:'7:00 AM – 6:00 PM', booth:'GHMC School, Nampally', boothNo:'Booth #322' },
  'pune': { name:'Pune', phase:'Phase 3', date:'May 24, 2026', time:'7:00 AM – 6:00 PM', booth:'PMC School, Shivajinagar', boothNo:'Booth #267' },
  'ahmedabad-east': { name:'Ahmedabad East', phase:'Phase 3', date:'May 24, 2026', time:'7:00 AM – 6:00 PM', booth:'AMC Primary School, Maninagar', boothNo:'Booth #195' }
};

const electionData = {
  1: { title:"Voter Registration", content:`<div class="module-header"><h2>Voter Registration</h2><p>Register online via the ECI Voters' Service Portal or the Voter Helpline App.</p></div><div class="grid-2"><div class="info-box"><h3><i class="ph-fill ph-list-numbers"></i> The Process</h3><ul><li>Visit voters.eci.gov.in and Sign Up.</li><li>Select <strong>Form 6</strong> for new voters.</li><li>Fill in personal, family, and address details.</li><li>Upload your photo and documents.</li><li>Receive a Reference Number to track status.</li></ul></div><div class="info-box"><h3><i class="ph-fill ph-check-circle"></i> Key Requirements</h3><ul><li><strong>Age:</strong> Must be 18 years or older.</li><li><strong>Documents:</strong> Passport-size photo.</li><li><strong>Age Proof:</strong> Aadhaar, 10th cert, or PAN.</li><li><strong>Address Proof:</strong> Bank passbook, Passport, Bill.</li></ul></div><div class="info-box myth-box"><h3><i class="ph-fill ph-warning"></i> Common Myths</h3><ul><li>"Having Aadhaar means I can vote." (False: You must register separately).</li><li>"I can have Voter IDs in two cities." (False: It's illegal).</li></ul></div><div class="info-box" style="border-color:rgba(19,136,8,0.3);background:rgba(19,136,8,0.05);"><h3 style="color:#4ade80;"><i class="ph-fill ph-lightbulb"></i> Pro Tip</h3><p style="color:#bbf7d0;">Download the <strong>Voter Helpline App</strong>! Apply directly from your phone in 10 minutes.</p></div></div>` },
  2: { title:"Voting Day", content:`<div class="module-header"><h2>Inside the Polling Booth</h2><p>A secure, secret, and fast process to cast your vote.</p></div><div class="grid-2"><div class="info-box"><h3><i class="ph-fill ph-list-numbers"></i> The Process</h3><ul><li><strong>Officer 1:</strong> Checks your ID and finds your name.</li><li><strong>Officer 2:</strong> Inks your left finger and takes your signature.</li><li><strong>Officer 3:</strong> Takes your slip and activates the EVM.</li><li><strong>Voting:</strong> Press the blue button next to your candidate.</li><li><strong>VVPAT:</strong> Verify your vote for 7 seconds.</li></ul></div><div class="info-box"><h3><i class="ph-fill ph-check-circle"></i> Requirements</h3><ul><li>Your name <strong>MUST</strong> be on the voter list.</li><li>Approved Govt ID (Voter ID, Aadhaar, PAN, Passport).</li></ul></div><div class="info-box myth-box"><h3><i class="ph-fill ph-warning"></i> Prohibited</h3><ul><li>Mobile phones inside the voting compartment.</li><li>Taking selfies or photos of the EVM.</li></ul></div><div class="info-box" style="border-color:rgba(59,130,246,0.3);background:rgba(59,130,246,0.05);"><h3 style="color:#60a5fa;"><i class="ph-fill ph-lightbulb"></i> Pro Tip</h3><p style="color:#bfdbfe;">Your vote is completely secret. If you don't like any candidate, press <strong>NOTA</strong>.</p></div></div>` },
  3: { title:"Counting Results", content:`<div class="module-header"><h2>Counting & Results</h2><p>The transparent process of declaring winners.</p></div><div class="grid-2"><div class="info-box"><h3><i class="ph-fill ph-list-numbers"></i> The Process</h3><ul><li>EVMs are kept in secure 'Strong Rooms' under CCTV.</li><li>On Counting Day, machines are unsealed before party agents.</li><li>Postal ballots are counted first.</li><li>The 'Result' button on EVMs shows the booth's tally.</li><li>VVPAT slips from 5 random booths are manually verified.</li></ul></div><div class="info-box myth-box"><h3><i class="ph-fill ph-warning"></i> Common Myths</h3><ul><li>"EVMs can be hacked via WiFi." (False: No internet hardware).</li><li>"The ruling party controls the count." (False: ECI is independent).</li></ul></div></div>` }
};

const finalVotes = { 1:48250, 2:35180, 3:28900, 4:5670 };
const candidateMap = { '1':'Candidate A','2':'Candidate B','3':'Candidate C','4':'NOTA' };

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
  // Roadmap
  const stepCards = document.querySelectorAll('.step-card');
  const contentDisplay = document.getElementById('content-display');
  function loadContent(s) {
    if (!electionData[s]) return;
    stepCards.forEach(c => c.classList.remove('active'));
    document.querySelector(`.step-card[data-step="${s}"]`).classList.add('active');
    contentDisplay.setAttribute('data-active', s);
    contentDisplay.style.opacity='0';
    setTimeout(() => {
      contentDisplay.innerHTML = electionData[s].content;
      contentDisplay.style.animation='none';
      contentDisplay.offsetHeight;
      contentDisplay.style.animation='slideUp 0.5s ease forwards';
    }, 200);
  }
  stepCards.forEach(c => c.addEventListener('click', function(){ loadContent(this.dataset.step); }));
  loadContent(1);

  // EVM
  const vvpatSlip = document.getElementById('vvpat-slip');
  let isVoting = false;
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  function playBeep() {
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.type='square'; o.frequency.setValueAtTime(800, audioCtx.currentTime);
    g.gain.setValueAtTime(0.1, audioCtx.currentTime);
    o.connect(g); g.connect(audioCtx.destination); o.start();
    setTimeout(() => o.stop(), 7000);
  }
  document.querySelectorAll('.vote-btn').forEach(btn => {
    btn.addEventListener('click', function(){
      if (isVoting) return; isVoting = true;
      const id = this.dataset.id;
      const lamp = document.getElementById('lamp-'+id);
      lamp.classList.add('active');
      if(audioCtx.state==='suspended') audioCtx.resume();
      playBeep();
      document.getElementById('slip-name').textContent = candidateMap[id];
      document.getElementById('slip-no').textContent = id;
      vvpatSlip.classList.remove('hidden'); vvpatSlip.classList.add('show');
      setTimeout(() => { lamp.classList.remove('active'); vvpatSlip.classList.remove('show'); vvpatSlip.classList.add('hidden'); isVoting=false; }, 7500);
    });
  });

  // Sign-In
  const epicInput = document.getElementById('epic-input');
  const epicHint = document.getElementById('epic-hint');
  const otpGroup = document.getElementById('otp-group');
  const otpInput = document.getElementById('otp-input');
  const signinBtn = document.getElementById('signin-btn');
  const signinStatus = document.getElementById('signin-status');
  let signinStep = 'epic', generatedOtp = '';
  epicInput.addEventListener('input', function(){
    const v = this.value.toUpperCase(); this.value = v;
    const valid = /^[A-Z]{3}[0-9]{7}$/.test(v);
    epicHint.textContent = v.length > 0 ? (valid ? '✅ Valid EPIC format' : 'Format: 3 letters + 7 digits') : '';
    epicHint.className = 'input-hint ' + (v.length > 0 ? (valid ? 'success' : 'error') : '');
  });
  signinBtn.addEventListener('click', function(){
    if (signinStep === 'epic') {
      const v = epicInput.value.toUpperCase();
      if (!/^[A-Z]{3}[0-9]{7}$/.test(v)) { showStatus(signinStatus,'Invalid EPIC format. Use 3 letters + 7 digits.','error'); return; }
      generatedOtp = String(Math.floor(100000+Math.random()*900000));
      otpGroup.style.display='block';
      signinBtn.textContent='Verify OTP';
      signinStep='otp';
      showStatus(signinStatus,'OTP sent! (Demo OTP: '+generatedOtp+')','info');
    } else {
      if (otpInput.value === generatedOtp) { showStatus(signinStatus,'✅ Sign-in successful! Welcome, Voter.','success'); signinBtn.disabled=true; }
      else { showStatus(signinStatus,'❌ Incorrect OTP. Try again.','error'); }
    }
  });

  // Registration - Age Check
  document.getElementById('check-age-btn').addEventListener('click', function(){
    const dob = document.getElementById('dob-input').value;
    if (!dob) { showStatus(document.getElementById('age-status'),'Please enter your date of birth.','error'); return; }
    const age = calcAge(new Date(dob));
    const ageStatus = document.getElementById('age-status');
    if (age >= 18) {
      showStatus(ageStatus, '✅ You are '+age+' years old. Eligible for full voter registration!', 'success');
      document.getElementById('future-voter-card').classList.add('hidden');
      document.getElementById('full-reg-card').classList.remove('hidden');
    } else if (age >= 17) {
      showStatus(ageStatus, '🆕 You are '+age+' years old. Eligible for Future Voter Apply!', 'info');
      document.getElementById('full-reg-card').classList.add('hidden');
      document.getElementById('future-voter-card').classList.remove('hidden');
    } else {
      showStatus(ageStatus, '❌ You are '+age+' years old. Must be 17+ to pre-register. Keep learning!', 'error');
      document.getElementById('future-voter-card').classList.add('hidden');
      document.getElementById('full-reg-card').classList.add('hidden');
    }
  });

  // Future Voter Submit
  document.getElementById('fv-submit-btn').addEventListener('click', function(){
    const n=document.getElementById('fv-name').value, a=document.getElementById('fv-address').value, m=document.getElementById('fv-mobile').value;
    if (!n||!a||!m) { showStatus(document.getElementById('fv-status'),'Please fill all required fields.','error'); return; }
    showStatus(document.getElementById('fv-status'),'🎉 Future Voter application submitted! It will activate when you turn 18 (as per ECI rules).','success');
  });

  // Full Registration Submit
  document.getElementById('reg-submit-btn').addEventListener('click', function(){
    const n=document.getElementById('reg-name').value, f=document.getElementById('reg-father').value, c=document.getElementById('reg-constituency').value;
    if (!n||!f||!c) { showStatus(document.getElementById('reg-status'),'Please fill all required fields.','error'); return; }
    const refNo = 'ECI-'+Date.now().toString().slice(-8);
    showStatus(document.getElementById('reg-status'),'🎉 Registration submitted! Reference: '+refNo+'. Track status on voters.eci.gov.in (simulated).','success');
  });

  // Schedule
  document.getElementById('sched-constituency').addEventListener('change', function(){
    const d = constituencyData[this.value], el = document.getElementById('schedule-display');
    if (!d) { el.classList.add('hidden'); return; }
    el.classList.remove('hidden');
    el.innerHTML = `
      <div class="sched-card glass-panel"><div class="sched-icon">📅</div><span class="phase-badge">${d.phase}</span><h4>Voting Date</h4><div class="sched-value">${d.date}</div><p>Based on simulated ECI schedule</p></div>
      <div class="sched-card glass-panel"><div class="sched-icon">⏰</div><h4>Voting Time</h4><div class="sched-value">${d.time}</div><p>Arrive early to avoid queues</p></div>
      <div class="sched-card glass-panel"><div class="sched-icon">📍</div><h4>Polling Booth</h4><div class="sched-value">${d.boothNo}</div><p>${d.booth}</p></div>
      <div class="sched-card glass-panel"><div class="sched-icon">🗳️</div><h4>Constituency</h4><div class="sched-value">${d.name}</div><p>Carry a valid government photo ID</p></div>`;
  });

  // Results
  let counting = false;
  document.getElementById('start-counting-btn').addEventListener('click', function(){
    if (counting) return; counting = true;
    this.textContent = '⏳ Counting...'; this.disabled = true;
    const total = Object.values(finalVotes).reduce((a,b)=>a+b,0);
    let step = 0, steps = 30;
    const iv = setInterval(() => {
      step++;
      const pct = step/steps;
      for (let i=1;i<=4;i++){
        const cur = Math.round(finalVotes[i]*pct);
        document.getElementById('bar-'+i).style.width = (finalVotes[i]/total*100)*(pct)+'%';
        document.getElementById('val-'+i).textContent = cur.toLocaleString();
      }
      document.getElementById('counting-status').textContent = 'Counting... '+Math.round(pct*100)+'% complete';
      if (step>=steps) {
        clearInterval(iv);
        document.getElementById('counting-status').textContent = '✅ Counting Complete!';
        document.getElementById('start-counting-btn').textContent = '✅ Done';
        // Find winner
        let maxV=0,winner='';
        for(let i=1;i<=4;i++) if(finalVotes[i]>maxV){maxV=finalVotes[i];winner=candidateMap[i];}
        const margin = finalVotes[1]-finalVotes[2];
        document.getElementById('ai-result-text').innerHTML = `<strong>${winner}</strong> wins with <strong>${maxV.toLocaleString()}</strong> votes, leading by a margin of <strong>${margin.toLocaleString()}</strong> votes. Turnout was strong at <strong>${((total/150000)*100).toFixed(1)}%</strong>. This is a simulated result for educational purposes only.`;
        // Insights
        const turnout = ((total/150000)*100).toFixed(1);
        document.getElementById('turnout-fill').style.width = turnout+'%';
        document.getElementById('turnout-val').textContent = turnout+'%';
        document.getElementById('winner-name').textContent = winner;
        document.getElementById('winner-margin').textContent = 'Won by '+margin.toLocaleString()+' votes';
        counting = false;
      }
    }, 120);
  });

  // Language Toggle
  let currentLang = 'en';
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.addEventListener('click', function(){
      document.querySelectorAll('.lang-btn').forEach(x=>x.classList.remove('active'));
      this.classList.add('active');
      currentLang = this.dataset.lang;
    });
  });

  // Chat
  const chatFab = document.getElementById('chat-fab');
  const chatWindow = document.getElementById('chat-window');
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');
  chatFab.addEventListener('click', ()=>{ chatWindow.classList.remove('hidden'); chatInput.focus(); });
  document.getElementById('close-chat').addEventListener('click', ()=> chatWindow.classList.add('hidden'));
  document.querySelectorAll('.quick-btn').forEach(b => {
    b.addEventListener('click', function(){ chatInput.value=this.dataset.query; sendMsg(); });
  });
  document.getElementById('send-btn').addEventListener('click', sendMsg);
  chatInput.addEventListener('keypress', e=>{ if(e.key==='Enter') sendMsg(); });

  function sendMsg(){
    const t=chatInput.value.trim(); if(!t) return;
    addMsg(t,'user'); chatInput.value='';
    const tid=showTyping();
    setTimeout(()=>{ document.getElementById(tid).remove(); addMsg(genResponse(t),'ai',true); },1200);
  }
  function addMsg(t,s,html=false){
    const d=document.createElement('div');
    d.classList.add('message',s+'-message');
    if(s==='ai') d.classList.add('ai-formatted');
    if(html) d.innerHTML=t; else d.textContent=t;
    chatMessages.appendChild(d); chatMessages.scrollTop=chatMessages.scrollHeight;
  }
  function showTyping(){
    const id='t-'+Date.now(), d=document.createElement('div');
    d.id=id; d.classList.add('typing-indicator');
    d.innerHTML='<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
    chatMessages.appendChild(d); chatMessages.scrollTop=chatMessages.scrollHeight; return id;
  }

  function genResponse(input){
    const q=input.toLowerCase();
    if(q.includes('17')||q.includes('future')||q.includes('pre-register')){
      return `<p><strong>📌 Step Context:</strong> Future Voter Registration</p><p><strong>🧭 Action Guide:</strong><br>• You can apply as a Future Voter if you are 17+<br>• Fill your details: Name, DOB, Address, Mobile<br>• Submit your pre-registration application</p><p><strong>🤖 AI Insight:</strong><br>This ensures you're ready to vote the moment you turn 18!</p><p><strong>⚠️ Important:</strong><br>You cannot vote until you are 18 and your registration is verified by ECI.</p><p><strong>💡 Pro Tip:</strong><br>Apply early to avoid last-minute issues. Go to the Register section above!</p><p><strong>❓ Next:</strong><br>Would you like to check your voting date or learn about EVM?</p>`;
    }
    if(q.includes('register')||q.includes('form')||q.includes('voter id')||q.includes('signup')){
      return `<p><strong>📌 Step Context:</strong> Voter Registration</p><p><strong>🧭 Action Guide:</strong><br>• Visit voters.eci.gov.in or use the Voter Helpline App<br>• Select Form 6 for new voters<br>• Upload photo, age proof, and address proof</p><p><strong>🤖 AI Insight:</strong><br>Online registration is fastest. Track your status with the Reference Number.</p><p><strong>⚠️ Important:</strong><br>Must be 18+. Aadhaar alone doesn't mean you can vote — separate registration needed.</p><p><strong>💡 Pro Tip:</strong><br>Use the Voter Helpline App — takes less than 10 minutes!</p><p><strong>❓ Next:</strong><br>Would you like to know the exact documents required?</p>`;
    }
    if(q.includes('date')||q.includes('when')||q.includes('schedule')||q.includes('booth')||q.includes('polling')){
      return `<p><strong>📌 Step Context:</strong> Voting Schedule</p><p><strong>🧭 Action Guide:</strong><br>• Go to the "Voting Date & Polling Info" section above<br>• Select your constituency from the dropdown<br>• View your date, time, and booth location</p><p><strong>🤖 AI Insight:</strong><br>Knowing your schedule ensures you don't miss your chance to vote!</p><p><strong>⚠️ Important:</strong><br>You can only vote at your assigned booth on your assigned date.</p><p><strong>💡 Pro Tip:</strong><br>Arrive early (before 9 AM) to avoid long queues.</p><p><strong>❓ Next:</strong><br>Would you like to try the EVM simulator?</p>`;
    }
    if(q.includes('evm')||q.includes('vote')||q.includes('how')||q.includes('vvpat')){
      return `<p><strong>📌 Step Context:</strong> Voting Process (EVM)</p><p><strong>🧭 Action Guide:</strong><br>• Go to your assigned polling booth<br>• Verify identity with Polling Officer<br>• Press the blue button next to your candidate on EVM<br>• Verify your vote on the VVPAT window (7 seconds)</p><p><strong>🤖 AI Insight:</strong><br>The EVM+VVPAT system ensures your vote is secret, secure, and verifiable.</p><p><strong>⚠️ Important:</strong><br>Mobile phones are strictly prohibited inside the voting booth.</p><p><strong>💡 Pro Tip:</strong><br>Try the EVM Simulator section on this page to practice!</p><p><strong>❓ Next:</strong><br>Would you like to see simulated results?</p>`;
    }
    if(q.includes('result')||q.includes('count')||q.includes('win')||q.includes('lead')){
      return `<p><strong>📌 Step Context:</strong> Live Results (Simulated)</p><p><strong>🧭 Action Guide:</strong><br>• Go to the Results section above<br>• Click "Start Counting" to see animated vote counting<br>• Watch AI insights update in real-time</p><p><strong>🤖 AI Insight:</strong><br>In the simulation, Candidate A leads. Final results require VVPAT verification.</p><p><strong>⚠️ Important:</strong><br>All results here are simulated for educational purposes only.</p><p><strong>💡 Pro Tip:</strong><br>Check the Post-Election Insights section for turnout and winner analysis!</p><p><strong>❓ Next:</strong><br>Would you like to learn about the counting process?</p>`;
    }
    if(q.includes('login')||q.includes('sign in')||q.includes('signin')){
      return `<p><strong>📌 Step Context:</strong> Secure Sign-In</p><p><strong>🧭 Action Guide:</strong><br>• Enter your EPIC number (3 letters + 7 digits)<br>• Verify with the OTP sent to your mobile<br>• Access the voting dashboard</p><p><strong>🤖 AI Insight:</strong><br>Secure login prevents unauthorized access to the voting system.</p><p><strong>⚠️ Important:</strong><br>Do NOT enter real personal info — this is a demo platform.</p><p><strong>💡 Pro Tip:</strong><br>Use any valid format like ABC1234567 to test!</p><p><strong>❓ Next:</strong><br>Shall we proceed to registration?</p>`;
    }
    if(q.includes('hindi')||q.includes('हिंदी')){
      return `<p><strong>📌 चरण:</strong> भाषा बदली गई</p><p><strong>🧭 मार्गदर्शन:</strong><br>• आप ऊपर भाषा टॉगल से Hindi चुन सकते हैं<br>• मैं आपकी मदद के लिए तैयार हूँ!</p><p><strong>🤖 AI सुझाव:</strong><br>अपनी भाषा में सीखना आसान होता है।</p><p><strong>❓ अगला कदम:</strong><br>क्या आप मतदाता पंजीकरण या मतदान तिथि जानना चाहते हैं?</p>`;
    }
    return `<p><strong>📌 Step Context:</strong> General Inquiry</p><p><strong>🧭 Action Guide:</strong><br>I can help you with:<br>• 📝 Voter Registration<br>• 🔐 Sign-In<br>• 📅 Voting Schedule<br>• 🗳️ EVM & Voting Process<br>• 📊 Simulated Results<br>• 🆕 Future Voter Apply</p><p><strong>🤖 AI Insight:</strong><br>Asking questions is the best way to become an informed voter!</p><p><strong>💡 Pro Tip:</strong><br>Try the quick buttons in the chat or ask something specific like "When is my voting date?"</p><p><strong>❓ Next:</strong><br>What would you like to explore?</p>`;
  }

  // Helpers
  function showStatus(el,msg,type){ el.textContent=msg; el.className='status-msg show '+type; }
  function calcAge(dob){ const t=new Date(), a=t.getFullYear()-dob.getFullYear(); return (t.getMonth()<dob.getMonth()||(t.getMonth()===dob.getMonth()&&t.getDate()<dob.getDate()))?a-1:a; }
});
