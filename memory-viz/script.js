/* i18n (Chinese only) - baked in, EN version removed */
const translations = { 'zh-TW': {
    "nav.dataStructures": "資料結構",
    "nav.memoryLayout": "記憶體配置圖",
    "nav.allocation": "記憶體配置",
    "nav.deallocation": "記憶體釋放",
    "section1.title": "1. 基礎資料結構",
    "section1.1.title": "1.1 LIST_ENTRY 雙向鏈結串列",
    "section1.1.desc": "<code>LIST_ENTRY</code> 是 EDK2 中最基礎的資料結構，用於實現雙向鏈結串列。它被嵌入到其他結構體中，用於將多個結構體串連起來。",
    "section1.1.diagram": "LIST_ENTRY 結構圖解",
    "section1.2.title": "1.2 MEMORY_MAP_ENTRY 記憶體描述結構",
    "section1.2.desc": "<code>MEMORY_MAP_ENTRY</code> 描述一塊連續的記憶體區域，包含其類型、起始位址、頁數等資訊。多個 MEMORY_MAP_ENTRY 透過 LIST_ENTRY 串連成記憶體映射表。",
    "section1.2.diagram": "MEMORY_MAP_ENTRY 結構與串連",
    "section1.3.title": "1.3 EFI_MEMORY_TYPE 記憶體類型",
    "memType.reserved": "保留記憶體，不可使用",
    "memType.loaderCode": "OS Loader 程式碼",
    "memType.loaderData": "OS Loader 資料",
    "memType.bsCode": "Boot Services 程式碼",
    "memType.bsData": "Boot Services 資料",
    "memType.rtCode": "Runtime Services 程式碼",
    "memType.rtData": "Runtime Services 資料",
    "memType.conventional": "可用的空閒記憶體",
    "memType.acpiReclaim": "ACPI 可回收記憶體",
    "memType.acpiNvs": "ACPI NVS 記憶體",
    "memType.mmio": "記憶體映射 I/O",
    "memType.persistent": "持久性記憶體",
    "section2.title": "2. 記憶體初始化配置圖",
    "section2.1.title": "2.1 系統記憶體整體佈局",
    "section2.1.desc": "在 UEFI 系統啟動過程中，記憶體會被劃分為不同的區域。以下是一個典型的記憶體佈局範例：",
    "section2.2.title": "2.2 記憶體映射表初始狀態",
    "section2.2.desc": "系統啟動後，記憶體管理器會建立一個 Memory Map 鏈結串列來追蹤所有記憶體區域的狀態：",
    "memBlock.mmio": "MMIO 區域",
    "memBlock.mmioDesc": "PCIe, LAPIC, IO-APIC",
    "memBlock.smram": "SMRAM (SMM)",
    "memBlock.smramDesc": "系統管理模式",
    "memBlock.pci": "PCI Memory Hole",
    "memBlock.pciDesc": "PCI 設備記憶體映射",
    "memBlock.dxe": "DXE Memory Pool",
    "memBlock.dxeDesc": "DXE 驅動程式、Protocols",
    "memBlock.dxeSize": "主要可用記憶體區域",
    "memBlock.runtime": "Runtime Services",
    "memBlock.runtimeDesc": "Runtime Code & Data",
    "memBlock.boot": "Boot Services",
    "memBlock.bootDesc": "Boot Code & Data",
    "memBlock.legacy": "Legacy 區域",
    "memBlock.legacyDesc": "VGA Buffer, Option ROMs",
    "memBlock.low": "Low Memory",
    "memBlock.lowDesc": "IVT, BDA, EBDA",
    "section3.title": "3. 記憶體配置流程",
    "section3.1.title": "3.1 AllocatePages 配置流程",
    "section3.1.desc": "當呼叫 <code>gBS->AllocatePages()</code> 時，記憶體管理器會執行以下步驟來找到適合的記憶體區塊：",
    "section3.2.title": "3.2 配置演算法詳解",
    "section3.2.algo": "First-Fit 演算法",
    "section3.2.step1": "從 gMemoryMap 鏈結串列的頭部開始遍歷",
    "section3.2.step2": "對每個 MEMORY_MAP_ENTRY 檢查：",
    "section3.2.step2a": "類型是否為 EfiConventionalMemory（可用記憶體）",
    "section3.2.step2b": "大小是否足夠容納請求的頁數",
    "section3.2.step2c": "位址是否符合對齊要求",
    "section3.2.step3": "找到第一個符合條件的區塊後停止搜尋",
    "section3.2.step4": "分割該區塊，更新記憶體映射表",
    "section4.title": "4. 記憶體釋放流程",
    "section4.1.title": "4.1 FreePages 釋放流程",
    "section4.1.desc": "當呼叫 <code>gBS->FreePages()</code> 時，記憶體管理器會將記憶體歸還並嘗試合併相鄰的空閒區塊：",
    "section4.2.title": "4.2 記憶體合併 (Coalescing)",
    "section4.2.desc": "釋放記憶體後，管理器會檢查相鄰區塊是否也是空閒的，如果是則合併它們以減少碎片化：",
    "section4.2.before": "合併前",
    "section4.2.after": "合併後",
    "section4.2.free": "Free",
    "section4.2.releasing": "Releasing",
    "section4.2.pages": "頁",
    "btn.prev": "← 上一步",
    "btn.next": "下一步 →",
    "btn.reset": "重置",
    "step.indicator": "步驟 {current} / {total}",
    "footer.text": "UEFI EDK2 記憶體管理視覺化 | 教育用途",
    "alloc.step1.title": "步驟 1：接收配置請求",
    "alloc.step1.desc": "應用程式呼叫 <code>AllocatePages(AllocateAnyPages, EfiBootServicesData, 4, &Address)</code><br>請求配置 <strong>4 頁 (16KB)</strong> 的 Boot Services Data 記憶體",
    "alloc.step2.title": "步驟 2：從 gMemoryMap 開始遍歷",
    "alloc.step2.desc": "記憶體管理器從 <code>gMemoryMap</code> 連結串列的頭部開始<br>取得第一個 <code>MEMORY_MAP_ENTRY</code> 節點",
    "alloc.step3.title": "步驟 3：檢查第一個區塊",
    "alloc.step3.desc": "檢查第一個 Entry：<strong>Reserved Memory (0x00000000 - 0x0009FFFF)</strong><br>類型為 Reserved，<span style=\"color: #ef4444;\">不符合條件</span>，繼續下一個",
    "alloc.step4.title": "步驟 4：檢查第二個區塊",
    "alloc.step4.desc": "檢查第二個 Entry：<strong>MMIO (0x000A0000 - 0x000FFFFF)</strong><br>類型為 MMIO，<span style=\"color: #ef4444;\">不符合條件</span>，繼續下一個",
    "alloc.step5.title": "步驟 5：找到可用區塊！",
    "alloc.step5.desc": "檢查第三個 Entry：<strong>Conventional Memory (0x00100000 - 0x0FFFFFFF)</strong><br>類型為 ConventionalMemory，<span style=\"color: #22c55e;\">符合條件！</span><br>檢查大小：需要 4 頁，可用 65280 頁 ✓",
    "alloc.step6.title": "步驟 6：分割記憶體區塊",
    "alloc.step6.desc": "將原本的大區塊分割成兩部分：<br>1. <strong>已配置區塊</strong>：0x00100000 - 0x00103FFF (4 頁, Boot Services Data)<br>2. <strong>剩餘可用區塊</strong>：0x00104000 - 0x0FFFFFFF (Conventional Memory)",
    "alloc.step7.title": "步驟 7：配置完成",
    "alloc.step7.desc": "記憶體配置成功！<br>回傳位址：<strong>0x00100000</strong><br>記憶體映射表已更新，新增一個 Boot Services Data 區塊",
    "free.step1.title": "步驟 1：接收釋放請求",
    "free.step1.desc": "應用程式呼叫 <code>FreePages(0x00200000, 4)</code><br>請求釋放位址 <strong>0x00200000</strong> 的 <strong>4 頁</strong> 記憶體",
    "free.step2.title": "步驟 2：搜尋對應的記憶體區塊",
    "free.step2.desc": "遍歷 <code>gMemoryMap</code> 找到包含位址 0x00200000 的區塊<br>驗證該區塊的類型和大小是否正確",
    "free.step3.title": "步驟 3：驗證釋放請求",
    "free.step3.desc": "找到區塊：<strong>BootServicesData (0x00200000 - 0x00203FFF)</strong><br>驗證：類型可釋放 ✓，大小匹配 ✓",
    "free.step4.title": "步驟 4：將區塊類型改為 Conventional",
    "free.step4.desc": "將找到的區塊類型從 <strong>BootServicesData</strong> 改為 <strong>ConventionalMemory</strong><br>此時記憶體已標記為可用",
    "free.step5.title": "步驟 5：檢查並合併相鄰區塊",
    "free.step5.desc": "檢查前後相鄰的區塊是否也是 ConventionalMemory<br>如果是，則合併它們以減少記憶體碎片",
    "free.step6.title": "步驟 6：釋放完成",
    "free.step6.desc": "記憶體釋放成功！<br>相鄰的空閒區塊已合併，減少了記憶體碎片<br>回傳 <strong>EFI_SUCCESS</strong>",
    "diagram.checking": "檢查中",
    "diagram.searching": "搜尋中...",
    "diagram.found": "找到目標!",
    "diagram.notMatch": "✗ 不符合",
    "diagram.match": "✓ 找到!",
    "diagram.newAlloc": "★ 新配置",
    "diagram.allocComplete": "✓ 配置完成！回傳位址:",
    "diagram.allocSuccess": "✓ 記憶體配置成功完成",
    "diagram.mapUpdated": "gMemoryMap 已更新，新增 BootServicesData 區塊",
    "diagram.justReleased": "剛釋放",
    "diagram.canMerge": "可合併 ↔",
    "diagram.merging": "合併相鄰的 Conventional Memory 區塊",
    "diagram.merged": "(合併後)",
    "diagram.mergedInfo": "原本 3 個區塊已合併為 1 個大區塊",
    "diagram.freeComplete": "✓ 記憶體釋放完成！減少了記憶體碎片",
    "diagram.returnSuccess": "回傳 EFI_SUCCESS",
    "diagram.verifying": "驗證中: 類型 ✓ 大小 ✓",
    "diagram.verified": "驗證通過，準備釋放",
    "nav.poolAllocation": "Pool 配置",
    "nav.bootTimeline": "啟動時間線",
    "nav.s4resume": "S4 復甦",
    "nav.policyComparator": "策略比較",
    "nav.fragmentation": "碎片化",
    "nav.runtimeHandoff": "Runtime 交接",
    "section5.title": "5. Pool 記憶體配置",
    "section5.1.title": "5.1 AllocatePool 配置流程",
    "section5.1.desc": "<code>AllocatePool</code> 用於配置小型記憶體區塊。它在已配置的頁面中管理 Pool，使用 <code>POOL_HEAD</code> 結構追蹤每個配置。",
    "section5.2.title": "5.2 Pool 結構詳解",
    "pool.step1.title": "步驟 1：接收 Pool 配置請求",
    "pool.step1.desc": "應用程式呼叫 <code>AllocatePool(EfiBootServicesData, 128, &Buffer)</code><br>請求配置 <strong>128 bytes</strong> 的 Pool 記憶體",
    "pool.step2.title": "步驟 2：計算所需大小",
    "pool.step2.desc": "加上 <code>POOL_HEAD</code> 標頭大小 (32 bytes)<br>實際需要：128 + 32 = <strong>160 bytes</strong><br>對齊到最近的 bucket 大小",
    "pool.step3.title": "步驟 3：搜尋可用的 Pool Page",
    "pool.step3.desc": "在 <code>mPoolHead</code> 陣列中找到對應類型的 Pool<br>檢查是否有足夠空間的現有 Pool Page",
    "pool.step4.title": "步驟 4：從 Pool Page 中切割",
    "pool.step4.desc": "從 Pool Page 的可用空間中切割出請求大小的區塊<br>設定 <code>POOL_HEAD</code> 標頭資訊",
    "pool.step5.title": "步驟 5：配置完成",
    "pool.step5.desc": "Pool 配置成功！<br>回傳指標指向 POOL_HEAD 之後的資料區域<br>回傳 <strong>EFI_SUCCESS</strong>",
    "pool.structTitle": "POOL_HEAD 結構",
    "pool.signature": "簽名",
    "pool.size": "大小",
    "pool.type": "類型",
    "pool.data": "使用者資料區域",
    "pool.free": "可用空間",
    "pool.allocated": "已配置",
    "pool.pageHeader": "Pool Page (4KB)",
    "section6.title": "6. 啟動階段記憶體時間線",
    "section6.1.title": "6.1 記憶體映射演進",
    "section6.1.desc": "隨著系統啟動，記憶體映射會經歷不同的階段變化。點擊各階段查看該階段的記憶體狀態：",
    "timeline.sec": "SEC",
    "timeline.secDesc": "安全驗證",
    "timeline.pei": "PEI",
    "timeline.peiDesc": "初始化基本記憶體",
    "timeline.dxe": "DXE",
    "timeline.dxeDesc": "驅動執行環境",
    "timeline.bds": "BDS",
    "timeline.bdsDesc": "啟動設備選擇",
    "timeline.exit": "ExitBootServices",
    "timeline.exitDesc": "移交給 OS",
    "timeline.os": "OS Runtime",
    "timeline.osDesc": "作業系統運行",
    "timeline.mapTitle": "記憶體映射快照",
    "section7.title": "7. S4 復甦記憶體映射",
    "section7.1.title": "7.1 S4 復甦階段記憶體映射",
    "section7.1.desc": "點擊各階段，查看系統從休眠喚醒到重新交還給 OS 的記憶體狀態與映射變化。",
    "s4.wake": "喚醒向量",
    "s4.wakeDesc": "CPU 從 S4 喚醒",
    "s4.firmware": "韌體復原",
    "s4.firmwareDesc": "恢復引導環境",
    "s4.remap": "映射重建",
    "s4.remapDesc": "重建頁表/Runtime",
    "s4.handoff": "OS 交接",
    "s4.handoffDesc": "恢復 OS 狀態",
    "s4.mapTitle": "S4 復甦記憶體映射快照",
    "section8.title": "8. 配置策略比較",
    "section8.1.title": "8.1 配置演算法比較",
    "section8.1.desc": "對相同的記憶體佈局和配置請求，不同的演算法會選擇不同的區塊。選擇演算法查看差異：",
    "policy.firstFit": "First-Fit",
    "policy.firstFitDesc": "選擇第一個夠大的區塊",
    "policy.bestFit": "Best-Fit",
    "policy.bestFitDesc": "選擇最小的夠大區塊",
    "policy.nextFit": "Next-Fit",
    "policy.nextFitDesc": "從上次位置繼續搜尋",
    "policy.request": "配置請求: 4 頁",
    "policy.selected": "已選擇",
    "policy.skipped": "跳過",
    "policy.scanning": "掃描中",
    "policy.fragAfter": "配置後碎片化:",
    "section9.title": "9. 記憶體碎片化視覺化",
    "section9.1.title": "9.1 碎片化熱力圖",
    "section9.1.desc": "互動式模擬記憶體配置與釋放，觀察碎片化程度的變化：",
    "frag.allocate": "配置",
    "frag.free": "釋放",
    "frag.reset": "重置",
    "frag.freeBlocks": "可用區塊數",
    "frag.largestFree": "最大可用區塊",
    "frag.fragRatio": "碎片化比率",
    "frag.totalFree": "總可用空間",
    "frag.ops": "操作次數",
    "frag.pages": "頁",
    "section10.title": "10. ExitBootServices 記憶體交接",
    "section10.1.title": "10.1 啟動服務到 Runtime 交接",
    "section10.1.desc": "當 OS Loader 呼叫 <code>ExitBootServices()</code> 後，Boot Services 記憶體被回收，只有 Runtime 和 ACPI 區域保留：",
    "handoff.before": "ExitBootServices 之前",
    "handoff.after": "ExitBootServices 之後",
    "handoff.survives": "保留",
    "handoff.reclaimed": "回收為可用記憶體",
    "handoff.bsCode": "BootServicesCode",
    "handoff.bsData": "BootServicesData",
    "handoff.rtCode": "RuntimeServicesCode",
    "handoff.rtData": "RuntimeServicesData",
    "handoff.acpiReclaim": "ACPI Reclaim",
    "handoff.acpiNvs": "ACPI NVS",
    "handoff.conventional": "Conventional",
    "handoff.reserved": "Reserved",
    "export.title": "匯出",
    "export.copySvg": "複製 SVG",
    "export.downloadPng": "下載 PNG",
    "export.copied": "已複製！",
    "codelink.hover": "懸停程式碼以高亮對應的圖表元素"
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

// UEFI EDK2 Memory Management Visualization
// Interactive step-by-step visualization for memory allocation and deallocation

document.addEventListener('DOMContentLoaded', function() {
    initI18n();
    initNavigation();
    initAllocationVisualization();
    initDeallocationVisualization();
    initPoolVisualization();
    initTimelineVisualization();
    initS4ResumeVisualization();
    initPolicyComparator();
    initFragmentationHeatmap();
    initRuntimeHandoff();
    initCodeLinking();
    initExportToolbar();

    /* keyboard navigation for step engines */
    document.addEventListener('keydown', function (e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        if (e.key === 'ArrowLeft')  { changeAllocStep(-1); changeFreeStep(-1); changePoolStep(-1); }
        if (e.key === 'ArrowRight') { changeAllocStep(1);  changeFreeStep(1);  changePoolStep(1);  }
    });
});

// Navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// Memory Allocation Visualization
// ============================================

function getAllocationSteps() {
    return [
        {
            titleKey: 'alloc.step1.title',
            descKey: 'alloc.step1.desc',
            code: `// Allocation Request
EFI_STATUS Status;
EFI_PHYSICAL_ADDRESS Address;

Status = gBS->AllocatePages (
    AllocateAnyPages,           // Type: Any address
    EfiBootServicesData,        // Memory type
    4,                          // Pages (4 * 4KB = 16KB)
    &Address                    // Output: Allocated address
);`,
            diagram: 'step1'
        },
        {
            titleKey: 'alloc.step2.title',
            descKey: 'alloc.step2.desc',
            code: `// CoreAllocatePages internal logic
MEMORY_MAP_ENTRY  *Entry;
LIST_ENTRY        *Link;

// Start traversing from list head
Link = gMemoryMap.ForwardLink;
while (Link != &gMemoryMap) {
    Entry = CR(Link, MEMORY_MAP_ENTRY, Link, MEMORY_MAP_SIGNATURE);
    // Check this Entry...
    Link = Link->ForwardLink;
}`,
            diagram: 'step2'
        },
        {
            titleKey: 'alloc.step3.title',
            descKey: 'alloc.step3.desc',
            code: `// Check memory type
if (Entry->Type != EfiConventionalMemory) {
    // This block is not available memory, skip
    Link = Link->ForwardLink;
    continue;
}`,
            diagram: 'step3'
        },
        {
            titleKey: 'alloc.step4.title',
            descKey: 'alloc.step4.desc',
            code: `// Continue traversing
Link = Link->ForwardLink;
Entry = CR(Link, MEMORY_MAP_ENTRY, Link, MEMORY_MAP_SIGNATURE);

// MMIO region is not Conventional Memory either
if (Entry->Type != EfiConventionalMemory) {
    continue;
}`,
            diagram: 'step4'
        },
        {
            titleKey: 'alloc.step5.title',
            descKey: 'alloc.step5.desc',
            code: `// Found available memory block
if (Entry->Type == EfiConventionalMemory) {
    UINT64 NumberOfPages = (Entry->End - Entry->Start + 1) >> EFI_PAGE_SHIFT;
    
    if (NumberOfPages >= RequestedPages) {
        // Found a block large enough!
        // Calculate allocation start address
        *Memory = Entry->Start;
        break;
    }
}`,
            diagram: 'step5'
        },
        {
            titleKey: 'alloc.step6.title',
            descKey: 'alloc.step6.desc',
            code: `// Split block - create new allocated entry
MEMORY_MAP_ENTRY *AllocatedEntry = AllocateMemoryMapEntry();
AllocatedEntry->Start = Entry->Start;
AllocatedEntry->End = Entry->Start + (RequestedPages << EFI_PAGE_SHIFT) - 1;
AllocatedEntry->Type = MemoryType;  // EfiBootServicesData

// Update original block's start address
Entry->Start = AllocatedEntry->End + 1;

// Insert new block into list
InsertTailList(&Entry->Link, &AllocatedEntry->Link);`,
            diagram: 'step6'
        },
        {
            titleKey: 'alloc.step7.title',
            descKey: 'alloc.step7.desc',
            code: `// Allocation successful
*Memory = 0x00100000;
return EFI_SUCCESS;

// Now gMemoryMap contains:
// [Reserved] -> [MMIO] -> [BootServicesData] -> [Conventional] -> ...
//                         ^^^ Newly allocated block`,
            diagram: 'step7'
        }
    ];
}

let currentAllocStep = 0;

function initAllocationVisualization() {
    const prevBtn = document.getElementById('alloc-prev');
    const nextBtn = document.getElementById('alloc-next');
    const resetBtn = document.getElementById('alloc-reset');
    
    if (!prevBtn || !nextBtn || !resetBtn) return;
    
    prevBtn.addEventListener('click', () => changeAllocStep(-1));
    nextBtn.addEventListener('click', () => changeAllocStep(1));
    resetBtn.addEventListener('click', () => resetAllocVisualization());
    
    renderAllocStep(0);
}

function changeAllocStep(delta) {
    const steps = getAllocationSteps();
    const newStep = currentAllocStep + delta;
    if (newStep >= 0 && newStep < steps.length) {
        currentAllocStep = newStep;
        renderAllocStep(currentAllocStep);
    }
}

function resetAllocVisualization() {
    currentAllocStep = 0;
    renderAllocStep(0);
}

function renderAllocStep(stepIndex) {
    const steps = getAllocationSteps();
    const step = steps[stepIndex];
    
    // Update description using translations
    const descEl = document.getElementById('alloc-description');
    descEl.innerHTML = `<h3>${t(step.titleKey)}</h3><p>${t(step.descKey)}</p>`;
    descEl.classList.add('fade-in');
    setTimeout(() => descEl.classList.remove('fade-in'), 500);
    
    // Update code
    const codeEl = document.getElementById('alloc-code-content');
    codeEl.textContent = step.code;
    
    // Update diagram
    renderAllocDiagram(stepIndex);
    
    // Update buttons and step indicator
    document.getElementById('alloc-prev').disabled = stepIndex === 0;
    document.getElementById('alloc-next').disabled = stepIndex === steps.length - 1;
    document.getElementById('alloc-step-indicator').textContent = 
        t('step.indicator', { current: stepIndex + 1, total: steps.length });
}

function renderAllocDiagram(stepIndex) {
    const svg = document.getElementById('alloc-svg');
    
    const memoryEntries = [
        { id: 'reserved', type: 'Reserved', start: '0x00000000', end: '0x0009FFFF', color: '#ef4444', bgColor: 'rgba(239, 68, 68, 0.15)' },
        { id: 'mmio', type: 'MMIO', start: '0x000A0000', end: '0x000FFFFF', color: '#f59e0b', bgColor: 'rgba(245, 158, 11, 0.15)' },
        { id: 'conv', type: 'Conventional', start: '0x00100000', end: '0x0FFFFFFF', color: '#22c55e', bgColor: 'rgba(34, 197, 94, 0.15)' },
        { id: 'runtime', type: 'RuntimeServices', start: '0x10000000', end: '0x100FFFFF', color: '#a855f7', bgColor: 'rgba(168, 85, 247, 0.15)' }
    ];

    let svgContent = `
        <defs>
            <marker id="arrow-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e"/>
            </marker>
            <marker id="arrow-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6"/>
            </marker>
            <marker id="arrow-orange" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b"/>
            </marker>
            <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
    `;

    // gMemoryMap head
    svgContent += `
        <g class="head">
            <rect x="20" y="200" width="100" height="50" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
            <text x="70" y="220" fill="#f59e0b" font-size="11" text-anchor="middle" font-weight="600">gMemoryMap</text>
            <text x="70" y="235" fill="#94a3b8" font-size="10" text-anchor="middle">(List Head)</text>
        </g>
    `;

    // Render entries based on step
    if (stepIndex < 6) {
        // Original state - 4 entries
        memoryEntries.forEach((entry, idx) => {
            const x = 160 + idx * 175;
            const isSearching = (stepIndex === 2 && idx === 0) || 
                               (stepIndex === 3 && idx === 1) || 
                               (stepIndex === 4 && idx === 2) ||
                               (stepIndex === 5 && idx === 2);
            const isFound = stepIndex >= 5 && idx === 2;
            
            let extraStyle = '';
            if (isSearching && !isFound) {
                extraStyle = 'filter: drop-shadow(0 0 10px ' + entry.color + ')';
            }
            if (isFound) {
                extraStyle = 'filter: drop-shadow(0 0 15px #22c55e)';
            }
            
            svgContent += `
                <g class="entry" style="${extraStyle}">
                    <rect x="${x}" y="150" width="160" height="150" rx="8" 
                          fill="${entry.bgColor}" stroke="${entry.color}" stroke-width="2"
                          ${isSearching ? 'stroke-dasharray="5,5"' : ''}/>
                    <text x="${x + 80}" y="175" fill="${entry.color}" font-size="12" text-anchor="middle" font-weight="600">${entry.type}</text>
                    <line x1="${x}" y1="185" x2="${x + 160}" y2="185" stroke="#475569" stroke-width="1"/>
                    <text x="${x + 10}" y="205" fill="#94a3b8" font-size="10" font-family="Consolas">Start: ${entry.start}</text>
                    <text x="${x + 10}" y="225" fill="#94a3b8" font-size="10" font-family="Consolas">End: ${entry.end}</text>
                    <text x="${x + 10}" y="245" fill="#94a3b8" font-size="10" font-family="Consolas">Type: ${entry.type}</text>
                    
                    <rect x="${x + 10}" y="255" width="140" height="25" rx="4" fill="#334155" stroke="#475569" stroke-dasharray="3"/>
                    <text x="${x + 80}" y="272" fill="#64748b" font-size="9" text-anchor="middle">LIST_ENTRY Link</text>
                </g>
            `;

            // Connecting arrows
            if (idx === 0) {
                svgContent += `<path d="M 120 225 L 155 225" stroke="#22c55e" stroke-width="2" marker-end="url(#arrow-green)"/>`;
            }
            if (idx < memoryEntries.length - 1) {
                svgContent += `
                    <path d="M ${x + 160} 265 Q ${x + 180} 240 ${x + 175} 265" stroke="#22c55e" stroke-width="1.5" fill="none" marker-end="url(#arrow-green)"/>
                    <path d="M ${x + 175} 275 Q ${x + 180} 300 ${x + 160} 275" stroke="#3b82f6" stroke-width="1.5" fill="none" marker-end="url(#arrow-blue)"/>
                `;
            }
        });

        // Search pointer for steps 2-5
        if (stepIndex >= 1 && stepIndex <= 4) {
            const pointerX = 160 + (stepIndex - 1) * 175 + 80;
            svgContent += `
                <g class="pointer">
                    <path d="M ${pointerX} 120 L ${pointerX} 145" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrow-orange)"/>
                    <text x="${pointerX}" y="110" fill="#f59e0b" font-size="11" text-anchor="middle" font-weight="600">檢查中</text>
                </g>
            `;
        }

        // Status indicators
        if (stepIndex >= 2 && stepIndex <= 4) {
            for (let i = 0; i < stepIndex - 1; i++) {
                const statusX = 160 + i * 175 + 80;
                svgContent += `
                    <text x="${statusX}" y="320" fill="#ef4444" font-size="11" text-anchor="middle">✗ 不符合</text>
                `;
            }
        }

        if (stepIndex >= 5) {
            svgContent += `
                <text x="${160 + 0 * 175 + 80}" y="320" fill="#ef4444" font-size="11" text-anchor="middle">✗ Reserved</text>
                <text x="${160 + 1 * 175 + 80}" y="320" fill="#ef4444" font-size="11" text-anchor="middle">✗ MMIO</text>
                <text x="${160 + 2 * 175 + 80}" y="320" fill="#22c55e" font-size="11" text-anchor="middle">✓ 找到!</text>
            `;
        }

    } else if (stepIndex === 6) {
        // After split - show new allocated block
        const splitEntries = [
            { type: 'Reserved', start: '0x00000000', end: '0x0009FFFF', color: '#ef4444', bgColor: 'rgba(239, 68, 68, 0.15)', width: 130 },
            { type: 'MMIO', start: '0x000A0000', end: '0x000FFFFF', color: '#f59e0b', bgColor: 'rgba(245, 158, 11, 0.15)', width: 130 },
            { type: 'BootServicesData', start: '0x00100000', end: '0x00103FFF', color: '#3b82f6', bgColor: 'rgba(59, 130, 246, 0.2)', width: 140, isNew: true },
            { type: 'Conventional', start: '0x00104000', end: '0x0FFFFFFF', color: '#22c55e', bgColor: 'rgba(34, 197, 94, 0.15)', width: 140 },
            { type: 'RuntimeServices', start: '0x10000000', end: '0x100FFFFF', color: '#a855f7', bgColor: 'rgba(168, 85, 247, 0.15)', width: 130 }
        ];

        let currentX = 150;
        splitEntries.forEach((entry, idx) => {
            const extraStyle = entry.isNew ? 'filter: drop-shadow(0 0 15px #3b82f6)' : '';
            
            svgContent += `
                <g class="entry" style="${extraStyle}">
                    <rect x="${currentX}" y="150" width="${entry.width}" height="150" rx="8" 
                          fill="${entry.bgColor}" stroke="${entry.color}" stroke-width="${entry.isNew ? 3 : 2}"/>
                    <text x="${currentX + entry.width/2}" y="175" fill="${entry.color}" font-size="${entry.isNew ? 11 : 10}" text-anchor="middle" font-weight="600">${entry.type}</text>
                    <line x1="${currentX}" y1="185" x2="${currentX + entry.width}" y2="185" stroke="#475569" stroke-width="1"/>
                    <text x="${currentX + 5}" y="205" fill="#94a3b8" font-size="9" font-family="Consolas">Start: ${entry.start}</text>
                    <text x="${currentX + 5}" y="220" fill="#94a3b8" font-size="9" font-family="Consolas">End: ${entry.end}</text>
                    ${entry.isNew ? '<text x="' + (currentX + entry.width/2) + '" y="245" fill="#3b82f6" font-size="10" text-anchor="middle" font-weight="600">★ 新配置</text>' : ''}
                    
                    <rect x="${currentX + 5}" y="260" width="${entry.width - 10}" height="20" rx="4" fill="#334155" stroke="#475569" stroke-dasharray="3"/>
                    <text x="${currentX + entry.width/2}" y="274" fill="#64748b" font-size="8" text-anchor="middle">LIST_ENTRY</text>
                </g>
            `;
            
            if (idx === 0) {
                svgContent += `<path d="M 120 225 L ${currentX - 5} 225" stroke="#22c55e" stroke-width="2" marker-end="url(#arrow-green)"/>`;
            }
            
            currentX += entry.width + 10;
        });

        svgContent += `
            <text x="450" y="330" fill="#22c55e" font-size="13" text-anchor="middle" font-weight="600">✓ 配置完成！回傳位址: 0x00100000</text>
        `;
    } else {
        // Step 7 - Final state
        const finalEntries = [
            { type: 'Reserved', start: '0x00000000', end: '0x0009FFFF', color: '#ef4444', bgColor: 'rgba(239, 68, 68, 0.15)' },
            { type: 'MMIO', start: '0x000A0000', end: '0x000FFFFF', color: '#f59e0b', bgColor: 'rgba(245, 158, 11, 0.15)' },
            { type: 'BootServicesData', start: '0x00100000', end: '0x00103FFF', color: '#3b82f6', bgColor: 'rgba(59, 130, 246, 0.2)', isNew: true },
            { type: 'Conventional', start: '0x00104000', end: '0x0FFFFFFF', color: '#22c55e', bgColor: 'rgba(34, 197, 94, 0.15)' },
            { type: 'RuntimeServices', start: '0x10000000', end: '0x100FFFFF', color: '#a855f7', bgColor: 'rgba(168, 85, 247, 0.15)' }
        ];

        finalEntries.forEach((entry, idx) => {
            const x = 150 + idx * 145;
            svgContent += `
                <g class="entry" ${entry.isNew ? 'style="filter: drop-shadow(0 0 10px #3b82f6)"' : ''}>
                    <rect x="${x}" y="150" width="135" height="150" rx="8" 
                          fill="${entry.bgColor}" stroke="${entry.color}" stroke-width="2"/>
                    <text x="${x + 67}" y="175" fill="${entry.color}" font-size="10" text-anchor="middle" font-weight="600">${entry.type}</text>
                    <line x1="${x}" y1="185" x2="${x + 135}" y2="185" stroke="#475569" stroke-width="1"/>
                    <text x="${x + 5}" y="205" fill="#94a3b8" font-size="9" font-family="Consolas">Start: ${entry.start}</text>
                    <text x="${x + 5}" y="220" fill="#94a3b8" font-size="9" font-family="Consolas">End: ${entry.end}</text>
                </g>
            `;
        });

        svgContent += `
            <text x="450" y="350" fill="#22c55e" font-size="14" text-anchor="middle" font-weight="600">✓ 記憶體配置成功完成</text>
            <text x="450" y="375" fill="#94a3b8" font-size="12" text-anchor="middle">gMemoryMap 已更新，新增 BootServicesData 區塊</text>
        `;
    }

    svg.innerHTML = svgContent;
}

// ============================================
// Memory Deallocation Visualization
// ============================================

function getDeallocationSteps() {
    return [
        {
            titleKey: 'free.step1.title',
            descKey: 'free.step1.desc',
            code: `// Free Request
EFI_STATUS Status;

Status = gBS->FreePages (
    0x00200000,    // Memory address to free
    4              // Pages (4 * 4KB = 16KB)
);`
        },
        {
            titleKey: 'free.step2.title',
            descKey: 'free.step2.desc',
            code: `// Search for Entry containing this address
MEMORY_MAP_ENTRY *Entry;
LIST_ENTRY *Link;

for (Link = gMemoryMap.ForwardLink; 
     Link != &gMemoryMap; 
     Link = Link->ForwardLink) {
    
    Entry = CR(Link, MEMORY_MAP_ENTRY, Link, MEMORY_MAP_SIGNATURE);
    
    if (Entry->Start <= Address && Address <= Entry->End) {
        // Found the block containing this address
        break;
    }
}`
        },
        {
            titleKey: 'free.step3.title',
            descKey: 'free.step3.desc',
            code: `// Validate free request
if (Entry->Type == EfiConventionalMemory) {
    // Error: Trying to free already free memory
    return EFI_NOT_FOUND;
}

UINT64 EntryPages = (Entry->End - Entry->Start + 1) >> EFI_PAGE_SHIFT;
if (NumberOfPages > EntryPages) {
    // Error: Requested pages exceed block size
    return EFI_INVALID_PARAMETER;
}`
        },
        {
            titleKey: 'free.step4.title',
            descKey: 'free.step4.desc',
            code: `// Change memory type to Conventional (available)
Entry->Type = EfiConventionalMemory;

// Block state now:
// [BootServicesData] -> [Conventional]  (just freed)
//                       ^^^ Marked as available`
        },
        {
            titleKey: 'free.step5.title',
            descKey: 'free.step5.desc',
            code: `// Check if can merge with previous block
PreviousEntry = CR(Entry->Link.BackLink, MEMORY_MAP_ENTRY, Link, ...);
if (PreviousEntry->Type == EfiConventionalMemory &&
    PreviousEntry->End + 1 == Entry->Start) {
    // Can merge!
    PreviousEntry->End = Entry->End;
    RemoveEntryList(&Entry->Link);
    FreeMemoryMapEntry(Entry);
    Entry = PreviousEntry;
}

// Check if can merge with next block
NextEntry = CR(Entry->Link.ForwardLink, MEMORY_MAP_ENTRY, Link, ...);
if (NextEntry->Type == EfiConventionalMemory &&
    Entry->End + 1 == NextEntry->Start) {
    // Can merge!
    Entry->End = NextEntry->End;
    RemoveEntryList(&NextEntry->Link);
    FreeMemoryMapEntry(NextEntry);
}`
        },
        {
            titleKey: 'free.step6.title',
            descKey: 'free.step6.desc',
            code: `// Free successful
return EFI_SUCCESS;

// Merged gMemoryMap:
// [...] -> [Conventional (larger after merge)] -> [...]
//          ^^^ Previously scattered free blocks merged`
        }
    ];
}

let currentFreeStep = 0;

function initDeallocationVisualization() {
    const prevBtn = document.getElementById('free-prev');
    const nextBtn = document.getElementById('free-next');
    const resetBtn = document.getElementById('free-reset');
    
    if (!prevBtn || !nextBtn || !resetBtn) return;
    
    prevBtn.addEventListener('click', () => changeFreeStep(-1));
    nextBtn.addEventListener('click', () => changeFreeStep(1));
    resetBtn.addEventListener('click', () => resetFreeVisualization());
    
    renderFreeStep(0);
}

function changeFreeStep(delta) {
    const steps = getDeallocationSteps();
    const newStep = currentFreeStep + delta;
    if (newStep >= 0 && newStep < steps.length) {
        currentFreeStep = newStep;
        renderFreeStep(currentFreeStep);
    }
}

function resetFreeVisualization() {
    currentFreeStep = 0;
    renderFreeStep(0);
}

function renderFreeStep(stepIndex) {
    const steps = getDeallocationSteps();
    const step = steps[stepIndex];
    
    // Update description using translations
    const descEl = document.getElementById('free-description');
    descEl.innerHTML = `<h3>${t(step.titleKey)}</h3><p>${t(step.descKey)}</p>`;
    descEl.classList.add('fade-in');
    setTimeout(() => descEl.classList.remove('fade-in'), 500);
    
    // Update code
    const codeEl = document.getElementById('free-code-content');
    codeEl.textContent = step.code;
    
    // Update diagram
    renderFreeDiagram(stepIndex);
    
    // Update buttons and step indicator
    document.getElementById('free-prev').disabled = stepIndex === 0;
    document.getElementById('free-next').disabled = stepIndex === steps.length - 1;
    document.getElementById('free-step-indicator').textContent = 
        t('step.indicator', { current: stepIndex + 1, total: steps.length });
}

function renderFreeDiagram(stepIndex) {
    const svg = document.getElementById('free-svg');
    
    let svgContent = `
        <defs>
            <marker id="free-arrow-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e"/>
            </marker>
            <marker id="free-arrow-orange" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b"/>
            </marker>
        </defs>
    `;

    // gMemoryMap head
    svgContent += `
        <g class="head">
            <rect x="20" y="200" width="100" height="50" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
            <text x="70" y="220" fill="#f59e0b" font-size="11" text-anchor="middle" font-weight="600">gMemoryMap</text>
            <text x="70" y="235" fill="#94a3b8" font-size="10" text-anchor="middle">(List Head)</text>
        </g>
    `;

    if (stepIndex < 4) {
        // Initial state with allocated block
        const entries = [
            { type: 'Conventional', start: '0x00100000', end: '0x001FFFFF', color: '#22c55e', bgColor: 'rgba(34, 197, 94, 0.15)' },
            { type: 'BootServicesData', start: '0x00200000', end: '0x00203FFF', color: '#3b82f6', bgColor: 'rgba(59, 130, 246, 0.2)', isTarget: true },
            { type: 'Conventional', start: '0x00204000', end: '0x0FFFFFFF', color: '#22c55e', bgColor: 'rgba(34, 197, 94, 0.15)' }
        ];

        entries.forEach((entry, idx) => {
            const x = 160 + idx * 220;
            const isSearching = stepIndex >= 1 && stepIndex <= 2 && entry.isTarget;
            const isFound = stepIndex >= 2 && entry.isTarget;
            
            let extraStyle = '';
            if (isSearching || isFound) {
                extraStyle = `filter: drop-shadow(0 0 15px ${entry.color})`;
            }
            
            svgContent += `
                <g class="entry" style="${extraStyle}">
                    <rect x="${x}" y="140" width="200" height="170" rx="8" 
                          fill="${entry.bgColor}" stroke="${entry.color}" stroke-width="${entry.isTarget ? 3 : 2}"
                          ${isSearching ? 'stroke-dasharray="5,5"' : ''}/>
                    <text x="${x + 100}" y="165" fill="${entry.color}" font-size="12" text-anchor="middle" font-weight="600">${entry.type}</text>
                    <line x1="${x}" y1="175" x2="${x + 200}" y2="175" stroke="#475569" stroke-width="1"/>
                    <text x="${x + 10}" y="200" fill="#94a3b8" font-size="11" font-family="Consolas">Start: ${entry.start}</text>
                    <text x="${x + 10}" y="220" fill="#94a3b8" font-size="11" font-family="Consolas">End: ${entry.end}</text>
                    <text x="${x + 10}" y="240" fill="#94a3b8" font-size="11" font-family="Consolas">Type: ${entry.type}</text>
                    
                    <rect x="${x + 10}" y="255" width="180" height="30" rx="4" fill="#334155" stroke="#475569" stroke-dasharray="3"/>
                    <text x="${x + 100}" y="275" fill="#64748b" font-size="10" text-anchor="middle">LIST_ENTRY Link</text>
                </g>
            `;

            if (idx === 0) {
                svgContent += `<path d="M 120 225 L 155 225" stroke="#22c55e" stroke-width="2" marker-end="url(#free-arrow-green)"/>`;
            }
        });

        // Search pointer
        if (stepIndex >= 1 && stepIndex <= 2) {
            svgContent += `
                <g class="pointer">
                    <path d="M 480 110 L 480 135" stroke="#f59e0b" stroke-width="3" marker-end="url(#free-arrow-orange)"/>
                    <text x="480" y="100" fill="#f59e0b" font-size="12" text-anchor="middle" font-weight="600">${stepIndex === 1 ? '搜尋中...' : '找到目標!'}</text>
                </g>
            `;
        }

        if (stepIndex >= 2) {
            svgContent += `
                <text x="480" y="330" fill="${stepIndex === 2 ? '#f59e0b' : '#22c55e'}" font-size="12" text-anchor="middle">
                    ${stepIndex === 2 ? '驗證中: 類型 ✓ 大小 ✓' : stepIndex === 3 ? '驗證通過，準備釋放' : ''}
                </text>
            `;
        }

    } else if (stepIndex === 4) {
        // Showing merge process
        const entries = [
            { type: 'Conventional', start: '0x00100000', end: '0x001FFFFF', color: '#22c55e', bgColor: 'rgba(34, 197, 94, 0.15)', canMerge: true },
            { type: 'Conventional', start: '0x00200000', end: '0x00203FFF', color: '#22c55e', bgColor: 'rgba(34, 197, 94, 0.3)', isReleasing: true },
            { type: 'Conventional', start: '0x00204000', end: '0x0FFFFFFF', color: '#22c55e', bgColor: 'rgba(34, 197, 94, 0.15)', canMerge: true }
        ];

        entries.forEach((entry, idx) => {
            const x = 160 + idx * 220;
            
            svgContent += `
                <g class="entry" style="filter: drop-shadow(0 0 ${entry.isReleasing ? 15 : 8}px #22c55e)">
                    <rect x="${x}" y="140" width="200" height="170" rx="8" 
                          fill="${entry.bgColor}" stroke="${entry.color}" stroke-width="2"
                          ${entry.canMerge ? 'stroke-dasharray="8,4"' : ''}/>
                    <text x="${x + 100}" y="165" fill="${entry.color}" font-size="12" text-anchor="middle" font-weight="600">${entry.type}</text>
                    <line x1="${x}" y1="175" x2="${x + 200}" y2="175" stroke="#475569" stroke-width="1"/>
                    <text x="${x + 10}" y="200" fill="#94a3b8" font-size="11" font-family="Consolas">Start: ${entry.start}</text>
                    <text x="${x + 10}" y="220" fill="#94a3b8" font-size="11" font-family="Consolas">End: ${entry.end}</text>
                    ${entry.isReleasing ? '<text x="' + (x + 100) + '" y="250" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="600">剛釋放</text>' : ''}
                    ${entry.canMerge ? '<text x="' + (x + 100) + '" y="250" fill="#f59e0b" font-size="11" text-anchor="middle">可合併 ↔</text>' : ''}
                </g>
            `;
        });

        // Merge arrows
        svgContent += `
            <path d="M 360 225 L 375 225" stroke="#f59e0b" stroke-width="3"/>
            <path d="M 575 225 L 560 225" stroke="#f59e0b" stroke-width="3"/>
            <text x="480" y="350" fill="#f59e0b" font-size="13" text-anchor="middle" font-weight="600">合併相鄰的 Conventional Memory 區塊</text>
        `;

    } else {
        // Final merged state
        svgContent += `
            <g class="entry" style="filter: drop-shadow(0 0 15px #22c55e)">
                <rect x="200" y="140" width="500" height="170" rx="8" 
                      fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" stroke-width="3"/>
                <text x="450" y="170" fill="#22c55e" font-size="14" text-anchor="middle" font-weight="600">Conventional Memory (合併後)</text>
                <line x1="200" y1="185" x2="700" y2="185" stroke="#475569" stroke-width="1"/>
                <text x="220" y="210" fill="#94a3b8" font-size="12" font-family="Consolas">Start: 0x00100000</text>
                <text x="220" y="235" fill="#94a3b8" font-size="12" font-family="Consolas">End: 0x0FFFFFFF</text>
                <text x="220" y="260" fill="#22c55e" font-size="12">原本 3 個區塊已合併為 1 個大區塊</text>
                
                <rect x="220" y="275" width="460" height="25" rx="4" fill="#334155" stroke="#475569" stroke-dasharray="3"/>
                <text x="450" y="292" fill="#64748b" font-size="10" text-anchor="middle">LIST_ENTRY Link</text>
            </g>
            
            <path d="M 120 225 L 195 225" stroke="#22c55e" stroke-width="2" marker-end="url(#free-arrow-green)"/>
            
            <text x="450" y="350" fill="#22c55e" font-size="14" text-anchor="middle" font-weight="600">✓ 記憶體釋放完成！減少了記憶體碎片</text>
            <text x="450" y="375" fill="#94a3b8" font-size="12" text-anchor="middle">回傳 EFI_SUCCESS</text>
        `;
    }

    svg.innerHTML = svgContent;
}

// ============================================
// Pool Allocation Visualization (Section 5)
// ============================================

function getPoolSteps() {
    return [
        {
            titleKey: 'pool.step1.title',
            descKey: 'pool.step1.desc',
            code: `// Pool Allocation Request
EFI_STATUS Status;
VOID       *Buffer;

Status = gBS->AllocatePool (
    EfiBootServicesData,   // Memory type
    128,                   // Size in bytes
    &Buffer                // Output: pointer
);`
        },
        {
            titleKey: 'pool.step2.title',
            descKey: 'pool.step2.desc',
            code: `// CoreAllocatePool internal logic
// Add POOL_HEAD header size
UINTN NewSize = Size + sizeof(POOL_HEAD);
// NewSize = 128 + 32 = 160 bytes

// Determine if this is a small or large allocation
// Small: <= MAX_POOL_SIZE (page-managed slab)
// Large: allocate dedicated pages
if (NewSize > MAX_POOL_SIZE) {
    // Allocate whole pages via AllocatePages
} else {
    // Use pool slab allocator
}`
        },
        {
            titleKey: 'pool.step3.title',
            descKey: 'pool.step3.desc',
            code: `// Find pool for this memory type
POOL *Pool = &mPoolHead[MemoryType];

// Search free list for a block >= NewSize
LIST_ENTRY *FreeList;
POOL_FREE  *Free;

FreeList = &Pool->FreeList[BinIndex];
if (!IsListEmpty(FreeList)) {
    Free = CR(FreeList->ForwardLink, POOL_FREE, Link, ...);
    // Found a free block in the bin!
}`
        },
        {
            titleKey: 'pool.step4.title',
            descKey: 'pool.step4.desc',
            code: `// Carve allocation from the free block
POOL_HEAD *Head = (POOL_HEAD *)Free;

Head->Signature = POOL_HEAD_SIGNATURE;  // 'phd0'
Head->Size      = NewSize;              // 160
Head->Type      = MemoryType;           // EfiBootServicesData

// If remaining space is large enough,
// put it back on the free list
UINTN Remaining = Free->Size - NewSize;
if (Remaining >= MIN_POOL_SIZE) {
    POOL_FREE *NewFree = (POOL_FREE *)((UINT8 *)Head + NewSize);
    InsertHeadList(&Pool->FreeList[NewBin], &NewFree->Link);
}`
        },
        {
            titleKey: 'pool.step5.title',
            descKey: 'pool.step5.desc',
            code: `// Return pointer to user data area
// (just past the POOL_HEAD header)
*Buffer = (VOID *)(Head + 1);
// *Buffer = &Head->Data[0]

return EFI_SUCCESS;

// Memory layout:
// [POOL_HEAD (32B)] [User Data (128B)] [Free ...]
//                   ^^^ returned pointer`
        }
    ];
}

let currentPoolStep = 0;

function initPoolVisualization() {
    const prevBtn = document.getElementById('pool-prev');
    const nextBtn = document.getElementById('pool-next');
    const resetBtn = document.getElementById('pool-reset');

    if (!prevBtn || !nextBtn || !resetBtn) return;

    prevBtn.addEventListener('click', () => changePoolStep(-1));
    nextBtn.addEventListener('click', () => changePoolStep(1));
    resetBtn.addEventListener('click', () => resetPoolVisualization());

    renderPoolStep(0);
}

function changePoolStep(delta) {
    const steps = getPoolSteps();
    const newStep = currentPoolStep + delta;
    if (newStep >= 0 && newStep < steps.length) {
        currentPoolStep = newStep;
        renderPoolStep(currentPoolStep);
    }
}

function resetPoolVisualization() {
    currentPoolStep = 0;
    renderPoolStep(0);
}

function renderPoolStep(stepIndex) {
    const steps = getPoolSteps();
    const step = steps[stepIndex];

    const descEl = document.getElementById('pool-description');
    descEl.innerHTML = `<h3>${t(step.titleKey)}</h3><p>${t(step.descKey)}</p>`;
    descEl.classList.add('fade-in');
    setTimeout(() => descEl.classList.remove('fade-in'), 500);

    const codeEl = document.getElementById('pool-code-content');
    codeEl.textContent = step.code;

    renderPoolDiagram(stepIndex);

    document.getElementById('pool-prev').disabled = stepIndex === 0;
    document.getElementById('pool-next').disabled = stepIndex === steps.length - 1;
    document.getElementById('pool-step-indicator').textContent =
        t('step.indicator', { current: stepIndex + 1, total: steps.length });
}

function renderPoolDiagram(stepIndex) {
    const svg = document.getElementById('pool-svg');
    const pageW = 800, pageH = 80, pageX = 50, pageY = 60;
    const headW = 120, dataW = 200, freeW = pageW - headW - dataW;

    let s = `<defs>
        <marker id="pool-arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6"/>
        </marker>
    </defs>`;

    // Pool page outline
    s += `<rect x="${pageX}" y="${pageY}" width="${pageW}" height="${pageH}" rx="6"
          fill="rgba(59,130,246,0.08)" stroke="#475569" stroke-width="2"/>`;
    s += `<text x="${pageX + pageW/2}" y="${pageY - 10}" fill="#94a3b8" font-size="12" text-anchor="middle">${t('pool.pageHeader')}</text>`;

    // POOL_HEAD block
    const headColor = stepIndex >= 3 ? '#3b82f6' : '#475569';
    const headBg = stepIndex >= 3 ? 'rgba(59,130,246,0.25)' : 'rgba(71,85,105,0.15)';
    s += `<rect x="${pageX}" y="${pageY}" width="${headW}" height="${pageH}" rx="6"
          fill="${headBg}" stroke="${headColor}" stroke-width="2"
          ${stepIndex === 3 ? 'style="filter: drop-shadow(0 0 10px #3b82f6)"' : ''}/>`;
    s += `<text x="${pageX + headW/2}" y="${pageY + 25}" fill="${headColor}" font-size="11" text-anchor="middle" font-weight="600">POOL_HEAD</text>`;
    s += `<text x="${pageX + headW/2}" y="${pageY + 42}" fill="#94a3b8" font-size="9" text-anchor="middle">Sig: 'phd0'</text>`;
    s += `<text x="${pageX + headW/2}" y="${pageY + 56}" fill="#94a3b8" font-size="9" text-anchor="middle">Size: 160</text>`;
    s += `<text x="${pageX + headW/2}" y="${pageY + 70}" fill="#94a3b8" font-size="9" text-anchor="middle">Type: BsData</text>`;

    // Data block
    const dataX = pageX + headW;
    const dataColor = stepIndex >= 4 ? '#22c55e' : '#475569';
    const dataBg = stepIndex >= 4 ? 'rgba(34,197,94,0.2)' : 'rgba(71,85,105,0.1)';
    s += `<rect x="${dataX}" y="${pageY}" width="${dataW}" height="${pageH}"
          fill="${dataBg}" stroke="${dataColor}" stroke-width="2"
          ${stepIndex === 4 ? 'style="filter: drop-shadow(0 0 12px #22c55e)"' : ''}/>`;
    s += `<text x="${dataX + dataW/2}" y="${pageY + 35}" fill="${dataColor}" font-size="12" text-anchor="middle" font-weight="600">${t('pool.data')}</text>`;
    s += `<text x="${dataX + dataW/2}" y="${pageY + 55}" fill="#94a3b8" font-size="10" text-anchor="middle">128 bytes</text>`;

    // Free space
    const freeX = dataX + dataW;
    s += `<rect x="${freeX}" y="${pageY}" width="${freeW}" height="${pageH}" rx="6"
          fill="rgba(34,197,94,0.08)" stroke="#475569" stroke-width="1" stroke-dasharray="5,3"/>`;
    s += `<text x="${freeX + freeW/2}" y="${pageY + 40}" fill="#64748b" font-size="11" text-anchor="middle">${t('pool.free')}</text>`;
    s += `<text x="${freeX + freeW/2}" y="${pageY + 58}" fill="#64748b" font-size="9" text-anchor="middle">${4096 - 160} bytes</text>`;

    // Step-specific annotations
    if (stepIndex === 0) {
        s += `<text x="${pageX + pageW/2}" y="${pageY + pageH + 40}" fill="#f59e0b" font-size="13" text-anchor="middle" font-weight="600">
            AllocatePool(EfiBootServicesData, 128, &Buffer)</text>`;
    }
    if (stepIndex === 1) {
        s += `<rect x="250" y="180" width="400" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>`;
        s += `<text x="450" y="205" fill="#f59e0b" font-size="12" text-anchor="middle" font-weight="600">Size Calculation</text>`;
        s += `<text x="270" y="230" fill="#94a3b8" font-size="11">Request: 128 bytes + POOL_HEAD: 32 bytes = 160 bytes</text>`;
        s += `<text x="270" y="250" fill="#94a3b8" font-size="11">160 ≤ MAX_POOL_SIZE → Use slab allocator</text>`;
    }
    if (stepIndex === 2) {
        s += `<path d="M 450 ${pageY + pageH + 10} L 450 ${pageY + pageH + 35}" stroke="#f59e0b" stroke-width="3" marker-end="url(#pool-arrow)"/>`;
        s += `<text x="450" y="${pageY + pageH + 55}" fill="#f59e0b" font-size="12" text-anchor="middle" font-weight="600">${t('diagram.searching')}</text>`;

        const arrY = 200;
        for (let i = 0; i < 5; i++) {
            const ax = 150 + i * 140;
            const isTarget = i === 2;
            s += `<rect x="${ax}" y="${arrY}" width="120" height="50" rx="6"
                  fill="${isTarget ? 'rgba(59,130,246,0.2)' : '#1e293b'}" stroke="${isTarget ? '#3b82f6' : '#475569'}" stroke-width="${isTarget ? 2 : 1}"/>`;
            const types = ['Reserved', 'LoaderData', 'BsData', 'RtData', 'Conv'];
            s += `<text x="${ax + 60}" y="${arrY + 20}" fill="${isTarget ? '#3b82f6' : '#94a3b8'}" font-size="10" text-anchor="middle" font-weight="${isTarget ? '600' : '400'}">${types[i]}</text>`;
            s += `<text x="${ax + 60}" y="${arrY + 38}" fill="#64748b" font-size="9" text-anchor="middle">mPoolHead[${i}]</text>`;
        }
        s += `<text x="430" y="${arrY - 10}" fill="#f59e0b" font-size="11" text-anchor="middle">↓ ${t('policy.selected')}</text>`;
    }
    if (stepIndex === 4) {
        s += `<path d="M ${dataX + 10} ${pageY + pageH + 15} L ${dataX + 10} ${pageY + pageH + 5}" stroke="#22c55e" stroke-width="3" marker-end="url(#pool-arrow)"/>`;
        s += `<text x="${dataX + dataW/2}" y="${pageY + pageH + 35}" fill="#22c55e" font-size="13" text-anchor="middle" font-weight="600">
            ✓ *Buffer = &Head->Data[0]</text>`;
        s += `<text x="${dataX + dataW/2}" y="${pageY + pageH + 55}" fill="#94a3b8" font-size="11" text-anchor="middle">EFI_SUCCESS</text>`;
    }

    svg.innerHTML = s;
}

// ============================================
// Boot Timeline Visualization (Section 6)
// ============================================

function getTimelinePhases() {
    return {
        sec: {
            entries: [
                { type: 'Reserved', start: 0, size: 10, color: '#ef4444' },
                { type: 'T-RAM (Cache-as-RAM)', start: 10, size: 5, color: '#f59e0b' },
                { type: 'Uninitialized', start: 15, size: 85, color: '#475569' }
            ]
        },
        pei: {
            entries: [
                { type: 'Reserved', start: 0, size: 10, color: '#ef4444' },
                { type: 'PEI Core', start: 10, size: 5, color: '#3b82f6' },
                { type: 'PEI Heap', start: 15, size: 8, color: '#06b6d4' },
                { type: 'Conventional', start: 23, size: 57, color: '#22c55e' },
                { type: 'MMIO', start: 80, size: 10, color: '#f59e0b' },
                { type: 'Reserved', start: 90, size: 10, color: '#ef4444' }
            ]
        },
        dxe: {
            entries: [
                { type: 'Reserved', start: 0, size: 6, color: '#ef4444' },
                { type: 'BsCode', start: 6, size: 8, color: '#3b82f6' },
                { type: 'BsData', start: 14, size: 10, color: '#60a5fa' },
                { type: 'RtCode', start: 24, size: 5, color: '#a855f7' },
                { type: 'RtData', start: 29, size: 4, color: '#c084fc' },
                { type: 'Conventional', start: 33, size: 37, color: '#22c55e' },
                { type: 'ACPI NVS', start: 70, size: 5, color: '#14b8a6' },
                { type: 'MMIO', start: 75, size: 15, color: '#f59e0b' },
                { type: 'Reserved', start: 90, size: 10, color: '#ef4444' }
            ]
        },
        bds: {
            entries: [
                { type: 'Reserved', start: 0, size: 6, color: '#ef4444' },
                { type: 'BsCode', start: 6, size: 10, color: '#3b82f6' },
                { type: 'BsData', start: 16, size: 12, color: '#60a5fa' },
                { type: 'LoaderCode', start: 28, size: 4, color: '#f97316' },
                { type: 'RtCode', start: 32, size: 5, color: '#a855f7' },
                { type: 'RtData', start: 37, size: 4, color: '#c084fc' },
                { type: 'Conventional', start: 41, size: 24, color: '#22c55e' },
                { type: 'ACPI Reclaim', start: 65, size: 3, color: '#2dd4bf' },
                { type: 'ACPI NVS', start: 68, size: 7, color: '#14b8a6' },
                { type: 'MMIO', start: 75, size: 15, color: '#f59e0b' },
                { type: 'Reserved', start: 90, size: 10, color: '#ef4444' }
            ]
        },
        exit: {
            entries: [
                { type: 'Reserved', start: 0, size: 6, color: '#ef4444' },
                { type: 'Conventional', start: 6, size: 26, color: '#22c55e' },
                { type: 'RtCode', start: 32, size: 5, color: '#a855f7' },
                { type: 'RtData', start: 37, size: 4, color: '#c084fc' },
                { type: 'Conventional', start: 41, size: 24, color: '#22c55e' },
                { type: 'ACPI NVS', start: 65, size: 10, color: '#14b8a6' },
                { type: 'MMIO', start: 75, size: 15, color: '#f59e0b' },
                { type: 'Reserved', start: 90, size: 10, color: '#ef4444' }
            ]
        },
        os: {
            entries: [
                { type: 'Reserved', start: 0, size: 6, color: '#ef4444' },
                { type: 'OS Managed', start: 6, size: 26, color: '#22c55e' },
                { type: 'RtCode', start: 32, size: 5, color: '#a855f7' },
                { type: 'RtData', start: 37, size: 4, color: '#c084fc' },
                { type: 'OS Managed', start: 41, size: 24, color: '#22c55e' },
                { type: 'ACPI NVS', start: 65, size: 10, color: '#14b8a6' },
                { type: 'MMIO', start: 75, size: 15, color: '#f59e0b' },
                { type: 'Reserved', start: 90, size: 10, color: '#ef4444' }
            ]
        }
    };
}

function initTimelineVisualization() {
    const phases = document.querySelectorAll('.timeline-phase');
    if (!phases.length) return;

    phases.forEach(btn => {
        btn.addEventListener('click', () => {
            phases.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderTimelineMap(btn.dataset.phase);
        });
    });

    renderTimelineMap('sec');
}

function renderTimelineMap(phase) {
    const svg = document.getElementById('timeline-svg');
    if (!svg) return;
    const data = getTimelinePhases()[phase];
    if (!data) return;

    const barY = 40, barH = 60, barX = 50, barW = 800;
    let s = '';

    s += `<text x="${barX + barW/2}" y="25" fill="#94a3b8" font-size="13" text-anchor="middle" font-weight="600">${phase.toUpperCase()} Phase Memory Map</text>`;

    data.entries.forEach(entry => {
        const x = barX + (entry.start / 100) * barW;
        const w = (entry.size / 100) * barW;
        s += `<rect x="${x}" y="${barY}" width="${w}" height="${barH}" fill="${entry.color}" opacity="0.7" stroke="#0f172a" stroke-width="1"/>`;
        if (w > 50) {
            s += `<text x="${x + w/2}" y="${barY + barH/2 - 5}" fill="white" font-size="10" text-anchor="middle" font-weight="600">${entry.type}</text>`;
            s += `<text x="${x + w/2}" y="${barY + barH/2 + 12}" fill="rgba(255,255,255,0.7)" font-size="9" text-anchor="middle">${entry.size}%</text>`;
        }
    });

    s += `<text x="${barX}" y="${barY + barH + 20}" fill="#64748b" font-size="9">0x00000000</text>`;
    s += `<text x="${barX + barW}" y="${barY + barH + 20}" fill="#64748b" font-size="9" text-anchor="end">0xFFFFFFFF</text>`;
    s += `<text x="${barX + barW/2}" y="${barY + barH + 20}" fill="#64748b" font-size="9" text-anchor="middle">Address Space</text>`;

    const legendTypes = [...new Set(data.entries.map(e => e.type))];
    const legendY = barY + barH + 40;
    legendTypes.forEach((type, i) => {
        const lx = barX + (i % 5) * 170;
        const ly = legendY + Math.floor(i / 5) * 20;
        const entry = data.entries.find(e => e.type === type);
        s += `<rect x="${lx}" y="${ly}" width="12" height="12" rx="2" fill="${entry.color}" opacity="0.7"/>`;
        s += `<text x="${lx + 18}" y="${ly + 10}" fill="#94a3b8" font-size="10">${type}</text>`;
    });

    svg.innerHTML = s;
}

// ============================================
// S4 Resume Memory Map (Section 7)
// ============================================

function getS4Phases() {
    return {
        wake: {
            entries: [
                { type: 'Reserved', start: 0, size: 5, color: '#ef4444' },
                { type: 'ACPI NVS', start: 5, size: 15, color: '#14b8a6' },
                { type: 'LoaderCode', start: 20, size: 10, color: '#f97316' },
                { type: 'MMIO', start: 30, size: 10, color: '#f59e0b' },
                { type: 'Uninitialized', start: 40, size: 60, color: '#475569' }
            ]
        },
        firmware: {
            entries: [
                { type: 'Reserved', start: 0, size: 5, color: '#ef4444' },
                { type: 'ACPI NVS', start: 5, size: 15, color: '#14b8a6' },
                { type: 'BsCode', start: 20, size: 12, color: '#3b82f6' },
                { type: 'BsData', start: 32, size: 12, color: '#60a5fa' },
                { type: 'MMIO', start: 44, size: 12, color: '#f59e0b' },
                { type: 'Conventional', start: 56, size: 39, color: '#22c55e' }
            ]
        },
        remap: {
            entries: [
                { type: 'Reserved', start: 0, size: 5, color: '#ef4444' },
                { type: 'ACPI NVS', start: 5, size: 15, color: '#14b8a6' },
                { type: 'RtCode', start: 20, size: 8, color: '#a855f7' },
                { type: 'RtData', start: 28, size: 8, color: '#c084fc' },
                { type: 'BsCode', start: 36, size: 8, color: '#3b82f6' },
                { type: 'BsData', start: 44, size: 8, color: '#60a5fa' },
                { type: 'MMIO', start: 52, size: 12, color: '#f59e0b' },
                { type: 'Conventional', start: 64, size: 36, color: '#22c55e' }
            ]
        },
        handoff: {
            entries: [
                { type: 'Reserved', start: 0, size: 7, color: '#ef4444' },
                { type: 'ACPI NVS', start: 7, size: 15, color: '#14b8a6' },
                { type: 'RtCode', start: 22, size: 8, color: '#a855f7' },
                { type: 'RtData', start: 30, size: 8, color: '#c084fc' },
                { type: 'OS Managed', start: 38, size: 50, color: '#22c55e' },
                { type: 'MMIO', start: 88, size: 12, color: '#f59e0b' }
            ]
        }
    };
}

function initS4ResumeVisualization() {
    const phases = document.querySelectorAll('.timeline-bar.s4 .timeline-phase');
    if (!phases.length) return;

    phases.forEach(btn => {
        btn.addEventListener('click', () => {
            phases.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderS4Map(btn.dataset.s4phase);
        });
    });

    renderS4Map('wake');
}

function renderS4Map(phase) {
    const svg = document.getElementById('s4-svg');
    if (!svg) return;
    const data = getS4Phases()[phase];
    if (!data) return;

    const barY = 40, barH = 60, barX = 50, barW = 800;
    let s = '';

    const phaseLabel = (phase || '').toUpperCase();
    s += `<text x="${barX + barW/2}" y="25" fill="#94a3b8" font-size="13" text-anchor="middle" font-weight="600">S4 ${phaseLabel} Memory Map</text>`;

    data.entries.forEach(entry => {
        const x = barX + (entry.start / 100) * barW;
        const w = (entry.size / 100) * barW;
        s += `<rect x="${x}" y="${barY}" width="${w}" height="${barH}" fill="${entry.color}" opacity="0.7" stroke="#0f172a" stroke-width="1"/>`;
        if (w > 50) {
            s += `<text x="${x + w/2}" y="${barY + barH/2 - 5}" fill="white" font-size="10" text-anchor="middle" font-weight="600">${entry.type}</text>`;
            s += `<text x="${x + w/2}" y="${barY + barH/2 + 12}" fill="rgba(255,255,255,0.7)" font-size="9" text-anchor="middle">${entry.size}%</text>`;
        }
    });

    s += `<text x="${barX}" y="${barY + barH + 20}" fill="#64748b" font-size="9">0x00000000</text>`;
    s += `<text x="${barX + barW}" y="${barY + barH + 20}" fill="#64748b" font-size="9" text-anchor="end">0xFFFFFFFF</text>`;
    s += `<text x="${barX + barW/2}" y="${barY + barH + 20}" fill="#64748b" font-size="9" text-anchor="middle">Address Space</text>`;

    const legendTypes = [...new Set(data.entries.map(e => e.type))];
    const legendY = barY + barH + 40;
    legendTypes.forEach((type, i) => {
        const lx = barX + (i % 5) * 170;
        const ly = legendY + Math.floor(i / 5) * 20;
        const entry = data.entries.find(e => e.type === type);
        s += `<rect x="${lx}" y="${ly}" width="12" height="12" rx="2" fill="${entry.color}" opacity="0.7"/>`;
        s += `<text x="${lx + 18}" y="${ly + 10}" fill="#94a3b8" font-size="10">${type}</text>`;
    });

    svg.innerHTML = s;
}

// ============================================
// Policy Comparator (Section 7)
// ============================================

function getPolicyMemoryLayout() {
    return [
        { type: 'BsData', pages: 8, color: '#3b82f6', bgColor: 'rgba(59,130,246,0.2)' },
        { type: 'Conventional', pages: 6, color: '#22c55e', bgColor: 'rgba(34,197,94,0.15)' },
        { type: 'BsData', pages: 4, color: '#3b82f6', bgColor: 'rgba(59,130,246,0.2)' },
        { type: 'Conventional', pages: 4, color: '#22c55e', bgColor: 'rgba(34,197,94,0.15)' },
        { type: 'RtData', pages: 6, color: '#a855f7', bgColor: 'rgba(168,85,247,0.15)' },
        { type: 'Conventional', pages: 12, color: '#22c55e', bgColor: 'rgba(34,197,94,0.15)' },
        { type: 'BsData', pages: 3, color: '#3b82f6', bgColor: 'rgba(59,130,246,0.2)' },
        { type: 'Conventional', pages: 8, color: '#22c55e', bgColor: 'rgba(34,197,94,0.15)' }
    ];
}

function initPolicyComparator() {
    const buttons = document.querySelectorAll('.policy-btn');
    if (!buttons.length) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPolicyDiagram(btn.dataset.policy);
        });
    });

    renderPolicyDiagram('first-fit');
}

