<template>
  <div>
    <div
      class="flex items-center bg-white justify-center shadow-navbar h-[103px]"
    >
      <div class="container flex items-center justify-between">
        <!-- logo -->
        <nuxt-link to="/">
          <img height="66" width="140" src="/meem-logo.svg" alt="مييم لوجو" />
        </nuxt-link>

        <div class="flex items-center gap-5">
          <!-- nav list -->
          <ul class="flex items-center gap-5 sm:flex nav-list">
            <li><nuxt-link to="/">الرئيسية</nuxt-link></li>
            <li>الدورات</li>
            <li>الرخصة المهنية</li>
            <li>حاسبة النقاط</li>
            <li>االمتجر</li>
          </ul>

          <!-- actions -->
          <ul class="flex items-center gap-5 nav-actions">
            <li class="relative">
              <nuxt-link to="/cart">
                <img src="/fi-rr-shopping-cart.svg" alt="shopping cart icon" />
                <div
                  class="w-[18px] h-[18px] bg-second-yellow rounded-full flex items-center justify-center absolute -top-2 -right-2"
                >
                  <span class="text-[11px] text-main text-center">
                    {{ cartIems?.length }}</span
                  >
                </div>
              </nuxt-link>
            </li>
            <li><img src="/fi-rs-bell.svg" alt="notification icon" /></li>
            <li><img src="/fi-rr-search.svg" alt="search icon" /></li>
            <li class="flex items-center gap-1">
              <span class="text-main text-body">English</span>
              <img src="/fi-rr-globe.svg" alt="user icon" />
            </li>
            <li class="flex items-center gap-2">
              <img src="/avatar.png" alt="user image" />
              <span class="text-small">عبدالله عبدالمجيد</span>
            </li>
          </ul>

          <!-- toggle -->
          <div @click="toggleNav" class="nav-toggle hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
            >
              <path
                d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"
              ></path>
            </svg>
          </div>

          <!-- responsive nav  -->
          <div
            @click.self="toggleNav"
            v-if="navOpen"
            class="fixed top-0 left-0 z-10 w-full h-full"
          >
            <!-- overlay -->
            <div
              @click="toggleNav"
              class="fixed top-0 left-0 w-full h-full bg-black opacity-50"
            ></div>

            <div class="fixed top-0 left-0 z-20 w-[80%] h-full bg-white p-5">
              <nuxt-link to="/">
                <img
                  height="66"
                  width="140"
                  src="/meem-logo.svg"
                  alt="مييم لوجو"
                />
              </nuxt-link>
              <ul class="flex flex-col gap-2 mt-5 ms-5">
                <li>
                  <nuxt-link to="/" @click="toggleNav">الرئيسية</nuxt-link>
                </li>
                <li>الدورات</li>
                <li>الرخصة المهنية</li>
                <li>حاسبة النقاط</li>
                <li>االمتجر</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cartStore = useCartStore();

const cartIems = computed(() => cartStore.cartItems);

const navOpen = ref(false);

const toggleNav = () => {
  navOpen.value = !navOpen.value;
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 998px) {
  .nav-list {
    display: none;
  }
  .nav-toggle {
    display: block;
  }
}
@media screen and (max-width: 768px) {
  .nav-actions {
    display: none;
  }
}
</style>
