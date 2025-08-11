// Speak text with speech synthesis, if supported
function speak(text) {
  if ('speechSynthesis' in window) {
    const voice = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(voice);
  } else {
    console.warn("Speech synthesis not supported");
  }
}

// Phone issues dictionary with diagnosis summaries and step-by-step fixes
const phoneIssues = {
  "battery": {
    diagnosis: "Your battery may be draining fast due to background apps, location services, or high brightness.",
    steps: [
      "Reduce screen brightness.",
      "Close unused background apps.",
      "Turn off GPS, Bluetooth & Wi-Fi when not in use.",
      "Enable battery saver mode.",
      "Update all apps and software."
    ]
  },
  "charging": {
    diagnosis: "Slow charging might be caused by a faulty cable, adapter, or active apps while charging.",
    steps: [
      "Use original charger and cable.",
      "Clean the charging port gently.",
      "Avoid using phone while charging.",
      "Try charging from a different power source.",
      "Check for software updates."
    ]
  },
  "auto-restart": {
    diagnosis: "Automatic restarts may be due to system crashes, corrupted apps, or hardware problems.",
    steps: [
      "Uninstall recently added apps.",
      "Check for system updates.",
      "Perform a virus scan.",
      "Reset to factory settings if needed.",
      "Visit technician if issue persists."
    ]
  },
  "charging-port": {
    diagnosis: "Your charging port may be blocked or damaged. Clean it gently or visit a technician.",
    steps: [
      "Inspect port for dust or debris.",
      "Use a soft brush to clean.",
      "Try a different cable.",
      "Restart phone.",
      "Seek professional repair if loose or damaged."
    ]
  },
  "heating": {
    diagnosis: "Phone heating up can result from heavy gaming or background apps, so it's wise to investigate the phone's temperature and what you were doing before it crashed.",
    steps: [
      "Avoid heavy apps or games.",
      "Close apps running in background.",
      "Keep phone in cool environments.",
      "Remove case during charging.",
      "Don’t overcharge the phone."
    ]
  },
  "overheating": {
    diagnosis: "Overheating during calls or gaming could mean your phone is overworked or poorly ventilated.",
    steps: [
      "Stop gaming or video calls temporarily.",
      "Remove phone case.",
      "Let phone cool down.",
      "Disable background data.",
      "Restart device."
    ]
  },
  "freezing": {
    diagnosis: "Freezing or lagging is usually caused by low RAM or outdated software.",
    steps: [
      "Restart your phone.",
      "Clear cache memory.",
      "Delete unused apps.",
      "Update the OS.",
      "Factory reset as a last resort."
    ]
  },
  "slow-performance": {
    diagnosis: "Slow performance may be due to running too many apps or lack of storage, outdated software or malware infections.",
    steps: [
      "Restart your phone.",
      "Clear cache memory.",
      "Delete unused apps.",
      "Update the OS.",
      "Factory reset as a last resort."
    ]
  },
  "data-drain": {
    diagnosis: "Data draining fast can be caused by auto-updates, background sync, or video streaming.",
    steps: [
      "Limit background data usage.",
      "Turn off auto-updates.",
      "Disable autoplay in social apps.",
      "Monitor data usage via settings.",
      "Use data-saving mode."
    ]
  },
  "network": {
    diagnosis: "Poor network signal could be from low coverage areas or SIM issues.",
    steps: [
      "Toggle airplane mode on/off.",
      "Reinsert SIM card.",
      "Restart phone.",
      "Change preferred network type.",
      "Contact service provider if needed."
    ]
  },
  "wifi": {
    diagnosis: "Wi-Fi disconnecting often? Try restarting the router or forgetting and reconnecting the network.",
    steps: [
      "Forget and reconnect Wi-Fi.",
      "Restart router.",
      "Move closer to router.",
      "Reset network settings.",
      "Check for system updates."
    ]
  },
  "bluetooth": {
    diagnosis: "Bluetooth connection problems might come from interference or pairing errors.",
    steps: [
      "Toggle Bluetooth off/on.",
      "Unpair and re-pair device.",
      "Restart phone.",
      "Ensure the other device is in pairing mode.",
      "Clear Bluetooth cache."
    ]
  },
  "gps": {
    diagnosis: "GPS not working? Enable high-accuracy mode or reset location services.",
    steps: [
      "Enable high accuracy mode.",
      "Restart phone.",
      "Calibrate using Maps app.",
      "Turn GPS off and back on.",
      "Update location services."
    ]
  },
  "usb": {
    diagnosis: "If USB isn’t recognized, check your cable, port, and enable file transfer mode.",
    steps: [
      "Use original USB cable.",
      "Enable USB file transfer mode.",
      "Try another USB port or PC.",
      "Restart both devices.",
      "Check USB settings under Developer Options."
    ]
  },
  "sim-error": {
    diagnosis: "SIM card not detected? It might be misaligned, damaged, or dirty.",
    steps: [
      "Reinsert SIM card.",
      "Clean SIM card with dry cloth.",
      "Try SIM in another phone.",
      "Toggle airplane mode.",
      "Replace if SIM is damaged."
    ]
  },
  "pop-up-ads": {
    diagnosis: "Popup ads can be annoying and may indicate malware. Consider using an ad blocker or scanning your phone for malware, or disable popups in browser settings.",
    steps: [
      "Uninstall suspicious apps.",
      "Use an ad blocker.",
      "Scan phone for malware.",
      "Don’t click unknown links.",
      "Reset browser or install cleaner app."
    ]
  },
  "screen": {
    diagnosis: "Cracked or unresponsive screens require replacement or touch calibration.",
    steps: [
      "Check for software updates.",
      "Restart phone.",
      "If cracked, consider screen replacement.",
      "Clean screen with a microfiber cloth.",
      "Test touch sensitivity in settings."
    ]
  },
  "camera": {
    diagnosis: "Camera not working? Force stop the app or check if another app is using it.",
    steps: [
      "Restart the camera app.",
      "Clear camera app cache.",
      "Check for software updates.",
      "Remove any camera lens cover.",
      "If hardware issue, visit a technician."
    ]
  },
  "sound": {
    diagnosis: "No sound or distortion may come from clogged speakers or software settings.",
    steps: [
      "Check volume settings.",
      "Restart phone.",
      "Clean speaker grills gently.",
      "Test with headphones.",
      "If no sound, consider hardware repair."
    ]
  },
  "mic": {
    diagnosis: "Microphone issues can result from dirt, app permissions, or hardware failure.",
    steps: [
      "Check app permissions for microphone.",
      "Restart phone.",
      "Clean microphone area gently.",
      "Test with voice recorder app.",
      "If still not working, visit a technician."
    ]
  },
  "speaker": {
    diagnosis: "Speaker not working? Clean it carefully or check sound settings.",
    steps: [
      "Check volume settings.",
      "Restart phone.",
      "Clean speaker grills gently.",
      "Test with headphones.",
      "If no sound, consider hardware repair."
    ]
  },
  "vibration": {
    diagnosis: "No vibration? Test using settings or check Do Not Disturb mode.",
    steps: [
      "Check vibration settings in sound settings.",
      "Restart phone.",
      "Test vibration using settings or a test app.",
      "Ensure Do Not Disturb mode is off.",
      "If still not working, visit a technician."
    ]
  },
  "proximity": {
    diagnosis: "Proximity sensor issues affect screen dimming during calls. Clean the sensor area.",
    steps: [
      "Clean the proximity sensor area (usually near the front camera).",
      "Restart phone.",
      "Test during calls to see if screen dims.",
      "Check for software updates.",
      "If still not working, visit a technician."
    ]
  },
  "fingerprint": {
    diagnosis: "Fingerprint sensor may not respond due to dirt. Additionally, dry skin, scars, or extreme temperatures can interfere with recognition.",
    steps: [
      "Clean the fingerprint sensor gently.",
      "Re-register your fingerprint in settings.",
      "Ensure your fingers are dry and clean.",
      "Restart phone.",
      "If still not working, visit a technician."
    ]
  },
  "face-unlock": {
    diagnosis: "Face unlock not working? Improve lighting or remove glasses/hats.",
    steps: [
      "Ensure good lighting conditions.",
      "Remove any obstructions (glasses, hats).",
      "Re-register your face in settings.",
      "Restart phone.",
      "If still not working, visit a technician."
    ]
  },
  "apps-crashing": {
    diagnosis: "Apps crashing often? Clear cache or reinstall the app.",
    steps: [
      "Clear app cache and data.",
      "Uninstall and reinstall the app.",
      "Check for app updates.",
      "Restart phone.",
      "If issue persists, report to app developer."
    ]
  },
  "update-fail": {
    diagnosis: "System update failed? Check storage and internet, or restart the device and try again.",
    steps: [
      "Ensure sufficient storage space.",
      "Check internet connection.",
      "Restart phone and try again.",
      "Clear cache of the update app (if applicable).",
      "If still failing, consider factory reset or visit a technician."
    ]
  },
  "notifications": {
    diagnosis: "Not receiving notifications? Check app permissions and do not disturb mode.",
    steps: [
      "Check app notification settings.",
      "Ensure Do Not Disturb mode is off.",
      "Restart phone.",
      "Clear cache of the affected app.",
      "If still not receiving, reinstall the app."
    ]
  },
  "touch-issues": {
    diagnosis: "Touchscreen issues may be fixed by restarting or cleaning the screen.",
    steps: [
      "Restart your phone.",
      "Clean the screen with a microfiber cloth.",
      "Check for software updates.",
      "Remove any screen protector or case that might interfere.",
      "If still unresponsive, visit a technician."
    ]
  },
  "storage": {
    diagnosis: "Storage full? Delete unused files and apps, and clear cached data.",
    steps: [
      "Delete unused apps and files.",
      "Clear cache of apps.",
      "Move files to cloud storage or SD card.",
      "Use storage management tools in settings.",
      "Factory reset as a last resort."
    ]
  }
};

