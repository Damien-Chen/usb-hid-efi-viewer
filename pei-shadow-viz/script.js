/* i18n (Chinese only) - baked in, EN version removed */
const translations = { 'zh-TW': {
    "page.title": "PEI Shadow 流程視覺化",
    "nav.back": "← 返回工具列表",
    "nav.overview": "概述",
    "nav.architecture": "記憶體架構",
    "nav.flow": "Shadow 流程",
    "nav.fixup": "指標修正",
    "nav.code": "程式碼解析",
    "nav.references": "參考資源",
    "overview.title": "PEI Shadow 流程概述",
    "overview.subtitle": "理解 PEI 階段從 Flash 到 RAM 的遷移過程",
    "overview.what.title": "什麼是 PEI Shadow？",
    "overview.what.desc": "PEI（Pre-EFI Initialization）Shadow 是 UEFI 開機流程中的關鍵步驟。在永久記憶體（DRAM）初始化完成後，PEI Core 將自身從 Flash ROM 複製（Shadow）到 DRAM 中執行，以獲得更快的執行速度和完整的讀寫能力。",
    "overview.why.title": "為什麼需要 Shadow？",
    "overview.why.desc": "Flash ROM 是唯讀且存取速度慢的。在 DRAM 可用之前，PEI Core 必須在 Flash 上就地執行（XIP），並使用 Cache as RAM（CAR）作為臨時記憶體。一旦 DRAM 初始化完成，將 PEI Core 搬移到 DRAM 可以大幅提升效能。",
    "overview.when.title": "何時發生 Shadow？",
    "overview.when.desc": "Shadow 發生在 Memory Init PEIM 完成 DRAM 訓練並呼叫 PeiInstallPeiMemory() 之後。PEI Core 收到通知後，立即開始搬移流程，包括複製自身、遷移堆疊和 HOB 列表，然後從新的 DRAM 位址重新進入。",
    "phase.sec": "SEC 階段",
    "phase.pei.pre": "PEI（記憶體前）",
    "phase.shadow": "Shadow 轉換",
    "phase.pei.post": "PEI（記憶體後）",
    "phase.dxe": "DXE 階段",
    "arch.title": "記憶體架構",
    "arch.subtitle": "了解 PEI 階段涉及的三種記憶體區域",
    "arch.flash.title": "Flash ROM",
    "arch.flash.desc": "儲存韌體映像的非揮發性記憶體。PEI Core 和 PEIMs 最初從這裡就地執行（XIP）。存取速度慢，且為唯讀。",
    "arch.car.title": "Cache as RAM（CAR）",
    "arch.car.desc": "在永久記憶體可用之前，CPU 快取被配置為臨時 RAM。提供少量空間（通常 256 KB – 1 MB）用於堆疊、堆積和 HOB 列表。",
    "arch.dram.title": "永久記憶體（DRAM）",
    "arch.dram.desc": "系統主記憶體，由 Memory Init PEIM 初始化。初始化完成後成為 PEI Core 和後續 PEIMs 的執行環境。",
    "arch.flash.bfv": "開機韌體卷（BFV）",
    "arch.flash.sec": "SEC Core",
    "arch.flash.peicore": "PEI Core",
    "arch.flash.peims": "PEIMs",
    "arch.flash.dxefv": "DXE 韌體卷",
    "arch.car.stack": "堆疊（Stack）",
    "arch.car.heap": "堆積（Heap）",
    "arch.car.hob": "HOB 列表",
    "arch.car.ppidb": "PPI 資料庫",
    "arch.dram.empty": "（未初始化）",
    "arch.dram.peicore": "PEI Core（Shadow）",
    "arch.dram.stack": "新堆疊",
    "arch.dram.hob": "新 HOB 列表",
    "arch.dram.peims": "PEIMs（已載入）",
    "arch.dram.free": "可用空間",
    "flow.title": "Shadow 流程",
    "flow.subtitle": "逐步了解 PEI Shadow 的完整過程",
    "flow.step.label": "步驟",
    "flow.step.of": "/",
    "flow.step1.title": "SEC → PEI 交接",
    "flow.step1.desc": "SEC 階段初始化 CAR（透過 MTRR 設定 CPU 快取為 No-Eviction Mode），在 BFV 中找到 PEI Core 入口點，建立 SecCoreData 結構（包含臨時 RAM 資訊），然後將控制權轉交給 PEI Core。",
    "flow.step1.detail": "SEC 透過 Reset Vector 開始執行，進入保護模式，設定臨時記憶體環境。",
    "flow.step2.title": "PEI Core 初始化（XIP）",
    "flow.step2.desc": "PEI Core 從 Flash 就地執行（eXecute In Place）。使用 CAR 空間建立堆疊和堆積，初始化 PPI 資料庫和 HOB 列表。此時所有程式碼都從 Flash 讀取執行，資料儲存在 CAR 中。",
    "flow.step2.detail": "XIP 表示程式碼直接從 Flash 位址空間讀取並執行，無需複製到 RAM。",
    "flow.step3.title": "記憶體前 PEIM 分派",
    "flow.step3.desc": "PEI Dispatcher 開始從 BFV 中尋找和執行 PEIMs。這些 PEIM 以 XIP 模式執行，主要包括 CPU 初始化、晶片組早期配置等。每個 PEIM 可以安裝 PPI 供其他模組使用。",
    "flow.step3.detail": "Dispatcher 使用 Dependency Expression（DEPEX）確定 PEIM 的執行順序。",
    "flow.step4.title": "記憶體探索（Memory Init）",
    "flow.step4.desc": "Memory Init PEIM（如 Intel MRC）執行 DRAM 訓練和初始化。完成後呼叫 PeiInstallPeiMemory() 註冊可用的永久記憶體範圍。這會觸發 gEfiPeiMemoryDiscoveredPpiGuid 通知。",
    "flow.step4.detail": "DRAM 訓練包括：通道偵測、時序校準、電壓調整、ECC 設定等。",
    "flow.step5.title": "PEI Core Shadow 複製",
    "flow.step5.desc": "PEI Core 收到永久記憶體通知後，將自身從 Flash（BFV）複製到 DRAM。複製包括 PEI Core 的完整映像。新的副本位於 DRAM 中較高的位址區域。",
    "flow.step5.detail": "Shadow 複製使用 CopyMem 將 PEI Core FV 從 Flash 位址複製到 DRAM 位址。",
    "flow.step6.title": "堆疊與 HOB 遷移",
    "flow.step6.desc": "將堆疊從 CAR 遷移到 DRAM 中的新位置。同時，HOB（Hand-Off Block）列表也從 CAR 堆積遷移到 DRAM。所有在 CAR 中的資料結構都需要搬移到永久記憶體。",
    "flow.step6.detail": "遷移過程中需要保持堆疊內容的完整性，並更新堆疊指標。",
    "flow.step7.title": "指標修正（Fixup）",
    "flow.step7.desc": "由於程式碼和資料移動到了新位址，所有內部指標都需要修正。包括 HOB 列表中的指標、PPI 資料庫中的指標、以及堆疊中的返回位址。修正值 = 新位址 − 舊位址。",
    "flow.step7.detail": "指標修正是 Shadow 過程中最容易出錯的部分，必須確保所有引用都已更新。",
    "flow.step8.title": "PEI Core 重新進入",
    "flow.step8.desc": "PEI Core 切換到 DRAM 中的新堆疊，然後跳轉到 DRAM 中 PEI Core 的新入口點。從這一刻起，PEI Core 完全從 DRAM 執行，不再依賴 Flash 或 CAR。",
    "flow.step8.detail": "重新進入後，CAR 可以被關閉（Tear Down），CPU 快取恢復正常模式。",
    "flow.step9.title": "記憶體後分派與 DXE 交接",
    "flow.step9.desc": "PEI Core 在 DRAM 中繼續分派剩餘的 PEIMs。這些 PEIM 可以載入到 DRAM 中執行（不再需要 XIP）。最終，DXE IPL PEIM 被分派，它找到 DXE Core 並將控制權轉交給 DXE 階段。",
    "flow.step9.detail": "HOB 列表作為 PEI → DXE 的主要資訊傳遞機制。",
    "fixup.title": "指標修正詳解",
    "fixup.subtitle": "了解 Shadow 後的位址轉換",
    "fixup.desc": "當 PEI Core 從 Flash 複製到 DRAM 時，所有內部指標仍然指向舊的 Flash / CAR 位址。指標修正（Fixup）過程將這些指標更新為新的 DRAM 位址。",
    "fixup.formula": "新指標 = 舊指標 + (DRAM 基址 − Flash 基址)",
    "fixup.hob.title": "HOB 列表指標修正",
    "fixup.hob.desc": "HOB 列表是一個鏈結串列。每個 HOB 的 Next 指標都需要從 CAR 位址更新為 DRAM 位址。",
    "fixup.ppi.title": "PPI 資料庫指標修正",
    "fixup.ppi.desc": "PPI 描述子中的 GUID 指標和介面指標需要更新。指向 Flash 中 PEIM 的 PPI 指標保持不變，指向 CAR 中資料的指標需要修正。",
    "fixup.stack.title": "堆疊指標修正",
    "fixup.stack.desc": "堆疊中的返回位址和框架指標需要根據 PEI Core 在 DRAM 中的新位址進行調整。",
    "code.title": "關鍵程式碼解析",
    "code.subtitle": "EDK2 原始碼中 PEI Shadow 的核心實作",
    "code.install.title": "PeiInstallPeiMemory()",
    "code.install.desc": "由 Memory Init PEIM 呼叫，註冊永久記憶體。這是觸發 Shadow 流程的起點。",
    "code.shadow.title": "PeiCore Shadow 邏輯",
    "code.shadow.desc": "PEI Core 主函式中處理 Shadow 的核心邏輯。檢查是否有永久記憶體，如果有則執行搬移。",
    "code.migrate.title": "堆疊遷移",
    "code.migrate.desc": "將堆疊從 CAR 遷移到永久記憶體的關鍵流程。",
    "ref.title": "參考資源",
    "ref.subtitle": "深入學習 PEI Shadow 流程的相關資料",
    "ref.spec": "PI 規格書",
    "ref.spec.desc": "UEFI Platform Initialization 規格書 Volume 1：PEI Core Interface",
    "ref.edk2": "EDK2 原始碼",
    "ref.edk2.desc": "PeiMain — PEI Core 實作原始碼",
    "ref.edk2.dispatch": "PEI Dispatcher",
    "ref.edk2.dispatch.desc": "PEI Dispatcher 分派器原始碼",
    "ref.mem": "MdeModulePkg",
    "ref.mem.desc": "PEI 記憶體管理相關模組"
} };
let currentLang = 'zh-TW';