function renderPolicyDiagram(policy) {
    const svg = document.getElementById('policy-svg');
    const resultEl = document.getElementById('policy-result');
    if (!svg) return;

    const layout = getPolicyMemoryLayout();
    const requestPages = 4;
    const totalPages = layout.reduce((sum, b) => sum + b.pages, 0);
    const barX = 50, barY = 50, barW = 800, barH = 80;

    let s = '';
    let selectedIdx = -1;

    const convBlocks = layout.map((b, i) => ({ ...b, idx: i })).filter(b => b.type === 'Conventional' && b.pages >= requestPages);

    if (policy === 'first-fit') {
        selectedIdx = convBlocks.length > 0 ? convBlocks[0].idx : -1;
    } else if (policy === 'best-fit') {
        if (convBlocks.length > 0) {
            convBlocks.sort((a, b) => a.pages - b.pages);
            selectedIdx = convBlocks[0].idx;
        }
    } else if (policy === 'next-fit') {
        const startIdx = 3;
        for (let i = 0; i < layout.length; i++) {
            const idx = (startIdx + i) % layout.length;
            if (layout[idx].type === 'Conventional' && layout[idx].pages >= requestPages) {
                selectedIdx = idx;
                break;
            }
        }
    }

    let currentX = barX;
    layout.forEach((block, idx) => {
        const w = (block.pages / totalPages) * barW;
        const isSelected = idx === selectedIdx;
        const isConvSmall = block.type === 'Conventional' && block.pages < requestPages;
        let strokeW = isSelected ? 3 : 2;
        let extra = isSelected ? `style="filter: drop-shadow(0 0 12px ${block.color})"` : '';

        s += `<g ${extra}>`;
        s += `<rect x="${currentX}" y="${barY}" width="${w}" height="${barH}" rx="4"
              fill="${block.bgColor}" stroke="${block.color}" stroke-width="${strokeW}"
              ${isConvSmall ? 'stroke-dasharray="4,3"' : ''}/>`;

        if (w > 30) {
            s += `<text x="${currentX + w/2}" y="${barY + 25}" fill="${block.color}" font-size="10" text-anchor="middle" font-weight="600">${block.type}</text>`;
            s += `<text x="${currentX + w/2}" y="${barY + 45}" fill="#94a3b8" font-size="10" text-anchor="middle">${block.pages} ${t('frag.pages')}</text>`;
        }

        if (block.type === 'Conventional') {
            if (isSelected) {
                s += `<text x="${currentX + w/2}" y="${barY + barH + 20}" fill="#22c55e" font-size="10" text-anchor="middle" font-weight="600">✓ ${t('policy.selected')}</text>`;
            } else if (block.pages < requestPages) {
                s += `<text x="${currentX + w/2}" y="${barY + barH + 20}" fill="#ef4444" font-size="9" text-anchor="middle">✗ too small</text>`;
            } else {
                s += `<text x="${currentX + w/2}" y="${barY + barH + 20}" fill="#64748b" font-size="9" text-anchor="middle">${t('policy.skipped')}</text>`;
            }
        }

        s += `</g>`;
        currentX += w;
    });

    s += `<text x="${barX + barW/2}" y="30" fill="#f59e0b" font-size="13" text-anchor="middle" font-weight="600">${policy.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} — ${t('policy.request')}</text>`;

    if (policy === 'next-fit') {
        s += `<text x="${barX}" y="${barY + barH + 50}" fill="#f59e0b" font-size="10">Start ↓ index 3</text>`;
    }

    svg.innerHTML = s;

    if (resultEl) {
        const selectedBlock = selectedIdx >= 0 ? layout[selectedIdx] : null;
        if (selectedBlock) {
            const waste = selectedBlock.pages - requestPages;
            resultEl.innerHTML = `<strong>${policy.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</strong>: ` +
                `${t('policy.selected')} block #${selectedIdx + 1} (${selectedBlock.pages} ${t('frag.pages')}) — ` +
                `${t('policy.fragAfter')} ${waste} ${t('frag.pages')} internal waste`;
        } else {
            resultEl.textContent = 'No suitable block found.';
        }
    }
}

