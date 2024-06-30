<template>
  <footer class="w-full">
    <div class="container mx-auto border-t pt-20">
      <div class="w-full flex items-center justify-center">
        <nuxt-link to="/">
          <img src="/meem-logo.svg" alt="meem logo" />
        </nuxt-link>
      </div>

      <ul class="flex items-center justify-center gap-6 mt-5 flex-wrap">
        <li class="text-secondary-black text-body">
          <nuxt-link to="/">الصفحة الرئيسية</nuxt-link>
        </li>
        <li class="text-secondary-black text-body">عن المنصة</li>
        <li class="text-secondary-black text-body">الاسئلة الشائعة</li>
        <li class="text-secondary-black text-body">الشروط والاحكام</li>
        <li class="text-secondary-black text-body">اتصل بنا</li>
      </ul>
    </div>
    <div
      class="flex w-[80%] mx-auto items-center justify-between my-10 flex-wrap gap-5"
    >
      <p class="text-[13px] text-secondary-black">
        جميع الحقوق محفوظة لدى منصة ميم التعليمية
      </p>

      <div class="text-[13px] text-secondary-black flex items-center gap-2">
        <img src="/elreyad.svg" alt="elreyad logo" />
        <p>تصميم شركة الرياض</p>
      </div>
    </div>
  </footer>
</template>