function t(key, params = {}) {
    let text = (translations['zh-TW'] && translations['zh-TW'][key]) || key;
    Object.keys(params).forEach((param) => {
        text = text.replace(`{${param}}`, params[param]);
    });
    return text;
}

function getCurrentLang() {
    return 'zh-TW';
}

function updatePageTranslations() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        const value = t(key);
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = value;
        } else {
            el.innerHTML = value;
        }
    });
    document.title = t('page.title');
}

function setLanguage() {
    document.documentElement.lang = 'zh-TW';
    updatePageTranslations();
    if (typeof refreshDynamicContent === 'function') {
        refreshDynamicContent();
    }
    if (typeof updateBuildCommand === 'function') {
        updateBuildCommand();
    }
}

function initI18n() {
    setLanguage();
}

/* ------------------------------------------------------------------ */
/*  PEI Shadow Process Visualizer – Main Script                       */
/*  Interactive SVG diagrams + step-by-step flow                      */
/* ------------------------------------------------------------------ */

/* ====================== colour constants ========================== */
var C = {
    primary:   '#e8a838',
    flash:     '#e8a838',
    flashDim:  'rgba(232,168,56,0.25)',
    flashFill: 'rgba(232,168,56,0.08)',
    car:       '#f97316',
    carDim:    'rgba(249,115,22,0.25)',
    carFill:   'rgba(249,115,22,0.08)',
    dram:      '#58a6ff',
    dramDim:   'rgba(88,166,255,0.25)',
    dramFill:  'rgba(88,166,255,0.08)',
    sec:       '#a78bfa',
    dxe:       '#34d399',
    shadow:    '#f472b6',
    dimmed:    '#2a3040',
    dimText:   '#4a5568',
    text:      '#e6edf3',
    muted:     '#8b9bb0',
    bg:        '#0c1118',
    exec:      '#fbbf24',
    arrow:     '#f472b6',
    done:      '#34d399',
};

