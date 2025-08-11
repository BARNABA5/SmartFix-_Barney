
  function speak(text) {
    const voice = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(voice);
  }

  function diagnoseIssue() {
    const issue = document.getElementById("issue").value;
    let diagnosis = "";

    switch (issue) {
      case "battery":
        diagnosis = "Your battery may be draining fast due to background apps, location services, or high brightness.";
        break;
      case "charging":
        diagnosis = "Slow charging might be caused by a faulty cable, adapter, or active apps while charging.";
        break;
      case "auto-restart":
        diagnosis = "Automatic restarts may be due to system crashes, corrupted apps, or hardware problems.";
        break;
      case "charging-port":
        diagnosis = "Your charging port may be blocked or damaged. Clean it gently or visit a technician.";
        break;

      case "heating":
        diagnosis = "Phone heating up can result from heavy gaming or background apps, so it's wise to investigate the phone's temperature and what you were doing before it crashed. ";
        break;
      case "overheating":
        diagnosis = "Overheating during calls or gaming could mean your phone is overworked or poorly ventilated.";
        break;
      case "freezing":
        diagnosis = "Freezing or lagging is usually caused by low RAM or outdated software.";
        break;
      case "slow-performance":
        diagnosis = "Slow performance may be due to running too many apps or lack of storage, Outdated software or Malware infections.";
        break;

      case "data-drain":
        diagnosis = "Data draining fast can be caused by auto-updates, background sync, or video streaming.";
        break;
      case "network":
        diagnosis = "Poor network signal could be from low coverage areas or SIM issues.";
        break;
      case "wifi":
        diagnosis = "Wi-Fi disconnecting often? Try restarting the router or forgetting and reconnecting the network.";
        break;
      case "bluetooth":
        diagnosis = "Bluetooth connection problems might come from interference or pairing errors.";
        break;
      case "gps":
        diagnosis = "GPS not working? Enable high-accuracy mode or reset location services.";
        break;
      case "usb":
        diagnosis = "If USB isn’t recognized, check your cable, port, and enable file transfer mode.";
        break;
      case "sim-error":
        diagnosis = "SIM card not detected? It might be misaligned, damaged, or dirty.";
        break;

      case "screen":
        diagnosis = "Cracked or unresponsive screens require replacement or touch calibration.";
        break;
      case "camera":
        diagnosis = "Camera not working? Force stop the app or check if another app is using it.";
        break;
      case "sound":
        diagnosis = "No sound or distortion may come from clogged speakers or software settings.";
        break;
      case "mic":
        diagnosis = "Microphone issues can result from dirt, app permissions, or hardware failure.";
        break;
      case "speaker":
        diagnosis = "Speaker not working? Clean it carefully or check sound settings.";
        break;
      case "vibration":
        diagnosis = "No vibration? Test using settings or check Do Not Disturb mode.";
        break;
      case "proximity":
        diagnosis = "Proximity sensor issues affect screen dimming during calls. Clean the sensor area.";
        break;
      case "fingerprint":
        diagnosis = "Fingerprint sensor may not respond due to dirt,. Additionally, temporary conditions like dry skin, scars, or extreme temperatures can also interfere with fingerprint recognition. .";
        break;
      case "face-unlock":
        diagnosis = "Face unlock not working? Improve lighting or remove glasses/hats.";
        break;

      case "apps-crashing":
        diagnosis = "Apps crashing often? Clear cache or reinstall the app.";
        break;
      case "update-fail":
        diagnosis = "System update failed? Check storage and internet, or restart the device and try running it again.";
        break;
      case "notifications":
        diagnosis = "Not receiving notifications? Check app permissions and do not disturb mode.";
        break;
      case "touch-issues":
        diagnosis = "Touchscreen issues may be fixed by restarting or cleaning the screen.";
        break;
      case "storage":
        diagnosis = "Storage full? Delete unused files and apps, and clear cached data.";
        break;
        case "Pop-up ads":
        diagnosis="popup ads can be annoying and may indicate hardware issues or malware. consider using an ad blocker or scanning  your phone for malware, or go to browser settings and disable popups,"
        break;
      default:
        diagnosis = "Please Visit a nearby Technician ,,or  contact Barney Enterprise ,, His Email Address is :shivayilubarnabas@gmail.com";
    }
    
    function showStepFix() {
  const issue = document.getElementById("issue").value;
  const stepFix = document.getElementById("stepFix");
  let steps = "";

  
}
 
    function showStepFix() {
  const issue = document.getElementById("issue").value;
  const stepFix = document.getElementById("stepFix");
  let steps = "";
    }


    document.getElementById("output").innerText = diagnosis;
    speak(diagnosis);

    // Save to history
    if (issue) {
      const historyItem = document.createElement("li");
      historyItem.textContent = `📌 ${document.querySelector("#issue option:checked").textContent} - ${diagnosis}`;
      document.getElementById("history").appendChild(historyItem);
    }
  }

  // Placeholder functions for other buttons (you can update them later)
  function showStepFix() {
    document.getElementById("stepFix").style.display = "block";
    document.getElementById("stepFix").innerText = "🔧 A weekly restart can help clear out background processes,resolve memory issues, and ensure your phone runs more efficiently , . ";
  }

  function showTips() {
    document.getElementById("tips").style.display = "block";
    document.getElementById("tips").innerText = "💡 Keep your phone updated and clean background apps regularly!";
  }

  function showRestartReminder() {
    document.getElementById("restart").style.display = "block";
    document.getElementById("restart").innerText = "🔄 Restart your phone at least once a week to keep it running smoothly.";
  }