// Main function to diagnose the selected issue
function diagnoseIssue() {
  const issue = document.getElementById("issue").value;
  const output = document.getElementById("output");

  if (!issue) {
    output.textContent = "Please select an issue to diagnose.";
    document.getElementById("stepFix").style.display = "none";
    document.getElementById("stepFix").innerHTML = "";
    return;
  }

  const issueData = phoneIssues[issue];
  if (!issueData) {
    output.textContent = "Sorry, no diagnosis found for this issue.";
    document.getElementById("stepFix").style.display = "none";
    document.getElementById("stepFix").innerHTML = "";
    return;
  }

  // Show diagnosis summary
  output.innerHTML = `<h3>Diagnosis for "${document.getElementById("issue").selectedOptions[0].text}":</h3><p>${issueData.diagnosis}</p>`;
  speak(issueData.diagnosis);

  // Show step-by-step fixes
  showStepFix(issueData);

  // Save to history
  if (issue) {
    const historyItem = document.createElement("li");
    historyItem.textContent = `📌 ${document.querySelector("#issue option:checked").textContent} - ${issueData.diagnosis}`;
    document.getElementById("history").appendChild(historyItem);
  }
}

// Show the step-by-step fixes for the issue
function showStepFix(issueData) {
  const stepFix = document.getElementById("stepFix");
  if (!issueData || !issueData.steps || issueData.steps.length === 0) {
    stepFix.style.display = "block";
    stepFix.innerHTML = `<p>Sorry, no step-by-step fixes available for this issue yet.</p>`;
    return;
  }

  const formattedSteps = issueData.steps
    .map((step, index) => `<li>${index + 1}. ${step}</li>`)
    .join("");

  stepFix.style.display = "block";
  stepFix.innerHTML = `
    <h3>Step-by-step Fix for "${document.getElementById("issue").selectedOptions[0].text}":</h3>
    <ol>${formattedSteps}</ol>
  `;

  // Optional: speak the steps concatenated as a string
  speak(issueData.steps.join(". "));
}