/* ====================== flow step definitions ===================== */
var TOTAL_STEPS = 9;
var currentFlowStep = 0;

/* ====================== architecture diagram ====================== */
function renderArchDiagram() {
    var el = document.getElementById('arch-diagram');
    if (!el) return;

    var W = 960, H = 440;
    var colW = 240, colH = 340, gap = 60;
    var startX = (W - 3 * colW - 2 * gap) / 2;
    var startY = 50;

    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '">';

    // defs for glow filters
    svg += '<defs>';
    svg += '<filter id="glowFlash" x="-20%" y="-20%" width="140%" height="140%">'
         + '<feGaussianBlur stdDeviation="4" result="blur"/>'
         + '<feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
    svg += '<filter id="glowCar" x="-20%" y="-20%" width="140%" height="140%">'
         + '<feGaussianBlur stdDeviation="4" result="blur"/>'
         + '<feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
    svg += '<filter id="glowDram" x="-20%" y="-20%" width="140%" height="140%">'
         + '<feGaussianBlur stdDeviation="4" result="blur"/>'
         + '<feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
    svg += '</defs>';

    // column data
    var cols = [
        { x: startX,                     label: 'Flash ROM',  color: C.flash, fill: C.flashFill, border: C.flashDim,
          blocks: [
            { h: 40, label: t('arch.flash.bfv'),     color: C.flash, isBfv: true },
            { h: 36, label: t('arch.flash.sec'),      color: C.sec },
            { h: 50, label: t('arch.flash.peicore'),  color: C.flash },
            { h: 50, label: t('arch.flash.peims'),    color: C.flash },
            { h: 60, label: t('arch.flash.dxefv'),    color: C.dxe },
          ]
        },
        { x: startX + colW + gap,        label: 'CAR',       color: C.car,   fill: C.carFill,   border: C.carDim,
          blocks: [
            { h: 60, label: t('arch.car.stack'), color: C.car },
            { h: 55, label: t('arch.car.heap'),  color: C.car },
            { h: 55, label: t('arch.car.hob'),   color: C.car },
            { h: 50, label: t('arch.car.ppidb'), color: C.car },
          ]
        },
        { x: startX + 2 * (colW + gap),  label: 'DRAM',      color: C.dram,  fill: C.dramFill,  border: C.dramDim,
          blocks: [
            { h: 250, label: t('arch.dram.empty'), color: C.dimmed, textColor: C.dimText },
          ]
        },
    ];

    cols.forEach(function (col) {
        // column background
        svg += '<rect x="' + col.x + '" y="' + startY + '" width="' + colW + '" height="' + colH + '" rx="12" '
             + 'fill="' + col.fill + '" stroke="' + col.border + '" stroke-width="1.5"/>';

        // column title
        svg += '<text x="' + (col.x + colW / 2) + '" y="' + (startY - 12) + '" text-anchor="middle" '
             + 'fill="' + col.color + '" font-family="Space Grotesk,sans-serif" font-size="15" font-weight="700">'
             + col.label + '</text>';

        // inner blocks
        var by = startY + 16;
        var pad = 12;
        col.blocks.forEach(function (b) {
            var bw = colW - 2 * pad;
            svg += '<rect x="' + (col.x + pad) + '" y="' + by + '" width="' + bw + '" height="' + b.h + '" rx="6" '
                 + 'fill="rgba(0,0,0,0.3)" stroke="' + (b.color || col.color) + '" stroke-width="1" '
                 + (b.isBfv ? 'stroke-dasharray="4,3" ' : '') + '/>';
            svg += '<text x="' + (col.x + colW / 2) + '" y="' + (by + b.h / 2 + 5) + '" text-anchor="middle" '
                 + 'fill="' + (b.textColor || b.color || col.color) + '" font-family="Space Grotesk,sans-serif" font-size="12" font-weight="500">'
                 + b.label + '</text>';
            by += b.h + 8;
        });
    });

    // address labels
    svg += '<text x="' + startX + '" y="' + (startY + colH + 24) + '" fill="' + C.muted + '" font-family="JetBrains Mono,monospace" font-size="10">0xFFFFFFFF (high)</text>';
    svg += '<text x="' + (startX + 2 * (colW + gap)) + '" y="' + (startY + colH + 24) + '" fill="' + C.muted + '" font-family="JetBrains Mono,monospace" font-size="10">0x00000000 (low)</text>';

    svg += '</svg>';
    el.innerHTML = svg;
}

/* ====================== flow diagram ============================== */

