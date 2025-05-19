<template>
  <div class="grid grid-rows-[auto_1fr] min-h-screen">
    <LayoutHeader />

    <main class="bg-slate-100">
      <div class="container">
        <slot />
      </div>
    </main>
  </div>
</template>