// Clear all diagnosis outputs and history
function clearDiagnosis() {
  document.getElementById("output").innerHTML = "";
  document.getElementById("stepFix").style.display = "none";
  document.getElementById("stepFix").innerHTML = "";
  document.getElementById("tips").style.display = "none";
  document.getElementById("tips").innerHTML = "";
  document.getElementById("restart").style.display = "none";
  document.getElementById("restart").innerHTML = "";
  document.getElementById("scanner").style.display = "none";
  document.getElementById("scanner").innerHTML = "";
  document.getElementById("shareStatus").innerText = "";
  document.getElementById("history").innerHTML = "";
  document.getElementById("issue").value = "";
  speechSynthesis.cancel();
}

// Settings panel toggle
function showSettings() {
  const panel = document.getElementById("settingsPanel");
  panel.style.display = panel.style.display === "none" ? "block" : "none";
}

// Popup notification toggle
function toggleNotifications() {
  const isEnabled = document.getElementById("popupToggle").checked;
  const status = document.getElementById("popupStatus");

  if (isEnabled) {
    status.innerText = "✅ Popup notification enabled.";
    showPopup();
  } else {
    status.innerText = "❌ Popup notification disabled.";
  }
}

// Show popup message once per 7 days max
function showPopup() {
  const lastShown = localStorage.getItem("popupLastShown");
  const now = new Date();

  if (lastShown && (now - new Date(lastShown)) < 7 * 24 * 60 * 60 * 1000) {
    return;
  }

  localStorage.setItem("popupLastShown", now.toISOString());

  const popup = document.createElement("div");
  popup.innerText = "🔔 Hello from SmartFix Studio.. please give us your feedback about this Web App!";
  popup.style.position = "fixed";
  popup.style.bottom = "20px";
  popup.style.right = "20px";
  popup.style.backgroundColor = "#222";
  popup.style.color = "#fff";
  popup.style.padding = "10px 15px";
  popup.style.borderRadius = "10px";
  popup.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
  popup.style.zIndex = 1000;

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 4000);
}