function renderFlowStep(step) {
    currentFlowStep = step;
    var el = document.getElementById('flow-diagram');
    if (!el) return;

    var W = 960, H = 480;
    var colW = 220, colH = 360, gap = 70;
    var startX = (W - 3 * colW - 2 * gap) / 2;
    var startY = 60;
    var pad = 10;
    var bw = colW - 2 * pad;

    // determine visibility and state of each block
    // Flash blocks: always visible but may be dimmed
    // CAR blocks: visible from step 1+, dimmed after step 7
    // DRAM blocks: appear progressively from step 4

    var flashActive  = step < 8;
    var carActive    = step >= 1 && step < 8;
    var dramInit     = step >= 3;  // DRAM starts initializing at step 4 (index 3)
    var dramActive   = step >= 4;

    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '">';

    // defs
    svg += '<defs>';
    svg += '<marker id="arrowPink" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">'
         + '<polygon points="0 0, 8 3, 0 6" fill="' + C.arrow + '"/></marker>';
    svg += '<marker id="arrowDone" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">'
         + '<polygon points="0 0, 8 3, 0 6" fill="' + C.done + '"/></marker>';
    // glow filter for active execution
    svg += '<filter id="execGlow" x="-30%" y="-30%" width="160%" height="160%">'
         + '<feGaussianBlur stdDeviation="6" result="blur"/>'
         + '<feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
    // pulse animation
    svg += '<style>'
         + '@keyframes pulse { 0%,100%{opacity:0.4} 50%{opacity:1} }'
         + '.pulse { animation: pulse 1.5s ease-in-out infinite; }'
         + '.arrow-anim { stroke-dasharray: 8 4; animation: dash 1s linear infinite; }'
         + '@keyframes dash { to { stroke-dashoffset: -12; } }'
         + '</style>';
    svg += '</defs>';

    // ----- helper to draw a memory block -----
    function block(x, y, w, h, label, color, opts) {
        opts = opts || {};
        var fill   = opts.fill || 'rgba(0,0,0,0.3)';
        var stroke = opts.dimmed ? C.dimmed : (color || C.muted);
        var tc     = opts.dimmed ? C.dimText : (opts.textColor || color);
        var sw     = opts.highlight ? 2.5 : 1;
        var extra  = '';
        if (opts.highlight) extra += ' filter="url(#execGlow)"';
        if (opts.dashed) extra += ' stroke-dasharray="5,3"';
        var r = '';
        r += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="5" '
           + 'fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + sw + '"' + extra + '/>';
        if (label) {
            r += '<text x="' + (x + w / 2) + '" y="' + (y + h / 2 + 4) + '" text-anchor="middle" '
               + 'fill="' + tc + '" font-family="Space Grotesk,sans-serif" font-size="11" font-weight="500">'
               + label + '</text>';
        }
        return r;
    }

    // ----- helper to draw an arrow -----
    function arrow(x1, y1, x2, y2, color, animated) {
        var mid = animated ? ' class="arrow-anim"' : '';
        var marker = color === C.done ? 'url(#arrowDone)' : 'url(#arrowPink)';
        return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" '
             + 'stroke="' + color + '" stroke-width="2" marker-end="' + marker + '"' + mid + '/>';
    }

    // ----- helper for curved arrow -----
    function curvedArrow(x1, y1, cx, cy, x2, y2, color, animated) {
        var mid = animated ? ' class="arrow-anim"' : '';
        var marker = color === C.done ? 'url(#arrowDone)' : 'url(#arrowPink)';
        return '<path d="M' + x1 + ' ' + y1 + ' Q' + cx + ' ' + cy + ' ' + x2 + ' ' + y2 + '" '
             + 'fill="none" stroke="' + color + '" stroke-width="2" marker-end="' + marker + '"' + mid + '/>';
    }

    // ---- column positions ----
    var fx = startX;
    var cx = startX + colW + gap;
    var dx = startX + 2 * (colW + gap);

    // ==== FLASH column ====
    var fDim = step >= 8;
    svg += '<rect x="' + fx + '" y="' + startY + '" width="' + colW + '" height="' + colH + '" rx="12" '
         + 'fill="' + (fDim ? 'rgba(42,48,64,0.3)' : C.flashFill) + '" '
         + 'stroke="' + (fDim ? C.dimmed : C.flashDim) + '" stroke-width="1.5"/>';
    svg += '<text x="' + (fx + colW / 2) + '" y="' + (startY - 14) + '" text-anchor="middle" '
         + 'fill="' + (fDim ? C.dimText : C.flash) + '" font-family="Space Grotesk,sans-serif" font-size="14" font-weight="700">'
         + 'Flash ROM</text>';

    var fy = startY + 14;
    // BFV container (dashed)
    svg += block(fx + pad, fy, bw, 240, '', C.flash, { dashed: true, dimmed: fDim });
    svg += '<text x="' + (fx + colW / 2) + '" y="' + (fy + 14) + '" text-anchor="middle" '
         + 'fill="' + (fDim ? C.dimText : C.flash) + '" font-family="Space Grotesk,sans-serif" font-size="10" font-weight="600">'
         + t('arch.flash.bfv') + '</text>';

    fy += 20;
    // SEC block
    var secHL = step === 0;
    svg += block(fx + pad + 8, fy, bw - 16, 36, t('arch.flash.sec'), C.sec, { dimmed: fDim, highlight: secHL });

    fy += 44;
    // PEI Core in Flash
    var peiHL = step >= 1 && step <= 4 && !fDim;
    svg += block(fx + pad + 8, fy, bw - 16, 46, t('arch.flash.peicore'), C.flash, { dimmed: fDim, highlight: peiHL });
    var flashPeiY = fy;

    fy += 54;
    // PEIMs in Flash
    var peimsHL = (step === 2 || step === 3) && !fDim;
    svg += block(fx + pad + 8, fy, bw - 16, 46, t('arch.flash.peims'), C.flash, { dimmed: fDim, highlight: peimsHL });
    var flashPeimsY = fy;

    fy += 54;
    // DXE FV
    svg += block(fx + pad + 8, fy, bw - 16, 56, t('arch.flash.dxefv'), C.dxe, { dimmed: fDim && step < 8 });

    // DXE FV highlight at step 8 (handoff)
    if (step === 8) {
        svg += block(fx + pad + 8, fy, bw - 16, 56, t('arch.flash.dxefv'), C.dxe, { highlight: true });
    }

    // ==== CAR column ====
    var cDim = step < 1 || step >= 8;
    svg += '<rect x="' + cx + '" y="' + startY + '" width="' + colW + '" height="' + colH + '" rx="12" '
         + 'fill="' + (cDim ? 'rgba(42,48,64,0.3)' : C.carFill) + '" '
         + 'stroke="' + (cDim ? C.dimmed : C.carDim) + '" stroke-width="1.5"/>';
    svg += '<text x="' + (cx + colW / 2) + '" y="' + (startY - 14) + '" text-anchor="middle" '
         + 'fill="' + (cDim ? C.dimText : C.car) + '" font-family="Space Grotesk,sans-serif" font-size="14" font-weight="700">'
         + 'CAR</text>';

    if (step >= 1) {
        var cy2 = startY + 18;
        var stackHL = step === 5;
        svg += block(cx + pad, cy2, bw, 55, t('arch.car.stack'), C.car, { dimmed: cDim, highlight: stackHL });
        var carStackY = cy2;
        cy2 += 63;
        svg += block(cx + pad, cy2, bw, 50, t('arch.car.heap'), C.car, { dimmed: cDim });
        cy2 += 58;
        var hobHL = step === 5;
        svg += block(cx + pad, cy2, bw, 50, t('arch.car.hob'), C.car, { dimmed: cDim, highlight: hobHL });
        var carHobY = cy2;
        cy2 += 58;
        svg += block(cx + pad, cy2, bw, 46, t('arch.car.ppidb'), C.car, { dimmed: cDim });
    }
    if (step < 1) {
        svg += '<text x="' + (cx + colW / 2) + '" y="' + (startY + colH / 2 + 4) + '" text-anchor="middle" '
             + 'fill="' + C.dimText + '" font-family="Space Grotesk,sans-serif" font-size="12">'
             + t('arch.dram.empty') + '</text>';
    }

    // ==== DRAM column ====
    var dDim = step < 4;
    svg += '<rect x="' + dx + '" y="' + startY + '" width="' + colW + '" height="' + colH + '" rx="12" '
         + 'fill="' + (dDim ? 'rgba(42,48,64,0.3)' : C.dramFill) + '" '
         + 'stroke="' + (dDim ? C.dimmed : C.dramDim) + '" stroke-width="1.5"/>';
    svg += '<text x="' + (dx + colW / 2) + '" y="' + (startY - 14) + '" text-anchor="middle" '
         + 'fill="' + (dDim ? C.dimText : C.dram) + '" font-family="Space Grotesk,sans-serif" font-size="14" font-weight="700">'
         + 'DRAM</text>';

    if (step < 3) {
        // DRAM not yet initialized
        svg += '<text x="' + (dx + colW / 2) + '" y="' + (startY + colH / 2 + 4) + '" text-anchor="middle" '
             + 'fill="' + C.dimText + '" font-family="Space Grotesk,sans-serif" font-size="12">'
             + t('arch.dram.empty') + '</text>';
    }
    if (step === 3) {
        // DRAM being initialized (memory discovery)
        svg += '<rect x="' + dx + '" y="' + startY + '" width="' + colW + '" height="' + colH + '" rx="12" '
             + 'fill="none" stroke="' + C.dram + '" stroke-width="2" class="pulse"/>';
        svg += '<text x="' + (dx + colW / 2) + '" y="' + (startY + colH / 2 - 4) + '" text-anchor="middle" '
             + 'fill="' + C.dram + '" font-family="Space Grotesk,sans-serif" font-size="13" font-weight="600" class="pulse">'
             + 'DRAM Training...</text>';
        svg += '<text x="' + (dx + colW / 2) + '" y="' + (startY + colH / 2 + 16) + '" text-anchor="middle" '
             + 'fill="' + C.muted + '" font-family="JetBrains Mono,monospace" font-size="10">'
             + 'PeiInstallPeiMemory()</text>';
    }

    // DRAM blocks from step 4+
    if (step >= 4) {
        var dy = startY + 18;
        // PEI Core shadowed
        var pcHL = step === 4 || step === 6 || step === 7;
        svg += block(dx + pad, dy, bw, 50, t('arch.dram.peicore'), C.dram, { highlight: pcHL });
        var dramPeiY = dy;
        dy += 58;

        if (step >= 5) {
            // New stack
            var nsHL = step === 5 || step === 6;
            svg += block(dx + pad, dy, bw, 50, t('arch.dram.stack'), C.dram, { highlight: nsHL });
            var dramStackY = dy;
            dy += 58;

            // New HOB
            var nhHL = step === 5 || step === 6;
            svg += block(dx + pad, dy, bw, 50, t('arch.dram.hob'), C.dram, { highlight: nhHL });
            var dramHobY = dy;
            dy += 58;
        }

        if (step >= 8) {
            // PEIMs loaded into DRAM
            svg += block(dx + pad, dy, bw, 46, t('arch.dram.peims'), C.dram, { highlight: step === 8 });
            dy += 54;
        }

        // Free space
        if (dy < startY + colH - 30) {
            var freeH = startY + colH - 14 - dy;
            svg += block(dx + pad, dy, bw, freeH, t('arch.dram.free'), C.dimmed, { textColor: C.dimText });
        }
    }

    // ==== ARROWS (data flow) ====
    // Step 0: SEC -> PEI arrow within flash
    if (step === 0) {
        svg += arrow(fx + colW - 20, startY + 56, fx + colW - 20, startY + 78, C.sec, true);
    }

    // Step 1: PEI Core in Flash -> CAR (data flow)
    if (step === 1) {
        svg += curvedArrow(
            fx + colW, startY + 100,
            fx + colW + gap / 2, startY + 60,
            cx, startY + 50,
            C.car, true
        );
    }

    // Step 4: Flash PEI Core -> DRAM PEI Core (shadow copy)
    if (step === 4) {
        svg += arrow(fx + colW, flashPeiY + 23, dx, dramPeiY + 25, C.arrow, true);
        svg += '<text x="' + (fx + colW + (dx - fx - colW) / 2) + '" y="' + (flashPeiY + 10) + '" text-anchor="middle" '
             + 'fill="' + C.arrow + '" font-family="JetBrains Mono,monospace" font-size="10" font-weight="600" class="pulse">'
             + 'Shadow Copy</text>';
    }

    // Step 5: CAR Stack/HOB -> DRAM Stack/HOB (migration)
    if (step === 5) {
        svg += arrow(cx + colW, carStackY + 27, dx, dramStackY + 25, C.arrow, true);
        svg += arrow(cx + colW, carHobY + 25, dx, dramHobY + 25, C.arrow, true);
        svg += '<text x="' + (cx + colW + (dx - cx - colW) / 2) + '" y="' + (carStackY + 12) + '" text-anchor="middle" '
             + 'fill="' + C.arrow + '" font-family="JetBrains Mono,monospace" font-size="10" font-weight="600" class="pulse">'
             + 'Migrate</text>';
    }

    // Step 6: Fixup indicators on DRAM blocks
    if (step === 6) {
        // small fixup icons
        var fxIcons = [dramPeiY, dramStackY, dramHobY];
        fxIcons.forEach(function (iy) {
            if (iy === undefined) return;
            svg += '<circle cx="' + (dx + colW - 16) + '" cy="' + (iy + 10) + '" r="8" fill="' + C.arrow + '" opacity="0.8"/>';
            svg += '<text x="' + (dx + colW - 16) + '" y="' + (iy + 14) + '" text-anchor="middle" '
                 + 'fill="#fff" font-family="Space Grotesk,sans-serif" font-size="10" font-weight="700">F</text>';
        });
    }

    // Step 7: Execution arrow pointing into DRAM PEI Core
    if (step === 7) {
        svg += '<rect x="' + (dx - 12) + '" y="' + (dramPeiY + 16) + '" width="8" height="18" rx="2" fill="' + C.exec + '"/>';
        svg += '<text x="' + (dx + colW / 2) + '" y="' + (startY + colH + 28) + '" text-anchor="middle" '
             + 'fill="' + C.done + '" font-family="Space Grotesk,sans-serif" font-size="12" font-weight="600">'
             + 'Re-entry: executing from DRAM</text>';
        // CAR tear down indicator
        svg += '<line x1="' + cx + '" y1="' + startY + '" x2="' + (cx + colW) + '" y2="' + (startY + colH) + '" stroke="' + C.dimmed + '" stroke-width="1" stroke-dasharray="6,4"/>';
        svg += '<line x1="' + (cx + colW) + '" y1="' + startY + '" x2="' + cx + '" y2="' + (startY + colH) + '" stroke="' + C.dimmed + '" stroke-width="1" stroke-dasharray="6,4"/>';
        svg += '<text x="' + (cx + colW / 2) + '" y="' + (startY + colH / 2 + 4) + '" text-anchor="middle" '
             + 'fill="' + C.dimText + '" font-family="Space Grotesk,sans-serif" font-size="11">CAR Tear Down</text>';
    }

    // Step 8: DXE handoff arrow
    if (step === 8) {
        svg += '<text x="' + (dx + colW / 2) + '" y="' + (startY + colH + 28) + '" text-anchor="middle" '
             + 'fill="' + C.dxe + '" font-family="Space Grotesk,sans-serif" font-size="12" font-weight="600">'
             + 'HOB List → DXE Core</text>';
        // Execution cursor on DRAM
        svg += '<rect x="' + (dx - 12) + '" y="' + (dramPeiY + 16) + '" width="8" height="18" rx="2" fill="' + C.done + '"/>';
    }

    // ==== Execution cursor (small triangle) ====
    var execY = -1, execX = -1;
    if (step === 0)                     { execX = fx - 8; execY = startY + 50; }
    if (step >= 1 && step <= 3)         { execX = fx - 8; execY = flashPeiY + 20; }
    if (step === 3)                     { execX = fx - 8; execY = flashPeimsY + 20; }

    if (execX > 0 && execY > 0 && step < 7) {
        svg += '<polygon points="'
             + (execX - 6) + ',' + (execY - 5) + ' '
             + (execX + 2) + ',' + execY + ' '
             + (execX - 6) + ',' + (execY + 5)
             + '" fill="' + C.exec + '" class="pulse"/>';
    }

    // ==== Step progress bar at bottom ====
    var barY = H - 20;
    var barW = W - 80;
    var barX = 40;
    svg += '<rect x="' + barX + '" y="' + barY + '" width="' + barW + '" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>';
    var fillW = barW * ((step + 1) / TOTAL_STEPS);
    svg += '<rect x="' + barX + '" y="' + barY + '" width="' + fillW + '" height="4" rx="2" fill="' + C.primary + '"/>';

    // step dots
    for (var i = 0; i < TOTAL_STEPS; i++) {
        var dotX = barX + barW * ((i + 0.5) / TOTAL_STEPS);
        var dotColor = i <= step ? C.primary : 'rgba(255,255,255,0.15)';
        var dotR = i === step ? 5 : 3;
        svg += '<circle cx="' + dotX + '" cy="' + (barY + 2) + '" r="' + dotR + '" fill="' + dotColor + '"/>';
    }

    svg += '</svg>';
    el.innerHTML = svg;

    // ==== update text description ====
    var s = step + 1;
    document.getElementById('flow-indicator').textContent =
        t('flow.step.label') + ' ' + s + ' ' + t('flow.step.of') + ' ' + TOTAL_STEPS;
    document.getElementById('flow-step-title').textContent = t('flow.step' + s + '.title');
    document.getElementById('flow-step-desc').textContent  = t('flow.step' + s + '.desc');
    document.getElementById('flow-step-detail').textContent = t('flow.step' + s + '.detail');

    // button states
    document.getElementById('flow-prev').disabled = step <= 0;
    document.getElementById('flow-next').disabled = step >= TOTAL_STEPS - 1;
}

