initSidebarItems({"constant":[["PFAULT_ERROR_ID","/// 0: The fault was not caused by an instruction fetch. /// 1: The fault was caused by an instruction fetch."],["PFAULT_ERROR_P","/// 0: The fault was caused by a non-present page. /// 1: The fault was caused by a page-level protection violation"],["PFAULT_ERROR_RSVD","/// 0: The fault was not caused by reserved bit violation. /// 1: The fault was caused by reserved bits set to 1 in a page directory."],["PFAULT_ERROR_US","/// 0: The access causing the fault originated when the processor /// was executing in supervisor mode. /// 1: The access causing the fault originated when the processor /// was executing in user mode."],["PFAULT_ERROR_WR","/// 0: The access causing the fault was a read. /// 1: The access causing the fault was a write."]],"fn":[["disable","Disable Interrupts."],["enable","Enable Interrupts."]],"static":[["EXCEPTIONS","x86 External Interrupts (1-16)."]],"struct":[["IdtEntry","A struct describing an interrupt gate."],["InterruptDescription","x86 Exception description (see also Intel Vol. 3a Chapter 6)."],["PageFaultError",""]]});