// Prestige tips array and functions
const prestigeTips = [
  "📲 To use Split Screen: Open recent apps menu, tap app icon, and select 'Split screen'.",
  "📌 To do App Pinning: Go to Settings > Security > App Pinning.",
  "🕶️ Shift Storage to SD card: Enable 'Force allow apps on External' under Developer Options.",
  "🧠 Adaptive Battery: Go to Settings > Battery > Adaptive Battery to extend battery life.",
  "📺 Picture-in-Picture: Supported apps like YouTube allow multitasking with floating video windows.",
  "🎮 Game Mode: Boost performance and block notifications during gaming in Settings > Special Features.",
  "📶 Wi-Fi Sharing via QR Code: Share Wi-Fi easily from network settings.",
  "🧭 Gesture Navigation: Enable full-screen gesture navigation in Settings > System > Gestures.",
  "🔕 Digital Wellbeing & Focus Mode: Set app limits and block distractions.",
  "🎙️ Voice Access: Disable TalkBack by double-tapping the section you want to choose."
];

function showPrestigeTips() {
  const tipsSection = document.getElementById("tips");
  const randomTip = prestigeTips[Math.floor(Math.random() * prestigeTips.length)];
  tipsSection.style.display = "block";
  tipsSection.innerText = randomTip;
  speak(randomTip);
}

function startPrestigeTipLoop(interval = 10000) {
  showPrestigeTips();
  setInterval(showPrestigeTips, interval);
}

// Phone health scanner simulation
function scanPhone() {
  const scanner = document.getElementById('scanner');
  scanner.style.display = 'block';
  scanner.innerHTML = "🔍 Scanning... Please wait...";

  setTimeout(async () => {
    const battery = await getBatteryEstimate();
    const storage = await getStorageEstimate();
    const speed = simulateSpeedCheck();
    const backgroundApps = simulateBackgroundApps();

    const mockUptimeHours = Math.floor(Math.random() * 120);
    let uptimeMessage = "";

    if (mockUptimeHours < 24) {
      uptimeMessage = `🕐 Your phone was restarted recently (~${mockUptimeHours} hrs ago).`;
    } else if (mockUptimeHours < 72) {
      uptimeMessage = `🔁 It's been ${mockUptimeHours} hours since your last restart. A restart is recommended.`;
    } else {
      uptimeMessage = `⚠️ It's been over ${mockUptimeHours} hours since your last restart! Restarting your phone can boost performance.`;
    }

    scanner.innerHTML = `
      <h3>📊 Phone Health Report</h3>
      <ul>
        <li>🔋 Battery: ${battery}</li>
        <li>💾 Storage: ${storage}</li>
        <li>🧠 Background Apps: ${backgroundApps}</li>
        <li>🚀 Performance: ${speed}</li>
      </ul>
      <p style="color: orange;">${uptimeMessage}</p>
    `;
  }, 1500);
}

// Async get battery estimate
async function getBatteryEstimate() {
  if ('getBattery' in navigator) {
    try {
      const battery = await navigator.getBattery();
      const percent = Math.round(battery.level * 100);
      const status = battery.charging ? "Charging"
