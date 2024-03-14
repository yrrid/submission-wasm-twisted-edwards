/***

Copyright (c) 2023-2024, Yrrid Software, Inc.  All rights reserved.
Licensed under the Apache License, Version 2.0, see LICENSE for details.

Author(s):  Niall Emmart

***/

void thread_fence() {
  __atomic_thread_fence(__ATOMIC_SEQ_CST);
}

uint32_t atomic_add(uint32_t* address, uint32_t amount) {
  return __atomic_fetch_add(address, amount, __ATOMIC_ACQ_REL);
}

uint32_t atomic_or(uint32_t* address, uint32_t amount) {
  return __atomic_fetch_or(address, amount, __ATOMIC_ACQ_REL);
}

uint32_t atomic_and(uint32_t* address, uint32_t amount) {
  return __atomic_fetch_and(address, amount, __ATOMIC_ACQ_REL);
}