// ============================================
// Fragmentation Heatmap (Section 8)
// ============================================

let fragMemory = [];
let fragOps = 0;
let fragAllocId = 0;

function initFragmentationHeatmap() {
    const allocBtn = document.getElementById('frag-allocate');
    const freeBtn = document.getElementById('frag-free');
    const resetBtn = document.getElementById('frag-reset');

    if (!allocBtn || !freeBtn || !resetBtn) return;

    allocBtn.addEventListener('click', fragAllocate);
    freeBtn.addEventListener('click', fragFree);
    resetBtn.addEventListener('click', fragReset);

    fragReset();
}

function fragReset() {
    fragMemory = [{ type: 'free', size: 64, id: 0 }];
    fragOps = 0;
    fragAllocId = 1;
    renderFragHeatmap();
}

function fragAllocate() {
    const sizes = [2, 4, 6, 8];
    const size = sizes[Math.floor(Math.random() * sizes.length)];

    for (let i = 0; i < fragMemory.length; i++) {
        if (fragMemory[i].type === 'free' && fragMemory[i].size >= size) {
            const remaining = fragMemory[i].size - size;
            const newBlock = { type: 'alloc', size: size, id: fragAllocId++ };
            if (remaining > 0) {
                fragMemory.splice(i, 1, newBlock, { type: 'free', size: remaining, id: 0 });
            } else {
                fragMemory.splice(i, 1, newBlock);
            }
            fragOps++;
            renderFragHeatmap();
            return;
        }
    }
    fragOps++;
    renderFragHeatmap();
}

