# EMT Code Leader v2.4

純 EMT 版成人急救 cognitive aid / training prototype，提供三種層級切換：**EMT-1 / EMT-2 / EMT-P**。

## Scope design

依台灣現行《救護技術員管理辦法》（2025-01-01 起施行）做預設視圖：

- **EMT-1**：BLS、生命徵象 / SpO₂、O₂、OPA/NPA、suction、ECG / 12-lead、AED、blood glucose 等基礎項目。
- **EMT-2**：包含 EMT-1，另顯示 peripheral IV、指定輸液相關 scope、SGA、EtCO₂。
- **EMT-P**：包含 EMT-2；依預立醫療流程 / medical direction 顯示 advanced medication、ETT、manual defibrillation / cardioversion、TCP 等進階功能。

地方主管機關核定的擴充救護項目仍以所在地 protocol / medical direction 為準；本工具不是全國統一預立醫療流程，也不是醫療指令。

## Main modules

- Cardiac Arrest / CPR / AED or manual defibrillation by EMT level
- Bradycardia with pulse
- Tachyarrhythmia with pulse
- ACLS Mega Code simulator（EMT-1 / EMT-2 / EMT-P 全部可使用）
- ECG Rhythm Lab
- ROSC / Transport / pre-alert / handoff
- Local timeline, CSV export, share and summary
- PWA / offline support

公開署名：**奇美加護醫學部專科護理師 洪苡瑾**


## v2.3.1 Training access

- EMT-1、EMT-2、EMT-P 都保留完整 **ACLS Mega Code** 與 **ECG Rhythm Lab**。
- Mega Code 內的 advanced drugs、manual defibrillation、synchronized cardioversion、TCP、ETT 等按鈕是 **ACLS knowledge / exam answers**。
- 臨床操作頁仍依 EMT level 隱藏超出 scope 的處置，因此「會考」與「現場可執行」分開呈現。


## v2.3.1 navigation fix
- Restored main tab click handlers for Arrest / Brady / Tachy / Mega Code / ECG Lab / ROSC.
- Verified every inline onclick handler resolves to an existing JavaScript function.


## v2.3.1 Scope-aware field update
- EMT-1: blood glucose + oral glucose; no peripheral IV / SGA / ETT / manual defib / advanced IV drugs in field UI.
- EMT-2: peripheral IV + injectable glucose solution / Lactated Ringer’s / 0.9% N/S; SGA + EtCO2; no ETT.
- EMT-P: advanced drugs / ETT / manual shock / TCP only when authorized by local preplanned medical protocol / medical direction.
- Added clickable human IV-site map (L/R AC, forearm, hand), IV gauge, fluid/dose logging, and CSV fields.
- Reversible causes use `suspected -> scope action / escalation`, not `treated`.
- EMT-P medication panel explicitly labels amiodarone/lidocaine/NaHCO3/MgSO4 as protocol-dependent; NaHCO3 is special-circumstance only, MgSO4 is tagged for TdP/long-QT contexts.


## v2.3.1 tab/cache fix
- Restored robust navigation for Brady / Tachy / Mega Code / ECG Lab / ROSC across EMT-1, EMT-2, EMT-P.
- Tabs use direct onclick plus delegated fallback handler.
- Removed legacy logic that redirected EMT-1/2 away from Mega Code.
- PWA navigation changed to network-first with stale EMT cache cleanup.
- `index-v231.html` is included as a one-time cache-bypass entry point for old GitHub/PWA installations.


## v2.4 — Patient Vitals
- Added universal Initial / Latest Vitals panel visible across Arrest, Brady, Tachy, Mega Code, ECG Lab and ROSC/Transport.
- HR, BP, RR, SpO2, blood glucose, GCS and temperature can be time-stamped as Initial vitals and serial Reassessment.
- Latest values remain visible; first observed values are retained as Initial values.
- Blood glucose recorded from EMT scope panels also updates the Latest Vitals display.
- CSV now includes structured vital-sign columns and Initial/Latest vitals are included in copied summaries.