/* ====================== fixup diagram ============================= */

function renderFixupDiagram() {
    var el = document.getElementById('fixup-diagram');
    if (!el) return;

    var W = 960, H = 340;
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '">';

    svg += '<defs>';
    svg += '<marker id="arrowFix" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">'
         + '<polygon points="0 0, 8 3, 0 6" fill="' + C.dram + '"/></marker>';
    svg += '</defs>';

    var leftX = 60, rightX = 540, boxW = 340, boxH = 260;
    var topY = 40;

    // ---- BEFORE (old pointers) ----
    svg += '<text x="' + (leftX + boxW / 2) + '" y="' + (topY - 10) + '" text-anchor="middle" '
         + 'fill="' + C.flash + '" font-family="Space Grotesk,sans-serif" font-size="14" font-weight="700">'
         + 'Before Fixup</text>';
    svg += '<rect x="' + leftX + '" y="' + topY + '" width="' + boxW + '" height="' + boxH + '" rx="12" '
         + 'fill="rgba(232,168,56,0.04)" stroke="' + C.flashDim + '" stroke-width="1"/>';

    // HOB linked list (old)
    var hobItems = ['HOB-1', 'HOB-2', 'HOB-3', 'End'];
    var hobY = topY + 30;
    svg += '<text x="' + (leftX + 20) + '" y="' + (hobY) + '" fill="' + C.muted + '" font-family="Space Grotesk,sans-serif" font-size="11" font-weight="600">HOB List (CAR addresses)</text>';
    hobY += 16;
    for (var i = 0; i < hobItems.length; i++) {
        var hx = leftX + 20 + i * 80;
        svg += '<rect x="' + hx + '" y="' + hobY + '" width="68" height="36" rx="5" '
             + 'fill="rgba(0,0,0,0.3)" stroke="' + C.car + '" stroke-width="1"/>';
        svg += '<text x="' + (hx + 34) + '" y="' + (hobY + 15) + '" text-anchor="middle" '
             + 'fill="' + C.car + '" font-family="Space Grotesk,sans-serif" font-size="10" font-weight="500">'
             + hobItems[i] + '</text>';
        svg += '<text x="' + (hx + 34) + '" y="' + (hobY + 29) + '" text-anchor="middle" '
             + 'fill="' + C.dimText + '" font-family="JetBrains Mono,monospace" font-size="8">'
             + '0xFEF' + (i * 2) + '0000</text>';
        if (i < hobItems.length - 1) {
            svg += '<line x1="' + (hx + 68) + '" y1="' + (hobY + 18) + '" x2="' + (hx + 80) + '" y2="' + (hobY + 18) + '" '
                 + 'stroke="' + C.car + '" stroke-width="1" marker-end="url(#arrowFix)"/>';
        }
    }

    // PPI pointers (old)
    var ppiY = hobY + 60;
    svg += '<text x="' + (leftX + 20) + '" y="' + ppiY + '" fill="' + C.muted + '" font-family="Space Grotesk,sans-serif" font-size="11" font-weight="600">PPI Database (mixed addresses)</text>';
    ppiY += 16;
    var ppiItems = [
        { name: 'PPI-A', addr: '0xFF80xxxx', note: 'Flash', color: C.flash },
        { name: 'PPI-B', addr: '0xFEF0xxxx', note: 'CAR',   color: C.car },
        { name: 'PPI-C', addr: '0xFEF1xxxx', note: 'CAR',   color: C.car },
    ];
    ppiItems.forEach(function (pp, idx) {
        var px = leftX + 20 + idx * 108;
        svg += '<rect x="' + px + '" y="' + ppiY + '" width="96" height="44" rx="5" '
             + 'fill="rgba(0,0,0,0.3)" stroke="' + pp.color + '" stroke-width="1"/>';
        svg += '<text x="' + (px + 48) + '" y="' + (ppiY + 16) + '" text-anchor="middle" '
             + 'fill="' + pp.color + '" font-family="Space Grotesk,sans-serif" font-size="10" font-weight="500">'
             + pp.name + ' (' + pp.note + ')</text>';
        svg += '<text x="' + (px + 48) + '" y="' + (ppiY + 34) + '" text-anchor="middle" '
             + 'fill="' + C.dimText + '" font-family="JetBrains Mono,monospace" font-size="8">'
             + pp.addr + '</text>';
    });

    // Stack frame (old)
    var stackY = ppiY + 64;
    svg += '<text x="' + (leftX + 20) + '" y="' + stackY + '" fill="' + C.muted + '" font-family="Space Grotesk,sans-serif" font-size="11" font-weight="600">Stack (return addresses)</text>';
    stackY += 16;
    svg += '<rect x="' + (leftX + 20) + '" y="' + stackY + '" width="' + (boxW - 40) + '" height="30" rx="5" '
         + 'fill="rgba(0,0,0,0.3)" stroke="' + C.car + '" stroke-width="1"/>';
    svg += '<text x="' + (leftX + boxW / 2) + '" y="' + (stackY + 19) + '" text-anchor="middle" '
         + 'fill="' + C.dimText + '" font-family="JetBrains Mono,monospace" font-size="9">'
         + 'RBP: 0xFEF00100  RetAddr: 0xFF800400</text>';

    // ---- transformation arrow ----
    var arrowCX = leftX + boxW + (rightX - leftX - boxW) / 2;
    svg += '<line x1="' + (leftX + boxW + 8) + '" y1="' + (topY + boxH / 2) + '" x2="' + (rightX - 8) + '" y2="' + (topY + boxH / 2) + '" '
         + 'stroke="' + C.arrow + '" stroke-width="2.5" marker-end="url(#arrowFix)" stroke-dasharray="6,4"/>';
    svg += '<text x="' + arrowCX + '" y="' + (topY + boxH / 2 - 12) + '" text-anchor="middle" '
         + 'fill="' + C.arrow + '" font-family="Space Grotesk,sans-serif" font-size="11" font-weight="600">+ Delta</text>';

    // ---- AFTER (new pointers) ----
    svg += '<text x="' + (rightX + boxW / 2) + '" y="' + (topY - 10) + '" text-anchor="middle" '
         + 'fill="' + C.dram + '" font-family="Space Grotesk,sans-serif" font-size="14" font-weight="700">'
         + 'After Fixup</text>';
    svg += '<rect x="' + rightX + '" y="' + topY + '" width="' + boxW + '" height="' + boxH + '" rx="12" '
         + 'fill="rgba(88,166,255,0.04)" stroke="' + C.dramDim + '" stroke-width="1"/>';

    // HOB linked list (new)
    var hobY2 = topY + 30;
    svg += '<text x="' + (rightX + 20) + '" y="' + hobY2 + '" fill="' + C.muted + '" font-family="Space Grotesk,sans-serif" font-size="11" font-weight="600">HOB List (DRAM addresses)</text>';
    hobY2 += 16;
    for (var i = 0; i < hobItems.length; i++) {
        var hx2 = rightX + 20 + i * 80;
        svg += '<rect x="' + hx2 + '" y="' + hobY2 + '" width="68" height="36" rx="5" '
             + 'fill="rgba(0,0,0,0.3)" stroke="' + C.dram + '" stroke-width="1"/>';
        svg += '<text x="' + (hx2 + 34) + '" y="' + (hobY2 + 15) + '" text-anchor="middle" '
             + 'fill="' + C.dram + '" font-family="Space Grotesk,sans-serif" font-size="10" font-weight="500">'
             + hobItems[i] + '</text>';
        svg += '<text x="' + (hx2 + 34) + '" y="' + (hobY2 + 29) + '" text-anchor="middle" '
             + 'fill="' + C.done + '" font-family="JetBrains Mono,monospace" font-size="8">'
             + '0x7FF' + (i * 2) + '0000</text>';
        if (i < hobItems.length - 1) {
            svg += '<line x1="' + (hx2 + 68) + '" y1="' + (hobY2 + 18) + '" x2="' + (hx2 + 80) + '" y2="' + (hobY2 + 18) + '" '
                 + 'stroke="' + C.dram + '" stroke-width="1" marker-end="url(#arrowFix)"/>';
        }
    }

    // PPI pointers (new)
    var ppiY2 = hobY2 + 60;
    svg += '<text x="' + (rightX + 20) + '" y="' + ppiY2 + '" fill="' + C.muted + '" font-family="Space Grotesk,sans-serif" font-size="11" font-weight="600">PPI Database (updated addresses)</text>';
    ppiY2 += 16;
    var ppiNew = [
        { name: 'PPI-A', addr: '0xFF80xxxx', note: 'Flash (kept)', color: C.flash },
        { name: 'PPI-B', addr: '0x7FF0xxxx', note: 'DRAM (fixed)', color: C.dram },
        { name: 'PPI-C', addr: '0x7FF1xxxx', note: 'DRAM (fixed)', color: C.dram },
    ];
    ppiNew.forEach(function (pp, idx) {
        var px = rightX + 20 + idx * 108;
        svg += '<rect x="' + px + '" y="' + ppiY2 + '" width="96" height="44" rx="5" '
             + 'fill="rgba(0,0,0,0.3)" stroke="' + pp.color + '" stroke-width="1"/>';
        svg += '<text x="' + (px + 48) + '" y="' + (ppiY2 + 16) + '" text-anchor="middle" '
             + 'fill="' + pp.color + '" font-family="Space Grotesk,sans-serif" font-size="10" font-weight="500">'
             + pp.name + ' (' + pp.note + ')</text>';
        svg += '<text x="' + (px + 48) + '" y="' + (ppiY2 + 34) + '" text-anchor="middle" '
             + 'fill="' + (pp.color === C.dram ? C.done : C.dimText) + '" font-family="JetBrains Mono,monospace" font-size="8">'
             + pp.addr + '</text>';
    });

    // Stack frame (new)
    var stackY2 = ppiY2 + 64;
    svg += '<text x="' + (rightX + 20) + '" y="' + stackY2 + '" fill="' + C.muted + '" font-family="Space Grotesk,sans-serif" font-size="11" font-weight="600">Stack (adjusted addresses)</text>';
    stackY2 += 16;
    svg += '<rect x="' + (rightX + 20) + '" y="' + stackY2 + '" width="' + (boxW - 40) + '" height="30" rx="5" '
         + 'fill="rgba(0,0,0,0.3)" stroke="' + C.dram + '" stroke-width="1"/>';
    svg += '<text x="' + (rightX + boxW / 2) + '" y="' + (stackY2 + 19) + '" text-anchor="middle" '
         + 'fill="' + C.done + '" font-family="JetBrains Mono,monospace" font-size="9">'
         + 'RBP: 0x7FF00100  RetAddr: 0x7F800400</text>';

    svg += '</svg>';
    el.innerHTML = svg;
}