function fragFree() {
    const allocBlocks = fragMemory.filter(b => b.type === 'alloc');
    if (allocBlocks.length === 0) return;

    const target = allocBlocks[Math.floor(Math.random() * allocBlocks.length)];
    const idx = fragMemory.indexOf(target);
    fragMemory[idx] = { type: 'free', size: target.size, id: 0 };

    for (let i = fragMemory.length - 1; i > 0; i--) {
        if (fragMemory[i].type === 'free' && fragMemory[i - 1].type === 'free') {
            fragMemory[i - 1].size += fragMemory[i].size;
            fragMemory.splice(i, 1);
        }
    }

    fragOps++;
    renderFragHeatmap();
}

function renderFragHeatmap() {
    const svg = document.getElementById('frag-svg');
    if (!svg) return;

    const totalSize = fragMemory.reduce((s, b) => s + b.size, 0);
    const barX = 10, barY = 20, barW = 880, barH = 70;
    let s = '';
    let currentX = barX;

    const allocColors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f97316', '#06b6d4', '#84cc16'];

    fragMemory.forEach(block => {
        const w = (block.size / totalSize) * barW;
        if (block.type === 'free') {
            s += `<rect x="${currentX}" y="${barY}" width="${w}" height="${barH}" rx="3"
                  fill="rgba(34,197,94,0.15)" stroke="#22c55e" stroke-width="1"/>`;
            if (w > 20) {
                s += `<text x="${currentX + w/2}" y="${barY + barH/2 + 4}" fill="#22c55e" font-size="${w > 40 ? 10 : 8}" text-anchor="middle">${block.size}</text>`;
            }
        } else {
            const color = allocColors[block.id % allocColors.length];
            s += `<rect x="${currentX}" y="${barY}" width="${w}" height="${barH}" rx="3"
                  fill="${color}" opacity="0.6" stroke="${color}" stroke-width="1"/>`;
            if (w > 20) {
                s += `<text x="${currentX + w/2}" y="${barY + barH/2 + 4}" fill="white" font-size="${w > 40 ? 10 : 8}" text-anchor="middle">${block.size}</text>`;
            }
        }
        currentX += w;
    });

    svg.innerHTML = s;

    const freeBlocks = fragMemory.filter(b => b.type === 'free');
    const totalFree = freeBlocks.reduce((s, b) => s + b.size, 0);
    const largestFree = freeBlocks.length > 0 ? Math.max(...freeBlocks.map(b => b.size)) : 0;
    const fragRatio = totalFree > 0 ? Math.round((1 - largestFree / totalFree) * 100) : 0;

    const el = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
    el('frag-free-blocks', freeBlocks.length);
    el('frag-largest-free', largestFree + ' ' + t('frag.pages'));
    el('frag-ratio', fragRatio + '%');
    el('frag-total-free', totalFree + ' ' + t('frag.pages'));
    el('frag-ops', fragOps);
}

