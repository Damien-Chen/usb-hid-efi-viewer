/* i18n (Chinese only) - baked in, EN version removed */
const translations = { 'zh-TW': {
    "page.title": "SMM/MM 通訊機制視覺化",
    "nav.back": "← 返回工具列表",
    "nav.overview": "概述",
    "nav.architecture": "記憶體架構",
    "nav.trigger": "SMI 觸發",
    "nav.flow": "通訊流程",
    "nav.buffer": "通訊緩衝區",
    "nav.handler": "處理器註冊",
    "nav.standalone": "Standalone MM",
    "nav.code": "程式碼解析",
    "nav.references": "參考資源",
    "overview.title": "SMM/MM 通訊機制概述",
    "overview.subtitle": "理解 DXE 如何觸發並與 SMM (System Management Mode) 溝通",
    "overview.what.title": "什麼是 SMM？",
    "overview.what.desc": "SMM（System Management Mode）是 x86 處理器中最高特權的執行模式。它運行在獨立的記憶體空間（SMRAM）中，對作業系統完全透明。UEFI 韌體使用 SMM 來處理需要高安全性的操作，例如韌體更新、電源管理和安全策略執行。SMM 透過 SMI（System Management Interrupt）觸發進入。",
    "overview.why.title": "為什麼需要 SMM 通訊？",
    "overview.why.desc": "DXE 驅動程式和作業系統無法直接存取 SMRAM，因此需要一個安全的通訊機制。EFI_SMM_COMMUNICATION_PROTOCOL 提供了標準化的方式，讓 DXE 環境可以向 SMM 中的處理器發送請求並接收回應，同時維持 SMM 的安全隔離性。",
    "overview.standalone.title": "什麼是 Standalone MM？",
    "overview.standalone.desc": "Standalone MM 是傳統 SMM 的進化版本。它不依賴 DXE 環境進行初始化，使用獨立的入口點（MM_STANDALONE），提供更好的安全隔離性。它同時支援 x86（SMM）和 ARM（TrustZone/OP-TEE）架構，使用統一的 EFI_MM_COMMUNICATION_PROTOCOL。",
    "phase.dxe": "DXE 驅動程式",
    "phase.comm": "準備通訊緩衝區",
    "phase.smi": "觸發 SMI",
    "phase.smm": "SMM 處理",
    "phase.ret": "返回結果",
    "arch.title": "記憶體架構",
    "arch.subtitle": "DXE 與 SMM 通訊涉及的記憶體區域",
    "arch.dram.title": "一般 DRAM（DXE 可存取）",
    "arch.dram.desc": "DXE 驅動程式和作業系統可以自由存取的系統記憶體。通訊緩衝區位於此區域，因為 DXE 和 SMM 都需要能讀寫它。包含 DXE 驅動程式、UEFI 服務表和一般資料。",
    "arch.smram.title": "SMRAM（SMM 專用）",
    "arch.smram.desc": "System Management RAM，僅在 SMM 模式下可存取。包含 SMM Core、已註冊的 SMI Handler 和 SMM 驅動程式。在 SmmReadyToLock 事件後被硬體鎖定，防止任何非 SMM 程式碼存取。通常位於 TSEG 區域。",
    "arch.comm.title": "通訊緩衝區",
    "arch.comm.desc": "位於 SMRAM 之外的共享記憶體區域。DXE 驅動程式寫入請求資料，觸發 SMI 後 SMM Handler 讀取請求並寫回回應。SMM 會驗證此緩衝區的位址範圍，確保它不會指向 SMRAM 內部（防止安全漏洞）。",
    "arch.label.dram": "一般 DRAM",
    "arch.label.dxe": "DXE 驅動程式",
    "arch.label.uefi_svc": "UEFI 服務",
    "arch.label.comm_buf": "通訊緩衝區",
    "arch.label.os_region": "OS 記憶體",
    "arch.label.smram": "SMRAM (TSEG)",
    "arch.label.smm_core": "SMM Core",
    "arch.label.smi_handler": "SMI Handlers",
    "arch.label.smm_driver": "SMM 驅動程式",
    "arch.label.save_state": "CPU Save State",
    "trigger.title": "MM 觸發機制 (SMI & MMI)",
    "trigger.subtitle": "理解平台如何觸發並進入 Management Mode (x86 SMM 或 ARM StMM)",
    "trigger.x86.title": "x86 架構：SMI 觸發",
    "trigger.swsmi.title": "軟體 SMI（SW SMI）",
    "trigger.swsmi.desc": "透過向 I/O 埠 0xB2 寫入一個位元組值來觸發。這是 DXE 與 SMM 通訊最常用的方式。EFI_SMM_COMMUNICATION_PROTOCOL 的 Communicate() 函式內部就是透過寫入 0xB2 來觸發 SMI。",
    "trigger.hwsmi.title": "硬體 SMI",
    "trigger.hwsmi.desc": "由硬體事件觸發，例如 GPIO 變化、電源按鈕按下或 ACPI Timer 溢位。這些 SMI 由晶片組產生，CPU 自動回應並強制進入 SMM。",
    "trigger.entry.title": "SMM 進入流程",
    "trigger.entry.desc": "當 SMI 觸發時：① 所有 CPU 核心收到 SMI 信號 ② 暫存器狀態存入 SMRAM 的 Save State Area ③ 跳轉至 SMBASE + 0x8000 ④ BSP 執行 SMM Core，AP 進入等待 ⑤ 執行 RSM 返回。",
    "trigger.arm.title": "ARM 架構：MMI (Management Mode Interrupt) 與 StMM",
    "trigger.smc.title": "同步 MMI (SMC 呼叫)",
    "trigger.smc.desc": "ARM 平台透過執行 SMC (Secure Monitor Call) 指令主動觸發。這對應於 x86 的 SW SMI，用於正常執行流中的 DXE-to-MM 通訊請求，請求會先進入 EL3，再由 Trusted Firmware 轉發給 S-EL0 的 StMM。",
    "trigger.asyncmmi.title": "非同步 MMI (硬體中斷)",
    "trigger.asyncmmi.desc": "由硬體事件產生的安全中斷 (FIQ/IRQ)，由中斷控制器 (GIC) 發送給 CPU。GIC 將此中斷標記為 Secure Group，導致 CPU 陷入 EL3 並路由給 SPM (Secure Partition Manager) 處理。",
    "trigger.stmm_entry.title": "StMM 進入流程 (EL3 -> S-EL0)",
    "trigger.stmm_entry.desc": "① 觸發 SMC 或硬體安全中斷 ② CPU 陷入最高安全層級 EL3 (TF-A) ③ TF-A 的 SPM 將上下文切換到 Secure World ④ 降級進入 S-EL0 執行 Standalone MM Core ⑤ 處理完成後經 SMC 返回 EL3 再回到 Non-Secure EL1/EL2。",
    "trigger.port.label": "Trigger (0xB2 / SMC)",
    "trigger.port.desc": "寫入/呼叫 觸發 MM",
    "trigger.cpu.label": "CPU 回應 (SMI/EL3)",
    "trigger.cpu.desc": "核心暫停，陷入安全模式",
    "trigger.smbase.label": "MM Core 入口",
    "trigger.smbase.desc": "進入 SMBASE/S-EL0",
    "flow.title": "通訊流程",
    "flow.subtitle": "逐步了解 DXE 與 MM 的完整通訊過程",
    "flow.step.label": "步驟",
    "flow.step.of": "/",
    "flow.step1.title": "步驟 1：定位通訊協定",
    "flow.step1.desc": "DXE 驅動程式透過 gBS->LocateProtocol() 找到 EFI_SMM_COMMUNICATION_PROTOCOL 或 EFI_MM_COMMUNICATION_PROTOCOL 的實例。此協定由 MM IPL 驅動程式在啟動時安裝。",
    "flow.step1.detail": "MM IPL (Initial Program Loader) 是 DXE 驅動程式，負責載入 MM Core 到安全記憶體並安裝通訊協定。",
    "flow.step2.title": "步驟 2：填寫通訊標頭",
    "flow.step2.desc": "DXE 驅動程式填寫 EFI_MM_COMMUNICATE_HEADER 結構：HeaderGuid 設為目標 MM Handler 的 GUID，MessageLength 設為 Data 的大小，Data[] 填入請求的負載資料。",
    "flow.step2.detail": "HeaderGuid 是 MM Core 用來分派（dispatch）請求到正確 Handler 的關鍵。每個 MM Handler 在註冊時都會指定自己的 GUID。",
    "flow.step3.title": "步驟 3：呼叫 Communicate()",
    "flow.step3.desc": "DXE 驅動程式呼叫通訊協定的 Communicate() 函式，傳入緩衝區指標和大小。此函式會驗證參數並準備觸發進入安全模式。",
    "flow.step3.detail": "實作通常位於特定架構的 MM IPL 驅動程式中（例如 x86 的 PiSmmIpl 或 ARM 的 StandaloneMmIpl）。",
    "flow.step4.title": "步驟 4：觸發 MM (SMI / SMC)",
    "flow.step4.desc": "Communicate() 內部將通訊緩衝區的位址寫入特定的固定位置。然後觸發硬體特定的中斷/呼叫：x86 上寫入 I/O 埠 0xB2 (SW SMI)；ARM 上發出 SMC 呼叫。",
    "flow.step4.detail": "這會導致處理器陷入最高特權模式 (x86 SMM 或 ARM EL3) 並開始切換到安全環境。",
    "flow.step5.title": "步驟 5：CPU 進入 MM Core",
    "flow.step5.desc": "CPU 暫停目前執行，儲存暫存器狀態，並陷入安全模式。Secure Monitor (SMM Foundation 或 ARM TF-A/SPM) 接著將執行流路由至 MM Core 入口點。",
    "flow.step5.detail": "在 x86 上，所有核心在 SMRAM 的 SMBASE 會合；在 ARM 上，EL3 將請求轉發至位於 S-EL0 的 Standalone MM Core。",
    "flow.step6.title": "步驟 6：MM Core 分派",
    "flow.step6.desc": "MM Core 讀取通訊緩衝區中的 HeaderGuid，在已註冊的 Handler 列表中搜尋匹配項，然後呼叫 MmiManage() 或 SmiManage() 進行分派。",
    "flow.step6.detail": "Manage 函式會遍歷所有為該 GUID 註冊的 Handler，依序呼叫它們，直到某個 Handler 回傳 EFI_SUCCESS。",
    "flow.step7.title": "步驟 7：Handler 處理請求",
    "flow.step7.desc": "目標 Handler 從通訊緩衝區讀取請求資料（Data[] 區域），執行所需的安全操作（如安全變數讀寫），然後將結果寫回同一個通訊緩衝區。",
    "flow.step7.detail": "Handler 必須驗證通訊緩衝區位址嚴格位於安全記憶體範圍之外，防止 TOC/TOU 攻擊或緩衝區重疊漏洞。",
    "flow.step8.title": "步驟 8：返回 Normal World",
    "flow.step8.desc": "處理完成後，MM Core 將執行流返回 Normal World (x86 透過 RSM，ARM 透過 SMC 返回 EL1/EL2)。DXE 驅動程式接著從通訊緩衝區讀取回應資料。",
    "flow.step8.detail": "CPU 上下文會被無縫恢復，精確返回到 DXE 驅動程式呼叫 Communicate() 的下一條指令。",
    "buffer.title": "通訊緩衝區內部結構",
    "buffer.subtitle": "理解 EFI_MM_COMMUNICATE_HEADER 的結構和用途",
    "buffer.desc": "通訊緩衝區使用 EFI_MM_COMMUNICATE_HEADER (傳統為 EFI_SMM_COMMUNICATE_HEADER) 結構，這是 DXE 和 MM 之間交換資料的標準格式。HeaderGuid 用於路由請求到正確的 Handler，MessageLength 指定 Data 區域的大小，Data 包含實際的請求和回應負載。",
    "buffer.struct": "EFI_MM_COMMUNICATE_HEADER { HeaderGuid, MessageLength, Data[] }",
    "buffer.guid.title": "HeaderGuid（EFI_GUID，16 位元組）",
    "buffer.guid.desc": "唯一識別目標 SMI Handler。SMM Core 用此 GUID 在已註冊的 Handler 列表中搜尋匹配的處理器。每個 SMM 驅動程式在呼叫 SmiHandlerRegister() 時指定自己的 GUID。",
    "buffer.len.title": "MessageLength（UINTN，4/8 位元組）",
    "buffer.len.desc": "指定 Data[] 區域的大小（位元組數）。SMM Core 使用此值來確定整個緩衝區的總大小：sizeof(EFI_GUID) + sizeof(UINTN) + MessageLength。Handler 也用此值驗證資料完整性。",
    "buffer.data.title": "Data[]（可變長度）",
    "buffer.data.desc": "實際的請求/回應負載。格式由具體的 SMI Handler 定義。DXE 寫入請求時填入，Handler 處理後將回應寫回同一位置。緩衝區必須位於 SMRAM 之外，且 SMM 會驗證位址範圍的合法性。",
    "buffer.validation.title": "緩衝區驗證",
    "buffer.validation.desc": "SMM Core 在處理通訊緩衝區前會進行嚴格驗證：① 檢查緩衝區位址是否在 SMRAM 範圍之外 ② 確認 MessageLength 不會造成整數溢位 ③ 驗證整個緩衝區（Header + Data）都不與 SMRAM 重疊。這是為了防止攻擊者利用精心構造的緩衝區來讀寫 SMRAM 內容。",
    "handler.title": "MM 處理器註冊機制 (SMI & MMI)",
    "handler.subtitle": "理解 SMM/MM 驅動程式如何註冊 Handler 來處理通訊請求",
    "handler.guid.title": "GUID-Based Handler（通訊協定用）",
    "handler.guid.desc": "使用 SmiHandlerRegister() 或 MmiHandlerRegister() 註冊，綁定特定的 GUID。這是 DXE-MM 通訊的標準跨平台(x86/ARM)方式。當 DXE 發送帶有匹配 GUID 的請求時，MM Core 會分派到此 Handler。",
    "handler.sw.title": "硬體/軟體特定 Handler",
    "handler.sw.desc": "在 x86 上通常使用 EFI_SMM_SW_DISPATCH2_PROTOCOL 註冊，綁定特定的 SW SMI 號碼；在 ARM 上可能綁定特定硬體中斷。通常用於 ACPI/ASL 程式碼或硬體事件觸發。",
    "handler.root.title": "Root MM Handler",
    "handler.root.desc": "使用 SmiHandlerRegister/MmiHandlerRegister 但 GUID 設為 NULL 來註冊。每次 SMI/MMI 觸發時都會被呼叫，不論來源。用於需要處理所有事件的情況，如效能監控或全域除錯。",
    "handler.lifecycle.title": "MM 驅動程式生命週期與分派 (SmiManage / MmiManage)",
    "handler.lifecycle.desc": "驅動程式在啟動階段載入安全記憶體後，透過入口點使用 gSmst 或 gMmst 註冊 Handler。當 MM 事件觸發時，MM Core 透過 SmiManage() 或 MmiManage() 遍歷註冊清單，找到對應的 Handler 並分派執行。",
    "standalone.title": "Standalone MM 與傳統 MM 比較",
    "standalone.subtitle": "理解兩種 MM 架構的差異和各自的優勢",
    "standalone.traditional.title": "傳統 MM（Traditional MM）",
    "standalone.traditional.items": [
        "SMM IPL（DXE 驅動程式）負責載入 SMM Core 到 SMRAM",
        "SMM 驅動程式在初始化階段可存取 DXE 服務（gBS、gDS）",
        "使用 EFI_SMM_COMMUNICATION_PROTOCOL",
        "SMM Core 依賴 DXE 環境完成設定",
        "僅支援 x86 架構（需要 SMM 硬體支援）",
        "較大的攻擊面（DXE 環境可能被汙染）"
    ],
    "standalone.standalone.title": "Standalone MM",
    "standalone.standalone.items": [
        "MM Foundation 由平台韌體直接載入，不依賴 DXE",
        "MM 驅動程式使用 MM_STANDALONE 入口點，無法存取 DXE 服務",
        "使用 EFI_MM_COMMUNICATION_PROTOCOL（結構相同，更通用的命名）",
        "MM Core 獨立初始化，不需要 DXE 環境",
        "同時支援 x86（SMM）和 ARM（TrustZone/OP-TEE）",
        "更小的攻擊面，更好的安全隔離"
    ],
    "code.title": "關鍵程式碼解析",
    "code.subtitle": "EDK2 中 SMM/MM 通訊的核心實作",
    "code.communicate.title": "Communicate() / MmCommunicate()",
    "code.communicate.desc": "DXE 端的通訊入口函式，由 MM IPL 實作。驗證參數後觸發軟體陷阱（如 SW SMI 或 SMC）。",
    "code.entrypoint.title": "MmEntryPoint() / SmmEntryPoint()",
    "code.entrypoint.desc": "MM 的進入點，CPU 從陷阱進入安全模式後執行的第一個高階函式。",
    "code.smimanage.title": "MmiManage() / SmiManage()",
    "code.smimanage.desc": "MM Core 的核心分派函式，根據 GUID 找到並呼叫對應的 Handler。",
    "code.register.title": "MmiHandlerRegister() 範例",
    "code.register.desc": "MM 驅動程式如何註冊一個 GUID-based Handler。",
    "ref.title": "參考資源",
    "ref.subtitle": "深入了解 SMM 通訊的學習資源",
    "ref.spec": "PI Specification",
    "ref.spec.desc": "UEFI PI 規格書 Volume 4：System Management Mode Core Interface",
    "ref.edk2": "EDK2 SMM Core 原始碼",
    "ref.edk2.desc": "MdeModulePkg/Core/PiSmmCore — SMM Core 分派器實作",
    "ref.ipl": "PiSmmIpl 原始碼",
    "ref.ipl.desc": "MdeModulePkg/Core/PiSmmIpl — SMM 通訊協定實作",
    "ref.standalone": "Standalone MM Core",
    "ref.standalone.desc": "StandaloneMmPkg — Standalone MM Core 和基礎建設"
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
/*  SMM/MM Communication Visualizer – Main Script                      */
/*  Interactive SVG diagrams + step-by-step flow                       */
/* ------------------------------------------------------------------ */

/* ====================== colour constants ========================== */
var C = {
    primary:   '#ef4444',
    accent:    '#22d3ee',
    dxe:       '#34d399',
    dxeDim:    'rgba(52,211,153,0.25)',
    dxeFill:   'rgba(52,211,153,0.08)',
    smm:       '#ef4444',
    smmDim:    'rgba(239,68,68,0.25)',
    smmFill:   'rgba(239,68,68,0.08)',
    smram:     '#f472b6',
    smramDim:  'rgba(244,114,182,0.25)',
    smramFill: 'rgba(244,114,182,0.08)',
    comm:      '#fbbf24',
    commDim:   'rgba(251,191,36,0.25)',
    commFill:  'rgba(251,191,36,0.08)',
    cpu:       '#a78bfa',
    cpuDim:    'rgba(167,139,250,0.25)',
    cpuFill:   'rgba(167,139,250,0.08)',
    mm:        '#22d3ee',
    mmDim:     'rgba(34,211,238,0.25)',
    mmFill:    'rgba(34,211,238,0.08)',
    dimmed:    '#2a3040',
    dimText:   '#4a5568',
    text:      '#e6edf3',
    muted:     '#8b9bb0',
    bg:        '#0c1118',
    arrow:     '#ef4444',
    done:      '#34d399',
};

/* ====================== SVG helpers =============================== */
function svgRect(x, y, w, h, fill, stroke, rx) {
    return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+(rx||8)+'" fill="'+fill+'" stroke="'+stroke+'" stroke-width="1.5"/>';
}
function svgText(x, y, text, color, size, anchor, weight) {
    return '<text x="'+x+'" y="'+y+'" text-anchor="'+(anchor||'middle')+'" fill="'+(color||C.text)+'" font-family="Space Grotesk,sans-serif" font-size="'+(size||13)+'" font-weight="'+(weight||500)+'">'+text+'</text>';
}
function svgArrow(x1, y1, x2, y2, color, dashed) {
    var mid = 'M'+x1+','+y1+' L'+x2+','+y2;
    var dash = dashed ? ' stroke-dasharray="6,4"' : '';
    var id = 'arrow_' + Math.random().toString(36).substr(2,5);
    return '<defs><marker id="'+id+'" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="'+(color||C.arrow)+'"/></marker></defs>'
         + '<path d="'+mid+'" stroke="'+(color||C.arrow)+'" stroke-width="2" fill="none" marker-end="url(#'+id+')"'+dash+'/>';
}
function svgCurveArrow(x1, y1, cx1, cy1, cx2, cy2, x2, y2, color, dashed) {
    var d = 'M'+x1+','+y1+' C'+cx1+','+cy1+' '+cx2+','+cy2+' '+x2+','+y2;
    var dash = dashed ? ' stroke-dasharray="6,4"' : '';
    var id = 'carrow_' + Math.random().toString(36).substr(2,5);
    return '<defs><marker id="'+id+'" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="'+(color||C.arrow)+'"/></marker></defs>'
         + '<path d="'+d+'" stroke="'+(color||C.arrow)+'" stroke-width="2" fill="none" marker-end="url(#'+id+')"'+dash+'/>';
}

/* ====================== architecture diagram ====================== */
function renderArchDiagram() {
    var el = document.getElementById('arch-diagram');
    if (!el) return;

    var W = 960, H = 480;
    var colW = 260, colH = 380, gap = 50;
    var startX = (W - 3 * colW - 2 * gap) / 2;
    var startY = 55;

    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+W+' '+H+'">';

    // defs for glow
    svg += '<defs>';
    svg += '<filter id="glowDxe" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
    svg += '<filter id="glowSmram" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
    svg += '</defs>';

    var cols = [
        {
            x: startX, label: t('arch.label.dram'), color: C.dxe, fill: C.dxeFill, border: C.dxeDim,
            addr: '0x00000000',
            blocks: [
                { h: 55, label: t('arch.label.dxe'),      color: C.dxe },
                { h: 50, label: t('arch.label.uefi_svc'),  color: C.dxe },
                { h: 65, label: t('arch.label.comm_buf'),  color: C.comm, isBuf: true },
                { h: 70, label: t('arch.label.os_region'), color: C.dimmed, textColor: C.dimText },
            ]
        },
        {
            x: startX + colW + gap, label: t('arch.label.smram'), color: C.smram, fill: C.smramFill, border: C.smramDim,
            addr: 'TSEG Base',
            blocks: [
                { h: 60, label: t('arch.label.smm_core'),    color: C.smm },
                { h: 60, label: t('arch.label.smi_handler'),  color: C.smram },
                { h: 55, label: t('arch.label.smm_driver'),   color: C.smram },
                { h: 55, label: t('arch.label.save_state'),   color: C.cpu },
            ]
        },
        {
            x: startX + 2*(colW + gap), label: 'I/O & CPU', color: C.cpu, fill: C.cpuFill, border: C.cpuDim,
            addr: '',
            blocks: [
                { h: 55, label: 'I/O Port 0xB2', color: C.comm },
                { h: 55, label: 'SMI# Signal',   color: C.smm },
                { h: 55, label: 'SMBASE + 0x8000', color: C.cpu },
                { h: 55, label: 'RSM Instruction', color: C.mm },
            ]
        },
    ];

    cols.forEach(function(col) {
        // column background
        svg += svgRect(col.x, startY, colW, colH, col.fill, col.border, 12);
        // column title
        svg += svgText(col.x + colW/2, startY - 14, col.label, col.color, 15, 'middle', 700);
        // address label
        if (col.addr) {
            svg += svgText(col.x + colW/2, startY + colH + 20, col.addr, C.muted, 11, 'middle', 400);
        }

        var by = startY + 16;
        var pad = 12;
        col.blocks.forEach(function(b) {
            var bw = colW - 2*pad;
            var bx = col.x + pad;
            svg += svgRect(bx, by, bw, b.h, b.isBuf ? C.commFill : 'rgba(0,0,0,0.2)', b.color ? (b.color + '40') : 'rgba(255,255,255,0.05)', 6);
            svg += '<rect x="'+bx+'" y="'+by+'" width="4" height="'+b.h+'" rx="2" fill="'+b.color+'"/>';
            svg += svgText(bx + bw/2 + 2, by + b.h/2 + 5, b.label, b.textColor || b.color, 12, 'middle', 500);
            by += b.h + 10;
        });
    });

    // arrows: DXE comm buffer -> I/O port
    var pad = 12;
    var bufY = startY + 16 + 55 + 10 + 50 + 10 + 32;
    var ioX = startX + 2*(colW + gap);
    svg += svgArrow(startX + colW, bufY, ioX, startY + 16 + 27, C.comm, false);

    // arrow: I/O port -> SMRAM SMM Core
    svg += svgArrow(ioX, startY + 16 + 55 + 10 + 27, startX + colW + gap + colW, startY + 16 + 30, C.smm, false);

    // arrow: SMRAM -> comm buffer (response, dashed)
    svg += svgCurveArrow(
        startX + colW + gap, startY + 16 + 60 + 10 + 30,
        startX + colW + gap - 40, startY + colH - 20,
        startX + colW/2, startY + colH + 5,
        startX + colW - pad, bufY + 15,
        C.done, true
    );

    svg += '</svg>';
    el.innerHTML = svg;
}

/* ====================== trigger diagram =========================== */
function renderTriggerDiagram() {
    var el = document.getElementById('trigger-diagram');
    if (!el) return;

    var W = 960, H = 320;
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+W+' '+H+'">';

    // boxes
    var boxes = [
        { x: 40,  y: 100, w: 160, h: 100, label: 'DXE Driver',       sub: 'IoWrite8() / SMC', color: C.dxe, fill: C.dxeFill },
        { x: 260, y: 100, w: 140, h: 100, label: 'I/O 0xB2 / EL3',   sub: t('trigger.port.desc'), color: C.comm, fill: C.commFill },
        { x: 460, y: 100, w: 160, h: 100, label: 'CPU Response',     sub: 'SMI# / EL3 Trap', color: C.smm, fill: C.smmFill },
        { x: 680, y: 40,  w: 240, h: 70,  label: 'MM Entry',         sub: 'SMBASE+0x8000 / S-EL0', color: C.cpu, fill: C.cpuFill },
        { x: 680, y: 130, w: 240, h: 70,  label: 'MM Core',          sub: 'SmiManage() / MmiManage()', color: C.smram, fill: C.smramFill },
        { x: 680, y: 220, w: 240, h: 70,  label: 'Return',           sub: 'RSM / SMC Return', color: C.mm, fill: C.mmFill },
    ];

    boxes.forEach(function(b) {
        svg += svgRect(b.x, b.y, b.w, b.h, b.fill, b.color+'60', 10);
        svg += svgText(b.x + b.w/2, b.y + b.h/2 - 6, b.label, b.color, 13, 'middle', 600);
        svg += svgText(b.x + b.w/2, b.y + b.h/2 + 14, b.sub, C.muted, 10, 'middle', 400);
    });

    // arrows
    svg += svgArrow(200, 150, 260, 150, C.comm);
    svg += svgArrow(400, 150, 460, 150, C.smm);
    svg += svgArrow(620, 150, 680, 75,  C.cpu);
    svg += svgArrow(680 + 120, 110, 680 + 120, 130, C.smram);
    svg += svgArrow(680 + 120, 200, 680 + 120, 220, C.mm);

    // return arrow (dashed)
    svg += svgCurveArrow(680, 260, 400, 290, 200, 290, 120, 200, C.done, true);

    // title labels
    svg += svgText(W/2, 30, t('trigger.title'), C.text, 16, 'middle', 700);

    svg += '</svg>';
    el.innerHTML = svg;
}

/* ====================== buffer diagram ============================ */
function renderBufferDiagram() {
    var el = document.getElementById('buffer-diagram');
    if (!el) return;

    var W = 960, H = 240;
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+W+' '+H+'">';

    var startX = 80, startY = 40;
    var totalW = 800;
    var h = 80;

    // whole buffer outline
    svg += svgRect(startX, startY, totalW, h, 'rgba(0,0,0,0.2)', C.comm+'60', 10);

    // HeaderGuid section
    var guidW = 200;
    svg += svgRect(startX + 4, startY + 4, guidW - 4, h - 8, C.smmFill, C.smm+'60', 8);
    svg += svgText(startX + guidW/2, startY + h/2 - 6, 'HeaderGuid', C.smm, 14, 'middle', 600);
    svg += svgText(startX + guidW/2, startY + h/2 + 14, 'EFI_GUID (16 bytes)', C.muted, 10, 'middle', 400);

    // MessageLength section
    var lenX = startX + guidW;
    var lenW = 160;
    svg += svgRect(lenX + 2, startY + 4, lenW - 4, h - 8, C.cpuFill, C.cpu+'60', 8);
    svg += svgText(lenX + lenW/2, startY + h/2 - 6, 'MessageLength', C.cpu, 14, 'middle', 600);
    svg += svgText(lenX + lenW/2, startY + h/2 + 14, 'UINTN (4/8 bytes)', C.muted, 10, 'middle', 400);

    // Data section
    var dataX = lenX + lenW;
    var dataW = totalW - guidW - lenW;
    svg += svgRect(dataX + 2, startY + 4, dataW - 8, h - 8, C.dxeFill, C.dxe+'60', 8);
    svg += svgText(dataX + dataW/2, startY + h/2 - 6, 'Data[]', C.dxe, 14, 'middle', 600);
    svg += svgText(dataX + dataW/2, startY + h/2 + 14, 'Variable length payload', C.muted, 10, 'middle', 400);

    // offset labels below
    svg += svgText(startX, startY + h + 20, 'Offset 0', C.muted, 11, 'start', 400);
    svg += svgText(lenX, startY + h + 20, '+16', C.muted, 11, 'start', 400);
    svg += svgText(dataX, startY + h + 20, '+16+sizeof(UINTN)', C.muted, 11, 'start', 400);
    svg += svgText(startX + totalW, startY + h + 20, '+16+sizeof(UINTN)+MessageLength', C.muted, 11, 'end', 400);

    // description labels
    svg += svgText(startX + guidW/2, startY + h + 50, t('buffer.guid.title'), C.smm, 11, 'middle', 600);
    svg += svgText(lenX + lenW/2, startY + h + 50, t('buffer.len.title'), C.cpu, 11, 'middle', 600);
    svg += svgText(dataX + dataW/2, startY + h + 50, t('buffer.data.title'), C.dxe, 11, 'middle', 600);

    // title
    svg += svgText(W/2, 26, 'EFI_MM_COMMUNICATE_HEADER', C.comm, 16, 'middle', 700);

    svg += '</svg>';
    el.innerHTML = svg;
}

/* ====================== flow step definitions ===================== */
var TOTAL_STEPS = 8;
var currentFlowStep = 0;

function renderFlowStep(step) {
    var el = document.getElementById('flow-diagram');
    if (!el) return;

    var W = 960, H = 440;
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+W+' '+H+'">';

    // define regions
    var dxeBox  = { x: 30,  y: 50, w: 200, h: 340, label: 'DXE Environment',  color: C.dxe,   fill: C.dxeFill,   border: C.dxeDim };
    var commBox = { x: 280, y: 50, w: 160, h: 340, label: t('arch.label.comm_buf'), color: C.comm,  fill: C.commFill,  border: C.commDim };
    var ioBox   = { x: 490, y: 50, w: 100, h: 120, label: 'Trigger',         color: C.comm,  fill: C.commFill,  border: C.commDim };
    var cpuBox  = { x: 490, y: 200, w: 100, h: 100, label: 'CPU Trap',       color: C.cpu,   fill: C.cpuFill,   border: C.cpuDim };
    var smmBox  = { x: 640, y: 50, w: 280, h: 340, label: 'MM (Secure Mode)',color: C.smm,   fill: C.smmFill,   border: C.smmDim };

    var allBoxes = [dxeBox, commBox, ioBox, cpuBox, smmBox];

    // draw all regions (dimmed by default, highlighted per step)
    allBoxes.forEach(function(b) {
        var opacity = '0.3';
        // highlight logic per step
        if (step === 0 && b === dxeBox) opacity = '1';
        if (step === 1 && (b === dxeBox || b === commBox)) opacity = '1';
        if (step === 2 && (b === dxeBox || b === commBox)) opacity = '1';
        if (step === 3 && (b === dxeBox || b === commBox || b === ioBox)) opacity = '1';
        if (step === 4 && (b === ioBox || b === cpuBox || b === smmBox)) opacity = '1';
        if (step === 5 && (b === smmBox || b === commBox)) opacity = '1';
        if (step === 6 && (b === smmBox || b === commBox)) opacity = '1';
        if (step === 7) opacity = '1';

        svg += '<g opacity="'+opacity+'">';
        svg += svgRect(b.x, b.y, b.w, b.h, b.fill, b.border, 12);
        svg += svgText(b.x + b.w/2, b.y + 24, b.label, b.color, 12, 'middle', 700);
        svg += '</g>';
    });

    // inner blocks for DXE
    var dxeInner = [
        { y: 90,  h: 45, label: 'LocateProtocol()', color: C.dxe },
        { y: 145, h: 45, label: 'Fill Header',       color: C.dxe },
        { y: 200, h: 45, label: 'Communicate()',     color: C.dxe },
        { y: 255, h: 45, label: 'Read Response',     color: C.done },
    ];
    dxeInner.forEach(function(b, i) {
        var active = false;
        if (step === 0 && i === 0) active = true;
        if (step === 1 && i === 1) active = true;
        if (step === 2 && i === 2) active = true;
        if (step === 3 && i === 2) active = true;
        if (step === 7 && i === 3) active = true;

        var op = active ? '1' : '0.25';
        svg += '<g opacity="'+op+'">';
        svg += svgRect(dxeBox.x + 10, b.y, dxeBox.w - 20, b.h, 'rgba(0,0,0,0.3)', b.color+'50', 6);
        svg += svgText(dxeBox.x + dxeBox.w/2, b.y + b.h/2 + 4, b.label, active ? b.color : C.dimText, 11, 'middle', 600);
        svg += '</g>';
    });

    // inner blocks for comm buffer
    var bufInner = [
        { y: 90,  h: 55, label: 'HeaderGuid',    color: C.smm },
        { y: 155, h: 45, label: 'MessageLength',  color: C.cpu },
        { y: 210, h: 80, label: 'Data[]',         color: C.dxe },
    ];
    bufInner.forEach(function(b) {
        var active = step >= 1;
        var op = active ? '1' : '0.2';
        svg += '<g opacity="'+op+'">';
        svg += svgRect(commBox.x + 10, b.y, commBox.w - 20, b.h, 'rgba(0,0,0,0.3)', b.color+'50', 6);
        svg += svgText(commBox.x + commBox.w/2, b.y + b.h/2 + 4, b.label, active ? b.color : C.dimText, 11, 'middle', 500);
        svg += '</g>';
    });

    // inner blocks for SMM
    var smmInner = [
        { y: 90,  h: 40, label: 'MmEntryPoint()',  color: C.smm },
        { y: 140, h: 40, label: 'MmiManage()',     color: C.smram },
        { y: 190, h: 50, label: 'MM Handler',      color: C.smram },
        { y: 250, h: 40, label: 'Return (RSM/SMC)',color: C.mm },
    ];
    smmInner.forEach(function(b, i) {
        var active = false;
        if (step === 4 && i === 0) active = true;
        if (step === 5 && (i === 0 || i === 1)) active = true;
        if (step === 6 && i === 2) active = true;
        if (step === 7 && i === 3) active = true;

        var op = (step >= 4 && step <= 7) ? (active ? '1' : '0.3') : '0.15';
        svg += '<g opacity="'+op+'">';
        svg += svgRect(smmBox.x + 10, b.y, smmBox.w - 20, b.h, 'rgba(0,0,0,0.3)', b.color+'50', 6);
        svg += svgText(smmBox.x + smmBox.w/2, b.y + b.h/2 + 4, b.label, active ? b.color : C.dimText, 11, 'middle', 600);
        svg += '</g>';
    });

    // animated arrows per step
    if (step === 0) {
        // highlight: DXE locates protocol
        svg += svgText(dxeBox.x + dxeBox.w/2, dxeBox.y + dxeBox.h + 20, 'gBS->LocateProtocol(..CommunicationProtocolGuid..)', C.dxe, 10, 'middle', 500);
    }
    if (step === 1) {
        // DXE -> comm buffer
        svg += svgArrow(dxeBox.x + dxeBox.w, 167, commBox.x, 167, C.comm);
        svg += svgText((dxeBox.x + dxeBox.w + commBox.x)/2, 157, 'Fill GUID + Data', C.comm, 10, 'middle', 500);
    }
    if (step === 2) {
        // DXE calls Communicate
        svg += svgArrow(dxeBox.x + dxeBox.w, 222, commBox.x, 160, C.dxe);
        svg += svgText((dxeBox.x + dxeBox.w + commBox.x)/2, 180, 'Communicate(CommBuffer, &Size)', C.dxe, 10, 'middle', 500);
    }
    if (step === 3) {
        // comm buffer addr -> I/O port 0xB2
        svg += svgArrow(commBox.x + commBox.w, 120, ioBox.x, 100, C.comm);
        svg += svgArrow(dxeBox.x + dxeBox.w, 222, ioBox.x, 120, C.comm, true);
        svg += svgText(ioBox.x + ioBox.w/2, ioBox.y + ioBox.h + 16, 'IoWrite8 / SMC', C.comm, 10, 'middle', 500);
    }
    if (step === 4) {
        // I/O -> CPU -> SMM
        svg += svgArrow(ioBox.x + ioBox.w/2, ioBox.y + ioBox.h, cpuBox.x + cpuBox.w/2, cpuBox.y, C.cpu);
        svg += svgArrow(cpuBox.x + cpuBox.w, cpuBox.y + cpuBox.h/2, smmBox.x, 110, C.smm);
        svg += svgText(cpuBox.x + cpuBox.w/2, cpuBox.y + cpuBox.h + 16, 'Core traps to Secure Mode', C.cpu, 10, 'middle', 500);
    }
    if (step === 5) {
        // SMM reads comm buffer
        svg += svgArrow(smmBox.x, 160, commBox.x + commBox.w, 120, C.smram, true);
        svg += svgText((smmBox.x + commBox.x + commBox.w)/2, 130, 'Read HeaderGuid → dispatch', C.smram, 10, 'middle', 500);
    }
    if (step === 6) {
        // handler reads/writes comm buffer
        svg += svgArrow(smmBox.x, 215, commBox.x + commBox.w, 230, C.smram);
        svg += svgArrow(commBox.x + commBox.w, 250, smmBox.x, 235, C.done, true);
        svg += svgText((smmBox.x + commBox.x + commBox.w)/2, 260, 'Handler R/W Data[]', C.smram, 10, 'middle', 500);
    }
    if (step === 7) {
        // RSM return -> DXE reads response
        svg += svgCurveArrow(smmBox.x, 270, smmBox.x - 80, 350, dxeBox.x + dxeBox.w + 40, 350, dxeBox.x + dxeBox.w, 277, C.done, true);
        svg += svgArrow(commBox.x, 250, dxeBox.x + dxeBox.w, 277, C.done);
        svg += svgText(W/2, H - 20, 'Return to Normal World → DXE reads response', C.done, 11, 'middle', 600);
    }

    svg += '</svg>';
    el.innerHTML = svg;

    // update description
    var stepNum = step + 1;
    document.getElementById('flow-step-title').textContent = t('flow.step'+stepNum+'.title');
    document.getElementById('flow-step-desc').textContent  = t('flow.step'+stepNum+'.desc');
    document.getElementById('flow-step-detail').textContent = t('flow.step'+stepNum+'.detail');

    // update indicator
    var label = t('flow.step.label');
    var of_   = t('flow.step.of');
    document.getElementById('flow-indicator').textContent = label + ' ' + stepNum + ' ' + of_ + ' ' + TOTAL_STEPS;

    // update buttons
    document.getElementById('flow-prev').disabled = (step === 0);
    document.getElementById('flow-next').disabled = (step === TOTAL_STEPS - 1);
}

/* ====================== standalone comparison lists =============== */
function renderComparisonLists() {
    var tradList = document.getElementById('traditional-list');
    var standList = document.getElementById('standalone-list');
    if (!tradList || !standList) return;

    var tradItems = t('standalone.traditional.items');
    var standItems = t('standalone.standalone.items');

    tradList.innerHTML = '';
    standList.innerHTML = '';

    if (Array.isArray(tradItems)) {
        tradItems.forEach(function(item) {
            var li = document.createElement('li');
            li.textContent = item;
            tradList.appendChild(li);
        });
    }
    if (Array.isArray(standItems)) {
        standItems.forEach(function(item) {
            var li = document.createElement('li');
            li.textContent = item;
            standList.appendChild(li);
        });
    }
}

/* ====================== nav highlight on scroll =================== */
function setupScrollSpy() {
    var sections = document.querySelectorAll('.section[id]');
    var navLinks = document.querySelectorAll('.nav-link');

    function update() {
        var scrollY = window.scrollY || window.pageYOffset;
        var current = '';
        sections.forEach(function(sec) {
            if (sec.offsetTop - 120 <= scrollY) {
                current = sec.id;
            }
        });
        navLinks.forEach(function(link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
}

/* ====================== boot ====================================== */
document.addEventListener('DOMContentLoaded', function() {

    // render all static diagrams
    renderArchDiagram();
    renderTriggerDiagram();
    renderBufferDiagram();
    renderComparisonLists();

    // initial flow step
    renderFlowStep(0);

    // flow controls
    document.getElementById('flow-prev').addEventListener('click', function() {
        if (currentFlowStep > 0) {
            currentFlowStep--;
            renderFlowStep(currentFlowStep);
        }
    });
    document.getElementById('flow-next').addEventListener('click', function() {
        if (currentFlowStep < TOTAL_STEPS - 1) {
            currentFlowStep++;
            renderFlowStep(currentFlowStep);
        }
    });
    document.getElementById('flow-reset').addEventListener('click', function() {
        currentFlowStep = 0;
        renderFlowStep(0);
    });

    /* keyboard navigation for step engine */
    document.addEventListener('keydown', function (e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        if (e.key === 'ArrowLeft'  && currentFlowStep > 0)              { currentFlowStep--; renderFlowStep(currentFlowStep); }
        if (e.key === 'ArrowRight' && currentFlowStep < TOTAL_STEPS - 1) { currentFlowStep++; renderFlowStep(currentFlowStep); }
    });

    // scroll spy
    setupScrollSpy();

    // override setLang to also re-render comparison lists
    var origSetLang = window.setLang;
    if (origSetLang) {
        window.setLang = function(lang) {
            origSetLang(lang);
            renderComparisonLists();
        };
    }
});