/* ====================== navigation / step controls ================ */

function changeFlowStep(delta) {
    var next = currentFlowStep + delta;
    if (next < 0 || next >= TOTAL_STEPS) return;
    renderFlowStep(next);
}

/* ====================== section observer ========================== */

function initSectionObserver() {
    var sections = document.querySelectorAll('.section[id]');
    var navLinks = document.querySelectorAll('.nav-link');

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                navLinks.forEach(function (link) {
                    link.classList.toggle('active',
                        link.getAttribute('href') === '#' + entry.target.id);
                });
            }
        });
    }, { rootMargin: '-30% 0px -60% 0px' });

    sections.forEach(function (s) { observer.observe(s); });

    // smooth scroll on nav click
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(link.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

/* ====================== initialization =========================== */

document.addEventListener('DOMContentLoaded', function () {
    // i18n
    initI18n();

    // render diagrams
    renderArchDiagram();
    renderFlowStep(0);
    renderFixupDiagram();

    // section observer
    initSectionObserver();

    // step controls
    document.getElementById('flow-prev').addEventListener('click', function () { changeFlowStep(-1); });
    document.getElementById('flow-next').addEventListener('click', function () { changeFlowStep(1);  });
    document.getElementById('flow-reset').addEventListener('click', function () { renderFlowStep(0); });

    // keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); changeFlowStep(1); }
        if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   { e.preventDefault(); changeFlowStep(-1); }
    });
});