// ============================================
// Runtime Handoff Visualization (Section 9)
// ============================================

function initRuntimeHandoff() {
    renderHandoffDiagram();
}

function renderHandoffDiagram() {
    const beforeSvg = document.getElementById('handoff-before-svg');
    const afterSvg = document.getElementById('handoff-after-svg');
    if (!beforeSvg || !afterSvg) return;

    const beforeEntries = [
        { type: 'Reserved', color: '#ef4444', size: 8 },
        { type: 'BsCode', color: '#3b82f6', size: 12 },
        { type: 'BsData', color: '#60a5fa', size: 15 },
        { type: 'RtCode', color: '#a855f7', size: 8 },
        { type: 'RtData', color: '#c084fc', size: 6 },
        { type: 'Conventional', color: '#22c55e', size: 25 },
        { type: 'ACPI Reclaim', color: '#2dd4bf', size: 5 },
        { type: 'ACPI NVS', color: '#14b8a6', size: 8 },
        { type: 'MMIO', color: '#f59e0b', size: 13 }
    ];

    const afterEntries = [
        { type: 'Reserved', color: '#ef4444', size: 8 },
        { type: 'Conventional', color: '#22c55e', size: 27, note: t('handoff.reclaimed') },
        { type: 'RtCode', color: '#a855f7', size: 8, note: t('handoff.survives') },
        { type: 'RtData', color: '#c084fc', size: 6, note: t('handoff.survives') },
        { type: 'Conventional', color: '#22c55e', size: 25 },
        { type: 'Conventional', color: '#22c55e', size: 5, note: t('handoff.reclaimed') },
        { type: 'ACPI NVS', color: '#14b8a6', size: 8, note: t('handoff.survives') },
        { type: 'MMIO', color: '#f59e0b', size: 13 }
    ];

    function renderVerticalMap(svg, entries) {
        const total = entries.reduce((s, e) => s + e.size, 0);
        const mapX = 20, mapW = 360, mapY = 10, mapH = 370;
        let s = '';
        let currentY = mapY;

        entries.forEach(entry => {
            const h = (entry.size / total) * mapH;
            s += `<rect x="${mapX}" y="${currentY}" width="${mapW}" height="${h}"
                  fill="${entry.color}" opacity="0.5" stroke="#0f172a" stroke-width="1"/>`;
            if (h > 18) {
                s += `<text x="${mapX + 10}" y="${currentY + h/2 + 4}" fill="white" font-size="10" font-weight="600">${entry.type}</text>`;
                s += `<text x="${mapX + mapW - 10}" y="${currentY + h/2 + 4}" fill="rgba(255,255,255,0.7)" font-size="9" text-anchor="end">${entry.size}%</text>`;
            }
            if (entry.note && h > 14) {
                s += `<text x="${mapX + mapW/2}" y="${currentY + h/2 + 16}" fill="rgba(255,255,255,0.6)" font-size="8" text-anchor="middle" font-style="italic">${entry.note}</text>`;
            }
            currentY += h;
        });

        svg.innerHTML = s;
    }

    renderVerticalMap(beforeSvg, beforeEntries);
    renderVerticalMap(afterSvg, afterEntries);
}