function clearDiagnosis() {
  // Clear main diagnosis output
  document.getElementById("output").innerText = "";

  // Hide and clear all other sections
  document.getElementById("stepFix").style.display = "none";
  document.getElementById("tips").style.display = "none";
  document.getElementById("restart").style.display = "none";
  document.getElementById("scanner").style.display = "none";
  document.getElementById("shareStatus").innerText = "";

  // Clear diagnosis history list
  document.getElementById("history").innerHTML = "";

  // Reset the dropdown
  document.getElementById("issue").value = "";

  // Optional: stop any ongoing voice speech
  speechSynthesis.cancel();
}
function showSettings() {
  const panel = document.getElementById("settingsPanel");
  panel.style.display = panel.style.display === "none" ? "block" : "none";
}

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
function showPopup() {
  const lastShown = localStorage.getItem("popupLastShown");
  const now = new Date();

  // If shown within the last 7 days, don't show again
  if (lastShown && (now - new Date(lastShown)) < 7 * 24 * 60 * 60 * 1000) {
    return;
  }

  // Save current time as last shown
  localStorage.setItem("popupLastShown", now.toISOString());

  // Show the popup
  const popup = document.createElement("div");
  popup.innerText = "🔔 Tip: Restart your phone weekly to improve performance!";
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
function showStepFix() {
  const issue = document.getElementById("issue").value;
  const stepFix = document.getElementById("stepFix");
  let steps = "";

  switch (issue) {
    case "battery":
      steps = `1. Reduce screen brightness. 2. Close unused background apps. 3. Turn off GPS, Bluetooth & Wi-Fi when not in use. 4. Enable battery saver mode. 5. Update all apps and software.`;
      break;

    case "charging":
      steps = `1. Use original charger and cable. 2. Clean the charging port gently. 3. Avoid using phone while charging. 4. Try charging from a different power source. 5. Check for software updates.`;
      break;

    case "auto-restart":
      steps = `1. Uninstall recently added apps. 2. Check for system updates. 3. Perform a virus scan. 4. Reset to factory settings if needed. 5. Visit technician if issue persists.`;
      break;

    case "charging-port":
      steps = `1. Inspect port for dust or debris. 2. Use a soft brush to clean. 3. Try a different cable. 4. Restart phone. 5. Seek professional repair if loose or damaged.`;
      break;

    case "heating":
      steps = `1. Avoid heavy apps or games. 2. Close apps running in background. 3. Keep phone in cool environments. 4. Remove case during charging. 5. Don’t overcharge the phone.`;
      break;

    case "overheating":
      steps = `1. Stop gaming or video calls temporarily. 2. Remove phone case. 3. Let phone cool down. 4. Disable background data. 5. Restart device.`;
      break;

    case "freezing":
    case "slow-performance":
      steps = `1. Restart your phone. 2. Clear cache memory. 3. Delete unused apps. 4. Update the OS. 5. Factory reset as a last resort.`;
      break;

    case "data-drain":
      steps = `1. Limit background data usage. 2. Turn off auto-updates. 3. Disable autoplay in social apps. 4. Monitor data usage via settings. 5. Use data-saving mode.`;
      break;

    case "network":
      steps = `1. Toggle airplane mode on/off. 2. Reinsert SIM card. 3. Restart phone. 4. Change preferred network type. 5. Contact service provider if needed.`;
      break;

    case "wifi":
      steps = `1. Forget and reconnect Wi-Fi. 2. Restart router. 3. Move closer to router. 4. Reset network settings. 5. Check for system updates.`;
      break;

    case "bluetooth":
      steps = `1. Toggle Bluetooth off/on. 2. Unpair and re-pair device. 3. Restart phone. 4. Ensure the other device is in pairing mode. 5. Clear Bluetooth cache.`;
      break;

    case "gps":
      steps = `1. Enable high accuracy mode. 2. Restart phone. 3. Calibrate using Maps app. 4. Turn GPS off and back on. 5. Update location services.`;
      break;

    case "usb":
      steps = `1. Use original USB cable. 2. Enable USB file transfer mode. 3. Try another USB port or PC. 4. Restart both devices. 5. Check USB settings under Developer Options.`;
      break;

    case "sim-error":
      steps = `1. Reinsert SIM card. 2. Clean SIM card with dry cloth. 3. Try SIM in another phone. 4. Toggle airplane mode. 5. Replace if SIM is damaged.`;
      break;

    case "Pop-up ads":
      steps = `1. Uninstall suspicious apps. 2. Use an ad blocker. 3. Scan phone for malware. 4. Don’t click unknown links. 5. Reset browser or install cleaner app.`;
      break; 
      case"Full storage":
      steps =`1. Delete unused apps and files.2. clear cashe and data of apps .3. Move files to cloud storage or SD card.4. Use storage management tools in setting .5.Factory reset as a last resort.`;
break;
case "screen":
      steps = `1. Check for software updates. 2. Restart phone. 3. If cracked, consider screen replacement. 4. Clean screen with a microfiber cloth. 5. Test touch sensitivity in settings.`;
      break;
      case "camera":
      steps = `1. Restart the camera app. 2. Clear camera app cache. 3. Check for software updates. 4. Remove any camera lens cover. 5. If hardware issue, visit a technician.`;
      break;
    case "sound":
      steps = `1. Check volume settings. 2. Restart phone. 3. Clean speaker grills gently. 4. Test with headphones. 5. If no sound, consider hardware repair.`;
      break;
    case "mic":
      steps = `1. Check app permissions for microphone. 2. Restart phone. 3. Clean microphone area gently. 4. Test with voice recorder app. 5. If still not working, visit a technician.`;
      break;
    case "speaker":
      steps = `1. Check volume settings. 2. Restart phone. 3. Clean speaker grills gently. 4. Test with headphones. 5. If no sound, consider hardware repair.`;
      break;
    case "vibration":
      steps = `1. Check vibration settings in sound settings. 2. Restart phone. 3. Test vibration using settings or a test app. 4. Ensure Do Not Disturb mode is off. 5. If still not working, visit a technician.`;
    break;
    case "proximity":
      steps = `1. Clean the proximity sensor area (usually near the front camera). 2. Restart phone. 3. Test during calls to see if screen dims. 4. Check for software updates. 5. If still not working, visit a technician.`;
      break;
case "fingerprint":
      steps = `1. Clean the fingerprint sensor gently. 2. Re-register your fingerprint in settings. 3. Ensure your fingers are dry and clean. 4. Restart phone. 5. If still not working, visit a technician.`;
      break;
    case "face-unlock":
case "face-unlock":
      steps = `1. Ensure good lighting conditions. 2. Remove any obstructions (glasses, hats). 3. Re-register your face in settings. 4. Restart phone. 5. If still not working, visit a technician.`;
      break;
    case "apps-crashing":
      steps = `1. Clear app cache and data. 2. Uninstall and reinstall the app. 3. Check for app updates. 4. Restart phone. 5. If issue persists, report to app developer.`;
      break;
    case "update-fail":
      steps = `1. Ensure sufficient storage space. 2. Check internet connection. 3. Restart phone and try again. 4. Clear cache of the update app (if applicable). 5. If still failing, consider factory reset or visit a technician.`;
      break;
    case "notifications":
      steps = `1. Check app notification settings. 2. Ensure Do Not Disturb mode is off. 3. Restart phone. 4. Clear cache of the affected app. 5. If still not receiving, reinstall the app.`;
      break;
    case "touch-issues":
      steps = `1. Restart your phone. 2. Clean the screen with a microfiber cloth. 3. Check for software updates. 4. Remove any screen protector or case that might interfere. 5. If still unresponsive, visit a technician.`;
      break;
    case "storage":
      steps = `1. Delete unused apps and files. 2. Clear cache of apps. 3. Move files to cloud storage or SD card. 4. Use storage management tools in settings. 5. Factory reset as a last resort.`;
      break;
    case "Pop-up ads":
      steps = `1. Uninstall suspicious apps. 2. Use an ad blocker. 3. Scan phone for malware. 4. Don’t click unknown links. 5. Reset browser or install cleaner app.`;
      break;
    case "Full storage":
      steps = `1. Delete unused apps and files. 2. Clear cache of apps. 3. Move files to cloud storage or SD card. 4. Use storage management tools in settings. 5. Factory reset as a last resort.`;
      break;
    case "scanner":
      steps = `1. Open the scanner app. 2. Align the document within the frame. 3. Tap the capture button. 4. Adjust settings for clarity if needed. 5. Save or share the scanned document.`;
      break;


    default:
      steps = `Please select an issue to view step-by-step fix.`;
  }

  // Output to the page with formatting
  
stepFix.innerHTML = `<strong>🛠️ Step-by-Step Fix:</strong><br>${steps
  .split(/\d\.\s+/)
  .filter(step => step.trim() !== '')
  .map((step, index) => `${index + 1}. ${step.trim()}`)
  .join('<br>')}`;

  // Make it visible
  stepFix.style.display = "block";

  // 🔊 Speak the steps
  speak(steps);
}

// ................Prestige Tips Feature for SmartFix Barney App.......................
const prestigeTips = [
  "📲 ....*To Use Split Screen*: Open the recent apps menu, tap the app icon, and select 'Split screen' to multitask like a pro!",
  "📌 .....*Whant to do App Pinning*: Go to Settings then >Security then > App Pinning. Pin an app to avoid distractions or lock kids to a single app.",
  "🕶️ .....* Shift Storage to SD card   eeh?*:Go to settings > then System> and now go to Developers option,Scroll down to Standby Apps,then select (Force allow apps on External).",
  "🧠 .....*To get an Adaptive Battery*: Go to Settings then  > Battery then > Adaptive Battery. Let Android learn your habits and extend battery life.",
  "📺 ......*To get Picture-in-Picture (PiP)*: Where you can Watch videos while multitasking.. Supported apps (like YouTube Premium) shrink into a floating window.",
  "🎮 ......*To set Game Mode*: Check Settings then > Special Features (developers option )then > Game Mode. Boost performance and block notifications during gaming.",
  "📶 ......*To set Wi-Fi Sharing via QR Code*: In Wi-Fi settings, tap the connected network and generate a QR code to share access easily.",
  "🧭 ......*Gesture Navigation*: Enable full-screen gesture navigation in Settings > System > Gestures.",
  "🔕 ......*Digital Wellbeing & Focus Mode*: Monitor app usage, set screen time limits, and block distractions with Focus Mode.",
  "🎙️ .......*Voice Access*:To disable Talk Back which can be sometimes anoying,, Make sure to double tap on the section you whant to choose."
];

function showPrestigeTips() {
  const tipsSection = document.getElementById("tips");
  const randomTip = prestigeTips[Math.floor(Math.random() * prestigeTips.length)];
  tipsSection.style.display = "block";
  tipsSection.innerText = randomTip;
  speak(randomTip); // Optional voice output
}

function startPrestigeTipLoop(interval = 10000) {
  showPrestigeTips(); // Show one immediately
  setInterval(showPrestigeTips, interval); // Show a new one every X ms
}
function scanPhone() {
  const scanner = document.getElementById('scanner');
  scanner.style.display = 'block';
  scanner.innerHTML = "🔍 Scanning... Please wait...";

  setTimeout(() => {
    const battery = getBatteryEstimate();
    const storage = getStorageEstimate();
    const speed = simulateSpeedCheck();
    const backgroundApps = simulateBackgroundApps();

    // Simulate phone uptime
    const mockUptimeHours = Math.floor(Math.random() * 120); // e.g. 0–120 hours
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

// Simulate Battery
function getBatteryEstimate() {
  if ('getBattery' in navigator) {
    navigator.getBattery().then(battery => {
      const percent = Math.round(battery.level * 100);
      const status = battery.charging ? "Charging" : "Not Charging";
      alert(`Battery: ${percent}% - ${status}`);
    });
    return "🔋 Battery status displayed in alert info.";
  } else {
    return "Battery info not supported by this browser.";
  }
}

// Simulate Storage
function getStorageEstimate() {
  if ('storage' in navigator && 'estimate' in navigator.storage) {
    navigator.storage.estimate().then(estimate => {
      const used = (estimate.usage / (1024 * 1024)).toFixed(1);
      const quota = (estimate.quota / (1024 * 1024)).toFixed(1);
      const percent = ((estimate.usage / estimate.quota) * 100).toFixed(1);
      alert(`Used: ${used} MB / ${quota} MB (${percent}%)`);
    });
    return "💾 Storage info displayed in alert info.";
  } else {
    return "Storage info not supported by this browser.";
  }
}

// Simulate Background Apps
function simulateBackgroundApps() {
  const mockApps = Math.floor(Math.random() * 6) + 2;
  return `${mockApps} apps running in background (estimated)`;
}

// Simulate Speed
function simulateSpeedCheck() {
  const speeds = ["Excellent ⚡", "Moderate 🚶", "Slow 🐢"];
  const randomSpeed = speeds[Math.floor(Math.random() * speeds.length)];
  return randomSpeed;
}
