/* i18n (Chinese only) - baked in, EN version removed */
const translations = { 'zh-TW': {
    "page.title": "EDK2 BIOS 編譯流程視覺化",
    "nav.back": "← 回工具列表",
    "nav.title": "EDK2 Build Infrastructure",
    "nav.overview": "檔案類型",
    "nav.pipeline": "編譯管線",
    "nav.journey": "單檔追蹤",
    "nav.command": "建置命令",
    "nav.references": "參考來源",
    "hero.eyebrow": "從原始檔到可燒錄的 BIOS ROM",
    "hero.title": "你的 INF / DSC / FDF 如何變成 BIOS ROM",
    "hero.desc": "你寫下一個 .inf、.dsc 或 .fdf，build.exe 會呼叫一系列程式對它進行解析、編譯、組裝，最後產生可燒錄的 .fd（BIOS ROM）。點選下方任一檔案類型，追蹤它的完整旅程。",
    "file.inf.title": "模組描述檔 (.inf)",
    "file.inf.desc": "定義模組的來源檔、相依套件、Library Classes、PCD 與模組類型。每個 UEFI 模組（Driver/Library/Application）都有一個 INF。",
    "file.inf.track": "追蹤 INF 路徑 →",
    "file.dsc.title": "平台描述檔 (.dsc)",
    "file.dsc.desc": "定義整個平台要建置哪些模組、Library Class 的對應關係、PCD 值與建置選項。是 build.exe 的主要入口（-p 參數）。",
    "file.dsc.track": "追蹤 DSC 路徑 →",
    "file.fdf.title": "映像佈局檔 (.fdf)",
    "file.fdf.desc": "定義最終 BIOS ROM 的 Flash 佈局：哪些模組放進哪個 FV、FD 各區段大小與位置、Capsule 組成規則。",
    "file.fdf.track": "追蹤 FDF 路徑 →",
    "pipeline.title": "編譯管線：build.exe 呼叫了哪些程式",
    "pipeline.desc": "從你執行 build 指令到產生 BIOS ROM，以下是每支被呼叫的程式及其職責。點擊任一節點查看詳細說明。",
    "pipeline.clickHint": "點擊節點查看詳細說明",
    "pipeline.stage.input": "輸入檔案",
    "pipeline.stage.autogen": "AutoGen 解析階段",
    "pipeline.stage.make": "MAKE 編譯階段",
    "pipeline.stage.imagegen": "ImageGen 組裝階段",
    "pipeline.stage.output": "BIOS ROM",
    "pipeline.detail.title": "程式詳細說明",
    "pipeline.detail.placeholder": "← 點擊管線上任一程式節點",
    "pipeline.detail.input": "輸入",
    "pipeline.detail.output": "輸出",
    "pipeline.detail.desc": "說明",
    "tool.build.name": "build.exe",
    "tool.build.desc": "BaseTools 主要入口程式，負責讀取 target.txt 與命令列參數，決定要建置的平台/模組/架構，然後依序驅動 AutoGen、MAKE、ImageGen 三個階段。",
    "tool.build.input": "target.txt、命令列參數 (-p/-m/-a/-b/-t)",
    "tool.build.output": "呼叫 AutoGen、MAKE、GenFds 的完整建置流程",
    "tool.dscparser.name": "DscParser",
    "tool.dscparser.desc": "解析平台 DSC 檔案，讀取 [Defines]、[LibraryClasses]、[Components]、[PcdsFixedAtBuild] 等所有區段，建立平台模組清單與 PCD 政策。",
    "tool.dscparser.input": "*.dsc 平台描述檔",
    "tool.dscparser.output": "模組清單、Library Class 對應表、平台 PCD 值",
    "tool.infparser.name": "InfParser",
    "tool.infparser.desc": "解析每個模組的 INF 檔案，讀取 [Sources]、[Packages]、[LibraryClasses]、[Pcd]、[BuildOptions] 等區段，建立模組的相依圖。",
    "tool.infparser.input": "*.inf 模組描述檔",
    "tool.infparser.output": "模組來源檔清單、Library 相依、PCD 引用",
    "tool.decparser.name": "DecParser",
    "tool.decparser.desc": "解析套件宣告 DEC 檔，讀取 [Includes]、[Guids]、[Protocols]、[Ppis]、[PcdsFixedAtBuild] 等區段，提供全域 GUID/Protocol 定義與 PCD 預設值。",
    "tool.decparser.input": "*.dec 套件宣告檔",
    "tool.decparser.output": "Include 路徑、GUID/Protocol/PPI 表、PCD 預設值",
    "tool.fdfparser.name": "FdfParser",
    "tool.fdfparser.desc": "解析 FDF 的 Flash 佈局定義，讀取 [FD]、[FV]、[Capsule]、[Rule] 等區段，並解析條件式指令（!if/!ifdef），建立最終的 FV/FD 組裝計畫。",
    "tool.fdfparser.input": "*.fdf Flash 佈局檔",
    "tool.fdfparser.output": "FD/FV 佈局計畫、FFS 排列順序、條件式結果",
    "tool.autogen.name": "AutoGen",
    "tool.autogen.desc": "根據前面解析結果，遞迴解析 Library instance、套用 PCD 優先序（CLI > DSC > FDF > INF > DEC），產生每個模組的 AutoGen.c / AutoGen.h（包含 GUID 陣列、入口函式宣告、PCD 存取函式），並產生模組與平台層級的 Makefile。",
    "tool.autogen.input": "DscParser/InfParser/DecParser/FdfParser 的解析結果",
    "tool.autogen.output": "AutoGen.c、AutoGen.h、模組 Makefile、平台 Makefile、AsBuilt INF",
    "tool.make.name": "nmake / make",
    "tool.make.desc": "Make 工具讀取 AutoGen 產生的 Makefile，依相依性順序呼叫編譯器（CC）、組譯器（ASM）、資源編譯器（VFR/UNI）等工具，最後呼叫連結器產生 PE/COFF 映像。",
    "tool.make.input": "AutoGen.c/h + 原始碼 (.c/.asm/.vfr) + Makefile",
    "tool.make.output": "*.obj、*.lib、PE/COFF 模組映像",
    "tool.compiler.name": "CC (gcc/cl.exe)",
    "tool.compiler.desc": "實際執行 C 原始碼編譯的工具，由 tools_def.txt 指定。GCC5 使用 gcc，VS2022 使用 cl.exe，CLANGPDB 使用 clang。編譯旗標由 DSC 的 [BuildOptions] 與 tools_def.txt 共同決定。",
    "tool.compiler.input": "*.c 原始檔、AutoGen.c/h、標頭檔",
    "tool.compiler.output": "*.obj 目的檔",
    "tool.linker.name": "Linker (ld/link.exe)",
    "tool.linker.desc": "把所有 .obj 與 .lib 連結成 PE32/PE32+ 格式的執行檔，依 MODULE_TYPE 選擇適當的連結腳本與起始位址。",
    "tool.linker.input": "*.obj、*.lib、連結腳本",
    "tool.linker.output": "PE32/PE32+ 執行檔（含重定位表）",
    "tool.genfw.name": "GenFw",
    "tool.genfw.desc": "把標準 PE32/PE32+ 執行檔轉換為 UEFI 使用的 .efi 格式，主要工作包含：去除不必要的 section、調整重定位資訊、依 MODULE_TYPE 設定映像類型（TE/PE32）。",
    "tool.genfw.input": "PE32/PE32+ 執行檔",
    "tool.genfw.output": "*.efi（或 TE 格式）UEFI 模組映像",
    "tool.gensec.name": "GenSec",
    "tool.gensec.desc": "把 .efi 或其他二進位包裝成 FFS Section，依 FDF Rule 指定的 SectionType（PE32/COMPRESS/UI/VERSION/RAW 等）加上對應的 section header。壓縮型 section 會在此進行 LZ77 或 LZMA 壓縮。",
    "tool.gensec.input": "*.efi 或其他二進位",
    "tool.gensec.output": "*.sec EFI Section（含 section header）",
    "tool.genffs.name": "GenFfs",
    "tool.genffs.desc": "把一個或多個 Section 封裝成一個 FFS File，加上 EFI_FFS_FILE_HEADER，包含模組的 GUID、檔案類型（PEIM/DXE/APP 等）、屬性與大小資訊。",
    "tool.genffs.input": "*.sec Section 檔（一個或多個）",
    "tool.genffs.output": "*.ffs FFS File（含 FFS header）",
    "tool.genfv.name": "GenFv",
    "tool.genfv.desc": "讀取 FDF [FV] 區段產生的 FV INF 設定檔，把所有指定的 .ffs 按照對齊要求排列到 FV 映像中，加上 EFI_FIRMWARE_VOLUME_HEADER 與 BlockMap，最後輸出完整的 .fv 映像檔。",
    "tool.genfv.input": "FV INF 設定、*.ffs 清單",
    "tool.genfv.output": "*.fv Firmware Volume 映像",
    "tool.genfds.name": "GenFds",
    "tool.genfds.desc": "ImageGen 階段的總指揮。讀取 FDF 所有區段，依序呼叫 GenSec/GenFfs/GenFv 產生 FV，然後根據 [FD] 把各 FV 與 raw 區域（如 NVRAM/microcode）組裝成最終的 .fd Flash 裝置映像——這就是 BIOS ROM。",
    "tool.genfds.input": "FDF 佈局、所有模組的 .efi、FV 清單",
    "tool.genfds.output": "*.fd 最終 BIOS ROM 映像",
    "journey.title": "單檔追蹤：選擇你要追蹤的檔案",
    "journey.desc": "選擇 INF、DSC 或 FDF，查看該檔案從被讀取、解析、轉換到最終成為 BIOS ROM 的每一個步驟與對應程式。",
    "journey.tab.inf": ".inf 模組描述",
    "journey.tab.dsc": ".dsc 平台描述",
    "journey.tab.fdf": ".fdf 映像佈局",
    "journey.inf.title": "INF 的旅程：從模組描述到 BIOS ROM",
    "journey.inf.s1.title": "DSC 找到這個 INF",
    "journey.inf.s1.program": "build.exe + DscParser",
    "journey.inf.s1.desc": "build.exe 讀取 -p 指定的 DSC，DscParser 解析 [Components] 區段，找到這個 INF 的路徑，將它加入模組建置清單。",
    "journey.inf.s1.artifact": "DSC [Components] 條目",
    "journey.inf.s2.title": "InfParser 解析 INF 內容",
    "journey.inf.s2.program": "InfParser",
    "journey.inf.s2.desc": "讀取 [Defines]（MODULE_TYPE、ENTRY_POINT）、[Sources]（.c/.h 檔案）、[Packages]（相依 DEC）、[LibraryClasses]（Library 需求）、[Pcd]（使用的 PCD）、[BuildOptions]（額外編譯旗標）。",
    "journey.inf.s2.artifact": "模組相依圖、來源清單",
    "journey.inf.s3.title": "AutoGen 產生黏合程式碼",
    "journey.inf.s3.program": "AutoGen",
    "journey.inf.s3.desc": "解析 LibraryClass 相依（遞迴），套用 PCD 優先序。為此 INF 產生 AutoGen.c（GUID 陣列、ModuleEntryPoint 轉接、PCD 存取器）與 AutoGen.h（ExternLibrary 宣告）。產生模組 Makefile。",
    "journey.inf.s3.artifact": "AutoGen.c / AutoGen.h / Makefile",
    "journey.inf.s4.title": "CC 編譯所有 .c 原始檔",
    "journey.inf.s4.program": "nmake → CC (gcc/cl.exe)",
    "journey.inf.s4.desc": "nmake/make 依 Makefile 呼叫 CC，把 [Sources] 中每個 .c 及 AutoGen.c 編譯成 .obj，套用 tools_def.txt 與 [BuildOptions] 的旗標。",
    "journey.inf.s4.artifact": "*.obj 目的檔",
    "journey.inf.s5.title": "Linker 連結成 PE/COFF",
    "journey.inf.s5.program": "Linker (ld/link.exe)",
    "journey.inf.s5.desc": "把所有 .obj 和解析到的 Library .lib 連結成 PE32/PE32+ 格式執行檔，包含重定位表，供 UEFI 執行環境使用。",
    "journey.inf.s5.artifact": "PE32/PE32+ 執行檔",
    "journey.inf.s6.title": "GenFw 轉換為 .efi",
    "journey.inf.s6.program": "GenFw",
    "journey.inf.s6.desc": "把 PE32 轉換成 UEFI 需要的 .efi 格式（或 TE 格式用於 PEI 階段），移除不必要資訊、調整重定位。",
    "journey.inf.s6.artifact": "*.efi 模組映像",
    "journey.inf.s7.title": "GenSec 封裝成 Section",
    "journey.inf.s7.program": "GenSec",
    "journey.inf.s7.desc": "根據 FDF Rule 定義，把 .efi 包成 PE32 Section，可選擇性壓縮（COMPRESS Section），加上 EFI_SECTION_HEADER。",
    "journey.inf.s7.artifact": "*.sec EFI Section",
    "journey.inf.s8.title": "GenFfs 封裝成 FFS File",
    "journey.inf.s8.program": "GenFfs",
    "journey.inf.s8.desc": "把 section 打包成 FFS File，加上包含此模組 GUID 的 EFI_FFS_FILE_HEADER，指定檔案類型（PEIM/DXE Driver/Application 等）。",
    "journey.inf.s8.artifact": "*.ffs FFS 檔案",
    "journey.inf.s9.title": "GenFv / GenFds 組裝進 ROM",
    "journey.inf.s9.program": "GenFv → GenFds",
    "journey.inf.s9.desc": ".ffs 依 FDF [FV] 規則被 GenFv 組入 Firmware Volume，再由 GenFds 依 [FD] 把所有 FV 與 raw 區域組成最終 .fd BIOS ROM。",
    "journey.inf.s9.artifact": "*.fd BIOS ROM",
    "journey.dsc.title": "DSC 的旅程：從平台策略到 BIOS ROM",
    "journey.dsc.s1.title": "build.exe 讀取 DSC 作為入口",
    "journey.dsc.s1.program": "build.exe",
    "journey.dsc.s1.desc": "build -p xxx.dsc 指定此 DSC 為平台入口。build.exe 讀取 target.txt 決定 ARCH/TARGET/TOOL_CHAIN_TAG，然後把 DSC 傳給 DscParser。",
    "journey.dsc.s1.artifact": "ActivePlatform 上下文",
    "journey.dsc.s2.title": "DscParser 解析所有區段",
    "journey.dsc.s2.program": "DscParser",
    "journey.dsc.s2.desc": "逐一解析 [Defines]（PLATFORM_NAME、OUTPUT_DIRECTORY、FLASH_DEFINITION）、[LibraryClasses]（Library 實作對應）、[Components]（要建置的模組清單）、[PcdsFixedAtBuild/PcdsPatchableInModule/PcdsDynamic]（PCD 值）。",
    "journey.dsc.s2.artifact": "模組清單、Library 對應表、PCD 值表",
    "journey.dsc.s3.title": "DSC 中的 Library 對應被套用",
    "journey.dsc.s3.program": "AutoGen",
    "journey.dsc.s3.desc": "AutoGen 依照 DSC [LibraryClasses] 的對應關係，為每個模組解析出實際使用的 Library .inf，遞迴解析直到所有 Library 都確定。",
    "journey.dsc.s3.artifact": "每個模組完整的 Library 相依圖",
    "journey.dsc.s4.title": "DSC PCD 值注入 AutoGen",
    "journey.dsc.s4.program": "AutoGen",
    "journey.dsc.s4.desc": "AutoGen 套用 PCD 優先序：命令列 > DSC > FDF > INF > DEC。DSC 中定義的 PCD 值會覆寫 INF/DEC 預設值，並被寫入 AutoGen.c 中的 PCD 存取函式。",
    "journey.dsc.s4.artifact": "AutoGen.c 中的 PCD 值",
    "journey.dsc.s5.title": "平台 Makefile 驅動所有模組",
    "journey.dsc.s5.program": "AutoGen → nmake/make",
    "journey.dsc.s5.desc": "AutoGen 產生平台層級 Makefile，其中列出所有來自 [Components] 的模組 Makefile。nmake/make 依相依順序逐一建置每個模組，每個模組走 INF 路徑的 S4→S6。",
    "journey.dsc.s5.artifact": "所有模組的 *.efi",
    "journey.dsc.s6.title": "DSC 指定的 FDF 啟動 ImageGen",
    "journey.dsc.s6.program": "build.exe → GenFds",
    "journey.dsc.s6.desc": "DSC [Defines] 的 FLASH_DEFINITION 指向 FDF 路徑。build 的 fds 目標觸發 GenFds，GenFds 讀取 FDF 並協調 GenSec/GenFfs/GenFv 把所有 .efi 組裝成 BIOS ROM。",
    "journey.dsc.s6.artifact": "*.fd BIOS ROM",
    "journey.fdf.title": "FDF 的旅程：從 Flash 佈局到 BIOS ROM",
    "journey.fdf.s1.title": "DSC 透過 FLASH_DEFINITION 指向 FDF",
    "journey.fdf.s1.program": "DscParser",
    "journey.fdf.s1.desc": "DscParser 在 DSC [Defines] 中讀到 FLASH_DEFINITION = xxx.fdf，記錄 FDF 路徑。也可用 build -f 命令列覆寫 FDF 路徑。",
    "journey.fdf.s1.artifact": "FDF 路徑參考",
    "journey.fdf.s2.title": "FdfParser 解析 Flash 佈局",
    "journey.fdf.s2.program": "FdfParser",
    "journey.fdf.s2.desc": "解析所有 FDF 區段：[FD] 定義整個 Flash 裝置大小與各 Region；[FV] 定義每個 Firmware Volume 的大小、屬性與包含哪些 FFS；[Rule] 定義模組包裝規則；[Capsule] 定義更新包。支援條件式指令（!if/!ifdef/!include）。",
    "journey.fdf.s2.artifact": "FD/FV/Rule/Capsule 佈局物件",
    "journey.fdf.s3.title": "FDF [FV] 觸發 FFS 封裝",
    "journey.fdf.s3.program": "GenFds → GenSec → GenFfs",
    "journey.fdf.s3.desc": "對 [FV] 中每個 INF 條目，GenFds 找到對應的 .efi，根據 [Rule] 呼叫 GenSec 封裝 section（選擇性壓縮），再呼叫 GenFfs 封裝成 FFS File，GUID 來自 INF [Defines] 的 FILE_GUID。",
    "journey.fdf.s3.artifact": "每個模組的 *.ffs",
    "journey.fdf.s4.title": "FDF [FV] 觸發 FV 組裝",
    "journey.fdf.s4.program": "GenFv",
    "journey.fdf.s4.desc": "GenFds 為每個 [FV] 區段產生 FV INF（設定檔），呼叫 GenFv 把所有 .ffs 按對齊需求排列到 Firmware Volume 映像中，加上 EFI_FIRMWARE_VOLUME_HEADER 與 BlockMap，填充空白區域。",
    "journey.fdf.s4.artifact": "*.fv Firmware Volume",
    "journey.fdf.s5.title": "FDF [FD] 組裝最終 BIOS ROM",
    "journey.fdf.s5.program": "GenFds",
    "journey.fdf.s5.desc": "GenFds 依照 [FD] 定義把所有 FV 映像與非 FV 的 raw 資料（NVRAM 區域、microcode、VTF）依偏移量排列到最終 .fd 映像中，大小符合實體 Flash 晶片容量。",
    "journey.fdf.s5.artifact": "*.fd 最終 BIOS ROM",
    "command.title": "建置命令組裝器",
    "command.desc": "快速組合 build 命令，並對照它在管線中的作用。",
    "command.platform": "平台 DSC",
    "command.arch": "架構",
    "command.target": "建置目標",
    "command.toolchain": "工具鏈 Tag",
    "command.mode": "建置模式",
    "command.modePlatform": "整平台",
    "command.modeModule": "單模組",
    "command.modulePath": "模組 INF",
    "command.fdfPath": "FDF 覆寫",
    "command.useFdf": "啟用 -f（覆寫 DSC 中的 FDF）",
    "command.fdsTarget": "附加 fds 目標（觸發 GenFds ImageGen）",
    "command.generated": "產生的命令：",
    "command.notesTitle": "這些參數對應管線的哪裡",
    "command.note1": "-p 指定 DSC → 觸發 DscParser，決定要建置的所有模組與 Library 對應。",
    "command.note2": "-a/-b/-t 決定架構/目標/工具鏈 → 影響 tools_def.txt 中 CC/Linker 的選擇。",
    "command.note3": "-f 覆寫 FDF 路徑 → 影響 FdfParser 讀取的檔案，進而改變 GenFds 的組裝方式。",
    "command.note4": "-m 進入單模組建置，跳過其他 [Components]，只執行該 INF 的完整路徑。",
    "references.title": "本頁參考的官方 EDK2 文檔",
    "references.desc": "以下章節是本視覺化內容的主要依據。",
    "references.r1": "定義三大階段：AutoGen、MAKE、ImageGen。",
    "references.r2": "說明 DSC/FDF/INF/DEC 解析、Library/PCD 優先序與 AutoGen 輸出。",
    "references.r3": "描述 .efi 到 section/FFS/FV/FD 的 ImageGen 路徑。",
    "references.r4": "列出 GenFds 與其子工具：GenSec、GenFfs、GenFv、GenFw、GenVtf。",
    "references.r5": "說明 FDF [FV] 如何驅動 FV 組裝與 GenFv 輸入。",
    "references.r6": "提供 build.exe 實務參數（-p/-m/-a/-b/-t/-f/-D/--pcd）。",
    "footer.text": "EDK2 BIOS 編譯流程視覺化 | 教學用途"
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

/* ── Pipeline Data ── */

const PIPELINE_TOOLS = [
    {
        id: 'build',
        nameKey: 'tool.build.name',
        descKey: 'tool.build.desc',
        inputKey: 'tool.build.input',
        outputKey: 'tool.build.output',
        stage: 'entry',
        x: 113, y: 190, w: 110, h: 44
    },
    {
        id: 'dscparser',
        nameKey: 'tool.dscparser.name',
        descKey: 'tool.dscparser.desc',
        inputKey: 'tool.dscparser.input',
        outputKey: 'tool.dscparser.output',
        stage: 'autogen',
        x: 253, y: 62, w: 100, h: 42
    },
    {
        id: 'infparser',
        nameKey: 'tool.infparser.name',
        descKey: 'tool.infparser.desc',
        inputKey: 'tool.infparser.input',
        outputKey: 'tool.infparser.output',
        stage: 'autogen',
        x: 253, y: 118, w: 100, h: 42
    },
    {
        id: 'decparser',
        nameKey: 'tool.decparser.name',
        descKey: 'tool.decparser.desc',
        inputKey: 'tool.decparser.input',
        outputKey: 'tool.decparser.output',
        stage: 'autogen',
        x: 361, y: 62, w: 100, h: 42
    },
    {
        id: 'fdfparser',
        nameKey: 'tool.fdfparser.name',
        descKey: 'tool.fdfparser.desc',
        inputKey: 'tool.fdfparser.input',
        outputKey: 'tool.fdfparser.output',
        stage: 'autogen',
        x: 361, y: 118, w: 100, h: 42
    },
    {
        id: 'autogen',
        nameKey: 'tool.autogen.name',
        descKey: 'tool.autogen.desc',
        inputKey: 'tool.autogen.input',
        outputKey: 'tool.autogen.output',
        stage: 'autogen',
        x: 253, y: 192, w: 208, h: 42
    },
    {
        id: 'make',
        nameKey: 'tool.make.name',
        descKey: 'tool.make.desc',
        inputKey: 'tool.make.input',
        outputKey: 'tool.make.output',
        stage: 'make',
        x: 495, y: 62, w: 202, h: 42
    },
    {
        id: 'compiler',
        nameKey: 'tool.compiler.name',
        descKey: 'tool.compiler.desc',
        inputKey: 'tool.compiler.input',
        outputKey: 'tool.compiler.output',
        stage: 'make',
        x: 495, y: 130, w: 93, h: 42
    },
    {
        id: 'linker',
        nameKey: 'tool.linker.name',
        descKey: 'tool.linker.desc',
        inputKey: 'tool.linker.input',
        outputKey: 'tool.linker.output',
        stage: 'make',
        x: 596, y: 130, w: 96, h: 42
    },
    {
        id: 'genfw',
        nameKey: 'tool.genfw.name',
        descKey: 'tool.genfw.desc',
        inputKey: 'tool.genfw.input',
        outputKey: 'tool.genfw.output',
        stage: 'make',
        x: 495, y: 198, w: 202, h: 42
    },
    {
        id: 'gensec',
        nameKey: 'tool.gensec.name',
        descKey: 'tool.gensec.desc',
        inputKey: 'tool.gensec.input',
        outputKey: 'tool.gensec.output',
        stage: 'imagegen',
        x: 728, y: 62, w: 108, h: 42
    },
    {
        id: 'genffs',
        nameKey: 'tool.genffs.name',
        descKey: 'tool.genffs.desc',
        inputKey: 'tool.genffs.input',
        outputKey: 'tool.genffs.output',
        stage: 'imagegen',
        x: 728, y: 118, w: 108, h: 42
    },
    {
        id: 'genfv',
        nameKey: 'tool.genfv.name',
        descKey: 'tool.genfv.desc',
        inputKey: 'tool.genfv.input',
        outputKey: 'tool.genfv.output',
        stage: 'imagegen',
        x: 844, y: 62, w: 108, h: 42
    },
    {
        id: 'genfds',
        nameKey: 'tool.genfds.name',
        descKey: 'tool.genfds.desc',
        inputKey: 'tool.genfds.input',
        outputKey: 'tool.genfds.output',
        stage: 'imagegen',
        x: 728, y: 192, w: 224, h: 42
    }
];

const STAGE_REGIONS = [
    { id: 'autogen', labelKey: 'pipeline.stage.autogen', x: 246, y: 28, w: 222, h: 256 },
    { id: 'make',    labelKey: 'pipeline.stage.make',    x: 488, y: 28, w: 216, h: 256 },
    { id: 'imagegen',labelKey: 'pipeline.stage.imagegen',x: 720, y: 28, w: 260, h: 256 }
];

/* ── Journey Data ── */

const JOURNEY_STEPS = {
    inf: [
        { titleKey: 'journey.inf.s1.title', programKey: 'journey.inf.s1.program', descKey: 'journey.inf.s1.desc', artifactKey: 'journey.inf.s1.artifact' },
        { titleKey: 'journey.inf.s2.title', programKey: 'journey.inf.s2.program', descKey: 'journey.inf.s2.desc', artifactKey: 'journey.inf.s2.artifact' },
        { titleKey: 'journey.inf.s3.title', programKey: 'journey.inf.s3.program', descKey: 'journey.inf.s3.desc', artifactKey: 'journey.inf.s3.artifact' },
        { titleKey: 'journey.inf.s4.title', programKey: 'journey.inf.s4.program', descKey: 'journey.inf.s4.desc', artifactKey: 'journey.inf.s4.artifact' },
        { titleKey: 'journey.inf.s5.title', programKey: 'journey.inf.s5.program', descKey: 'journey.inf.s5.desc', artifactKey: 'journey.inf.s5.artifact' },
        { titleKey: 'journey.inf.s6.title', programKey: 'journey.inf.s6.program', descKey: 'journey.inf.s6.desc', artifactKey: 'journey.inf.s6.artifact' },
        { titleKey: 'journey.inf.s7.title', programKey: 'journey.inf.s7.program', descKey: 'journey.inf.s7.desc', artifactKey: 'journey.inf.s7.artifact' },
        { titleKey: 'journey.inf.s8.title', programKey: 'journey.inf.s8.program', descKey: 'journey.inf.s8.desc', artifactKey: 'journey.inf.s8.artifact' },
        { titleKey: 'journey.inf.s9.title', programKey: 'journey.inf.s9.program', descKey: 'journey.inf.s9.desc', artifactKey: 'journey.inf.s9.artifact' }
    ],
    dsc: [
        { titleKey: 'journey.dsc.s1.title', programKey: 'journey.dsc.s1.program', descKey: 'journey.dsc.s1.desc', artifactKey: 'journey.dsc.s1.artifact' },
        { titleKey: 'journey.dsc.s2.title', programKey: 'journey.dsc.s2.program', descKey: 'journey.dsc.s2.desc', artifactKey: 'journey.dsc.s2.artifact' },
        { titleKey: 'journey.dsc.s3.title', programKey: 'journey.dsc.s3.program', descKey: 'journey.dsc.s3.desc', artifactKey: 'journey.dsc.s3.artifact' },
        { titleKey: 'journey.dsc.s4.title', programKey: 'journey.dsc.s4.program', descKey: 'journey.dsc.s4.desc', artifactKey: 'journey.dsc.s4.artifact' },
        { titleKey: 'journey.dsc.s5.title', programKey: 'journey.dsc.s5.program', descKey: 'journey.dsc.s5.desc', artifactKey: 'journey.dsc.s5.artifact' },
        { titleKey: 'journey.dsc.s6.title', programKey: 'journey.dsc.s6.program', descKey: 'journey.dsc.s6.desc', artifactKey: 'journey.dsc.s6.artifact' }
    ],
    fdf: [
        { titleKey: 'journey.fdf.s1.title', programKey: 'journey.fdf.s1.program', descKey: 'journey.fdf.s1.desc', artifactKey: 'journey.fdf.s1.artifact' },
        { titleKey: 'journey.fdf.s2.title', programKey: 'journey.fdf.s2.program', descKey: 'journey.fdf.s2.desc', artifactKey: 'journey.fdf.s2.artifact' },
        { titleKey: 'journey.fdf.s3.title', programKey: 'journey.fdf.s3.program', descKey: 'journey.fdf.s3.desc', artifactKey: 'journey.fdf.s3.artifact' },
        { titleKey: 'journey.fdf.s4.title', programKey: 'journey.fdf.s4.program', descKey: 'journey.fdf.s4.desc', artifactKey: 'journey.fdf.s4.artifact' },
        { titleKey: 'journey.fdf.s5.title', programKey: 'journey.fdf.s5.program', descKey: 'journey.fdf.s5.desc', artifactKey: 'journey.fdf.s5.artifact' }
    ]
};

/* ── State ── */

let activeToolId = null;
let activeJourneyTab = 'inf';

/* ── Utilities ── */

function escapeXml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/* ── Pipeline SVG ── */

function renderPipelineSVG() {
    const svg = document.getElementById('pipeline-svg');
    if (!svg) return;

    let html = `<defs>
        <marker id="parrow" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 z" fill="rgba(126,168,187,0.55)"></path>
        </marker>
    </defs>`;

    /* Stage background regions */
    STAGE_REGIONS.forEach(reg => {
        html += `<rect class="p-stage-bg" x="${reg.x}" y="${reg.y}" width="${reg.w}" height="${reg.h}" rx="10"></rect>`;
        html += `<text class="p-stage-label" x="${reg.x + reg.w / 2}" y="${reg.y + 17}">${escapeXml(t(reg.labelKey))}</text>`;
    });

    /* Input endpoint: x=10 to x=96 */
    html += `
        <rect class="p-endpoint-rect" x="10" y="182" width="92" height="56" rx="10"></rect>
        <text class="p-endpoint-text" x="56" y="207">${escapeXml(t('pipeline.stage.input'))}</text>
        <text class="p-endpoint-text" style="fill:#53b7de;font-size:9px" x="56" y="222">.inf / .dsc / .fdf</text>
    `;

    /* Main flow arrows */
    /* Input → build.exe (96 → 111) */
    html += `<path class="p-arrow" marker-end="url(#parrow)" d="M102,210 L111,210"></path>`;
    /* build.exe → AutoGen stage (223 → 244) */
    html += `<path class="p-arrow" marker-end="url(#parrow)" d="M223,212 L244,212"></path>`;
    /* AutoGen → MAKE (468 → 486) */
    html += `<path class="p-arrow" marker-end="url(#parrow)" d="M469,156 L486,156"></path>`;
    /* MAKE → ImageGen (704 → 718) */
    html += `<path class="p-arrow" marker-end="url(#parrow)" d="M705,156 L718,156"></path>`;
    /* ImageGen → Output (981 → 998) */
    html += `<path class="p-arrow" marker-end="url(#parrow)" d="M981,212 L998,212"></path>`;

    /* Output endpoint: x=1000 to x=1088 */
    html += `
        <rect class="p-endpoint-rect" style="stroke:rgba(255,159,90,0.5)" x="1000" y="182" width="90" height="56" rx="10"></rect>
        <text class="p-endpoint-text" style="fill:#ff9f5a" x="1045" y="207">${escapeXml(t('pipeline.stage.output'))}</text>
        <text class="p-endpoint-text" style="fill:#ff9f5a;font-size:9px" x="1045" y="222">*.fd</text>
    `;

    /* Tool nodes */
    PIPELINE_TOOLS.forEach(tool => {
        const cx = tool.x + tool.w / 2;
        const cy = tool.y + tool.h / 2;
        const isActive = tool.id === activeToolId;
        const stageClass = `pnode-${tool.stage}`;
        const activeClass = isActive ? 'active' : '';

        html += `
            <g class="pnode-group ${stageClass}" data-tool="${tool.id}" style="cursor:pointer">
                <rect class="pnode-rect ${activeClass}" x="${tool.x}" y="${tool.y}" width="${tool.w}" height="${tool.h}" rx="8"></rect>
                <text class="pnode-text" x="${cx}" y="${cy - 3}">${escapeXml(t(tool.nameKey))}</text>
            </g>
        `;
    });

    svg.innerHTML = html;

    /* Attach click handlers after DOM insert */
    svg.querySelectorAll('.pnode-group').forEach(g => {
        g.addEventListener('click', () => {
            const toolId = g.dataset.tool;
            showToolDetail(toolId);
        });
    });
}

function showToolDetail(toolId) {
    const tool = PIPELINE_TOOLS.find(item => item.id === toolId);
    if (!tool) return;

    activeToolId = toolId;
    renderPipelineSVG();

    const placeholder = document.getElementById('detail-placeholder');
    const content = document.getElementById('detail-content');
    const nameEl = document.getElementById('detail-name');
    const descEl = document.getElementById('detail-desc');
    const inputEl = document.getElementById('detail-input');
    const outputEl = document.getElementById('detail-output');

    if (!placeholder || !content) return;

    placeholder.classList.add('hidden');
    content.classList.remove('hidden');

    nameEl.textContent = t(tool.nameKey);
    descEl.textContent = t(tool.descKey);
    inputEl.textContent = t(tool.inputKey);
    outputEl.textContent = t(tool.outputKey);
}

/* ── Journey Tabs & Timeline ── */

function renderJourneyTimeline(tab) {
    const container = document.getElementById('journey-content');
    if (!container) return;

    const steps = JOURNEY_STEPS[tab];
    if (!steps) return;

    const titleKey = `journey.${tab}.title`;

    let html = `<p class="journey-timeline-title">${escapeXml(t(titleKey))}</p>`;
    html += `<div class="timeline">`;

    steps.forEach((step, index) => {
        const isLast = index === steps.length - 1;
        html += `
            <div class="timeline-step" data-file="${tab}">
                <div class="step-number-col">
                    <div class="step-number">${index + 1}</div>
                    ${!isLast ? '<div class="step-line"></div>' : ''}
                </div>
                <div class="step-body">
                    <div class="step-header">
                        <span class="step-title">${escapeXml(t(step.titleKey))}</span>
                        <span class="step-program">${escapeXml(t(step.programKey))}</span>
                    </div>
                    <p class="step-desc">${escapeXml(t(step.descKey))}</p>
                    <span class="step-artifact">${escapeXml(t(step.artifactKey))}</span>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
}

function setActiveTab(tab) {
    activeJourneyTab = tab;

    document.querySelectorAll('.journey-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });

    renderJourneyTimeline(tab);
}

function initJourneyTabs() {
    document.querySelectorAll('.journey-tab').forEach(btn => {
        btn.addEventListener('click', () => setActiveTab(btn.dataset.tab));
    });

    document.querySelectorAll('.track-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            const journeySection = document.getElementById('journey');
            if (journeySection) {
                journeySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            setTimeout(() => setActiveTab(tab), 400);
        });
    });

    renderJourneyTimeline(activeJourneyTab);
}

/* ── Language change refresh ── */

function refreshDynamicContent() {
    renderPipelineSVG();
    renderJourneyTimeline(activeJourneyTab);
    if (activeToolId) {
        showToolDetail(activeToolId);
    }
}

/* ── Navigation ── */

function initNavigation() {
    const links = Array.from(document.querySelectorAll('.nav-link'));
    const sections = links
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    if ('IntersectionObserver' in window && sections.length > 0) {
        const observer = new IntersectionObserver(entries => {
            const visible = entries
                .filter(e => e.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (visible.length === 0) return;

            const currentId = visible[0].target.id;
            links.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
            });
        }, {
            rootMargin: '-35% 0px -55% 0px',
            threshold: [0.1, 0.25, 0.4, 0.6]
        });

        sections.forEach(section => observer.observe(section));
    }
}

/* ── Build Command Builder ── */

function updateBuildCommand() {
    const platform = document.getElementById('platform-input').value.trim();
    const arch = document.getElementById('arch-select').value;
    const target = document.getElementById('target-select').value;
    const toolchain = document.getElementById('toolchain-select').value;
    const mode = document.getElementById('mode-select').value;
    const modulePath = document.getElementById('module-input').value.trim();
    const fdfPath = document.getElementById('fdf-input').value.trim();
    const useFdf = document.getElementById('fdf-enable').checked;
    const addFds = document.getElementById('fds-enable').checked;

    const cmd = ['build'];

    if (platform) cmd.push(`-p ${platform}`);
    if (mode === 'module' && modulePath) cmd.push(`-m ${modulePath}`);
    cmd.push(`-a ${arch}`);
    cmd.push(`-b ${target}`);
    cmd.push(`-t ${toolchain}`);
    if (useFdf && fdfPath) cmd.push(`-f ${fdfPath}`);
    if (addFds) cmd.push('fds');

    const output = document.getElementById('build-command-output');
    if (output) {
        output.textContent = `${t('command.generated')}\n${cmd.join(' \\\n    ')}`;
    }
}

function initBuildCommandBuilder() {
    const modeSelect = document.getElementById('mode-select');
    const moduleField = document.getElementById('module-field');
    if (!modeSelect) return;

    const controls = [
        'platform-input', 'arch-select', 'target-select', 'toolchain-select',
        'mode-select', 'module-input', 'fdf-input', 'fdf-enable', 'fds-enable'
    ];

    modeSelect.addEventListener('change', () => {
        moduleField.classList.toggle('hidden', modeSelect.value !== 'module');
        updateBuildCommand();
    });

    controls.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const evt = (el.type === 'checkbox' || el.tagName === 'SELECT') ? 'change' : 'input';
        el.addEventListener(evt, updateBuildCommand);
    });

    moduleField.classList.toggle('hidden', modeSelect.value !== 'module');
    updateBuildCommand();
}

/* ── Init ── */

document.addEventListener('DOMContentLoaded', () => {
    initI18n();
    initNavigation();
    renderPipelineSVG();
    initJourneyTabs();
    initBuildCommandBuilder();
});