// ============================================
// Code-to-Visual Linking (Feature 6)
// ============================================

function initCodeLinking() {
    document.querySelectorAll('[data-highlight]').forEach(el => {
        el.classList.add('code-highlight-link');
        el.addEventListener('mouseenter', () => {
            const targetId = el.dataset.highlight;
            const svgEl = document.querySelector(`[data-link-id="${targetId}"]`);
            if (svgEl) svgEl.classList.add('svg-linked-highlight');
        });
        el.addEventListener('mouseleave', () => {
            document.querySelectorAll('.svg-linked-highlight').forEach(e => e.classList.remove('svg-linked-highlight'));
        });
    });
}

// ============================================
// Export Toolbar (Feature 7)
// ============================================

function initExportToolbar() {
    const toggleBtn = document.getElementById('export-toggle');
    const dropdown = document.getElementById('export-dropdown');
    const svgBtn = document.getElementById('export-svg');
    const pngBtn = document.getElementById('export-png');

    if (!toggleBtn || !dropdown) return;

    toggleBtn.addEventListener('click', () => {
        dropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.export-toolbar')) {
            dropdown.classList.add('hidden');
        }
    });

    if (svgBtn) {
        svgBtn.addEventListener('click', () => {
            const svgEl = findVisibleSvg();
            if (!svgEl) return;

            navigator.clipboard.writeText(svgEl.outerHTML).then(() => {
                svgBtn.textContent = t('export.copied');
                setTimeout(() => { svgBtn.textContent = t('export.copySvg'); }, 2000);
            });
            dropdown.classList.add('hidden');
        });
    }

    if (pngBtn) {
        pngBtn.addEventListener('click', () => {
            const svgEl = findVisibleSvg();
            if (!svgEl) return;

            const svgData = new XMLSerializer().serializeToString(svgEl);
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();

            const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
            const url = URL.createObjectURL(svgBlob);

            img.onload = function () {
                canvas.width = img.width * 2;
                canvas.height = img.height * 2;
                ctx.scale(2, 2);
                ctx.drawImage(img, 0, 0);
                URL.revokeObjectURL(url);

                const pngUrl = canvas.toDataURL('image/png');
                const link = document.createElement('a');
                link.download = 'uefi-memory-viz.png';
                link.href = pngUrl;
                link.click();
            };
            img.src = url;
            dropdown.classList.add('hidden');
        });
    }
}

function findVisibleSvg() {
    const svgs = document.querySelectorAll('svg[id]');
    for (const svg of svgs) {
        const rect = svg.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0 && rect.width > 100) {
            return svg;
        }
    }
    return svgs[0] || null;
}
