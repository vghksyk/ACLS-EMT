# EMT Code Leader v2.2

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


## v2.2 Training access

- EMT-1、EMT-2、EMT-P 都保留完整 **ACLS Mega Code** 與 **ECG Rhythm Lab**。
- Mega Code 內的 advanced drugs、manual defibrillation、synchronized cardioversion、TCP、ETT 等按鈕是 **ACLS knowledge / exam answers**。
- 臨床操作頁仍依 EMT level 隱藏超出 scope 的處置，因此「會考」與「現場可執行」分開呈現。
